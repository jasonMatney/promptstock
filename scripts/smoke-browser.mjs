#!/usr/bin/env node
/**
 * Real browser smoke: serve the site, wait for window.gameDebug, teleport + capture.
 * Usage: npm run smoke:browser
 * Requires: playwright (devDependency) + Chromium (`npx playwright install chromium`).
 * Falls back to channel "chrome" / system Chrome if Playwright's Chromium is missing.
 */
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const PAGE = '/skills-jam-3d.html';
const BOOT_MS = Number(process.env.SMOKE_BOOT_MS || 120_000);
const PORT = Number(process.env.SMOKE_PORT || 0); // 0 = ephemeral

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
    console.error('smoke-browser: playwright is not installed. Run: npm i -D playwright && npx playwright install chromium');
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
    console.warn('smoke-browser: Playwright Chromium launch failed, trying channel=chrome…', first.message);
    try {
      return await chromium.launch({ ...common, channel: 'chrome' });
    } catch (second) {
      console.warn('smoke-browser: channel=chrome failed, trying executablePath=/usr/bin/google-chrome…', second.message);
      return await chromium.launch({
        ...common,
        executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
      });
    }
  }
}

function isPngDataUrl(value) {
  if (typeof value !== 'string' || value.length < 32) return false;
  if (!value.startsWith('data:image/png')) return false;
  // Accept base64 PNG; optionally peek at decoded header if long enough.
  const comma = value.indexOf(',');
  if (comma < 0) return false;
  const b64 = value.slice(comma + 1);
  if (b64.length < 24) return false;
  try {
    const buf = Buffer.from(b64.slice(0, 32), 'base64');
    // PNG magic: 89 50 4E 47 0D 0A 1A 0A
    return buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
  } catch {
    return false;
  }
}

async function main() {
  const { chromium } = await loadPlaywright();
  const { server, origin } = await startStaticServer();
  let browser;
  const pageUrl = `${origin}${PAGE}`;
  console.log('smoke-browser: serving', origin);

  try {
    browser = await launchBrowser(chromium);
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    page.setDefaultTimeout(BOOT_MS);

    const consoleErrors = [];
    page.on('pageerror', (err) => consoleErrors.push(String(err)));
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto(pageUrl, { waitUntil: 'domcontentloaded', timeout: BOOT_MS });

    await page.waitForFunction(
      () => typeof window.gameDebug === 'object' && typeof window.gameDebug.go === 'function',
      { timeout: BOOT_MS },
    );

    // Prefer low quality to reduce GPU pressure in CI / headless.
    await page.evaluate(() => {
      try {
        window.gameDebug.setQuality('low');
      } catch {
        /* optional */
      }
    });

    const locations = await page.evaluate(() => window.gameDebug.listLocations());
    if (!Array.isArray(locations) || locations.length < 1) {
      throw new Error('listLocations returned empty');
    }
    const target = locations.includes('stage') ? 'stage' : locations[0];
    await page.evaluate((id) => window.gameDebug.go(id), target);

    // Give the fade/teleport + a couple of frames a moment.
    await new Promise((r) => setTimeout(r, 500));

    const captureName = 'festival_stage_wide';
    const dataUrl = await page.evaluate((name) => window.gameDebug.capture(name), captureName);
    if (!isPngDataUrl(dataUrl)) {
      throw new Error(
        `capture(${captureName}) did not return a PNG data URL (got ${typeof dataUrl}, len=${dataUrl?.length ?? 0})`,
      );
    }

    const version = await page.evaluate(() => window.gameDebug.version);
    console.log('smoke-browser: ok', {
      version,
      target,
      capture: captureName,
      pngBytesApprox: Math.floor(((dataUrl.length * 3) / 4) - 8),
      pageErrors: consoleErrors.length,
    });
    if (consoleErrors.length) {
      console.warn('smoke-browser: page reported errors (non-fatal if capture succeeded):', consoleErrors.slice(0, 5));
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    await new Promise((r) => server.close(r));
  }
}

main().catch((err) => {
  console.error('smoke-browser: FAIL', err);
  process.exitCode = 1;
});
