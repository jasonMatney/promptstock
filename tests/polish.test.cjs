const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');

test('merging the six crowd rigs preserves posed vertices and reduces mesh submissions',async()=>{
 const T=await import('three');const {compactSkinnedAsset,createJamGltfLoader}=await import('../jam-kit.mjs');
 const loader=await createJamGltfLoader();loader.register(p=>{p.loadTexture=async()=>new T.Texture();return{name:'texture_stub'};});
 const data=fs.readFileSync('assets/models/crowd_kit.glb');const lib=await loader.parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
 const sample=root=>{lib.scene.updateMatrixWorld(true);let count=0;const points=[];root.traverse(o=>{if(!o.isSkinnedMesh)return;count++;o.skeleton.update();const a=o.geometry.index;for(let j=0;j<(a?.count||o.geometry.attributes.position.count);j++){const v=o.getVertexPosition(a?a.getX(j):j,new T.Vector3()).applyMatrix4(o.matrixWorld);points.push([v.x,v.y,v.z].map(x=>String(Math.round(x*10000))).join(','));}});return{points:points.sort(),count};};
 for(let i=1;i<=6;i++){
  const root=lib.scene.getObjectByName('crowd_'+i);root.traverse(o=>{if(o.isBone&&o.name.startsWith('forearm_L'))o.rotateX(-.6);});
  const before=sample(root);compactSkinnedAsset(root);const after=sample(root);
  const mismatches=after.points.filter((p,j)=>p!==before.points[j]);assert.equal(mismatches.length,0,'crowd '+i+' mismatches '+mismatches.length+' example '+mismatches.slice(0,3)+' vs '+before.points.filter((p,j)=>p!==after.points[j]).slice(0,3));
  assert.ok(after.count<=8&&after.count<=before.count/2,'merge should remove redundant draws '+i+': '+before.count+' to '+after.count);
 }
});

test('cup and backpack grips follow a transformed palm while their bodies stay upright',async()=>{
 const T=await import('three');const {handAnchor,alignGrip}=await import('../skill-mixer.mjs');
 const scene=new T.Group(),root=new T.Group(),person=new T.Group(),hand=new T.Bone();scene.add(root);root.add(person);person.add(hand);root.position.set(8,0,-3);root.rotation.y=.6;person.position.set(.8,0,.1);person.rotation.y=-.4;hand.position.set(-.3,1.1,.2);hand.rotation.z=.7;
 for(const grip of [new T.Vector3(.088,0,0),new T.Vector3(0,.525,0)]){
  const prop=new T.Group();root.add(prop);prop.rotation.y=.3;const anchor=handAnchor(root,hand);alignGrip(prop,anchor,grip);root.updateMatrixWorld(true);
  assert.ok(prop.localToWorld(grip.clone()).distanceTo(root.localToWorld(anchor.clone()))<1e-7);
  assert.ok(new T.Vector3(0,1,0).applyQuaternion(prop.getWorldQuaternion(new T.Quaternion())).distanceTo(new T.Vector3(0,1,0))<1e-7);
 }
});

test('pouring follows the tilted scaled outlet and falls into the pot',async()=>{
 const T=await import('three');const {pourPoint}=await import('../skill-mixer.mjs');
 const root=new T.Group(),carry=new T.Group(),can=new T.Group();root.add(carry);carry.add(can);
 root.position.set(8,0,-4);root.rotation.y=.7;carry.position.set(-1.8,1.1,-.5);carry.rotation.z=-.95;can.scale.setScalar(.65);
 const outlet=new T.Vector3(.4+Math.sin(1)*.275,.06+Math.cos(1)*.275,0),target=new T.Vector3(-1.22,.35,-.58);
 const start=pourPoint(root,can,outlet,target,0),end=pourPoint(root,can,outlet,target,1),mid=pourPoint(root,can,outlet,target,.5);
 assert.ok(start.distanceTo(root.worldToLocal(can.localToWorld(outlet.clone())))<1e-7);
 assert.ok(start.distanceTo(carry.position)>.3);assert.ok(end.distanceTo(target)<1e-7);
 assert.ok(start.y>mid.y&&mid.y>end.y);assert.ok(start.y-mid.y<mid.y-end.y);
});
