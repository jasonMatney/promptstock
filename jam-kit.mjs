import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clone } from 'three/addons/utils/SkeletonUtils.js';
import { repairKitSigns } from './festival-signage.mjs';

// Merge only compatible skinned parts, retaining the original skeleton and bind pose.
// This reduces a crowd character from ~16 submissions to four to eight without baking animation.
export function compactSkinnedAsset(root){
 const groups=new Map();root.updateWorldMatrix(true,true);
 root.traverse(o=>{if(!o.isSkinnedMesh||Array.isArray(o.material))return;
  const key=[o.parent.uuid,o.skeleton.uuid,o.material.uuid,o.bindMode,o.bindMatrix.elements.join(','),o.matrix.elements.join(','),Object.keys(o.geometry.attributes).sort().join(',')].join('|');
  if(!groups.has(key))groups.set(key,[]);groups.get(key).push(o);
 });
 for(const parts of groups.values()){
  if(parts.length<2)continue;const first=parts[0],copies=parts.map(o=>o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone());
  const geometry=mergeGeometries(copies,false);copies.forEach(g=>g.dispose());if(!geometry)continue;
  const mesh=new THREE.SkinnedMesh(geometry,first.material);mesh.name=root.name+'_'+first.material.name;mesh.position.copy(first.position);mesh.quaternion.copy(first.quaternion);mesh.scale.copy(first.scale);mesh.bindMode=first.bindMode;mesh.bind(first.skeleton,first.bindMatrix);mesh.frustumCulled=false;mesh.castShadow=mesh.receiveShadow=true;first.parent.add(mesh);parts.forEach(o=>o.removeFromParent());
 }
}

// Bake one posed crowd template once, then instance it across the lawn.
// The library and Blender sources retain their editable skeletons.
export function bakeCrowdTemplate(source,pose='idle'){
 const copy=clone(source),result=new THREE.Group();copy.updateMatrixWorld(true);
 const bone=name=>{let found;copy.traverse(o=>{if(o.isBone&&o.name.startsWith(name))found=o;});return found;};
 // Apply pose deltas in character space; exported bones have their own rest axes.
 const turn=(name,angle,axis)=>{const b=bone(name);if(!b)return;const local=axis.clone().applyQuaternion(copy.getWorldQuaternion(new THREE.Quaternion())).applyQuaternion(b.parent.getWorldQuaternion(new THREE.Quaternion()).invert());b.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(local,angle));b.updateWorldMatrix(false,true);};
 const forward=new THREE.Vector3(1,0,0),sideways=new THREE.Vector3(0,0,1);
 if(pose==='wave'){turn('upper_arm_R',.85,sideways);turn('forearm_R',-1.0,forward);}
 if(pose==='play')for(const side of ['L','R']){turn('upper_arm_'+side,-.6,forward);turn('forearm_'+side,-.8,forward);}
 if(pose==='talk'||pose==='listen'){turn('upper_arm_R',pose==='talk'?-.30:-.10,forward);turn('upper_arm_R',.12,sideways);turn('forearm_R',pose==='talk'?-.95:-.45,forward);turn('head',pose==='talk'?-.10:.10,new THREE.Vector3(0,1,0));}
 copy.updateMatrixWorld(true);const inverse=copy.matrixWorld.clone().invert(),v=new THREE.Vector3();const hand=bone('hand_R');if(hand)result.userData.handGrip=hand.getWorldPosition(new THREE.Vector3()).applyMatrix4(inverse).toArray();
 copy.traverse(o=>{if(!o.isMesh)return;const geometry=o.geometry.clone();
  if(o.isSkinnedMesh){o.skeleton.update();const pos=geometry.attributes.position;for(let i=0;i<pos.count;i++){o.getVertexPosition(i,v);pos.setXYZ(i,v.x,v.y,v.z);}geometry.deleteAttribute('skinIndex');geometry.deleteAttribute('skinWeight');geometry.computeVertexNormals();}
  geometry.applyMatrix4(inverse.clone().multiply(o.matrixWorld));const mesh=new THREE.Mesh(geometry,o.material);result.add(mesh);
 });compactStaticAsset(result);return result;
}

