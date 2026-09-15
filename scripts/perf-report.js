/**
 * Payload report over dist/. Deterministic byte accounting: what a browser has to
 * download for a cold visit, and which assets dominate it.
 *
 * Gzip is what Vercel actually serves, so raw sizes overstate transfer. Both are
 * reported. Brotli would be a little smaller again.
 */

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');

const kb = (bytes) => (bytes / 1024).toFixed(1) + ' KB';
const gz = (file) => zlib.gzipSync(fs.readFileSync(file)).length;

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else files.push(full);
  }
})(distDir);

const byExt = new Map();
let totalRaw = 0;

for (const file of files) {
  const size = fs.statSync(file).size;
  const ext = path.extname(file).toLowerCase() || '(none)';
  const bucket = byExt.get(ext) || { count: 0, raw: 0 };
  bucket.count += 1;
  bucket.raw += size;
  byExt.set(ext, bucket);
  totalRaw += size;
}

console.log('=== dist/ totals ===');
console.log(`files: ${files.length}   raw: ${kb(totalRaw)} (${(totalRaw / 1024 / 1024).toFixed(2)} MB)`);
console.log('');
console.log('=== by type ===');
for (const [ext, b] of [...byExt].sort((a, b) => b[1].raw - a[1].raw)) {
  console.log(`  ${ext.padEnd(8)} ${String(b.count).padStart(4)} files  ${kb(b.raw).padStart(12)}`);
}

// Critical path for a cold homepage visit: the HTML plus the JS and CSS it
// references. Everything else is lazy or per-route.
const homeHtml = path.join(distDir, 'index.html');
const html = fs.readFileSync(homeHtml, 'utf8');
const refs = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((m) => m[1]);

console.log('');
console.log('=== homepage critical path ===');
let critRaw = fs.statSync(homeHtml).size;
let critGz = gz(homeHtml);
console.log(`  index.html${''.padEnd(28)} ${kb(fs.statSync(homeHtml).size).padStart(11)}  gzip ${kb(gz(homeHtml))}`);
for (const ref of [...new Set(refs)]) {
  const file = path.join(distDir, ref.replace(/^\//, ''));
  if (!fs.existsSync(file)) continue;
  const raw = fs.statSync(file).size;
  const g = gz(file);
  critRaw += raw;
  critGz += g;
  console.log(`  ${path.basename(ref).padEnd(38)} ${kb(raw).padStart(11)}  gzip ${kb(g)}`);
}
console.log(`  ${'TOTAL'.padEnd(38)} ${kb(critRaw).padStart(11)}  gzip ${kb(critGz)}`);

console.log('');
console.log('=== heaviest assets ===');
files
  .map((f) => ({ f, size: fs.statSync(f).size }))
  .sort((a, b) => b.size - a.size)
  .slice(0, 10)
  .forEach(({ f, size }) => {
    console.log(`  ${kb(size).padStart(12)}  /${path.relative(distDir, f).split(path.sep).join('/')}`);
  });

console.log('');
console.log('=== prerendered HTML page weight ===');
const pages = files.filter((f) => f.endsWith('.html'));
const sizes = pages.map((f) => fs.statSync(f).size).sort((a, b) => a - b);
const median = sizes[Math.floor(sizes.length / 2)];
console.log(`  pages: ${pages.length}`);
console.log(`  min ${kb(sizes[0])}   median ${kb(median)}   max ${kb(sizes[sizes.length - 1])}`);
console.log(`  median gzipped: ${kb(gz(pages[Math.floor(pages.length / 2)]))}`);
