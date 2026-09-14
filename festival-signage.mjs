import * as THREE from 'three';
import {RECORD_LABELS} from './festival-copy.mjs';

export const BOOTH_TITLES={ai:'DUBIOUS ADVICE BUREAU',maker:'THE TINKER TENT',aid:'THE REBOOT CLINIC',swap:'BRAIN SWAP BAZAAR',news:'THE PATCH NOTES PRESS',stage:'LESS DOOMSCROLL\nMORE DANCE FLOOR'};

// Pixel aspect follows the actual plane. Never squeeze glyphs with fillText maxWidth.
export function signCanvas(lines,aspect,{ink='#184c4b',paper='#efe3c5',border=true}={}){
 const canvas=document.createElement('canvas');canvas.width=2048;canvas.height=Math.max(1,Math.round(canvas.width/aspect));
 const c=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
 c.fillStyle=paper;c.fillRect(0,0,w,h);const margin=Math.min(h*.14,w*.06);
 if(border){c.strokeStyle='#b39a70';c.lineWidth=Math.max(2,h*.012);c.strokeRect(margin*.45,margin*.45,w-margin*.9,h-margin*.9);}
 c.fillStyle=ink;c.textAlign='center';c.textBaseline='middle';
 let size=Math.min(h*.57/lines.length,(h-margin*2)/lines.length*.80);
 c.font=`700 ${size}px Arial, sans-serif`;
 while(lines.some(s=>c.measureText(s).width>w-margin*2)&&size>4){size-=1;c.font=`700 ${size}px Arial, sans-serif`;}
 lines.forEach((s,i)=>c.fillText(s,w/2,h/2+(i-(lines.length-1)/2)*size*1.35));
 return canvas;
}

