import * as THREE from 'three';
const v=(x,y,z)=>new THREE.Vector3(x,y,z);
function bone(root,prefix){let found;root.traverse(o=>{if(o.isBone&&o.name.startsWith(prefix))found=o;});return found;}
export const ROBOT_ROUTE=Object.freeze([[15.3,0,3.75],[8.6,0,3.75],[8.6,0,-11],[7.7,0,-24],[4.4,0,-28]]);
export class FestivalReactions {
 constructor(kit,{reduced=false,repaired=false}={}){
  this.kit=kit;this.reduced=reduced;this.cheerUntil=0;this.danceUntil=0;this.robot=kit.instances.get('robot');this.robotHome=this.robot.position.clone();this.robotRepaired=repaired;
  // Two stewards stay beside the repair booth; the existing stage crowd reacts too.
  for(const [i,x] of [[0,14.1],[1,16.5]])kit.place({id:'repair_helper_'+i,library:'crowd_kit',asset:'crowd_'+(i?2:3),position:[x,0,2.0],rotation:i?-.35:.35});
  this.guests=[...Array.from({length:6},(_,i)=>kit.instances.get('guest_'+i)),kit.instances.get('repair_helper_0'),kit.instances.get('repair_helper_1')].filter(Boolean).map(o=>({o,p:o.position.clone(),rotation:o.rotation.y,bones:Object.fromEntries(['upper_arm_L','upper_arm_R','forearm_L','forearm_R','spine','head'].map(n=>{const b=bone(o,n);return[n,b?{b,q:b.quaternion.clone()}:null];}))}));
  const badge=new THREE.Group();badge.name='RepairedRobotBadge';badge.position.set(0,.66,.175);this.robot.add(badge);this.badge=badge;
  const light=new THREE.Mesh(new THREE.CircleGeometry(.055,20),new THREE.MeshStandardMaterial({color:'#81edb5',emissive:'#3aba80',emissiveIntensity:.7,roughness:.5}));badge.add(light);const check=new THREE.Line(new THREE.BufferGeometry().setFromPoints([v(-.027,0,.006),v(-.008,-.022,.006),v(.032,.026,.006)]),new THREE.LineBasicMaterial({color:'#154c42'}));badge.add(check);badge.visible=repaired;
  if(repaired)this.robot.position.fromArray(ROBOT_ROUTE.at(-1));
 }
 celebrate(t,kind='success'){this.cheerStart=t;this.cheerUntil=t+(kind==='repair'?5:3);if(kind==='record'||kind==='finale')this.danceUntil=t+30;}
 repaired(t){this.robotRepaired=true;this.badge.visible=true;this.celebrate(t,'repair');}
 beginRepair(){this.robotRepaired=false;this.routeIndex=undefined;this.badge.visible=false;this.robot.position.copy(this.robotHome);this.robot.rotation.set(0,0,0);}
 leaveBench(completed=false){if(!completed||!this.robotRepaired)return;this.routeIndex=0;if(this.reduced){this.robot.position.fromArray(ROBOT_ROUTE.at(-1));this.routeIndex=ROBOT_ROUTE.length;}}
 turnBone(guest,name,angle,axis){const entry=guest.bones[name];if(!entry)return;const b=entry.b,parentQ=b.parent.getWorldQuaternion(new THREE.Quaternion()),rootQ=guest.o.getWorldQuaternion(new THREE.Quaternion());const localAxis=axis.clone().applyQuaternion(rootQ).applyQuaternion(parentQ.invert());b.quaternion.copy(entry.q).premultiply(new THREE.Quaternion().setFromAxisAngle(localAxis,angle));b.updateWorldMatrix(false,true);}
 update(dt,t,{activity,musicPlaying=false,finale=false}={}){
  const cheer=t<this.cheerUntil,dance=(t<this.danceUntil&&musicPlaying)||finale;
  for(let i=0;i<this.guests.length;i++){
   const g=this.guests[i],o=g.o;for(const e of Object.values(g.bones))if(e)e.b.quaternion.copy(e.q);
   const localCheer=cheer&&(i<6||activity==='aid'),moving=!this.reduced;const age=t-(this.cheerStart||0)-i*.09,envelope=localCheer?Math.max(0,Math.min(1,age/.45,(this.cheerUntil-t)/.7)):0;
   o.position.copy(g.p);o.rotation.y=g.rotation;
   if(moving){o.position.y+=dance?Math.sin(t*1.4+i)*.006:0;o.rotation.y+=Math.sin(t*(dance?1.2:.22)+i)*(dance?.07:.035);}
   o.updateWorldMatrix(true,true);
   if(moving){const beat=Math.sin(t*1.8+i);this.turnBone(g,'upper_arm_L',dance?-.25+beat*.10:-.15*envelope,v(0,0,1));this.turnBone(g,'upper_arm_R',localCheer?(i%3===0?.85:.48)*envelope:dance?.25-beat*.1:0,v(0,0,1));this.turnBone(g,'forearm_L',-.25*envelope,v(1,0,0));this.turnBone(g,'forearm_R',-.85*envelope,v(1,0,0));this.turnBone(g,'head',Math.sin(age*3)*.06*envelope,v(1,0,0));this.turnBone(g,'spine',Math.sin(t*1.2+i)*.012,v(0,0,1));}
  }
  if(this.robotRepaired&&activity!=='aid'){
   if(this.routeIndex!==undefined&&this.routeIndex<ROBOT_ROUTE.length){const goal=new THREE.Vector3(...ROBOT_ROUTE[this.routeIndex]),delta=goal.sub(this.robot.position);delta.y=0;const distance=delta.length(),step=Math.min(distance,Math.min(dt,.1)*2.2);if(distance<.025)this.routeIndex++;else{this.robot.position.addScaledVector(delta.normalize(),step);this.robot.rotation.y=Math.atan2(delta.x,delta.z);}if(!this.reduced)this.robot.position.y=Math.abs(Math.sin(t*10))*.025;}
   else{this.robot.position.y=0;this.robot.rotation.y=0;this.robot.rotation.z=!this.reduced&&dance?Math.sin(t*4)*.075:0;}
  }
 }
}
