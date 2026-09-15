/**
 * Crawlability and indexability audit over dist/.
 *
 * Crawlable and indexable are different failures and this checks both:
 *
 *   Crawlable  - a bot can reach the URL and get real HTML. Fails on orphan
 *                pages (in the sitemap but linked from nowhere), on robots.txt
 *                blocks, and on pages that serve an empty shell.
 *   Indexable  - a bot is allowed to keep it. Fails on noindex, on canonicals
 *                pointing somewhere else, and on near-empty content.
 *
 * A page can be perfectly crawlable and still never rank because it canonicals
 * away to another URL, which is why both are asserted separately.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');

const { SITE_URL } = await import(
  pathToFileURL(path.join(root, 'src', 'seo', 'siteConfig.js')).href
);
const { noindexRoutes } = await import(
  pathToFileURL(path.join(root, 'src', 'seo', 'routes.js')).href
);

// ---------------------------------------------------------------- collect
const pages = new Map(); // url path -> { file, html }

(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.name.endsWith('.html')) continue;
    if (/^google[0-9a-f]+\.html$/.test(entry.name)) continue; // GSC verification stubs

    const rel = path.relative(distDir, full).split(path.sep).join('/');
    let urlPath;
    if (rel === 'index.html') urlPath = '/';
    else if (rel === '404.html') urlPath = '/404';
    else urlPath = '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');

    pages.set(urlPath, { file: rel, html: fs.readFileSync(full, 'utf8') });
  }
})(distDir);

// ---------------------------------------------------------------- robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
const robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
const disallows = [...robots.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
const blockedBy = (urlPath) =>
  disallows.find((rule) => rule !== '/' && urlPath.startsWith(rule));

// ---------------------------------------------------------------- sitemap
const sitemapPath = path.join(distDir, 'sitemap.xml');
const sitemapXml = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const sitemapUrls = new Set(
  [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(SITE_URL, ''))
    .map((p) => (p === '' || p === '/' ? '/' : p.replace(/\/$/, '')))
);

// ---------------------------------------------------------------- link graph
const inboundLinks = new Map([...pages.keys()].map((k) => [k, new Set()]));

for (const [from, { html }] of pages) {
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  for (const raw of hrefs) {
    if (/\.(css|js|png|jpe?g|webp|svg|mp4|xml|txt|ico|woff2?)$/i.test(raw)) continue;
    const target = raw === '/' ? '/' : raw.replace(/\/$/, '');
    if (inboundLinks.has(target) && target !== from) inboundLinks.get(target).add(from);
  }
}

// ---------------------------------------------------------------- assess
const textOf = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const rows = [];
const problems = [];

for (const [urlPath, { file, html }] of [...pages].sort()) {
  const isNoindexRoute = noindexRoutes.includes(urlPath) || urlPath === '/404';

  const robotsMeta = (html.match(/<meta name="robots" content="([^"]*)"/i) || [])[1] || '';
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1] || '';
  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  const words = textOf(html).split(' ').filter(Boolean).length;
  const inbound = inboundLinks.get(urlPath).size;
  const inSitemap = sitemapUrls.has(urlPath);
  const blocked = blockedBy(urlPath);

  const declaredNoindex = /noindex/i.test(robotsMeta);
  const selfCanonical =
    canonical === `${SITE_URL}${urlPath === '/' ? '/' : urlPath}` ||
    (urlPath === '/' && canonical === `${SITE_URL}/`);

  const flag = (msg) => problems.push(`${urlPath}: ${msg}`);

  if (blocked) flag(`blocked by robots.txt rule "${blocked}"`);
  if (words < 120) flag(`only ${words} words of body text`);
  if (h1s !== 1) flag(`${h1s} h1 elements`);

  if (isNoindexRoute) {
    if (!declaredNoindex) flag('utility page is missing its noindex directive');
    if (inSitemap) flag('noindex page should not be in the sitemap');
  } else {
    if (declaredNoindex) flag('indexable page carries noindex');
    if (!canonical) flag('no canonical tag');
    else if (!selfCanonical) flag(`canonical points elsewhere: ${canonical}`);
    if (!inSitemap) flag('missing from sitemap.xml');
    if (inbound === 0) flag('orphan: no internal links point to it');
  }

  rows.push({
    urlPath,
    words,
    inbound,
    inSitemap,
    index: declaredNoindex ? 'noindex' : 'index',
    canonicalOk: isNoindexRoute ? '-' : selfCanonical ? 'self' : 'WRONG',
  });
}

// sitemap entries with no corresponding built page
for (const url of sitemapUrls) {
  if (!pages.has(url)) problems.push(`${url}: in sitemap.xml but no page was built`);
}

// ---------------------------------------------------------------- report
const group = (prefix) => rows.filter((r) => r.urlPath.startsWith(prefix));

console.log(`crawl audit against ${SITE_URL}`);
console.log(`pages built: ${rows.length}   sitemap URLs: ${sitemapUrls.size}\n`);

console.log('section                       pages   in sitemap   indexable   orphans');
const sections = [
  ['core', rows.filter((r) => !/^\/(solutions|industries|case-studies|insights)\//.test(r.urlPath) && !/-in-(kochi|kerala|kozhikode|trivandrum)$/.test(r.urlPath))],
  ['location landing pages', rows.filter((r) => /-in-(kochi|kerala|kozhikode|trivandrum)$/.test(r.urlPath))],
  ['solutions', group('/solutions/')],
  ['industries', group('/industries/')],
  ['case studies', group('/case-studies/')],
  ['insights', group('/insights/')],
];
for (const [name, list] of sections) {
  if (!list.length) continue;
  const inSm = list.filter((r) => r.inSitemap).length;
  const idx = list.filter((r) => r.index === 'index').length;
  const orph = list.filter((r) => r.inbound === 0 && r.index === 'index').length;
  console.log(
    `${name.padEnd(28)} ${String(list.length).padStart(5)}   ${String(inSm).padStart(10)}   ${String(idx).padStart(9)}   ${String(orph).padStart(7)}`
  );
}

const thin = rows.filter((r) => r.words < 300).sort((a, b) => a.words - b.words);
console.log(`\nthinnest pages by body text:`);
thin.slice(0, 5).forEach((r) => console.log(`  ${String(r.words).padStart(5)} words  ${r.urlPath}`));
const wordCounts = rows.map((r) => r.words).sort((a, b) => a - b);
console.log(`  median across all pages: ${wordCounts[Math.floor(wordCounts.length / 2)]} words`);

const leastLinked = rows.filter((r) => r.index === 'index').sort((a, b) => a.inbound - b.inbound);
console.log(`\nfewest inbound internal links:`);
leastLinked.slice(0, 5).forEach((r) => console.log(`  ${String(r.inbound).padStart(3)} links  ${r.urlPath}`));

console.log(`\nproblems: ${problems.length}`);
problems.slice(0, 40).forEach((p) => console.log(`  ${p}`));

process.exit(problems.length ? 1 : 0);
