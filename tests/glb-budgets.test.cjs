const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');

test('shipped GLBs match REPORT.json triangle/bbox budgets and byte ceilings', () => {
  const r = spawnSync(process.execPath, ['scripts/check-glb-budgets.mjs'], {
    encoding: 'utf8',
  });
  if (r.status !== 0) {
    console.error(r.stdout);
    console.error(r.stderr);
  }
  assert.equal(r.status, 0, r.stderr || r.stdout || 'check-glb-budgets failed');
});
