/**
 * Generates public/sitemap.xml and public/robots.txt from the route registry.
 *
 * Two bugs this replaces:
 *  1. The old sitemap.xml was written as UTF-16LE with a BOM while declaring
 *     encoding="UTF-8". Google cannot parse that at all, the sitemap was dead on
 *     arrival. This writer emits plain UTF-8 with no BOM.
 *  2. Both files declared https://infynix.com, a domain Infynix does not own (it
 *     resolves to a domain-sale listing). Everything now comes from SITE_URL.
 *
 * It also listed 8 URLs while the app served roughly 50.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const { allRoutes } = await import(
  pathToFileURL(path.join(root, 'src', 'seo', 'routes.js')).href
);
const { SITE_URL } = await import(
  pathToFileURL(path.join(root, 'src', 'seo', 'siteConfig.js')).href
);

const lastmod = new Date().toISOString().split('T')[0];

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const urlEntries = allRoutes
  .map((route) => {
    const loc = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    return [
      '  <url>',
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

// Deliberately does NOT block /assets/. Googlebot needs the JS and CSS bundles to
// render and assess the page; blocking them is a common own-goal.
const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /cdn-cgi/

Sitemap: ${SITE_URL}/sitemap.xml
`;

// 'utf8' in Node writes no BOM. Do not switch this to any UTF-16 encoding.
fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(root, 'public', 'robots.txt'), robots, 'utf8');

console.log(`sitemap: ${allRoutes.length} URLs written for ${SITE_URL}`);
