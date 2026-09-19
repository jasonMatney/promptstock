const {test}=require('node:test');
const assert=require('node:assert/strict');
const {spawnSync}=require('node:child_process');
const path=require('node:path');
const fs=require('node:fs');

test('check:engine script exists and documents the SoT workflow',()=>{
  const src=fs.readFileSync(path.join(__dirname,'../scripts/check-engine.mjs'),'utf8');
  assert.match(src,/engine-source\.mjs/);
  assert.match(src,/stale/);
  assert.match(src,/npm run build/);
});

test('package.json wires build and check:engine into npm test',()=>{
  const pkg=JSON.parse(fs.readFileSync(path.join(__dirname,'../package.json'),'utf8'));
  assert.match(pkg.scripts.test,/npm run build/);
  assert.match(pkg.scripts.test,/npm run check:engine/);
  assert.equal(pkg.scripts['check:engine'],'node scripts/check-engine.mjs');
});

test('check-engine exits 0 against the freshly built engine.js',()=>{
  // npm test already ran build before this file; verify the checker agrees.
  const result=spawnSync(process.execPath,[path.join(__dirname,'../scripts/check-engine.mjs')],{
    cwd:path.join(__dirname,'..'),
    encoding:'utf8',
  });
  assert.equal(result.status,0,result.stderr||result.stdout);
  assert.match(result.stdout,/matches engine-source/);
});