export function repairKitSigns(libraries,anisotropy=4){
 const cache=new Map();
 const print=libraries.get('player_jam')?.scene.getObjectByName('player_jam_print');
 if(print){
  const source=print.geometry,pos=source.attributes.position,color=source.attributes.color,indices=source.index?.array||Array.from({length:pos.count},(_,i)=>i),sun=[],letterVertices=[];
  for(let i=0;i<pos.count;i++)if(color.getZ(i)>.15)letterVertices.push(i);
  for(let i=0;i<indices.length;i+=3)if([indices[i],indices[i+1],indices[i+2]].every(n=>color.getZ(n)<.15))sun.push(indices[i],indices[i+1],indices[i+2]);
  // The sun and lettering were exported together. Retain the sun's exact vertices
  // and put new printed text on a conforming strip with the same skin weights.
  if(letterVertices.length&&sun.length){
   print.geometry=source.clone();print.geometry.setIndex(sun);
   const canvas=document.createElement('canvas');canvas.width=canvas.height=512;const ctx=canvas.getContext('2d');ctx.fillStyle='#efdfb9';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 76px Arial';['GOOD','VIBES','WEIRD','OUTPUTS'].forEach((s,i)=>ctx.fillText(s,256,60+i*126));
   const positions=[],uv=[],skinIndex=[],skinWeight=[],ix=[],nx=8,ny=8;
   for(let j=0;j<=ny;j++)for(let i=0;i<=nx;i++){const x=(i/nx-.5)*.164,y=1.10+j/ny*.151;let nearest=letterVertices[0],distance=Infinity;for(const n of letterVertices){const d=(pos.getX(n)-x)**2+(pos.getY(n)-y)**2;if(d<distance){distance=d;nearest=n;}}positions.push(x,y,pos.getZ(nearest)+.0015);uv.push(i/nx,j/ny);for(let k=0;k<4;k++){skinIndex.push(source.attributes.skinIndex.array[nearest*4+k]);skinWeight.push(source.attributes.skinWeight.array[nearest*4+k]);}}
   for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i,b=a+nx+1;ix.push(a,a+1,b,a+1,b+1,b);}
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(skinIndex,4));g.setAttribute('skinWeight',new THREE.Float32BufferAttribute(skinWeight,4));g.setIndex(ix);g.computeVertexNormals();
   const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=anisotropy;const m=new THREE.MeshStandardMaterial({map:texture,alphaTest:.3,roughness:.92,side:THREE.DoubleSide});
   const lettering=new THREE.SkinnedMesh(g,m);lettering.name='player_jam_lettering';lettering.position.copy(print.position);lettering.quaternion.copy(print.quaternion);lettering.scale.copy(print.scale);lettering.bindMode=print.bindMode;lettering.bind(print.skeleton,print.bindMatrix);lettering.frustumCulled=false;print.parent.add(lettering);
  }
 }
 // Change only printed ink regions. Preserve the atlas borders, record circles,
 // sun illustration, UVs, mesh shapes and all material properties.
 const atlases=new Set();
 for(const lib of libraries.values())lib.scene.traverse(o=>{
  const m=o.material;if(!o.isMesh||Array.isArray(m)||m?.name!=='labels_atlas'||atlases.has(m))return;atlases.add(m);
  const image=m.map.image,c=document.createElement('canvas');c.width=image.width;c.height=image.height;const ctx=c.getContext('2d');ctx.drawImage(image,0,0);ctx.save();ctx.scale(c.width/1024,c.height/1024);
  const labels=[...Object.values(RECORD_LABELS),'PROMPT','TOOL','CONTEXT','SHOW ME','TRY THIS','YOUR TURN','TEAM UP','MAKE STUFF','SNACKS / VIBES','REBOOT CLUB'];
  const colors=['#d5a342','#6e9aab','#b94d36','#6b9c81','#d5a342'];
  labels.forEach((label,i)=>{if(i>=5&&i<=7)return;const x=i%4*256,y=Math.floor(i/4)*256;ctx.fillStyle=i<5||i>=8&&i<=12?colors[i%5]:'#efdfb9';ctx.fillRect(x+12,y+45,232,i<5?109:140);ctx.fillStyle='#173f3c';ctx.textAlign='center';ctx.textBaseline='middle';let size=30;const words=label.toUpperCase().split(' '),lines=[];let line='';ctx.font=`bold ${size}px Arial`;for(const word of words){if(line&&ctx.measureText(line+' '+word).width>214){lines.push(line);line=word;}else line+=(line?' ':'')+word;}lines.push(line);while(lines.some(s=>ctx.measureText(s).width>214)&&size>8){size--;ctx.font=`bold ${size}px Arial`;}lines.forEach((s,j)=>ctx.fillText(s,x+128,y+96+(j-(lines.length-1)/2)*34));});
  ctx.fillStyle='#21534d';ctx.fillRect(778,958,236,47);ctx.fillStyle='#efdfb9';ctx.textAlign='center';ctx.font='bold 25px Arial';ctx.fillText('PROMPTSTOCK',896,981);ctx.restore();
  const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;texture.flipY=m.map.flipY;texture.anisotropy=anisotropy;m.map=texture;m.needsUpdate=true;
 });
 for(const lib of libraries.values())lib.scene.traverse(o=>{
  if(!o.isMesh||Array.isArray(o.material)||!o.material.name.startsWith('banner_'))return;
  const key=o.material.name.slice(7),title=BOOTH_TITLES[key];if(!title)return;
  o.geometry.computeBoundingBox();const s=o.geometry.boundingBox.getSize(new THREE.Vector3());
  const dimensions=[s.x,s.y,s.z].sort((a,b)=>b-a),aspect=dimensions[0]/dimensions[1];
  const id=key+':'+aspect.toFixed(3);if(!cache.has(id)){
   const lines=key==='maker'?['THE TINKER','TENT']:key==='news'&&aspect<6?['THE PATCH NOTES','PRESS']:title.split('\n');
   const tex=new THREE.CanvasTexture(signCanvas(lines,aspect,{ink:key==='aid'?'#993f31':'#184c4b'}));tex.colorSpace=THREE.SRGBColorSpace;tex.flipY=o.material.map?.flipY??false;tex.anisotropy=anisotropy;
   const m=o.material.clone();m.map=tex;m.roughness=1;m.name='printed_'+id;cache.set(id,m);
  }
  o.material=cache.get(id);
 });
}
