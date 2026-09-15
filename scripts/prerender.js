/**
 * Prerenders every route to static HTML.
 *
 * Why this exists: the site is a client-rendered Vite SPA. Fetching any URL
 * returned `<div id="root"></div>` and nothing else, no copy, no headings, one
 * shared title for every page, and no canonical or JSON-LD until after hydration.
 * Google can execute JavaScript, but it does so on a slower second pass and
 * social/AI crawlers largely do not execute it at all.
 *
 * Run order (see package.json): vite build → vite build --ssr → this script.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const { render } = await import(pathToFileURL(serverEntry).href);
const { prerenderPaths } = await import(
  pathToFileURL(path.join(root, 'src', 'seo', 'routes.js')).href
);

// index.html carries build-time defaults (title, description, og:*). Helmet emits
// its own per-route versions, so strip the static ones or every page ships two.
const stripDuplicateHead = (html) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name="description"[^>]*>/gi, '')
    .replace(/\s*<meta\s+name="keywords"[^>]*>/gi, '')
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, '');

const outputPathFor = (route) => {
  if (route === '/') return path.join(distDir, 'index.html');
  if (route === '/404') return path.join(distDir, '404.html');
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
};

const baseTemplate = stripDuplicateHead(template);

let written = 0;
const failures = [];

for (const route of prerenderPaths) {
  try {
    const { html, head, htmlAttributes } = render(route);

    let page = baseTemplate
      .replace('</head>', `    ${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (htmlAttributes) {
      page = page.replace(/<html[^>]*>/i, `<html ${htmlAttributes}>`);
    }

    const outFile = outputPathFor(route);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, page, 'utf8');
    written += 1;
  } catch (error) {
    failures.push({ route, message: error.message });
  }
}

console.log(`prerender: wrote ${written}/${prerenderPaths.length} routes`);

if (failures.length) {
  console.error(`prerender: ${failures.length} route(s) failed`);
  for (const failure of failures) {
    console.error(`  ${failure.route}, ${failure.message}`);
  }
  // Fail the build. A silently half-prerendered deploy is worse than no deploy:
  // the broken routes look fine in a browser and are invisible to crawlers.
  process.exit(1);
}
