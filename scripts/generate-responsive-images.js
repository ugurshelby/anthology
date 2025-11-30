import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();
const imagesDir = path.join(root, 'images');
const widths = [480, 1024, 1920];
const qualities = { 480: 70, 1024: 75, 1920: 80 };

const isRaster = (f) => /(\.jpg|\.jpeg|\.png)$/i.test(f);
const stemOf = (name) => name.replace(/\.(jpg|jpeg|png|webp)$/i, '');

async function processFile(file) {
  const src = path.join(imagesDir, file);
  const stem = stemOf(file);
  for (const w of widths) {
    const out = path.join(imagesDir, `${stem}-${w}.webp`);
    if (fs.existsSync(out)) continue;
    try {
      await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: qualities[w] }).toFile(out);
      console.log('generated', path.basename(out));
    } catch (e) {
      console.warn('skip', file, '->', e.message);
    }
  }
}

async function run() {
  if (!fs.existsSync(imagesDir)) { console.error('missing images/'); process.exit(1); }
  const files = fs.readdirSync(imagesDir).filter(isRaster);
  for (const f of files) {
    await processFile(f);
  }
  console.log('done');
}

run();
