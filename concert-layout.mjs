// One layout for named companions and instanced guests: nobody can share a spot.
// Featured companion seat order comes from festival-npcs featuredConcertKitIds().
import { featuredConcertKitIds } from './festival-npcs.mjs';

export const FEATURED_SEATS=Object.freeze([
 [-4.7,-29.2],[-2.8,-29.6],[-.7,-29.1],[1.3,-29.5],[3.4,-29.1],[5.5,-29.4],
 [-4,-27.2],[-1.7,-27.5],[1,-27.2],[-6.6,-27.7],[6.8,-27.3]
]);

/** Map each concert-reserved NPC kit id → its FEATURED_SEATS slot (or null if overflow). */
export function featuredSeatAssignments(ids=featuredConcertKitIds()){
 return Object.freeze(ids.map((id,i)=>({
  kitId:id,
  seat:i<FEATURED_SEATS.length?Object.freeze([...FEATURED_SEATS[i]]):null,
 })));
}

export function concertSeats(count){
 let seed=260913;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const spots=[];
 for(let tries=0;spots.length<count&&tries<50000;tries++){
  const p=[(random()-.5)*18,-27+random()*12];
  if([...FEATURED_SEATS,...spots].every(q=>Math.hypot(p[0]-q[0],p[1]-q[1])>1.35))spots.push(p);
 }
 if(spots.length!==count)throw Error('Concert lawn is full');
 // Shuffle independently of material/skin/wardrobe groups and render traversal.
 for(let i=spots.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[spots[i],spots[j]]=[spots[j],spots[i]];}
 return spots.map(([x,z])=>({x,z,yaw:Math.PI+(random()-.5)*.55}));
}
