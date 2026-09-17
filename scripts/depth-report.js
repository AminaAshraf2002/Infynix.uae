// Rendered-depth report: words, H2, H3, FAQ items per prerendered page, plus
// pairwise 5-word shingle similarity across the landing pages.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const onlyLanding = process.argv.includes('--landing');
const dist = path.join(root, 'dist');
const { landingPages } = await import(pathToFileURL(path.join(root, 'src/content/landingPages/index.js')).href);
const landingSlugs = new Set(landingPages.map((p) => '/' + p.slug));

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { walk(full); continue; }
    if (!e.name.endsWith('.html') || /^google[0-9a-f]+\.html$/.test(e.name)) continue;
    const rel = path.relative(dist, full).split(path.sep).join('/');
    const url = rel === 'index.html' ? '/' : '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
    pages.push({ url, html: fs.readFileSync(full, 'utf8') });
  }
})(dist);

const text = (html) => {
  const m = html.match(/<main[\s\S]*?<\/main>/i) || html.match(/<body[\s\S]*?<\/body>/i);
  return (m ? m[0] : html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<(nav|footer)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const rows = [];
for (const p of pages) {
  if (onlyLanding && !landingSlugs.has(p.url)) continue;
  const t = text(p.html);
  rows.push({
    url: p.url,
    words: t.split(' ').filter(Boolean).length,
    h2: (p.html.match(/<h2[\s>]/g) || []).length,
    h3: (p.html.match(/<h3[\s>]/g) || []).length,
    faq: (p.html.match(/<details/g) || []).length,
    landing: landingSlugs.has(p.url),
    em: /—/.test(t),
    cctv: /cctv/i.test(t),
  });
}
rows.sort((a, b) => a.words - b.words);
console.log(' WORDS  H2  H3 FAQ  PAGE');
for (const r of rows) {
  console.log(String(r.words).padStart(6), String(r.h2).padStart(3), String(r.h3).padStart(3), String(r.faq).padStart(3), ' ', r.url, r.landing ? '' : '(service)', r.em ? 'EMDASH' : '', r.cctv ? 'CCTV' : '');
}
const under = rows.filter((r) => r.landing && r.words < 1800);
console.log(`\nlanding pages: ${rows.filter((r) => r.landing).length}, under 1,800 words: ${under.length}`);

// similarity
const sh = new Map();
for (const p of pages) {
  if (!landingSlugs.has(p.url)) continue;
  const w = text(p.html).toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').filter(Boolean);
  const s = new Set();
  for (let i = 0; i < w.length - 4; i += 1) s.add(w.slice(i, i + 5).join(' '));
  sh.set(p.url, s);
}
const keys = [...sh.keys()];
const pairs = [];
for (let i = 0; i < keys.length; i += 1) for (let j = i + 1; j < keys.length; j += 1) {
  const a = sh.get(keys[i]), b = sh.get(keys[j]);
  let inter = 0; for (const x of a) if (b.has(x)) inter += 1;
  pairs.push([keys[i], keys[j], inter / (a.size + b.size - inter)]);
}
pairs.sort((a, b) => b[2] - a[2]);
const pct = (n) => (n * 100).toFixed(1) + '%';
console.log(`\npairs: ${pairs.length}  median similarity: ${pct(pairs[Math.floor(pairs.length / 2)][2])}  max: ${pct(pairs[0][2])}`);
pairs.slice(0, 8).forEach(([a, b, s]) => console.log(`  ${pct(s).padStart(6)}  ${a}  vs  ${b}`));
