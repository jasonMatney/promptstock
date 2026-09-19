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
  assert.ok(pkg.scripts.test.indexOf('check:engine') < pkg.scripts.test.indexOf('build'), 'detect stale committed output before rebuilding it');
});

test('checker rejects a stale bundle without replacing it', async()=>{
  const os=require('node:os');
  const {build}=await import('esbuild');
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'jam-engine-regression-'));
  try {
    fs.mkdirSync(path.join(dir,'scripts'));
    fs.copyFileSync(path.join(__dirname,'../scripts/check-engine.mjs'),path.join(dir,'scripts/check-engine.mjs'));
    fs.symlinkSync(path.resolve(__dirname,'../node_modules'),path.join(dir,'node_modules'),'dir');
    fs.writeFileSync(path.join(dir,'engine-source.mjs'),'globalThis.example = 1;');
    await build({entryPoints:[path.join(dir,'engine-source.mjs')],bundle:true,format:'iife',target:['es2022'],minify:true,outfile:path.join(dir,'engine.js'),legalComments:'eof'});
    const check=()=>spawnSync(process.execPath,[path.join(dir,'scripts/check-engine.mjs')],{encoding:'utf8'});
    assert.equal(check().status,0);
    const old=fs.readFileSync(path.join(dir,'engine.js'),'utf8');
    fs.writeFileSync(path.join(dir,'engine-source.mjs'),'globalThis.example = 2;');
    const result=check();
    assert.equal(result.status,1);
    assert.match(result.stderr,/stale/);
    assert.equal(fs.readFileSync(path.join(dir,'engine.js'),'utf8'),old);
  } finally {fs.rmSync(dir,{recursive:true,force:true});}
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
