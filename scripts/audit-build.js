/**
 * Post-build SEO assertion over dist/.
 *
 * Guards the failures this project actually had: missing head tags, duplicate
 * titles across pages, more than one H1, and canonicals pointing at a domain
 * Infynix does not own. Run after `npm run build`.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');

const { SITE_URL } = await import(
  pathToFileURL(path.join(root, 'src', 'seo', 'siteConfig.js')).href
);

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    // Google Search Console verification files are bare text stubs by design.
    else if (entry.name.endsWith('.html') && !/^google[0-9a-f]+\.html$/.test(entry.name)) {
      files.push(full);
    }
  }
})(distDir);

const first = (html, re) => (html.match(re) || [])[1] || '';

const titles = new Map();
const descriptions = new Map();
const issues = [];

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(distDir, file).split(path.sep).join('/');

  const title = first(html, /<title[^>]*>([^<]*)/);
  const description = first(html, /<meta name="description" content="([^"]*)"/);
  const canonical = first(html, /<link rel="canonical" href="([^"]*)"/);
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;

  if (!title) issues.push(`${rel}: no <title>`);
  if (!description) issues.push(`${rel}: no meta description`);
  if (!canonical) issues.push(`${rel}: no canonical`);
  if (canonical && !canonical.startsWith(SITE_URL)) {
    issues.push(`${rel}: canonical points off-domain, ${canonical}`);
  }
  if (h1Count !== 1) issues.push(`${rel}: ${h1Count} h1 elements (expected 1)`);

  // 404.html legitimately shares nothing with the rest; skip it in the
  // uniqueness check rather than reporting a false duplicate.
  if (rel !== '/404.html') {
    titles.set(title, [...(titles.get(title) || []), rel]);
    descriptions.set(description, [...(descriptions.get(description) || []), rel]);
  }
}

const dupTitles = [...titles].filter(([, pages]) => pages.length > 1);
const dupDescriptions = [...descriptions].filter(([, pages]) => pages.length > 1);

console.log(`audit: ${files.length} pages checked against ${SITE_URL}`);
console.log(`  duplicate titles:       ${dupTitles.length}`);
console.log(`  duplicate descriptions: ${dupDescriptions.length}`);
console.log(`  other issues:           ${issues.length}`);

for (const [title, pages] of dupTitles.slice(0, 15)) {
  console.log(`  DUP TITLE "${title.slice(0, 60)}" -> ${pages.join(', ')}`);
}
for (const [description, pages] of dupDescriptions.slice(0, 15)) {
  console.log(`  DUP DESC  "${description.slice(0, 50)}..." -> ${pages.join(', ')}`);
}
for (const issue of issues.slice(0, 30)) {
  console.log(`  ${issue}`);
}

const failed = issues.length + dupTitles.length + dupDescriptions.length;
process.exit(failed > 0 ? 1 : 0);
