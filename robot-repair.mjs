import * as THREE from 'three';

export const REPAIR_PARTS=Object.freeze([
 {id:'focus',name:'Focus lens',symbol:'◉',color:'#37bfa5',target:[-.20,.70],turn:0,home:[-.39,.33]},
 {id:'spark',name:'Power cell',symbol:'ϟ',color:'#efb63c',target:[0,.59],turn:1,home:[0,.33]},
 {id:'signal',name:'Signal chip',symbol:'⌘',color:'#ed7650',target:[.20,.70],turn:3,home:[.39,.33]}
]);
const mod=n=>(n%4+4)%4;
export class RepairPuzzle {
 constructor(day=1){this.parts=REPAIR_PARTS.map((p,i)=>({...p,rotation:mod(p.turn+1+(day+i)%2),position:[...p.home],fitted:false}));this.charge=0;this.completed=false;this.mistakes=0;}
 get ready(){return this.parts.every(p=>p.fitted);}
 rotate(id){const p=this.parts.find(p=>p.id===id);if(!p||p.fitted||this.completed)return false;p.rotation=mod(p.rotation+1);return true;}
 drop(id,position){const p=this.parts.find(p=>p.id===id);if(!p||p.fitted||this.completed)return 'locked';if(!position.every(Number.isFinite))return 'miss';const near=Math.hypot(position[0]-p.target[0],position[1]-p.target[1])<.135;
  if(!near){p.position=[...p.home];return 'miss';}if(mod(p.rotation)!==p.turn){this.mistakes++;p.position=[...p.home];return 'rotate';}p.fitted=true;p.position=[...p.target];return 'fitted';
 }
 power(dt,held){if(!Number.isFinite(dt)||dt<=0||!this.ready||this.completed)return false;this.charge=Math.max(0,Math.min(1,this.charge+Math.min(dt,.1)*(held?.8:-1.2)));if(this.charge>=1){this.completed=true;return true;}return false;}
}

