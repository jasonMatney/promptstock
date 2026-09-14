// The trip owns temporary progress only; festival stamps and challenges are untouched.
export class LakeJourney {
 constructor(){this.phase='paddle';this.distance=0;this.speed=0;this.strokes=0;this.cooldown=0;this.stirs=0;this.heat=0;this.held=false;this.night=0;}
 stroke(){if(this.phase!=='paddle'||this.cooldown>0)return false;this.speed=Math.min(4.5,this.speed+1.65);this.cooldown=.5;this.strokes++;return true;}
 step(dt){dt=Math.max(0,Math.min(dt,.1));this.cooldown=Math.max(0,this.cooldown-dt);if(this.phase==='paddle'){this.distance=Math.min(78,this.distance+this.speed*dt);this.speed*=Math.exp(-.65*dt);}if(this.phase==='roast'&&this.held)this.heat=Math.min(10,this.heat+dt);if(this.phase==='sleep')this.night+=dt;}
 beach(){if(this.phase!=='paddle'||this.distance<77.5)return false;this.phase='meet';return true;}
 meet(){if(this.phase!=='meet')return false;this.phase='dinner';return true;}
 stir(){if(this.phase!=='dinner')return false;if(++this.stirs>=6)this.phase='secret';return true;}
 promise(){if(this.phase!=='secret')return false;this.phase='roast';return true;}
 bite(){if(this.phase!=='roast'||this.held||this.heat<5||this.heat>8)return false;this.phase='bed';return true;}
 fresh(){if(this.phase!=='roast')return false;this.heat=0;this.held=false;return true;}
 sleep(){if(this.phase!=='bed')return false;this.phase='sleep';this.night=0;return true;}
 wake(){if(this.phase!=='sleep'||this.night<3)return false;this.phase='done';return true;}
}