// Consolidate static parts at runtime; Blender objects and exported GLBs stay editable.
export function compactStaticAsset(root){
 root.updateWorldMatrix(true,true);const inverse=root.matrixWorld.clone().invert(),groups=new Map(),original=[];
 root.traverse(o=>{if(!o.isMesh||o.isSkinnedMesh||Array.isArray(o.material))return;original.push(o);const key=o.material.uuid+'|'+Object.keys(o.geometry.attributes).sort().join(',');if(!groups.has(key))groups.set(key,{material:o.material,geometries:[]});const g=o.geometry.clone().applyMatrix4(inverse.clone().multiply(o.matrixWorld));groups.get(key).geometries.push(g.index?g.toNonIndexed():g);});
 if(!original.length)return;
 for(const o of original)o.removeFromParent();for(const {material,geometries} of groups.values()){const geometry=mergeGeometries(geometries,false);if(geometry){const mesh=new THREE.Mesh(geometry,material);mesh.name=root.name+'_'+material.name;root.add(mesh);}for(const g of geometries)g.dispose();}
}
// Libraries hold overlapping templates. Place named roots, never the whole GLB scene.
export class JamKit {
 constructor(engine,libraries,layout){this.engine=engine;this.libraries=libraries;this.layout=layout;this.group=new THREE.Group();this.group.name='SkillsJamPlacedKit';this.instances=new Map();this.mixers=[];this.enabled=true;engine.scene.add(this.group);for(const p of layout.placements)this.place(p);}
 instanceCrowd(people){
  const groups=new Map(),materials=new Map();let count=0;this.crowdMotion={value:1};
  for(const node of people){if(replacedNode(node))continue;const variant=count++%6+1,pose=node.jamHuman.pose||'idle',key=variant+':'+pose;if(!groups.has(key))groups.set(key,{variant,pose,nodes:[]});groups.get(key).nodes.push(node);for(const child of node.jamHuman.parts)child.jamReplace=true;}
  for(const {variant,pose,nodes} of groups.values()){
   const source=this.libraries.get('crowd_kit').scene.getObjectByName('crowd_'+variant),template=bakeCrowdTemplate(source,pose);
   template.traverse(o=>{if(!o.isMesh)return;
    if(!materials.has(o.material)){const m=o.material.clone();m.onBeforeCompile=shader=>{shader.uniforms.jamCrowdTime=this.engine.time;shader.uniforms.jamCrowdMotion=this.crowdMotion;shader.vertexShader='uniform float jamCrowdTime;uniform float jamCrowdMotion;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
vec3 guestOrigin=instanceMatrix[3].xyz;float guestPhase=guestOrigin.x*.73+guestOrigin.z*.41;
transformed.x+=sin(jamCrowdTime*.8+guestPhase)*max(position.y,0.)*.011*jamCrowdMotion;
transformed.z+=sin(jamCrowdTime*.6+guestPhase)*max(position.y,0.)*.007*jamCrowdMotion;`);};m.customProgramCacheKey=()=> 'jam-social-sway-v4';materials.set(o.material,m);}
    const batch=new THREE.InstancedMesh(o.geometry,materials.get(o.material),nodes.length);batch.name=`Festival guests ${variant} ${pose}`;batch.userData.handGrip=template.userData.handGrip;batch.castShadow=true;batch.receiveShadow=true;batch.customDepthMaterial=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking});batch.customDepthMaterial.onBeforeCompile=batch.material.onBeforeCompile;batch.customDepthMaterial.customProgramCacheKey=()=> 'jam-social-sway-depth-v4';for(let i=0;i<nodes.length;i++)batch.setMatrixAt(i,new THREE.Matrix4().fromArray(nodes[i].world).scale(source.scale));batch.computeBoundingSphere();this.group.add(batch);});
  }this.backgroundPeople=count;
 }
 place(p){const lib=this.libraries.get(p.library);let source;lib.scene.traverse(n=>{if(n.userData.asset_id===p.asset)source=n;});source??=lib.scene.getObjectByName(p.asset);if(!source)throw new Error(`Missing kit root ${p.asset}`);const o=clone(source);o.name=p.id;o.position.fromArray(p.position);o.rotation.y=p.rotation||0;if(p.scale)o.scale.setScalar(p.scale);o.userData={...o.userData,asset:p.asset,interactive:p.interactive||null};o.traverse(n=>{if(n.isMesh){if(n.isSkinnedMesh)n.frustumCulled=false;n.castShadow=!p.skyCard;n.receiveShadow=!p.skyCard;const ms=Array.isArray(n.material)?n.material:[n.material];for(const m of ms)m.side=THREE.DoubleSide;}});this.group.add(o);this.instances.set(p.id,o);if(lib.animations.length){const mixer=new THREE.AnimationMixer(o);const actions=Object.fromEntries(lib.animations.map(c=>[c.name,mixer.clipAction(c)]));const entry={mixer,actions,object:o};this.mixers.push(entry);actions[p.clip||'idle']?.play();}return o;}
 play(id,clip,once=false){const m=this.mixers.find(m=>m.object.name===id);if(!m?.actions[clip])return false;Object.values(m.actions).forEach(a=>a.stop());const action=m.actions[clip];action.reset();action.setLoop(once?THREE.LoopOnce:THREE.LoopRepeat,once?1:Infinity);action.clampWhenFinished=once;action.play();return true;}
 setDressed(enabled){this.enabled=enabled;this.group.visible=enabled;for(const b of this.engine.batches)b.dirty=true;}
 update(time){if(this.crowdMotion)this.crowdMotion.value=this.engine.play?.reduced||this.engine.play?.concert?.active?0:1;const dt=this.lastTime===undefined?0:Math.min(.1,Math.max(0,time-this.lastTime));this.lastTime=time;for(const {mixer} of this.mixers){if(this.engine.jamReview)mixer.setTime(time);else mixer.update(dt);}const ball=this.instances.get('kickball');if(ball&&!this.controlledBall){const phase=time%1;ball.position.y=.20+Math.max(0,Math.sin(phase*Math.PI))*0.42;ball.rotation.x=time*2;ball.rotation.z=time;}}
 stats(){let tris=0,draws=0;this.group.traverse(o=>{if(o.isMesh){tris+=(o.geometry.index?.count||o.geometry.attributes.position.count)/3*(o.isInstancedMesh?o.count:1);draws+=o.geometry.groups.length||1;}});return{finiteTransforms:this.group.children.every(o=>o.matrixWorld.elements.every(Number.isFinite)),placedRoots:this.instances.size,backgroundPeople:this.backgroundPeople||0,triangles:tris,meshBatches:draws,clips:Object.keys(this.mixers[0]?.actions||{}),enabled:this.enabled};}
}
export async function loadJamKit(engine){const loader=new GLTFLoader();const layout=await fetch('assets/models/layout.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Kit layout failed to load');return r.json();});const keys=['tent_kit','props_kit','player_jam','crowd_kit','world_dressing'];const libs=await Promise.all(keys.map(async k=>[k,await loader.loadAsync(`assets/models/${k}.glb?v=${layout.modelRevisions?.[k]||1}`)]));repairKitSigns(new Map(libs),Math.min(8,engine.renderer?.capabilities.getMaxAnisotropy()||4));for(const [key,lib] of libs)if(key!=='player_jam'&&!new URLSearchParams(location.search).has('unbatched')){const roots=[];lib.scene.traverse(o=>{if(o.userData.asset_id)roots.push(o);});for(const root of roots){if(key==='crowd_kit')compactSkinnedAsset(root);compactStaticAsset(root);}}return new JamKit(engine,new Map(libs),layout);}
export function replacedNode(n){for(let p=n;p;p=p.parent)if(p.jamReplace)return true;return false;}
