const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('dist ships optimized rasters and excludes art-direction docs / illustration masters', () => {
  assert.equal(fs.existsSync('dist/assets/festival-notice.jpg'), true);
  assert.equal(fs.existsSync('dist/assets/festival-notice.png'), false);
  assert.equal(fs.existsSync('dist/assets/foliage-spray.png'), true);
  assert.equal(fs.existsSync('dist/assets/art-direction/meadow-albedo-v2.png'), true);
  assert.equal(fs.existsSync('dist/assets/art-direction/README.md'), false);
  assert.equal(fs.existsSync('dist/assets/skills-jam-2026.jpeg'), false);
  assert.equal(fs.existsSync('dist/assets/skills-jam-2026.png'), false);
  assert.ok(fs.existsSync('dist/assets/concert/CREDITS.md'));

  const ceilings = {
    'assets/festival-notice.jpg': 400_000,
    'dist/assets/festival-notice.jpg': 400_000,
    'dist/assets/foliage-spray.png': 750_000,
    'dist/assets/art-direction/meadow-albedo-v2.png': 1_500_000,
    'dist/assets/camp-v2/canvas.png': 1_000_000,
    'dist/assets/camp-v2/stone.png': 1_000_000,
    'dist/assets/camp-v2/fur.png': 750_000,
    'dist/assets/concert/puerto-rico-landsat.jpg': 600_000,
  };
  for (const [rel, max] of Object.entries(ceilings)) {
    const size = fs.statSync(rel).size;
    assert.ok(size <= max, `${rel} is ${size} bytes (ceiling ${max})`);
  }
});

test('visual bible stub and asset budget docs exist', () => {
  assert.ok(fs.existsSync('art/skills-jam/ASSET-BUDGET.md'));
  assert.ok(fs.existsSync('art/skills-jam/VISUAL-BIBLE.md'));
  assert.ok(fs.existsSync('art/skills-jam/visual_target_01.jpg'));
  const bible = fs.readFileSync('art/skills-jam/VISUAL-BIBLE.md', 'utf8');
  assert.match(bible, /festival_stage_wide/);
  assert.match(bible, /gameDebug/);
  assert.match(bible, /test:visual/);
});

test('blender kit pipeline docs and scripts exist', () => {
  assert.ok(fs.existsSync('art/skills-jam/blender/README.md'));
  assert.ok(fs.existsSync('art/skills-jam/blender/kits.manifest.json'));
  assert.ok(fs.existsSync('art/skills-jam/blender/export_kits.py'));
  assert.ok(fs.existsSync('art/skills-jam/blender/measure_kits.py'));
  assert.ok(fs.existsSync('scripts/export-kits.mjs'));
  assert.ok(fs.existsSync('scripts/check-glb-budgets.mjs'));
  assert.ok(fs.existsSync('scripts/compress-glbs.mjs'));
  const manifest = JSON.parse(fs.readFileSync('art/skills-jam/blender/kits.manifest.json', 'utf8'));
  assert.equal(manifest.kits.length, 5);
  for (const kit of manifest.kits) {
    assert.ok(fs.existsSync(path.join('assets/models', kit.glb)), kit.glb);
  }
  const budget = fs.readFileSync('art/skills-jam/ASSET-BUDGET.md', 'utf8');
  assert.match(budget, /export:kits/);
  assert.match(budget, /compress-glbs/);
});
