import * as T from 'three';
import {compactStaticAsset} from './jam-kit.mjs';

// Image-generated surface studies are applied to editable, independently lit meshes.
const v=(...a)=>new T.Vector3(...a);
const material=(color,extra={})=>new T.MeshStandardMaterial({color,roughness:.92,...extra});
function add(p,g,m,xyz=[0,0,0],scale=[1,1,1]){const o=new T.Mesh(g,m);o.position.fromArray(xyz);o.scale.fromArray(scale);o.castShadow=o.receiveShadow=true;p.add(o);return o;}
function ellipsoid(p,m,xyz,scale){return add(p,new T.SphereGeometry(1,18,12),m,xyz,scale);}
function rod(p,m,a,b,r=.025,r2=r){const d=v(...b).sub(v(...a));const o=add(p,new T.CylinderGeometry(r2,r,d.length(),8),m,v(...a).add(v(...b)).multiplyScalar(.5).toArray());o.quaternion.setFromUnitVectors(v(0,1,0),d.normalize());return o;}
function curve(p,m,points,r=.018){return add(p,new T.TubeGeometry(new T.CatmullRomCurve3(points.map(a=>v(...a))),20,r,5,false),m);}
function surface(name,repeat=1){const map=new T.TextureLoader().load('assets/camp-v2/'+name+'.png');map.colorSpace=T.SRGBColorSpace;map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(repeat,repeat);map.anisotropy=4;return map;}
export function campMaterials(){const fur=surface('fur',2),canvas=surface('canvas',2),stone=surface('stone');return {
 fur:material('#d8bfa8',{map:fur}),chest:material('#efd4b7',{map:fur}),skin:material('#aa7b57'),dark:material('#32271f'),wood:material('#745038'),rope:material('#ddc694'),cream:material('#eedcb6'),
 canvas:material('#fff4db',{map:canvas,bumpMap:canvas,bumpScale:.016,side:T.DoubleSide}),stone:material('#d0cfbf',{map:stone,bumpMap:stone,bumpScale:.025}),metal:material('#343b37',{metalness:.65,roughness:.6})};}

// Branch geometry follows the generated bough study. Real needle silhouettes avoid
// the opaque checkerboard returned by image generation and need no alpha overdraw.
export function pineGrove(parent,placements){
 const proto=new T.Group(),wood=material('#70543c');
 rod(proto,wood,[0,0,0],[.08,7.8,-.05],.19,.018);
 const positions=[],colors=[],green=new T.Color();
 function needle(a,b,width,tint){const d=b.clone().sub(a),side=v(-d.z,.12,d.x).normalize().multiplyScalar(width);positions.push(...a.clone().add(side).toArray(),...a.clone().sub(side).toArray(),...b.toArray());green.set(tint);for(let k=0;k<3;k++)colors.push(green.r,green.g,green.b);}
 for(let level=0;level<8;level++)for(let j=0;j<6;j++){
  const a=j*Math.PI/3+level*1.67+Math.sin(j*3.7+level)*.12,y=1.65+level*.77+Math.sin(j*1.3+level)*.14,len=2.3*(1-level/9.5)*(1+Math.sin(j*2.1+level)*.14),dir=v(Math.cos(a),0,Math.sin(a));
  const start=v(0,y,0),end=dir.clone().multiplyScalar(len).add(v(0,y-.38,0));rod(proto,wood,start.toArray(),end.toArray(),.035*(1-level/10),.006);
  for(let k=1;k<=6;k++){
   const t=k/6,base=start.clone().lerp(end,t);base.y+=.18*t*t;
   for(let side=-1;side<=1;side+=2){
    const angle=a+side*(.62+.2*t),sprig=v(Math.cos(angle),.2,Math.sin(angle)).multiplyScalar(.65*(1-.3*t));
    for(let n=0;n<6;n++){
     const q=n/6,root=base.clone().addScaledVector(sprig,q),spread=.25*(1-q*.5);
     for(const s of [-1,1]){const tip=root.clone().add(v(Math.cos(angle+s*.9)*spread,.13*Math.sin(n*2.4+side)+(n%2)*.08,Math.sin(angle+s*.9)*spread));needle(root,tip,.025,((n+k+level)%4===0)?'#79954c':((n+k)%3===0)?'#456b3b':'#315638');}
    }
   }
  }
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('color',new T.Float32BufferAttribute(colors,3));g.computeVertexNormals();
 const foliage=add(proto,g,material('#ffffff',{vertexColors:true,side:T.DoubleSide}));foliage.name='Pine needles';
 compactStaticAsset(proto);proto.updateMatrixWorld(true);
 const forest=new T.Group();forest.name='Branching mountain pines';parent.add(forest);const dummy=new T.Object3D();
 proto.traverse(o=>{if(!o.isMesh)return;const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);const instances=new T.InstancedMesh(geometry,o.material,placements.length);instances.castShadow=instances.receiveShadow=true;placements.forEach((p,i)=>{dummy.position.set(p[0],p[1],p[2]);dummy.rotation.set(0,i*2.399,Math.sin(i*1.9)*.025);dummy.scale.setScalar(p[3]||1);dummy.updateMatrix();instances.setMatrixAt(i,dummy.matrix);});instances.computeBoundingSphere();forest.add(instances);});
 return forest;
}