function outline(index,r){const s=new THREE.Shape();let points;
 if(index===0)points=Array.from({length:32},(_,i)=>{const a=i/32*Math.PI*2,rr=i===7||i===8||i===9?r*.67:r;return[rr*Math.cos(a),rr*Math.sin(a)];});
 else if(index===1)points=[[-r,-r],[r*.12,-r],[r*.12,-r*.1],[r,-r*.1],[r,r],[-r,r]];
 else points=Array.from({length:12},(_,i)=>{const a=i/12*Math.PI*2,rr=i===3?r*.6:r*(i%2?.83:1);return[rr*Math.cos(a),rr*Math.sin(a)];});
 points.forEach((p,i)=>i?s.lineTo(...p):s.moveTo(...p));s.closePath();return s;
}
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.65,...extra});
const pieceGeometry=(i,r,depth)=>new THREE.ExtrudeGeometry(outline(i,r),{depth,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.006,bevelThickness:.004,curveSegments:16});
export class RobotRepair {
 constructor(engine,robot,{onFit=()=>{},onComplete=()=>{},reduced=false,home=null}={}){
  this.e=engine;this.robot=robot;this.onFit=onFit;this.onComplete=onComplete;this.reduced=reduced;this.group=new THREE.Group();this.group.name='RobotRepairBench';engine.scene.add(this.group);this.group.visible=false;this.active=false;
  this.homes=new Map();this.meshes=[];this.sockets=[];this.traces=[];this.lights=[];this.ray=new THREE.Raycaster();this.pointer=new THREE.Vector2();this.intersection=new THREE.Vector3();this.plane=new THREE.Plane();this.home=(home||robot.position).clone();this.homeRotation=robot.quaternion.clone();
  const add=(g,m,p,parent=this.group)=>{const o=new THREE.Mesh(g,m);o.position.set(...p);o.castShadow=o.receiveShadow=true;parent.add(o);return o;};this.add=add;
  add(new THREE.BoxGeometry(.76,.40,.07),mat('#284e49'),[0,.66,.22]);
  const rim=mat('#d2b36d',{metalness:.3});for(const x of [-.355,.355])for(const y of [.495,.825]){const screw=add(new THREE.CylinderGeometry(.018,.018,.015,8),rim,[x,y,.265]);screw.rotation.x=Math.PI/2;}
  // A shallow canvas tool tray keeps the loose pieces distinct from sockets.
  add(new THREE.BoxGeometry(1.12,.055,.34),mat('#bc9257'),[0,.20,.42]);for(const x of [-.55,.55])add(new THREE.BoxGeometry(.025,.1,.34),rim,[x,.235,.42]);
  REPAIR_PARTS.forEach((part,i)=>{
   const socket=add(pieceGeometry(i,.083,.012),mat('#142d2b'),[...part.target,.264]);socket.rotation.z=part.turn*Math.PI/2;this.sockets.push(socket);
   // Gold keyed marker remains visible around the matching colored part.
   add(new THREE.BoxGeometry(.025,.022,.012),rim,[0,.093,.014],socket);
   const g=new THREE.Group();g.userData.repairPart=part.id;g.name='repair_'+part.id;this.group.add(g);this.meshes.push(g);
   const shell=add(pieceGeometry(i,.068,.026),mat(part.color,{metalness:.15}),[0,0,0],g);shell.userData.repairPart=part.id;
   add(new THREE.BoxGeometry(.024,.018,.012),mat('#fff1c4'),[0,.068,.04],g);
   if(i===0){const lens=add(new THREE.CylinderGeometry(.036,.036,.012,24),mat('#183f43',{metalness:.6,roughness:.18}),[0,0,.039],g);lens.rotation.x=Math.PI/2;}
   if(i===1)for(const y of [-.032,.032])add(new THREE.BoxGeometry(.05,.015,.016),mat('#fff0b8',{metalness:.5}),[-.015,y,.038],g);
   if(i===2){add(new THREE.BoxGeometry(.051,.048,.012),mat('#263c3a'),[0,0,.037],g);for(const x of [-.041,.041])for(const y of [-.024,0,.024])add(new THREE.BoxGeometry(.019,.008,.007),rim,[x,y,.034],g);}
   const trace=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(part.target[0],part.target[1]-.085,.266),new THREE.Vector3(part.target[0],.49,.266),new THREE.Vector3(0,.465,.266)]),8,.006,4,false),mat('#566e55',{emissive:part.color,emissiveIntensity:0}));this.group.add(trace);this.traces.push(trace);
   const lamp=add(new THREE.SphereGeometry(.018,8,6),mat(part.color,{emissive:part.color,emissiveIntensity:0}),[(i-1)*.06,.445,.277]);this.lights.push(lamp);
  });
  this.face=new THREE.Group();this.face.position.set(0,1.03,.229);this.group.add(this.face);add(new THREE.BoxGeometry(.43,.21,.013),mat('#163d39'),[0,0,0],this.face);
  this.eyes=[];for(const x of [-.12,.12])this.eyes.push(add(new THREE.BoxGeometry(.067,.022,.012),mat('#dd9447',{emissive:'#dd9447',emissiveIntensity:.3}),[x,0,.016],this.face));
  const smile=new THREE.EllipseCurve(0,-.014,.065,.045,Math.PI,2*Math.PI,false,0);this.smile=new THREE.Line(new THREE.BufferGeometry().setFromPoints(smile.getPoints(16).map(p=>new THREE.Vector3(p.x,p.y,.027))),new THREE.LineBasicMaterial({color:'#9ff3bf'}));this.face.add(this.smile);this.smile.visible=false;
  this.progress=new THREE.Mesh(new THREE.TorusGeometry(.1,.007,5,40,Math.PI*2),mat('#66deb0',{emissive:'#66deb0',emissiveIntensity:.7}));this.progress.position.set(0,.91,.25);this.progress.visible=false;this.group.add(this.progress);
  this.events={down:e=>this.down(e),move:e=>this.move(e),up:e=>this.up(e),cancel:()=>this.cancel()};
  engine.canvas.addEventListener('pointerdown',this.events.down,true);engine.canvas.addEventListener('pointermove',this.events.move,true);engine.canvas.addEventListener('pointerup',this.events.up,true);engine.canvas.addEventListener('pointercancel',this.events.cancel,true);engine.canvas.addEventListener('lostpointercapture',this.events.cancel,true);
 }
 open(day,ui){this.ui=ui;this.puzzle=new RepairPuzzle(day);this.selected=null;this.held=false;this.dragId=null;this.done=false;this.reveal=0;this.active=true;this.group.visible=true;this.robot.position.copy(this.home);this.robot.quaternion.copy(this.homeRotation);this.group.position.copy(this.home);this.group.rotation.set(0,0,0);this.robot.rotation.set(0,0,0);this.e.canvas.style.touchAction='none';this.e.canvas.style.cursor='grab';this.smile.visible=false;this.eyes.forEach(o=>{o.scale.y=1;o.material.color.set('#dd9447');o.material.emissive.set('#dd9447');});this.sync(true);}
 camera(){const narrow=this.e.camera.aspect<.75,t=this.reveal||0,k=t*t*(3-2*t);this.e.setCamera([this.home.x,THREE.MathUtils.lerp(narrow?1.19:1.32,1.85,k),this.home.z+THREE.MathUtils.lerp(narrow?2.05:1.78,3.6,k)],[this.home.x,THREE.MathUtils.lerp(.64,.84,k),this.home.z+.24]);}
 state(){return this.puzzle.parts.map((p,i)=>({id:p.id,fitted:p.fitted,rotation:p.rotation,position:this.meshes[i].position.toArray()}));}
 sync(immediate=false){this.puzzle.parts.forEach((p,i)=>{const o=this.meshes[i];if(immediate)o.position.set(p.position[0],p.position[1],p.fitted?.285:.43);o.rotation.z=p.rotation*Math.PI/2;this.traces[i].material.emissiveIntensity=p.fitted?.8:0;this.lights[i].material.emissiveIntensity=p.fitted?1.4:0;this.sockets[i].material.color.set(p.fitted?'#237d67':'#142d2b');});if(!this.ui)return;this.ui.querySelectorAll('[data-repair-part]').forEach(b=>{const p=this.puzzle.parts.find(p=>p.id===b.dataset.repairPart);b.disabled=p.fitted;b.setAttribute('aria-pressed',String(this.selected===p.id));b.querySelector('small').textContent=p.fitted?'Fitted':p.name;});this.ui.querySelector('#repairCount').textContent=`${this.puzzle.parts.filter(p=>p.fitted).length} / 3 fitted`;this.ui.querySelector('#repairRotate').disabled=!this.selected||this.puzzle.completed;this.ui.querySelector('#repairFit').disabled=!this.selected||this.puzzle.completed;this.ui.querySelector('#repairPower').disabled=!this.puzzle.ready||this.puzzle.completed;}
 say(message){const status=this.ui?.querySelector('#repairStatus');if(status)status.textContent=message;}
 select(id){if(!this.active||this.puzzle.completed)return false;const p=this.puzzle.parts.find(p=>p.id===id);if(!p||p.fitted)return false;this.selected=id;this.say('Match the shape and the gold marker.');this.sync();return true;}
 rotate(){if(this.selected&&this.puzzle.rotate(this.selected)){this.sync();this.say('Quarter turn. Line up the gold markers.');}}
 fit(position){if(!this.selected)return;const id=this.selected,p=this.puzzle.parts.find(p=>p.id===id);const result=this.puzzle.drop(id,position||p.target);if(result==='fitted'){this.selected=null;this.say(this.puzzle.ready?'All connected. Hold POWER to wake your friend.':'Click. Connected!');this.onFit();}else this.say(result==='rotate'?'The marker is turned. Rotate the part and try again.':'Move the part over its matching socket.');this.sync();return result;}
 point(e){const r=this.e.canvas.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.ray.setFromCamera(this.pointer,this.e.camera);}
 down(e){if(!this.active||this.done||e.button!==0)return;this.point(e);const hit=this.ray.intersectObjects(this.meshes,true).find(h=>{let n=h.object;while(n&&!n.userData.repairPart)n=n.parent;return n&&!this.puzzle.parts.find(p=>p.id===n.userData.repairPart).fitted;});if(!hit)return;let node=hit.object;while(node&&!node.userData.repairPart)node=node.parent;this.select(node.userData.repairPart);this.dragId=e.pointerId;this.dragged=false;this.dragStart=[e.clientX,e.clientY];this.e.canvas.setPointerCapture(e.pointerId);this.e.canvas.style.cursor='grabbing';e.preventDefault();e.stopImmediatePropagation();}
 move(e){if(!this.active||e.pointerId!==this.dragId||!this.selected)return;e.preventDefault();e.stopImmediatePropagation();if(Math.hypot(e.clientX-this.dragStart[0],e.clientY-this.dragStart[1])>5)this.dragged=true;if(!this.dragged)return;this.point(e);this.plane.set(new THREE.Vector3(0,0,1),-(this.home.z+.34));if(this.ray.ray.intersectPlane(this.plane,this.intersection)){const p=this.puzzle.parts.find(p=>p.id===this.selected);p.position=[THREE.MathUtils.clamp(this.intersection.x-this.home.x,-.68,.68),THREE.MathUtils.clamp(this.intersection.y,.16,1.2)];this.meshes[this.puzzle.parts.indexOf(p)].position.set(...p.position,.34);}}
 up(e){if(e.pointerId!==this.dragId)return;e.preventDefault();e.stopImmediatePropagation();const moved=this.dragged;this.dragId=null;this.e.canvas.releasePointerCapture(e.pointerId);this.e.canvas.style.cursor='grab';if(moved&&this.selected)this.fit(this.puzzle.parts.find(p=>p.id===this.selected).position);}
 cancel(){this.held=false;if(this.dragId!==null&&this.selected){const p=this.puzzle.parts.find(p=>p.id===this.selected);p.position=[...p.home];}this.dragId=null;this.dragged=false;}
 update(dt,t){if(!this.active)return;if(this.done)this.reveal=this.reduced?1:Math.min(1,this.reveal+dt*.85);this.camera();this.puzzle.parts.forEach((p,i)=>{const o=this.meshes[i];if(this.dragId!==null&&p.id===this.selected)return;const selected=p.id===this.selected;const target=new THREE.Vector3(p.position[0],p.position[1]+(selected&&!p.fitted?.035:0),p.fitted?.285:selected?.49:.43);o.position.lerp(target,this.reduced?1:1-Math.exp(-Math.min(dt,.1)*16));});
  const completed=this.puzzle.power(dt,this.held);this.progress.visible=this.puzzle.charge>0&&!this.done;this.progress.scale.setScalar(.7+this.puzzle.charge*.3);const power=this.ui?.querySelector('#repairPower');if(power){power.style.setProperty('--charge',`${this.puzzle.charge*100}%`);power.textContent=this.done?'Awake!':this.puzzle.ready?`Hold POWER${this.puzzle.charge>0?' · '+Math.round(this.puzzle.charge*100)+'%':''}`:'POWER';}
  if(completed){this.done=true;this.held=false;this.smile.visible=true;this.eyes.forEach(o=>{o.scale.y=2.6;o.material.color.set('#9ff3bf');o.material.emissive.set('#9ff3bf');});this.sync();this.say('Ready for the festival. Thank you!');this.onComplete();}
  if(this.done&&!this.reduced)this.robot.rotation.z=Math.sin(t*4)*.035;
 }
 close(){this.cancel();this.active=false;this.group.visible=false;this.e.canvas.style.touchAction='';this.e.canvas.style.cursor='';this.robot.rotation.z=0;this.ui=null;}
}
