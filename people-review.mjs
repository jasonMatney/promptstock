import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { clone } from 'three/addons/utils/SkeletonUtils.js';
const canvas=document.querySelector('canvas'),status=document.querySelector('#status');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
const scene=new THREE.Scene();scene.background=new THREE.Color('#e9e3d7');scene.fog=new THREE.Fog('#e9e3d7',8,18);
const camera=new THREE.PerspectiveCamera(30,1,.02,30);const controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.minDistance=.5;controls.maxDistance=7;controls.maxPolarAngle=Math.PI*.57;
scene.add(new THREE.HemisphereLight('#fff9e9','#7c8c80',2));
for(const [x,y,z,power] of [[3,5,4,3],[-3,2,2,1],[1,4,-3,2.5]]){const light=new THREE.DirectionalLight('#fff7e5',power);light.position.set(x,y,z);if(x===3){light.castShadow=true;light.shadow.mapSize.set(2048,2048);light.shadow.camera.left=-2;light.shadow.camera.right=2;light.shadow.camera.top=3;light.shadow.camera.bottom=-1;light.shadow.normalBias=.015;}scene.add(light);}
const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:'#e9e3d7',roughness:1}));floor.rotation.x=-Math.PI/2;floor.position.y=-.012;floor.receiveShadow=true;scene.add(floor);
const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);let people=[],current,mixer,clips=[],view='full',activeClip='idle';
document.querySelectorAll('button').forEach(b=>b.disabled=true);
const names=['The host','Rowan','Jules','Mika','Sol','Ari','Kit'];
function pose(clip){activeClip=clip;if(mixer){mixer.stopAllAction();const action=mixer.clipAction(clips.find(c=>c.name===clip));action.reset().play();}document.querySelectorAll('[data-clip]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.clip===clip));}
function frame(){const h=current?.scale.y||1;controls.target.set(0,view==='portrait'?1.62*h:.78*h,0);camera.position.set(view==='portrait'?.28:(innerWidth<650?.8:1.5),view==='portrait'?1.73*h:1.8,view==='portrait'?1.1:(innerWidth<650?5.8:5.2));controls.update();}
function show(index){if(current)scene.remove(current);current=people[index];scene.add(current);mixer=index===0?new THREE.AnimationMixer(current):null;pose('idle');frame();document.querySelectorAll('[data-person]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.person)===index));document.querySelectorAll('[data-clip]').forEach(b=>{b.disabled=index!==0;b.style.opacity=index!==0?.4:1;});document.querySelector('#name').innerHTML=names[index]+'<small>'+ (index===0?'Animated host · Overshirt / indigo trousers':'Festival guest · Sculpted hair / authored clothing')+'</small>';window.peopleReview.current=index;}
document.querySelectorAll('[data-person]').forEach(b=>b.onclick=()=>show(Number(b.dataset.person)));
document.querySelectorAll('[data-clip]').forEach(b=>b.onclick=()=>pose(b.dataset.clip));
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{view=b.dataset.view;document.querySelectorAll('[data-view]').forEach(el=>el.setAttribute('aria-pressed',el===b));frame();});
window.peopleReview={ready:false,current:0,show,pose};
try{const revisions=await fetch('assets/models/layout.json').then(r=>r.json());const [hero,crowd]=await Promise.all(['player_jam','crowd_kit'].map(id=>loader.loadAsync(`assets/models/${id}.glb?v=${revisions.modelRevisions[id]}`)));clips=hero.animations;people=[clone(hero.scene.getObjectByName('player_jam')),...Array.from({length:6},(_,i)=>clone(crowd.scene.getObjectByName('crowd_'+(i+1))))];people.forEach(o=>o.traverse(m=>{if(m.isMesh){m.castShadow=m.receiveShadow=true;m.frustumCulled=false;for(const mat of (Array.isArray(m.material)?m.material:[m.material]))mat.side=THREE.DoubleSide;}}));document.querySelectorAll('button').forEach(b=>b.disabled=false);show(0);status.textContent='Seven people. Ready to meet.';window.peopleReview.ready=true;}catch(error){status.textContent='The models could not load. Refresh to try again.';console.error(error);}
const clock=new THREE.Clock();function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();frame();}window.addEventListener('resize',resize);resize();renderer.setAnimationLoop(()=>{mixer?.update(Math.min(clock.getDelta(),.05));controls.update();renderer.render(scene,camera);});
