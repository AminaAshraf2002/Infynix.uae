/**
 * Finds image, video and font assets that nothing references.
 *
 * An asset counts as referenced if its filename appears anywhere in src/, in
 * index.html, or in the built dist/ output. That last check matters: public/
 * files are copied verbatim and are only truly used if something links them.
 *
 * Reports only. Pass --delete to remove what it finds; everything is tracked in
 * git, so a removal is recoverable with git checkout.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const doDelete = process.argv.includes('--delete');

const MEDIA = /\.(png|jpe?g|gif|webp|avif|svg|mp4|webm|ico|woff2?)$/i;

const listFiles = (dir, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) listFiles(full, out);
    else if (MEDIA.test(e.name)) out.push(full);
  }
  return out;
};

// Everything that could contain a reference.
const haystack = [];
const collectText = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', 'dist', 'dist-ssr'].includes(e.name)) continue;
      collectText(full);
    } else if (/\.(jsx?|tsx?|css|html|json|md)$/i.test(e.name)) {
      haystack.push(fs.readFileSync(full, 'utf8'));
    }
  }
};
collectText(path.join(root, 'src'));
haystack.push(fs.readFileSync(path.join(root, 'index.html'), 'utf8'));

// dist tells us what actually survived the build and got linked.
const distText = [];
const collectDist = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collectDist(full);
    else if (/\.(html|css|js|xml|txt)$/i.test(e.name)) distText.push(fs.readFileSync(full, 'utf8'));
  }
};
collectDist(path.join(root, 'dist'));

const allText = haystack.join('\n');
const allDist = distText.join('\n');

const candidates = [
  ...listFiles(path.join(root, 'src', 'assets')),
  ...listFiles(path.join(root, 'public')),
];

const kb = (n) => (n / 1024).toFixed(0);
const unused = [];
let reclaim = 0;

for (const file of candidates) {
  const base = path.basename(file);
  const stem = base.replace(/\.[^.]+$/, '');

  // Generated landing imagery is referenced through landingImagery.js by name.
  if (file.includes(`${path.sep}lp${path.sep}`)) continue;
  // Brand marks and favicons are kept even when nothing currently imports them:
  // they are small, and you want them to hand.
  if (/logo|favicon/i.test(base)) continue;

  const inSource = allText.includes(base) || allText.includes(stem.replace(/ /g, '%20'));
  // Vite hashes bundled assets, so match the stem rather than the exact name.
  const inDist = allDist.includes(base) || new RegExp(`${stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '(%20| )')}-[A-Za-z0-9_-]{6,}\\.`).test(allDist);

  if (!inSource && !inDist) {
    const size = fs.statSync(file).size;
    reclaim += size;
    unused.push({ file: path.relative(root, file).split(path.sep).join('/'), size });
  }
}

unused.sort((a, b) => b.size - a.size);

console.log(`scanned ${candidates.length} media files`);
console.log(`unreferenced: ${unused.length}, reclaimable: ${(reclaim / 1024 / 1024).toFixed(2)} MB\n`);
unused.forEach((u) => console.log(`  ${kb(u.size).padStart(7)} KB  ${u.file}`));

if (doDelete && unused.length) {
  for (const u of unused) fs.unlinkSync(path.join(root, u.file));
  console.log(`\ndeleted ${unused.length} files (recoverable with git checkout)`);
} else if (unused.length) {
  console.log('\nrun with --delete to remove them');
}
