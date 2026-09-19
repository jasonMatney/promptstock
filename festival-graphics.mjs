import * as THREE from 'three';
import { WIND } from './atmosphere.mjs';

// Generated surface artwork and authored detail; all interactive objects remain 3D.
const noiseGLSL = `
float jamHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float jamNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(jamHash(i),jamHash(i+vec2(1,0)),f.x),mix(jamHash(i+vec2(0,1)),jamHash(i+vec2(1,1)),f.x),f.y);}
`;
export function surfaceFinish(material,kind,time,artTexture=null,paths=null){
 const previous=material.onBeforeCompile;
 material.onBeforeCompile=shader=>{
  previous.call(material,shader);shader.uniforms.jamTime=time;if(artTexture)shader.uniforms.jamAlbedo={value:artTexture};
  if(paths){shader.uniforms.jamPaths={value:paths.map(([a,b])=>new THREE.Vector4(...a,...b))};shader.uniforms.jamWidths={value:paths.map(p=>p[2]/2)};}
  shader.vertexShader='varying vec3 vJamWorld; varying vec2 vJamUV;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>
vec4 jamWorld=vec4(transformed,1.);
#ifdef USE_INSTANCING
jamWorld=instanceMatrix*jamWorld;
#endif
vJamWorld=(modelMatrix*jamWorld).xyz;vJamUV=uv;`);
  shader.fragmentShader=(artTexture?'uniform sampler2D jamAlbedo;\n':'')+'varying vec3 vJamWorld; varying vec2 vJamUV;\n'+noiseGLSL+shader.fragmentShader;
  if(paths)shader.fragmentShader=`uniform vec4 jamPaths[${paths.length}]; uniform float jamWidths[${paths.length}];\n`+shader.fragmentShader;
  let finish='';
  if(kind==='grass')finish=`float broad=jamNoise(vJamWorld.xz*.16);diffuseColor.rgb*=mix(vec3(.86,.96,.78),vec3(1.17,1.13,.91),broad);`;
  if(kind==='grass'&&artTexture)finish+=`vec3 pigment=texture2D(jamAlbedo,vJamWorld.xz*.24).rgb;vec3 pigment2=texture2D(jamAlbedo,mat2(.8,-.6,.6,.8)*vJamWorld.xz*.11+vec2(.17,.37)).rgb;diffuseColor.rgb=mix(diffuseColor.rgb,mix(pigment,pigment2,.35)*vec3(.58,.73,.57),.38);`;
  if(kind==='grass'&&paths)finish+=`
float pathDistance=1000.;float lateral=0.;
for(int i=0;i<${paths.length};i++){vec2 a=jamPaths[i].xy,b=jamPaths[i].zw,ab=b-a;float along=clamp(dot(vJamWorld.xz-a,ab)/dot(ab,ab),0.,1.);float d=length(vJamWorld.xz-a-ab*along)-jamWidths[i];if(d<pathDistance){pathDistance=d;lateral=abs(dot(vJamWorld.xz-a,normalize(vec2(ab.y,-ab.x))));}}
float grain=jamNoise(vJamWorld.xz*31.);float soil=jamNoise(vJamWorld.xz*1.7);float edgeNoise=(jamNoise(vJamWorld.xz*4.)-.5)*.13;
float verge=1.-smoothstep(-.08,.85,pathDistance+edgeNoise);
float trail=1.-smoothstep(-.18,.17,pathDistance+edgeNoise);
float dry=jamNoise(vJamWorld.xz*.21+vec2(19.));
diffuseColor.rgb*=mix(vec3(.76,.88,.69),vec3(1.12,1.04,.77),dry);
float stageWear=1.-smoothstep(.55,1.15,length((vJamWorld.xz-vec2(0.,-25.))/vec2(8.5,5.5)));
float boothWear=max(1.-smoothstep(.6,1.2,length((vJamWorld.xz-vec2(0.,1.))/vec2(5.,3.))),max(1.-smoothstep(.55,1.2,length((vJamWorld.xz-vec2(-16.,3.))/vec2(4.,2.6))),1.-smoothstep(.55,1.2,length((vJamWorld.xz-vec2(16.,3.))/vec2(4.,2.6)))));
float wear=max(stageWear,boothWear)*(.3+soil*.4);
vec3 earth=vec3(.24,.16,.083)*mix(.89,1.1,soil)*mix(.97,1.03,grain);
float tracks=exp(-pow((lateral-.63)*10.,2.))*.035;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.30,.32,.14),max(verge*.46,wear));
diffuseColor.rgb=mix(diffuseColor.rgb,earth*(1.-tracks),max(trail,wear*.35));`;
  if(kind==='path')finish=`float grain=jamNoise(vJamWorld.xz*24.);float broad=jamNoise(vJamWorld.xz*.8);diffuseColor.rgb*=mix(.9,1.07,broad)*mix(.94,1.05,grain);float edge=abs(vJamUV.x-.5)*2.;if(edge>.84+jamNoise(vJamWorld.xz*7.)*.16)discard;`;
  if(kind==='canvas')finish=`float weave=sin(vJamWorld.x*460.+vJamWorld.z*460.)*sin(vJamWorld.y*460.);float wash=jamNoise(vJamWorld.xz*1.6+vJamWorld.y);diffuseColor.rgb*=.94+.055*wash+.015*weave;`;
  if(kind==='mountain')finish=`float forest=jamNoise(vJamWorld.xz*.19+vJamWorld.y*.33);float folds=jamNoise(vJamWorld.xz*.045+vJamWorld.y*.12);diffuseColor.rgb*=mix(.79,1.08,folds)*mix(.84,1.07,forest);`;
  if(kind==='cloth')finish=`float fibre=sin(vJamWorld.y*280.)*sin((vJamWorld.x+vJamWorld.z)*280.);diffuseColor.rgb*=.985+.015*fibre;`;
  if(kind==='wood')finish=`float grain=jamNoise(vec2((vJamWorld.x+vJamWorld.z)*34.,vJamWorld.y*.8));diffuseColor.rgb*=mix(.73,1.11,grain);`;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\n'+finish);
 };
 const key=material.customProgramCacheKey();material.customProgramCacheKey=()=>key+'|finish-'+kind+(artTexture?'|art-v2':'')+(paths?'|routes-v4-'+paths.length:'');
 material.needsUpdate=true;
}

export function createMeadow(engine,isPath,isBooth){
 // Three tapered triangles per blade; one draw, shared geometry and deterministic placement.
 const geometry=new THREE.BufferGeometry();
 geometry.setAttribute('position',new THREE.Float32BufferAttribute([-.026,0,0,.026,0,0,-.015,.55,.035,.015,.55,.035,.012,1,.12],3));
 geometry.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,1,0,0,.55,1,.55,.5,1],2));
 geometry.setIndex([0,1,2,1,3,2,2,3,4]);geometry.computeVertexNormals();
 let seed=2049;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const points=[];
 for(let i=0;i<80000;i++){const x=random()*116-58,z=random()*84-47;if(isPath(x,z)||isBooth(x,z)||(Math.abs(x)<10&&z<-20&&z>-32))continue;const patch=.5+.5*Math.sin(x*.55+Math.sin(z*.31)*2);if(random()> .35+patch*.65)continue;points.push([x,z,random(),random()]);}
 const material=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.96,side:THREE.DoubleSide});
 engine.windStrength??={value:WIND.defaultStrength};
 material.onBeforeCompile=shader=>{
  shader.uniforms.jamTime=engine.time;
  shader.uniforms.windStrength=engine.windStrength;
  shader.vertexShader='uniform float jamTime;uniform float windStrength;varying float vBladeHeight;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
 vBladeHeight=uv.y;vec3 origin=instanceMatrix[3].xyz;
 transformed.x+=sin(jamTime*${WIND.meadowFreqX}+origin.x*.6+origin.z*.45)*uv.y*uv.y*${WIND.meadowAmpX}*windStrength;
 transformed.z+=sin(jamTime*${WIND.meadowFreqZ}+origin.z*.7)*uv.y*uv.y*${WIND.meadowAmpZ}*windStrength;`);
  shader.fragmentShader='varying float vBladeHeight;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb*=mix(vec3(.72,.83,.5),vec3(1.08,1.07,.79),vBladeHeight);');
 };material.customProgramCacheKey=()=> 'jam-meadow-v3';
 const grass=new THREE.InstancedMesh(geometry,material,points.length),dummy=new THREE.Object3D(),color=new THREE.Color();
 for(let i=0;i<points.length;i++){const [x,z,r,s]=points[i];dummy.position.set(x,-.016,z);dummy.rotation.y=r*Math.PI*2;dummy.scale.set(.65+s*.55, .07+r*.14,.65+s*.55);dummy.updateMatrix();grass.setMatrixAt(i,dummy.matrix);color.setHSL(.20+s*.045,.28+r*.12,.31+r*.10);grass.setColorAt(i,color);}
 grass.instanceMatrix.needsUpdate=true;grass.instanceColor.needsUpdate=true;grass.receiveShadow=true;grass.castShadow=false;grass.computeBoundingSphere();grass.name='Wind-swept meadow';engine.scene.add(grass);engine.meadow=grass;if(engine.low)grass.count=Math.floor(points.length*.25);
 return grass;
}

