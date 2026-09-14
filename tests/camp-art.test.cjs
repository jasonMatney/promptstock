const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
test('published game contains the new notice and excludes the original illustration',()=>{
 const html=fs.readFileSync('dist/index.html','utf8');assert.ok(html.includes('assets/festival-notice.png'));assert.doesNotMatch(html,/Inspired by your illustration|THE ORIGINAL ILLUSTRATION|const POSTER="data:/);
 assert.equal(fs.existsSync('dist/assets/skills-jam-2026.jpeg'),false);assert.ok(fs.statSync('dist/audio/moonlit-cabin-hush.mp3').size>10000);
});
test('pine grove shares geometry across trees and all vertices and placements are finite',async()=>{
 const T=await import('three');const {pineGrove}=await import('../lake-art.mjs');const root=new T.Group();const trees=pineGrove(root,[[0,0,0,1],[10,0,-4,.8],[2,0,-8,1.1]]);
 let calls=0;trees.traverse(o=>{if(!o.isMesh)return;calls++;assert.equal(o.isInstancedMesh,true);assert.equal(o.count,3);assert.ok([...o.geometry.attributes.position.array].every(Number.isFinite));assert.ok([...o.instanceMatrix.array].every(Number.isFinite));});assert.ok(calls<=3);
});
