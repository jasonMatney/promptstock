import {concertSeats,FEATURED_SEATS} from './concert-layout.mjs';
import * as THREE from 'three';
import {clone} from 'three/addons/utils/SkeletonUtils.js';

const V=(...a)=>new THREE.Vector3(...a);
const ease=t=>t*t*(3-2*t);
// Deliberately slow, continuous camera moves. Time comes from the song, not wall time.
const SHOTS=[
 [0,[13,9,-13],[0,3,-33]], [15,[6,5,-24],[0,2.8,-33]],
 [32,[2.5,3,-28],[0,2.8,-33.5]], [52,[-9,4,-27],[-1,2.8,-33]],
 [72,[-7,3,-35],[1,1.4,-24]], [92,[8,6,-22],[0,2.8,-33]],
 [112,[3,3.2,-28],[0,2.8,-33.5]], [136,[-8,4.5,-25],[0,2.8,-33]],
 [160,[10,7,-20],[0,2.5,-30]], [180,[0,9,-14],[0,2.5,-31]],
 [194,[0,11,-10],[0,3,-31]]
];
export function concertCamera(time,{steady=false,aspect=1.6}={}){
 if(steady)return {position:[0,aspect<1?9:6,aspect<1?-12:-21],target:[0,2.8,-33]};
 const t=Math.max(0,Math.min(194,Number(time)||0));let i=0;while(i<SHOTS.length-2&&t>SHOTS[i+1][0])i++;
 const shots=aspect<1?SHOTS.map(s=>s[0]===72?[72,[6,4,-30],[0,1.5,-27]]:[s[0],[s[1][0]*.65,s[1][1]+3,s[1][2]+8],s[2]]):SHOTS;
 const a=shots[i],b=shots[i+1],k=ease(THREE.MathUtils.clamp((t-a[0])/(b[0]-a[0]),0,1));
 const p=a[1].map((v,j)=>THREE.MathUtils.lerp(v,b[1][j],k)),target=a[2].map((v,j)=>THREE.MathUtils.lerp(v,b[2][j],k));

 return {position:p,target};
}
function texture(draw,w=1024,h=512){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
function flagTexture(){return texture((c,w,h)=>{c.fillStyle='#fff9e9';c.fillRect(0,0,w,h);c.fillStyle='#df253a';for(let i=0;i<5;i+=2)c.fillRect(0,i*h/5,w,h/5);c.fillStyle='#1463bb';c.beginPath();c.moveTo(0,0);c.lineTo(w*.44,h/2);c.lineTo(0,h);c.fill();c.fillStyle='white';c.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?h*.09:h*.22;c.lineTo(w*.15+Math.cos(a)*r,h/2+Math.sin(a)*r);}c.closePath();c.fill();},768,512);}
function rig(o){const bones={};o.traverse(b=>{if(b.isBone)bones[b.name]={b,q:b.quaternion.clone()};});return {o,bones};}
function turn(r,prefix,a,axis=V(0,0,1)){const entry=Object.values(r.bones).find(e=>e.b.name.startsWith(prefix));if(!entry)return;const b=entry.b,parent=b.parent.getWorldQuaternion(new THREE.Quaternion()),root=r.o.getWorldQuaternion(new THREE.Quaternion());b.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(axis.clone().applyQuaternion(root).applyQuaternion(parent.invert()),a));b.updateWorldMatrix(false,true);}
function snapshot(o){return {o,p:o.position.clone(),q:o.quaternion.clone(),visible:o.visible};}
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.65,...extra});
function mesh(parent,geometry,material,pos){const o=new THREE.Mesh(geometry,material);if(pos)o.position.fromArray(pos);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function box(parent,size,pos,material){return mesh(parent,new THREE.BoxGeometry(...size),material,pos);}

export class FestivalConcert {
 constructor(engine,kit,{reduced=false}={}){this.e=engine;this.kit=kit;this.reduced=reduced;this.steady=reduced;this.active=false;this.built=false;this.crowdMatrix=new THREE.Matrix4();this.crowdRotation=new THREE.Quaternion();this.crowdAxis=V(0,0,1);}
 build(){
  if(this.built)return;this.built=true;this.root=new THREE.Group();this.root.name='One Island One View · concert kit';this.e.scene.add(this.root);this.root.visible=false;
  this.flagMaterial=mat('white',{map:flagTexture(),side:THREE.DoubleSide,roughness:1});
  const loader=new THREE.TextureLoader();this.orbit=loader.load('assets/concert/puerto-rico-orbit.jpg');this.orbit.colorSpace=THREE.SRGBColorSpace;this.landsat=loader.load('assets/concert/puerto-rico-landsat.jpg');this.landsat.colorSpace=THREE.SRGBColorSpace;
  this.photoMaterials=[this.orbit,this.landsat].map(map=>mat('white',{map,side:THREE.DoubleSide,emissive:'white',emissiveMap:map,emissiveIntensity:.22}));
  this.dark=mat('#162b3d');this.gold=mat('#e8b872',{metalness:.65});this.paper=mat('#fff4dd');this.wood=mat('#956136');
  // A concert overlay uses the existing stage footprint and leaves its structure intact.
  box(this.root,[14.8,.12,6.4],[0,1.25,-34],this.dark);
  box(this.root,[12.9,5.7,.15],[0,4.48,-36.8],this.dark);
  mesh(this.root,new THREE.PlaneGeometry(12.5,5.2),this.photoMaterials[0],[0,4.4,-36.69]);
  const title=texture((c,w,h)=>{c.fillStyle='#102638';c.fillRect(0,0,w,h);c.fillStyle='#f9e9c6';c.textAlign='center';c.font='bold 64px Georgia';c.fillText('ONE ISLAND ONE VIEW',w/2,100);c.font='24px sans-serif';c.fillStyle='#74d5d6';c.fillText('BORINQUÉN  •  PUERTO RICO  •  PROMPTSTOCK FINALE',w/2,157);},1536,210);
  mesh(this.root,new THREE.PlaneGeometry(12.5,1.71),new THREE.MeshBasicMaterial({map:title}),[0,6.2,-36.55]);
  for(const x of [-6.65,6.65]){box(this.root,[.15,5.5,.15],[x,4,-36.35],this.gold);const f=mesh(this.root,new THREE.PlaneGeometry(1.5,1),this.flagMaterial,[x,5.3,-36.25]);f.rotation.y=x<0?.15:-.15;}
  // Four original festival character variants become the fictional Puerto Rican headliner.
  this.band=[[-.5,-32.6,4],[-3.7,-33.5,2],[3.5,-33.7,5],[.1,-35.5,1]].map(([x,z,variant],i)=>{
   const source=this.kit.libraries.get('crowd_kit').scene.getObjectByName('crowd_'+variant),o=clone(source);o.position.set(x,1.32,z);o.rotation.y=0;o.name=['Borinquen vocalist','Borinquen cuatro player','Borinquen bassist','Borinquen percussionist'][i];o.traverse(m=>{if(m.isSkinnedMesh)m.frustumCulled=false;if(m.isMesh)m.castShadow=true;});this.root.add(o);return rig(o);
  });
  const mic=mesh(this.root,new THREE.CylinderGeometry(.023,.023,1.5,10),this.dark,[-.5,2.08,-32.12]);mesh(this.root,new THREE.SphereGeometry(.085,12,8),this.dark,[-.5,2.92,-32.12]);mesh(this.root,new THREE.CylinderGeometry(.28,.28,.05,16),this.dark,[-.5,1.34,-32.12]);
  this.instruments=[];for(const [x,z,bass] of [[-3.7,-33.2,false],[3.5,-33.4,true]]){const g=new THREE.Group();g.position.set(x,2.25,z);g.rotation.z=-.5;this.root.add(g);const body=mesh(g,new THREE.SphereGeometry(1,20,12),mat(bass?'#9b2638':'#d9a05a'),[0,0,0]);body.scale.set(.25,.34,.09);box(g,[.08,.65,.06],[0,.49,0],this.wood);mesh(g,new THREE.CircleGeometry(.068,16),this.dark,[0,.06,.094]);for(let s=0;s<(bass?4:10);s++)box(g,[.002,.8,.002],[(s-4.5)*.007,.2,.1],this.gold);this.instruments.push(g);}
  for(const x of [-.6,.6]){mesh(this.root,new THREE.CylinderGeometry(.24,.18,.85,16),mat('#ba5234'),[x,1.77,-34.75]);mesh(this.root,new THREE.CylinderGeometry(.245,.245,.045,20),this.paper,[x,2.21,-34.75]);}
  this.lights=[];for(let i=0;i<6;i++){const x=-6+i*2.4,color=i%3===0?'#ff446b':i%3===1?'#57cfff':'#ffd28b';if(i===1||i===4){const light=new THREE.PointLight(color,26,17,2);light.position.set(x,5,-33.5);this.root.add(light);this.lights.push(light);}mesh(this.root,new THREE.SphereGeometry(.13,12,8),new THREE.MeshBasicMaterial({color}),[x,7,-36.1]);}
  this.beams=[];for(let i=0;i<4;i++){const g=new THREE.ConeGeometry(1.7,10,24,1,true);g.translate(0,-5,0);const beam=mesh(this.root,g,new THREE.MeshBasicMaterial({color:i%2?'#5bbfff':'#ffba8b',transparent:true,opacity:.045,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending}),[-6+i*4,7,-36]);beam.castShadow=false;this.beams.push(beam);}
  const confetti=new THREE.BufferGeometry(),coords=new Float32Array(240*3),colors=new Float32Array(240*3);for(let i=0;i<240;i++){coords.set([Math.sin(i*37)*11,2+(i%29)*.29,-31+Math.cos(i*17)*8],i*3);new THREE.Color(['#ff5568','#fff5d5','#75c6ff'][i%3]).toArray(colors,i*3);}confetti.setAttribute('position',new THREE.BufferAttribute(coords,3));confetti.setAttribute('color',new THREE.BufferAttribute(colors,3));this.confetti=new THREE.Points(confetti,new THREE.PointsMaterial({size:.065,vertexColors:true,transparent:true,opacity:.85,depthWrite:false}));this.root.add(this.confetti);this.confettiBase=coords.slice();
  this.props=[];
 }
 prop(kind,index){const g=new THREE.Group();g.name=kind==='flag'?'Puerto Rican flag':'Puerto Rico satellite sign';this.root.add(g);const pole=mesh(g,new THREE.CylinderGeometry(.012,.012,kind==='flag'?1.15:.65,8),this.wood,[0,kind==='flag'?.45:.2,0]);
  let cloth;if(kind==='flag'){cloth=mesh(g,new THREE.PlaneGeometry(.78,.52,14,8),this.flagMaterial,[.39,.85,0]);}else{box(g,[.93,.65,.035],[0,.62,0],this.paper);mesh(g,new THREE.PlaneGeometry(.85,.55),this.photoMaterials[index%2],[0,.64,.022]);mesh(g,new THREE.PlaneGeometry(.85,.55),this.photoMaterials[index%2],[0,.64,-.022]).rotation.y=Math.PI;}
  const p={g,cloth,index};this.props.push(p);return p;
 }
 buildAudienceProps(){
  if(this.audiencePropBatches)return;
  this.audiencePropBatches=[];this.propGrip=V();this.propScale=V(1,1,1);this.propTilt=new THREE.Quaternion();
  const flags=[],signs=[[],[]];this.seats.forEach((s,i)=>{if(i%3===0)return;if(i%4===0)signs[i%8===0?0:1].push(i);else flags.push(i);});
  const add=(geometry,material,indices)=>{if(!indices.length)return;const o=new THREE.InstancedMesh(geometry,material,indices.length);o.name='Audience flags and Puerto Rico signs';o.castShadow=false;o.frustumCulled=false;this.root.add(o);this.audiencePropBatches.push({o,indices});};
  add(new THREE.CylinderGeometry(.012,.012,1.7,6).translate(0,.76,0),this.wood,flags);
  add(new THREE.PlaneGeometry(.78,.52,1,1).translate(.38,1.43,0),this.flagMaterial,flags);
  for(let i=0;i<2;i++){
   add(new THREE.CylinderGeometry(.012,.012,1.35,6).translate(0,.6,0),this.wood,signs[i]);
   add(new THREE.BoxGeometry(.93,.65,.025).translate(0,1.17,0),this.paper,signs[i]);
   add(new THREE.PlaneGeometry(.85,.55).translate(0,1.17,.017),this.photoMaterials[i],signs[i]);
   add(new THREE.PlaneGeometry(.85,.55).rotateY(Math.PI).translate(0,1.17,-.017),this.photoMaterials[i],signs[i]);
  }
 }
 open(){this.build();this.active=true;this.root.visible=true;this.time=0;this.lastPoseTime=-1;this.steady=this.reduced;this.saved=[];this.rigs=[];this.batches=[];
  // Move every instanced background person into the concert; retain every original matrix.
  const guestKeys=new Set();this.kit.group.traverse(o=>{if(o.isInstancedMesh&&o.name.startsWith('Festival guests'))for(let i=0;i<o.count;i++)guestKeys.add(o.name+':'+i);});const layout=concertSeats(guestKeys.size);
  let n=0;const seats=new Map();this.kit.group.traverse(o=>{if(!o.isInstancedMesh||!o.name.startsWith('Festival guests'))return;const original=o.instanceMatrix.array.slice(),positions=[];for(let i=0;i<o.count;i++){const m=new THREE.Matrix4().fromArray(original,i*16),p=V(),q=new THREE.Quaternion(),s=V();m.decompose(p,q,s);const key=o.name+":"+i;let seat=seats.get(key);if(!seat){const spot=layout[n];seat={p:V(spot.x,0,spot.z),q:new THREE.Quaternion().setFromAxisAngle(V(0,1,0),spot.yaw),phase:n,scale:s.clone(),grip:V(...(o.userData.handGrip||[0,100,0]))};seat.animatedP=seat.p.clone();seat.animatedQ=seat.q.clone();seats.set(key,seat);n++;}positions.push({...seat,s});}this.batches.push({o,original,positions,castShadow:o.castShadow});o.castShadow=false;});
  this.seats=[...seats.values()];this.audienceCount=this.seats.length;if(this.flagMaterial)this.buildAudienceProps();
  // The larger background crowd gets one batched contact-shadow pass. Keep the
  // foreground cast and musicians' detailed shadows, rather than reskinning all
  // 73 distant guests into the sun's shadow map on every refresh.
  const contact=this.e.contactShadows?.[0]?.mesh;
  if(contact&&!this.audienceContacts){const material=contact.material.clone();material.vertexShader=material.vertexShader.replace('modelViewMatrix*vec4(position,1.)','modelViewMatrix*instanceMatrix*vec4(position,1.)');this.audienceContacts=new THREE.InstancedMesh(contact.geometry,material,this.seats.length);this.audienceContacts.name='Concert audience contact shadows';this.root.add(this.audienceContacts);}
  if(this.audienceContacts){for(let i=0;i<this.seats.length;i++){const p=this.seats[i].p;this.crowdMatrix.makeScale(.75,1,.6).setPosition(p.x,.027,p.z);this.audienceContacts.setMatrixAt(i,this.crowdMatrix);}this.audienceContacts.instanceMatrix.needsUpdate=true;this.audienceContacts.computeBoundingSphere();}
  const ids=['guest_0','guest_1','guest_2','guest_3','guest_4','guest_5','repair_helper_0','repair_helper_1','hero','robot','dog'];
  ids.forEach((id,i)=>{const o=this.kit.instances.get(id);if(!o)return;this.saved.push(snapshot(o));o.visible=true;o.position.set(FEATURED_SEATS[i][0],0,FEATURED_SEATS[i][1]);o.rotation.set(0,Math.PI,0);const r=rig(o);r.base=o.position.clone();r.id=id;if(i<9){r.prop=this.prop(i%3===1?'sign':'flag',i);r.hand=Object.values(r.bones).find(e=>e.b.name.startsWith('hand_R'))?.b;}this.rigs.push(r);});
  // Hide old stage musicians and their instruments, while retaining the existing stage itself.
  this.legacy=[];this.hiddenNodes=[];for(const b of this.e.batches||[]){if(!b.mesh?.isInstancedMesh)continue;const original=b.mesh.instanceMatrix.array.slice();let changed=false;for(let i=0;i<b.nodes.length;i++){const m=new THREE.Matrix4().fromArray(original,i*16),p=V().setFromMatrixPosition(m);if(p.z<-33&&p.z>-36.8&&p.y>1.3&&p.y<3.4&&Math.abs(p.x)<5){this.hiddenNodes.push(b.nodes[i]);b.nodes[i].concertHidden=true;m.scale(V(0,0,0));b.mesh.setMatrixAt(i,m);changed=true;}}if(changed){b.mesh.instanceMatrix.needsUpdate=true;this.legacy.push({o:b.mesh,original});}}
  this.update(0,false);for(const b of this.batches){b.o.computeBoundingSphere();b.o.boundingSphere.radius+=.15;}
 }
 update(time,playing){if(!this.active)return;if(time===this.lastPoseTime){const camera=concertCamera(time,{steady:this.steady,aspect:this.e.camera.aspect});this.e.setCamera(camera.position,camera.target);return;}this.lastPoseTime=time;this.time=time;const t=this.reduced?0:time;
  for(let i=0;i<this.rigs.length;i++){const r=this.rigs[i];r.o.position.copy(r.base);r.o.position.y+=this.reduced?0:Math.sin(t*1.3+i)*.006;r.o.rotation.y=Math.PI+(this.reduced?0:Math.sin(t*1.1+i)*.06);r.o.updateWorldMatrix(true,true);for(const e of Object.values(r.bones))e.b.quaternion.copy(e.q);turn(r,'upper_arm_R',(i%3===0?.48:.25)+Math.sin(t*1.6+i)*.07);turn(r,'upper_arm_L',-.08+Math.sin(t*1.5+i)*.06);turn(r,'forearm_R',-1.05+Math.sin(t*1.6+i)*.1,V(1,0,0));turn(r,'spine',Math.sin(t*2+i)*.055);
   if(r.prop){const p=r.hand?r.hand.getWorldPosition(V()):r.o.position.clone().add(V(-.3,1.7,0));r.prop.g.position.copy(p);r.prop.g.rotation.set(0,-.1,Math.sin(t*1.1+i)*.06);}
  }
  for(let b=0;b<this.band.length;b++){const r=this.band[b];for(const e of Object.values(r.bones))e.b.quaternion.copy(e.q);r.o.position.y=1.32+(this.reduced?0:Math.abs(Math.sin(t*4+b))*.025);r.o.updateWorldMatrix(true,true);turn(r,'spine',Math.sin(t*2+b)*.055);turn(r,'upper_arm_L',b===0?-.45:-.2);turn(r,'upper_arm_R',b===0?.45:.2);turn(r,'upper_arm_L',b===0?-.25:-.8,V(1,0,0));turn(r,'upper_arm_R',b===0?-.6:-.85,V(1,0,0));turn(r,'forearm_L',-.85+Math.sin(t*(b===3?8:4))*.18,V(1,0,0));turn(r,'forearm_R',-.9+Math.cos(t*(b===3?8:4))*.22,V(1,0,0));}
  // Animate each guest once, shared by all its material batches. No per-frame allocations
  // or bounding-sphere scans; the conservative bounds are prepared when seats change.
  for(const seat of this.seats){seat.animatedP.copy(seat.p);seat.animatedP.y+=this.reduced?0:Math.sin(t*1.3+seat.phase)*.006;seat.animatedQ.copy(seat.q).multiply(this.crowdRotation.setFromAxisAngle(this.crowdAxis,this.reduced?0:Math.sin(t*1.25+seat.phase)*.022));}
  for(const b of this.batches){for(let i=0;i<b.positions.length;i++){const {animatedP,animatedQ,s}=b.positions[i];b.o.setMatrixAt(i,this.crowdMatrix.compose(animatedP,animatedQ,s));}b.o.instanceMatrix.needsUpdate=true;}
  for(const b of this.audiencePropBatches||[]){for(let i=0;i<b.indices.length;i++){const seat=this.seats[b.indices[i]];this.propGrip.copy(seat.grip).multiply(seat.scale).applyQuaternion(seat.animatedQ).add(seat.animatedP);this.propTilt.setFromAxisAngle(this.crowdAxis,this.reduced?0:Math.sin(t*.9+seat.phase)*.05);b.o.setMatrixAt(i,this.crowdMatrix.compose(this.propGrip,this.propTilt,this.propScale));}b.o.instanceMatrix.needsUpdate=true;}
  for(const p of this.props)if(p.cloth){const pos=p.cloth.geometry.attributes.position;for(let i=0;i<pos.count;i++){const x=pos.getX(i)+.39;pos.setZ(i,this.reduced?0:Math.sin(x*10-t*4+p.index)*x*.12);}pos.needsUpdate=true;p.cloth.geometry.computeVertexNormals();}
  for(let i=0;i<this.beams.length;i++){this.beams[i].rotation.z=.25*Math.sin(t*.3+i);this.beams[i].rotation.x=-.35+Math.sin(t*.2+i)*.12;this.beams[i].visible=!this.reduced&&!this.e.low;}
  this.lights.forEach((l,i)=>{l.intensity=(this.e.low?10:26)*(1+.15*Math.sin(t*2+i));});
  this.confetti.visible=!this.reduced&&time>8;const pos=this.confetti.geometry.attributes.position;for(let i=0;i<pos.count;i++){pos.setY(i,1+((this.confettiBase[i*3+1]-t*.35)%8+8)%8);pos.setX(i,this.confettiBase[i*3]+Math.sin(t+i)*.22);}pos.needsUpdate=true;
  const camera=concertCamera(time,{steady:this.steady,aspect:this.e.camera.aspect});this.e.setCamera(camera.position,camera.target);
 }
 close(){if(!this.active)return;this.active=false;this.root.visible=false;for(const n of this.hiddenNodes||[])delete n.concertHidden;for(const s of this.saved){s.o.position.copy(s.p);s.o.quaternion.copy(s.q);s.o.visible=s.visible;}for(const r of this.rigs)for(const e of Object.values(r.bones))e.b.quaternion.copy(e.q);for(const b of [...this.batches,...this.legacy]){if(b.castShadow!==undefined)b.o.castShadow=b.castShadow;b.o.instanceMatrix.array.set(b.original);b.o.instanceMatrix.needsUpdate=true;b.o.computeBoundingSphere();}for(const p of this.props){p.g.traverse(o=>{if(o.isMesh)o.geometry.dispose();});p.g.removeFromParent();}this.props=[];}
}