export function addContactShadows(engine,kit){
 const geometry=new THREE.PlaneGeometry(1,1);geometry.rotateX(-Math.PI/2);
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;void main(){vec2 q=abs(vUv-.5)*2.;float shade=pow(max(0.,1.-pow(q.x,2.)),2.)*pow(max(0.,1.-pow(q.y,2.)),2.);gl_FragColor=vec4(.10,.16,.085,shade*.24);}`});
 const contacts=[];
 for(const [id,root] of kit.instances){if(/tree|grass|sky|record_|jar_|bottle|kickball|backpack/.test(id))continue;root.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3());if(bounds.min.y>.4||size.x<.1)continue;const mesh=new THREE.Mesh(geometry,material);mesh.name=id+'_contact';mesh.position.set(root.position.x,.026,root.position.z);const isTent=id.startsWith('tent');mesh.scale.set(isTent?size.x*1.12:Math.max(.55,size.x*1.25),1,isTent?size.z*1.08:Math.max(.5,size.z*1.3));engine.scene.add(mesh);contacts.push({mesh,root});}
 engine.contactShadows=contacts;
}
export function finishKitMaterials(engine,kit){
 const seen=new Set();kit.group.traverse(o=>{if(!o.isMesh)return;for(const m of (Array.isArray(o.material)?o.material:[o.material])){if(seen.has(m))continue;seen.add(m);const name=m.name;
  if(/canvas|denim/.test(name)){m.roughness=.91;if(engine.surfaceDetail){m.bumpMap=engine.surfaceDetail(6);m.bumpScale=.007;}surfaceFinish(m,'canvas',engine.time);}
  if(/wood|bark/.test(name)){m.roughness=.84;if(engine.surfaceDetail){m.bumpMap=engine.surfaceDetail(5);m.bumpScale=.012;}surfaceFinish(m,'wood',engine.time);}
  if(/metal_pole/.test(name)){m.metalness=.68;m.roughness=.34;}
  if(/vinyl_black/.test(name)){m.metalness=.16;m.roughness=.3;}
  if(/skin/.test(name)){m.roughness=.82;m.envMapIntensity=.6;}
  if(name==='painted_character_matte'){m.roughness=.92;surfaceFinish(m,'cloth',engine.time);}
 }});refineKitCanopies(engine,kit);addContactShadows(engine,kit);
}

// Keep the editable GLB trunks and pivots; replace only the two broadleaf crowns.
// Cards share the existing validated RGBA foliage and its animated depth material.
export function refineKitCanopies(engine,kit){
 const source=engine.batches?.find(b=>b.nodes[0].tex?.id&&b.nodes[0].props[1]===4),geometry=engine.geometries?.get('canopy');
 if(!source||!geometry)return;
 for(const [id,root] of kit.instances){
  if(!/^kit_tree_(oak|birch)$/.test(id)||root.userData.refinedCanopy)continue;
  const birch=id.endsWith('birch'),cards=new THREE.InstancedMesh(geometry,source.mesh.material,70),dummy=new THREE.Object3D();
  cards.name=id+'_leaf_clusters';cards.castShadow=true;cards.receiveShadow=true;cards.customDepthMaterial=source.mesh.customDepthMaterial;
  for(let cluster=0;cluster<7;cluster++)for(let j=0;j<10;j++){
   const angle=cluster*2.4,spin=j*2.399+cluster*.7,ring=.35+(j%3)*.2;
   dummy.position.set(Math.sin(angle)*(birch?.6:1.2)+Math.cos(spin)*ring,3.4+(cluster%3)*.75+Math.sin(j*1.7)*.5,-Math.cos(angle)*.9+Math.sin(spin)*ring);
   dummy.rotation.set(Math.sin(j*2.3)*.65,spin,Math.cos(j)*.4);dummy.scale.set(birch?1.5:1.9,birch?1.9:1.8,1);dummy.updateMatrix();cards.setMatrixAt(cluster*10+j,dummy.matrix);
   cards.setColorAt(cluster*10+j,new THREE.Color(j%3?'#c4d5b2':'#e0ddb4'));
  }
  root.traverse(o=>{if(o.isMesh&&/^(foliage_card|leaf_light)$/.test(o.material?.name))o.visible=false;});
  cards.instanceMatrix.needsUpdate=true;cards.instanceColor.needsUpdate=true;cards.computeBoundingSphere();root.add(cards);root.userData.refinedCanopy=true;
 }
}

export function createFestivalSky(engine){
 const material=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{jamTime:engine.time,dusk:{value:0},cloudIntensity:{value:1},sunDirection:{value:new THREE.Vector3(-.55,.82,-.48).normalize()},zenith:{value:new THREE.Color('#5c9fcd')},horizon:{value:new THREE.Color('#b6d4e3')}},vertexShader:`varying vec3 vSky;void main(){vSky=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vSky;uniform float jamTime;uniform float dusk;uniform float cloudIntensity;uniform vec3 sunDirection;uniform vec3 zenith;uniform vec3 horizon;
${noiseGLSL}
float fbm(vec2 p){return jamNoise(p)*.53+jamNoise(p*2.03)*.27+jamNoise(p*4.07)*.13+jamNoise(p*8.11)*.07;}
void main(){vec3 direction=normalize(vSky-cameraPosition);float elevation=max(direction.y,0.);vec3 top=mix(zenith,vec3(.23,.30,.42),dusk);vec3 edge=mix(horizon,vec3(.87,.48,.28),dusk);vec3 sky=mix(edge,top,smoothstep(0.,.68,elevation));
vec2 plane=direction.xz/max(.13,direction.y)*1.3+vec2(jamTime*.002,0.);float cloud=fbm(plane);float cover=smoothstep(.54,.69,cloud)*smoothstep(.06,.23,elevation)*cloudIntensity;float cloudShade=fbm(plane+vec2(.10,.18));vec3 cloudColor=mix(vec3(.63,.71,.74),vec3(1.,.96,.84),cloudShade);cloudColor=mix(cloudColor,vec3(.96,.64,.40),dusk*.5);sky=mix(sky,cloudColor,cover*.9);float sun=pow(max(dot(direction,normalize(sunDirection)),0.),160.);sky+=vec3(1.,.79,.45)*sun*.5;gl_FragColor=vec4(sky,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`});
 const sky=new THREE.Mesh(new THREE.SphereGeometry(700,32,16),material);sky.name='Festival cloud sky';sky.frustumCulled=false;engine.scene.add(sky);engine.cloudSky=sky;engine.sky.visible=false;
}
