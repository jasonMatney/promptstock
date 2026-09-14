const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');

test('social poses work on all six exported crowd rigs without altering the source',async()=>{
 const THREE=await import('three');
 const {GLTFLoader}=await import('three/addons/loaders/GLTFLoader.js');
 const {bakeCrowdTemplate}=await import('../jam-kit.mjs');
 const loader=new GLTFLoader();loader.register(p=>{p.loadTexture=async()=>new THREE.Texture();return{name:'texture_stub'};});
 const data=fs.readFileSync('assets/models/crowd_kit.glb');
 const lib=await loader.parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
 const positions=root=>{const a=[];root.traverse(o=>{if(o.isMesh)a.push(...o.geometry.attributes.position.array);});return a;};
 for(let i=1;i<=6;i++){
  const source=lib.scene.getObjectByName('crowd_'+i),original=positions(source);
  const idle=positions(bakeCrowdTemplate(source)),talk=positions(bakeCrowdTemplate(source,'talk')),listen=positions(bakeCrowdTemplate(source,'listen'));
  assert.equal(idle.length,talk.length);assert.equal(idle.length,listen.length);
  assert.ok(talk.every(Number.isFinite));assert.ok(listen.every(Number.isFinite));
  assert.ok(talk.some((v,j)=>Math.abs(v-idle[j])>.03),'crowd '+i+' needs a visible talking pose');
  assert.ok(listen.some((v,j)=>Math.abs(v-talk[j])>.02),'crowd '+i+' needs a distinct listening pose');
  assert.deepEqual(positions(source),original,'baking must not alter shared library vertices');
 }
});

test('ambient crowd motion yields to the concert and reduced-motion preference',async()=>{
 const {JamKit}=await import('../jam-kit.mjs');
 const kit=Object.create(JamKit.prototype);Object.assign(kit,{engine:{play:{reduced:false,concert:{active:false}}},crowdMotion:{value:1},mixers:[],instances:new Map()});
 kit.update(1);assert.equal(kit.crowdMotion.value,1);
 kit.engine.play.concert.active=true;kit.update(2);assert.equal(kit.crowdMotion.value,0);
 kit.engine.play.concert.active=false;kit.engine.play.reduced=true;kit.update(3);assert.equal(kit.crowdMotion.value,0);
 kit.engine.play.reduced=false;kit.update(4);assert.equal(kit.crowdMotion.value,1);
});
