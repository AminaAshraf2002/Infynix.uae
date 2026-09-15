/**
 * Finds headings whose words run together once the markup is stripped.
 *
 * Splitting a heading into per-word spans for an animation and spacing them
 * with CSS margin leaves the DOM with no whitespace between the words. It looks
 * correct on screen and reads as one unbroken string to Google's text
 * extraction, to screen readers, to copy-paste, and to every AI crawler.
 * `Word<br /><em>Word</em>` has the same effect for the same reason.
 *
 * Flags a lowercase letter butted against an uppercase one, or any run of 24+
 * non-space characters. Product names are camelCase on purpose, so those are
 * masked out first rather than reported on every run.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');

const CAMEL_OK = [
  'IoT', 'iOS', 'iPadOS', 'macOS', 'JavaScript', 'TypeScript', 'WordPress',
  'WooCommerce', 'WhatsApp', 'SaaS', 'PaaS', 'IaaS', 'DevOps', 'GitHub',
  'GitLab', 'YouTube', 'LinkedIn', 'PostgreSQL', 'MySQL', 'MongoDB',
  'eCommerce', 'PowerPoint', 'OpenAI', 'ChatGPT', 'PageSpeed', 'BigQuery',
  'HubSpot', 'ShipRocket', 'UI/UX', 'JavaScript SEO', 'GraphQL', 'GraphQL API', 'TikTok', 'YouTube Shorts',
];

const mask = (s) => {
  let out = s;
  for (const term of CAMEL_OK) out = out.split(term).join(' ');
  return out;
};

const clean = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const hits = new Map();
let headings = 0;

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.name.endsWith('.html') || /^google[0-9a-f]+\.html$/.test(entry.name)) continue;

    const html = fs.readFileSync(full, 'utf8');
    for (const m of html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/g)) {
      const text = clean(m[2]);
      if (!text) continue;
      headings += 1;
      const masked = mask(text);
      if (/[a-z][A-Z]/.test(masked) || /\S{24,}/.test(masked)) {
        hits.set(text, (hits.get(text) || 0) + 1);
      }
    }
  }
};

walk(distDir);

console.log(`headings scanned: ${headings}`);
console.log(`headings with glued words: ${hits.size}`);
for (const [text, count] of [...hits].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(`  on ${String(count).padStart(3)} page(s)  ${text.slice(0, 95)}`);
}

process.exit(hits.size ? 1 : 0);