function tuft(parent,m,p,size,angle=0){const points=[v(.001,0),v(.06,.07),v(.08,.19),v(.045,.3),v(.002,.4)].map(a=>new T.Vector2(a.x,a.y));const g=new T.LatheGeometry(points,7);const pos=g.attributes.position;for(let i=0;i<pos.count;i++)pos.setX(i,pos.getX(i)+.22*pos.getY(i)*pos.getY(i));g.computeVertexNormals();const o=add(parent,g,m,p,size);o.rotation.z=Math.PI+angle;return o;}
export function sasquatch(parent,m){
 const iris=material('#c69954'),gleam=material('#fcebd0');
 const root=new T.Group();root.name='Sasquatch · shaggy lake guardian';root.position.set(2,.35,-2);parent.add(root);
 // Broad shoulders taper into hips; bent elbows and long hands read as a relaxed host.
 const profile=[[.29,.78],[.48,.93],[.56,1.25],[.61,1.6],[.75,1.88],[.62,2.03],[.34,2.1],[.28,2.24]];
 const body=add(root,new T.LatheGeometry(profile.map(p=>new T.Vector2(...p)),24),m.fur);body.scale.z=.64;
 ellipsoid(root,m.chest,[0,1.58,.22],[.46,.48,.19]);ellipsoid(root,m.fur,[0,2.35,0],[.43,.5,.35]);
 ellipsoid(root,m.skin,[0,2.23,.29],[.265,.27,.115]);
 for(const s of [-1,1]){
  ellipsoid(root,m.fur,[s*.34,.62,0],[.23,.59,.25]);
  ellipsoid(root,m.skin,[s*.34,.13,.22],[.24,.15,.38]);
  for(let i=0;i<4;i++)ellipsoid(root,m.skin,[s*.34+(i-1.5)*.10,.105,.5+(i===1?.025:0)],[.059,.07,.12]);
  const upper=ellipsoid(root,m.fur,[s*.69,1.63,-.03],[.25,.49,.26]);upper.rotation.z=s*.2;
  const lower=ellipsoid(root,m.fur,[s*.79,1.05,.1],[.19,.4,.20]);lower.rotation.x=-.2;
  ellipsoid(root,m.skin,[s*.8,.75,.19],[.14,.19,.085]);
  for(let i=0;i<4;i++)rod(root,m.skin,[s*.8+(i-1.5)*.061,.7,.21],[s*.8+(i-1.5)*.055,.49+Math.abs(i-1.5)*.035,.25],.031,.022);
  rod(root,m.skin,[s*.8-s*.12,.78,.20],[s*.8-s*.18,.63,.28],.048,.029);
  ellipsoid(root,m.fur,[s*.4,2.32,0],[.12,.17,.095]);ellipsoid(root,m.skin,[s*.442,2.32,.045],[.054,.085,.04]);
  // Shadowed sockets, small amber eyes and heavy brows instead of cartoon googly eyes.
  ellipsoid(root,m.dark,[s*.12,2.41,.318],[.091,.071,.038]);
  ellipsoid(root,iris,[s*.12,2.405,.351],[.044,.033,.019]);ellipsoid(root,m.dark,[s*.12,2.405,.366],[.018,.024,.009]);
  ellipsoid(root,gleam,[s*.12-.009,2.417,.373],[.008,.008,.004]);
  const brow=ellipsoid(root,m.fur,[s*.12,2.477,.327],[.15,.055,.067]);brow.rotation.z=s*.1;
  ellipsoid(root,m.skin,[s*.13,2.205,.374],[.12,.093,.052]);
  for(let i=0;i<6;i++)tuft(root,m.fur,[s*(.40+i%2*.025),2.44-i*.07,.13],[1,1,1],s*-.23);
  for(let i=0;i<6;i++)tuft(root,m.fur,[s*(.58+i*.032),1.96-i*.15,.10],[1.1,1.05,1.1],s*.18);
 }
 ellipsoid(root,m.dark,[0,2.32,.406],[.09,.062,.058]);
 curve(root,m.dark,[[-.13,2.16,.408],[-.07,2.135,.43],[.015,2.13,.432],[.10,2.15,.419]],.009);
 for(let i=0;i<40;i++){const a=i*2.4,y=.95+(i%7)*.15;tuft(root,m.fur,[Math.sin(a)*(.47+(y-1)*.12),y,Math.cos(a)*.33],[.8,.72,.8],Math.sin(i)*.2);}
 for(let i=0;i<7;i++)tuft(root,m.fur,[(i-3)*.073,2.84-Math.abs(i-3)*.035,0],[1,1,1],(i-3)*.1);
 compactStaticAsset(root);root.traverse(o=>{if(o.isMesh)o.castShadow=o.receiveShadow=true;});return root;
}

