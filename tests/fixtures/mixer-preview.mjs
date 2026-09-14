// Disposable component review; no saved game state or round instance.
import * as THREE from 'three';
import {FestivalEngine} from '../../engine-source.mjs';
import {SkillMixer} from '../../skill-mixer.mjs';
const e=new FestivalEngine(document.querySelector('#world'));e.resize();await e.loadJamKit();
const ground=new THREE.Mesh(new THREE.PlaneGeometry(90,90),new THREE.MeshStandardMaterial({color:'#75985e',roughness:1}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;e.scene.add(ground);
const ui=document.querySelector('#festivalPlay');const m=new SkillMixer(e,e.jamKit,{onComplete:()=>{ui.querySelector('#playDock').insertAdjacentHTML('beforeend','<div class="activity-success" role="status"><strong>All three experiments complete!</strong></div>');}});m.open(ui);document.querySelector('#restart').onclick=()=>m.open(ui);window.addEventListener('keydown',event=>m.key(event));window.addEventListener('blur',()=>m.cancel());window.addEventListener('resize',()=>e.resize());await e.compile();document.querySelector('#loading').remove();let last=performance.now();function frame(now){const dt=Math.min(.05,(now-last)/1000);last=now;m.update(dt,now/1000);e.draw(now/1000);requestAnimationFrame(frame);}requestAnimationFrame(frame);

document.querySelector('#reviewChallenge').onchange=event=>{m.open(ui);m.puzzle.index=Number(event.target.value);m.refreshChallenge();};

// Repeatable shoulder and held-prop review without saved progress.
document.querySelector("#reviewCelebration").onclick=()=>{m.open(ui);for(const id of ["prompt","context0","tool0"])m.puzzle.add(id);m.run();};
