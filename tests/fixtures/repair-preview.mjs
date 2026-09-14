// Isolated component exercise: no game saves, accounts, or round state.
import * as THREE from 'three';
import {FestivalEngine} from '../../engine-source.mjs';
import {FestivalPlay} from '../../festival-play.mjs';
import {RobotRepair} from '../../robot-repair.mjs';
import {FestivalReactions} from '../../festival-reactions.mjs';
const e=new FestivalEngine(document.querySelector('#world'));e.resize();await e.loadJamKit();
const ground=new THREE.Mesh(new THREE.PlaneGeometry(90,90),new THREE.MeshStandardMaterial({color:'#75985e',roughness:1}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;e.scene.add(ground);
const view=Object.create(FestivalPlay.prototype);Object.assign(view,{e,kit:e.jamKit,state:{day:1},ui:document.querySelector('#festivalPlay'),clock:0,active:'aid',keys:new Set(),reduced:false,h:{chime:()=>{}}});
const reactions=new FestivalReactions(e.jamKit);view.repair=new RobotRepair(e,e.jamKit.instances.get('robot'),{onComplete:()=>{reactions.repaired(view.clock);view.ui.querySelector('#playDock').insertAdjacentHTML('beforeend','<div class="activity-success" role="status"><strong>Your friend is awake!</strong><button id="leave">Watch the robot leave</button></div>');document.querySelector('#leave').onclick=()=>{view.repair.close();view.active=null;reactions.leaveBench();view.hint('Heading to the stage.');};}});
view.exit=()=>{view.repair.close();view.active=null;};view.setupAid();document.querySelector('#restart').onclick=()=>{view.active='aid';view.setupAid();};window.addEventListener('keydown',event=>view.key(event,true),true);window.addEventListener('keyup',event=>view.key(event,false),true);window.addEventListener('blur',()=>view.clearInput());document.addEventListener('visibilitychange',()=>view.clearInput());
window.addEventListener('resize',()=>e.resize());await e.compile();document.querySelector('#loading').remove();let last=performance.now();function frame(now){const dt=Math.min(.05,(now-last)/1000);last=now;view.clock=now/1000;reactions.update(dt,view.clock,{activity:view.active});if(view.active)view.repair.update(dt,view.clock);else{const p=view.repair.robot.position;e.setCamera([p.x+1.6,2.4,p.z+3.5],[p.x,.7,p.z]);}e.draw(view.clock);requestAnimationFrame(frame);}requestAnimationFrame(frame);

document.querySelector('#capture').onclick=async()=>{const png=await new Promise(resolve=>e.canvas.toBlob(resolve,'image/png'));const r=await fetch('/__kit_capture/play_aid',{method:'POST',headers:{'Content-Type':'image/png'},body:png});document.querySelector('#capture').textContent=r.ok?'Saved':'Could not save';};

document.querySelector('#cheer').onclick=()=>{view.repair.reveal=1;reactions.celebrate(view.clock,'repair');};
