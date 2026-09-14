const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync(require('node:path').join(__dirname,'../skills-jam-3d.html'),'utf8');
const noop=()=>{};
const canvasContext=new Proxy({measureText:t=>({width:t.length*10})},{get:(o,k)=>k in o?o[k]:noop,set:(o,k,v)=>(o[k]=v,true)});
const context=vm.createContext({console,Float32Array,Math,JSON,Map,Set,Uint8Array,URL,document:{createElement:()=>({getContext:()=>canvasContext}),addEventListener:noop},window:{FestivalCrowd:require('../festival-crowd.mjs'),addEventListener:noop},localStorage:{getItem:()=>null},matchMedia:()=>({matches:false})});
for(const m of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))vm.runInContext(m[1].replace(/\bboot\(\);\s*$/,''),context);
vm.runInContext('engine={texture:()=>null,build:r=>r.update(),dusk:0};posterTexture={id:"test",gl:null};foliageTexture={id:"foliage",gl:null};buildWorld();',context);
const get=code=>vm.runInContext(code,context);
test('all destinations have safe, connected walking arrivals',()=>{
 const destinations=get('spots.map(s=>({id:s.id,x:s.arrival[0],z:s.arrival[2]}))');
 const canStand=get('canStand');
 const step=.5,queue=[[0,32]],visited=new Set(['0,32']);
 for(let head=0;head<queue.length;head++) {const [x,z]=queue[head];for(const [dx,dz]of [[step,0],[-step,0],[0,step],[0,-step]]){const a=x+dx,b=z+dz,k=a+','+b;if(!visited.has(k)&&canStand(a,b)){visited.add(k);queue.push([a,b]);}}}
 for(const s of destinations){assert.ok(canStand(s.x,s.z),s.id+' has blocked arrival');assert.ok(queue.some(([x,z])=>Math.hypot(s.x-x,s.z-z)<.75),s.id+' not reachable from entrance');}
 assert.equal(destinations.length,14);
});
test('lake blocks walking except on the pier and its end platform',()=>{
 assert.equal(get('canStand(0,-55)'),false);assert.equal(get('canStand(23,-55)'),true);assert.equal(get('canStand(23,-66)'),true);assert.equal(get('canStand(27,-66)'),false);assert.equal(get('canStand(23,-68)'),false);
});
test('expanded map contains every destination',()=>{assert.ok(get('spots.every(s=>{const [x,y]=mapXY(s.x,s.z);return x>0&&x<400&&y>0&&y<440})'));});
test('lake terrain lies below water and expanded districts stay level',()=>{assert.ok(get('groundHeight(0,-60)<-.2'));assert.equal(get('groundHeight(51,-15)'),0);assert.equal(get('groundHeight(-51,-15)'),0);});
test('tour includes all original booths and new districts',()=>{assert.ok(get('[...stampIds,...districtIds].every(id=>tourRoute.includes(id))'));});
test('animated geometry keeps finite transforms at day and dusk',()=>{assert.ok(get('[0,1].every(d=>{engine.dusk=d;animators.forEach(fn=>fn(12.5));const check=n=>Array.from(n.world).every(Number.isFinite)&&n.children.every(check);return check(root)})'));});
test('wooden sign frames sit behind the printed face',()=>{assert.ok(get(`(()=>{const parent=new Node();const face=sign(parent,['TEST'],[0,2,0],3,1);const frame=parent.children[0];return frame.p[2]+frame.s[2]/2<face.p[2];})()`));});
test('rebuilt surface meshes have finite vertices and consistent layout',()=>{assert.ok(get('Object.values(G).every(g=>g.length%24===0&&Array.from(g).every(Number.isFinite))'));});
test('new trees use transparent foliage rather than sphere canopies',()=>{assert.ok(get(`(()=>{const g=root.children.find(n=>n.children.some(c=>c.geo==='trunk')&&n.children.some(c=>c.tex?.id==='foliage'));return !!g&&!g.children.some(c=>c.geo==='sphere');})()`));});
test('lathe side triangles face outward',()=>{assert.ok(get(`(()=>{const g=G.torso;for(let i=0;i<g.length;i+=24){const p=Array.from(g.slice(i,i+3)),q=Array.from(g.slice(i+8,i+11)),r=Array.from(g.slice(i+16,i+19));const n=V.cross(V.sub(q,p),V.sub(r,p));if(V.dot(n,[p[0],0,p[2]])<-.000001)return false;}return true;})()`));});
