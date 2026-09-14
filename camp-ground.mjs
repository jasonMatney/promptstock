import * as T from 'three';
export const CAMP_OBSTACLES=[
 {x:-5,z:-4,hx:2.1,hz:2.2}, // canvas roof and sleeping area; interact at the door
 {x:2,z:-2,r:1.05}, {x:-1,z:1,r:1.12}, // Sasquatch, hearth and tripod
 {x:-3,z:2,hx:1.3,hz:.32}, {x:2,z:2,hx:1.3,hz:.32},
 ...[-8,-2].flatMap(x=>[-7.01,-.99].map(z=>({x,z,r:.14})))
];
export const BED_APPROACH={x:-5,z:-.95};
export function campBlocked(x,z,r=.3){
 if(x*x+(z+2)**2>(11.6-r)**2)return true;
 return CAMP_OBSTACLES.some(o=>o.r!==undefined?Math.hypot(x-o.x,z-o.z)<o.r+r:
  Math.hypot(Math.max(0,Math.abs(x-o.x)-o.hx),Math.max(0,Math.abs(z-o.z)-o.hz))<r);
}
export function moveInCamp(p,dx,dz){
 // Short swept steps prevent tunnelling on slow frames; separate axes slide along edges.
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.08));
 for(let i=0;i<steps;i++){if(!campBlocked(p.x+dx/steps,p.z))p.x+=dx/steps;if(!campBlocked(p.x,p.z+dz/steps))p.z+=dz/steps;}
 return p;
}
export function campGrass(parent){
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute([
  -.08,0,0,.08,0,0,.03,.32,.035, 0,0,-.08,0,0,.08,-.025,.27,.02],3));geometry.computeVertexNormals();
 const material=new T.MeshStandardMaterial({color:'#72935c',roughness:1,side:T.DoubleSide});
 const points=[];let seed=2614;const random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
 for(let i=0;i<4200;i++){const x=(random()-.5)*23,z=(random()-.5)*23-2;
  if(campBlocked(x,z,.55)||Math.abs(x)<.9&&z>-.2||Math.abs(x+5)<.85&&z>-.95&&z<4)continue;
  points.push([x,z,.35+random()*.7,random()*Math.PI*2,random()]);}
 const grass=new T.InstancedMesh(geometry,material,points.length),dummy=new T.Object3D(),color=new T.Color();
 points.forEach(([x,z,s,yaw,t],i)=>{dummy.position.set(x,.46,z);dummy.scale.setScalar(s);dummy.rotation.y=yaw;dummy.updateMatrix();grass.setMatrixAt(i,dummy.matrix);grass.setColorAt(i,color.setHSL(.23+t*.04,.22+t*.12,.25+t*.14));});
 grass.receiveShadow=true;grass.name='Cove grass clumps';grass.computeBoundingSphere();parent.add(grass);return grass;
}
