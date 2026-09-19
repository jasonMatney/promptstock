#!/usr/bin/env node
/**
 * Visual regression: serve the festival, capture named cameras, compare to goldens.
 *
 *   npm run test:visual
 *   UPDATE_VISUAL_GOLDENS=1 npm run test:visual
 *   node scripts/compare-visual.mjs --update
 *
 * Env:
 *   VISUAL_THRESHOLD     max mismatched pixel fraction (default 0.02 = 2%)
 *   VISUAL_BOOT_MS       boot timeout (default 120000)
 *   VISUAL_SETTLE_MS     settle after quality/camera (default 800)
 *   VISUAL_VIEWPORT_W/H  capture size (default 480x270 — keeps goldens small)
 *   VISUAL_JPEG_QUALITY  JPEG quality 0–1 (default 0.72)
 *   SMOKE_PORT, CHROME_PATH — same as smoke:browser
 *
 * Limitations: headless GPU / fonts can differ across machines. We force low
 * quality, a fixed viewport, deviceScaleFactor=1, and a short settle wait.
 * Do not put this in default `npm test`.
 */
import { createServer } from 'node:http';
import {
  createReadStream,
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  statSync,
} from 'node:fs';
import { extname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import jpeg from 'jpeg-js';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const PAGE = '/skills-jam-3d.html';
const GOLDENS_DIR = join(ROOT, 'art/skills-jam/renders/goldens');
const ARTIFACTS_DIR = join(ROOT, 'art/skills-jam/renders/artifacts');
const BOOT_MS = Number(process.env.VISUAL_BOOT_MS || process.env.SMOKE_BOOT_MS || 120_000);
const SETTLE_MS = Number(process.env.VISUAL_SETTLE_MS || 800);
const PORT = Number(process.env.SMOKE_PORT || 0);
const THRESHOLD = Number(process.env.VISUAL_THRESHOLD || 0.02);
const VIEW_W = Number(process.env.VISUAL_VIEWPORT_W || 480);
const VIEW_H = Number(process.env.VISUAL_VIEWPORT_H || 270);
const JPEG_Q = Number(process.env.VISUAL_JPEG_QUALITY || 0.72);
const UPDATE =
  process.env.UPDATE_VISUAL_GOLDENS === '1' || process.argv.includes('--update');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function startStaticServer() {
  return new Promise((resolveServer, reject) => {
    const server = createServer((req, res) => {
      try {
        const url = new URL(req.url || '/', 'http://127.0.0.1');
        let rel = decodeURIComponent(url.pathname);
        if (rel === '/') rel = PAGE;
        const file = resolve(ROOT, '.' + rel);
        if (!file.startsWith(ROOT) || !existsSync(file) || !statSync(file).isFile()) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        const type = MIME[extname(file).toLowerCase()] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
        createReadStream(file).pipe(res);
      } catch (err) {
        res.writeHead(500);
        res.end(String(err));
      }
    });
    server.on('error', reject);
    server.listen(PORT, '127.0.0.1', () => {
      const addr = server.address();
      resolveServer({ server, port: addr.port, origin: `http://127.0.0.1:${addr.port}` });
    });
  });
}

async function loadPlaywright() {
  try {
    return await import('playwright');
  } catch (err) {
    console.error(
      'compare-visual: playwright missing. Run: npm i -D playwright && npx playwright install chromium',
    );
    throw err;
  }
}

async function launchBrowser(chromium) {
  const common = {
    headless: true,
    args: [
      '--use-gl=angle',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--disable-dev-shm-usage',
      '--no-sandbox',
    ],
  };
  try {
    return await chromium.launch(common);
  } catch (first) {
    console.warn('compare-visual: Playwright Chromium failed, trying channel=chrome…', first.message);
    try {
      return await chromium.launch({ ...common, channel: 'chrome' });
    } catch (second) {
      console.warn('compare-visual: channel=chrome failed, trying CHROME_PATH…', second.message);
      return await chromium.launch({
        ...common,
        executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
      });
    }
  }
}

function dataUrlToRgba(dataUrl) {
  if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) {
    throw new Error('expected image data URL');
  }
  const buf = Buffer.from(dataUrl.slice(dataUrl.indexOf(',') + 1), 'base64');
  if (dataUrl.startsWith('data:image/jpeg') || dataUrl.startsWith('data:image/jpg')) {
    const decoded = jpeg.decode(buf, { useTArray: true });
    return { width: decoded.width, height: decoded.height, data: Buffer.from(decoded.data) };
  }
  const png = PNG.sync.read(buf);
  return { width: png.width, height: png.height, data: png.data };
}

function writeJpeg(file, rgba) {
  mkdirSync(resolve(file, '..'), { recursive: true });
  const encoded = jpeg.encode(
    { data: rgba.data, width: rgba.width, height: rgba.height },
    Math.round(JPEG_Q * 100),
  );
  writeFileSync(file, encoded.data);
}

function writePng(file, rgba) {
  mkdirSync(resolve(file, '..'), { recursive: true });
  const png = new PNG({ width: rgba.width, height: rgba.height });
  png.data = Buffer.from(rgba.data);
  writeFileSync(file, PNG.sync.write(png, { colorType: 6, deflateLevel: 9 }));
}

