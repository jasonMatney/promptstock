import {EXTRA_FESTIVAL_GUESTS} from './festival-crowd.mjs';
import {recordLabel} from './festival-copy.mjs';
import { FestivalMusic } from './festival-music.mjs';
import { FestivalOcclusionPass, FestivalFinishPass } from './festival-occlusion.mjs';
import { surfaceFinish, createMeadow, finishKitMaterials, createFestivalSky } from './festival-graphics.mjs';
import { FestivalPlay } from './festival-play.mjs';
import { attachGameDebug, QUALITY_STORAGE_KEY, loadQualityPreference, saveQualityPreference, applyEngineQuality } from './game-debug.mjs';
import { loadJamKit, replacedNode } from './jam-kit.mjs';
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { Water } from 'three/addons/objects/Water.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export class FestivalEngine {
 constructor(canvas){
  this.canvas=canvas;this.batches=[];this.low=false;this.dusk=0;this.cam=[0,1.8,31];this.time={value:0};this.geometries=new Map();this.materials=new Map();this.lastSize='';this.lastLight=-1;this.frame=0;
  this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance',preserveDrawingBuffer:true});
  this.renderer.debug.onShaderError=(gl,program)=>{throw new Error('The graphics engine could not compile a material: '+gl.getProgramInfoLog(program));};
  this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.94;
  this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFShadowMap;this.renderer.shadowMap.autoUpdate=false;
  this.scene=new THREE.Scene();this.scene.fog=new THREE.FogExp2('#b1cedb',.0032);this.scene.environmentIntensity=.20;
  this.artMeadow=new THREE.TextureLoader().load('assets/art-direction/meadow-albedo-v2.png');this.artMeadow.colorSpace=THREE.SRGBColorSpace;this.artMeadow.wrapS=this.artMeadow.wrapT=THREE.RepeatWrapping;this.artMeadow.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());
  this.fill=new THREE.DirectionalLight('#d3e1ec',.18);this.fill.position.set(35,35,55);this.scene.add(this.fill);
  this.camera=new THREE.PerspectiveCamera(63,1,.08,1400);
  this.sky=new Sky();this.sky.scale.setScalar(1000);this.sky.material.uniforms.turbidity.value=2.2;this.sky.material.uniforms.rayleigh.value=2.8;this.sky.material.uniforms.mieCoefficient.value=.004;this.sky.material.uniforms.mieDirectionalG.value=.78;this.scene.add(this.sky);
  this.hemi=new THREE.HemisphereLight('#b9d7ed','#514b32',.48);this.scene.add(this.hemi);
  this.sun=new THREE.DirectionalLight('#fff1d4',3.0);this.sun.castShadow=true;this.sun.shadow.mapSize.set(2048,2048);Object.assign(this.sun.shadow.camera,{left:-62,right:62,top:55,bottom:-55,near:1,far:260});this.sun.shadow.normalBias=.018;this.sun.shadow.bias=-.00012;this.sun.shadow.radius=2.2;this.sun.shadow.camera.updateProjectionMatrix();this.scene.add(this.sun,this.sun.target);
  this.fire=new THREE.PointLight('#ff873d',18,11,2);this.fire.position.set(-51,1.05,-16);this.scene.add(this.fire);
  this.stageLight=new THREE.PointLight('#ffd69a',12,20,2);this.stageLight.position.set(0,5,-31);this.scene.add(this.stageLight);
  this.pmrem=new THREE.PMREMGenerator(this.renderer);this.updateLighting(true);createFestivalSky(this);
  const target=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,samples:Math.min(2,this.renderer.capabilities.maxSamples)});
  target.depthTexture=new THREE.DepthTexture(1,1,THREE.UnsignedIntType);
  this.composer=new EffectComposer(this.renderer,target);this.composer.addPass(new RenderPass(this.scene,this.camera));this.occlusion=new FestivalOcclusionPass(this.camera);this.composer.addPass(this.occlusion);this.finishPass=new FestivalFinishPass();this.composer.addPass(this.finishPass);this.composer.addPass(new OutputPass());
 }
 async loadJamKit(){this.jamKit=await loadJamKit(this);this.jamKit.instanceCrowd(this.legacyPeople||[]);finishKitMaterials(this,this.jamKit);for(const b of this.batches){b.replacements=b.nodes.map(replacedNode);b.allReplaced=b.replacements.every(Boolean);b.dirty=true;}return this.jamKit;}
 createMeadow(isPath,isBooth){return createMeadow(this,isPath,isBooth);}
 texture(source){const tex=new THREE.CanvasTexture(source);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());return tex;}
 geometry(name,source){if(this.geometries.has(name))return this.geometries.get(name);const g=new THREE.BufferGeometry(),a=new THREE.InterleavedBuffer(source,8);g.setAttribute('position',new THREE.InterleavedBufferAttribute(a,3,0));g.setAttribute('normal',new THREE.InterleavedBufferAttribute(a,3,3));g.setAttribute('uv',new THREE.InterleavedBufferAttribute(a,2,6));g.computeBoundingSphere();this.geometries.set(name,g);return g;}
 material(node){const [wind,type,glow]=node.props;const key=[node.tex?.id||'',type,glow,wind,glow?node.color.join(','):''].join('|');if(this.materials.has(key))return this.materials.get(key);
  const settings={color:0xffffff,roughness:type===5?.8:type===6?.95:.88,metalness:0,map:node.tex?.gl||null,side:THREE.DoubleSide,shadowSide:THREE.DoubleSide};
  if(node.tex){settings.alphaTest=.28;settings.alphaToCoverage=true;}
  if(glow){settings.emissive=new THREE.Color().setRGB(...node.color);settings.emissiveIntensity=glow*2.3;settings.emissiveMap=node.tex?.gl||null;}
  if(type===5||type===6){settings.bumpMap=this.surfaceDetail(type);settings.bumpScale=type===5?.022:.008;}
  const mat=new THREE.MeshStandardMaterial(settings);mat.name=`Festival material ${key}`;
  if(wind){this.addWind(mat,wind);}
  if(type===8)surfaceFinish(mat,'mountain',this.time);
  if(type===1||type===7)surfaceFinish(mat,type===1?'grass':'path',this.time,type===1?this.artMeadow:null,type===1?this.groundPaths:null);
  this.materials.set(key,mat);return mat;
 }
 surfaceDetail(type){this.detailTextures??=new Map();if(this.detailTextures.has(type))return this.detailTextures.get(type);const size=128,pixels=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const u=x/size*Math.PI*2,v=y/size*Math.PI*2;const h=type===5?.5+.28*Math.sin(u*12+Math.sin(v*2)*1.5)+.1*Math.sin(u*31+v*2):.5+.23*Math.sin(u*24)*Math.sin(v*24);const i=(y*size+x)*4,value=Math.round(h*255);pixels[i]=pixels[i+1]=pixels[i+2]=value;pixels[i+3]=255;}const t=new THREE.DataTexture(pixels,size,size);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.needsUpdate=true;this.detailTextures.set(type,t);return t;}
 addWind(material,amount){material.onBeforeCompile=shader=>{shader.uniforms.festivalTime=this.time;shader.vertexShader='uniform float festivalTime;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nvec3 origin=vec3(0.);\n#ifdef USE_INSTANCING\norigin=instanceMatrix[3].xyz;\n#endif\ntransformed.x+=sin(festivalTime*1.25+origin.z*.43+origin.x*.13)*${amount.toFixed(4)}*.055*max(position.y,0.);\ntransformed.z+=cos(festivalTime*.85+origin.x*.31)*${amount.toFixed(4)}*.035*max(position.y,0.);`);};material.customProgramCacheKey=()=>`festival-wind-${amount}`;}
 build(root,geometryTable){root.update();this.legacyPeople=[];const groups=new Map();const visit=n=>{if(n.jamHuman)this.legacyPeople.push(n);if(n.geo&&n.props[1]!==3&&!(this.groundPaths&&n.props[1]===7)){const key=[n.geo,n.tex?.id||'',...n.props,n.props[2]?n.color.join(','):''].join('|');if(!groups.has(key))groups.set(key,{geo:n.geo,nodes:[]});groups.get(key).nodes.push(n);}for(const child of n.children)visit(child);};visit(root);
  const matrix=new THREE.Matrix4(),color=new THREE.Color();
  for(const b of groups.values()){const first=b.nodes[0],mat=this.material(first);b.mesh=new THREE.InstancedMesh(this.geometry(b.geo,geometryTable[b.geo]),mat,b.nodes.length);b.mesh.frustumCulled=false;b.mesh.castShadow=!!first.props[3];b.mesh.receiveShadow=true;b.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);b.data=new Float32Array(b.nodes.length*24);
   b.nodes.forEach((n,i)=>{n.batch=b;n.index=i;b.data.set(n.world,i*24);b.mesh.setMatrixAt(i,matrix.fromArray(n.world));b.mesh.setColorAt(i,color.setRGB(...n.color,THREE.SRGBColorSpace));});b.mesh.instanceMatrix.needsUpdate=true;b.mesh.instanceColor.needsUpdate=true;
   // The depth pass shares the foliage alpha cutoff and wind deformation.
   if(first.tex||first.props[0]){const depth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:first.tex?.gl||null,alphaTest:first.tex ? .28 : 0,side:THREE.DoubleSide});if(first.props[0])this.addWind(depth,first.props[0]);b.mesh.customDepthMaterial=depth;}
   this.scene.add(b.mesh);this.batches.push(b);
  }
  this.createWater();this.scene.updateMatrixWorld(true);
 }
 createWater(){
  const size=128,bytes=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const u=x/size*Math.PI*2,v=y/size*Math.PI*2,nx=Math.sin(u*4+Math.sin(v*3))*.32+Math.sin(u*9-v*4)*.16,ny=Math.cos(v*5+Math.sin(u*2))*.32+Math.cos(v*11+u*5)*.12;const n=new THREE.Vector3(nx,ny,1).normalize(),i=(y*size+x)*4;bytes[i]=(n.x*.5+.5)*255;bytes[i+1]=(n.y*.5+.5)*255;bytes[i+2]=(n.z*.5+.5)*255;bytes[i+3]=255;}
  const normals=new THREE.DataTexture(bytes,size,size);normals.wrapS=normals.wrapT=THREE.RepeatWrapping;normals.magFilter=THREE.LinearFilter;normals.minFilter=THREE.LinearMipmapLinearFilter;normals.generateMipmaps=true;normals.needsUpdate=true;
  this.water=new Water(new THREE.PlaneGeometry(320,104),{textureWidth:512,textureHeight:512,waterNormals:normals,sunDirection:this.sun.position.clone().normalize(),sunColor:0xfff2d9,waterColor:0x285f65,distortionScale:1.9,fog:true});this.water.rotation.x=-Math.PI/2;this.water.position.set(0,-.16,-105);this.water.material.uniforms.size.value=3.5;const reflect=this.water.onBeforeRender;this.water.onBeforeRender=(...args)=>{if(!this.play?.concert?.active&&(this.frame===1||this.frame%(this.low?12:8)===0))reflect.apply(this.water,args);};this.scene.add(this.water);
 }
 updateLighting(force=false){const d=this.dusk,n=this.campNight||0;if(!force&&Math.abs(d-this.lastLight)<.005&&Math.abs(n-(this.lastCampNight||0))<.005)return;this.lastLight=d;this.lastCampNight=n;if(this.cloudSky)this.cloudSky.material.uniforms.dusk.value=d;
  const sunPosition=new THREE.Vector3(-.65,THREE.MathUtils.lerp(.58,.19,d),-.38).normalize();if(this.cloudSky)this.cloudSky.material.uniforms.sunDirection.value.copy(sunPosition);this.sun.position.copy(sunPosition).multiplyScalar(120);this.sun.target.position.set(0,0,-7);this.sky.material.uniforms.sunPosition.value.copy(sunPosition);
  this.sun.color.set('#ffe4b9').lerp(new THREE.Color('#ffb26e'),d);this.sun.intensity=THREE.MathUtils.lerp(2.5,1.65,d);if(this.fill)this.fill.intensity=THREE.MathUtils.lerp(.12,.10,d);this.hemi.intensity=THREE.MathUtils.lerp(.48,.42,d);this.scene.fog.color.set('#b1cedb').lerp(new THREE.Color('#b9907b'),d);this.fire.intensity=THREE.MathUtils.lerp(18,40,d);this.stageLight.intensity=THREE.MathUtils.lerp(12,45,d);
  this.sun.intensity*=1-n*.96;this.hemi.intensity*=1-n*.55;this.scene.environmentIntensity=.20*(1-n*.88);this.scene.fog.color.lerp(new THREE.Color('#25364e'),n);
  if(this.water){this.water.material.uniforms.sunDirection.value.copy(sunPosition);this.water.material.uniforms.sunColor.value.copy(this.sun.color);}
  if(force||d<.01||d>.99){if(this.environmentDusk===undefined||Math.abs(d-this.environmentDusk)>.5){const scene=new THREE.Scene();const sky=this.sky.clone();sky.visible=true;sky.material=this.sky.material.clone();sky.material.uniforms=THREE.UniformsUtils.clone(this.sky.material.uniforms);if(sky.material.uniforms.showSunDisc)sky.material.uniforms.showSunDisc.value=false;scene.add(sky);const env=this.pmrem.fromScene(scene,.04,.1,1500);this.environmentTarget?.dispose();this.environmentTarget=env;this.scene.environment=env.texture;this.environmentDusk=d;sky.material.dispose();}}
 }
 resize(){const budget=this.play?.concert?.active?650000:1800000,ratio=Math.min(devicePixelRatio,this.low?1:1.25,Math.sqrt(budget/(innerWidth*innerHeight))),key=[innerWidth,innerHeight,ratio,this.low].join(':');if(key===this.lastSize)return;this.lastSize=key;this.renderer.setPixelRatio(ratio);this.renderer.setSize(innerWidth,innerHeight,false);this.camera.aspect=innerWidth/innerHeight;this.camera.updateProjectionMatrix();this.composer.setPixelRatio(ratio);this.composer.setSize(innerWidth,innerHeight);if(this.meadow)this.meadow.count=this.low?Math.floor(this.meadow.instanceMatrix.count*.25):this.meadow.instanceMatrix.count;this.renderer.shadowMap.enabled=!this.low;this.renderer.shadowMap.needsUpdate=true;}
 setCamera(position,target){this.cam=position;this.camera.position.fromArray(position);this.camera.lookAt(...target);this.camera.updateMatrixWorld();}
 draw(time){this.jamKit?.update(time);for(const c of this.contactShadows||[]){c.mesh.visible=this.jamKit.enabled&&c.root.visible;c.mesh.position.x=c.root.position.x;c.mesh.position.z=c.root.position.z;}this.frame++;if(this.renderer?.shadowMap&&!this.low&&(this.lastShadowTime===undefined||time-this.lastShadowTime>=1/(this.play?.concert?.active?12:24))){this.renderer.shadowMap.needsUpdate=true;this.lastShadowTime=time;};if(this.renderer?.info){this.renderer.info.autoReset=false;this.renderer.info.reset();}this.time.value=time;if(this.sky)this.sky.material.uniforms.time.value=time;this.updateLighting();const matrix=new THREE.Matrix4();for(const b of this.batches)if(b.dirty){b.mesh.visible=!(this.jamKit?.enabled&&b.allReplaced);for(let i=0;i<b.nodes.length;i++){matrix.fromArray(b.data,i*24);if(b.nodes[i].concertHidden||(this.jamKit?.enabled&&b.replacements?.[i]))matrix.scale(new THREE.Vector3(0,0,0));b.mesh.setMatrixAt(i,matrix);}b.mesh.instanceMatrix.needsUpdate=true;b.dirty=false;}if(this.water)this.water.material.uniforms.time.value=time*.35;this.fire.intensity=(18+22*this.dusk)*(1+Math.sin(time*6)*.08);if(this.low||this.postprocessingSupported===false)this.renderer.render(this.scene,this.camera);else {this.renderer.setRenderTarget(null);this.composer.render();this.renderer.setRenderTarget(null);if(this.postprocessingSupported===undefined){const gl=this.renderer.getContext(),pixel=new Uint8Array(4);gl.readPixels(Math.floor(gl.drawingBufferWidth/2),Math.floor(gl.drawingBufferHeight/2),1,1,gl.RGBA,gl.UNSIGNED_BYTE,pixel);this.postprocessingSupported=pixel[3]>0;if(!this.postprocessingSupported){this.renderer.setRenderTarget(null);this.renderer.render(this.scene,this.camera);}}}}
 project(point){const p=new THREE.Vector3(...point).project(this.camera);if(p.z>1)return null;return[(p.x*.5+.5)*innerWidth,(-p.y*.5+.5)*innerHeight,p.z];}
 async compile(){await this.renderer.compileAsync(this.scene,this.camera);}
}
if(typeof window!=='undefined'){window.FestivalCopy={recordLabel};window.FestivalCrowd={EXTRA_FESTIVAL_GUESTS};window.FestivalEngine=FestivalEngine;window.FestivalPlay=FestivalPlay;window.FestivalMusic=FestivalMusic;window.attachGameDebug=attachGameDebug;window.QUALITY_STORAGE_KEY=QUALITY_STORAGE_KEY;window.loadQualityPreference=loadQualityPreference;window.saveQualityPreference=saveQualityPreference;window.applyEngineQuality=applyEngineQuality;}