export function canvasTent(parent,m){
 const root=new T.Group();root.name='Cove canvas tent · stitched fly and tied doors';root.position.set(-5,.45,-4);parent.add(root);
 const floor=material('#4b6258');add(root,new T.BoxGeometry(3.7,.07,4),floor,[0,.035,0]);
 const nx=12,nz=16;
 for(const side of [-1,1]){
  const ps=[],uv=[],ix=[];
  for(let z=0;z<=nz;z++)for(let x=0;x<=nx;x++){const u=x/nx,w=z/nz;ps.push(side*u*2.05,.16+(1-u)*2.02-.13*Math.sin(Math.PI*u)*Math.sin(w*Math.PI),-2.15+w*4.3);uv.push(u*1.25,w*1.5);}
  for(let z=0;z<nz;z++)for(let x=0;x<nx;x++){const a=z*(nx+1)+x,b=a+nx+1;ix.push(a,b,a+1,a+1,b,b+1);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(ps,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(ix);g.computeVertexNormals();add(root,g,m.canvas);
  for(const z of [-2.15,2.15]){rod(root,m.rope,[0,2.19,z],[side*2.05,.16,z],.018);curve(root,m.rope,[[side*1.96,.22,z],[side*2.52,.13,z*1.2],[side*3,.025,z*1.4]],.012);rod(root,m.wood,[side*3,0,z*1.4],[side*3-.06,.19,z*1.4],.035);}
  // Parted front door panels follow the roof without blocking the entry.
  const flap=new T.BufferGeometry();flap.setAttribute('position',new T.Float32BufferAttribute([0,2.14,2.07,side*2,.1,2.07,side*1.55,.12,2.14,0,2.14,2.07,side*1.55,.12,2.14,side*.55,1.61,2.12],3));flap.setAttribute('uv',new T.Float32BufferAttribute([0,1,1,0,.75,0,0,1,.75,0,.25,.8],2));flap.computeVertexNormals();add(root,flap,m.canvas);
  rod(root,m.canvas,[side*.56,1.59,2.12],[side*1.57,.15,2.14],.07);rod(root,m.rope,[side*1.06,.82,2.22],[side*1.24,.72,2.17],.02);
 }
 rod(root,m.wood,[0,0,-2.07],[0,2.23,-2.07],.037);rod(root,m.wood,[0,0,2.09],[0,2.23,2.09],.037);rod(root,m.rope,[0,2.2,-2.2],[0,2.2,2.2],.021);
 const bag=ellipsoid(root,material('#3f7372'),[.60,.19,.15],[.52,.15,1.12]);
 const stitching=material('#548989');for(let i=0;i<7;i++)curve(root,stitching,[[.13,.20,-.65+i*.26],[.35,.325,-.65+i*.26],[.7,.33,-.65+i*.26],[1.07,.20,-.65+i*.26]],.012);
 ellipsoid(root,m.cream,[.6,.29,-.68],[.42,.13,.28]);
 // A small warm lantern keeps the entrance legible at night without another shadow light.
 const lamp=new T.Group();lamp.position.set(-1.45,.1,1.42);root.add(lamp);add(lamp,new T.CylinderGeometry(.12,.14,.06,12),m.metal,[0,.03,0]);add(lamp,new T.CylinderGeometry(.085,.085,.2,12),material('#f8d685',{emissive:'#ed9a3d',emissiveIntensity:.8}),[0,.16,0]);add(lamp,new T.ConeGeometry(.15,.09,12),m.metal,[0,.31,0]);curve(lamp,m.metal,[[-.10,.28,0],[-.11,.44,0],[.11,.44,0],[.10,.28,0]],.012);
 compactStaticAsset(root);root.traverse(o=>{if(o.isMesh)o.castShadow=o.receiveShadow=true;});return {root,bed:bag};
}

export function campfire(parent,m){
 const root=new T.Group();root.name='River stone hearth';root.position.set(-1,.5,1);parent.add(root);
 add(root,new T.CylinderGeometry(.72,.74,.045,28),material('#292825'),[0,-.15,0]);
 for(let i=0;i<13;i++){const a=i/13*Math.PI*2;const stone=ellipsoid(root,m.stone,[Math.sin(a)*.82,-.07+(i%3)*.015,Math.cos(a)*.82],[.25,.18,.21]);stone.rotation.set(i*.3,a,i*.1);}
 const char=material('#392c25'),ember=material('#dd6021',{emissive:'#ff6420',emissiveIntensity:1.5});
 for(let i=0;i<4;i++){const a=i*Math.PI/2+.3,dir=v(Math.cos(a),0,Math.sin(a));rod(root,char,dir.clone().multiplyScalar(-.58).add(v(0,-.03,0)).toArray(),dir.clone().multiplyScalar(.55).add(v(0,.08,0)).toArray(),.12,.09);for(let j=0;j<4;j++)ellipsoid(root,ember,[dir.x*(j*.2-.3),.08,dir.z*(j*.2-.3)],[.055,.019,.035]);}
 const flames=[];
 for(let i=0;i<7;i++){
  const g=new T.LatheGeometry([[.035,0],[.12,.08],[.13,.22],[.07,.36],[.04,.49],[.001,.68]].map(p=>new T.Vector2(...p)),10);const pos=g.attributes.position;
  for(let n=0;n<pos.count;n++){const y=pos.getY(n);pos.setX(n,pos.getX(n)+Math.sin(y*6+i)*y*.16);}g.computeVertexNormals();
  const flame=add(root,g,new T.MeshBasicMaterial({color:i%2?'#ffad32':'#f67720',toneMapped:false}),[Math.sin(i*2.4)*.25,.03,Math.cos(i*2.4)*.21],[.8, .7+(i%3)*.18,.7]);flame.castShadow=flame.receiveShadow=false;flames.push(flame);
  const core=add(flame,g,new T.MeshBasicMaterial({color:'#ffe191',toneMapped:false}),[0,0,0],[.6,.57,.6]);core.castShadow=core.receiveShadow=false;
 }
 const light=new T.PointLight('#ffb35a',12,13,2);light.position.set(.12,.4,.08);light.visible=false;root.add(light);
 const c=document.createElement('canvas');c.width=c.height=64;const ctx=c.getContext('2d'),gradient=ctx.createRadialGradient(32,32,0,32,32,32);gradient.addColorStop(0,'rgba(193,192,177,.18)');gradient.addColorStop(.5,'rgba(193,192,177,.06)');gradient.addColorStop(1,'rgba(193,192,177,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);const smokeMap=new T.CanvasTexture(c),smoke=[];
 for(let i=0;i<7;i++){const puff=new T.Sprite(new T.SpriteMaterial({map:smokeMap,transparent:true,depthWrite:false,opacity:.4}));puff.position.set(0,1.35+i*.5,0);puff.scale.setScalar(.5+i*.16);root.add(puff);smoke.push(puff);}
 // One point draw for drifting sparks; no per-spark objects, lights or shadow passes.
 const p=[];for(let i=0;i<28;i++)p.push(Math.sin(i*2.4)*.36,.25+(i%9)*.15,Math.cos(i*2.4)*.34);const eg=new T.BufferGeometry();eg.setAttribute('position',new T.Float32BufferAttribute(p,3));const sparks=new T.Points(eg,new T.PointsMaterial({color:'#ffd387',size:.026,transparent:true,opacity:.75,depthWrite:false,toneMapped:false}));root.add(sparks);
 const pot=add(root,new T.LatheGeometry([[0,0],[.23,0],[.30,.06],[.33,.24],[.35,.26]].map(p=>new T.Vector2(...p)),24),m.metal,[0,.51,0]);
 add(root,new T.TorusGeometry(.34,.025,6,24),m.metal,[0,.77,0]).rotation.x=Math.PI/2;
 add(root,new T.CircleGeometry(.30,24),material('#ae733b'),[0,.755,0]).rotation.x=-Math.PI/2;
 for(const s of [-1,1])curve(root,m.metal,[[s*.29,.70,0],[s*.46,.77,0],[s*.44,.87,0],[s*.32,.83,0]],.023);
 for(const a of [0,2.1,4.2])rod(root,m.metal,[Math.cos(a)*.75,-.02,Math.sin(a)*.75],[0,1.24,0],.025);
 rod(root,m.metal,[0,1.24,0],[0,.80,0],.012);
 const spoon=rod(root,m.wood,[.1,.72,0],[.55,1.2,.1],.023);
 const staticParts=new T.Group();staticParts.name='Batched hearth stones and cookware';for(const o of [...root.children])if(o.isMesh&&!flames.includes(o)&&o!==spoon)staticParts.add(o);root.add(staticParts);compactStaticAsset(staticParts);staticParts.traverse(o=>{if(o.isMesh)o.castShadow=o.receiveShadow=true;});
 return {root,flames,smoke,light,pot,spoon,sparks};
}
