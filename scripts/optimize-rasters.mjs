#!/usr/bin/env node
/**
 * Recompress game-ready rasters in assets/ (idempotent: only writes when smaller).
 * See art/skills-jam/ASSET-BUDGET.md for targets. Run: node scripts/optimize-rasters.mjs
 */
import sharp from 'sharp';
import { copyFileSync, statSync, unlinkSync, writeFileSync } from 'node:fs';

const JOBS = [
  { src: 'assets/festival-notice.jpg', max: 1024, jpeg: { quality: 85, mozjpeg: true } },
  { src: 'assets/foliage-spray.png', max: 1024, png: { compressionLevel: 9, effort: 10 } },
  { src: 'assets/art-direction/meadow-albedo-v2.png', max: 1024, png: { compressionLevel: 9, effort: 10 } },
  { src: 'assets/camp-v2/canvas.png', max: 1024, palette: true },
  { src: 'assets/camp-v2/stone.png', max: 1024, palette: true },
  { src: 'assets/camp-v2/fur.png', max: 1024, palette: true },
  { src: 'assets/concert/puerto-rico-landsat.jpg', max: 1280, jpeg: { quality: 82, mozjpeg: true } },
  { src: 'assets/concert/puerto-rico-orbit.jpg', max: 720, jpeg: { quality: 85, mozjpeg: true } },
];

function resize(pipeline, meta, max) {
  const { width: w, height: h } = meta;
  if (Math.max(w, h) <= max) return pipeline;
  return pipeline.resize({
    width: w >= h ? max : undefined,
    height: h > w ? max : undefined,
    fit: 'inside',
    withoutEnlargement: true,
  });
}

for (const job of JOBS) {
  const before = statSync(job.src).size;
  const meta = await sharp(job.src).metadata();
  let pipeline = resize(sharp(job.src).rotate(), meta, job.max);
  const tmp = job.src + '.opt-tmp';
  if (job.jpeg) {
    await pipeline.jpeg(job.jpeg).toFile(tmp);
  } else if (job.palette && !meta.hasAlpha) {
    const pal = await pipeline
      .clone()
      .png({ compressionLevel: 9, effort: 10, palette: true, quality: 80, dither: 1 })
      .toBuffer();
    const full = await resize(sharp(job.src).rotate(), meta, job.max)
      .png({ compressionLevel: 9, effort: 10 })
      .toBuffer();
    writeFileSync(tmp, pal.length < full.length ? pal : full);
  } else {
    await pipeline.png(job.png || { compressionLevel: 9, effort: 10 }).toFile(tmp);
  }
  const after = statSync(tmp).size;
  if (after < before) {
    copyFileSync(tmp, job.src);
    console.log(`✓ ${(before / 1e6).toFixed(2)} → ${(after / 1e6).toFixed(2)} MB  ${job.src}`);
  } else {
    console.log(`· keep ${(before / 1e6).toFixed(2)} MB  ${job.src}`);
  }
  unlinkSync(tmp);
}
