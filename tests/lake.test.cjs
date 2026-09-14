const {test}=require('node:test');const assert=require('node:assert/strict');
test('the canoe requires sustained rowing, coasts, and cannot skip to camp',async()=>{const {LakeJourney}=await import('../lake-journey.mjs');const j=new LakeJourney();assert.equal(j.beach(),false);j.stroke();assert.equal(j.stroke(),false);for(let i=0;i<100;i++)j.step(.1);assert.ok(j.distance>0&&j.distance<5);for(let i=0;i<900;i++){j.stroke();j.step(.1);}assert.equal(j.distance,78);assert.equal(j.beach(),true);assert.equal(j.phase,'meet');assert.equal(j.stroke(),false);});
test('dinner, the secret, roasting, sleeping and waking must happen in order',async()=>{const {LakeJourney}=await import('../lake-journey.mjs');const j=new LakeJourney();assert.equal(j.meet(),false);assert.equal(j.sleep(),false);j.distance=78;j.beach();j.meet();for(let i=0;i<6;i++)j.stir();assert.equal(j.phase,'secret');assert.equal(j.bite(),false);j.promise();j.held=true;for(let i=0;i<65;i++)j.step(.1);assert.equal(j.bite(),false);j.held=false;assert.equal(j.bite(),true);assert.equal(j.sleep(),true);assert.equal(j.wake(),false);for(let i=0;i<31;i++)j.step(.1);assert.equal(j.wake(),true);assert.equal(j.phase,'done');});
test('burned marshmallows can be replaced; hidden-tab time cannot instantly finish roasting',async()=>{const {LakeJourney}=await import('../lake-journey.mjs');const j=new LakeJourney();j.phase='roast';j.held=true;j.step(60);assert.equal(j.heat,.1);for(let i=0;i<90;i++)j.step(.1);j.held=false;assert.equal(j.bite(),false);j.fresh();assert.equal(j.heat,0);assert.equal(j.held,false);});
test('leaving camp restores light and temporary actors without changing festival progress',async()=>{
 const T=await import('three');const {LakeAdventure}=await import('../lake-adventure.mjs');const a=Object.create(LakeAdventure.prototype);let dusk;
 Object.assign(a,{active:true,e:{campNight:.85},fireLight:{visible:true},ui:{dataset:{tripPhase:'roast'}},keys:new Set(['KeyW']),journey:{held:true},rider:{visible:true},walker:{visible:true},stick:{visible:true},boat:new T.Group(),previousDusk:.25,setDusk:v=>dusk=v});
 a.close();assert.equal(a.e.campNight,0);assert.equal(a.active,false);assert.equal(a.keys.size,0);assert.equal(a.rider.visible,false);assert.equal(a.journey.held,false);assert.equal(a.ui.dataset.tripPhase,undefined);assert.equal(dusk,.25);assert.deepEqual(a.boat.position.toArray(),[27,-.04,-67]);
});
test('camp darkness restores the original daylight environment intensity',async()=>{
 const T=await import('three');const {FestivalEngine}=await import('../engine-source.mjs');const e=Object.create(FestivalEngine.prototype);Object.assign(e,{dusk:0,campNight:.9,lastLight:-1,environmentDusk:0,sun:new T.DirectionalLight(),hemi:new T.HemisphereLight(),fill:new T.DirectionalLight(),scene:new T.Scene(),fire:new T.PointLight(),stageLight:new T.PointLight(),sky:{material:{uniforms:{sunPosition:{value:new T.Vector3()}}}}});e.scene.fog=new T.FogExp2();e.updateLighting();assert.ok(e.scene.environmentIntensity<.05);assert.ok(e.sun.intensity<.5);e.campNight=0;e.updateLighting();assert.equal(e.scene.environmentIntensity,.20);assert.equal(e.sun.intensity,2.5);
});
test('camp obstacles block swept movement and both interactions remain reachable',async()=>{
 const {campBlocked,moveInCamp,BED_APPROACH,CAMP_OBSTACLES}=await import('../camp-ground.mjs');
 for(const o of CAMP_OBSTACLES)assert.equal(campBlocked(o.x,o.z),true);
 const p={x:-5,z:4};moveInCamp(p,0,-12);assert.ok(p.z>-1.51);assert.equal(campBlocked(p.x,p.z),false);
 const fire={x:-1,z:5};moveInCamp(fire,0,-10);assert.ok(fire.z>2.4);
 // Grid flood-fill proves both approaches connect to the canoe landing.
 const step=.2,queue=[[0,50]],seen=new Set(['0,50']);let met=false,bed=false;
 for(let i=0;i<queue.length;i++){const [a,b]=queue[i],x=a*step,z=b*step-2;if(Math.hypot(x-2,z+2)<2.3)met=true;if(Math.hypot(x-BED_APPROACH.x,z-BED_APPROACH.z)<1.1)bed=true;
 for(const [da,db]of [[1,0],[-1,0],[0,1],[0,-1]]){const aa=a+da,bb=b+db,key=aa+','+bb;if(!seen.has(key)&&!campBlocked(aa*step,bb*step-2)){seen.add(key);queue.push([aa,bb]);}}}
 assert.ok(met&&bed);
});
test('camp grass is instanced and leaves obstacles and approaches clear',async()=>{
 const T=await import('three'),{campGrass,campBlocked}=await import('../camp-ground.mjs');const g=campGrass(new T.Group()),m=new T.Matrix4(),p=new T.Vector3();assert.ok(g.isInstancedMesh&&g.count>1000);for(let i=0;i<g.count;i++){g.getMatrixAt(i,m);p.setFromMatrixPosition(m);assert.ok(!campBlocked(p.x,p.z,.54));assert.equal(p.y,Math.fround(.46));}
});