function readGolden(file) {
  const buf = readFileSync(file);
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const decoded = jpeg.decode(buf, { useTArray: true });
    return { width: decoded.width, height: decoded.height, data: Buffer.from(decoded.data) };
  }
  const png = PNG.sync.read(buf);
  return { width: png.width, height: png.height, data: png.data };
}

async function main() {
  mkdirSync(GOLDENS_DIR, { recursive: true });
  mkdirSync(ARTIFACTS_DIR, { recursive: true });

  const { chromium } = await loadPlaywright();
  const { server, origin } = await startStaticServer();
  let browser;
  console.log(
    'compare-visual: serving',
    origin,
    UPDATE ? '(UPDATE goldens)' : `(threshold ${THRESHOLD})`,
  );

  try {
    browser = await launchBrowser(chromium);
    const context = await browser.newContext({
      viewport: { width: VIEW_W, height: VIEW_H },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    page.setDefaultTimeout(BOOT_MS);

    await page.goto(`${origin}${PAGE}`, { waitUntil: 'domcontentloaded', timeout: BOOT_MS });
    await page.waitForFunction(
      () =>
        typeof window.gameDebug === 'object' &&
        typeof window.gameDebug.captureAll === 'function',
      { timeout: BOOT_MS },
    );

    await page.evaluate(() => {
      try {
        window.gameDebug.setQuality('low');
      } catch {
        /* optional */
      }
    });
    await page.waitForTimeout(SETTLE_MS);

    const cameras = await page.evaluate(() => window.gameDebug.listCameras());
    if (!Array.isArray(cameras) || cameras.length < 1) {
      throw new Error('listCameras returned empty');
    }

    const shots = await page.evaluate(
      async ({ names, jpegQ }) => {
        const out = [];
        for (const name of names) {
          window.gameDebug.setCamera(name);
          await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
          // Prefer JPEG for smaller goldens; fall back to gameDebug PNG capture.
          const canvas =
            window.skillsJam?.engine?.canvas ||
            window.skillsJam?.engine?.renderer?.domElement ||
            document.querySelector('canvas');
          let dataUrl;
          if (canvas && typeof canvas.toDataURL === 'function') {
            if (typeof window.skillsJam?.engine?.draw === 'function') {
              window.skillsJam.engine.draw(window.skillsJam.engine.time?.value ?? 0);
            } else if (typeof window.gameDebug.capture === 'function') {
              // capture draws then returns PNG — we still re-encode via canvas when possible
              window.gameDebug.capture(name);
            }
            dataUrl = canvas.toDataURL('image/jpeg', jpegQ);
          } else {
            dataUrl = window.gameDebug.capture(name);
          }
          out.push({ name, dataUrl });
        }
        return out;
      },
      { names: cameras, jpegQ: JPEG_Q },
    );

    let failed = 0;

    for (const { name, dataUrl } of shots) {
      const actual = dataUrlToRgba(dataUrl);
      const goldenPath = join(GOLDENS_DIR, `${name}.jpg`);
      const actualPath = join(ARTIFACTS_DIR, `${name}.actual.jpg`);
      writeJpeg(actualPath, actual);

      if (UPDATE || !existsSync(goldenPath)) {
        writeJpeg(goldenPath, actual);
        console.log(
          `compare-visual: wrote golden ${name}.jpg (${statSync(goldenPath).size} bytes, ${actual.width}x${actual.height})`,
        );
        continue;
      }

      const expected = readGolden(goldenPath);
      if (expected.width !== actual.width || expected.height !== actual.height) {
        failed++;
        console.error(
          `compare-visual: SIZE MISMATCH ${name}: golden ${expected.width}x${expected.height} vs actual ${actual.width}x${actual.height}`,
        );
        continue;
      }

      const diffData = Buffer.alloc(actual.width * actual.height * 4);
      const mismatched = pixelmatch(
        expected.data,
        actual.data,
        diffData,
        actual.width,
        actual.height,
        { threshold: 0.1 },
      );
      const total = actual.width * actual.height;
      const fraction = mismatched / total;
      const diffPath = join(ARTIFACTS_DIR, `${name}.diff.png`);

      if (fraction > THRESHOLD) {
        writePng(diffPath, { width: actual.width, height: actual.height, data: diffData });
        failed++;
        console.error(
          `compare-visual: REGRESSION ${name}: ${(fraction * 100).toFixed(3)}% pixels differ (${mismatched}/${total}) > ${(THRESHOLD * 100).toFixed(1)}% — wrote ${diffPath}`,
        );
      } else {
        console.log(
          `compare-visual: ok ${name} (${(fraction * 100).toFixed(3)}% diff, ${mismatched} px)`,
        );
      }
    }

    console.log('compare-visual: summary', {
      cameras: cameras.length,
      update: UPDATE,
      failed,
      threshold: THRESHOLD,
      viewport: `${VIEW_W}x${VIEW_H}`,
      goldens: GOLDENS_DIR,
    });

    if (failed > 0) process.exitCode = 1;
  } finally {
    if (browser) await browser.close().catch(() => {});
    await new Promise((r) => server.close(r));
  }
}

main().catch((err) => {
  console.error('compare-visual: FAIL', err);
  process.exitCode = 1;
});
