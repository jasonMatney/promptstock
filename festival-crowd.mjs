// Conversational circles leave the central activity lawn and booth entrances open.
// All guests use the existing six baked, instanced character variants.
const CLUSTERS=[[-12,10],[12,11],[-28,4],[28,11],[-12,-16],[12,-18],
 [-26,-26],[27,-30],[-31,25],[31,28],[-5,-22],[6,-21]];
export const EXTRA_FESTIVAL_GUESTS=Object.freeze(CLUSTERS.flatMap(([x,z],group)=>
 Array.from({length:4},(_,i)=>{const angle=i*Math.PI/2+group*.37,r=1.25+(i%2)*.15;
  return Object.freeze([x+Math.sin(angle)*r,z+Math.cos(angle)*r,angle+Math.PI]);
 })));
