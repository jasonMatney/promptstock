// Metres, seconds, Y up. Rendering never changes simulation state.
export const STEP = 1 / 120;
export class KickBall {
 constructor({radius=.13,obstacles=[]}={}) { this.radius=radius;this.obstacles=obstacles;this.reset(); }
 reset(x=this.home?.[0]??-4,z=this.home?.[1]??27) { this.home=[x,z];this.p=[x,this.radius,z];this.v=[0,0,0];this.accumulator=0;this.age=0;this.moving=false; }
 kick(angle,power) { const speed=5+Math.max(0,Math.min(1,power))*8;this.v=[Math.sin(angle)*speed*.86,speed*.51,-Math.cos(angle)*speed*.86];this.moving=true;this.age=0; }
 tick() {
  if(!this.moving)return;this.age+=STEP;this.v[1]-=9.81*STEP;
  for(let i=0;i<3;i++)this.p[i]+=this.v[i]*STEP;
  if(this.p[1]<this.radius){this.p[1]=this.radius;this.v[1]=Math.abs(this.v[1])>.55?-this.v[1]*.38:0;const f=Math.exp(-2.7*STEP);this.v[0]*=f;this.v[2]*=f;}
  for(const o of this.obstacles){const dx=this.p[0]-o.x,dz=this.p[2]-o.z,d=Math.hypot(dx,dz),r=this.radius+o.r;if(d<r&&this.p[1]<(o.height||2)){const nx=d?dx/d:1,nz=d?dz/d:0;this.p[0]=o.x+nx*r;this.p[2]=o.z+nz*r;const dot=this.v[0]*nx+this.v[2]*nz;if(dot<0){this.v[0]-=1.6*dot*nx;this.v[2]-=1.6*dot*nz;}}}
  if(Math.hypot(this.v[0],this.v[2])<.06&&this.p[1]<=this.radius+.001){this.v=[0,0,0];this.moving=false;}
  if(this.age>12||Math.abs(this.p[0])>28||this.p[2]<9||this.p[2]>40||!this.p.every(Number.isFinite))this.reset();
 }
 advance(dt,onStep=()=>{}) {this.accumulator+=Math.max(0,Math.min(dt,.25));while(this.accumulator+1e-10>=STEP){this.tick();onStep(this);this.accumulator-=STEP;} }
 predict(angle,power){const sim=new KickBall({radius:this.radius,obstacles:this.obstacles});sim.reset(this.p[0],this.p[2]);sim.kick(angle,power);const points=[];for(let n=0;n<600&&sim.moving;n++){sim.tick();if(n%8===0)points.push([...sim.p]);}return points;}
}
export const ROUND_STEPS=['kick','aid','maker'];
export function migrateRound(raw) {
 const r=raw&&typeof raw==='object'?raw:{};
 return {version:1,overnights:Number.isInteger(r.overnights)?Math.max(0,r.overnights):0,robotRepaired:r.robotRepaired===true,day:Number.isInteger(r.day)&&r.day>0?r.day:1,active:!!r.active,completed:[...new Set((Array.isArray(r.completed)?r.completed:[]).filter(x=>ROUND_STEPS.includes(x)))],best:Number.isFinite(r.best)?Math.max(0,r.best):0,finished:Number.isInteger(r.finished)?Math.max(0,r.finished):0};
}
export function beginRound(state){if(state.completed.length||state.finished)state.day++;state.active=true;state.completed=[];return state;}
export function finishActivity(state,id){if(!state.active||!ROUND_STEPS.includes(id)||state.completed.includes(id))return false;state.completed.push(id);return true;}
export function nextActivity(state){return ROUND_STEPS.find(x=>!state.completed.includes(x))||'finale';}
export function finishRound(state){if(!state.active||nextActivity(state)!=='finale')return false;state.active=false;state.finished++;return true;}
export function concertUnlocked(state){return ROUND_STEPS.every(id=>state.completed.includes(id));}
