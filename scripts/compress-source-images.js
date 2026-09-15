/**
 * Re-encodes oversized source images in place, keeping the same filename and
 * format so no import has to change.
 *
 * These are design exports dropped in at full resolution: several are 2 MB and
 * one is 7.8 MB, none are displayed anywhere near that large. Vite hashes and
 * ships whatever it is given, so the weight lands on real visitors.
 *
 * Safe by construction: it encodes to a buffer first and only overwrites when
 * the result is meaningfully smaller. Originals are in git either way.
 *
 * Run: node scripts/compress-source-images.js [--apply]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const apply = process.argv.includes('--apply');

// Nothing on this site displays an image wider than the 1100px content column,
// so 1600 leaves headroom for retina without carrying print resolution.
const MAX_WIDTH = 1600;
const THRESHOLD = 250 * 1024; // only touch files above 250 KB
const MIN_SAVING = 0.15;      // skip unless we save at least 15%

const dirs = [path.join(root, 'src', 'assets'), path.join(root, 'public')];

const files = [];
for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (!/\.(png|jpe?g)$/i.test(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (fs.statSync(full).size > THRESHOLD) files.push(full);
  }
}

const kb = (n) => (n / 1024).toFixed(0).padStart(6) + ' KB';

let before = 0;
let after = 0;
let touched = 0;

for (const file of files) {
  const originalSize = fs.statSync(file).size;
  const ext = path.extname(file).toLowerCase();
  const rel = path.relative(root, file).split(path.sep).join('/');

  // Read to a buffer rather than letting sharp open the path: on Windows libvips
  // keeps the handle open and the later writeFileSync fails with UNKNOWN/-4094.
  const input = fs.readFileSync(file);
  let pipeline = sharp(input).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  pipeline = ext === '.png'
    // Palette quantisation is what actually shrinks a flat design export;
    // plain zlib effort barely moves it.
    ? pipeline.png({ compressionLevel: 9, palette: true, quality: 82, effort: 8 })
    : pipeline.jpeg({ quality: 78, mozjpeg: true });

  let buf;
  try {
    buf = await pipeline.toBuffer();
  } catch (error) {
    console.log(`${kb(originalSize)}  SKIP (${error.message.slice(0, 40)})  ${rel}`);
    continue;
  }

  const saving = 1 - buf.length / originalSize;
  before += originalSize;

  if (saving < MIN_SAVING) {
    after += originalSize;
    console.log(`${kb(originalSize)}  keep (only ${(saving * 100).toFixed(0)}% smaller)  ${rel}`);
    continue;
  }

  after += buf.length;
  touched += 1;
  console.log(`${kb(originalSize)} -> ${kb(buf.length)}  (-${(saving * 100).toFixed(0)}%)  ${rel}`);
  if (apply) {
    try {
      fs.writeFileSync(file, buf);
    } catch (error) {
      console.log(`         WRITE FAILED (${error.code}) ${rel}`);
    }
  }
}

console.log('');
console.log(`${files.length} files over 250 KB, ${touched} worth re-encoding`);
console.log(`total ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`);
if (!apply) console.log('\ndry run. re-run with --apply to write.');
