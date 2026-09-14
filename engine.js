(()=>{var vm=[[-12,10],[12,11],[-28,4],[28,11],[-12,-16],[12,-18],[-26,-26],[27,-30],[-31,25],[31,28],[-5,-22],[6,-21]],xd=Object.freeze(vm.flatMap(([s,e],t)=>Array.from({length:4},(i,n)=>{let r=n*Math.PI/2+t*.37,a=1.25+n%2*.15;return Object.freeze([s+Math.sin(r)*a,e+Math.cos(r)*a,r+Math.PI])})));var Yc=Object.freeze({communicate:"Say It Weird",solve:"Debug the Vibes",create:"Make a Mess",connect:"Meet Your Humans","stay curious":"What If, Though?"}),Oi=s=>Yc[String(s).toLowerCase()]||s;var Vr=Object.freeze({title:"Aspen Trail Drift",src:"audio/aspen-trail-drift.mp3"}),fo=Object.freeze({title:"Moonlit Cabin Hush",src:"audio/moonlit-cabin-hush.mp3"}),_d=Object.freeze({title:"One Island One View",src:"audio/one-island-one-view.mp3"}),ym=Object.freeze([["Communicate","communicate"],["Solve","solve"],["Create","create"],["Connect","connect"],["Stay Curious","stay-curious","b68bbb383b16"]].map(([s,e,t])=>Object.freeze({title:s,src:`audio/records/${e}.mp3`,revision:t})));function Mm(s){return ym.find(e=>e.title.toLowerCase()===String(s).toLowerCase())}var po=class{constructor({AudioClass:e=globalThis.Audio,onChange:t=()=>{},revokeURL:i=n=>URL.revokeObjectURL(n)}={}){this.AudioClass=e,this.onChange=t,this.revokeURL=i,this.track=null,this.title=Vr.title,this.src=null,this.status="ready",this.volume=.65,this.request=0,this.wantsPlay=!1}get state(){return{title:this.title,src:this.src,status:this.status,playing:this.status==="playing",volume:this.volume,currentTime:this.track?.currentTime||0,duration:Number.isFinite(this.track?.duration)?this.track.duration:0}}emit(){this.onChange(this.state)}prepare(e,t){this.request++,this.wantsPlay=!1;let i=this.track;this.track=null,i&&(i.pause(),i.removeAttribute("src"),i.load()),this.src?.startsWith("blob:")&&this.revokeURL(this.src),this.src=e,this.title=t,this.status="ready";let n=new this.AudioClass;this.track=n,n.preload="none",n.loop=!0,n.volume=this.volume,n.addEventListener("playing",()=>{if(this.track===n){if(!this.wantsPlay){n.pause();return}this.status="playing",this.emit()}}),n.addEventListener("waiting",()=>{this.track===n&&this.wantsPlay&&(this.status="loading",this.emit())}),n.addEventListener("pause",()=>{this.track===n&&(this.status!=="error"&&(this.status="paused"),this.emit())}),n.addEventListener("error",()=>{this.track===n&&(this.wantsPlay=!1,this.status="error",this.emit())}),n.addEventListener("ended",()=>{this.track!==n||n.loop||(this.wantsPlay=!1,this.status="ended",this.emit())}),n.src=e,this.emit()}pause(){this.request++,this.wantsPlay=!1,this.track?.pause(),this.status="paused",this.emit()}async play(){this.track||this.prepare(Vr.src,Vr.title);let e=this.track,t=++this.request;this.wantsPlay=!0,e.error&&e.load(),this.status="loading",this.emit();try{return await e.play(),t!==this.request||this.track!==e||!this.wantsPlay?!1:(this.status="playing",this.emit(),!0)}catch{return t!==this.request||this.track!==e||(this.wantsPlay=!1,this.status="error",this.emit()),!1}}playRecord(e){let t=Mm(e);if(!t)return Promise.resolve(!1);let i=t.src+(t.revision?"?v="+t.revision:"");return this.src!==i&&this.prepare(i,t.title),this.play()}playCamp(){return this.src!==fo.src&&this.prepare(fo.src,fo.title),this.play()}leaveCamp(){if(this.src!==fo.src)return;let e=this.wantsPlay;if(this.prepare(Vr.src,Vr.title),e)return this.play()}playFinale(){return this.prepare(_d.src,_d.title),this.track.loop=!1,this.play()}setVolume(e){this.volume=Math.max(0,Math.min(1,Number(e)||0)),this.track&&(this.track.volume=this.volume),this.emit()}};var ff=0,Uh=1,pf=2;var Is=1,mf=2,Er=3,Vi=0,Kt=1,lt=2,Wi=0,Ar=1,Fa=2,Fh=3,Oh=4,gf=5;var Ls=100,xf=101,_f=102,vf=103,yf=104,Mf=200,bf=201,Sf=202,wf=203,Bh=204,kh=205,Tf=206,Ef=207,Af=208,Rf=209,Cf=210,Pf=211,If=212,Lf=213,Df=214,Ko=0,jo=1,Jo=2,lr=3,Zo=4,$o=5,Qo=6,el=7,zh=0,Nf=1,Uf=2,rn=0,Oa=1,Ba=2,ka=3,Ds=4,za=5,Ha=6,Ga=7,bh="attached",Ff="detached",Hh=300,ls=301,Ns=302,wl=303,Tl=304,Va=306,_i=1e3,ki=1001,cr=1002,Bt=1003,El=1004;var Us=1005;var Pt=1006,Rr=1007;var Si=1008;var wi=1009,Gh=1010,Vh=1011,Cr=1012,Al=1013,Ii=1014,Li=1015,si=1016,Rl=1017,Cl=1018,Pr=1020,Wh=35902,Xh=35899,qh=1021,Yh=1022,Di=1023,dn=1026,cs=1027,Pl=1028,Il=1029,hs=1030,Ll=1031;var Dl=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Nl=35840,Ul=35841,Fl=35842,Ol=35843,Bl=36196,kl=37492,zl=37496,Hl=37488,Gl=37489,Ka=37490,Vl=37491,Wl=37808,Xl=37809,ql=37810,Yl=37811,Kl=37812,jl=37813,Jl=37814,Zl=37815,$l=37816,Ql=37817,ec=37818,tc=37819,ic=37820,nc=37821,sc=36492,rc=36494,ac=36495,oc=36283,lc=36284,ja=36285,cc=36286,hc=2200,uc=2201,Of=2202,bs=2300,Ss=2301,Xo=2302,Sh=2303,_s=2400,vs=2401,aa=2402,dc=2500,Bf=2501,Kh=0,Ja=1,Ir=2,kf=3200,Za=3201;var fc=0,zf=1,Hn="",at="srgb",di="srgb-linear",oa="linear",dt="srgb";var qo=7680;var Hf=519,Gf=512,Vf=513,Wf=514,pc=515,Xf=516,qf=517,mc=518,Yf=519,jh=35044,Jh=35048;var Zh="300 es",Qi=2e3,hr=2001;function bm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kf(){let s=ur("canvas");return s.style.display="block",s}var vd={},dr=null;function la(...s){let e="THREE."+s.shift();dr?dr("log",e,...s):console.log(e,...s)}function jf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=jf(s);let e="THREE."+s.shift();if(dr)dr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=jf(s);let e="THREE."+s.shift();if(dr)dr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ms(...s){let e=s.join(" ");e in vd||(vd[e]=!0,Ie(...s))}function Jf(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Zf={[Ko]:jo,[Jo]:Qo,[Zo]:el,[lr]:$o,[jo]:Ko,[Qo]:Jo,[el]:Zo,[$o]:lr},en=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=1234567,ia=Math.PI/180,ws=180/Math.PI;function zi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oi[s&255]+oi[s>>8&255]+oi[s>>16&255]+oi[s>>24&255]+"-"+oi[e&255]+oi[e>>8&255]+"-"+oi[e>>16&15|64]+oi[e>>24&255]+"-"+oi[t&63|128]+oi[t>>8&255]+"-"+oi[t>>16&255]+oi[t>>24&255]+oi[i&255]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function $h(s,e){return(s%e+e)%e}function wm(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Tm(s,e,t){return s!==e?(t-s)/(e-s):0}function na(s,e,t){return(1-t)*s+t*e}function Em(s,e,t,i){return na(s,e,1-Math.exp(-t*i))}function Am(s,e=1){return e-Math.abs($h(s,e*2)-e)}function Rm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Cm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Pm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Im(s,e){return s+Math.random()*(e-s)}function Lm(s){return s*(.5-Math.random())}function Dm(s){s!==void 0&&(yd=s);let e=yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nm(s){return s*ia}function Um(s){return s*ws}function Fm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Om(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function km(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function $i(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ct={DEG2RAD:ia,RAD2DEG:ws,generateUUID:zi,clamp:Qe,euclideanModulo:$h,mapLinear:wm,inverseLerp:Tm,lerp:na,damp:Em,pingpong:Am,smoothstep:Rm,smootherstep:Cm,randInt:Pm,randFloat:Im,randFloatSpread:Lm,seededRandom:Dm,degToRad:Nm,radToDeg:Um,isPowerOfTwo:Fm,ceilPowerOfTwo:Om,floorPowerOfTwo:Bm,setQuaternionFromProperEuler:km,normalize:vt,denormalize:$i},ie=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,o=Math.sin(o*y)/S,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new R,Md=new Je,Ye=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],y=n[1],S=n[4],_=n[7],b=n[2],T=n[5],A=n[8];return r[0]=a*x+o*y+l*b,r[3]=a*m+o*S+l*T,r[6]=a*g+o*_+l*A,r[1]=c*x+h*y+u*b,r[4]=c*m+h*S+u*T,r[7]=c*g+h*_+u*A,r[2]=d*x+f*y+p*b,r[5]=d*m+f*S+p*T,r[8]=d*g+f*_+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jc=new Ye,bd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zm(){let s={enabled:!0,workingColorSpace:di,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(n.r=Rn(n.r),n.g=Rn(n.g),n.b=Rn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(n.r=or(n.r),n.g=or(n.g),n.b=or(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hn?oa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[di]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:bd,fromXYZ:Sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:bd,fromXYZ:Sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),s}var Ze=zm();function Rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function or(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vs,tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vs===void 0&&(Vs=ur("canvas")),Vs.width=e.width,Vs.height=e.height;let n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rn(t[i]/255)*255):t[i]=Rn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,fr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Jc(n[a].image)):r.push(Jc(n[a]))}else r=Jc(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Gm=0,Zc=new R,qt=class s extends en{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=ki,n=ki,r=Pt,a=Si,o=Di,l=wi,c=s.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=zi(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Hh;qt.DEFAULT_ANISOTROPY=1;var ot=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(f+1)/2,b=(g+1)/2,T=(h+d)/4,A=(u+x)/4,v=(p+m)/4;return S>_&&S>b?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=T/i,r=A/i):_>b?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=T/n,r=v/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=A/r,n=v/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends en{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},r=new qt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends il{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ca=class extends qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Le=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,i,n,r,a,o,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,f,p,x,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Wm)}lookAt(e,t,i){let n=this.elements;return Ai.subVectors(e,t),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),jn.crossVectors(i,Ai),jn.lengthSq()===0&&(Math.abs(i.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),jn.crossVectors(i,Ai)),jn.normalize(),mo.crossVectors(Ai,jn),n[0]=jn.x,n[4]=mo.x,n[8]=Ai.x,n[1]=jn.y,n[5]=mo.y,n[9]=Ai.y,n[2]=jn.z,n[6]=mo.z,n[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],S=i[7],_=i[11],b=i[15],T=n[0],A=n[4],v=n[8],E=n[12],P=n[1],I=n[5],N=n[9],k=n[13],L=n[2],O=n[6],V=n[10],q=n[14],ne=n[3],X=n[7],Z=n[11],Q=n[15];return r[0]=a*T+o*P+l*L+c*ne,r[4]=a*A+o*I+l*O+c*X,r[8]=a*v+o*N+l*V+c*Z,r[12]=a*E+o*k+l*q+c*Q,r[1]=h*T+u*P+d*L+f*ne,r[5]=h*A+u*I+d*O+f*X,r[9]=h*v+u*N+d*V+f*Z,r[13]=h*E+u*k+d*q+f*Q,r[2]=p*T+x*P+m*L+g*ne,r[6]=p*A+x*I+m*O+g*X,r[10]=p*v+x*N+m*V+g*Z,r[14]=p*E+x*k+m*q+g*Q,r[3]=y*T+S*P+_*L+b*ne,r[7]=y*A+S*I+_*O+b*X,r[11]=y*v+S*N+_*V+b*Z,r[15]=y*E+S*k+_*q+b*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*d,S=o*f-c*u,_=o*d-l*u,b=a*f-c*h,T=a*d-l*h,A=a*u-o*h;return t*(x*y-m*S+g*_)-i*(p*y-m*b+g*T)+n*(p*S-x*b+g*A)-r*(p*_-x*T+m*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*o-i*a,S=t*l-n*a,_=t*c-r*a,b=i*l-n*o,T=i*c-r*o,A=n*c-r*l,v=h*x-u*p,E=h*m-d*p,P=h*g-f*p,I=u*m-d*x,N=u*g-f*x,k=d*g-f*m,L=y*k-S*N+_*I+b*P-T*E+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return e[0]=(o*k-l*N+c*I)*O,e[1]=(n*N-i*k-r*I)*O,e[2]=(x*A-m*T+g*b)*O,e[3]=(d*T-u*A-f*b)*O,e[4]=(l*P-a*k-c*E)*O,e[5]=(t*k-n*P+r*E)*O,e[6]=(m*_-p*A-g*S)*O,e[7]=(h*A-d*_+f*S)*O,e[8]=(a*N-o*P+c*v)*O,e[9]=(i*P-t*N-r*v)*O,e[10]=(p*T-x*_+g*y)*O,e[11]=(u*_-h*T-f*y)*O,e[12]=(o*E-a*I-l*v)*O,e[13]=(t*I-i*E+n*v)*O,e[14]=(x*S-p*b-m*y)*O,e[15]=(h*b-u*S+d*y)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,x=a*h,m=a*u,g=o*u,y=l*c,S=l*h,_=l*u,b=i.x,T=i.y,A=i.z;return n[0]=(1-(x+g))*b,n[1]=(f+_)*b,n[2]=(p-S)*b,n[3]=0,n[4]=(f-_)*T,n[5]=(1-(d+g))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(p+S)*A,n[9]=(m-y)*A,n[10]=(1-(d+x))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ws.set(n[0],n[1],n[2]).length(),o=Ws.set(n[4],n[5],n[6]).length(),l=Ws.set(n[8],n[9],n[10]).length();r<0&&(a=-a),ji.copy(this);let c=1/a,h=1/o,u=1/l;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=h,ji.elements[5]*=h,ji.elements[6]*=h,ji.elements[8]*=u,ji.elements[9]*=u,ji.elements[10]*=u,t.setFromRotationMatrix(ji),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=Qi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Qi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===hr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Qi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Qi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===hr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ws=new R,ji=new Le,Vm=new R(0,0,0),Wm=new R(1,1,1),jn=new R,mo=new R,Ai=new R,wd=new Le,Td=new Je,Cn=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xm=0,Ed=new R,Xs=new Je,Mn=new Le,go=new R,Wr=new R,qm=new R,Ym=new Je,Ad=new R(1,0,0),Rd=new R(0,1,0),Cd=new R(0,0,1),Pd={type:"added"},Km={type:"removed"},qs={type:"childadded",child:null},$c={type:"childremoved",child:null},xt=class s extends en{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new Cn,i=new Je,n=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ye}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Ad,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(Cd,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ad,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(Cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Wr,go,this.up):Mn.lookAt(go,Wr,this.up),this.quaternion.setFromRotationMatrix(Mn),n&&(Mn.extractRotation(n.matrixWorld),Xs.setFromRotationMatrix(Mn),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),qs.child=e,this.dispatchEvent(qs),qs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xt.DEFAULT_UP=new R(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ze.workingColorSpace){if(e=$h(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Qc(a,r,e+1/3),this.g=Qc(a,r,e),this.b=Qc(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,n),this}setStyle(e,t=at){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=$f[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Ze.workingToColorSpace(li.copy(this),e),Math.round(Qe(li.r*255,0,255))*65536+Math.round(Qe(li.g*255,0,255))*256+Math.round(Qe(li.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(li.copy(this),t);let i=li.r,n=li.g,r=li.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=at){Ze.workingToColorSpace(li.copy(this),e);let t=li.r,i=li.g,n=li.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(xo);let i=na(Jn.h,xo.h,t),n=na(Jn.s,xo.s,t),r=na(Jn.l,xo.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new ve;ve.NAMES=$f;var ha=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gr=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ji=new R,bn=new R,eh=new R,Sn=new R,Ys=new R,Ks=new R,Id=new R,th=new R,ih=new R,nh=new R,sh=new ot,rh=new ot,ah=new ot,An=class s{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ji.subVectors(e,t),n.cross(Ji);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Ji.subVectors(n,t),bn.subVectors(i,t),eh.subVectors(e,t);let a=Ji.dot(Ji),o=Ji.dot(bn),l=Ji.dot(eh),c=bn.dot(bn),h=bn.dot(eh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return sh.setScalar(0),rh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(e,t),rh.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(sh,r.x),a.addScaledVector(rh,r.y),a.addScaledVector(ah,r.z),a}static isFrontFacing(e,t,i,n){return Ji.subVectors(i,t),bn.subVectors(e,t),Ji.cross(bn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Ji.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Ys.subVectors(n,i),Ks.subVectors(r,i),th.subVectors(e,i);let l=Ys.dot(th),c=Ks.dot(th);if(l<=0&&c<=0)return t.copy(i);ih.subVectors(e,n);let h=Ys.dot(ih),u=Ks.dot(ih);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ys,a);nh.subVectors(e,r);let f=Ys.dot(nh),p=Ks.dot(nh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Ks,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Id.subVectors(r,n),o=(u-h)/(u-h+(f-p)),t.copy(n).addScaledVector(Id,o);let g=1/(m+x+d);return a=x*g,o=d*g,t.copy(i).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zi):Zi.fromBufferAttribute(r,a),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),vo.subVectors(this.max,Xr),js.subVectors(e.a,Xr),Js.subVectors(e.b,Xr),Zs.subVectors(e.c,Xr),Zn.subVectors(Js,js),$n.subVectors(Zs,Js),ps.subVectors(js,Zs);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-ps.z,ps.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,ps.z,0,-ps.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-ps.y,ps.x,0];return!oh(t,js,Js,Zs,vo)||(t=[1,0,0,0,1,0,0,0,1],!oh(t,js,Js,Zs,vo))?!1:(yo.crossVectors(Zn,$n),t=[yo.x,yo.y,yo.z],oh(t,js,Js,Zs,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wn=[new R,new R,new R,new R,new R,new R,new R,new R],Zi=new R,_o=new ii,js=new R,Js=new R,Zs=new R,Zn=new R,$n=new R,ps=new R,Xr=new R,vo=new R,yo=new R,ms=new R;function oh(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ms.fromArray(s,r);let o=n.x*Math.abs(ms.x)+n.y*Math.abs(ms.y)+n.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vt=new R,Mo=new ie,Jm=0,Lt=class extends en{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jh,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ua=class extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var De=class extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Zm=new ii,qr=new R,lh=new R,vi=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Zm.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(qr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(lh)),this.expandByPoint(qr.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$m=0,Bi=new Le,ch=new xt,$s=new R,Ri=new ii,Yr=new ii,Zt=new R,ze=class s extends en{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?ua:Ts)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,i){return Bi.makeTranslation(e,t,i),this.applyMatrix4(Bi),this}scale(e,t,i){return Bi.makeScale(e,t,i),this.applyMatrix4(Bi),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Ri.min,Yr.min),Ri.expandByPoint(Zt),Zt.addVectors(Ri.max,Yr.max),Ri.expandByPoint(Zt)):(Ri.expandByPoint(Yr.min),Ri.expandByPoint(Yr.max))}Ri.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(e,c),Zt.add($s)),n=Math.max(n,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Lt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new R,l[v]=new R;let c=new R,h=new R,u=new R,d=new ie,f=new ie,p=new ie,x=new R,m=new R;function g(v,E,P){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,P),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[v].add(x),o[E].add(x),o[P].add(x),l[v].add(m),l[E].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,E=y.length;v<E;++v){let P=y[v],I=P.start,N=P.count;for(let k=I,L=I+N;k<L;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new R,_=new R,b=new R,T=new R;function A(v){b.fromBufferAttribute(n,v),T.copy(b);let E=o[v];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(T,E);let I=_.dot(l[v])<0?-1:1;a.setXYZW(v,S.x,S.y,S.z,I)}for(let v=0,E=y.length;v<E;++v){let P=y[v],I=P.start,N=P.count;for(let k=I,L=I+N;k<L;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Lt(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},ui=new R,Hi=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=$i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hh=new R,Qm=new R,eg=new Ye,ti=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=hh.subVectors(i,t).cross(Qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(hh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||eg.getNormalMatrix(e),n=this.coplanarPoint(hh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tg=0,fi=class extends en{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Ar,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=kh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xr=class extends fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,Kr=new R,er=new R,tr=new R,ir=new ie,jr=new ie,Qf=new Le,bo=new R,Jr=new R,So=new R,Ld=new ie,uh=new ie,Dd=new ie,da=class extends xt{constructor(e=new xr){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Pn(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new Hi(i,3,0,!1)),Qs.setAttribute("uv",new Hi(i,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;wo(bo.set(-.5,-.5,0),tr,a,er,n,r),wo(Jr.set(.5,-.5,0),tr,a,er,n,r),wo(So.set(.5,.5,0),tr,a,er,n,r),Ld.set(0,0),uh.set(1,0),Dd.set(1,1);let o=e.ray.intersectTriangle(bo,Jr,So,!1,Kr);if(o===null&&(wo(Jr.set(-.5,.5,0),tr,a,er,n,r),uh.set(0,1),o=e.ray.intersectTriangle(bo,So,Jr,!1,Kr),o===null))return;let l=e.ray.origin.distanceTo(Kr);l<e.near||l>e.far||t.push({distance:l,point:Kr.clone(),uv:An.getInterpolation(Kr,bo,Jr,So,Ld,uh,Dd,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wo(s,e,t,i,n,r){ir.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(jr.x=r*ir.x-n*ir.y,jr.y=n*ir.x+r*ir.y):jr.copy(ir),s.copy(e),s.x+=jr.x,s.y+=jr.y,s.applyMatrix4(Qf)}var Tn=new R,dh=new R,To=new R,Eo=new R,ts=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){dh.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Eo.copy(this.origin).sub(dh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(To),o=Eo.dot(this.direction),l=-Eo.dot(To),c=Eo.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(dh).addScaledVector(To,d),f}intersectSphere(e,t){if(e.radius<0)return null;Tn.subVectors(e.center,this.origin);let i=Tn.dot(this.direction),n=Tn.dot(Tn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=i.x-a.x,y=i.y-a.y,S=i.z-a.z,_=Math.abs(l),b=Math.abs(c),T=Math.abs(h),A,v,E,P,I,N,k,L,O,V,q,ne;if(_>=b&&_>=T?(E=l,N=u,O=p,ne=g,l>=0?(A=c,v=h,P=d,I=f,k=x,L=m,V=y,q=S):(A=h,v=c,P=f,I=d,k=m,L=x,V=S,q=y)):b>=T?(E=c,N=d,O=x,ne=y,c>=0?(A=h,v=l,P=f,I=u,k=m,L=p,V=S,q=g):(A=l,v=h,P=u,I=f,k=p,L=m,V=g,q=S)):(E=h,N=f,O=m,ne=S,h>=0?(A=l,v=c,P=u,I=d,k=p,L=x,V=g,q=y):(A=c,v=l,P=d,I=u,k=x,L=p,V=y,q=g)),E===0)return null;let X=A/E,Z=v/E,Q=1/E,Re=P-X*N,Se=I-Z*N,ft=k-X*O,nt=L-Z*O,ht=V-X*ne,j=q-Z*ne,ee=ht*nt-j*ft,xe=Re*j-Se*ht,We=ft*Se-nt*Re;if(n){if(ee<0||xe<0||We<0)return null}else if((ee<0||xe<0||We<0)&&(ee>0||xe>0||We>0))return null;let be=ee+xe+We;if(be===0)return null;let Xe=Q*(ee*N+xe*O+We*ne);return(be>0?Xe<0:Xe>0)?null:this.at(Xe/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nd=new Le,gs=new ts,Ao=new vi,Ud=new R,Ro=new R,Co=new R,Po=new R,fh=new R,Io=new R,Fd=new R,Lo=new R,Fe=class extends xt{constructor(e=new ze,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fh.fromBufferAttribute(u,e),a?Io.addScaledVector(fh,h):Io.addScaledVector(fh.sub(t),h))}t.add(Io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(Ao.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ao,Ud)===null||gs.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Nd.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Nd),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=S;_<b;_+=3){let T=o.getX(_),A=o.getX(_+1),v=o.getX(_+2);n=Do(this,g,e,i,c,h,u,T,A,v),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);n=Do(this,a,e,i,c,h,u,y,S,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=S;_<b;_+=3){let T=_,A=_+1,v=_+2;n=Do(this,g,e,i,c,h,u,T,A,v),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,S=m+1,_=m+2;n=Do(this,a,e,i,c,h,u,y,S,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function ig(s,e,t,i,n,r,a,o){let l;if(e.side===Kt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Vi,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:s}}function Do(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Ro),s.getVertexPosition(l,Co),s.getVertexPosition(c,Po);let h=ig(s,e,t,i,Ro,Co,Po,Fd);if(h){let u=new R;An.getBarycoord(Fd,Ro,Co,Po,u),n&&(h.uv=An.getInterpolatedAttribute(n,o,l,c,u,new ie)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,l,c,u,new ie)),a&&(h.normal=An.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};An.getNormal(Ro,Co,Po,d.normal),h.face=d,h.barycoord=u}return h}var Zr=new ot,Od=new ot,Bd=new ot,ng=new ot,kd=new Le,No=new R,ph=new vi,zd=new Le,mh=new ts,In=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bh,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ph.copy(this.boundingSphere),ph.applyMatrix4(n),e.ray.intersectsSphere(ph)!==!1&&(zd.copy(n).invert(),mh.copy(e.ray).applyMatrix4(zd),!(this.boundingBox!==null&&mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Od.fromBufferAttribute(n.attributes.skinIndex,e),Bd.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Zr.copy(t),t.set(0,0,0,0)):(Zr.set(...t,1),t.set(0,0,0)),Zr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Bd.getComponent(r);if(a!==0){let o=Od.getComponent(r);kd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(ng.copy(Zr).applyMatrix4(kd),a)}}return t.isVector4&&(t.w=Zr.w),t.applyMatrix4(this.bindMatrixInverse)}},_r=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ln=class extends qt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Bt,h=Bt,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hd=new Le,sg=new Le,fa=class s{constructor(e=[],t=[]){this.uuid=zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:sg;Hd.multiplyMatrices(o,t[r]),Hd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ln(t,e,e,Di,Li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new _r),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},Dn=class extends Lt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new Le,Gd=new Le,Uo=[],Vd=new ii,rg=new Le,$r=new Fe,Qr=new vi,ni=class extends Fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,rg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,nr),Vd.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,nr),Qr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(i),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,nr),Gd.multiplyMatrices(i,nr),$r.matrixWorld=Gd,$r.raycast(e,Uo);for(let a=0,o=Uo.length;a<o;a++){let l=Uo[a];l.instanceId=r,l.object=this,t.push(l)}Uo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ln(new Float32Array(n*this.count),n,this.count,Pl,Li));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new vi,ag=new ie(.5,.5),Fo=new R,vr=class{constructor(e=new ti,t=new ti,i=new ti,n=new ti,r=new ti,a=new ti){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],S=r[13],_=r[14],b=r[15];if(n[0].setComponents(c-a,f-h,g-p,b-y).normalize(),n[1].setComponents(c+a,f+h,g+p,b+y).normalize(),n[2].setComponents(c+o,f+u,g+x,b+S).normalize(),n[3].setComponents(c-o,f-u,g-x,b-S).normalize(),i)n[4].setComponents(l,d,m,_).normalize(),n[5].setComponents(c-l,f-d,g-m,b-_).normalize();else if(n[4].setComponents(c-l,f-d,g-m,b-_).normalize(),t===Qi)n[5].setComponents(c+l,f+d,g+m,b+_).normalize();else if(t===hr)n[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let t=ag.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Fo.x=n.normal.x>0?e.max.x:e.min.x,Fo.y=n.normal.y>0?e.max.y:e.min.y,Fo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ci=class extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sl=new R,rl=new R,Wd=new Le,ea=new ts,Oo=new vi,gh=new R,Xd=new R,pi=class extends xt{constructor(e=new ze,t=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)sl.fromBufferAttribute(t,n-1),rl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=sl.distanceTo(rl);e.setAttribute("lineDistance",new De(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(n),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;Wd.copy(n).invert(),ea.copy(e.ray).applyMatrix4(Wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),S=Bo(this,e,ea,l,g,y,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=Bo(this,e,ea,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=Bo(this,e,ea,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Bo(this,e,ea,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Bo(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(sl.fromBufferAttribute(o,n),rl.fromBufferAttribute(o,r),t.distanceSqToSegment(sl,rl,gh,Xd)>i)return;gh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(gh);if(!(c<e.near||c>e.far))return{distance:c,point:Xd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var qd=new R,Yd=new R,pa=class extends pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)qd.fromBufferAttribute(t,n),Yd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new De(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ma=class extends pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fn=class extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kd=new Le,wh=new ts,ko=new vi,zo=new R,Nn=class extends xt{constructor(e=new ze,t=new fn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(n),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Kd.copy(n).invert(),wh.copy(e.ray).applyMatrix4(Kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);zo.fromBufferAttribute(u,m),jd(zo,m,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)zo.fromBufferAttribute(u,p),jd(zo,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jd(s,e,t,i,n,r,a){let o=wh.distanceSqToPoint(s);if(o<t){let l=new R;wh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ga=class extends qt{constructor(e=[],t=ls,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mi=class extends qt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pn=class extends qt{constructor(e,t,i=Ii,n,r,a,o=Bt,l=Bt,c,h=dn,u=1){if(h!==dn&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},al=class extends pn{constructor(e,t=Ii,i=ls,n,r,a=Bt,o=Bt,l,c=dn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xa=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bt=class s extends ze{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,n,a,2),p("x","z","y",1,-1,e,i,-t,n,a,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function p(x,m,g,y,S,_,b,T,A,v,E){let P=_/A,I=b/v,N=_/2,k=b/2,L=T/2,O=A+1,V=v+1,q=0,ne=0,X=new R;for(let Z=0;Z<V;Z++){let Q=Z*I-k;for(let Re=0;Re<O;Re++){let Se=Re*P-N;X[x]=Se*y,X[m]=Q*S,X[g]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(Re/A),u.push(1-Z/v),q+=1}}for(let Z=0;Z<v;Z++)for(let Q=0;Q<A;Q++){let Re=d+Q+O*Z,Se=d+Q+O*(Z+1),ft=d+(Q+1)+O*(Z+1),nt=d+(Q+1)+O*Z;l.push(Re,Se,nt),l.push(Se,ft,nt),ne+=6}o.addGroup(f,ne,E),f+=ne,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tn=class s extends ze{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new R,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},St=class s extends ze{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=i/2,g=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function y(){let _=new R,b=new R,T=0,A=(t-e)/i;for(let v=0;v<=r;v++){let E=[],P=v/r,I=P*(t-e)+e;for(let N=0;N<=n;N++){let k=N/n,L=k*l+o,O=Math.sin(L),V=Math.cos(L);b.x=I*O,b.y=-P*i+m,b.z=I*V,u.push(b.x,b.y,b.z),_.set(O,A,V).normalize(),d.push(_.x,_.y,_.z),f.push(k,1-P),E.push(p++)}x.push(E)}for(let v=0;v<n;v++)for(let E=0;E<r;E++){let P=x[E][v],I=x[E+1][v],N=x[E+1][v+1],k=x[E][v+1];(e>0||E!==0)&&(h.push(P,I,k),T+=3),(t>0||E!==r-1)&&(h.push(I,N,k),T+=3)}c.addGroup(g,T,0),g+=T}function S(_){let b=p,T=new ie,A=new R,v=0,E=_===!0?e:t,P=_===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),p++;let I=p;for(let N=0;N<=n;N++){let L=N/n*l+o,O=Math.cos(L),V=Math.sin(L);A.x=E*V,A.y=m*P,A.z=E*O,u.push(A.x,A.y,A.z),d.push(0,P,0),T.x=O*.5+.5,T.y=V*.5*P+.5,f.push(T.x,T.y),p++}for(let N=0;N<n;N++){let k=b+N,L=I+N;_===!0?h.push(L,L+1,k):h.push(L+1,L,k),v+=3}c.addGroup(g,v,_===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nn=class s extends St{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ol=class s extends ze{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new R,_=new R,b=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],_),f(t[T+2],b),l(S,_,b,y)}function l(y,S,_,b){let T=b+1,A=[];for(let v=0;v<=T;v++){A[v]=[];let E=y.clone().lerp(_,v/T),P=S.clone().lerp(_,v/T),I=T-v;for(let N=0;N<=I;N++)N===0&&v===T?A[v][N]=E:A[v][N]=E.clone().lerp(P,N/I)}for(let v=0;v<T;v++)for(let E=0;E<2*(T-v)-1;E++){let P=Math.floor(E/2);E%2===0?(d(A[v][P+1]),d(A[v+1][P]),d(A[v][P])):(d(A[v][P+1]),d(A[v+1][P+1]),d(A[v+1][P]))}}function c(y){let S=new R;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let y=new R;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let _=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;a.push(_,1-b)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){let S=a[y+0],_=a[y+2],b=a[y+4],T=Math.max(S,_,b),A=Math.min(S,_,b);T>.9&&A<.1&&(S<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){let _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function p(){let y=new R,S=new R,_=new R,b=new R,T=new ie,A=new ie,v=new ie;for(let E=0,P=0;E<r.length;E+=9,P+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),T.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),b.copy(y).add(S).add(_).divideScalar(3);let I=m(b);x(T,P+0,y,I),x(A,P+2,S,I),x(v,P+4,_,I)}}function x(y,S,_,b){b<0&&y.x===1&&(a[S]=y.x-1),_.x===0&&_.z===0&&(a[S]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new ie:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,n=[],r=[],a=[],o=new R,l=new Le;for(let f=0;f<=e;f++){let p=f/e;n[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Qe(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},is=class extends Pi{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ll=class extends is{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+i*o}}}var Jd=new R,Zd=new R,xh=new Qh,_h=new Qh,vh=new Qh,ns=class extends Pi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Zd.subVectors(n[0],n[1]).add(n[0]),c=Zd);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Jd.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Jd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),xh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),_h.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),vh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),_h.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(xh.calc(l),_h.calc(l),vh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $d(s,e,t,i,n){let r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function og(s,e){let t=1-s;return t*t*e}function lg(s,e){return 2*(1-s)*s*e}function cg(s,e){return s*s*e}function sa(s,e,t,i){return og(s,e)+lg(s,t)+cg(s,i)}function hg(s,e){let t=1-s;return t*t*t*e}function ug(s,e){let t=1-s;return 3*t*t*s*e}function dg(s,e){return 3*(1-s)*s*s*e}function fg(s,e){return s*s*s*e}function ra(s,e,t,i,n){return hg(s,e)+ug(s,t)+dg(s,i)+fg(s,n)}var _a=class extends Pi{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,n.x,r.x,a.x,o.x),ra(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cl=class extends Pi{constructor(e=new R,t=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,n.x,r.x,a.x,o.x),ra(e,n.y,r.y,a.y,o.y),ra(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Pi{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends Pi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Pi{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(sa(e,n.x,r.x,a.x),sa(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends Pi{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(sa(e,n.x,r.x,a.x),sa(e,n.y,r.y,a.y),sa(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set($d(o,l.x,c.x,h.x,u.x),$d(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ie().fromArray(n))}return this}},ul=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:ns,CubicBezierCurve:_a,CubicBezierCurve3:cl,EllipseCurve:is,LineCurve:va,LineCurve3:hl,QuadraticBezierCurve:ya,QuadraticBezierCurve3:Ma,SplineCurve:ba}),dl=class extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ul[n.type]().fromJSON(n))}return this}},Sa=class extends dl{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new va(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new ya(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new _a(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ba(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let c=new is(e,t,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yr=class extends Sa{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Sa().fromJSON(n))}return this}};function pg(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=ep(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=vg(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let d=t;d<n;d+=t){let f=s[d],p=s[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return wa(r,a,t,o,l,c,0),a}function ep(s,e,t,i,n){let r;if(n===Pg(s,e,t,i)>0)for(let a=e;a<t;a+=i)r=Qd(a/i|0,s[a],s[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Qd(a/i|0,s[a],s[a+1],r);return r&&Mr(r,r.next)&&(Ea(r),r=r.next),r}function Es(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Mr(t,t.next)||It(t.prev,t,t.next)===0)){if(Ea(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function wa(s,e,t,i,n,r,a){if(!s)return;!a&&r&&wg(s,i,n,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?gg(s,i,n,r):mg(s)){e.push(l.i,s.i,c.i),Ea(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=xg(Es(s),e),wa(s,e,t,i,n,r,2)):a===2&&_g(s,e,t,i,n,r):wa(Es(s),e,t,i,n,r,1);break}}}function mg(s){let e=s.prev,t=s,i=s.next;if(It(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(n,r,a),u=Math.min(o,l,c),d=Math.max(n,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ta(n,o,r,l,a,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gg(s,e,t,i){let n=s.prev,r=s,a=s.next;if(It(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),g=Th(f,p,e,t,i),y=Th(x,m,e,t,i),S=s.prevZ,_=s.nextZ;for(;S&&S.z>=g&&_&&_.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==n&&S!==a&&ta(o,h,l,u,c,d,S.x,S.y)&&It(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&ta(o,h,l,u,c,d,_.x,_.y)&&It(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==n&&S!==a&&ta(o,h,l,u,c,d,S.x,S.y)&&It(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&ta(o,h,l,u,c,d,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function xg(s,e){let t=s;do{let i=t.prev,n=t.next.next;!Mr(i,n)&&ip(i,t,t.next,n)&&Ta(i,n)&&Ta(n,i)&&(e.push(i.i,t.i,n.i),Ea(t),Ea(t.next),t=s=n),t=t.next}while(t!==s);return Es(t)}function _g(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ag(a,o)){let l=np(a,o);a=Es(a,a.next),l=Es(l,l.next),wa(a,e,t,i,n,r,0),wa(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function vg(s,e,t,i){let n=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=ep(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Eg(c))}n.sort(yg);for(let r=0;r<n.length;r++)t=Mg(n[r],t);return t}function yg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function Mg(s,e){let t=bg(s,e);if(!t)return e;let i=np(t,s);return Es(i,i.next),Es(t,t.next)}function bg(s,e){let t=e,i=s.x,n=s.y,r=-1/0,a;if(Mr(s,t))return t;do{if(Mr(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){let u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&tp(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){let u=Math.abs(n-t.y)/(i-t.x);Ta(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Sg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Sg(s,e){return It(s.prev,s,e.prev)<0&&It(e.next,s,s.next)<0}function wg(s,e,t,i){let n=s;do n.z===0&&(n.z=Th(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Tg(n)}function Tg(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,t*=2}while(e>1);return s}function Th(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Eg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function tp(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function ta(s,e,t,i,n,r,a,o){return!(s===a&&e===o)&&tp(s,e,t,i,n,r,a,o)}function Ag(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Rg(s,e)&&(Ta(s,e)&&Ta(e,s)&&Cg(s,e)&&(It(s.prev,s,e.prev)||It(s,e.prev,e))||Mr(s,e)&&It(s.prev,s,s.next)>0&&It(e.prev,e,e.next)>0)}function It(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Mr(s,e){return s.x===e.x&&s.y===e.y}function ip(s,e,t,i){let n=Go(It(s,e,t)),r=Go(It(s,e,i)),a=Go(It(t,i,s)),o=Go(It(t,i,e));return!!(n!==r&&a!==o||n===0&&Ho(s,t,e)||r===0&&Ho(s,i,e)||a===0&&Ho(t,s,i)||o===0&&Ho(t,e,i))}function Ho(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Go(s){return s>0?1:s<0?-1:0}function Rg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ip(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ta(s,e){return It(s.prev,s,s.next)<0?It(s,e,s.next)>=0&&It(s,s.prev,e)>=0:It(s,e,s.prev)<0||It(s,s.next,e)<0}function Cg(s,e){let t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function np(s,e){let t=Eh(s.i,s.x,s.y),i=Eh(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Qd(s,e,t,i){let n=Eh(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ea(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Eh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pg(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Ah=class{static triangulate(e,t,i=2){return pg(e,t,i)}},ys=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];ef(e),tf(i,e);let a=e.length;t.forEach(ef);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,tf(i,t[l]);let o=Ah.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ef(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function tf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Aa=class s extends ze{constructor(e=new yr([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new De(n,3)),this.setAttribute("uv",new De(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ig,S,_=!1,b,T,A,v;if(g){S=g.getSpacedPoints(h),_=!0,d=!1;let te=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,te),T=new R,A=new R,v=new R}d||(m=0,f=0,p=0,x=0);let E=o.extractPoints(c),P=E.shape,I=E.holes;if(!ys.isClockWise(P)){P=P.reverse();for(let te=0,re=I.length;te<re;te++){let ae=I[te];ys.isClockWise(ae)&&(I[te]=ae.reverse())}}function k(te){let ae=10000000000000001e-36,oe=te[0];for(let he=1;he<=te.length;he++){let He=he%te.length,ke=te[He],qe=ke.x-oe.x,Ke=ke.y-oe.y,D=qe*qe+Ke*Ke,pt=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(oe.x),Math.abs(oe.y)),st=ae*pt*pt;if(D<=st){te.splice(He,1),he--;continue}oe=ke}}k(P),I.forEach(k);let L=I.length,O=P;for(let te=0;te<L;te++){let re=I[te];P=P.concat(re)}function V(te,re,ae){return re||Ve("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(re,ae)}let q=P.length;function ne(te,re,ae){let oe,he,He,ke=te.x-re.x,qe=te.y-re.y,Ke=ae.x-te.x,D=ae.y-te.y,pt=ke*ke+qe*qe,st=ke*D-qe*Ke;if(Math.abs(st)>Number.EPSILON){let C=Math.sqrt(pt),M=Math.sqrt(Ke*Ke+D*D),B=re.x-qe/C,G=re.y+ke/C,Y=ae.x-D/M,le=ae.y+Ke/M,ce=((Y-B)*D-(le-G)*Ke)/(ke*D-qe*Ke);oe=B+ke*ce-te.x,he=G+qe*ce-te.y;let K=oe*oe+he*he;if(K<=2)return new ie(oe,he);He=Math.sqrt(K/2)}else{let C=!1;ke>Number.EPSILON?Ke>Number.EPSILON&&(C=!0):ke<-Number.EPSILON?Ke<-Number.EPSILON&&(C=!0):Math.sign(qe)===Math.sign(D)&&(C=!0),C?(oe=-qe,he=ke,He=Math.sqrt(pt)):(oe=ke,he=qe,He=Math.sqrt(pt/2))}return new ie(oe/He,he/He)}let X=[];for(let te=0,re=O.length,ae=re-1,oe=te+1;te<re;te++,ae++,oe++)ae===re&&(ae=0),oe===re&&(oe=0),X[te]=ne(O[te],O[ae],O[oe]);let Z=[],Q,Re=X.concat();for(let te=0,re=L;te<re;te++){let ae=I[te];Q=[];for(let oe=0,he=ae.length,He=he-1,ke=oe+1;oe<he;oe++,He++,ke++)He===he&&(He=0),ke===he&&(ke=0),Q[oe]=ne(ae[oe],ae[He],ae[ke]);Z.push(Q),Re=Re.concat(Q)}let Se;if(m===0)Se=ys.triangulateShape(O,I);else{let te=[],re=[];for(let ae=0;ae<m;ae++){let oe=ae/m,he=f*Math.cos(oe*Math.PI/2),He=p*Math.sin(oe*Math.PI/2)+x;for(let ke=0,qe=O.length;ke<qe;ke++){let Ke=V(O[ke],X[ke],He);xe(Ke.x,Ke.y,-he),oe===0&&te.push(Ke)}for(let ke=0,qe=L;ke<qe;ke++){let Ke=I[ke];Q=Z[ke];let D=[];for(let pt=0,st=Ke.length;pt<st;pt++){let C=V(Ke[pt],Q[pt],He);xe(C.x,C.y,-he),oe===0&&D.push(C)}oe===0&&re.push(D)}}Se=ys.triangulateShape(te,re)}let ft=Se.length,nt=p+x;for(let te=0;te<q;te++){let re=d?V(P[te],Re[te],nt):P[te];_?(A.copy(b.normals[0]).multiplyScalar(re.x),T.copy(b.binormals[0]).multiplyScalar(re.y),v.copy(S[0]).add(A).add(T),xe(v.x,v.y,v.z)):xe(re.x,re.y,0)}for(let te=1;te<=h;te++)for(let re=0;re<q;re++){let ae=d?V(P[re],Re[re],nt):P[re];_?(A.copy(b.normals[te]).multiplyScalar(ae.x),T.copy(b.binormals[te]).multiplyScalar(ae.y),v.copy(S[te]).add(A).add(T),xe(v.x,v.y,v.z)):xe(ae.x,ae.y,u/h*te)}for(let te=m-1;te>=0;te--){let re=te/m,ae=f*Math.cos(re*Math.PI/2),oe=p*Math.sin(re*Math.PI/2)+x;for(let he=0,He=O.length;he<He;he++){let ke=V(O[he],X[he],oe);xe(ke.x,ke.y,u+ae)}for(let he=0,He=I.length;he<He;he++){let ke=I[he];Q=Z[he];for(let qe=0,Ke=ke.length;qe<Ke;qe++){let D=V(ke[qe],Q[qe],oe);_?xe(D.x,D.y+S[h-1].y,S[h-1].x+ae):xe(D.x,D.y,u+ae)}}}ht(),j();function ht(){let te=n.length/3;if(d){let re=0,ae=q*re;for(let oe=0;oe<ft;oe++){let he=Se[oe];We(he[2]+ae,he[1]+ae,he[0]+ae)}re=h+m*2,ae=q*re;for(let oe=0;oe<ft;oe++){let he=Se[oe];We(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let re=0;re<ft;re++){let ae=Se[re];We(ae[2],ae[1],ae[0])}for(let re=0;re<ft;re++){let ae=Se[re];We(ae[0]+q*h,ae[1]+q*h,ae[2]+q*h)}}i.addGroup(te,n.length/3-te,0)}function j(){let te=n.length/3,re=0;ee(O,re),re+=O.length;for(let ae=0,oe=I.length;ae<oe;ae++){let he=I[ae];ee(he,re),re+=he.length}i.addGroup(te,n.length/3-te,1)}function ee(te,re){let ae=te.length;for(;--ae>=0;){let oe=ae,he=ae-1;he<0&&(he=te.length-1);for(let He=0,ke=h+m*2;He<ke;He++){let qe=q*He,Ke=q*(He+1),D=re+oe+qe,pt=re+he+qe,st=re+he+Ke,C=re+oe+Ke;be(D,pt,st,C)}}}function xe(te,re,ae){l.push(te),l.push(re),l.push(ae)}function We(te,re,ae){Xe(te),Xe(re),Xe(ae);let oe=n.length/3,he=y.generateTopUV(i,n,oe-3,oe-2,oe-1);_t(he[0]),_t(he[1]),_t(he[2])}function be(te,re,ae,oe){Xe(te),Xe(re),Xe(oe),Xe(re),Xe(ae),Xe(oe);let he=n.length/3,He=y.generateSideWallUV(i,n,he-6,he-3,he-2,he-1);_t(He[0]),_t(He[1]),_t(He[3]),_t(He[1]),_t(He[2]),_t(He[3])}function Xe(te){n.push(l[te*3+0]),n.push(l[te*3+1]),n.push(l[te*3+2])}function _t(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Lg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ul[n.type]().fromJSON(n)),new s(i,e.options)}},Ig={generateTopUV:function(s,e,t,i,n){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new ie(r,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],p=e[n*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-u),new ie(d,1-p),new ie(x,1-g)]:[new ie(o,1-l),new ie(h,1-u),new ie(f,1-p),new ie(m,1-g)]}};function Lg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var br=class s extends ol{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ss=class s extends ze{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Qe(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,d=new ie,f=new R,p=new R,x=new R,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=t;y++){let S=i+y*h*n,_=Math.sin(S),b=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*b,a.push(u.x,u.y,u.z),d.x=y/t,d.y=T/(e.length-1),o.push(d.x,d.y);let A=l[3*T+0]*_,v=l[3*T+1],E=l[3*T+0]*b;c.push(A,v,E)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let _=S+y*e.length,b=_,T=_+e.length,A=_+e.length+1,v=_+1;r.push(b,T,v),r.push(A,v,T)}this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var zt=class s extends ze{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-a;for(let S=0;S<c;S++){let _=S*u-r;p.push(_,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let S=y+c*g,_=y+c*(g+1),b=y+1+c*(g+1),T=y+1+c*g;f.push(S,_,T),f.push(_,b,T)}this.setIndex(f),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yt=class s extends ze{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,_=a+S*o,b=e*Math.cos(_),T=Math.sqrt(e*e-b*b),A=0;g===0&&a===0?A=.5/t:g===i&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let E=v/t,P=n+E*r;u.x=-T*Math.cos(P),u.y=b,u.z=T*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+A,1-S),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let S=h[g][y+1],_=h[g][y],b=h[g+1][y],T=h[g+1][y+1];(g!==0||a>0)&&f.push(S,_,T),(g!==i-1||l<Math.PI)&&f.push(_,b,T)}this.setIndex(f),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yi=class s extends ze{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new R,f=new R,p=new R;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let g=0;g<=n;g++){let y=g/n*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,y=(n+1)*(x-1)+m-1,S=(n+1)*(x-1)+m,_=(n+1)*x+m;l.push(g,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var As=class s extends ze{constructor(e=new Ma(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new ie,h=new R,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function x(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),y(),g()}function m(S){h=e.getPointAt(S/t,h);let _=a.normals[S],b=a.binormals[S];for(let T=0;T<=n;T++){let A=T/n*Math.PI*2,v=Math.sin(A),E=-Math.cos(A);l.x=E*_.x+v*b.x,l.y=E*_.y+v*b.y,l.z=E*_.z+v*b.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let S=1;S<=t;S++)for(let _=1;_<=n;_++){let b=(n+1)*(S-1)+(_-1),T=(n+1)*S+(_-1),A=(n+1)*S+_,v=(n+1)*(S-1)+_;p.push(b,T,v),p.push(T,A,v)}}function y(){for(let S=0;S<=t;S++)for(let _=0;_<=n;_++)c.x=S/t,c.y=_/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new ul[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Fs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(nf(n))n.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(nf(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ci(s){let e={};for(let t=0;t<s.length;t++){let i=Fs(s[t]);for(let n in i)e[n]=i[n]}return e}function nf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Dg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function eu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Ni={clone:Fs,merge:ci},Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ve().setHex(n.value);break;case"v2":this.uniforms[i].value=new ie().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ot().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sr=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wt=class extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mi=class extends wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var rs=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Ra=class extends Ci{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function es(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Fg(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function sf(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function Og(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var mn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends mn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case vs:r=e,o=2*t-i;break;case aa:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vs:a=e,l=2*i-t;break;case aa:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let b=0;b!==o;++b)r[b]=g*a[h+b]+y*a[c+b]+S*a[l+b]+_*a[u+b];return r}},Ca=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ml=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},gl=class extends mn{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(n-t),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*d+p*2,y=u[g],S=u[g+1],_=e*d+p*2,b=h[_],T=h[_+1],A=kg(i,t,y,b,n);r[p]=sp(A,x,S,T,m)}return r}};function sp(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function Bg(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function kg(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=sp(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let l=Bg(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Yo(e.settings)&&(i.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case Xo:t=this.InterpolantFactoryMethodSmooth;break;case Sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return Xo;case this.InterpolantFactoryMethodBezier:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Yo(this.settings)&&(rf(this.settings.inTangents,e),rf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Sm(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Xo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Yo(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function rf(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Ss;var Un=class extends bi{constructor(e,t,i){super(e,t,i)}};Un.prototype.ValueTypeName="bool";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=bs;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};Pa.prototype.ValueTypeName="color";var Fn=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};Fn.prototype.ValueTypeName="number";var xl=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Je.slerpFlat(r,0,a,c-o,a,c,l);return r}},On=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};On.prototype.ValueTypeName="quaternion";On.prototype.InterpolantFactoryMethodSmooth=void 0;var Bn=class extends bi{constructor(e,t,i){super(e,t,i)}};Bn.prototype.ValueTypeName="string";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=bs;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends bi{constructor(e,t,i,n){super(e,t,i,n)}};as.prototype.ValueTypeName="vector";var Rs=class{constructor(e="",t=-1,i=[],n=dc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=zi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Hg(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(bi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Fg(l);l=sf(l,1,h),c=sf(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Fn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function zg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fn;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Pa;case"quaternion":return On;case"bool":case"boolean":return Un;case"string":return Bn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Hg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zg(s.type);if(s.times===void 0){let i=[],n=[];Og(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Yo(s.settings)&&(t.settings={inTangents:es(s.settings.inTangents,Float32Array),outTangents:es(s.settings.outTangents,Float32Array)}),t}var un={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(af(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!af(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function af(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _l=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new _l,gn=class{constructor(e){this.manager=e!==void 0?e:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gn.DEFAULT_MATERIAL_NAME="__DEFAULT";var En={},Rh=class extends Error{constructor(e,t){super(e),this.response=t}},wr=class extends gn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=un.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:i,onError:n});return}En[e]=[],En[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=En[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:S,value:_})=>{if(S)g.close();else{x+=_.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,A=h.length;T<A;T++){let v=h[T];v.onProgress&&v.onProgress(b)}g.enqueue(_),y()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Rh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{un.add(`file:${e}`,c);let h=En[e];delete En[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=En[e];if(h===void 0)throw this.manager.itemError(e),c;delete En[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sr=new WeakMap,vl=class extends gn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=un.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=sr.get(a);u===void 0&&(u=[],sr.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=ur("img");function l(){h(),t&&t(this);let u=sr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}sr.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),un.remove(`image:${e}`);let d=sr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),un.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var sn=class extends gn{constructor(e){super(e)}load(e,t,i,n){let r=new qt,a=new vl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Cs=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ia=class extends Cs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yh=new Le,of=new R,lf=new R,Tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;of.setFromMatrixPosition(e.matrixWorld),t.position.copy(of),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===hr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vo=new R,Wo=new Je,hn=new R,La=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Wo,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Vo,Wo,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new R,cf=new ie,hf=new ie,Nt=class extends La{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,cf,hf),t.subVectors(hf,cf)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ia*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ch=class extends Tr{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ws*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Da=class extends Cs{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ph=class extends Tr{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},Gi=class extends Cs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xn=class extends La{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ih=class extends Tr{constructor(){super(new xn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var kn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Mh=new WeakMap,Na=class extends gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=un.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Mh.has(a)===!0?(n&&n(Mh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return un.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Mh.set(l,c),un.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});un.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rr=-90,ar=1,yl=class extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Nt(rr,ar,e,t);n.layers=this.layers,this.add(n);let r=new Nt(rr,ar,e,t);r.layers=this.layers,this.add(r);let a=new Nt(rr,ar,e,t);a.layers=this.layers,this.add(a);let o=new Nt(rr,ar,e,t);o.layers=this.layers,this.add(o);let l=new Nt(rr,ar,e,t);l.layers=this.layers,this.add(l);let c=new Nt(rr,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ml=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ua=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Gg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Gg(){this._document.hidden===!1&&this.reset()}var bl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,a;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,r=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Je.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){let a=this._workIndex*r;Je.multiplyQuaternionsFlat(e,a,e,t,e,i),Je.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){let a=1-n;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},tu="\\[\\]\\.:\\/",Vg=new RegExp("["+tu+"]","g"),iu="[^"+tu+"]",Wg="[^"+tu.replace("\\.","")+"]",Xg=/((?:WC+[\/:])*)/.source.replace("WC",iu),qg=/(WCOD+)?/.source.replace("WCOD",Wg),Yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),jg=new RegExp("^"+Xg+qg+Yg+Kg+"$"),Jg=["material","materials","bones","map"],Lh=class{constructor(e,t,i){let n=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(e){let t=jg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Jg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Lh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sl=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:_s,endingEnd:_s};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=uc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,r=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Bf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case dc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,r=this._loopCount,a=i===Of;if(e===0)return r===-1?n:a&&(r&1)===1?t-n:n;if(i===hc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=n;if(a&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=vs,n.endingEnd=vs):(e?n.endingStart=this.zeroSlopeAtStart?vs:_s:n.endingStart=aa,t?n.endingEnd=this.zeroSlopeAtEnd?vs:_s:n.endingEnd=aa)}_scheduleFading(e,t,i){let n=this._mixer,r=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},Zg=new Float32Array(1),Ps=class extends en{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=n[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new bl(Mt.create(i,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,r=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Ca(new Float32Array(2),new Float32Array(2),1,Zg),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let n=t||this._root,r=n.uuid,a=typeof e=="string"?Rs.findByName(n,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=dc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Sl(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,n=i.uuid,r=typeof e=="string"?Rs.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var uf=new Le,zn=class{constructor(e,t,i=0,n=1/0){this.ray=new ts(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(e,t=!0,i=[]){return Dh(e,this,i,t),i.sort(df),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Dh(e[n],this,i,t);return i.sort(df),i}};function df(s,e){return s.distance-e.distance}function Dh(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Dh(r[a],e,t,!0)}}var Nh=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};function nu(s,e,t,i){let n=$g(i);switch(t){case qh:return s*e;case Pl:return s*e/n.components*n.byteLength;case Il:return s*e/n.components*n.byteLength;case hs:return s*e*2/n.components*n.byteLength;case Ll:return s*e*2/n.components*n.byteLength;case Yh:return s*e*3/n.components*n.byteLength;case Di:return s*e*4/n.components*n.byteLength;case Dl:return s*e*4/n.components*n.byteLength;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Ol:return Math.max(s,16)*Math.max(e,8)/4;case Nl:case Fl:return Math.max(s,8)*Math.max(e,8)/2;case Bl:case kl:case Hl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Ka:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sc:case rc:case ac:return Math.ceil(s/4)*Math.ceil(e/4)*16;case oc:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ja:case cc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $g(s){switch(s){case wi:case Gh:return{byteLength:1,components:1};case Cr:case Vh:case si:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Ii:case Al:case Li:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ap(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function e0(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:t0,alphahash_pars_fragment:i0,alphamap_fragment:n0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:a0,aomap_fragment:o0,aomap_pars_fragment:l0,batching_pars_vertex:c0,batching_vertex:h0,begin_vertex:u0,beginnormal_vertex:d0,bsdfs:f0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:y0,color_pars_fragment:M0,color_pars_vertex:b0,color_vertex:S0,common:w0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:E0,displacementmap_pars_vertex:A0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:P0,colorspace_fragment:I0,colorspace_pars_fragment:L0,envmap_fragment:D0,envmap_common_pars_fragment:N0,envmap_pars_fragment:U0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:Y0,envmap_vertex:O0,fog_vertex:B0,fog_pars_vertex:k0,fog_fragment:z0,fog_pars_fragment:H0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:V0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:K0,lights_toon_pars_fragment:j0,lights_phong_fragment:J0,lights_phong_pars_fragment:Z0,lights_physical_fragment:$0,lights_physical_pars_fragment:Q0,lights_fragment_begin:ex,lights_fragment_maps:tx,lights_fragment_end:ix,lightprobes_pars_fragment:nx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:ox,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:hx,map_particle_pars_fragment:ux,metalnessmap_fragment:dx,metalnessmap_pars_fragment:fx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:xx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:yx,normal_pars_fragment:Mx,normal_pars_vertex:bx,normal_vertex:Sx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Tx,clearcoat_normal_fragment_maps:Ex,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Rx,opaque_fragment:Cx,packing:Px,premultiplied_alpha_fragment:Ix,project_vertex:Lx,dithering_fragment:Dx,dithering_pars_fragment:Nx,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Fx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Bx,shadowmap_vertex:kx,shadowmask_pars_fragment:zx,skinbase_vertex:Hx,skinning_pars_vertex:Gx,skinning_vertex:Vx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:qx,tonemapping_fragment:Yx,tonemapping_pars_fragment:Kx,transmission_fragment:jx,transmission_pars_fragment:Jx,uv_pars_fragment:Zx,uv_pars_vertex:$x,uv_vertex:Qx,worldpos_vertex:e_,background_vert:t_,background_frag:i_,backgroundCube_vert:n_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:a_,depth_vert:o_,depth_frag:l_,distance_vert:c_,distance_frag:h_,equirect_vert:u_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:x_,meshlambert_frag:__,meshmatcap_vert:v_,meshmatcap_frag:y_,meshnormal_vert:M_,meshnormal_frag:b_,meshphong_vert:S_,meshphong_frag:w_,meshphysical_vert:T_,meshphysical_frag:E_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:I_,shadow_frag:L_,sprite_vert:D_,sprite_frag:N_},ue={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},vn={basic:{uniforms:ci([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ci([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ci([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ci([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ci([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ci([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ci([ue.points,ue.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ci([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ci([ue.common,ue.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ci([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ci([ue.sprite,ue.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:ci([ue.common,ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:ci([ue.lights,ue.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};vn.physical={uniforms:ci([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var gc={r:0,b:0,g:0},U_=new Le,Rp=new Ye;Rp.set(-1,0,0,0,1,0,0,0,1);function F_(s,e,t,i,n,r){let a=new ve(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=e.get(S,_)}return S}function p(y){let S=!1,_=f(y);_===null?m(a,o):_&&_.isColor&&(m(_,1),S=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===Va)?(c===void 0&&(c=new Fe(new bt(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Fs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rp),c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==dt,(h!==_||u!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Fe(new zt(2,2),new Dt({name:"BackgroundMaterial",uniforms:Fs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(gc,eu(s)),t.buffers.color.setClear(gc.r,gc.g,gc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:x,dispose:g}}function O_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(I,N,k,L,O){let V=!1,q=u(I,L,k,N);r!==q&&(r=q,c(r.object)),V=f(I,L,k,O),V&&p(I,L,k,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(I,N,k,L),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,N,k,L){let O=L.wireframe===!0,V=i[N.id];V===void 0&&(V={},i[N.id]=V);let q=I.isInstancedMesh===!0?I.id:0,ne=V[q];ne===void 0&&(ne={},V[q]=ne);let X=ne[k.id];X===void 0&&(X={},ne[k.id]=X);let Z=X[O];return Z===void 0&&(Z=d(l()),X[O]=Z),Z}function d(I){let N=[],k=[],L=[];for(let O=0;O<t;O++)N[O]=0,k[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,k,L){let O=r.attributes,V=N.attributes,q=0,ne=k.getAttributes();for(let X in ne)if(ne[X].location>=0){let Q=O[X],Re=V[X];if(Re===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Re=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Re=I.instanceColor)),Q===void 0||Q.attribute!==Re||Re&&Q.data!==Re.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function p(I,N,k,L){let O={},V=N.attributes,q=0,ne=k.getAttributes();for(let X in ne)if(ne[X].location>=0){let Q=V[X];Q===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let Re={};Re.attribute=Q,Q&&Q.data&&(Re.data=Q.data),O[X]=Re,q++}r.attributes=O,r.attributesNum=q,r.index=L}function x(){let I=r.newAttributes;for(let N=0,k=I.length;N<k;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){let k=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;k[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),O[I]!==N&&(s.vertexAttribDivisor(I,N),O[I]=N)}function y(){let I=r.newAttributes,N=r.enabledAttributes;for(let k=0,L=N.length;k<L;k++)N[k]!==I[k]&&(s.disableVertexAttribArray(k),N[k]=0)}function S(I,N,k,L,O,V,q){q===!0?s.vertexAttribIPointer(I,N,k,O,V):s.vertexAttribPointer(I,N,k,L,O,V)}function _(I,N,k,L){x();let O=L.attributes,V=k.getAttributes(),q=N.defaultAttributeValues;for(let ne in V){let X=V[ne];if(X.location>=0){let Z=O[ne];if(Z===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let Q=Z.normalized,Re=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;let ft=Se.buffer,nt=Se.type,ht=Se.bytesPerElement,j=nt===s.INT||nt===s.UNSIGNED_INT||Z.gpuType===Al;if(Z.isInterleavedBufferAttribute){let ee=Z.data,xe=ee.stride,We=Z.offset;if(ee.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)g(X.location+be,ee.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<X.locationSize;be++)m(X.location+be);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let be=0;be<X.locationSize;be++)S(X.location+be,Re/X.locationSize,nt,Q,xe*ht,(We+Re/X.locationSize*be)*ht,j)}else{if(Z.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)g(X.location+ee,Z.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let ee=0;ee<X.locationSize;ee++)S(X.location+ee,Re/X.locationSize,nt,Q,Re*ht,Re/X.locationSize*ee*ht,j)}}else if(q!==void 0){let Q=q[ne];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(X.location,Q);break;case 3:s.vertexAttrib3fv(X.location,Q);break;case 4:s.vertexAttrib4fv(X.location,Q);break;default:s.vertexAttrib1fv(X.location,Q)}}}}y()}function b(){E();for(let I in i){let N=i[I];for(let k in N){let L=N[k];for(let O in L){let V=L[O];for(let q in V)h(V[q].object),delete V[q];delete L[O]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let k in N){let L=N[k];for(let O in L){let V=L[O];for(let q in V)h(V[q].object),delete V[q];delete L[O]}}delete i[I.id]}function A(I){for(let N in i){let k=i[N];for(let L in k){let O=k[L];if(O[I.id]===void 0)continue;let V=O[I.id];for(let q in V)h(V[q].object),delete V[q];delete O[I.id]}}}function v(I){for(let N in i){let k=i[N],L=I.isInstancedMesh===!0?I.id:0,O=k[L];if(O!==void 0){for(let V in O){let q=O[V];for(let ne in q)h(q[ne].object),delete q[ne];delete O[V]}delete k[L],Object.keys(k).length===0&&delete i[N]}}}function E(){P(),a=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function B_(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function k_(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==Di&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==wi&&A!==Li&&!v&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:b,samples:T}}function z_(s){let e=this,t=null,i=0,n=!1,r=!1,a=new ti,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,_=g.clippingState||null;l.value=_,_=h(p,d,S,f);for(let b=0;b!==S;++b)_[b]=t[b];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,_=f;S!==x;++S,_+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Dr=4,H_=6,G_=20,V_=256,$a=new xn,ap=new ve,su=null,ru=0,au=0,ou=!1,W_=new R,Os=new R,Ur=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=W_}=r;su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(su,ru,au),this._renderer.xr.enabled=ou,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:si,format:Di,colorSpace:di,depthBuffer:!1},n=op(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=X_(r)),this._blurMaterial=Y_(r,e,t),this._ggxMaterial=q_(r,e,t)}return n}_compileMaterial(e){let t=new Fe(new ze,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,n,r){let l=new Nt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ap),u.toneMapping=rn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new bt,new kt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(ap),g=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;Lr(n,_*b,S>2?b:0,b,b),u.setRenderTarget(n),g&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===ls||e.mapping===Ns;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Lr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,$a)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-Dr?i-p+Dr:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Lr(r,m,g,3*x,2*x),n.setRenderTarget(r),n.render(o,$a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Lr(e,m,g,3*x,2*x),n.setRenderTarget(e),n.render(o,$a)}_blur(e,t,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,n,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],u=3*h*(n>this._lodMax-Dr?n-this._lodMax+Dr:0),d=4*(this._cubeSize-h);Lr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,$a)}};function X_(s){let e=[],t=[],i=s,n=s-Dr+1+H_;for(let r=0;r<n;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,S=g>2?0:-1,_=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];p.set(_,f*d*g);for(let b=0;b<d;b++){let T=h[b*2]*2-1,A=h[b*2+1]*2-1;g===0?Os.set(1,A,T):g===1?Os.set(-T,1,-A):g===2?Os.set(-T,A,1):g===3?Os.set(-1,A,-T):g===4?Os.set(-T,-1,A):Os.set(T,A,-1),Os.toArray(x,(g*d+b)*f)}}let m=new ze;m.setAttribute("position",new Lt(p,f)),m.setAttribute("outputDirection",new Lt(x,f)),t.push(new Fe(m,null)),i>Dr&&i--}return{lodMeshes:t,sizeLods:e}}function op(s,e,t){let i=new Wt(s,e,t);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function q_(s,e,t){return new Dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Y_(s,e,t){return new Dt({name:"SphericalGaussianBlur",defines:{SAMPLES:G_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function lp(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function cp(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _c=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ga(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new bt(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Wi});r.uniforms.tEquirect.value=t;let a=new Fe(n,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Pt),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}};function K_(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wl||f===Tl)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new _c(p.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===wl||f===Tl,x=f===ls||f===Ns;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Ur(s)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Ur(s)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===wl?d.mapping=ls:f===Tl&&(d.mapping=Ns),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function j_(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Ms("WebGLRenderer: "+i+" extension not supported."),n}}}function J_(s,e,t,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let S=0,_=y.length;S<_;S+=3){let b=y[S+0],T=y[S+1],A=y[S+2];d.push(b,T,T,A,A,b)}}else{let y=p.array;x=p.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let b=S+0,T=S+1,A=S+2;d.push(b,T,T,A,A,b)}}let m=new(p.count>=65535?ua:Ts)(d,1);m.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Z_(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Q_(s,e,t){let i=new WeakMap,n=new ot;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let _=o.attributes.position.count*S,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*b*4*u),A=new ca(T,_,b,u);A.type=Li,A.needsUpdate=!0;let v=S*4;for(let P=0;P<u;P++){let I=m[P],N=g[P],k=y[P],L=_*b*4*P;for(let O=0;O<I.count;O++){let V=O*v;f===!0&&(n.fromBufferAttribute(I,O),T[L+V+0]=n.x,T[L+V+1]=n.y,T[L+V+2]=n.z,T[L+V+3]=0),p===!0&&(n.fromBufferAttribute(N,O),T[L+V+4]=n.x,T[L+V+5]=n.y,T[L+V+6]=n.z,T[L+V+7]=0),x===!0&&(n.fromBufferAttribute(k,O),T[L+V+8]=n.x,T[L+V+9]=n.y,T[L+V+10]=n.z,T[L+V+11]=k.itemSize===4?n.w:1)}}d={count:u,texture:A,size:new ie(_,b)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ev(s,e,t,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var tv={[Oa]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[ka]:"CINEON_TONE_MAPPING",[Ds]:"ACES_FILMIC_TONE_MAPPING",[Ha]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function iv(s,e,t,i,n,r){let a=new Wt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ze;c.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new De([0,2,0,0,2,0],2));let h=new Sr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Fe(c,h),d=new xn(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,y=[],S=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),l!==null&&l.setSize(_,b);for(let T=0;T<y.length;T++){let A=y[T];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){y=_,S=y.length>0&&y[0].isRenderPass===!0;let b=a.width,T=a.height;y.length>0&&o===null&&(o=new Wt(b,T,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(b,T,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(b,T)}},this.begin=function(_,b){if(x||_.toneMapping===rn&&y.length===0)return!1;if(g=b,b!==null){let T=b.width,A=b.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return S===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=rn,!0},this.hasRenderPass=function(){return S},this.end=function(_,b){_.toneMapping=m,x=!0;let T=a,A=o;for(let v=0;v<y.length;v++){let E=y[v];E.enabled!==!1&&(E.render(_,A,T,b),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},Ze.getTransfer(f)===dt&&(h.defines.SRGB_TRANSFER="");let v=tv[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(g),_.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cp=new qt,hu=new pn(1,1),Pp=new ca,Ip=new nl,Lp=new ga,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function Fr(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=hp[n];if(r===void 0&&(r=new Float32Array(n),hp[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Mc(s,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function nv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function rv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function ov(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;pp.set(i),s.uniformMatrix2fv(this.addr,!1,pp),Jt(t,i)}}function lv(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;fp.set(i),s.uniformMatrix3fv(this.addr,!1,fp),Jt(t,i)}}function cv(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;dp.set(i),s.uniformMatrix4fv(this.addr,!1,dp),Jt(t,i)}}function hv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function uv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function dv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function fv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function pv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function xv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function _v(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(hu.compareFunction=t.isReversedDepthBuffer()?mc:pc,r=hu):r=Cp,t.setTexture2D(e||r,n)}function vv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ip,n)}function yv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Lp,n)}function Mv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Pp,n)}function bv(s){switch(s){case 5126:return nv;case 35664:return sv;case 35665:return rv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Sv(s,e){s.uniform1fv(this.addr,e)}function wv(s,e){let t=Fr(e,this.size,2);s.uniform2fv(this.addr,t)}function Tv(s,e){let t=Fr(e,this.size,3);s.uniform3fv(this.addr,t)}function Ev(s,e){let t=Fr(e,this.size,4);s.uniform4fv(this.addr,t)}function Av(s,e){let t=Fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rv(s,e){let t=Fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cv(s,e){let t=Fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pv(s,e){s.uniform1iv(this.addr,e)}function Iv(s,e){s.uniform2iv(this.addr,e)}function Lv(s,e){s.uniform3iv(this.addr,e)}function Dv(s,e){s.uniform4iv(this.addr,e)}function Nv(s,e){s.uniform1uiv(this.addr,e)}function Uv(s,e){s.uniform2uiv(this.addr,e)}function Fv(s,e){s.uniform3uiv(this.addr,e)}function Ov(s,e){s.uniform4uiv(this.addr,e)}function Bv(s,e,t){let i=this.cache,n=e.length,r=Mc(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Jt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=hu:a=Cp;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function kv(s,e,t){let i=this.cache,n=e.length,r=Mc(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Jt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ip,r[a])}function zv(s,e,t){let i=this.cache,n=e.length,r=Mc(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Jt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Lp,r[a])}function Hv(s,e,t){let i=this.cache,n=e.length,r=Mc(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Jt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Pp,r[a])}function Gv(s){switch(s){case 5126:return Sv;case 35664:return wv;case 35665:return Tv;case 35666:return Ev;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}var uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}},du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},lu=/(\w+)(\])?(\[|\.)?/g;function mp(s,e){s.seq.push(e),s.map[e.id]=e}function Vv(s,e,t){let i=s.name,n=i.length;for(lu.lastIndex=0;;){let r=lu.exec(i),a=lu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){mp(t,c===void 0?new uu(o,s,e):new du(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new fu(o),mp(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vv(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function gp(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var Wv=37297,Xv=0;function qv(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var xp=new Ye;function Yv(s){Ze._getMatrix(xp,Ze.workingColorSpace,s);let e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case oa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _p(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qv(s.getShaderSource(e),o)}else return r}function Kv(s,e){let t=Yv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jv={[Oa]:"Linear",[Ba]:"Reinhard",[ka]:"Cineon",[Ds]:"ACESFilmic",[Ha]:"AgX",[Ga]:"Neutral",[za]:"Custom"};function Jv(s,e){let t=jv[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xc=new R;function Zv(){Ze.getLuminanceCoefficients(xc);let s=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function Qv(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ey(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function eo(s){return s!==""}function vp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(s){return s.replace(ty,ny)}var iy=new Map;function ny(s,e){let t=et[e];if(t===void 0){let i=iy.get(e);if(i!==void 0)t=et[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pu(t)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(s){return s.replace(sy,ry)}function ry(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function bp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ay={[Is]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function oy(s){return ay[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ly={[ls]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function cy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ly[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var hy={[Ns]:"ENVMAP_MODE_REFRACTION"};function uy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dy={[zh]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function fy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":dy[s.combine]||"ENVMAP_BLENDING_NONE"}function py(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function my(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=oy(t),c=cy(t),h=uy(t),u=fy(t),d=py(t),f=$v(t),p=Qv(r),x=n.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(eo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(eo).join(`
`),g.length>0&&(g+=`
`)):(m=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),g=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?et.tonemapping_pars_fragment:"",t.toneMapping!==rn?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Kv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),a=pu(a),a=vp(a,t),a=yp(a,t),o=pu(o),o=vp(o,t),o=yp(o,t),a=Mp(a),o=Mp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=y+m+a,_=y+g+o,b=gp(n,n.VERTEX_SHADER,S),T=gp(n,n.FRAGMENT_SHADER,_);n.attachShader(x,b),n.attachShader(x,T),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(x)||"",k=n.getShaderInfoLog(b)||"",L=n.getShaderInfoLog(T)||"",O=N.trim(),V=k.trim(),q=L.trim(),ne=!0,X=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,b,T);else{let Z=_p(n,b,"vertex"),Q=_p(n,T,"fragment");Ve("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+Z+`
`+Q)}else O!==""?Ie("WebGLProgram: Program Info Log:",O):(V===""||q==="")&&(X=!1);X&&(I.diagnostics={runnable:ne,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:g}})}n.deleteShader(b),n.deleteShader(T),v=new Nr(n,x),E=ey(n,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,Wv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var gy=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gu(e),t.set(e,i)),i}},gu=class{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}};function xy(s){return s===hs||s===Ka||s===ja}function _y(s,e,t,i,n,r){let a=new pr,o=new mu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,P,I,N,k){let L=I.fog,O=N.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||V,q),X=ne&&ne.mapping===Va?ne.image.height:null,Z=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Re=Q!==void 0?Q.length:0,Se=0;O.morphAttributes.position!==void 0&&(Se=1),O.morphAttributes.normal!==void 0&&(Se=2),O.morphAttributes.color!==void 0&&(Se=3);let ft,nt,ht,j;if(Z){let Et=vn[Z];ft=Et.vertexShader,nt=Et.fragmentShader}else{ft=v.vertexShader,nt=v.fragmentShader;let Et=o.getVertexShaderStage(v),mt=o.getFragmentShaderStage(v);o.update(v,Et,mt),ht=Et.id,j=mt.id}let ee=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),We=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,Xe=!!v.map,_t=!!v.matcap,te=!!ne,re=!!v.aoMap,ae=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,he=!!v.normalMap,He=!!v.displacementMap,ke=!!v.emissiveMap,qe=!!v.metalnessMap,Ke=!!v.roughnessMap,D=v.anisotropy>0,pt=v.clearcoat>0,st=v.dispersion>0,C=v.retroreflectivity>0,M=v.iridescence>0,B=v.sheen>0,G=v.transmission>0,Y=D&&!!v.anisotropyMap,le=pt&&!!v.clearcoatMap,ce=pt&&!!v.clearcoatNormalMap,K=pt&&!!v.clearcoatRoughnessMap,$=M&&!!v.iridescenceMap,de=M&&!!v.iridescenceThicknessMap,Ne=B&&!!v.sheenColorMap,ge=B&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Ue=!!v.specularColorMap,Ge=!!v.specularIntensityMap,je=G&&!!v.transmissionMap,F=G&&!!v.thicknessMap,pe=!!v.gradientMap,J=!!v.alphaMap,me=v.alphaTest>0,Me=!!v.alphaHash,se=!!v.extensions,Oe=rn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=s.toneMapping);let Ce={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:ft,fragmentShader:nt,defines:v.defines,customVertexShaderID:ht,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:We,instancingColor:We&&N.instanceColor!==null,instancingMorph:We&&N.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:_t,envMap:te,envMapMode:te&&ne.mapping,envMapCubeUVHeight:X,aoMap:re,lightMap:ae,bumpMap:oe,normalMap:he,displacementMap:He,emissiveMap:ke,normalMapObjectSpace:he&&v.normalMapType===zf,normalMapTangentSpace:he&&v.normalMapType===fc,packedNormalMap:he&&v.normalMapType===fc&&xy(v.normalMap.format),metalnessMap:qe,roughnessMap:Ke,anisotropy:D,anisotropyMap:Y,clearcoat:pt,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:K,dispersion:st,retroreflection:C,iridescence:M,iridescenceMap:$,iridescenceThicknessMap:de,sheen:B,sheenColorMap:Ne,sheenRoughnessMap:ge,specularMap:fe,specularColorMap:Ue,specularIntensityMap:Ge,transmission:G,transmissionMap:je,thicknessMap:F,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Ar&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:Me,combine:v.combine,mapUv:Xe&&p(v.map.channel),aoMapUv:re&&p(v.aoMap.channel),lightMapUv:ae&&p(v.lightMap.channel),bumpMapUv:oe&&p(v.bumpMap.channel),normalMapUv:he&&p(v.normalMap.channel),displacementMapUv:He&&p(v.displacementMap.channel),emissiveMapUv:ke&&p(v.emissiveMap.channel),metalnessMapUv:qe&&p(v.metalnessMap.channel),roughnessMapUv:Ke&&p(v.roughnessMap.channel),anisotropyMapUv:Y&&p(v.anisotropyMap.channel),clearcoatMapUv:le&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(v.sheenRoughnessMap.channel),specularMapUv:fe&&p(v.specularMap.channel),specularColorMapUv:Ue&&p(v.specularColorMap.channel),specularIntensityMapUv:Ge&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:F&&p(v.thicknessMap.channel),alphaMapUv:J&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||D),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Xe||J),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&he===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Se,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:ke&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===lt,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(g(E,v),y(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){let E=f[v.type],P;if(E){let I=vn[E];P=Ni.clone(I.uniforms)}else P=v.uniforms;return P}function _(v,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new my(s,E,v,n),c.push(P),h.set(E,P)),P}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function vy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function yy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Sp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wp(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,m,g){let y=s[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let S=o(d,f,p,x,m,g);p.transmission>0?i.push(S):p.transparent===!0?n.push(S):t.push(S)}function c(d,f,p,x,m,g){let y=o(d,f,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?n.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||yy),i.length>1&&i.sort(f||Sp),n.length>1&&n.sort(f||Sp)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function My(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new wp,s.set(i,[a])):n>=r.length?(a=new wp,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function by(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new ve};break;case"SpotLight":t={position:new R,direction:new R,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Sy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var wy=0;function Ty(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ey(s){let e=new by,t=Sy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,r=new Le,a=new Le;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,S=0,_=0,b=0,T=0,A=0,v=0,E=0,P=0;c.sort(Ty);for(let N=0,k=c.length;N<k;N++){let L=c[N],O=L.color,V=L.intensity,q=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*V,u+=O.g*V,d+=O.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],V);P++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,Q=t.get(L);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[p]=Q,i.sunShadowMap[p]=ne;let Re=Z.getViewportCount();for(let Se=0;Se<Re;Se++)i.sunShadowMatrix[x+Se]=Z.getMatrix(Se),i.sunShadowCascade[x+Se]=Z._cascadeData[Se];x+=Re,p++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,Q=t.get(L);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(V),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[y]=X;let Z=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,Z.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[y]=Z.matrix,L.castShadow){let Q=t.get(L);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.spotShadow[y]=Q,i.spotShadowMap[y]=ne,A++}y++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(O).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=X,S++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Z=L.shadow,Q=t.get(L);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=X,g++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[_]=X,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==S||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==A||I.numSpotMaps!==v||I.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-E,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=y,I.rectAreaLength=S,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=A,I.numSpotMaps=v,I.numLightProbes=P,i.version=wy++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let _=c[y];if(_.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),u++}else if(_.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),d++}else if(_.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Tp(s){let e=new Ey(s),t=[],i=[],n=[];function r(d){u.camera=d,t.length=0,i.length=0,n.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ay(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new Tp(s),e.set(n,[o])):r>=a.length?(o=new Tp(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Py=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Iy=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ep=new Le,Qa=new R,cu=new R;function Ly(s,e,t){let i=new vr,n=new ie,r=new ie,a=new ot,o=new rs,l=new fl,c={},h=t.maxTextureSize,u={[Vi]:Kt,[Kt]:Vi,[lt]:lt},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ze;p.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let g=this.type;this.render=function(T,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===mf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let E=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Wi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=g!==this.type;k&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=T.length;L<O;L++){let V=T[L],q=V.shadow;if(q===void 0){Ie("WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let ne=q.getFrameExtents();n.multiply(ne),r.copy(q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ne.x),n.x=r.x*ne.x,q.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ne.y),n.y=r.y*ne.y,q.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=X,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Er){if(V.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Wt(n.x,n.y,{format:hs,type:si,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),q.map.texture.name=V.name+".shadowMap",q.map.depthTexture=new pn(n.x,n.y,Li),q.map.depthTexture.name=V.name+".shadowMapDepth",q.map.depthTexture.format=dn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Bt,q.map.depthTexture.magFilter=Bt}else V.isPointLight?(q.map=new _c(n.x),q.map.depthTexture=new al(n.x,Ii)):(q.map=new Wt(n.x,n.y),q.map.depthTexture=new pn(n.x,n.y,Ii)),q.map.depthTexture.name=V.name+".shadowMap",q.map.depthTexture.format=dn,this.type===Is?(q.map.depthTexture.compareFunction=X?mc:pc,q.map.depthTexture.minFilter=Pt,q.map.depthTexture.magFilter=Pt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Bt,q.map.depthTexture.magFilter=Bt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==n.x||q.map.height!==n.y)&&q.map.setSize(n.x,n.y);let Z=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();V.isPointLight!==!0&&q.updateMatrices(V,v);for(let Q=0;Q<Z;Q++){let Re=q.getCamera(Q);if(V.isPointLight){let Se=q.camera,ft=q.matrix,nt=V.distance||Se.far;nt!==Se.far&&(Se.far=nt,Se.updateProjectionMatrix()),Qa.setFromMatrixPosition(V.matrixWorld),Se.position.copy(Qa),cu.copy(Se.position),cu.add(Py[Q]),Se.up.copy(Iy[Q]),Se.lookAt(cu),Se.updateMatrixWorld(),ft.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Ep.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Ep,Se.coordinateSystem,Se.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(q.map),s.clear());let Se=q.getViewport(Q);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),N.viewport(a)}i=q.getFrustum(Q),_(A,v,Re,V,this.type)}q.isPointLightShadow!==!0&&this.type===Er&&y(q,v),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(E,P,I)};function y(T,A){let v=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Wt(n.x,n.y,{format:hs,type:si}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,v,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,v,f,x,null)}function S(T,A,v,E){let P=null,I=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=P.uuid,k=A.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let O=L[k];O===void 0&&(O=P.clone(),L[k]=O,A.addEventListener("dispose",b)),P=O}if(P.visible=A.visible,P.wireframe=A.wireframe,E===Er?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=s.properties.get(P);N.light=v}return P}function _(T,A,v,E,P){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Er)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let k=e.update(T),L=T.material;if(Array.isArray(L)){let O=k.groups;for(let V=0,q=O.length;V<q;V++){let ne=O[V],X=L[ne.materialIndex];if(X&&X.visible){let Z=S(T,X,E,P);T.onBeforeShadow(s,T,A,v,k,Z,ne),s.renderBufferDirect(v,null,k,Z,T,ne),T.onAfterShadow(s,T,A,v,k,Z,ne)}}}else if(L.visible){let O=S(T,L,E,P);T.onBeforeShadow(s,T,A,v,k,O,null),s.renderBufferDirect(v,null,k,O,T,null),T.onAfterShadow(s,T,A,v,k,O,null)}}let N=T.children;for(let k=0,L=N.length;k<L;k++)_(N[k],A,v,E,P)}function b(T){T.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],P=T.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Dy(s,e){function t(){let F=!1,pe=new ot,J=null,me=new ot(0,0,0,0);return{setMask:function(Me){J!==Me&&!F&&(s.colorMask(Me,Me,Me,Me),J=Me)},setLocked:function(Me){F=Me},setClear:function(Me,se,Oe,Ce,Et){Et===!0&&(Me*=Ce,se*=Ce,Oe*=Ce),pe.set(Me,se,Oe,Ce),me.equals(pe)===!1&&(s.clearColor(Me,se,Oe,Ce),me.copy(pe))},reset:function(){F=!1,J=null,me.set(-1,0,0,0)}}}function i(){let F=!1,pe=!1,J=null,me=null,Me=null;return{setReversed:function(se){if(pe!==se){let Oe=e.get("EXT_clip_control");se?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),pe=se;let Ce=Me;Me=null,this.setClear(Ce)}},getReversed:function(){return pe},setTest:function(se){se?ee(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(se){J!==se&&!F&&(s.depthMask(se),J=se)},setFunc:function(se){if(pe&&(se=Zf[se]),me!==se){switch(se){case Ko:s.depthFunc(s.NEVER);break;case jo:s.depthFunc(s.ALWAYS);break;case Jo:s.depthFunc(s.LESS);break;case lr:s.depthFunc(s.LEQUAL);break;case Zo:s.depthFunc(s.EQUAL);break;case $o:s.depthFunc(s.GEQUAL);break;case Qo:s.depthFunc(s.GREATER);break;case el:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=se}},setLocked:function(se){F=se},setClear:function(se){Me!==se&&(Me=se,pe&&(se=1-se),s.clearDepth(se))},reset:function(){F=!1,J=null,me=null,Me=null,pe=!1}}}function n(){let F=!1,pe=null,J=null,me=null,Me=null,se=null,Oe=null,Ce=null,Et=null;return{setTest:function(mt){F||(mt?ee(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(mt){pe!==mt&&!F&&(s.stencilMask(mt),pe=mt)},setFunc:function(mt,Ki,ln){(J!==mt||me!==Ki||Me!==ln)&&(s.stencilFunc(mt,Ki,ln),J=mt,me=Ki,Me=ln)},setOp:function(mt,Ki,ln){(se!==mt||Oe!==Ki||Ce!==ln)&&(s.stencilOp(mt,Ki,ln),se=mt,Oe=Ki,Ce=ln)},setLocked:function(mt){F=mt},setClear:function(mt){Et!==mt&&(s.clearStencil(mt),Et=mt)},reset:function(){F=!1,pe=null,J=null,me=null,Me=null,se=null,Oe=null,Ce=null,Et=null}}}let r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,_=null,b=null,T=null,A=null,v=new ve(0,0,0),E=0,P=!1,I=null,N=null,k=null,L=null,O=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ne=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=ne>=2);let Z=null,Q={},Re=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),ft=new ot().fromArray(Re),nt=new ot().fromArray(Se);function ht(F,pe,J,me){let Me=new Uint8Array(4),se=s.createTexture();s.bindTexture(F,se),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<J;Oe++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(pe+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return se}let j={};j[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(lr),oe(!1),he(Uh),ee(s.CULL_FACE),re(Wi);function ee(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function xe(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function We(F,pe){return d[F]!==pe?(s.bindFramebuffer(F,pe),d[F]=pe,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=pe),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(F,pe){let J=p,me=!1;if(F){J=f.get(pe),J===void 0&&(J=[],f.set(pe,J));let Me=F.textures;if(J.length!==Me.length||J[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Oe=Me.length;se<Oe;se++)J[se]=s.COLOR_ATTACHMENT0+se;J.length=Me.length,me=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,me=!0);me&&s.drawBuffers(J)}function Xe(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let _t={[Ls]:s.FUNC_ADD,[xf]:s.FUNC_SUBTRACT,[_f]:s.FUNC_REVERSE_SUBTRACT};_t[vf]=s.MIN,_t[yf]=s.MAX;let te={[Mf]:s.ZERO,[bf]:s.ONE,[Sf]:s.SRC_COLOR,[Bh]:s.SRC_ALPHA,[Cf]:s.SRC_ALPHA_SATURATE,[Af]:s.DST_COLOR,[Tf]:s.DST_ALPHA,[wf]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[Rf]:s.ONE_MINUS_DST_COLOR,[Ef]:s.ONE_MINUS_DST_ALPHA,[Pf]:s.CONSTANT_COLOR,[If]:s.ONE_MINUS_CONSTANT_COLOR,[Lf]:s.CONSTANT_ALPHA,[Df]:s.ONE_MINUS_CONSTANT_ALPHA};function re(F,pe,J,me,Me,se,Oe,Ce,Et,mt){if(F===Wi){m===!0&&(xe(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),F!==gf){if(F!==g||mt!==P){if((y!==Ls||b!==Ls)&&(s.blendEquation(s.FUNC_ADD),y=Ls,b=Ls),mt)switch(F){case Ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.ONE,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",F);break}else switch(F){case Ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",F);break}S=null,_=null,T=null,A=null,v.set(0,0,0),E=0,g=F,P=mt}return}Me=Me||pe,se=se||J,Oe=Oe||me,(pe!==y||Me!==b)&&(s.blendEquationSeparate(_t[pe],_t[Me]),y=pe,b=Me),(J!==S||me!==_||se!==T||Oe!==A)&&(s.blendFuncSeparate(te[J],te[me],te[se],te[Oe]),S=J,_=me,T=se,A=Oe),(Ce.equals(v)===!1||Et!==E)&&(s.blendColor(Ce.r,Ce.g,Ce.b,Et),v.copy(Ce),E=Et),g=F,P=!1}function ae(F,pe){F.side===lt?xe(s.CULL_FACE):ee(s.CULL_FACE);let J=F.side===Kt;pe&&(J=!J),oe(J),F.blending===Ar&&F.transparent===!1?re(Wi):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let me=F.stencilWrite;o.setTest(me),me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(F){I!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),I=F)}function he(F){F!==ff?(ee(s.CULL_FACE),F!==N&&(F===Uh?s.cullFace(s.BACK):F===pf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),N=F}function He(F){F!==k&&(q&&s.lineWidth(F),k=F)}function ke(F,pe,J){F?(ee(s.POLYGON_OFFSET_FILL),(L!==pe||O!==J)&&(L=pe,O=J,a.getReversed()&&(pe=-pe),s.polygonOffset(pe,J))):xe(s.POLYGON_OFFSET_FILL)}function qe(F){F?ee(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Ke(F){F===void 0&&(F=s.TEXTURE0+V-1),Z!==F&&(s.activeTexture(F),Z=F)}function D(F,pe,J){J===void 0&&(Z===null?J=s.TEXTURE0+V-1:J=Z);let me=Q[J];me===void 0&&(me={type:void 0,texture:void 0},Q[J]=me),(me.type!==F||me.texture!==pe)&&(Z!==J&&(s.activeTexture(J),Z=J),s.bindTexture(F,pe||j[F]),me.type=F,me.texture=pe)}function pt(){let F=Q[Z];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function M(){try{s.texSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function B(){try{s.texSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function le(){try{s.texStorage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ce(){try{s.texStorage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function K(){try{s.texImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function $(){try{s.texImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function de(F){return u[F]!==void 0?u[F]:s.getParameter(F)}function Ne(F,pe){u[F]!==pe&&(s.pixelStorei(F,pe),u[F]=pe)}function ge(F){ft.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ft.copy(F))}function fe(F){nt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Ue(F,pe){let J=c.get(pe);J===void 0&&(J=new WeakMap,c.set(pe,J));let me=J.get(F);me===void 0&&(me=s.getUniformBlockIndex(pe,F.name),J.set(F,me))}function Ge(F,pe){let me=c.get(pe).get(F);l.get(pe)!==me&&(s.uniformBlockBinding(pe,me,F.__bindingPointIndex),l.set(pe,me))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,Q={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,_=null,b=null,T=null,A=null,v=new ve(0,0,0),E=0,P=!1,I=null,N=null,k=null,L=null,O=null,ft.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:We,drawBuffers:be,useProgram:Xe,setBlending:re,setMaterial:ae,setFlipSided:oe,setCullFace:he,setLineWidth:He,setPolygonOffset:ke,setScissorTest:qe,activeTexture:Ke,bindTexture:D,unbindTexture:pt,compressedTexImage2D:st,compressedTexImage3D:C,texImage2D:K,texImage3D:$,pixelStorei:Ne,getParameter:de,updateUBOMapping:Ue,uniformBlockBinding:Ge,texStorage2D:le,texStorage3D:ce,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:ge,viewport:fe,reset:je}}function Ny(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):ur("canvas")}function m(C,M,B){let G=1,Y=st(C);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let le=Math.floor(G*Y.width),ce=Math.floor(G*Y.height);d===void 0&&(d=x(le,ce));let K=M?x(le,ce):d;return K.width=le,K.height=ce,K.getContext("2d").drawImage(C,0,0,le,ce),Ie("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+le+"x"+ce+")."),K}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function g(C){return C.generateMipmaps}function y(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,M,B,G,Y,le=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;G&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8),B===s.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),B===s.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),M===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8),B===s.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),B===s.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),M===s.RGB&&(B===s.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),B===s.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),M===s.RGBA){let $=le?oa:Ze.getTransfer(Y);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=$===dt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),B===s.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(C,M){let B;return C?M===null||M===Ii||M===Pr?B=s.DEPTH24_STENCIL8:M===Li?B=s.DEPTH32F_STENCIL8:M===Cr&&(B=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ii||M===Pr?B=s.DEPTH_COMPONENT24:M===Li?B=s.DEPTH_COMPONENT32F:M===Cr&&(B=s.DEPTH_COMPONENT16),B}function T(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==Pt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function v(C){let M=C.target;M.removeEventListener("dispose",v),I(M)}function E(C){let M=i.get(C);if(M.__webglInit===void 0)return;let B=C.source,G=f.get(B);if(G){let Y=G[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(C),Object.keys(G).length===0&&f.delete(B)}i.remove(C)}function P(C){let M=i.get(C);s.deleteTexture(M.__webglTexture);let B=C.source,G=f.get(B);delete G[M.__cacheKey],a.memory.textures--}function I(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let Y=0;Y<M.__webglFramebuffer[G].length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[G][Y]);else s.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)s.deleteFramebuffer(M.__webglFramebuffer[G]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,Y=B.length;G<Y;G++){let le=i.get(B[G]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(B[G])}i.remove(C)}let N=0;function k(){N=0}function L(){return N}function O(C){N=C}function V(){let C=N;return C>=n.maxTextures&&Ie("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),N+=1,C}function q(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ne(C,M){let B=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,C,M);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function X(C,M){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){xe(B,C,M);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function Z(C,M){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){xe(B,C,M);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function Q(C,M){let B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){We(B,C,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}let Re={[_i]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[cr]:s.MIRRORED_REPEAT},Se={[Bt]:s.NEAREST,[El]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[Rr]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},ft={[Gf]:s.NEVER,[Yf]:s.ALWAYS,[Vf]:s.LESS,[pc]:s.LEQUAL,[Wf]:s.EQUAL,[mc]:s.GEQUAL,[Xf]:s.GREATER,[qf]:s.NOTEQUAL};function nt(C,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pt||M.magFilter===Rr||M.magFilter===Us||M.magFilter===Si||M.minFilter===Pt||M.minFilter===Rr||M.minFilter===Us||M.minFilter===Si)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Re[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Re[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Re[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Se[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ft[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==Us&&M.minFilter!==Si||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ht(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let G=M.source,Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));let le=q(M);if(le!==C.__cacheKey){Y[le]===void 0&&(Y[le]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[le].usedTimes++;let ce=Y[C.__cacheKey];ce!==void 0&&(Y[C.__cacheKey].usedTimes--,ce.usedTimes===0&&P(M)),C.__cacheKey=le,C.__webglTexture=Y[le].texture}return B}function j(C,M,B){return Math.floor(Math.floor(C/B)/M)}function ee(C,M,B,G){let le=C.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,B,G,M.data);else{le.sort((Ne,ge)=>Ne.start-ge.start);let ce=0;for(let Ne=1;Ne<le.length;Ne++){let ge=le[ce],fe=le[Ne],Ue=ge.start+ge.count,Ge=j(fe.start,M.width,4),je=j(ge.start,M.width,4);fe.start<=Ue+1&&Ge===je&&j(fe.start+fe.count-1,M.width,4)===Ge?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++ce,le[ce]=fe)}le.length=ce+1;let K=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),de=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ne=0,ge=le.length;Ne<ge;Ne++){let fe=le[Ne],Ue=Math.floor(fe.start/4),Ge=Math.ceil(fe.count/4),je=Ue%M.width,F=Math.floor(Ue/M.width),pe=Ge,J=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,je),t.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,je,F,pe,J,B,G,M.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function xe(C,M,B){let G=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=s.TEXTURE_3D);let Y=ht(C,M),le=M.source;t.bindTexture(G,C.__webglTexture,s.TEXTURE0+B);let ce=i.get(le);if(le.version!==ce.__version||Y===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let J=Ze.getPrimaries(Ze.workingColorSpace),me=M.colorSpace===Hn?null:Ze.getPrimaries(M.colorSpace),Me=M.colorSpace===Hn||J===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let $=m(M.image,!1,n.maxTextureSize);$=pt(M,$);let de=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),ge=_(M.internalFormat,de,Ne,M.normalized,M.colorSpace,M.isVideoTexture);nt(G,M);let fe,Ue=M.mipmaps,Ge=M.isVideoTexture!==!0,je=ce.__version===void 0||Y===!0,F=le.dataReady,pe=T(M,$);if(M.isDepthTexture)ge=b(M.format===cs,M.type),je&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,ge,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,ge,$.width,$.height,0,de,Ne,null));else if(M.isDataTexture)if(Ue.length>0){Ge&&je&&t.texStorage2D(s.TEXTURE_2D,pe,ge,Ue[0].width,Ue[0].height);for(let J=0,me=Ue.length;J<me;J++)fe=Ue[J],Ge?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,fe.width,fe.height,de,Ne,fe.data):t.texImage2D(s.TEXTURE_2D,J,ge,fe.width,fe.height,0,de,Ne,fe.data);M.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(s.TEXTURE_2D,pe,ge,$.width,$.height),F&&ee(M,$,de,Ne)):t.texImage2D(s.TEXTURE_2D,0,ge,$.width,$.height,0,de,Ne,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ge,Ue[0].width,Ue[0].height,$.depth);for(let J=0,me=Ue.length;J<me;J++)if(fe=Ue[J],M.format!==Di)if(de!==null)if(Ge){if(F)if(M.layerUpdates.size>0){let Me=nu(fe.width,fe.height,M.format,M.type);for(let se of M.layerUpdates){let Oe=fe.data.subarray(se*Me/fe.data.BYTES_PER_ELEMENT,(se+1)*Me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,se,fe.width,fe.height,1,de,Oe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,$.depth,de,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,ge,fe.width,fe.height,$.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,$.depth,de,Ne,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,ge,fe.width,fe.height,$.depth,0,de,Ne,fe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ge&&je&&t.texStorage2D(s.TEXTURE_2D,pe,ge,Ue[0].width,Ue[0].height);for(let J=0,me=Ue.length;J<me;J++)fe=Ue[J],M.format!==Di?de!==null?Ge?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,J,ge,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,fe.width,fe.height,de,Ne,fe.data):t.texImage2D(s.TEXTURE_2D,J,ge,fe.width,fe.height,0,de,Ne,fe.data)}else if(M.isDataArrayTexture)if(Ge){if(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ge,$.width,$.height,$.depth),F)if(M.layerUpdates.size>0){let J=nu($.width,$.height,M.format,M.type);for(let me of M.layerUpdates){let Me=$.data.subarray(me*J/$.data.BYTES_PER_ELEMENT,(me+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,$.width,$.height,1,de,Ne,Me)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Ne,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,de,Ne,$.data);else if(M.isData3DTexture)Ge?(je&&t.texStorage3D(s.TEXTURE_3D,pe,ge,$.width,$.height,$.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Ne,$.data)):t.texImage3D(s.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,de,Ne,$.data);else if(M.isFramebufferTexture){if(je)if(Ge)t.texStorage2D(s.TEXTURE_2D,pe,ge,$.width,$.height);else{let J=$.width,me=$.height;for(let Me=0;Me<pe;Me++)t.texImage2D(s.TEXTURE_2D,Me,ge,J,me,0,de,Ne,null),J>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),u.add(M),J.onpaint=me=>{let Me=me.changedElements;for(let se of u)Me.includes(se.image)&&(se.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let Me=s.RGBA,se=s.RGBA,Oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Me,se,Oe,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ge&&je){let J=st(Ue[0]);t.texStorage2D(s.TEXTURE_2D,pe,ge,J.width,J.height)}for(let J=0,me=Ue.length;J<me;J++)fe=Ue[J],Ge?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,de,Ne,fe):t.texImage2D(s.TEXTURE_2D,J,ge,de,Ne,fe);M.generateMipmaps=!1}else if(Ge){if(je){let J=st($);t.texStorage2D(s.TEXTURE_2D,pe,ge,J.width,J.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Ne,$)}else t.texImage2D(s.TEXTURE_2D,0,ge,de,Ne,$);g(M)&&y(G),ce.__version=le.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function We(C,M,B){if(M.image.length!==6)return;let G=ht(C,M),Y=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);let le=i.get(Y);if(Y.version!==le.__version||G===!0){t.activeTexture(s.TEXTURE0+B);let ce=Ze.getPrimaries(Ze.workingColorSpace),K=M.colorSpace===Hn?null:Ze.getPrimaries(M.colorSpace),$=M.colorSpace===Hn||ce===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!de&&!Ne?ge[se]=m(M.image[se],!0,n.maxCubemapSize):ge[se]=Ne?M.image[se].image:M.image[se],ge[se]=pt(M,ge[se]);let fe=ge[0],Ue=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),je=_(M.internalFormat,Ue,Ge,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,pe=le.__version===void 0||G===!0,J=Y.dataReady,me=T(M,fe);nt(s.TEXTURE_CUBE_MAP,M);let Me;if(de){F&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,je,fe.width,fe.height);for(let se=0;se<6;se++){Me=ge[se].mipmaps;for(let Oe=0;Oe<Me.length;Oe++){let Ce=Me[Oe];M.format!==Di?Ue!==null?F?J&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,Ce.width,Ce.height,Ue,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,je,Ce.width,Ce.height,0,Ce.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,Ce.width,Ce.height,Ue,Ge,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,je,Ce.width,Ce.height,0,Ue,Ge,Ce.data)}}}else{if(Me=M.mipmaps,F&&pe){Me.length>0&&me++;let se=st(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,je,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){F?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,Ue,Ge,ge[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,je,ge[se].width,ge[se].height,0,Ue,Ge,ge[se].data);for(let Oe=0;Oe<Me.length;Oe++){let Et=Me[Oe].image[se].image;F?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Et.width,Et.height,Ue,Ge,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,je,Et.width,Et.height,0,Ue,Ge,Et.data)}}else{F?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,Ge,ge[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,je,Ue,Ge,ge[se]);for(let Oe=0;Oe<Me.length;Oe++){let Ce=Me[Oe];F?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Ue,Ge,Ce.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,je,Ue,Ge,Ce.image[se])}}}g(M)&&y(s.TEXTURE_CUBE_MAP),le.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function be(C,M,B,G,Y,le){let ce=r.convert(B.format,B.colorSpace),K=r.convert(B.type),$=_(B.internalFormat,ce,K,B.normalized,B.colorSpace),de=i.get(M),Ne=i.get(B);if(Ne.__renderTarget=M,!de.__hasExternalTextures){let ge=Math.max(1,M.width>>le),fe=Math.max(1,M.height>>le);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?t.texImage3D(Y,le,$,ge,fe,M.depth,0,ce,K,null):t.texImage2D(Y,le,$,ge,fe,0,ce,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ke(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,Y,Ne.__webglTexture,0,qe(M)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,Y,Ne.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(C,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){let G=M.depthTexture,Y=G&&G.isDepthTexture?G.type:null,le=b(M.stencilBuffer,Y),ce=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ke(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(M),le,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(M),le,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,le,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,C)}else{let G=M.textures;for(let Y=0;Y<G.length;Y++){let le=G[Y],ce=r.convert(le.format,le.colorSpace),K=r.convert(le.type),$=_(le.internalFormat,ce,K,le.normalized,le.colorSpace);Ke(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(M),$,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(M),$,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,$,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(C,M,B){let G=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(s.TEXTURE_CUBE_MAP,M.depthTexture);let de=r.convert(M.depthTexture.format),Ne=r.convert(M.depthTexture.type),ge;M.depthTexture.format===dn?ge=s.DEPTH_COMPONENT24:M.depthTexture.format===cs&&(ge=s.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,M.width,M.height,0,de,Ne,null)}}else ne(M.depthTexture,0);let le=Y.__webglTexture,ce=qe(M),K=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,$=M.depthTexture.format===cs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===dn)Ke(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,$,K,le,0);else if(M.depthTexture.format===cs)Ke(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,le,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,$,K,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(C){let M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){let Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=G}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)_t(M.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?_t(M.__webglFramebuffer[0],C,0):_t(M.__webglFramebuffer,C,0)}else if(B){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=s.createRenderbuffer(),Xe(M.__webglDepthbuffer[G],C,!1);else{let Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,le)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Xe(M.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(C,M,B){let G=i.get(C);M!==void 0&&be(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&te(C)}function ae(C){let M=C.texture,B=i.get(C),G=i.get(M);C.addEventListener("dispose",v);let Y=C.textures,le=C.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=M.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let $=0;$<M.mipmaps.length;$++)B.__webglFramebuffer[K][$]=s.createFramebuffer()}else B.__webglFramebuffer[K]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)B.__webglFramebuffer[K]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ce)for(let K=0,$=Y.length;K<$;K++){let de=i.get(Y[K]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ke(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let $=Y[K];B.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let de=r.convert($.format,$.colorSpace),Ne=r.convert($.type),ge=_($.internalFormat,de,Ne,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),fe=qe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,ge,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,B.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),nt(s.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)be(B.__webglFramebuffer[K][$],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else be(B.__webglFramebuffer[K],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(M)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let K=0,$=Y.length;K<$;K++){let de=Y[K],Ne=i.get(de),ge=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ne.__webglTexture),nt(ge,de),be(B.__webglFramebuffer,C,de,s.COLOR_ATTACHMENT0+K,ge,0),g(de)&&y(ge)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),nt(K,M),M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)be(B.__webglFramebuffer[$],C,M,s.COLOR_ATTACHMENT0,K,$);else be(B.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,K,0);g(M)&&y(K),t.unbindTexture()}C.depthBuffer&&te(C)}function oe(C){let M=C.textures;for(let B=0,G=M.length;B<G;B++){let Y=M[B];if(g(Y)){let le=S(C),ce=i.get(Y).__webglTexture;t.bindTexture(le,ce),y(le),t.unbindTexture()}}}let he=[],He=[];function ke(C){if(C.samples>0){if(Ke(C)===!1){let M=C.textures,B=C.width,G=C.height,Y=s.COLOR_BUFFER_BIT,le=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=i.get(C),K=M.length>1;if(K)for(let de=0;de<M.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let $=C.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let de=0;de<M.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);let Ne=i.get(M[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,B,G,0,0,B,G,Y,s.NEAREST),l===!0&&(he.length=0,He.length=0,he.push(s.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(he.push(le),He.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<M.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);let Ne=i.get(M[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function qe(C){return Math.min(n.maxSamples,C.samples)}function Ke(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function pt(C,M){let B=C.colorSpace,G=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==di&&B!==Hn&&(Ze.getTransfer(B)===dt?(G!==Di||Y!==wi)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),M}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=Q,this.rebindTextures=re,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Uy(s,e){function t(i,n=Hn){let r,a=Ze.getTransfer(n);if(i===wi)return s.UNSIGNED_BYTE;if(i===Rl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Wh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return s.BYTE;if(i===Vh)return s.SHORT;if(i===Cr)return s.UNSIGNED_SHORT;if(i===Al)return s.INT;if(i===Ii)return s.UNSIGNED_INT;if(i===Li)return s.FLOAT;if(i===si)return s.HALF_FLOAT;if(i===qh)return s.ALPHA;if(i===Yh)return s.RGB;if(i===Di)return s.RGBA;if(i===dn)return s.DEPTH_COMPONENT;if(i===cs)return s.DEPTH_STENCIL;if(i===Pl)return s.RED;if(i===Il)return s.RED_INTEGER;if(i===hs)return s.RG;if(i===Ll)return s.RG_INTEGER;if(i===Dl)return s.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Fl||i===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===kl||i===zl||i===Hl||i===Gl||i===Ka||i===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bl||i===kl)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hl)return r.COMPRESSED_R11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ka)return r.COMPRESSED_RG11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===jl||i===Jl||i===Zl||i===$l||i===Ql||i===ec||i===tc||i===ic||i===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===rc||i===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sc)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===lc||i===ja||i===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Dt({vertexShader:Fy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends en{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new xu,g={},y=t.getContextAttributes(),S=null,_=null,b=[],T=[],A=new ie,v=null,E=null,P=new Nt;P.viewport=new ot;let I=new Nt;I.viewport=new ot;let N=[P,I],k=new Ml,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=b[j];return ee===void 0&&(ee=new mr,b[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=b[j];return ee===void 0&&(ee=new mr,b[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=b[j];return ee===void 0&&(ee=new mr,b[j]=ee),ee.getHandSpace()};function V(j){let ee=T.indexOf(j.inputSource);if(ee===-1)return;let xe=b[ee];xe!==void 0&&(xe.update(j.inputSource,j.frame,c||a),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",ne);for(let j=0;j<b.length;j++){let ee=T[j];ee!==null&&(T[j]=null,b[j].disconnect(ee))}L=null,O=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(S),f=null,d=null,u=null,n=null,_=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),E!==null){let j=E.camera;j.fov=E.fov,j.zoom=E.zoom,j.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(S=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",q),n.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,We=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?cs:dn,We=y.stencil?Pr:Ii);let Xe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Wt(d.textureWidth,d.textureHeight,{format:Di,type:wi,depthTexture:new pn(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,xe),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Wt(f.framebufferWidth,f.framebufferHeight,{format:Di,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ht.setContext(n),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(j){for(let ee=0;ee<j.removed.length;ee++){let xe=j.removed[ee],We=T.indexOf(xe);We>=0&&(T[We]=null,b[We].disconnect(xe))}for(let ee=0;ee<j.added.length;ee++){let xe=j.added[ee],We=T.indexOf(xe);if(We===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=T.length){T.push(xe),We=Xe;break}else if(T[Xe]===null){T[Xe]=xe,We=Xe;break}if(We===-1)break}let be=b[We];be&&be.connect(xe)}}let X=new R,Z=new R;function Q(j,ee,xe){X.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);let We=X.distanceTo(Z),be=ee.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,_t=be[14]/(be[10]-1),te=be[14]/(be[10]+1),re=(be[9]+1)/be[5],ae=(be[9]-1)/be[5],oe=(be[8]-1)/be[0],he=(Xe[8]+1)/Xe[0],He=_t*oe,ke=_t*he,qe=We/(-oe+he),Ke=qe*-oe;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ke),j.translateZ(qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let D=_t+qe,pt=te+qe,st=He-Ke,C=ke+(We-Ke),M=re*te/pt*D,B=ae*te/pt*D;j.projectionMatrix.makePerspective(st,C,M,B,D,pt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Re(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let ee=j.near,xe=j.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),k.near=I.near=P.near=ee,k.far=I.far=P.far=xe,(L!==k.near||O!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,O=k.far),k.layers.mask=j.layers.mask|6,P.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let We=j.parent,be=k.cameras;Re(k,We);for(let Xe=0;Xe<be.length;Xe++)Re(be[Xe],We);be.length===2?Q(k,P,I):k.projectionMatrix.copy(P.projectionMatrix),E===null&&j.isPerspectiveCamera&&(E={camera:j,fov:j.fov,zoom:j.zoom}),Se(j,k,We)};function Se(j,ee,xe){xe===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ws*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return g[j]};let ft=null;function nt(j,ee){if(h=ee.getViewerPose(c||a),p=ee,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let We=!1;xe.length!==k.cameras.length&&(k.cameras.length=0,We=!0);for(let te=0;te<xe.length;te++){let re=xe[te],ae=null;if(f!==null)ae=f.getViewport(re);else{let he=u.getViewSubImage(d,re);ae=he.viewport,te===0&&(e.setRenderTargetTextures(_,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(_))}let oe=N[te];oe===void 0&&(oe=new Nt,oe.layers.enable(te),oe.viewport=new ot,N[te]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),te===0&&(k.matrix.copy(oe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),We===!0&&k.cameras.push(oe)}let be=n.enabledFeatures;if(be&&be.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let te=u.getDepthInformation(xe[0]);te&&te.isValid&&te.texture&&m.init(te,n.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let te=0;te<xe.length;te++){let re=xe[te].camera;if(re){let ae=g[re];ae||(ae=new xa,g[re]=ae);let oe=u.getCameraImage(re);ae.sourceTexture=oe}}}}for(let xe=0;xe<b.length;xe++){let We=T[xe],be=b[xe];We!==null&&be!==void 0&&be.update(We,ee,c||a)}ft&&ft(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),p=null}let ht=new Ap;ht.setAnimationLoop(nt),this.setAnimationLoop=function(j){ft=j},this.dispose=function(){}}},By=new Le,Dp=new Ye;Dp.set(-1,0,0,0,1,0,0,0,1);function ky(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,eu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,S,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zy(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let T=b.program;i.uniformBlockBinding(_,T)}function c(_,b){let T=n[_.id];T===void 0&&(m(_),T=h(_),n[_.id]=T,_.addEventListener("dispose",y));let A=b.program;i.updateUBOMapping(_,A);let v=e.render.frame;r[_.id]!==v&&(d(_),r[_.id]=v)}function h(_){let b=u();_.__bindingPointIndex=b;let T=s.createBuffer(),A=_.__size,v=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,A,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=n[_.id],T=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let v=0,E=T.length;v<E;v++){let P=T[v];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)f(P[I],v,I,A);else f(P,v,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,b,T,A){if(x(_,b,T,A)===!0){let v=_.__offset,E=_.value;if(Array.isArray(E)){let P=0;for(let I=0;I<E.length;I++){let N=E[I],k=g(N);p(N,_.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,_.__data)}}function p(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function x(_,b,T,A){let v=_.value,E=b+"_"+T;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{let P=A[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(_){let b=_.uniforms,T=0,A=16;for(let E=0,P=b.length;E<P;E++){let I=Array.isArray(b[E])?b[E]:[b[E]];for(let N=0,k=I.length;N<k;N++){let L=I[N],O=Array.isArray(L.value)?L.value:[L.value];for(let V=0,q=O.length;V<q;V++){let ne=O[V],X=g(ne),Z=T%A,Q=Z%X.boundary,Re=Z+Q;T+=Q,Re!==0&&A-Re<X.storage&&(T+=A-Re),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=X.storage}}}let v=T%A;return v>0&&(T+=A-v),_.__size=T,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(n[b.id]),delete n[b.id],delete r[b.id]}function S(){for(let _ in n)s.deleteBuffer(n[_]);a=[],n={},r={}}return{bind:l,update:c,dispose:S}}var Hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_n=null;function Gy(){return _n===null&&(_n=new Ln(Hy,16,16,hs,si),_n.name="DFG_LUT",_n.minFilter=Pt,_n.magFilter=Pt,_n.wrapS=ki,_n.wrapT=ki,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}var vc=class{constructor(e={}){let{canvas:t=Kf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,m=new Set([Dl,Ll,Il]),g=new Set([wi,Ii,Cr,Pr,Rl,Cl]),y=new Uint32Array(4),S=new Int32Array(4),_=new R,b=null,T=null,A=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,N=null,k=null,L=null,O=null;this._outputColorSpace=at;let V=0,q=0,ne=null,X=-1,Z=null,Q=new ot,Re=new ot,Se=null,ft=new ve(0),nt=0,ht=t.width,j=t.height,ee=1,xe=null,We=null,be=new ot(0,0,ht,j),Xe=new ot(0,0,ht,j),_t=!1,te=new vr,re=!1,ae=!1,oe=new Le,he=new R,He=new ot,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Ke(){return ne===null?ee:1}let D=i;function pt(w,U){return t.getContext(w,U)}let st,C,M,B,G,Y,le,ce,K,$,de,Ne,ge,fe,Ue,Ge,je,F,pe,J,me,Me,se;try{let w={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Ki,!1),D===null){let U="webgl2";if(D=pt(U,w),D===null)throw pt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(w){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ki,!1),Ve("WebGLRenderer: "+w.message),w}function Oe(){st=new j_(D),st.init(),me=new Uy(D,st),C=new k_(D,st,e,me),M=new Dy(D,st),C.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),k=D.createFramebuffer(),L=D.createFramebuffer(),O=D.createFramebuffer(),B=new $_(D),G=new vy,Y=new Ny(D,st,M,G,C,me,B),le=new K_(P),ce=new e0(D),Me=new O_(D,ce),K=new J_(D,ce,B,Me),$=new ev(D,K,ce,Me,B),F=new Q_(D,C,Y),Ue=new z_(G),de=new _y(P,le,st,C,Me,Ue),Ne=new ky(P,G),ge=new My,fe=new Ay(st),je=new F_(P,le,M,$,p,l),Ge=new Ly(P,$,C),se=new zy(D,B,C,M),pe=new B_(D,st,B),J=new Z_(D,st,B),B.programs=de.programs,P.capabilities=C,P.extensions=st,P.properties=G,P.renderLists=ge,P.shadowMap=Ge,P.state=M,P.info=B}x!==wi&&(E=new iv(x,t.width,t.height,o,n,r));let Ce=new _u(P,D);this.xr=Ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(ht,j,!1))},this.getSize=function(w){return w.set(ht,j)},this.setSize=function(w,U,W=!0){if(Ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=w,j=U,t.width=Math.floor(w*ee),t.height=Math.floor(U*ee),W===!0&&(t.style.width=w+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(ht*ee,j*ee).floor()},this.setDrawingBufferSize=function(w,U,W){ht=w,j=U,ee=W,t.width=Math.floor(w*W),t.height=Math.floor(U*W),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(x===wi){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,U,W,z){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,U,W,z),M.viewport(Q.copy(be).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(Xe)},this.setScissor=function(w,U,W,z){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,U,W,z),M.scissor(Re.copy(Xe).multiplyScalar(ee).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(w){M.setScissorTest(_t=w)},this.setOpaqueSort=function(w){xe=w},this.setTransparentSort=function(w){We=w},this.getClearColor=function(w){return w.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,W=!0){let z=0;if(w){let H=!1;if(ne!==null){let ye=ne.texture.format;H=m.has(ye)}if(H){let ye=ne.texture.type,Te=g.has(ye),_e=je.getClearColor(),Ee=je.getClearAlpha(),Pe=_e.r,$e=_e.g,rt=_e.b;Te?(y[0]=Pe,y[1]=$e,y[2]=rt,y[3]=Ee,D.clearBufferuiv(D.COLOR,0,y)):(S[0]=Pe,S[1]=$e,S[2]=rt,S[3]=Ee,D.clearBufferiv(D.COLOR,0,S))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ki,!1),je.dispose(),ge.dispose(),fe.dispose(),G.dispose(),le.dispose(),$.dispose(),Me.dispose(),se.dispose(),de.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ld),Ce.removeEventListener("sessionend",cd),fs.stop()};function Et(w){w.preventDefault(),la("WebGLRenderer: Context Lost."),I=!0}function mt(){la("WebGLRenderer: Context Restored."),I=!1;let w=B.autoReset,U=Ge.enabled,W=Ge.autoUpdate,z=Ge.needsUpdate,H=Ge.type;Oe(),B.autoReset=w,Ge.enabled=U,Ge.autoUpdate=W,Ge.needsUpdate=z,Ge.type=H}function Ki(w){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ln(w){let U=w.target;U.removeEventListener("dispose",ln),dm(U)}function dm(w){fm(w),G.remove(w)}function fm(w){let U=G.get(w).programs;U!==void 0&&(U.forEach(function(W){de.releaseProgram(W)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,W,z,H,ye){U===null&&(U=ke);let Te=H.isMesh&&H.matrixWorld.determinantAffine()<0,_e=gm(w,U,W,z,H);M.setMaterial(z,Te);let Ee=W.index,Pe=1;if(z.wireframe===!0){if(Ee=K.getWireframeAttribute(W),Ee===void 0)return;Pe=2}let $e=W.drawRange,rt=W.attributes.position,Ae=$e.start*Pe,gt=($e.start+$e.count)*Pe;ye!==null&&(Ae=Math.max(Ae,ye.start*Pe),gt=Math.min(gt,(ye.start+ye.count)*Pe)),Ee!==null?(Ae=Math.max(Ae,0),gt=Math.min(gt,Ee.count)):rt!=null&&(Ae=Math.max(Ae,0),gt=Math.min(gt,rt.count));let Gt=gt-Ae;if(Gt<0||Gt===1/0)return;Me.setup(H,z,_e,W,Ee);let Ct,Tt=pe;if(Ee!==null&&(Ct=ce.get(Ee),Tt=J,Tt.setIndex(Ct)),H.isMesh)z.wireframe===!0?(M.setLineWidth(z.wireframeLinewidth*Ke()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(H.isLine){let ai=z.linewidth;ai===void 0&&(ai=1),M.setLineWidth(ai*Ke()),H.isLineSegments?Tt.setMode(D.LINES):H.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else H.isPoints?Tt.setMode(D.POINTS):H.isSprite&&Tt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ai=H._multiDrawStarts,we=H._multiDrawCounts,hi=H._multiDrawCount,ut=Ee?ce.get(Ee).bytesPerElement:1,Fi=G.get(z).currentProgram.getUniforms();for(let cn=0;cn<hi;cn++)Fi.setValue(D,"_gl_DrawID",cn),Tt.render(ai[cn]/ut,we[cn])}else if(H.isInstancedMesh)Tt.renderInstances(Ae,Gt,H.count);else if(W.isInstancedBufferGeometry){let ai=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,ai);Tt.renderInstances(Ae,Gt,we)}else Tt.render(Ae,Gt)};function od(w,U,W,z){N!==null&&w.isNodeMaterial&&N.setObject(z,w),re===!0&&Ue.setState(w,W,!1),w.transparent===!0&&w.side===lt&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,uo(w,U,z),w.side=Vi,w.needsUpdate=!0,uo(w,U,z),w.side=lt):uo(w,U,z)}this.compile=function(w,U,W=null){W===null&&(W=w),N!==null&&N.renderStart(w,U,W),T=fe.get(W),T.init(U),v.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,re=Ue.init(this.clippingPlanes,ae),re===!0&&Ue.setGlobalState(this.clippingPlanes,U),N!==null&&Ge.render(T.state.shadowsArray,W,U);let z=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ye=H.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let _e=ye[Te];od(_e,W,U,H),z.add(_e)}else od(ye,W,U,H),z.add(ye)}),T=v.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(w,U,W=null){let z=this.compile(w,U,W);return new Promise(H=>{function ye(){if(z.forEach(function(Te){let Ee=G.get(Te).currentProgram;(Ee===void 0||Ee.isReady())&&z.delete(Te)}),z.size===0){H(w);return}setTimeout(ye,10)}st.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Xc=null;function pm(w){Xc&&Xc(w)}function ld(){fs.stop()}function cd(){fs.start()}let fs=new Ap;fs.setAnimationLoop(pm),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(w){Xc=w,Ce.setAnimationLoop(w),w===null?fs.stop():fs.start()},Ce.addEventListener("sessionstart",ld),Ce.addEventListener("sessionend",cd),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(w,U);let W=Ce.enabled===!0&&Ce.isPresenting===!0,z=E!==null&&(ne===null||W)&&E.begin(P,ne);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(U),U=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,U,ne),T=fe.get(w,v.length),T.init(U),T.state.textureUnits=Y.getTextureUnits(),v.push(T),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(oe,Qi,U.reversedDepth),ae=this.localClippingEnabled,re=Ue.init(this.clippingPlanes,ae),b=ge.get(w,A.length),b.init(),A.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){let Te=P.xr.getDepthSensingMesh();Te!==null&&qc(Te,U,-1/0,P.sortObjects)}qc(w,U,0,P.sortObjects),b.finish(),N!==null&&N.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(xe,We),qe=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,qe&&je.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ue.beginShadows();let H=T.state.shadowsArray;if(Ge.render(H,w,U),re===!0&&Ue.endShadows(),(z&&E.hasRenderPass())===!1){let Te=b.opaque,_e=b.transmissive;if(T.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(_e.length>0)for(let Pe=0,$e=Ee.length;Pe<$e;Pe++){let rt=Ee[Pe];ud(Te,_e,w,rt)}qe&&je.render(w);for(let Pe=0,$e=Ee.length;Pe<$e;Pe++){let rt=Ee[Pe];hd(b,w,rt,rt.viewport)}}else _e.length>0&&ud(Te,_e,w,U),qe&&je.render(w),hd(b,w,U)}ne!==null&&q===0&&(Y.updateMultisampleRenderTarget(ne),Y.updateRenderTargetMipmap(ne)),z&&E.end(P),w.isScene===!0&&w.onAfterRender(P,w,U),Me.resetDefaultState(),X=-1,Z=null,v.pop(),v.length>0?(T=v[v.length-1],Y.setTextureUnits(T.state.textureUnits),re===!0&&Ue.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function qc(w,U,W,z){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(te)){z&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let Te=$.update(w),_e=w.material;_e.visible&&b.push(w,Te,_e,W,He.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(te))){let Te=$.update(w),_e=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),He.copy(Te.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(_e)){let Ee=Te.groups;for(let Pe=0,$e=Ee.length;Pe<$e;Pe++){let rt=Ee[Pe],Ae=_e[rt.materialIndex];Ae&&Ae.visible&&b.push(w,Te,Ae,W,He.z,rt,U)}}else _e.visible&&b.push(w,Te,_e,W,He.z,null,U)}}let ye=w.children;for(let Te=0,_e=ye.length;Te<_e;Te++)qc(ye[Te],U,W,z)}function hd(w,U,W,z){let{opaque:H,transmissive:ye,transparent:Te}=w;T.setupLightsView(W),re===!0&&Ue.setGlobalState(P.clippingPlanes,W),z&&M.viewport(Q.copy(z)),H.length>0&&ho(H,U,W),ye.length>0&&ho(ye,U,W),Te.length>0&&ho(Te,U,W),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ud(w,U,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Ae=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Wt(1,1,{generateMipmaps:!0,type:Ae?si:wi,minFilter:Si,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ye=T.state.transmissionRenderTarget[z.id],Te=z.viewport||Q;ye.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);let _e=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(ye),P.getClearColor(ft),nt=P.getClearAlpha(),nt<1&&P.setClearColor(16777215,.5),P.clear(),qe&&je.render(W);let $e=P.toneMapping;P.toneMapping=rn;let rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),re===!0&&Ue.setGlobalState(P.clippingPlanes,z),ho(w,W,z),Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let gt=0,Gt=U.length;gt<Gt;gt++){let Ct=U[gt],{object:Tt,geometry:ai,material:we,group:hi}=Ct;if(we.side===lt&&Tt.layers.test(z.layers)){let ut=we.side;we.side=Kt,we.needsUpdate=!0,dd(Tt,W,z,ai,we,hi),we.side=ut,we.needsUpdate=!0,Ae=!0}}Ae===!0&&(Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye))}P.setRenderTarget(_e,Ee,Pe),P.setClearColor(ft,nt),rt!==void 0&&(z.viewport=rt),P.toneMapping=$e}function ho(w,U,W){let z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ye=w.length;H<ye;H++){let Te=w[H],{object:_e,geometry:Ee,group:Pe}=Te,$e=Te.material;$e.allowOverride===!0&&z!==null&&($e=z),_e.layers.test(W.layers)&&dd(_e,U,W,Ee,$e,Pe)}}function dd(w,U,W,z,H,ye){N!==null&&H.isNodeMaterial&&N.setObject(w,H),w.onBeforeRender(P,U,W,z,H,ye),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(P,U,W,z,w,ye),H.transparent===!0&&H.side===lt&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,P.renderBufferDirect(W,U,z,H,w,ye),H.side=Vi,H.needsUpdate=!0,P.renderBufferDirect(W,U,z,H,w,ye),H.side=lt):P.renderBufferDirect(W,U,z,H,w,ye),w.onAfterRender(P,U,W,z,H,ye)}function uo(w,U,W){U.isScene!==!0&&(U=ke);let z=G.get(w),H=T.state.lights,ye=T.state.shadowsArray,Te=H.state.version,_e=de.getParameters(w,H.state,ye,U,W,T.state.lightProbeGridArray),Ee=de.getProgramCacheKey(_e),Pe=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=le.get(w.envMap||z.environment,$e),z.envMapRotation=z.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",ln),Pe=new Map,z.programs=Pe);let rt=Pe.get(Ee);if(rt!==void 0){if(z.currentProgram===rt&&z.lightsStateVersion===Te)return pd(w,_e),rt}else _e.uniforms=de.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,W,_e),w.onBeforeCompile(_e,P),rt=de.acquireProgram(_e,Ee),Pe.set(Ee,rt),z.uniforms=_e.uniforms;let Ae=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Ue.uniform),pd(w,_e),z.needsLights=_m(w),z.lightsStateVersion=Te,z.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.sunLights.value=H.state.sun,Ae.sunLightShadows.value=H.state.sunShadow,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.sunShadowMatrix.value=H.state.sunShadowMatrix,Ae.sunShadowCascade.value=H.state.sunShadowCascade,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=rt,z.uniformsList=null,rt}function fd(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Nr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function pd(w,U){let W=G.get(w);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function mm(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let W=0,z=w.length;W<z;W++){let H=w[W];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function gm(w,U,W,z,H){U.isScene!==!0&&(U=ke),Y.resetTextureUnits();let ye=U.fog,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,_e=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ze.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Pe=le.get(z.envMap||Te,Ee),$e=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,rt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!W.morphAttributes.position,gt=!!W.morphAttributes.normal,Gt=!!W.morphAttributes.color,Ct=rn;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ct=P.toneMapping);let Tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ai=Tt!==void 0?Tt.length:0,we=G.get(z),hi=T.state.lights;if(re===!0&&(ae===!0||w!==Z)){let At=w===Z&&z.id===X;Ue.setState(z,w,At)}let ut=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==hi.state.version||we.outputColorSpace!==_e||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Pe||z.fog===!0&&we.fog!==ye||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ue.numPlanes||we.numIntersection!==Ue.numIntersection)||we.vertexAlphas!==$e||we.vertexTangents!==rt||we.morphTargets!==Ae||we.morphNormals!==gt||we.morphColors!==Gt||we.toneMapping!==Ct||we.morphTargetsCount!==ai||!!we.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,we.__version=z.version);let Fi=we.currentProgram;ut===!0&&(Fi=uo(z,U,H),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Fi,we));let cn=!1,qn=!1,Hs=!1,yt=Fi.getUniforms(),Ot=we.uniforms;if(M.useProgram(Fi.program)&&(cn=!0,qn=!0,Hs=!0),z.id!==X&&(X=z.id,qn=!0),we.needsLights){let At=mm(T.state.lightProbeGridArray,H);we.lightProbeGrid!==At&&(we.lightProbeGrid=At,qn=!0)}if(cn||Z!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(D,"projectionMatrix",w.projectionMatrix),yt.setValue(D,"viewMatrix",w.matrixWorldInverse);let Kn=yt.map.cameraPosition;Kn!==void 0&&Kn.setValue(D,he.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,qn=!0,Hs=!0)}if(we.needsLights&&(hi.state.sunShadowMap.length>0&&yt.setValue(D,"sunShadowMap",hi.state.sunShadowMap,Y),hi.state.directionalShadowMap.length>0&&yt.setValue(D,"directionalShadowMap",hi.state.directionalShadowMap,Y),hi.state.spotShadowMap.length>0&&yt.setValue(D,"spotShadowMap",hi.state.spotShadowMap,Y),hi.state.pointShadowMap.length>0&&yt.setValue(D,"pointShadowMap",hi.state.pointShadowMap,Y)),H.isSkinnedMesh){yt.setOptional(D,H,"bindMatrix"),yt.setOptional(D,H,"bindMatrixInverse");let At=H.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),yt.setValue(D,"boneTexture",At.boneTexture,Y))}H.isBatchedMesh&&(yt.setOptional(D,H,"batchingTexture"),yt.setValue(D,"batchingTexture",H._matricesTexture,Y),yt.setOptional(D,H,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",H._indirectTexture,Y),yt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",H._colorsTexture,Y));let Yn=W.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&F.update(H,W,Fi),(qn||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,yt.setValue(D,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Ot.envMapIntensity.value=U.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Gy()),qn){if(yt.setValue(D,"toneMappingExposure",P.toneMappingExposure),we.needsLights&&xm(Ot,Hs),ye&&z.fog===!0&&Ne.refreshFogUniforms(Ot,ye),Ne.refreshMaterialUniforms(Ot,z,ee,j,T.state.transmissionRenderTarget[w.id]),we.needsLights&&we.lightProbeGrid){let At=we.lightProbeGrid;Ot.probesSH.value=At.texture,Ot.probesMin.value.copy(At.boundingBox.min),Ot.probesMax.value.copy(At.boundingBox.max),Ot.probesResolution.value.copy(At.resolution)}Nr.upload(D,fd(we),Ot,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Nr.upload(D,fd(we),Ot,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(D,"center",H.center),yt.setValue(D,"modelViewMatrix",H.modelViewMatrix),yt.setValue(D,"normalMatrix",H.normalMatrix),yt.setValue(D,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let At=z.uniformsGroups;for(let Kn=0,Gs=At.length;Kn<Gs;Kn++){let gd=At[Kn];se.update(gd,Fi),se.bind(gd,Fi)}}return Fi}function xm(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function _m(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(w,U,W){let z=G.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=U,G.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let W=G.get(w);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,W=0){ne=w,V=U,q=W;let z=null,H=!1,ye=!1;if(w){let _e=G.get(w);if(_e.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,_e.__webglFramebuffer),Q.copy(w.viewport),Re.copy(w.scissor),Se=w.scissorTest,M.viewport(Q),M.scissor(Re),M.setScissorTest(Se),X=-1;return}else if(_e.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(_e.__hasExternalTextures)Y.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let $e=w.depthTexture;if(_e.__boundDepthTexture!==$e){if($e!==null&&G.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}let Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Pe=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?z=Pe[U][W]:z=Pe[U],H=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?z=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[W]:z=Pe,Q.copy(w.viewport),Re.copy(w.scissor),Se=w.scissorTest}else Q.copy(be).multiplyScalar(ee).floor(),Re.copy(Xe).multiplyScalar(ee).floor(),Se=_t;if(W!==0&&(z=k),M.bindFramebuffer(D.FRAMEBUFFER,z)&&M.drawBuffers(w,z),M.viewport(Q),M.scissor(Re),M.setScissorTest(Se),H){let _e=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,W)}else if(ye){let _e=U;for(let Ee=0;Ee<w.textures.length;Ee++){let Pe=G.get(w.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Pe.__webglTexture,W,_e)}}else if(w!==null&&W!==0){let _e=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,W)}X=-1};function md(w){let U=G.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=C.textureFormatReadable(w.format),U.__typeReadable=C.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,W,z,H,ye,Te,_e=0){if(!(w&&w.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee){M.bindFramebuffer(D.FRAMEBUFFER,Ee);try{let Pe=w.textures[_e],$e=Pe.format,rt=Pe.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);let Ae=md(Pe);if(Ae.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-z&&W>=0&&W<=w.height-H&&D.readPixels(U,W,z,H,me.convert($e),me.convert(rt),ye)}finally{let Pe=ne!==null?G.get(ne).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,U,W,z,H,ye,Te,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee)if(U>=0&&U<=w.width-z&&W>=0&&W<=w.height-H){M.bindFramebuffer(D.FRAMEBUFFER,Ee);let Pe=w.textures[_e],$e=Pe.format,rt=Pe.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);let Ae=md(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,gt),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(U,W,z,H,me.convert($e),me.convert(rt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Gt=ne!==null?G.get(ne).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Gt);let Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jf(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,gt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(gt),D.deleteSync(Ct),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,W=0){let z=Math.pow(2,-W),H=Math.floor(w.image.width*z),ye=Math.floor(w.image.height*z),Te=U!==null?U.x:0,_e=U!==null?U.y:0;Y.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Te,_e,H,ye),M.unbindTexture()},this.copyTextureToTexture=function(w,U,W=null,z=null,H=0,ye=0){let Te,_e,Ee,Pe,$e,rt,Ae,gt,Gt,Ct=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(W!==null)Te=W.max.x-W.min.x,_e=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,$e=W.min.y,rt=W.isBox3?W.min.z:0;else{let Ot=Math.pow(2,-H);Te=Math.floor(Ct.width*Ot),_e=Math.floor(Ct.height*Ot),w.isDataArrayTexture?Ee=Ct.depth:w.isData3DTexture?Ee=Math.floor(Ct.depth*Ot):Ee=1,Pe=0,$e=0,rt=0}z!==null?(Ae=z.x,gt=z.y,Gt=z.z):(Ae=0,gt=0,Gt=0);let Tt=me.convert(U.format),ai=me.convert(U.type),we;U.isData3DTexture?(Y.setTexture3D(U,0),we=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),we=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),we=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let hi=M.getParameter(D.UNPACK_ROW_LENGTH),ut=M.getParameter(D.UNPACK_IMAGE_HEIGHT),Fi=M.getParameter(D.UNPACK_SKIP_PIXELS),cn=M.getParameter(D.UNPACK_SKIP_ROWS),qn=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Ct.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ct.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),M.pixelStorei(D.UNPACK_SKIP_ROWS,$e),M.pixelStorei(D.UNPACK_SKIP_IMAGES,rt);let Hs=w.isDataArrayTexture||w.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let Ot=G.get(w),Yn=G.get(U),At=G.get(Ot.__renderTarget),Kn=G.get(Yn.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,At.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Gs=0;Gs<Ee;Gs++)Hs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(w).__webglTexture,H,rt+Gs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(U).__webglTexture,ye,Gt+Gs)),D.blitFramebuffer(Pe,$e,Te,_e,Ae,gt,Te,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||G.has(w)){let Ot=G.get(w),Yn=G.get(U);M.bindFramebuffer(D.READ_FRAMEBUFFER,L),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let At=0;At<Ee;At++)Hs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,H,rt+At):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,H),yt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yn.__webglTexture,ye,Gt+At):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yn.__webglTexture,ye),H!==0?D.blitFramebuffer(Pe,$e,Te,_e,Ae,gt,Te,_e,D.COLOR_BUFFER_BIT,D.NEAREST):yt?D.copyTexSubImage3D(we,ye,Ae,gt,Gt+At,Pe,$e,Te,_e):D.copyTexSubImage2D(we,ye,Ae,gt,Pe,$e,Te,_e);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(we,ye,Ae,gt,Gt,Te,_e,Ee,Tt,ai,Ct.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(we,ye,Ae,gt,Gt,Te,_e,Ee,Tt,Ct.data):D.texSubImage3D(we,ye,Ae,gt,Gt,Te,_e,Ee,Tt,ai,Ct):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Ae,gt,Te,_e,Tt,ai,Ct.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Ae,gt,Ct.width,Ct.height,Tt,Ct.data):D.texSubImage2D(D.TEXTURE_2D,ye,Ae,gt,Te,_e,Tt,ai,Ct);M.pixelStorei(D.UNPACK_ROW_LENGTH,hi),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Fi),M.pixelStorei(D.UNPACK_SKIP_ROWS,cn),M.pixelStorei(D.UNPACK_SKIP_IMAGES,qn),ye===0&&U.generateMipmaps&&D.generateMipmap(we),M.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){V=0,q=0,ne=null,M.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Vy=new xn(-1,1,1,-1,0,1),vu=class extends ze{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},Wy=new vu,Or=class{constructor(e){this._mesh=new Fe(Wy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Bs=class extends an{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Or(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bc=class extends Bs{constructor(e){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},inverseProjection:{value:e.projectionMatrixInverse},projection:{value:e.projectionMatrix},resolution:{value:new ie(1,1)},strength:{value:.82}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
 varying vec2 vUv;uniform sampler2D tDiffuse;uniform sampler2D tDepth;uniform mat4 inverseProjection;uniform mat4 projection;uniform vec2 resolution;uniform float strength;
 vec3 pointAt(vec2 uv){float depth=texture2D(tDepth,uv).x;vec4 p=inverseProjection*vec4(uv*2.-1.,depth*2.-1.,1.);return p.xyz/p.w;}
 void main(){vec4 color=texture2D(tDiffuse,vUv);float depth=texture2D(tDepth,vUv).x;vec3 p=pointAt(vUv);vec3 normal=normalize(cross(dFdx(p),dFdy(p)));float occlusion=0.;
 if(depth<.99999){vec2 radius=clamp(vec2(projection[0][0],projection[1][1])*.62/max(-p.z,.5),vec2(2.)/resolution,vec2(.045));
 for(int i=0;i<12;i++){float a=float(i)*2.399963;float ring=sqrt((float(i)+.5)/12.);vec2 coord=vUv+vec2(cos(a),sin(a))*radius*ring;if(any(lessThan(coord,vec2(0.)))||any(greaterThan(coord,vec2(1.))))continue;vec3 delta=pointAt(coord)-p;float distanceToPoint=length(delta);float cosine=max(dot(normal,delta)/max(distanceToPoint,.001)-.12,0.);occlusion+=cosine*(1.-smoothstep(.12,1.25,distanceToPoint))*smoothstep(.012,.06,distanceToPoint);}
 }
 color.rgb*=1.-strength*clamp(occlusion/5.,0.,.65);gl_FragColor=color;
 }`}),this.camera=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}render(e,t,i,...n){this.uniforms.tDepth.value=i.depthTexture,super.render(e,t,i,...n)}},Sc=class extends Bs{constructor(){super({uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1,1)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform vec2 resolution;
 void main(){vec4 source=texture2D(tDiffuse,vUv);vec3 glow=vec3(0.);for(int i=0;i<12;i++){float a=float(i)*2.399963;float radius=2.+float(i)*.8;vec3 c=texture2D(tDiffuse,vUv+vec2(cos(a),sin(a))*radius/resolution).rgb;glow+=max(c-vec3(1.15),vec3(0.));}vec3 color=source.rgb+glow*.018;float luminance=dot(color,vec3(.2126,.7152,.0722));color=mix(vec3(luminance),color,1.045);vec2 d=vUv-.5;color*=1.-.14*dot(d,d);gl_FragColor=vec4(color,source.a);}`})}setSize(e,t){this.uniforms.resolution.value.set(e,t)}};var Np=`
float jamHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float jamNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(jamHash(i),jamHash(i+vec2(1,0)),f.x),mix(jamHash(i+vec2(0,1)),jamHash(i+vec2(1,1)),f.x),f.y);}
`;function Br(s,e,t,i=null,n=null){let r=s.onBeforeCompile;s.onBeforeCompile=o=>{r.call(s,o),o.uniforms.jamTime=t,i&&(o.uniforms.jamAlbedo={value:i}),n&&(o.uniforms.jamPaths={value:n.map(([c,h])=>new ot(...c,...h))},o.uniforms.jamWidths={value:n.map(c=>c[2]/2)}),o.vertexShader=`varying vec3 vJamWorld; varying vec2 vJamUV;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec4 jamWorld=vec4(transformed,1.);
#ifdef USE_INSTANCING
jamWorld=instanceMatrix*jamWorld;
#endif
vJamWorld=(modelMatrix*jamWorld).xyz;vJamUV=uv;`),o.fragmentShader=(i?`uniform sampler2D jamAlbedo;
`:"")+`varying vec3 vJamWorld; varying vec2 vJamUV;
`+Np+o.fragmentShader,n&&(o.fragmentShader=`uniform vec4 jamPaths[${n.length}]; uniform float jamWidths[${n.length}];
`+o.fragmentShader);let l="";e==="grass"&&(l="float broad=jamNoise(vJamWorld.xz*.16);diffuseColor.rgb*=mix(vec3(.86,.96,.78),vec3(1.17,1.13,.91),broad);"),e==="grass"&&i&&(l+="vec3 pigment=texture2D(jamAlbedo,vJamWorld.xz*.24).rgb;vec3 pigment2=texture2D(jamAlbedo,mat2(.8,-.6,.6,.8)*vJamWorld.xz*.11+vec2(.17,.37)).rgb;diffuseColor.rgb=mix(diffuseColor.rgb,mix(pigment,pigment2,.35)*vec3(.58,.73,.57),.38);"),e==="grass"&&n&&(l+=`
float pathDistance=1000.;float lateral=0.;
for(int i=0;i<${n.length};i++){vec2 a=jamPaths[i].xy,b=jamPaths[i].zw,ab=b-a;float along=clamp(dot(vJamWorld.xz-a,ab)/dot(ab,ab),0.,1.);float d=length(vJamWorld.xz-a-ab*along)-jamWidths[i];if(d<pathDistance){pathDistance=d;lateral=abs(dot(vJamWorld.xz-a,normalize(vec2(ab.y,-ab.x))));}}
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
diffuseColor.rgb=mix(diffuseColor.rgb,earth*(1.-tracks),max(trail,wear*.35));`),e==="path"&&(l="float grain=jamNoise(vJamWorld.xz*24.);float broad=jamNoise(vJamWorld.xz*.8);diffuseColor.rgb*=mix(.9,1.07,broad)*mix(.94,1.05,grain);float edge=abs(vJamUV.x-.5)*2.;if(edge>.84+jamNoise(vJamWorld.xz*7.)*.16)discard;"),e==="canvas"&&(l="float weave=sin(vJamWorld.x*460.+vJamWorld.z*460.)*sin(vJamWorld.y*460.);float wash=jamNoise(vJamWorld.xz*1.6+vJamWorld.y);diffuseColor.rgb*=.94+.055*wash+.015*weave;"),e==="mountain"&&(l="float forest=jamNoise(vJamWorld.xz*.19+vJamWorld.y*.33);float folds=jamNoise(vJamWorld.xz*.045+vJamWorld.y*.12);diffuseColor.rgb*=mix(.79,1.08,folds)*mix(.84,1.07,forest);"),e==="cloth"&&(l="float fibre=sin(vJamWorld.y*280.)*sin((vJamWorld.x+vJamWorld.z)*280.);diffuseColor.rgb*=.985+.015*fibre;"),e==="wood"&&(l="float grain=jamNoise(vec2((vJamWorld.x+vJamWorld.z)*34.,vJamWorld.y*.8));diffuseColor.rgb*=mix(.73,1.11,grain);"),o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+l)};let a=s.customProgramCacheKey();s.customProgramCacheKey=()=>a+"|finish-"+e+(i?"|art-v2":"")+(n?"|routes-v4-"+n.length:""),s.needsUpdate=!0}function Up(s,e,t){let i=new ze;i.setAttribute("position",new De([-.026,0,0,.026,0,0,-.015,.55,.035,.015,.55,.035,.012,1,.12],3)),i.setAttribute("uv",new De([0,0,1,0,0,.55,1,.55,.5,1],2)),i.setIndex([0,1,2,1,3,2,2,3,4]),i.computeVertexNormals();let n=2049,r=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),a=[];for(let u=0;u<8e4;u++){let d=r()*116-58,f=r()*84-47;if(e(d,f)||t(d,f)||Math.abs(d)<10&&f<-20&&f>-32)continue;let p=.5+.5*Math.sin(d*.55+Math.sin(f*.31)*2);r()>.35+p*.65||a.push([d,f,r(),r()])}let o=new wt({color:16777215,roughness:.96,side:lt});o.onBeforeCompile=u=>{u.uniforms.jamTime=s.time,u.vertexShader=`uniform float jamTime;varying float vBladeHeight;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vBladeHeight=uv.y;vec3 origin=instanceMatrix[3].xyz;
 transformed.x+=sin(jamTime*1.3+origin.x*.6+origin.z*.45)*uv.y*uv.y*.075;
 transformed.z+=sin(jamTime*.8+origin.z*.7)*uv.y*uv.y*.035;`),u.fragmentShader=`varying float vBladeHeight;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(vec3(.72,.83,.5),vec3(1.08,1.07,.79),vBladeHeight);`)},o.customProgramCacheKey=()=>"jam-meadow-v2";let l=new ni(i,o,a.length),c=new xt,h=new ve;for(let u=0;u<a.length;u++){let[d,f,p,x]=a[u];c.position.set(d,-.016,f),c.rotation.y=p*Math.PI*2,c.scale.set(.65+x*.55,.07+p*.14,.65+x*.55),c.updateMatrix(),l.setMatrixAt(u,c.matrix),h.setHSL(.2+x*.045,.28+p*.12,.31+p*.1),l.setColorAt(u,h)}return l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0,l.receiveShadow=!0,l.castShadow=!1,l.computeBoundingSphere(),l.name="Wind-swept meadow",s.scene.add(l),s.meadow=l,s.low&&(l.count=Math.floor(a.length*.25)),l}function Xy(s,e){let t=new zt(1,1);t.rotateX(-Math.PI/2);let i=new Dt({transparent:!0,depthWrite:!1,uniforms:{},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){vec2 q=abs(vUv-.5)*2.;float shade=pow(max(0.,1.-pow(q.x,2.)),2.)*pow(max(0.,1.-pow(q.y,2.)),2.);gl_FragColor=vec4(.10,.16,.085,shade*.24);}"}),n=[];for(let[r,a]of e.instances){if(/tree|grass|sky|record_|jar_|bottle|kickball|backpack/.test(r))continue;a.updateWorldMatrix(!0,!0);let o=new ii().setFromObject(a),l=o.getSize(new R);if(o.min.y>.4||l.x<.1)continue;let c=new Fe(t,i);c.name=r+"_contact",c.position.set(a.position.x,.026,a.position.z);let h=r.startsWith("tent");c.scale.set(h?l.x*1.12:Math.max(.55,l.x*1.25),1,h?l.z*1.08:Math.max(.5,l.z*1.3)),s.scene.add(c),n.push({mesh:c,root:a})}s.contactShadows=n}function Fp(s,e){let t=new Set;e.group.traverse(i=>{if(i.isMesh)for(let n of Array.isArray(i.material)?i.material:[i.material]){if(t.has(n))continue;t.add(n);let r=n.name;/canvas|denim/.test(r)&&(n.roughness=.91,s.surfaceDetail&&(n.bumpMap=s.surfaceDetail(6),n.bumpScale=.007),Br(n,"canvas",s.time)),/wood|bark/.test(r)&&(n.roughness=.84,s.surfaceDetail&&(n.bumpMap=s.surfaceDetail(5),n.bumpScale=.012),Br(n,"wood",s.time)),/metal_pole/.test(r)&&(n.metalness=.68,n.roughness=.34),/vinyl_black/.test(r)&&(n.metalness=.16,n.roughness=.3),/skin/.test(r)&&(n.roughness=.82,n.envMapIntensity=.6),r==="painted_character_matte"&&(n.roughness=.92,Br(n,"cloth",s.time))}}),qy(s,e),Xy(s,e)}function qy(s,e){let t=s.batches?.find(n=>n.nodes[0].tex?.id&&n.nodes[0].props[1]===4),i=s.geometries?.get("canopy");if(!(!t||!i))for(let[n,r]of e.instances){if(!/^kit_tree_(oak|birch)$/.test(n)||r.userData.refinedCanopy)continue;let a=n.endsWith("birch"),o=new ni(i,t.mesh.material,70),l=new xt;o.name=n+"_leaf_clusters",o.castShadow=!0,o.receiveShadow=!0,o.customDepthMaterial=t.mesh.customDepthMaterial;for(let c=0;c<7;c++)for(let h=0;h<10;h++){let u=c*2.4,d=h*2.399+c*.7,f=.35+h%3*.2;l.position.set(Math.sin(u)*(a?.6:1.2)+Math.cos(d)*f,3.4+c%3*.75+Math.sin(h*1.7)*.5,-Math.cos(u)*.9+Math.sin(d)*f),l.rotation.set(Math.sin(h*2.3)*.65,d,Math.cos(h)*.4),l.scale.set(a?1.5:1.9,a?1.9:1.8,1),l.updateMatrix(),o.setMatrixAt(c*10+h,l.matrix),o.setColorAt(c*10+h,new ve(h%3?"#c4d5b2":"#e0ddb4"))}r.traverse(c=>{c.isMesh&&/^(foliage_card|leaf_light)$/.test(c.material?.name)&&(c.visible=!1)}),o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.computeBoundingSphere(),r.add(o),r.userData.refinedCanopy=!0}}function Op(s){let e=new Dt({side:Kt,depthWrite:!1,uniforms:{jamTime:s.time,dusk:{value:0},sunDirection:{value:new R(-.55,.82,-.48).normalize()},zenith:{value:new ve("#5c9fcd")},horizon:{value:new ve("#b6d4e3")}},vertexShader:"varying vec3 vSky;void main(){vSky=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vSky;uniform float jamTime;uniform float dusk;uniform vec3 sunDirection;uniform vec3 zenith;uniform vec3 horizon;
${Np}
float fbm(vec2 p){return jamNoise(p)*.53+jamNoise(p*2.03)*.27+jamNoise(p*4.07)*.13+jamNoise(p*8.11)*.07;}
void main(){vec3 direction=normalize(vSky-cameraPosition);float elevation=max(direction.y,0.);vec3 top=mix(zenith,vec3(.23,.30,.42),dusk);vec3 edge=mix(horizon,vec3(.87,.48,.28),dusk);vec3 sky=mix(edge,top,smoothstep(0.,.68,elevation));
vec2 plane=direction.xz/max(.13,direction.y)*1.3+vec2(jamTime*.002,0.);float cloud=fbm(plane);float cover=smoothstep(.54,.69,cloud)*smoothstep(.06,.23,elevation);float cloudShade=fbm(plane+vec2(.10,.18));vec3 cloudColor=mix(vec3(.63,.71,.74),vec3(1.,.96,.84),cloudShade);cloudColor=mix(cloudColor,vec3(.96,.64,.40),dusk*.5);sky=mix(sky,cloudColor,cover*.9);float sun=pow(max(dot(direction,normalize(sunDirection)),0.),160.);sky+=vec3(1.,.79,.45)*sun*.5;gl_FragColor=vec4(sky,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),t=new Fe(new Yt(700,32,16),e);t.name="Festival cloud sky",t.frustumCulled=!1,s.scene.add(t),s.cloudSky=t,s.sky.visible=!1}function qi(s){let e=new Map,t=new Map,i=s.clone();return Bp(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,a=e.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Bp(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)Bp(s.children[i],e.children[i],t)}function yu(s,e=!1){let t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ze,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=kp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=kp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function kp(s){let e,t,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Lt(a,t,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}function Mu(s,e){if(e===Kh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ir||e===Ja){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===Ir)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var wc=class extends gn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Tc(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tc(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hu(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=kn.extractUrlBase(e);a=kn.resolveURL(c,this.path)}else a=kn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wp){try{a[it.KHR_BINARY_GLTF]=new Gu(e)}catch(u){n&&n(u);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ju(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:a[u]=new Eu;break;case it.KHR_DRACO_MESH_COMPRESSION:a[u]=new Vu(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[u]=new Wu;break;case it.KHR_MESH_QUANTIZATION:a[u]=new Xu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function Yy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Ht(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tu=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],di);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new os(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gi(h),c.distance=u;break;case"spot":c=new Da(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Eu=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return kt}extendParams(e,t,i){let n=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],di),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(n)}},Au=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(r,r)}return Promise.all(n)}},Cu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Iu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],di)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,at)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Lu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Du=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(r[0],r[1],r[2],di),Promise.all(n)}},Nu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(r[0],r[1],r[2],di),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,at)),Promise.all(n)}},Fu=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Ou=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Mi:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Bu=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ku=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},zu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Tc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},Hu=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Yi.TRIANGLES&&c.mode!==Yi.TRIANGLE_STRIP&&c.mode!==Yi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let x=new Le,m=new R,g=new Je,y=new R(1,1,1),S=new ni(p.geometry,p.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,x.compose(m,g,y));let _=null;for(let b in l)if(b==="_COLOR_0"){let T=l[b];S.instanceColor=new Dn(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(_===null){let A=S.geometry;_=new ze,_.name=A.name;for(let v in A.attributes)_.setAttribute(v,A.attributes[v]);for(let v in A.morphAttributes)_.morphAttributes[v]=A.morphAttributes[v];A.index!==null&&_.setIndex(A.index),_.morphTargetsRelative=A.morphTargetsRelative;for(let v of A.groups)_.addGroup(v.start,v.count,v.materialIndex);A.boundingBox!==null&&(_.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(_.boundingSphere=A.boundingSphere.clone()),_.drawRange.start=A.drawRange.start,_.drawRange.count=A.drawRange.count,_.userData=Object.assign({},A.userData),S.geometry=_}let T=l[b];_.setAttribute(b,new Dn(T.array,T.itemSize,T.normalized))}xt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Wp="glTF",to=12,zp={JSON:1313821514,BIN:5130562},Gu=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,to),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-to,r=new DataView(e,to),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===zp.JSON){let c=new Uint8Array(e,to+a,o);this.content=i.decode(c)}else if(l===zp.BIN){let c=to+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Yu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Yu[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=kr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(f)},o,c,di,d)})})}},Wu=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Xu=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Ec=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,p=e*c,x=p-c,m=-2*f+3*d,g=f-d,y=1-m,S=g-d+u;for(let _=0;_!==o;_++){let b=a[x+_+o],T=a[x+_+l]*h,A=a[p+_+o],v=a[p+_]*h;r[_]=y*b+S*T+m*A+g*v}return r}},Ky=new Je,qu=class extends Ec{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return Ky.fromArray(r).normalize().toArray(r),r}},Yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hp={9728:Bt,9729:Pt,9984:El,9985:Rr,9986:Us,9987:Si},Gp={33071:ki,33648:cr,10497:_i},bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jy={CUBICSPLINE:void 0,LINEAR:Ss,STEP:bs},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),s.DefaultMaterial}function ks(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function yn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zy(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function $y(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qy(s){let e,t=s.extensions&&s.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wu(t.attributes):e=s.indices+":"+wu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+wu(s.targets[i]);return e}function wu(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Ku(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var tM=new Le,ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?this.textureLoader=new sn(this.options.manager):this.textureLoader=new Na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return ks(r,o,n),yn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(kn.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=bu[n.type],o=kr[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Lt(c,a,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=bu[n.type],c=kr[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0,x,m;if(f&&f!==u){let g=Math.floor(d/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count,S=t.cache.get(y);S||(x=new c(o,g*f,n.count*f/h),S=new Pn(x,f/h),t.cache.add(y,S)),m=new Hi(S,l,d%f/h,p)}else o===null?x=new c(n.count*l):x=new c(o,d,n.count*l),m=new Lt(x,l,p);if(n.sparse!==void 0){let g=bu.SCALAR,y=kr[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,b=new y(a[1],S,n.sparse.count*g),T=new c(a[2],_,n.sparse.count*l);o!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,v=b.length;A<v;A++){let E=b[A];if(m.setX(E,T[A*l]),l>=2&&m.setY(E,T[A*l+1]),l>=3&&m.setZ(E,T[A*l+2]),l>=4&&m.setW(E,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hp[d.magFilter]||Pt,h.minFilter=Hp[d.minFilter]||Si,h.wrapS=Gp[d.wrapS]||_i,h.wrapT=Gp[d.wrapT]||_i,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==Pt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let m=new qt(x);m.needsUpdate=!0,d(m)}),t.load(kn.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),yn(u,a),u.userData.mimeType=a.mimeType||eM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new fn,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ci,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return wt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){let u=n[it.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],di),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,at)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=lt);let h=r.alphaMode||Su.OPAQUE;if(h===Su.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Su.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==kt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==kt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==kt){let u=r.emissiveFactor;o.emissive=new ve().setRGB(u[0],u[1],u[2],di)}return r.emissiveTexture!==void 0&&a!==kt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,at)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),yn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ks(n,u,r),u})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Vp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Qy(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Vp(new ze,c,t),c.mode===Yi.TRIANGLE_STRIP?d=d.then(f=>Mu(f,Ja)):c.mode===Yi.TRIANGLE_FAN&&(d=d.then(f=>Mu(f,Ir))),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Jy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],m=a[f],g,y=c[f];if(m.mode===Yi.TRIANGLES||m.mode===Yi.TRIANGLE_STRIP||m.mode===Yi.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&_?new In(x,y):new Fe(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Yi.LINES)g=new pa(x,y);else if(m.mode===Yi.LINE_STRIP)g=new pi(x,y);else if(m.mode===Yi.LINE_LOOP)g=new ma(x,y);else if(m.mode===Yi.POINTS)g=new Nn(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&$y(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),yn(g,r),m.extensions&&ks(n,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ks(n,u[0],r),u[0];let d=new Be;r.extensions&&ks(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Nt(ct.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new xn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),yn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Le;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fa(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],p=n.samplers[f.sampler],x=f.target,m=x.node,g=n.parameters!==void 0?n.parameters[p.input]:p.input,y=n.parameters!==void 0?n.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let S=0,_=d.length;S<_;S++){let b=d[S],T=f[S],A=p[S],v=x[S],E=m[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let P=i._createAnimationTracks(b,T,A,v,E);if(P)for(let I=0;I<P.length;I++)g.push(P[I])}let y=new Rs(r,void 0,g);return yn(y,n),y})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,tM)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new _r:c.length>1?h=new Be:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),yn(h,r),r.extensions&&ks(i,h,r),r.matrix!==void 0){let u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new Be;i.name&&(r.name=n.createUniqueName(i.name)),yn(r,i),i.extensions&&ks(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(qi(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof fi||d instanceof qt)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}us[r.path]===us.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(us[r.path]){case us.weights:h=Fn;break;case us.rotation:h=On;break;case us.translation:case us.scale:h=as;break;default:i.itemSize===1?h=Fn:h=as;break}let u=n.interpolation!==void 0?jy[n.interpolation]:Ss,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+us[r.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Ku(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof On?qu:Ec;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function iM(s,e,t){let i=e.attributes,n=new ii;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=Ku(kr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Ku(kr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new vi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function Vp(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in i){let o=Yu[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return Ze.workingColorSpace!==di&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),yn(s,e),iM(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Zy(s,e.targets,t):s})}var nM={ai:"DUBIOUS ADVICE BUREAU",maker:"THE TINKER TENT",aid:"THE REBOOT CLINIC",swap:"BRAIN SWAP BAZAAR",news:"THE PATCH NOTES PRESS",stage:`LESS DOOMSCROLL
MORE DANCE FLOOR`};function sM(s,e,{ink:t="#184c4b",paper:i="#efe3c5",border:n=!0}={}){let r=document.createElement("canvas");r.width=2048,r.height=Math.max(1,Math.round(r.width/e));let a=r.getContext("2d"),o=r.width,l=r.height;a.fillStyle=i,a.fillRect(0,0,o,l);let c=Math.min(l*.14,o*.06);n&&(a.strokeStyle="#b39a70",a.lineWidth=Math.max(2,l*.012),a.strokeRect(c*.45,c*.45,o-c*.9,l-c*.9)),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle";let h=Math.min(l*.57/s.length,(l-c*2)/s.length*.8);for(a.font=`700 ${h}px Arial, sans-serif`;s.some(u=>a.measureText(u).width>o-c*2)&&h>4;)h-=1,a.font=`700 ${h}px Arial, sans-serif`;return s.forEach((u,d)=>a.fillText(u,o/2,l/2+(d-(s.length-1)/2)*h*1.35)),r}function Xp(s,e=4){let t=new Map,i=s.get("player_jam")?.scene.getObjectByName("player_jam_print");if(i){let r=i.geometry,a=r.attributes.position,o=r.attributes.color,l=r.index?.array||Array.from({length:a.count},(u,d)=>d),c=[],h=[];for(let u=0;u<a.count;u++)o.getZ(u)>.15&&h.push(u);for(let u=0;u<l.length;u+=3)[l[u],l[u+1],l[u+2]].every(d=>o.getZ(d)<.15)&&c.push(l[u],l[u+1],l[u+2]);if(h.length&&c.length){i.geometry=r.clone(),i.geometry.setIndex(c);let u=document.createElement("canvas");u.width=u.height=512;let d=u.getContext("2d");d.fillStyle="#efdfb9",d.textAlign="center",d.textBaseline="middle",d.font="bold 76px Arial",["GOOD","VIBES","WEIRD","OUTPUTS"].forEach((v,E)=>d.fillText(v,256,60+E*126));let f=[],p=[],x=[],m=[],g=[],y=8,S=8;for(let v=0;v<=S;v++)for(let E=0;E<=y;E++){let P=(E/y-.5)*.164,I=1.1+v/S*.151,N=h[0],k=1/0;for(let L of h){let O=(a.getX(L)-P)**2+(a.getY(L)-I)**2;O<k&&(k=O,N=L)}f.push(P,I,a.getZ(N)+.0015),p.push(E/y,v/S);for(let L=0;L<4;L++)x.push(r.attributes.skinIndex.array[N*4+L]),m.push(r.attributes.skinWeight.array[N*4+L])}for(let v=0;v<S;v++)for(let E=0;E<y;E++){let P=v*(y+1)+E,I=P+y+1;g.push(P,P+1,I,P+1,I+1,I)}let _=new ze;_.setAttribute("position",new De(f,3)),_.setAttribute("uv",new De(p,2)),_.setAttribute("skinIndex",new Ts(x,4)),_.setAttribute("skinWeight",new De(m,4)),_.setIndex(g),_.computeVertexNormals();let b=new mi(u);b.colorSpace=at,b.anisotropy=e;let T=new wt({map:b,alphaTest:.3,roughness:.92,side:lt}),A=new In(_,T);A.name="player_jam_lettering",A.position.copy(i.position),A.quaternion.copy(i.quaternion),A.scale.copy(i.scale),A.bindMode=i.bindMode,A.bind(i.skeleton,i.bindMatrix),A.frustumCulled=!1,i.parent.add(A)}}let n=new Set;for(let r of s.values())r.scene.traverse(a=>{let o=a.material;if(!a.isMesh||Array.isArray(o)||o?.name!=="labels_atlas"||n.has(o))return;n.add(o);let l=o.map.image,c=document.createElement("canvas");c.width=l.width,c.height=l.height;let h=c.getContext("2d");h.drawImage(l,0,0),h.save(),h.scale(c.width/1024,c.height/1024);let u=[...Object.values(Yc),"PROMPT","TOOL","CONTEXT","SHOW ME","TRY THIS","YOUR TURN","TEAM UP","MAKE STUFF","SNACKS / VIBES","REBOOT CLUB"],d=["#d5a342","#6e9aab","#b94d36","#6b9c81","#d5a342"];u.forEach((p,x)=>{if(x>=5&&x<=7)return;let m=x%4*256,g=Math.floor(x/4)*256;h.fillStyle=x<5||x>=8&&x<=12?d[x%5]:"#efdfb9",h.fillRect(m+12,g+45,232,x<5?109:140),h.fillStyle="#173f3c",h.textAlign="center",h.textBaseline="middle";let y=30,S=p.toUpperCase().split(" "),_=[],b="";h.font=`bold ${y}px Arial`;for(let T of S)b&&h.measureText(b+" "+T).width>214?(_.push(b),b=T):b+=(b?" ":"")+T;for(_.push(b);_.some(T=>h.measureText(T).width>214)&&y>8;)y--,h.font=`bold ${y}px Arial`;_.forEach((T,A)=>h.fillText(T,m+128,g+96+(A-(_.length-1)/2)*34))}),h.fillStyle="#21534d",h.fillRect(778,958,236,47),h.fillStyle="#efdfb9",h.textAlign="center",h.font="bold 25px Arial",h.fillText("PROMPTSTOCK",896,981),h.restore();let f=new mi(c);f.colorSpace=at,f.flipY=o.map.flipY,f.anisotropy=e,o.map=f,o.needsUpdate=!0});for(let r of s.values())r.scene.traverse(a=>{if(!a.isMesh||Array.isArray(a.material)||!a.material.name.startsWith("banner_"))return;let o=a.material.name.slice(7),l=nM[o];if(!l)return;a.geometry.computeBoundingBox();let c=a.geometry.boundingBox.getSize(new R),h=[c.x,c.y,c.z].sort((f,p)=>p-f),u=h[0]/h[1],d=o+":"+u.toFixed(3);if(!t.has(d)){let f=o==="maker"?["THE TINKER","TENT"]:o==="news"&&u<6?["THE PATCH NOTES","PRESS"]:l.split(`
`),p=new mi(sM(f,u,{ink:o==="aid"?"#993f31":"#184c4b"}));p.colorSpace=at,p.flipY=a.material.map?.flipY??!1,p.anisotropy=e;let x=a.material.clone();x.map=p,x.roughness=1,x.name="printed_"+d,t.set(d,x)}a.material=t.get(d)})}function rM(s){let e=new Map;s.updateWorldMatrix(!0,!0),s.traverse(t=>{if(!t.isSkinnedMesh||Array.isArray(t.material))return;let i=[t.parent.uuid,t.skeleton.uuid,t.material.uuid,t.bindMode,t.bindMatrix.elements.join(","),t.matrix.elements.join(","),Object.keys(t.geometry.attributes).sort().join(",")].join("|");e.has(i)||e.set(i,[]),e.get(i).push(t)});for(let t of e.values()){if(t.length<2)continue;let i=t[0],n=t.map(o=>o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()),r=yu(n,!1);if(n.forEach(o=>o.dispose()),!r)continue;let a=new In(r,i.material);a.name=s.name+"_"+i.material.name,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.scale.copy(i.scale),a.bindMode=i.bindMode,a.bind(i.skeleton,i.bindMatrix),a.frustumCulled=!1,a.castShadow=a.receiveShadow=!0,i.parent.add(a),t.forEach(o=>o.removeFromParent())}}function aM(s,e="idle"){let t=qi(s),i=new Be;t.updateMatrixWorld(!0);let n=u=>{let d;return t.traverse(f=>{f.isBone&&f.name.startsWith(u)&&(d=f)}),d},r=(u,d,f)=>{let p=n(u);if(!p)return;let x=f.clone().applyQuaternion(t.getWorldQuaternion(new Je)).applyQuaternion(p.parent.getWorldQuaternion(new Je).invert());p.quaternion.premultiply(new Je().setFromAxisAngle(x,d)),p.updateWorldMatrix(!1,!0)},a=new R(1,0,0),o=new R(0,0,1);if(e==="wave"&&(r("upper_arm_R",.85,o),r("forearm_R",-1,a)),e==="play")for(let u of["L","R"])r("upper_arm_"+u,-.6,a),r("forearm_"+u,-.8,a);(e==="talk"||e==="listen")&&(r("upper_arm_R",e==="talk"?-.3:-.1,a),r("upper_arm_R",.12,o),r("forearm_R",e==="talk"?-.95:-.45,a),r("head",e==="talk"?-.1:.1,new R(0,1,0))),t.updateMatrixWorld(!0);let l=t.matrixWorld.clone().invert(),c=new R,h=n("hand_R");return h&&(i.userData.handGrip=h.getWorldPosition(new R).applyMatrix4(l).toArray()),t.traverse(u=>{if(!u.isMesh)return;let d=u.geometry.clone();if(u.isSkinnedMesh){u.skeleton.update();let p=d.attributes.position;for(let x=0;x<p.count;x++)u.getVertexPosition(x,c),p.setXYZ(x,c.x,c.y,c.z);d.deleteAttribute("skinIndex"),d.deleteAttribute("skinWeight"),d.computeVertexNormals()}d.applyMatrix4(l.clone().multiply(u.matrixWorld));let f=new Fe(d,u.material);i.add(f)}),Gn(i),i}function Gn(s){s.updateWorldMatrix(!0,!0);let e=s.matrixWorld.clone().invert(),t=new Map,i=[];if(s.traverse(n=>{if(!n.isMesh||n.isSkinnedMesh||Array.isArray(n.material))return;i.push(n);let r=n.material.uuid+"|"+Object.keys(n.geometry.attributes).sort().join(",");t.has(r)||t.set(r,{material:n.material,geometries:[]});let a=n.geometry.clone().applyMatrix4(e.clone().multiply(n.matrixWorld));t.get(r).geometries.push(a.index?a.toNonIndexed():a)}),!!i.length){for(let n of i)n.removeFromParent();for(let{material:n,geometries:r}of t.values()){let a=yu(r,!1);if(a){let o=new Fe(a,n);o.name=s.name+"_"+n.name,s.add(o)}for(let o of r)o.dispose()}}}var Ju=class{constructor(e,t,i){this.engine=e,this.libraries=t,this.layout=i,this.group=new Be,this.group.name="SkillsJamPlacedKit",this.instances=new Map,this.mixers=[],this.enabled=!0,e.scene.add(this.group);for(let n of i.placements)this.place(n)}instanceCrowd(e){let t=new Map,i=new Map,n=0;this.crowdMotion={value:1};for(let r of e){if(Zu(r))continue;let a=n++%6+1,o=r.jamHuman.pose||"idle",l=a+":"+o;t.has(l)||t.set(l,{variant:a,pose:o,nodes:[]}),t.get(l).nodes.push(r);for(let c of r.jamHuman.parts)c.jamReplace=!0}for(let{variant:r,pose:a,nodes:o}of t.values()){let l=this.libraries.get("crowd_kit").scene.getObjectByName("crowd_"+r),c=aM(l,a);c.traverse(h=>{if(!h.isMesh)return;if(!i.has(h.material)){let d=h.material.clone();d.onBeforeCompile=f=>{f.uniforms.jamCrowdTime=this.engine.time,f.uniforms.jamCrowdMotion=this.crowdMotion,f.vertexShader=`uniform float jamCrowdTime;uniform float jamCrowdMotion;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 guestOrigin=instanceMatrix[3].xyz;float guestPhase=guestOrigin.x*.73+guestOrigin.z*.41;
transformed.x+=sin(jamCrowdTime*.8+guestPhase)*max(position.y,0.)*.011*jamCrowdMotion;
transformed.z+=sin(jamCrowdTime*.6+guestPhase)*max(position.y,0.)*.007*jamCrowdMotion;`)},d.customProgramCacheKey=()=>"jam-social-sway-v4",i.set(h.material,d)}let u=new ni(h.geometry,i.get(h.material),o.length);u.name=`Festival guests ${r} ${a}`,u.userData.handGrip=c.userData.handGrip,u.castShadow=!0,u.receiveShadow=!0,u.customDepthMaterial=new rs({depthPacking:Za}),u.customDepthMaterial.onBeforeCompile=u.material.onBeforeCompile,u.customDepthMaterial.customProgramCacheKey=()=>"jam-social-sway-depth-v4";for(let d=0;d<o.length;d++)u.setMatrixAt(d,new Le().fromArray(o[d].world).scale(l.scale));u.computeBoundingSphere(),this.group.add(u)})}this.backgroundPeople=n}place(e){let t=this.libraries.get(e.library),i;if(t.scene.traverse(r=>{r.userData.asset_id===e.asset&&(i=r)}),i??=t.scene.getObjectByName(e.asset),!i)throw new Error(`Missing kit root ${e.asset}`);let n=qi(i);if(n.name=e.id,n.position.fromArray(e.position),n.rotation.y=e.rotation||0,e.scale&&n.scale.setScalar(e.scale),n.userData={...n.userData,asset:e.asset,interactive:e.interactive||null},n.traverse(r=>{if(r.isMesh){r.isSkinnedMesh&&(r.frustumCulled=!1),r.castShadow=!e.skyCard,r.receiveShadow=!e.skyCard;let a=Array.isArray(r.material)?r.material:[r.material];for(let o of a)o.side=lt}}),this.group.add(n),this.instances.set(e.id,n),t.animations.length){let r=new Ps(n),a=Object.fromEntries(t.animations.map(l=>[l.name,r.clipAction(l)])),o={mixer:r,actions:a,object:n};this.mixers.push(o),a[e.clip||"idle"]?.play()}return n}play(e,t,i=!1){let n=this.mixers.find(a=>a.object.name===e);if(!n?.actions[t])return!1;Object.values(n.actions).forEach(a=>a.stop());let r=n.actions[t];return r.reset(),r.setLoop(i?hc:uc,i?1:1/0),r.clampWhenFinished=i,r.play(),!0}setDressed(e){this.enabled=e,this.group.visible=e;for(let t of this.engine.batches)t.dirty=!0}update(e){this.crowdMotion&&(this.crowdMotion.value=this.engine.play?.reduced||this.engine.play?.concert?.active?0:1);let t=this.lastTime===void 0?0:Math.min(.1,Math.max(0,e-this.lastTime));this.lastTime=e;for(let{mixer:n}of this.mixers)this.engine.jamReview?n.setTime(e):n.update(t);let i=this.instances.get("kickball");if(i&&!this.controlledBall){let n=e%1;i.position.y=.2+Math.max(0,Math.sin(n*Math.PI))*.42,i.rotation.x=e*2,i.rotation.z=e}}stats(){let e=0,t=0;return this.group.traverse(i=>{i.isMesh&&(e+=(i.geometry.index?.count||i.geometry.attributes.position.count)/3*(i.isInstancedMesh?i.count:1),t+=i.geometry.groups.length||1)}),{finiteTransforms:this.group.children.every(i=>i.matrixWorld.elements.every(Number.isFinite)),placedRoots:this.instances.size,backgroundPeople:this.backgroundPeople||0,triangles:e,meshBatches:t,clips:Object.keys(this.mixers[0]?.actions||{}),enabled:this.enabled}}};async function qp(s){let e=new wc,t=await fetch("assets/models/layout.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("Kit layout failed to load");return r.json()}),i=["tent_kit","props_kit","player_jam","crowd_kit","world_dressing"],n=await Promise.all(i.map(async r=>[r,await e.loadAsync(`assets/models/${r}.glb?v=${t.modelRevisions?.[r]||1}`)]));Xp(new Map(n),Math.min(8,s.renderer?.capabilities.getMaxAnisotropy()||4));for(let[r,a]of n)if(r!=="player_jam"&&!new URLSearchParams(location.search).has("unbatched")){let o=[];a.scene.traverse(l=>{l.userData.asset_id&&o.push(l)});for(let l of o)r==="crowd_kit"&&rM(l),Gn(l)}return new Ju(s,new Map(n),t)}function Zu(s){for(let e=s;e;e=e.parent)if(e.jamReplace)return!0;return!1}var Ac=class{constructor(){this.phase="paddle",this.distance=0,this.speed=0,this.strokes=0,this.cooldown=0,this.stirs=0,this.heat=0,this.held=!1,this.night=0}stroke(){return this.phase!=="paddle"||this.cooldown>0?!1:(this.speed=Math.min(4.5,this.speed+1.65),this.cooldown=.5,this.strokes++,!0)}step(e){e=Math.max(0,Math.min(e,.1)),this.cooldown=Math.max(0,this.cooldown-e),this.phase==="paddle"&&(this.distance=Math.min(78,this.distance+this.speed*e),this.speed*=Math.exp(-.65*e)),this.phase==="roast"&&this.held&&(this.heat=Math.min(10,this.heat+e)),this.phase==="sleep"&&(this.night+=e)}beach(){return this.phase!=="paddle"||this.distance<77.5?!1:(this.phase="meet",!0)}meet(){return this.phase!=="meet"?!1:(this.phase="dinner",!0)}stir(){return this.phase!=="dinner"?!1:(++this.stirs>=6&&(this.phase="secret"),!0)}promise(){return this.phase!=="secret"?!1:(this.phase="roast",!0)}bite(){return this.phase!=="roast"||this.held||this.heat<5||this.heat>8?!1:(this.phase="bed",!0)}fresh(){return this.phase!=="roast"?!1:(this.heat=0,this.held=!1,!0)}sleep(){return this.phase!=="bed"?!1:(this.phase="sleep",this.night=0,!0)}wake(){return this.phase!=="sleep"||this.night<3?!1:(this.phase="done",!0)}};var Xt=(...s)=>new R(...s),Ft=(s,e={})=>new wt({color:s,roughness:.92,...e});function $t(s,e,t,i=[0,0,0],n=[1,1,1]){let r=new Fe(e,t);return r.position.fromArray(i),r.scale.fromArray(n),r.castShadow=r.receiveShadow=!0,s.add(r),r}function Ut(s,e,t,i){return $t(s,new Yt(1,18,12),e,t,i)}function gi(s,e,t,i,n=.025,r=n){let a=Xt(...i).sub(Xt(...t)),o=$t(s,new St(r,n,a.length(),8),e,Xt(...t).add(Xt(...i)).multiplyScalar(.5).toArray());return o.quaternion.setFromUnitVectors(Xt(0,1,0),a.normalize()),o}function io(s,e,t,i=.018){return $t(s,new As(new ns(t.map(n=>Xt(...n))),20,i,5,!1),e)}function $u(s,e=1){let t=new sn().load("assets/camp-v2/"+s+".png");return t.colorSpace=at,t.wrapS=t.wrapT=_i,t.repeat.set(e,e),t.anisotropy=4,t}function Yp(){let s=$u("fur",2),e=$u("canvas",2),t=$u("stone");return{fur:Ft("#d8bfa8",{map:s}),chest:Ft("#efd4b7",{map:s}),skin:Ft("#aa7b57"),dark:Ft("#32271f"),wood:Ft("#745038"),rope:Ft("#ddc694"),cream:Ft("#eedcb6"),canvas:Ft("#fff4db",{map:e,bumpMap:e,bumpScale:.016,side:lt}),stone:Ft("#d0cfbf",{map:t,bumpMap:t,bumpScale:.025}),metal:Ft("#343b37",{metalness:.65,roughness:.6})}}function Cc(s,e){let t=new Be,i=Ft("#70543c");gi(t,i,[0,0,0],[.08,7.8,-.05],.19,.018);let n=[],r=[],a=new ve;function o(d,f,p,x){let m=f.clone().sub(d),g=Xt(-m.z,.12,m.x).normalize().multiplyScalar(p);n.push(...d.clone().add(g).toArray(),...d.clone().sub(g).toArray(),...f.toArray()),a.set(x);for(let y=0;y<3;y++)r.push(a.r,a.g,a.b)}for(let d=0;d<8;d++)for(let f=0;f<6;f++){let p=f*Math.PI/3+d*1.67+Math.sin(f*3.7+d)*.12,x=1.65+d*.77+Math.sin(f*1.3+d)*.14,m=2.3*(1-d/9.5)*(1+Math.sin(f*2.1+d)*.14),g=Xt(Math.cos(p),0,Math.sin(p)),y=Xt(0,x,0),S=g.clone().multiplyScalar(m).add(Xt(0,x-.38,0));gi(t,i,y.toArray(),S.toArray(),.035*(1-d/10),.006);for(let _=1;_<=6;_++){let b=_/6,T=y.clone().lerp(S,b);T.y+=.18*b*b;for(let A=-1;A<=1;A+=2){let v=p+A*(.62+.2*b),E=Xt(Math.cos(v),.2,Math.sin(v)).multiplyScalar(.65*(1-.3*b));for(let P=0;P<6;P++){let I=P/6,N=T.clone().addScaledVector(E,I),k=.25*(1-I*.5);for(let L of[-1,1]){let O=N.clone().add(Xt(Math.cos(v+L*.9)*k,.13*Math.sin(P*2.4+A)+P%2*.08,Math.sin(v+L*.9)*k));o(N,O,.025,(P+_+d)%4===0?"#79954c":(P+_)%3===0?"#456b3b":"#315638")}}}}}let l=new ze;l.setAttribute("position",new De(n,3)),l.setAttribute("color",new De(r,3)),l.computeVertexNormals();let c=$t(t,l,Ft("#ffffff",{vertexColors:!0,side:lt}));c.name="Pine needles",Gn(t),t.updateMatrixWorld(!0);let h=new Be;h.name="Branching mountain pines",s.add(h);let u=new xt;return t.traverse(d=>{if(!d.isMesh)return;let f=d.geometry.clone().applyMatrix4(d.matrixWorld),p=new ni(f,d.material,e.length);p.castShadow=p.receiveShadow=!0,e.forEach((x,m)=>{u.position.set(x[0],x[1],x[2]),u.rotation.set(0,m*2.399,Math.sin(m*1.9)*.025),u.scale.setScalar(x[3]||1),u.updateMatrix(),p.setMatrixAt(m,u.matrix)}),p.computeBoundingSphere(),h.add(p)}),h}function Rc(s,e,t,i,n=0){let r=[Xt(.001,0),Xt(.06,.07),Xt(.08,.19),Xt(.045,.3),Xt(.002,.4)].map(c=>new ie(c.x,c.y)),a=new ss(r,7),o=a.attributes.position;for(let c=0;c<o.count;c++)o.setX(c,o.getX(c)+.22*o.getY(c)*o.getY(c));a.computeVertexNormals();let l=$t(s,a,e,t,i);return l.rotation.z=Math.PI+n,l}function Kp(s,e){let t=Ft("#c69954"),i=Ft("#fcebd0"),n=new Be;n.name="Sasquatch \xB7 shaggy lake guardian",n.position.set(2,.35,-2),s.add(n);let r=[[.29,.78],[.48,.93],[.56,1.25],[.61,1.6],[.75,1.88],[.62,2.03],[.34,2.1],[.28,2.24]],a=$t(n,new ss(r.map(o=>new ie(...o)),24),e.fur);a.scale.z=.64,Ut(n,e.chest,[0,1.58,.22],[.46,.48,.19]),Ut(n,e.fur,[0,2.35,0],[.43,.5,.35]),Ut(n,e.skin,[0,2.23,.29],[.265,.27,.115]);for(let o of[-1,1]){Ut(n,e.fur,[o*.34,.62,0],[.23,.59,.25]),Ut(n,e.skin,[o*.34,.13,.22],[.24,.15,.38]);for(let u=0;u<4;u++)Ut(n,e.skin,[o*.34+(u-1.5)*.1,.105,.5+(u===1?.025:0)],[.059,.07,.12]);let l=Ut(n,e.fur,[o*.69,1.63,-.03],[.25,.49,.26]);l.rotation.z=o*.2;let c=Ut(n,e.fur,[o*.79,1.05,.1],[.19,.4,.2]);c.rotation.x=-.2,Ut(n,e.skin,[o*.8,.75,.19],[.14,.19,.085]);for(let u=0;u<4;u++)gi(n,e.skin,[o*.8+(u-1.5)*.061,.7,.21],[o*.8+(u-1.5)*.055,.49+Math.abs(u-1.5)*.035,.25],.031,.022);gi(n,e.skin,[o*.8-o*.12,.78,.2],[o*.8-o*.18,.63,.28],.048,.029),Ut(n,e.fur,[o*.4,2.32,0],[.12,.17,.095]),Ut(n,e.skin,[o*.442,2.32,.045],[.054,.085,.04]),Ut(n,e.dark,[o*.12,2.41,.318],[.091,.071,.038]),Ut(n,t,[o*.12,2.405,.351],[.044,.033,.019]),Ut(n,e.dark,[o*.12,2.405,.366],[.018,.024,.009]),Ut(n,i,[o*.12-.009,2.417,.373],[.008,.008,.004]);let h=Ut(n,e.fur,[o*.12,2.477,.327],[.15,.055,.067]);h.rotation.z=o*.1,Ut(n,e.skin,[o*.13,2.205,.374],[.12,.093,.052]);for(let u=0;u<6;u++)Rc(n,e.fur,[o*(.4+u%2*.025),2.44-u*.07,.13],[1,1,1],o*-.23);for(let u=0;u<6;u++)Rc(n,e.fur,[o*(.58+u*.032),1.96-u*.15,.1],[1.1,1.05,1.1],o*.18)}Ut(n,e.dark,[0,2.32,.406],[.09,.062,.058]),io(n,e.dark,[[-.13,2.16,.408],[-.07,2.135,.43],[.015,2.13,.432],[.1,2.15,.419]],.009);for(let o=0;o<40;o++){let l=o*2.4,c=.95+o%7*.15;Rc(n,e.fur,[Math.sin(l)*(.47+(c-1)*.12),c,Math.cos(l)*.33],[.8,.72,.8],Math.sin(o)*.2)}for(let o=0;o<7;o++)Rc(n,e.fur,[(o-3)*.073,2.84-Math.abs(o-3)*.035,0],[1,1,1],(o-3)*.1);return Gn(n),n.traverse(o=>{o.isMesh&&(o.castShadow=o.receiveShadow=!0)}),n}function jp(s,e){let t=new Be;t.name="Cove canvas tent \xB7 stitched fly and tied doors",t.position.set(-5,.45,-4),s.add(t);let i=Ft("#4b6258");$t(t,new bt(3.7,.07,4),i,[0,.035,0]);let n=12,r=16;for(let c of[-1,1]){let h=[],u=[],d=[];for(let x=0;x<=r;x++)for(let m=0;m<=n;m++){let g=m/n,y=x/r;h.push(c*g*2.05,.16+(1-g)*2.02-.13*Math.sin(Math.PI*g)*Math.sin(y*Math.PI),-2.15+y*4.3),u.push(g*1.25,y*1.5)}for(let x=0;x<r;x++)for(let m=0;m<n;m++){let g=x*(n+1)+m,y=g+n+1;d.push(g,y,g+1,g+1,y,y+1)}let f=new ze;f.setAttribute("position",new De(h,3)),f.setAttribute("uv",new De(u,2)),f.setIndex(d),f.computeVertexNormals(),$t(t,f,e.canvas);for(let x of[-2.15,2.15])gi(t,e.rope,[0,2.19,x],[c*2.05,.16,x],.018),io(t,e.rope,[[c*1.96,.22,x],[c*2.52,.13,x*1.2],[c*3,.025,x*1.4]],.012),gi(t,e.wood,[c*3,0,x*1.4],[c*3-.06,.19,x*1.4],.035);let p=new ze;p.setAttribute("position",new De([0,2.14,2.07,c*2,.1,2.07,c*1.55,.12,2.14,0,2.14,2.07,c*1.55,.12,2.14,c*.55,1.61,2.12],3)),p.setAttribute("uv",new De([0,1,1,0,.75,0,0,1,.75,0,.25,.8],2)),p.computeVertexNormals(),$t(t,p,e.canvas),gi(t,e.canvas,[c*.56,1.59,2.12],[c*1.57,.15,2.14],.07),gi(t,e.rope,[c*1.06,.82,2.22],[c*1.24,.72,2.17],.02)}gi(t,e.wood,[0,0,-2.07],[0,2.23,-2.07],.037),gi(t,e.wood,[0,0,2.09],[0,2.23,2.09],.037),gi(t,e.rope,[0,2.2,-2.2],[0,2.2,2.2],.021);let a=Ut(t,Ft("#3f7372"),[.6,.19,.15],[.52,.15,1.12]),o=Ft("#548989");for(let c=0;c<7;c++)io(t,o,[[.13,.2,-.65+c*.26],[.35,.325,-.65+c*.26],[.7,.33,-.65+c*.26],[1.07,.2,-.65+c*.26]],.012);Ut(t,e.cream,[.6,.29,-.68],[.42,.13,.28]);let l=new Be;return l.position.set(-1.45,.1,1.42),t.add(l),$t(l,new St(.12,.14,.06,12),e.metal,[0,.03,0]),$t(l,new St(.085,.085,.2,12),Ft("#f8d685",{emissive:"#ed9a3d",emissiveIntensity:.8}),[0,.16,0]),$t(l,new nn(.15,.09,12),e.metal,[0,.31,0]),io(l,e.metal,[[-.1,.28,0],[-.11,.44,0],[.11,.44,0],[.1,.28,0]],.012),Gn(t),t.traverse(c=>{c.isMesh&&(c.castShadow=c.receiveShadow=!0)}),{root:t,bed:a}}function Jp(s,e){let t=new Be;t.name="River stone hearth",t.position.set(-1,.5,1),s.add(t),$t(t,new St(.72,.74,.045,28),Ft("#292825"),[0,-.15,0]);for(let y=0;y<13;y++){let S=y/13*Math.PI*2;Ut(t,e.stone,[Math.sin(S)*.82,-.07+y%3*.015,Math.cos(S)*.82],[.25,.18,.21]).rotation.set(y*.3,S,y*.1)}let i=Ft("#392c25"),n=Ft("#dd6021",{emissive:"#ff6420",emissiveIntensity:1.5});for(let y=0;y<4;y++){let S=y*Math.PI/2+.3,_=Xt(Math.cos(S),0,Math.sin(S));gi(t,i,_.clone().multiplyScalar(-.58).add(Xt(0,-.03,0)).toArray(),_.clone().multiplyScalar(.55).add(Xt(0,.08,0)).toArray(),.12,.09);for(let b=0;b<4;b++)Ut(t,n,[_.x*(b*.2-.3),.08,_.z*(b*.2-.3)],[.055,.019,.035])}let r=[];for(let y=0;y<7;y++){let S=new ss([[.035,0],[.12,.08],[.13,.22],[.07,.36],[.04,.49],[.001,.68]].map(A=>new ie(...A)),10),_=S.attributes.position;for(let A=0;A<_.count;A++){let v=_.getY(A);_.setX(A,_.getX(A)+Math.sin(v*6+y)*v*.16)}S.computeVertexNormals();let b=$t(t,S,new kt({color:y%2?"#ffad32":"#f67720",toneMapped:!1}),[Math.sin(y*2.4)*.25,.03,Math.cos(y*2.4)*.21],[.8,.7+y%3*.18,.7]);b.castShadow=b.receiveShadow=!1,r.push(b);let T=$t(b,S,new kt({color:"#ffe191",toneMapped:!1}),[0,0,0],[.6,.57,.6]);T.castShadow=T.receiveShadow=!1}let a=new Gi("#ffb35a",12,13,2);a.position.set(.12,.4,.08),a.visible=!1,t.add(a);let o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"rgba(193,192,177,.18)"),c.addColorStop(.5,"rgba(193,192,177,.06)"),c.addColorStop(1,"rgba(193,192,177,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new mi(o),u=[];for(let y=0;y<7;y++){let S=new da(new xr({map:h,transparent:!0,depthWrite:!1,opacity:.4}));S.position.set(0,1.35+y*.5,0),S.scale.setScalar(.5+y*.16),t.add(S),u.push(S)}let d=[];for(let y=0;y<28;y++)d.push(Math.sin(y*2.4)*.36,.25+y%9*.15,Math.cos(y*2.4)*.34);let f=new ze;f.setAttribute("position",new De(d,3));let p=new Nn(f,new fn({color:"#ffd387",size:.026,transparent:!0,opacity:.75,depthWrite:!1,toneMapped:!1}));t.add(p);let x=$t(t,new ss([[0,0],[.23,0],[.3,.06],[.33,.24],[.35,.26]].map(y=>new ie(...y)),24),e.metal,[0,.51,0]);$t(t,new yi(.34,.025,6,24),e.metal,[0,.77,0]).rotation.x=Math.PI/2,$t(t,new tn(.3,24),Ft("#ae733b"),[0,.755,0]).rotation.x=-Math.PI/2;for(let y of[-1,1])io(t,e.metal,[[y*.29,.7,0],[y*.46,.77,0],[y*.44,.87,0],[y*.32,.83,0]],.023);for(let y of[0,2.1,4.2])gi(t,e.metal,[Math.cos(y)*.75,-.02,Math.sin(y)*.75],[0,1.24,0],.025);gi(t,e.metal,[0,1.24,0],[0,.8,0],.012);let m=gi(t,e.wood,[.1,.72,0],[.55,1.2,.1],.023),g=new Be;g.name="Batched hearth stones and cookware";for(let y of[...t.children])y.isMesh&&!r.includes(y)&&y!==m&&g.add(y);return t.add(g),Gn(g),g.traverse(y=>{y.isMesh&&(y.castShadow=y.receiveShadow=!0)}),{root:t,flames:r,smoke:u,light:a,pot:x,spoon:m,sparks:p}}var Rt=(s=0,e=0,t=0)=>new R(s,e,t),Ui=(s,e={})=>new wt({color:s,roughness:.92,...e});function Vn(s,e,t,i=[0,0,0],n=[1,1,1]){let r=new Fe(e,t);return r.position.fromArray(i),r.scale.fromArray(n),r.castShadow=r.receiveShadow=!0,s.add(r),r}function Qu(s,e,t,i){return Vn(s,new Yt(1,14,10),e,t,i)}function Zp(s,e,t,i){return Vn(s,new bt(1,1,1),e,t,i)}function ed(s,e,t,i,n){let r=Rt(...i).sub(Rt(...t)),a=Vn(s,new St(n,n,r.length(),10),e,Rt(...t).add(Rt(...i)).multiplyScalar(.5).toArray());return a.quaternion.setFromUnitVectors(Rt(0,1,0),r.normalize()),a}function no(s,e,t,i){let n;if(s.traverse(a=>{a.isBone&&a.name.startsWith(e)&&(n=a)}),!n)return;s.updateMatrixWorld(!0);let r=i.clone().applyQuaternion(s.getWorldQuaternion(new Je)).applyQuaternion(n.parent.getWorldQuaternion(new Je).invert());n.quaternion.premultiply(new Je().setFromAxisAngle(r,t)),s.updateMatrixWorld(!0)}var Pc=class{constructor(e,t,{reduced:i=!1,onWake:n,getDusk:r,setDusk:a,playMusic:o,endMusic:l,musicState:c,toggleMusic:h}={}){this.e=e,this.kit=t,this.reduced=i,this.onWake=n,this.getDusk=r,this.setDusk=a,this.playMusic=o,this.endMusic=l,this.musicState=c,this.toggleMusic=h,this.keys=new Set,this.active=!1,this.root=new Be,this.root.name="Mountain lake overnight",e.scene.add(this.root),this.build()}build(){this.wood=Ui("#9a6138"),this.cream=Ui("#eddfb7"),this.fur=Ui("#65412d"),this.dark=Ui("#302a26"),this.green=Ui("#426b50"),this.red=Ui("#a64432"),this.boat=new Be,this.boat.name="Borrowable canoe",this.root.add(this.boat),this.boat.position.set(27,-.04,-67);let e=[],t=[],i=[[.08,-.2],[.65,-.02],[.82,.34],[.71,.34],[.52,.02]],n=40;i.forEach(([m,g])=>{for(let y=0;y<n;y++){let S=y/n*Math.PI*2;e.push(Math.sin(S)*m,g+Math.pow(Math.abs(Math.cos(S)),8)*.22,Math.cos(S)*2.25)}});for(let m=0;m<i.length-1;m++)for(let g=0;g<n;g++){let y=m*n+g,S=m*n+(g+1)%n,_=y+n,b=S+n;t.push(y,S,_,S,b,_)}let r=new ze;r.setAttribute("position",new De(e,3)),r.setIndex(t),r.computeVertexNormals(),Vn(this.boat,r,Ui("#a74932",{side:lt})),Zp(this.boat,this.wood,[0,.01,0],[1,.07,3.4]);for(let m of[-.8,.85])Zp(this.boat,this.cream,[0,.32,m],[1.25,.08,.35]);this.paddle=new Be,this.paddle.position.set(.95,.7,.2),this.boat.add(this.paddle),ed(this.paddle,this.wood,[0,-.9,0],[0,.8,0],.025),Qu(this.paddle,this.cream,[0,-1,0],[.14,.3,.035]),this.paddle.rotation.z=-.5,this.rider=qi(this.kit.instances.get("hero")),this.rider.name="Seated canoe guest",this.rider.position.set(0,-.65,.85),this.rider.rotation.set(0,Math.PI,0),this.boat.add(this.rider);for(let m of["L","R"])no(this.rider,"thigh_"+m,-1.2,Rt(1,0,0)),no(this.rider,"shin_"+m,1.35,Rt(1,0,0)),no(this.rider,"upper_arm_"+m,-.6,Rt(1,0,0)),no(this.rider,"forearm_"+m,-.8,Rt(1,0,0));this.rider.visible=!1,this.riderHands={},this.riderArms={},this.rider.traverse(m=>{for(let g of["L","R"])m.isBone&&m.name==="hand_"+g&&(this.riderHands[g]=m),m.isBone&&m.name==="upper_arm_"+g&&(this.riderArms[g]={bone:m,q:m.quaternion.clone()})}),this.camp=new Be,this.camp.name="Sasquatch Cove",this.camp.position.set(-18,0,-128),this.root.add(this.camp);let a=Ui("#b1a27a"),o=Ui("#566b45"),l=Ui("#7b8070");Qu(this.camp,a,[0,-.75,0],[15,1.2,15]),Vn(this.camp,new St(12,14,1,48),o,[0,-.05,-2]);let c=Yp(),h=[];for(let m=0;m<18;m++){let g=Math.PI*(.05+m/17*.9),y=13+m%3;h.push([Math.cos(g)*y,.25,-Math.sin(g)*y-1,.78+m%5*.12])}Cc(this.camp,h);let u=[];for(let m=0;m<80;m++){let g=-140+m*3.5;g>-36&&g<1||u.push([g,-.2,-137+Math.sin(g*.13)*3,.5+m%5*.13])}Cc(this.root,u);let d=this.kit.instances.get("kit_tree_pine");if(d){for(let m of d.children)m.visible=!1;Cc(d,[[0,0,0,.8]])}for(let m=0;m<5;m++)Vn(this.camp,new nn(9+m%2*4,16+m%3*6,5),Ui(m%2?"#6a7970":"#536968"),[-23+m*11,4,-24-m%2*4]);let f=Jp(this.camp,c);this.fire=f.root,this.flames=f.flames,this.smoke=f.smoke,this.fireLight=f.light,this.pot=f.pot,this.spoon=f.spoon,this.sparks=f.sparks;for(let m of[-2.8,2.5])Vn(this.camp,new Yt(.2,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),this.cream,[m,.83,2]),Vn(this.camp,new tn(.17,16),Ui("#b77938"),[m,.84,2]).rotation.x=-Math.PI/2,Qu(this.camp,this.cream,[m+.35,.85,2],[.18,.11,.13]);for(let[m,g]of[[-3,2],[2,2]])ed(this.camp,this.wood,[m-1,.55,g],[m+1,.55,g],.3);this.bed=jp(this.camp,c).bed,this.bigfoot=Kp(this.camp,c),this.walker=qi(this.kit.instances.get("hero")),this.walker.position.set(0,.45,8),this.walker.rotation.set(0,Math.PI,0),this.camp.add(this.walker),this.walker.visible=!1,this.campMixer=new Ps(this.walker);let p=this.kit.libraries.get("player_jam").animations;this.walkAction=this.campMixer.clipAction(p.find(m=>m.name==="walk")),this.idleAction=this.campMixer.clipAction(p.find(m=>m.name==="idle")),this.idleAction.play(),this.stick=new Be,this.stick.position.set(-2,.65,2.4),this.camp.add(this.stick),ed(this.stick,this.wood,[0,0,0],[1.3,.3,-1.4],.023),this.mallow=Vn(this.stick,new St(.1,.1,.16,12),Ui("#fff0cf"),[1.3,.3,-1.4]),this.stick.visible=!1;let x=new Be;for(let m of[...this.camp.children])m.isMesh&&!m.isSkinnedMesh&&x.add(m);this.camp.add(x),Gn(x)}open(e){this.ui=e,this.playMusic?.(),this.journey=new Ac,this.previousDusk=this.getDusk?.()||0,this.setDusk?.(.35),this.active=!0,this.fireLight.visible=!0,this.keys.clear(),this.rider.visible=!0,this.walker.visible=!1,this.stick.visible=!1,this.boat.position.set(27,-.04,-67),this.boat.rotation.set(0,0,0),this.walker.position.set(0,.45,8),this.lastPhase=null,this.rowSide=1,this.render()}render(){let e=this.journey,t=e.phase;this.e.campNight={paddle:0,meet:.25,dinner:.65,secret:.7,roast:.85,bed:.9,sleep:1}[t]||0;let i=this.ui.querySelector("h2"),n=this.ui.querySelector("#playHint"),r=this.ui.querySelector("#playDock"),a={paddle:["The long way across","A curl of campfire smoke rises below the mountains. Row toward it."],meet:["Someone lives here","Follow the woodsmoke. Walk over to your very tall neighbor."],dinner:["Dinner for two","\u201CYou brought an appetite, right? Give that stew a stir.\u201D"],secret:["A very small secret","Sasquatch: \u201CDon\u2019t tell anyone about me, haha. I like it quiet here.\u201D"],roast:["One more before bed","Hold your marshmallow over the fire. Pull it away when it turns golden."],bed:["Under the pines","\u201CBest campsite on the lake. Your bed is under the little canvas roof.\u201D"],sleep:["Goodnight, Sasquatch","Crickets, a crackling fire, and absolutely no photographic evidence."]}[t];a&&(i.textContent=a[0],n.textContent=a[1]);let o={paddle:'<p id="tripProgress"></p><div class="play-actions"><button id="rowLeft">Row left</button><button id="rowRight">Row right</button><button id="beachBoat" hidden>Beach the canoe</button></div><small>Tap the paddles, or hold W / \u2191 for steady strokes. A / D switches paddle side. The current guides you into the cove.</small>',meet:'<p id="campHint">WASD / arrows to walk \xB7 E to say hello</p><div class="play-actions"><button data-walk="forward">Walk forward</button><button data-walk="left">Left</button><button data-walk="right">Right</button><button data-walk="back">Back</button><button id="campAction" disabled>Say hello</button></div>',dinner:'<p>A pot of vegetable stew bubbles over the fire.</p><button id="stirPot">Stir the stew \xB7 0 / 6</button>',secret:'<p>You share warm bowls of stew, some bread, and an excellent view. He seems relieved that you didn\u2019t ask for a selfie.</p><button id="keepSecret">Your secret is safe with me</button>',roast:'<p id="roastHint" role="status"></p><div class="play-actions"><button id="holdMallow" aria-pressed="false">Hold over the fire</button><button id="eatMallow" disabled>Eat marshmallow</button><button id="freshMallow">Fresh marshmallow</button></div><small>Space also holds the stick. Golden takes about five seconds; blackened takes eight.</small>',bed:'<p id="campHint">Walk to the sleeping bag under the canvas roof.</p><div class="play-actions"><button data-walk="forward">Walk forward</button><button data-walk="left">Left</button><button data-walk="right">Right</button><button data-walk="back">Back</button><button id="campAction" disabled>Go to bed</button></div>',sleep:'<div class="trip-night"><span>\u2726 \xB7 \u2727 \xB7 \u2726</span><h3>A secret worth keeping.</h3><p>You drift off beneath the pines\u2026</p><button id="wakeUp" hidden>Wake up at the festival</button></div>'};r.innerHTML=(o[t]||"")+"<div class=camp-music><span id=campMusicStatus role=status>Moonlit Cabin Hush</span><button id=campMusicButton>Pause music</button></div>",r.querySelector("#campMusicButton").onclick=()=>this.toggleMusic?.(),this.lastPhase=t,this.ui.dataset.tripPhase=t;let l=(c,h)=>{let u=this.ui.querySelector("#"+c);u&&(u.onclick=h)};l("rowLeft",()=>this.stroke(-1)),l("rowRight",()=>this.stroke(1)),l("beachBoat",()=>{e.beach()&&(this.rider.visible=!1,this.walker.visible=!0,this.setDusk?.(.65),this.render())}),l("campAction",()=>this.interact()),l("stirPot",()=>{e.stir(),this.spoon.rotation.y+=1,this.ui.querySelector("#stirPot").textContent=`Stir the stew \xB7 ${e.stirs} / 6`,e.phase!==t&&this.render()}),l("keepSecret",()=>{e.promise(),this.stick.visible=!0,this.setDusk?.(.9),this.render()}),l("holdMallow",()=>{e.held=!e.held}),l("freshMallow",()=>e.fresh()),l("eatMallow",()=>{e.bite()&&(this.stick.visible=!1,this.walker.position.set(-2,.45,3),this.render())}),l("wakeUp",()=>{e.wake()&&this.onWake?.()}),this.ui.querySelectorAll("[data-walk]").forEach(c=>{let h={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD"}[c.dataset.walk];c.onpointerdown=u=>{u.preventDefault(),c.setPointerCapture(u.pointerId),this.keys.add(h)},c.onpointerup=c.onpointercancel=c.onlostpointercapture=()=>this.keys.delete(h)})}stroke(e){this.journey.stroke()&&(this.rowSide=e,this.rowAt=this.t||0)}interact(){let e=this.journey,t=e.phase==="meet"?Rt(2,.45,-2):Rt(-4.4,.45,-3);this.walker.position.distanceTo(t)>2.5||(e.phase==="meet"?(e.meet(),this.walker.position.set(-3,.45,2),this.render()):e.phase==="bed"&&e.sleep()&&(this.walker.visible=!1,this.setDusk?.(1),this.render()))}key(e,t){if(this.active){if(e.code==="Space"){e.preventDefault(),this.journey.phase==="roast"&&(this.journey.held=t);return}e.code==="KeyE"&&t&&!e.repeat&&this.interact(),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&(e.preventDefault(),t?this.keys.add(e.code):this.keys.delete(e.code))}}update(e,t){if(!this.active)return;let i=this.musicState?.();if(i){let a=i.status==="playing"?"Pause music":i.status==="loading"?"Cancel loading":i.status==="error"?"Retry music":"Play music",o=this.ui.querySelector("#campMusicButton");o.textContent!==a&&(o.textContent=a);let l=this.ui.querySelector("#campMusicStatus"),c="Moonlit Cabin Hush \xB7 "+i.status;l.textContent!==c&&(l.textContent=c)}this.t=t;let n=this.journey;n.step(e);let r=this.camp.position;if(n.phase==="paddle"){(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&this.stroke(this.rowSide*-1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&this.stroke(-1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&this.stroke(1);let a=n.distance/78,o=Rt(-18,-.04,-115);this.boat.position.lerpVectors(Rt(27,-.04,-67),o,a);let l=this.reduced?0:Math.sin(t*1.8)*.035;this.boat.position.y+=l,this.boat.rotation.y=Math.atan2(45,48),this.boat.rotation.z=this.reduced?0:Math.sin(t)*.015;let c=Math.max(0,1-(t-(this.rowAt||0))/.65);for(let d of Object.values(this.riderArms))d.bone.quaternion.copy(d.q);let h=this.rowSide<0?"L":"R";no(this.rider,"upper_arm_"+h,c*.5,Rt(1,0,0)),this.paddle.rotation.set(c*.5,0,this.rowSide*-.5);let u=this.riderHands[h];if(u){this.boat.updateMatrixWorld(!0);let d=this.boat.worldToLocal(u.localToWorld(Rt(0,.055,0)));this.paddle.position.copy(d).sub(Rt(0,.45,0).applyQuaternion(this.paddle.quaternion))}this.ui.querySelector("#tripProgress").textContent=`Across the lake \xB7 ${Math.round(a*100)}% \xB7 ${n.strokes} paddle strokes`,this.ui.querySelector("#beachBoat").hidden=a<.995,this.e.setCamera(this.boat.position.clone().add(Rt(6,4.2,7)).toArray(),this.boat.position.clone().add(Rt(-1,.7,-2)).toArray())}else if(n.phase==="meet"||n.phase==="bed"){let a=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),o=(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0)-(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0),l=Math.hypot(a,o)||1;this.walker.position.x=ct.clamp(this.walker.position.x+a/l*e*2.5,-9,9),this.walker.position.z=ct.clamp(this.walker.position.z+o/l*e*2.5,-7,10),(a||o)&&(this.walker.rotation.y=Math.atan2(a,o));let c=!!(a||o);c!==this.walking&&(this.walking=c,(c?this.idleAction:this.walkAction).stop(),(c?this.walkAction:this.idleAction).reset().play()),this.campMixer.update(e);let h=n.phase==="meet"?Rt(2,.45,-2):Rt(-4.4,.45,-3),u=this.walker.position.distanceTo(h)<2.5;this.ui.querySelector("#campAction").disabled=!u,this.ui.querySelector("#campHint").textContent=u?"E or the button to "+(n.phase==="meet"?"say hello.":"go to bed."):`${n.phase==="meet"?"Sasquatch":"Sleeping bag"} \xB7 ${Math.round(this.walker.position.distanceTo(h))} m \xB7 WASD / arrows to walk`;let d=r.clone().add(this.walker.position);this.e.setCamera(d.clone().add(Rt(0,5,8)).toArray(),d.clone().add(Rt(0,.7,-2)).toArray())}else this.e.setCamera(r.clone().add(Rt(-1,3.6,8)).toArray(),r.clone().add(Rt(.2,1.2,-1)).toArray());if(n.phase==="roast"){this.e.setCamera(r.clone().add(Rt(-2,2.4,4.5)).toArray(),r.clone().add(Rt(.3,1.25,-.6)).toArray());let a=n.heat>8,o=n.heat>=5&&!a;this.ui.querySelector("#roastHint").textContent=a?"A little too crispy! Try a fresh one.":o?"Golden! Pull it away and take a bite.":`Toasting \xB7 ${Math.round(n.heat/5*100)}%`;let l=this.ui.querySelector("#holdMallow");l.textContent=n.held?"Pull away from the fire":"Hold over the fire",l.setAttribute("aria-pressed",String(n.held)),this.ui.querySelector("#eatMallow").disabled=n.held||!o,this.mallow.material.color.set(a?"#403126":o?"#c99043":"#fff0cf"),this.stick.rotation.y=n.held?0:-.65}n.phase==="sleep"&&(this.ui.querySelector("#wakeUp").hidden=n.night<3),this.reduced||(this.smoke.forEach((a,o)=>{a.position.x=Math.sin(t*.3+o)*.2+o*.03}),this.flames.forEach((a,o)=>a.scale.y=.8+Math.sin(t*5+o)*.14),this.bigfoot.rotation.z=Math.sin(t*.7)*.008,this.sparks.rotation.y=t*.18,this.sparks.position.y=(Math.sin(t*.7)+1)*.12),this.fireLight.intensity=n.phase==="paddle"?4:8}close(){this.active&&(this.endMusic?.(),this.active=!1,this.e.campNight=0,this.fireLight.visible=!1,delete this.ui.dataset.tripPhase,this.keys.clear(),this.journey.held=!1,this.rider.visible=!1,this.walker.visible=!1,this.stick.visible=!1,this.boat.position.set(27,-.04,-67),this.boat.rotation.set(0,0,0),this.setDusk?.(this.previousDusk))}};var oM=[{id:"kick",title:"Give the world a little nudge",clue:"A globe is waiting at someone\u2019s feet. Three rings, one good kick at a time.",place:"Look on the lawn just inside the festival entrance."},{id:"aid",title:"A friend could use a hand",clue:"Someone at the Reboot Clinic has lost their spark. Match the missing pieces and help them wake up.",place:"Find the red-striped Reboot Clinic tent on the right."},{id:"maker",title:"Make something useful",clue:"A thirsty guest. A missing bag. A little light. The right ingredients make someone\u2019s day.",place:"Try the jars at the large cream tent in the middle."}];function $p(s){return`<p>The headliner is waiting for three little acts of kindness. Explore the festival and follow these clues in any order.</p><div class="festival-clues">${oM.map(e=>`<article class="${s.includes(e.id)?"clue-done":""}"><strong>${s.includes(e.id)?"\u2713":"\u25C7"} ${e.title}</strong><p>${s.includes(e.id)?"You made it happen.":e.clue}</p><small>${e.place}</small></article>`).join("")}</div><p class="callout">${s.length===3?"All three lights are on. Follow the path behind the tents to the main stage. Your concert is ready.":"Three completed challenges bring everyone together for One Island One View at the main stage."}</p><p>A different kind of secret waits at Lantern Pier. Someone left a canoe by the dock\u2026</p>`}var lM=[{id:"water",title:"Help a thirsty guest",prompt:"Bring water",context:["Thirsty guest","Dry tree"],tool:["Cup","Big watering can"],success:"A drink for our guest!",missing:"The tree got a drink. Add who needs help.",wrongContext:"Happy tree. Still-thirsty guest!",wrongTool:"That is a lot of watering can. Try a cup."},{id:"backpack",title:"Return the teal backpack",prompt:"Find a backpack",context:["Teal backpack","Red backpack"],tool:["Lost-property map","Leaf blower"],success:"Their backpack is back!",missing:"Two bags. Whose is it? Add the color.",wrongContext:"Nice bag. Wrong color!",wrongTool:"The leaves moved. The backpack did not."},{id:"stage",title:"Get the stage ready",prompt:"Light the stage",context:["Stage at dusk","Picnic table"],tool:["Stage switch","Flashlight"],success:"The stage is ready. Let\u2019s dance!",missing:"A lovely picnic light. Add where to shine.",wrongContext:"The picnic looks lovely. The stage is dark.",wrongTool:"One tiny spotlight. Try the stage switch."}];function cM(s){return[{id:"prompt",kind:"prompt",name:s.prompt,color:"#ed7850",symbol:"\u2726"},{id:"context0",kind:"context",name:s.context[0],color:"#a08ada",symbol:"\u25CE"},{id:"context1",kind:"context",name:s.context[1],color:"#a08ada",symbol:"\u25CE"},{id:"tool0",kind:"tool",name:s.tool[0],color:"#32afab",symbol:"\u2699"},{id:"tool1",kind:"tool",name:s.tool[1],color:"#32afab",symbol:"\u2699"}]}var id=class{constructor(){this.index=0,this.recipe={},this.phase="choose",this.solved=0,this.attempts=0}get challenge(){return lM[this.index]}get jars(){return cM(this.challenge)}add(e){if(this.phase!=="choose")return!1;let t=this.jars.find(i=>i.id===e);return t?(this.recipe[t.kind]=e,!0):!1}remove(e){return this.phase!=="choose"?!1:(delete this.recipe[e],!0)}run(){if(this.phase!=="choose"||!this.recipe.prompt)return null;this.phase="running",this.attempts++;let e=this.recipe;return this.outcome=e.context?e.context!=="context0"?"context":e.tool!=="tool0"?"tool":"success":"missing",this.outcome}settle(){return this.phase!=="running"?!1:(this.phase=this.outcome==="success"?"success":"choose",this.phase==="success"&&this.solved++,!0)}next(){return this.phase!=="success"?!1:this.index===2?(this.phase="complete",!0):(this.index++,this.recipe={},this.phase="choose",!0)}},tt=(...s)=>new R(...s),xi=(s,e={})=>new wt({color:s,roughness:.65,...e});function Wn(s,e,t,i,n){let r=new Fe(new bt(...t),n);return r.name=e,r.position.fromArray(i),r.castShadow=r.receiveShadow=!0,s.add(r),r}function Qt(s,e,t,i,n,r,a){let o=new Fe(new St(t,i,n,24),a);return o.name=e,o.position.fromArray(r),o.castShadow=o.receiveShadow=!0,s.add(o),o}function im(s,e="#234b45",t="#fff1ce",i=512,n=160){let r=document.createElement("canvas");r.width=i,r.height=n;let a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,i,n),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle",a.font="bold 44px Trebuchet MS";let o=s.split(" "),l="",c=[];for(let u of o)a.measureText(l+" "+u).width>i-30&&l?(c.push(l),l=u):l+=(l?" ":"")+u;c.push(l),c.forEach((u,d)=>a.fillText(u,i/2,n/2+(d-(c.length-1)/2)*49));let h=new mi(r);return h.colorSpace=at,new kt({map:h,side:lt})}function td(s,e,t,i,n){let r=new Fe(new zt(...t),im(e,n));return r.position.fromArray(i),s.add(r),r}function Ic(s,e,t){let i=s.libraries.get(e).scene,n;if(i.traverse(a=>{a.userData.asset_id===t&&(n=a)}),n??=i.getObjectByName(t),!n)throw Error("Missing mixer asset "+t);let r=qi(n);return r.position.set(0,0,0),r.rotation.set(0,0,0),r.traverse(a=>{a.isMesh&&(a.castShadow=a.receiveShadow=!0,a.isSkinnedMesh&&(a.frustumCulled=!1))}),r}function Qp(s){let e={};return s.traverse(t=>{if(t.isBone)for(let i of["upper_arm_L","upper_arm_R","forearm_L","forearm_R","head","hand_R","hand_L","thigh_L","thigh_R","shin_L","shin_R"])t.name.startsWith(i)&&(e[i]={bone:t,q:t.quaternion.clone()})}),e}function Ti(s,e,t,i,n=tt(0,0,1)){let r=e[t];if(!r)return;let a=r.bone.parent.getWorldQuaternion(new Je);n.applyQuaternion(s.getWorldQuaternion(new Je)).applyQuaternion(a.invert()),r.bone.quaternion.premultiply(new Je().setFromAxisAngle(n,i)),r.bone.updateWorldMatrix(!1,!0)}function em(s,e){return s.worldToLocal(e.localToWorld(tt(0,.055,0)))}function tm(s,e,t){s.position.copy(e).sub(t.clone().applyQuaternion(s.quaternion))}var Lc=class{constructor(e,t,{reduced:i=!1,onComplete:n=()=>{},onWin:r=()=>{},onPour:a=()=>{}}={}){this.e=e,this.kit=t,this.reduced=i,this.onComplete=n,this.onWin=r,this.onPour=a,this.active=!1,this.root=new Be,this.root.name="SkillMixingBooth",e.scene.add(this.root),this.root.visible=!1,this.build(),this.ray=new zn,this.pointer=new ie,this.plane=new ti(tt(0,0,1),-2.5),this.hit=tt(0,0,0),this.dragId=null,e.canvas.addEventListener("pointerdown",o=>this.down(o),!0),e.canvas.addEventListener("pointermove",o=>this.move(o),!0),e.canvas.addEventListener("pointerup",o=>this.up(o),!0),e.canvas.addEventListener("pointercancel",()=>this.cancel(),!0),e.canvas.addEventListener("lostpointercapture",()=>this.cancel(),!0)}build(){let e=xi("#98704a"),t=xi("#f4dfae"),i=xi("#246c66"),n=xi("#dfad49",{metalness:.3}),r=xi("#21423d");Wn(this.root,"Mixing bench",[3.5,.13,1.65],[0,.79,2.55],e);for(let f of[-1.45,1.45])for(let p of[1.95,3.1])Wn(this.root,"Bench leg",[.12,.73,.12],[f,.36,p],e);this.machine=new Be,this.machine.name="Skill mixing machine",this.machine.position.set(0,.85,1.95),this.root.add(this.machine),Qt(this.machine,"Mixer foot",.44,.5,.13,[0,.065,0],r),Qt(this.machine,"Canvas mixer body",.37,.37,.48,[0,.33,0],i),Qt(this.machine,"Open funnel",.48,.25,.25,[0,.695,0],n),Qt(this.machine,"Funnel opening",.405,.405,.015,[0,.825,0],r),this.liquid=Qt(this.machine,"Glowing mixture",.34,.34,.015,[0,.83,0],xi("#64d6bc",{emissive:"#41b38d",emissiveIntensity:.4})),td(this.machine,"TRY A SKILL",[.59,.18],[0,.37,.377]),this.handle=new Be,this.handle.position.set(.42,.38,0),this.machine.add(this.handle),Wn(this.handle,"Crank",[.23,.05,.05],[.09,0,0],n),Wn(this.handle,"Crank grip",[.065,.22,.065],[.2,.1,0],e),this.stream=Qt(this.root,"Pouring ingredient",.028,.028,.7,[0,1.95,1.95],xi("#ed7850",{emissive:"#ed7850",emissiveIntensity:.3})),this.stream.visible=!1,this.bubbles=Array.from({length:10},(f,p)=>{let x=new Fe(new br(.035+p%3*.012,1),xi(["#ed7850","#a08ada","#32afab"][p%3],{emissive:["#ed7850","#a08ada","#32afab"][p%3],emissiveIntensity:.15}));return this.root.add(x),x}),this.jars=[];for(let f=0;f<5;f++){let p=new Be;p.name="Ingredient jar "+f,p.position.set((f-2)*.64,.86,3.02),p.userData.jarIndex=f,p.userData.home=p.position.clone(),this.root.add(p);let x=["#ed7850","#a08ada","#a08ada","#32afab","#32afab"][f];Qt(p,"Glazed jar",.21,.2,.39,[0,.205,0],xi(x)),Qt(p,"Glass shoulder",.17,.21,.09,[0,.445,0],xi("#e3ead1",{transparent:!0,opacity:.55})),Qt(p,"Cork lid",.17,.17,.075,[0,.518,0],e);let m=new Fe(new yi(.207,.012,6,24),t);m.rotation.x=Math.PI/2,m.position.y=.06,p.add(m);let g=td(p,"",[.38,.2],[0,.22,.211]);p.userData.face=g,this.jars.push(p)}this.workbench=new Be,this.workbench.name="Mixing workbench";for(let f of[...this.root.children])this.workbench.add(f);this.root.add(this.workbench),this.helper=Ic(this.kit,"crowd_kit","crowd_1"),this.helper.name="Mixer helper",this.root.add(this.helper),this.helperBones=Qp(this.helper),this.guest=Ic(this.kit,"crowd_kit","crowd_5"),this.guest.name="Guest who needs help",this.root.add(this.guest),this.guestBones=Qp(this.guest),this.tree=new Be,this.tree.position.set(-1.35,0,-.7),this.root.add(this.tree),Qt(this.tree,"Sapling pot",.25,.17,.35,[0,.175,0],e),Qt(this.tree,"Sapling trunk",.035,.06,.9,[0,.75,0],e);for(let[f,p,x]of[[0,1.35,0],[-.22,1.12,.04],[.24,1.06,.03]]){let m=new Fe(new br(.34,1),xi("#6f9559"));m.position.set(f,p,x),m.scale.y=1.25,this.tree.add(m)}this.tealPack=Ic(this.kit,"props_kit","backpack_teal"),this.redPack=Ic(this.kit,"props_kit","backpack_rust"),this.root.add(this.tealPack,this.redPack);for(let f of[this.tealPack,this.redPack]){let p=new Fe(new yi(.055,.012,6,16),r);p.name="Backpack carry handle",p.position.set(0,.49,0),p.scale.y=.7,f.add(p)}this.stage=new Be,this.stage.position.set(.9,0,-.8),this.root.add(this.stage),Wn(this.stage,"Small stage",[1.7,.22,1.15],[0,.11,0],e);for(let f of[-.75,.75])Wn(this.stage,"Stage light pole",[.045,1.9,.045],[f,.95,-.5],n);td(this.stage,"PROMPTSTOCK",[1.45,.3],[0,1.7,-.46]);let a=new pi(new ze().setFromPoints([tt(-.75,1.9,-.5),tt(0,1.72,-.5),tt(.75,1.9,-.5)]),new Ci({color:"#554a38"}));this.stage.add(a),this.stageBulbs=Array.from({length:5},(f,p)=>{let x=new Fe(new Yt(.055,10,8),xi("#8c8966",{emissive:"#ffcf6b",emissiveIntensity:0}));return x.position.set((p-2)*.31,1.73+Math.abs(p-2)*.065,-.5),this.stage.add(x),x}),this.picnic=new Be,this.picnic.position.set(-1.5,0,-1),this.root.add(this.picnic),Wn(this.picnic,"Picnic table",[.9,.08,.6],[0,.5,0],e),Wn(this.picnic,"Picnic leg",[.12,.5,.12],[0,.25,0],e),this.picnicLamp=Qt(this.picnic,"Picnic lantern",.085,.085,.15,[0,.63,0],xi("#edc55e",{emissive:"#ffd76b",emissiveIntensity:0})),this.carried=new Be,this.root.add(this.carried),this.cup=new Be,this.carried.add(this.cup),Qt(this.cup,"Cup",.062,.047,.115,[0,0,0],t),Qt(this.cup,"Water surface",.052,.052,.004,[0,.053,0],xi("#6caaa8"));let o=new Fe(new yi(.035,.01,6,16),n);o.position.x=.065,this.cup.add(o),this.can=new Be,this.carried.add(this.can),Qt(this.can,"Oversized watering can",.31,.29,.48,[0,0,0],i);let l=Qt(this.can,"Can spout",.07,.09,.55,[.4,.06,0],i);l.rotation.z=-1;let c=new Fe(new yi(.29,.04,6,20),n);c.position.set(-.22,.15,0),this.can.add(c),this.blower=new Be,this.carried.add(this.blower),Wn(this.blower,"Leaf blower",[.3,.22,.24],[0,0,0],i);let h=Qt(this.blower,"Blower tube",.075,.12,.7,[.37,0,0],r);h.rotation.z=Math.PI/2,this.flashlight=new Be,this.carried.add(this.flashlight);let u=Qt(this.flashlight,"Flashlight",.09,.065,.3,[0,0,0],i);u.rotation.z=Math.PI/2;let d=new Fe(new nn(.22,.95,20,1,!0),new kt({color:"#fff1a7",transparent:!0,opacity:.12,depthWrite:!1,side:lt}));d.rotation.z=Math.PI/2,d.position.x=.65,this.flashlight.add(d),this.drops=Array.from({length:9},()=>{let f=new Fe(new Yt(.028,8,6),xi("#7bdcdd"));return this.root.add(f),f})}open(e){this.ui=e,this.puzzle=new id,this.active=!0,this.root.visible=!0,this.pouring=null,this.elapsed=0,this.completed=!1,this.e.canvas.style.touchAction="none",this.e.canvas.style.cursor="grab",this.refreshChallenge()}refreshChallenge(){this.resultView=!1,this.reveal=0,this.workbench.visible=!0,this.elapsed=0,this.pouring=null,this.stream.visible=!1,this.jars.forEach((e,t)=>{let i=e.userData.face;i.material.map?.dispose(),i.material.dispose(),i.material=im(this.puzzle.jars[t].name,"#234b45","#fff1ce",512,270),e.position.copy(e.userData.home),e.rotation.set(0,0,0)}),this.resetScene(),this.ui.querySelector("#playHint").textContent=this.puzzle.challenge.title,this.renderControls()}resetScene(){this.helper.position.set(-1.15,0,.05),this.helper.rotation.set(0,0,0),this.guest.position.set(1,0,0),this.guest.rotation.set(0,0,0),this.tree.visible=this.puzzle.index===0,this.tealPack.visible=this.redPack.visible=this.puzzle.index===1,this.tealPack.position.set(.1,0,-.5),this.redPack.position.set(-.65,0,-.6),this.stage.visible=this.picnic.visible=this.puzzle.index===2,this.stageBulbs.forEach(e=>e.material.emissiveIntensity=0),this.picnicLamp.material.emissiveIntensity=0,this.tealPack.rotation.set(0,0,0),this.redPack.rotation.set(0,0,0),this.carried.visible=!1,this.cup.visible=this.can.visible=this.blower.visible=this.flashlight.visible=!1,this.drops.forEach(e=>e.visible=!1)}renderControls(){let e=this.puzzle.challenge;this.ui.querySelector("#playDock").innerHTML=`<div class="mix-top"><strong>Experiment ${this.puzzle.index+1} / 3</strong><span id="mixStatus" role="status">Pick up a jar. Pour it into the funnel.</span></div><div class="mix-jars">${this.puzzle.jars.map((t,i)=>`<button data-jar="${t.id}" style="--jar:${t.color}" aria-label="Pour ${t.name}"><small>${t.kind}</small><strong>${t.name}</strong><kbd>${i+1}</kbd></button>`).join("")}</div><div class="mix-bottom"><div class="mix-recipe">${["prompt","context","tool"].map(t=>`<button data-remove="${t}" aria-label="Remove ${t}" disabled>${t} +</button>`).join("")}</div><button id="mixRun" class="primary" disabled>Mix & try</button><button id="mixNext" hidden>Next challenge \u2192</button></div>`,this.ui.querySelectorAll("[data-jar]").forEach(t=>t.onclick=()=>this.pour(t.dataset.jar)),this.ui.querySelectorAll("[data-remove]").forEach(t=>t.onclick=()=>{this.pouring||(this.puzzle.remove(t.dataset.remove),this.sync())}),this.ui.querySelector("#mixRun").onclick=()=>this.run(),this.ui.querySelector("#mixNext").onclick=()=>this.next(),this.sync()}say(e){let t=this.ui?.querySelector("#mixStatus");t&&(t.textContent=e)}sync(){if(!this.ui)return;let e=!!this.pouring||this.puzzle.phase!=="choose";this.ui.querySelectorAll("[data-jar]").forEach(i=>{i.disabled=e,i.setAttribute("aria-pressed",String(Object.values(this.puzzle.recipe).includes(i.dataset.jar)))}),this.ui.querySelectorAll("[data-remove]").forEach(i=>{let n=this.puzzle.recipe[i.dataset.remove],r=this.puzzle.jars.find(a=>a.id===n);i.textContent=r?r.name+" \xD7":i.dataset.remove+" +",i.disabled=e||!r}),this.ui.querySelector("#mixRun").disabled=e||!this.puzzle.recipe.prompt,this.ui.querySelector("#mixRun").hidden=this.puzzle.phase==="success";let t=this.ui.querySelector("#mixNext");t.hidden=this.puzzle.phase!=="success",t.textContent=this.puzzle.index===2?"Finish experiment \u2713":"Next challenge \u2192"}pour(e){return!this.active||this.pouring||this.puzzle.phase!=="choose"||!this.puzzle.add(e)?!1:(this.resultView=!1,this.resetScene(),this.pouring={index:this.puzzle.jars.findIndex(t=>t.id===e),time:0},this.onPour(),this.say("Pouring "+this.puzzle.jars[this.pouring.index].name.toLowerCase()+"\u2026"),this.sync(),!0)}run(){return this.pouring||!this.active||!this.puzzle.run()?!1:(this.elapsed=0,this.resetScene(),this.say("Let\u2019s see what happens\u2026"),this.sync(),!0)}next(){return!this.active||!this.puzzle.next()?!1:(this.puzzle.phase==="complete"?this.completed||(this.completed=!0,this.sync(),this.onComplete()):this.refreshChallenge(),!0)}camera(){let e=this.e.camera.aspect<.75,t=this.reveal||0,i=tt(0,e?4.2:3.6,e?10:7.65),n=tt(.15,2.65,e?7.2:5.4);this.e.setCamera(i.lerp(n,t).toArray(),tt(0,1,1.2).lerp(tt(.25,.85,-.25),t).toArray()),this.workbench.visible=t<.45}point(e){let t=this.e.canvas.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.e.camera)}down(e){if(!this.active||this.pouring||this.puzzle.phase!=="choose"||e.button!==0)return;this.point(e);let t=this.ray.intersectObjects(this.jars,!0)[0];if(!t)return;let i=t.object;for(;i&&i.userData.jarIndex===void 0;)i=i.parent;i&&(this.dragIndex=i.userData.jarIndex,this.dragId=e.pointerId,this.dragStart=[e.clientX,e.clientY],this.dragged=!1,this.e.canvas.setPointerCapture(e.pointerId),e.preventDefault(),e.stopImmediatePropagation())}move(e){this.dragId===e.pointerId&&(e.preventDefault(),e.stopImmediatePropagation(),Math.hypot(e.clientX-this.dragStart[0],e.clientY-this.dragStart[1])>5&&(this.dragged=!0),this.dragged&&(this.point(e),this.ray.ray.intersectPlane(this.plane,this.hit)&&this.jars[this.dragIndex].position.set(ct.clamp(this.hit.x,-2,2),ct.clamp(this.hit.y-.2,.8,2.6),2.5)))}up(e){if(e.pointerId!==this.dragId)return;e.preventDefault(),e.stopImmediatePropagation();let t=this.dragIndex,i=this.dragged;this.point(e);let n=this.machine.localToWorld(tt(0,.83,0)).project(this.e.camera),r=this.e.canvas.getBoundingClientRect(),a=Math.hypot((this.pointer.x-n.x)*r.width/2,(this.pointer.y-n.y)*r.height/2);this.cancel(),!i||a<70?this.pour(this.puzzle.jars[t].id):this.say("Drop over the funnel, or tap a jar to pour.")}cancel(){let e=this.dragId;if(this.dragId=null,this.dragIndex!==void 0){let t=this.jars[this.dragIndex];t.position.copy(t.userData.home)}this.dragIndex=void 0,this.dragged=!1,e!==null&&this.e.canvas.hasPointerCapture?.(e)&&this.e.canvas.releasePointerCapture(e)}key(e){!this.active||e.repeat||(/^Digit[1-5]$/.test(e.code)&&(e.preventDefault(),this.pour(this.puzzle.jars[Number(e.code.at(-1))-1].id)),e.code==="Enter"&&!e.target.closest("button,input")&&(e.preventDefault(),this.puzzle.phase==="success"?this.next():this.run()))}update(e,t){if(!this.active)return;e=Math.max(0,Math.min(.1,Number.isFinite(e)?e:0)),this.reveal=ct.damp(this.reveal||0,this.resultView?1:0,this.reduced?100:6,e),this.camera();for(let n of[this.helperBones,this.guestBones])for(let r of Object.values(n))r.bone.quaternion.copy(r.q);if(this.pouring){let n=this.pouring;n.time+=e;let r=Math.min(1,n.time/(this.reduced?.18:1.15)),a=this.jars[n.index],o=a.userData.home,l=Math.sin(Math.PI*r);a.position.copy(o).lerp(tt(-.25,2.02,1.95),Math.min(1,l*1.5)),a.rotation.z=l*-1.65,this.stream.visible=!this.reduced&&r>.25&&r<.75,this.stream.material.color.set(this.puzzle.jars[n.index].color),r===1&&(a.position.copy(o),a.rotation.z=0,this.pouring=null,this.stream.visible=!1,this.say("Ready to try? Missing ingredients are experiments too."),this.sync())}let i=this.puzzle.phase==="running";if(i){if(this.elapsed+=e,this.elapsed>1.1&&(this.resultView=!0),this.handle.rotation.x=this.reduced?0:this.elapsed*8,this.liquid.material.color.set(["#ed7850","#a08ada","#32afab"][Math.floor(this.elapsed*4)%3]),this.animateResult(this.elapsed,t),this.elapsed>5.2){this.puzzle.settle();let n=this.puzzle.challenge;this.say(this.puzzle.outcome==="success"?n.success:this.puzzle.outcome==="missing"?n.missing:this.puzzle.outcome==="context"?n.wrongContext:n.wrongTool),this.puzzle.outcome==="success"&&this.onWin(),this.sync(),this.puzzle.phase==="success"&&this.ui.querySelector("#mixNext")?.focus({preventScroll:!0})}}else this.resultView&&this.animateResult(5.2,t);this.bubbles.forEach((n,r)=>{n.visible=i&&!this.reduced&&this.elapsed<1.3,n.position.set(Math.sin(t*3+r)*.26,1.7+(t*1.5+r*.13)%1*.55,1.95+Math.cos(t*3+r)*.22)})}animateResult(e,t){let i=this.puzzle.outcome,n=this.puzzle.index,r=i==="success",a=ct.smoothstep(e,1.25,3.25),o=ct.smoothstep(e,3.25,4.25),l=this.reduced?0:Math.sin((e-3.25)*3)*Math.sin(Math.PI*o)*.07,c=n===0?tt(i==="missing"||i==="context"?-1.8:-.15,0,.05):n===1?tt(-.4,0,-.25):tt(-.6,0,-.2);this.helper.position.lerpVectors(tt(-1.15,0,.05),c,a),this.helper.rotation.y=Math.sin(Math.PI*a)*.25,this.helper.position.y=0,this.guest.position.y=0,this.helper.updateWorldMatrix(!0,!0),this.guest.updateWorldMatrix(!0,!0);let h=this.reduced?0:Math.sin(a*Math.PI*4)*Math.sin(a*Math.PI)*.22;if(Ti(this.helper,this.helperBones,"thigh_L",h,tt(1,0,0)),Ti(this.helper,this.helperBones,"thigh_R",-h,tt(1,0,0)),Ti(this.helper,this.helperBones,"shin_L",Math.max(0,-h)*.5,tt(1,0,0)),Ti(this.helper,this.helperBones,"shin_R",Math.max(0,h)*.5,tt(1,0,0)),Ti(this.helper,this.helperBones,"upper_arm_R",-.45*a*(1-o*.65),tt(1,0,0)),Ti(this.helper,this.helperBones,"forearm_R",-.8*a*(1-o*.65),tt(1,0,0)),Ti(this.helper,this.helperBones,"head",l,tt(1,0,0)),r){let p=n===0,x=n===1;Ti(this.guest,this.guestBones,"upper_arm_L",p?-.42*o:x?-.08*o:-.2*o,tt(1,0,0)),Ti(this.guest,this.guestBones,"upper_arm_L",x?-.22*o:-.1*o),Ti(this.guest,this.guestBones,"forearm_L",p?-.98*o:x?-.12*o:-.6*o,tt(1,0,0)),Ti(this.guest,this.guestBones,"upper_arm_R",(.18+l)*o),Ti(this.guest,this.guestBones,"forearm_R",-.8*o,tt(1,0,0)),Ti(this.guest,this.guestBones,"head",l,tt(1,0,0))}else Ti(this.guest,this.guestBones,"head",this.reduced?0:Math.sin(e*3)*o*.09,tt(0,1,0));this.helper.updateWorldMatrix(!0,!0),this.guest.updateWorldMatrix(!0,!0);let u=this.helperBones.hand_R?em(this.root,this.helperBones.hand_R.bone):this.helper.position.clone().add(tt(.36,.94,.24)),d=this.guestBones.hand_L?em(this.root,this.guestBones.hand_L.bone):this.guest.position.clone().add(tt(-.36,.94,.24));this.carried.visible=e>1.25,this.carried.rotation.set(0,this.helper.rotation.y*(1-o),0);let f=u.clone();if(n===0&&r&&f.lerp(d,o),tm(this.carried,f,tt(n===0&&i!=="tool"?.088:0,0,0)),this.cup.visible=n===0&&i!=="tool",this.can.visible=n===0&&i==="tool",this.blower.visible=n===1&&i==="tool",this.flashlight.visible=n===2,n===1&&e>1.8&&i!=="tool"){let p=r?this.tealPack:this.redPack;p.rotation.set(0,this.helper.rotation.y*(1-o),0);let x=u.clone();r&&x.lerp(d,o),tm(p,x,tt(0,.525,0));let m=ct.smoothstep(e,1.8,2.5),g=r?tt(.1,0,-.5):tt(-.65,0,-.6);p.position.lerpVectors(g,p.position.clone(),m)}this.drops.forEach((p,x)=>{p.visible=n===0&&!r&&o>.3&&!this.reduced;let m=i==="missing"||i==="context"?tt(-1.35,.35,-.7):tt(.55,.02,.4);p.position.copy(this.carried.position).lerp(m,(t*1.6+x*.1)%1).add(tt(x*.006,0,0)),n===1&&i==="tool"?(p.visible=o>.1&&!this.reduced,p.material.color.set("#cab973"),p.scale.set(1,.25,1.7),p.position.set(.1+(t*1.2+x*.16)%1*1.2,.1+Math.abs(Math.sin(t*4+x))*.35,-.1+x*.03)):(p.material.color.set("#7bdcdd"),p.scale.set(1,1,1))}),n===2&&(this.flashlight.visible=i==="tool",this.stageBulbs.forEach(p=>p.material.emissiveIntensity=r&&o>.2?1.5:0),this.picnicLamp.material.emissiveIntensity=(i==="context"||i==="missing")&&o>.2?2:0)}close(){this.cancel(),this.active=!1,this.root.visible=!1,this.pouring=null,this.stream.visible=!1,this.ui=null,this.e.canvas.style.touchAction="",this.e.canvas.style.cursor=""}};var so=Object.freeze([{id:"focus",name:"Focus lens",symbol:"\u25C9",color:"#37bfa5",target:[-.2,.7],turn:0,home:[-.39,.33]},{id:"spark",name:"Power cell",symbol:"\u03DF",color:"#efb63c",target:[0,.59],turn:1,home:[0,.33]},{id:"signal",name:"Signal chip",symbol:"\u2318",color:"#ed7650",target:[.2,.7],turn:3,home:[.39,.33]}]),nd=s=>(s%4+4)%4,sd=class{constructor(e=1){this.parts=so.map((t,i)=>({...t,rotation:nd(t.turn+1+(e+i)%2),position:[...t.home],fitted:!1})),this.charge=0,this.completed=!1,this.mistakes=0}get ready(){return this.parts.every(e=>e.fitted)}rotate(e){let t=this.parts.find(i=>i.id===e);return!t||t.fitted||this.completed?!1:(t.rotation=nd(t.rotation+1),!0)}drop(e,t){let i=this.parts.find(r=>r.id===e);return!i||i.fitted||this.completed?"locked":t.every(Number.isFinite)?Math.hypot(t[0]-i.target[0],t[1]-i.target[1])<.135?nd(i.rotation)!==i.turn?(this.mistakes++,i.position=[...i.home],"rotate"):(i.fitted=!0,i.position=[...i.target],"fitted"):(i.position=[...i.home],"miss"):"miss"}power(e,t){return!Number.isFinite(e)||e<=0||!this.ready||this.completed?!1:(this.charge=Math.max(0,Math.min(1,this.charge+Math.min(e,.1)*(t?.8:-1.2))),this.charge>=1?(this.completed=!0,!0):!1)}};function hM(s,e){let t=new yr,i;return s===0?i=Array.from({length:32},(n,r)=>{let a=r/32*Math.PI*2,o=r===7||r===8||r===9?e*.67:e;return[o*Math.cos(a),o*Math.sin(a)]}):s===1?i=[[-e,-e],[e*.12,-e],[e*.12,-e*.1],[e,-e*.1],[e,e],[-e,e]]:i=Array.from({length:12},(n,r)=>{let a=r/12*Math.PI*2,o=r===3?e*.6:e*(r%2?.83:1);return[o*Math.cos(a),o*Math.sin(a)]}),i.forEach((n,r)=>r?t.lineTo(...n):t.moveTo(...n)),t.closePath(),t}var Ei=(s,e={})=>new wt({color:s,roughness:.65,...e}),nm=(s,e,t)=>new Aa(hM(s,e),{depth:t,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.006,bevelThickness:.004,curveSegments:16}),Dc=class{constructor(e,t,{onFit:i=()=>{},onComplete:n=()=>{},reduced:r=!1,home:a=null}={}){this.e=e,this.robot=t,this.onFit=i,this.onComplete=n,this.reduced=r,this.group=new Be,this.group.name="RobotRepairBench",e.scene.add(this.group),this.group.visible=!1,this.active=!1,this.homes=new Map,this.meshes=[],this.sockets=[],this.traces=[],this.lights=[],this.ray=new zn,this.pointer=new ie,this.intersection=new R,this.plane=new ti,this.home=(a||t.position).clone(),this.homeRotation=t.quaternion.clone();let o=(h,u,d,f=this.group)=>{let p=new Fe(h,u);return p.position.set(...d),p.castShadow=p.receiveShadow=!0,f.add(p),p};this.add=o,o(new bt(.76,.4,.07),Ei("#284e49"),[0,.66,.22]);let l=Ei("#d2b36d",{metalness:.3});for(let h of[-.355,.355])for(let u of[.495,.825]){let d=o(new St(.018,.018,.015,8),l,[h,u,.265]);d.rotation.x=Math.PI/2}o(new bt(1.12,.055,.34),Ei("#bc9257"),[0,.2,.42]);for(let h of[-.55,.55])o(new bt(.025,.1,.34),l,[h,.235,.42]);so.forEach((h,u)=>{let d=o(nm(u,.083,.012),Ei("#142d2b"),[...h.target,.264]);d.rotation.z=h.turn*Math.PI/2,this.sockets.push(d),o(new bt(.025,.022,.012),l,[0,.093,.014],d);let f=new Be;f.userData.repairPart=h.id,f.name="repair_"+h.id,this.group.add(f),this.meshes.push(f);let p=o(nm(u,.068,.026),Ei(h.color,{metalness:.15}),[0,0,0],f);if(p.userData.repairPart=h.id,o(new bt(.024,.018,.012),Ei("#fff1c4"),[0,.068,.04],f),u===0){let g=o(new St(.036,.036,.012,24),Ei("#183f43",{metalness:.6,roughness:.18}),[0,0,.039],f);g.rotation.x=Math.PI/2}if(u===1)for(let g of[-.032,.032])o(new bt(.05,.015,.016),Ei("#fff0b8",{metalness:.5}),[-.015,g,.038],f);if(u===2){o(new bt(.051,.048,.012),Ei("#263c3a"),[0,0,.037],f);for(let g of[-.041,.041])for(let y of[-.024,0,.024])o(new bt(.019,.008,.007),l,[g,y,.034],f)}let x=new Fe(new As(new ns([new R(h.target[0],h.target[1]-.085,.266),new R(h.target[0],.49,.266),new R(0,.465,.266)]),8,.006,4,!1),Ei("#566e55",{emissive:h.color,emissiveIntensity:0}));this.group.add(x),this.traces.push(x);let m=o(new Yt(.018,8,6),Ei(h.color,{emissive:h.color,emissiveIntensity:0}),[(u-1)*.06,.445,.277]);this.lights.push(m)}),this.face=new Be,this.face.position.set(0,1.03,.229),this.group.add(this.face),o(new bt(.43,.21,.013),Ei("#163d39"),[0,0,0],this.face),this.eyes=[];for(let h of[-.12,.12])this.eyes.push(o(new bt(.067,.022,.012),Ei("#dd9447",{emissive:"#dd9447",emissiveIntensity:.3}),[h,0,.016],this.face));let c=new is(0,-.014,.065,.045,Math.PI,2*Math.PI,!1,0);this.smile=new pi(new ze().setFromPoints(c.getPoints(16).map(h=>new R(h.x,h.y,.027))),new Ci({color:"#9ff3bf"})),this.face.add(this.smile),this.smile.visible=!1,this.progress=new Fe(new yi(.1,.007,5,40,Math.PI*2),Ei("#66deb0",{emissive:"#66deb0",emissiveIntensity:.7})),this.progress.position.set(0,.91,.25),this.progress.visible=!1,this.group.add(this.progress),this.events={down:h=>this.down(h),move:h=>this.move(h),up:h=>this.up(h),cancel:()=>this.cancel()},e.canvas.addEventListener("pointerdown",this.events.down,!0),e.canvas.addEventListener("pointermove",this.events.move,!0),e.canvas.addEventListener("pointerup",this.events.up,!0),e.canvas.addEventListener("pointercancel",this.events.cancel,!0),e.canvas.addEventListener("lostpointercapture",this.events.cancel,!0)}open(e,t){this.ui=t,this.puzzle=new sd(e),this.selected=null,this.held=!1,this.dragId=null,this.done=!1,this.reveal=0,this.active=!0,this.group.visible=!0,this.robot.position.copy(this.home),this.robot.quaternion.copy(this.homeRotation),this.group.position.copy(this.home),this.group.rotation.set(0,0,0),this.robot.rotation.set(0,0,0),this.e.canvas.style.touchAction="none",this.e.canvas.style.cursor="grab",this.smile.visible=!1,this.eyes.forEach(i=>{i.scale.y=1,i.material.color.set("#dd9447"),i.material.emissive.set("#dd9447")}),this.sync(!0)}camera(){let e=this.e.camera.aspect<.75,t=this.reveal||0,i=t*t*(3-2*t);this.e.setCamera([this.home.x,ct.lerp(e?1.19:1.32,1.85,i),this.home.z+ct.lerp(e?2.05:1.78,3.6,i)],[this.home.x,ct.lerp(.64,.84,i),this.home.z+.24])}state(){return this.puzzle.parts.map((e,t)=>({id:e.id,fitted:e.fitted,rotation:e.rotation,position:this.meshes[t].position.toArray()}))}sync(e=!1){this.puzzle.parts.forEach((t,i)=>{let n=this.meshes[i];e&&n.position.set(t.position[0],t.position[1],t.fitted?.285:.43),n.rotation.z=t.rotation*Math.PI/2,this.traces[i].material.emissiveIntensity=t.fitted?.8:0,this.lights[i].material.emissiveIntensity=t.fitted?1.4:0,this.sockets[i].material.color.set(t.fitted?"#237d67":"#142d2b")}),this.ui&&(this.ui.querySelectorAll("[data-repair-part]").forEach(t=>{let i=this.puzzle.parts.find(n=>n.id===t.dataset.repairPart);t.disabled=i.fitted,t.setAttribute("aria-pressed",String(this.selected===i.id)),t.querySelector("small").textContent=i.fitted?"Fitted":i.name}),this.ui.querySelector("#repairCount").textContent=`${this.puzzle.parts.filter(t=>t.fitted).length} / 3 fitted`,this.ui.querySelector("#repairRotate").disabled=!this.selected||this.puzzle.completed,this.ui.querySelector("#repairFit").disabled=!this.selected||this.puzzle.completed,this.ui.querySelector("#repairPower").disabled=!this.puzzle.ready||this.puzzle.completed)}say(e){let t=this.ui?.querySelector("#repairStatus");t&&(t.textContent=e)}select(e){if(!this.active||this.puzzle.completed)return!1;let t=this.puzzle.parts.find(i=>i.id===e);return!t||t.fitted?!1:(this.selected=e,this.say("Match the shape and the gold marker."),this.sync(),!0)}rotate(){this.selected&&this.puzzle.rotate(this.selected)&&(this.sync(),this.say("Quarter turn. Line up the gold markers."))}fit(e){if(!this.selected)return;let t=this.selected,i=this.puzzle.parts.find(r=>r.id===t),n=this.puzzle.drop(t,e||i.target);return n==="fitted"?(this.selected=null,this.say(this.puzzle.ready?"All connected. Hold POWER to wake your friend.":"Click. Connected!"),this.onFit()):this.say(n==="rotate"?"The marker is turned. Rotate the part and try again.":"Move the part over its matching socket."),this.sync(),n}point(e){let t=this.e.canvas.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.e.camera)}down(e){if(!this.active||this.done||e.button!==0)return;this.point(e);let t=this.ray.intersectObjects(this.meshes,!0).find(n=>{let r=n.object;for(;r&&!r.userData.repairPart;)r=r.parent;return r&&!this.puzzle.parts.find(a=>a.id===r.userData.repairPart).fitted});if(!t)return;let i=t.object;for(;i&&!i.userData.repairPart;)i=i.parent;this.select(i.userData.repairPart),this.dragId=e.pointerId,this.dragged=!1,this.dragStart=[e.clientX,e.clientY],this.e.canvas.setPointerCapture(e.pointerId),this.e.canvas.style.cursor="grabbing",e.preventDefault(),e.stopImmediatePropagation()}move(e){if(!(!this.active||e.pointerId!==this.dragId||!this.selected)&&(e.preventDefault(),e.stopImmediatePropagation(),Math.hypot(e.clientX-this.dragStart[0],e.clientY-this.dragStart[1])>5&&(this.dragged=!0),!!this.dragged&&(this.point(e),this.plane.set(new R(0,0,1),-(this.home.z+.34)),this.ray.ray.intersectPlane(this.plane,this.intersection)))){let t=this.puzzle.parts.find(i=>i.id===this.selected);t.position=[ct.clamp(this.intersection.x-this.home.x,-.68,.68),ct.clamp(this.intersection.y,.16,1.2)],this.meshes[this.puzzle.parts.indexOf(t)].position.set(...t.position,.34)}}up(e){if(e.pointerId!==this.dragId)return;e.preventDefault(),e.stopImmediatePropagation();let t=this.dragged;this.dragId=null,this.e.canvas.releasePointerCapture(e.pointerId),this.e.canvas.style.cursor="grab",t&&this.selected&&this.fit(this.puzzle.parts.find(i=>i.id===this.selected).position)}cancel(){if(this.held=!1,this.dragId!==null&&this.selected){let e=this.puzzle.parts.find(t=>t.id===this.selected);e.position=[...e.home]}this.dragId=null,this.dragged=!1}update(e,t){if(!this.active)return;this.done&&(this.reveal=this.reduced?1:Math.min(1,this.reveal+e*.85)),this.camera(),this.puzzle.parts.forEach((r,a)=>{let o=this.meshes[a];if(this.dragId!==null&&r.id===this.selected)return;let l=r.id===this.selected,c=new R(r.position[0],r.position[1]+(l&&!r.fitted?.035:0),r.fitted?.285:l?.49:.43);o.position.lerp(c,this.reduced?1:1-Math.exp(-Math.min(e,.1)*16))});let i=this.puzzle.power(e,this.held);this.progress.visible=this.puzzle.charge>0&&!this.done,this.progress.scale.setScalar(.7+this.puzzle.charge*.3);let n=this.ui?.querySelector("#repairPower");n&&(n.style.setProperty("--charge",`${this.puzzle.charge*100}%`),n.textContent=this.done?"Awake!":this.puzzle.ready?`Hold POWER${this.puzzle.charge>0?" \xB7 "+Math.round(this.puzzle.charge*100)+"%":""}`:"POWER"),i&&(this.done=!0,this.held=!1,this.smile.visible=!0,this.eyes.forEach(r=>{r.scale.y=2.6,r.material.color.set("#9ff3bf"),r.material.emissive.set("#9ff3bf")}),this.sync(),this.say("Ready for the festival. Thank you!"),this.onComplete()),this.done&&!this.reduced&&(this.robot.rotation.z=Math.sin(t*4)*.035)}close(){this.cancel(),this.active=!1,this.group.visible=!1,this.e.canvas.style.touchAction="",this.e.canvas.style.cursor="",this.robot.rotation.z=0,this.ui=null}};var Nc=Object.freeze([[-4.7,-29.2],[-2.8,-29.6],[-.7,-29.1],[1.3,-29.5],[3.4,-29.1],[5.5,-29.4],[-4,-27.2],[-1.7,-27.5],[1,-27.2],[-6.6,-27.7],[6.8,-27.3]]);function sm(s){let e=260913,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),i=[];for(let n=0;i.length<s&&n<5e4;n++){let r=[(t()-.5)*18,-27+t()*12];[...Nc,...i].every(a=>Math.hypot(r[0]-a[0],r[1]-a[1])>1.35)&&i.push(r)}if(i.length!==s)throw Error("Concert lawn is full");for(let n=i.length-1;n>0;n--){let r=Math.floor(t()*(n+1));[i[n],i[r]]=[i[r],i[n]]}return i.map(([n,r])=>({x:n,z:r,yaw:Math.PI+(t()-.5)*.55}))}var ei=(...s)=>new R(...s),uM=s=>s*s*(3-2*s),Uc=[[0,[13,9,-13],[0,3,-33]],[15,[6,5,-24],[0,2.8,-33]],[32,[2.5,3,-28],[0,2.8,-33.5]],[52,[-9,4,-27],[-1,2.8,-33]],[72,[-7,3,-35],[1,1.4,-24]],[92,[8,6,-22],[0,2.8,-33]],[112,[3,3.2,-28],[0,2.8,-33.5]],[136,[-8,4.5,-25],[0,2.8,-33]],[160,[10,7,-20],[0,2.5,-30]],[180,[0,9,-14],[0,2.5,-31]],[194,[0,11,-10],[0,3,-31]]];function rm(s,{steady:e=!1,aspect:t=1.6}={}){if(e)return{position:[0,t<1?9:6,t<1?-12:-21],target:[0,2.8,-33]};let i=Math.max(0,Math.min(194,Number(s)||0)),n=0;for(;n<Uc.length-2&&i>Uc[n+1][0];)n++;let r=t<1?Uc.map(u=>u[0]===72?[72,[6,4,-30],[0,1.5,-27]]:[u[0],[u[1][0]*.65,u[1][1]+3,u[1][2]+8],u[2]]):Uc,a=r[n],o=r[n+1],l=uM(ct.clamp((i-a[0])/(o[0]-a[0]),0,1)),c=a[1].map((u,d)=>ct.lerp(u,o[1][d],l)),h=a[2].map((u,d)=>ct.lerp(u,o[2][d],l));return{position:c,target:h}}function om(s,e=1024,t=512){let i=document.createElement("canvas");i.width=e,i.height=t,s(i.getContext("2d"),e,t);let n=new mi(i);return n.colorSpace=at,n}function dM(){return om((s,e,t)=>{s.fillStyle="#fff9e9",s.fillRect(0,0,e,t),s.fillStyle="#df253a";for(let i=0;i<5;i+=2)s.fillRect(0,i*t/5,e,t/5);s.fillStyle="#1463bb",s.beginPath(),s.moveTo(0,0),s.lineTo(e*.44,t/2),s.lineTo(0,t),s.fill(),s.fillStyle="white",s.beginPath();for(let i=0;i<10;i++){let n=-Math.PI/2+i*Math.PI/5,r=i%2?t*.09:t*.22;s.lineTo(e*.15+Math.cos(n)*r,t/2+Math.sin(n)*r)}s.closePath(),s.fill()},768,512)}function am(s){let e={};return s.traverse(t=>{t.isBone&&(e[t.name]={b:t,q:t.quaternion.clone()})}),{o:s,bones:e}}function on(s,e,t,i=ei(0,0,1)){let n=Object.values(s.bones).find(l=>l.b.name.startsWith(e));if(!n)return;let r=n.b,a=r.parent.getWorldQuaternion(new Je),o=s.o.getWorldQuaternion(new Je);r.quaternion.premultiply(new Je().setFromAxisAngle(i.clone().applyQuaternion(o).applyQuaternion(a.invert()),t)),r.updateWorldMatrix(!1,!0)}function fM(s){return{o:s,p:s.position.clone(),q:s.quaternion.clone(),visible:s.visible}}var ds=(s,e={})=>new wt({color:s,roughness:.65,...e});function ri(s,e,t,i){let n=new Fe(e,t);return i&&n.position.fromArray(i),n.castShadow=!0,n.receiveShadow=!0,s.add(n),n}function zr(s,e,t,i){return ri(s,new bt(...e),i,t)}var Fc=class{constructor(e,t,{reduced:i=!1}={}){this.e=e,this.kit=t,this.reduced=i,this.steady=i,this.active=!1,this.built=!1,this.crowdMatrix=new Le,this.crowdRotation=new Je,this.crowdAxis=ei(0,0,1)}build(){if(this.built)return;this.built=!0,this.root=new Be,this.root.name="One Island One View \xB7 concert kit",this.e.scene.add(this.root),this.root.visible=!1,this.flagMaterial=ds("white",{map:dM(),side:lt,roughness:1});let e=new sn;this.orbit=e.load("assets/concert/puerto-rico-orbit.jpg"),this.orbit.colorSpace=at,this.landsat=e.load("assets/concert/puerto-rico-landsat.jpg"),this.landsat.colorSpace=at,this.photoMaterials=[this.orbit,this.landsat].map(o=>ds("white",{map:o,side:lt,emissive:"white",emissiveMap:o,emissiveIntensity:.22})),this.dark=ds("#162b3d"),this.gold=ds("#e8b872",{metalness:.65}),this.paper=ds("#fff4dd"),this.wood=ds("#956136"),zr(this.root,[14.8,.12,6.4],[0,1.25,-34],this.dark),zr(this.root,[12.9,5.7,.15],[0,4.48,-36.8],this.dark),ri(this.root,new zt(12.5,5.2),this.photoMaterials[0],[0,4.4,-36.69]);let t=om((o,l,c)=>{o.fillStyle="#102638",o.fillRect(0,0,l,c),o.fillStyle="#f9e9c6",o.textAlign="center",o.font="bold 64px Georgia",o.fillText("ONE ISLAND ONE VIEW",l/2,100),o.font="24px sans-serif",o.fillStyle="#74d5d6",o.fillText("BORINQU\xC9N  \u2022  PUERTO RICO  \u2022  PROMPTSTOCK FINALE",l/2,157)},1536,210);ri(this.root,new zt(12.5,1.71),new kt({map:t}),[0,6.2,-36.55]);for(let o of[-6.65,6.65]){zr(this.root,[.15,5.5,.15],[o,4,-36.35],this.gold);let l=ri(this.root,new zt(1.5,1),this.flagMaterial,[o,5.3,-36.25]);l.rotation.y=o<0?.15:-.15}this.band=[[-.5,-32.6,4],[-3.7,-33.5,2],[3.5,-33.7,5],[.1,-35.5,1]].map(([o,l,c],h)=>{let u=this.kit.libraries.get("crowd_kit").scene.getObjectByName("crowd_"+c),d=qi(u);return d.position.set(o,1.32,l),d.rotation.y=0,d.name=["Borinquen vocalist","Borinquen cuatro player","Borinquen bassist","Borinquen percussionist"][h],d.traverse(f=>{f.isSkinnedMesh&&(f.frustumCulled=!1),f.isMesh&&(f.castShadow=!0)}),this.root.add(d),am(d)});let i=ri(this.root,new St(.023,.023,1.5,10),this.dark,[-.5,2.08,-32.12]);ri(this.root,new Yt(.085,12,8),this.dark,[-.5,2.92,-32.12]),ri(this.root,new St(.28,.28,.05,16),this.dark,[-.5,1.34,-32.12]),this.instruments=[];for(let[o,l,c]of[[-3.7,-33.2,!1],[3.5,-33.4,!0]]){let h=new Be;h.position.set(o,2.25,l),h.rotation.z=-.5,this.root.add(h),ri(h,new Yt(1,20,12),ds(c?"#9b2638":"#d9a05a"),[0,0,0]).scale.set(.25,.34,.09),zr(h,[.08,.65,.06],[0,.49,0],this.wood),ri(h,new tn(.068,16),this.dark,[0,.06,.094]);for(let d=0;d<(c?4:10);d++)zr(h,[.002,.8,.002],[(d-4.5)*.007,.2,.1],this.gold);this.instruments.push(h)}for(let o of[-.6,.6])ri(this.root,new St(.24,.18,.85,16),ds("#ba5234"),[o,1.77,-34.75]),ri(this.root,new St(.245,.245,.045,20),this.paper,[o,2.21,-34.75]);this.lights=[];for(let o=0;o<6;o++){let l=-6+o*2.4,c=o%3===0?"#ff446b":o%3===1?"#57cfff":"#ffd28b";if(o===1||o===4){let h=new Gi(c,26,17,2);h.position.set(l,5,-33.5),this.root.add(h),this.lights.push(h)}ri(this.root,new Yt(.13,12,8),new kt({color:c}),[l,7,-36.1])}this.beams=[];for(let o=0;o<4;o++){let l=new nn(1.7,10,24,1,!0);l.translate(0,-5,0);let c=ri(this.root,l,new kt({color:o%2?"#5bbfff":"#ffba8b",transparent:!0,opacity:.045,depthWrite:!1,side:lt,blending:Fa}),[-6+o*4,7,-36]);c.castShadow=!1,this.beams.push(c)}let n=new ze,r=new Float32Array(720),a=new Float32Array(720);for(let o=0;o<240;o++)r.set([Math.sin(o*37)*11,2+o%29*.29,-31+Math.cos(o*17)*8],o*3),new ve(["#ff5568","#fff5d5","#75c6ff"][o%3]).toArray(a,o*3);n.setAttribute("position",new Lt(r,3)),n.setAttribute("color",new Lt(a,3)),this.confetti=new Nn(n,new fn({size:.065,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1})),this.root.add(this.confetti),this.confettiBase=r.slice(),this.props=[]}prop(e,t){let i=new Be;i.name=e==="flag"?"Puerto Rican flag":"Puerto Rico satellite sign",this.root.add(i);let n=ri(i,new St(.012,.012,e==="flag"?1.15:.65,8),this.wood,[0,e==="flag"?.45:.2,0]),r;e==="flag"?r=ri(i,new zt(.78,.52,14,8),this.flagMaterial,[.39,.85,0]):(zr(i,[.93,.65,.035],[0,.62,0],this.paper),ri(i,new zt(.85,.55),this.photoMaterials[t%2],[0,.64,.022]),ri(i,new zt(.85,.55),this.photoMaterials[t%2],[0,.64,-.022]).rotation.y=Math.PI);let a={g:i,cloth:r,index:t};return this.props.push(a),a}buildAudienceProps(){if(this.audiencePropBatches)return;this.audiencePropBatches=[],this.propGrip=ei(),this.propScale=ei(1,1,1),this.propTilt=new Je;let e=[],t=[[],[]];this.seats.forEach((n,r)=>{r%3!==0&&(r%4===0?t[r%8===0?0:1].push(r):e.push(r))});let i=(n,r,a)=>{if(!a.length)return;let o=new ni(n,r,a.length);o.name="Audience flags and Puerto Rico signs",o.castShadow=!1,o.frustumCulled=!1,this.root.add(o),this.audiencePropBatches.push({o,indices:a})};i(new St(.012,.012,1.7,6).translate(0,.76,0),this.wood,e),i(new zt(.78,.52,1,1).translate(.38,1.43,0),this.flagMaterial,e);for(let n=0;n<2;n++)i(new St(.012,.012,1.35,6).translate(0,.6,0),this.wood,t[n]),i(new bt(.93,.65,.025).translate(0,1.17,0),this.paper,t[n]),i(new zt(.85,.55).translate(0,1.17,.017),this.photoMaterials[n],t[n]),i(new zt(.85,.55).rotateY(Math.PI).translate(0,1.17,-.017),this.photoMaterials[n],t[n])}open(){this.build(),this.active=!0,this.root.visible=!0,this.time=0,this.lastPoseTime=-1,this.steady=this.reduced,this.saved=[],this.rigs=[],this.batches=[];let e=new Set;this.kit.group.traverse(o=>{if(o.isInstancedMesh&&o.name.startsWith("Festival guests"))for(let l=0;l<o.count;l++)e.add(o.name+":"+l)});let t=sm(e.size),i=0,n=new Map;this.kit.group.traverse(o=>{if(!o.isInstancedMesh||!o.name.startsWith("Festival guests"))return;let l=o.instanceMatrix.array.slice(),c=[];for(let h=0;h<o.count;h++){let u=new Le().fromArray(l,h*16),d=ei(),f=new Je,p=ei();u.decompose(d,f,p);let x=o.name+":"+h,m=n.get(x);if(!m){let g=t[i];m={p:ei(g.x,0,g.z),q:new Je().setFromAxisAngle(ei(0,1,0),g.yaw),phase:i,scale:p.clone(),grip:ei(...o.userData.handGrip||[0,100,0])},m.animatedP=m.p.clone(),m.animatedQ=m.q.clone(),n.set(x,m),i++}c.push({...m,s:p})}this.batches.push({o,original:l,positions:c,castShadow:o.castShadow}),o.castShadow=!1}),this.seats=[...n.values()],this.audienceCount=this.seats.length,this.flagMaterial&&this.buildAudienceProps();let r=this.e.contactShadows?.[0]?.mesh;if(r&&!this.audienceContacts){let o=r.material.clone();o.vertexShader=o.vertexShader.replace("modelViewMatrix*vec4(position,1.)","modelViewMatrix*instanceMatrix*vec4(position,1.)"),this.audienceContacts=new ni(r.geometry,o,this.seats.length),this.audienceContacts.name="Concert audience contact shadows",this.root.add(this.audienceContacts)}if(this.audienceContacts){for(let o=0;o<this.seats.length;o++){let l=this.seats[o].p;this.crowdMatrix.makeScale(.75,1,.6).setPosition(l.x,.027,l.z),this.audienceContacts.setMatrixAt(o,this.crowdMatrix)}this.audienceContacts.instanceMatrix.needsUpdate=!0,this.audienceContacts.computeBoundingSphere()}["guest_0","guest_1","guest_2","guest_3","guest_4","guest_5","repair_helper_0","repair_helper_1","hero","robot","dog"].forEach((o,l)=>{let c=this.kit.instances.get(o);if(!c)return;this.saved.push(fM(c)),c.visible=!0,c.position.set(Nc[l][0],0,Nc[l][1]),c.rotation.set(0,Math.PI,0);let h=am(c);h.base=c.position.clone(),h.id=o,l<9&&(h.prop=this.prop(l%3===1?"sign":"flag",l),h.hand=Object.values(h.bones).find(u=>u.b.name.startsWith("hand_R"))?.b),this.rigs.push(h)}),this.legacy=[],this.hiddenNodes=[];for(let o of this.e.batches||[]){if(!o.mesh?.isInstancedMesh)continue;let l=o.mesh.instanceMatrix.array.slice(),c=!1;for(let h=0;h<o.nodes.length;h++){let u=new Le().fromArray(l,h*16),d=ei().setFromMatrixPosition(u);d.z<-33&&d.z>-36.8&&d.y>1.3&&d.y<3.4&&Math.abs(d.x)<5&&(this.hiddenNodes.push(o.nodes[h]),o.nodes[h].concertHidden=!0,u.scale(ei(0,0,0)),o.mesh.setMatrixAt(h,u),c=!0)}c&&(o.mesh.instanceMatrix.needsUpdate=!0,this.legacy.push({o:o.mesh,original:l}))}this.update(0,!1);for(let o of this.batches)o.o.computeBoundingSphere(),o.o.boundingSphere.radius+=.15}update(e,t){if(!this.active)return;if(e===this.lastPoseTime){let a=rm(e,{steady:this.steady,aspect:this.e.camera.aspect});this.e.setCamera(a.position,a.target);return}this.lastPoseTime=e,this.time=e;let i=this.reduced?0:e;for(let a=0;a<this.rigs.length;a++){let o=this.rigs[a];o.o.position.copy(o.base),o.o.position.y+=this.reduced?0:Math.sin(i*1.3+a)*.006,o.o.rotation.y=Math.PI+(this.reduced?0:Math.sin(i*1.1+a)*.06),o.o.updateWorldMatrix(!0,!0);for(let l of Object.values(o.bones))l.b.quaternion.copy(l.q);if(on(o,"upper_arm_R",(a%3===0?.48:.25)+Math.sin(i*1.6+a)*.07),on(o,"upper_arm_L",-.08+Math.sin(i*1.5+a)*.06),on(o,"forearm_R",-1.05+Math.sin(i*1.6+a)*.1,ei(1,0,0)),on(o,"spine",Math.sin(i*2+a)*.055),o.prop){let l=o.hand?o.hand.getWorldPosition(ei()):o.o.position.clone().add(ei(-.3,1.7,0));o.prop.g.position.copy(l),o.prop.g.rotation.set(0,-.1,Math.sin(i*1.1+a)*.06)}}for(let a=0;a<this.band.length;a++){let o=this.band[a];for(let l of Object.values(o.bones))l.b.quaternion.copy(l.q);o.o.position.y=1.32+(this.reduced?0:Math.abs(Math.sin(i*4+a))*.025),o.o.updateWorldMatrix(!0,!0),on(o,"spine",Math.sin(i*2+a)*.055),on(o,"upper_arm_L",a===0?-.45:-.2),on(o,"upper_arm_R",a===0?.45:.2),on(o,"upper_arm_L",a===0?-.25:-.8,ei(1,0,0)),on(o,"upper_arm_R",a===0?-.6:-.85,ei(1,0,0)),on(o,"forearm_L",-.85+Math.sin(i*(a===3?8:4))*.18,ei(1,0,0)),on(o,"forearm_R",-.9+Math.cos(i*(a===3?8:4))*.22,ei(1,0,0))}for(let a of this.seats)a.animatedP.copy(a.p),a.animatedP.y+=this.reduced?0:Math.sin(i*1.3+a.phase)*.006,a.animatedQ.copy(a.q).multiply(this.crowdRotation.setFromAxisAngle(this.crowdAxis,this.reduced?0:Math.sin(i*1.25+a.phase)*.022));for(let a of this.batches){for(let o=0;o<a.positions.length;o++){let{animatedP:l,animatedQ:c,s:h}=a.positions[o];a.o.setMatrixAt(o,this.crowdMatrix.compose(l,c,h))}a.o.instanceMatrix.needsUpdate=!0}for(let a of this.audiencePropBatches||[]){for(let o=0;o<a.indices.length;o++){let l=this.seats[a.indices[o]];this.propGrip.copy(l.grip).multiply(l.scale).applyQuaternion(l.animatedQ).add(l.animatedP),this.propTilt.setFromAxisAngle(this.crowdAxis,this.reduced?0:Math.sin(i*.9+l.phase)*.05),a.o.setMatrixAt(o,this.crowdMatrix.compose(this.propGrip,this.propTilt,this.propScale))}a.o.instanceMatrix.needsUpdate=!0}for(let a of this.props)if(a.cloth){let o=a.cloth.geometry.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l)+.39;o.setZ(l,this.reduced?0:Math.sin(c*10-i*4+a.index)*c*.12)}o.needsUpdate=!0,a.cloth.geometry.computeVertexNormals()}for(let a=0;a<this.beams.length;a++)this.beams[a].rotation.z=.25*Math.sin(i*.3+a),this.beams[a].rotation.x=-.35+Math.sin(i*.2+a)*.12,this.beams[a].visible=!this.reduced&&!this.e.low;this.lights.forEach((a,o)=>{a.intensity=(this.e.low?10:26)*(1+.15*Math.sin(i*2+o))}),this.confetti.visible=!this.reduced&&e>8;let n=this.confetti.geometry.attributes.position;for(let a=0;a<n.count;a++)n.setY(a,1+((this.confettiBase[a*3+1]-i*.35)%8+8)%8),n.setX(a,this.confettiBase[a*3]+Math.sin(i+a)*.22);n.needsUpdate=!0;let r=rm(e,{steady:this.steady,aspect:this.e.camera.aspect});this.e.setCamera(r.position,r.target)}close(){if(this.active){this.active=!1,this.root.visible=!1;for(let e of this.hiddenNodes||[])delete e.concertHidden;for(let e of this.saved)e.o.position.copy(e.p),e.o.quaternion.copy(e.q),e.o.visible=e.visible;for(let e of this.rigs)for(let t of Object.values(e.bones))t.b.quaternion.copy(t.q);for(let e of[...this.batches,...this.legacy])e.castShadow!==void 0&&(e.o.castShadow=e.castShadow),e.o.instanceMatrix.array.set(e.original),e.o.instanceMatrix.needsUpdate=!0,e.o.computeBoundingSphere();for(let e of this.props)e.g.traverse(t=>{t.isMesh&&t.geometry.dispose()}),e.g.removeFromParent();this.props=[]}}};var Xn=(s,e,t)=>new R(s,e,t);function pM(s,e){let t;return s.traverse(i=>{i.isBone&&i.name.startsWith(e)&&(t=i)}),t}var ro=Object.freeze([[15.3,0,3.75],[8.6,0,3.75],[8.6,0,-11],[7.7,0,-24],[4.4,0,-28]]),Oc=class{constructor(e,{reduced:t=!1,repaired:i=!1}={}){this.kit=e,this.reduced=t,this.cheerUntil=0,this.danceUntil=0,this.robot=e.instances.get("robot"),this.robotHome=this.robot.position.clone(),this.robotRepaired=i;for(let[o,l]of[[0,14.1],[1,16.5]])e.place({id:"repair_helper_"+o,library:"crowd_kit",asset:"crowd_"+(o?2:3),position:[l,0,2],rotation:o?-.35:.35});this.guests=[...Array.from({length:6},(o,l)=>e.instances.get("guest_"+l)),e.instances.get("repair_helper_0"),e.instances.get("repair_helper_1")].filter(Boolean).map(o=>({o,p:o.position.clone(),rotation:o.rotation.y,bones:Object.fromEntries(["upper_arm_L","upper_arm_R","forearm_L","forearm_R","spine","head"].map(l=>{let c=pM(o,l);return[l,c?{b:c,q:c.quaternion.clone()}:null]}))}));let n=new Be;n.name="RepairedRobotBadge",n.position.set(0,.66,.175),this.robot.add(n),this.badge=n;let r=new Fe(new tn(.055,20),new wt({color:"#81edb5",emissive:"#3aba80",emissiveIntensity:.7,roughness:.5}));n.add(r);let a=new pi(new ze().setFromPoints([Xn(-.027,0,.006),Xn(-.008,-.022,.006),Xn(.032,.026,.006)]),new Ci({color:"#154c42"}));n.add(a),n.visible=i,i&&this.robot.position.fromArray(ro.at(-1))}celebrate(e,t="success"){this.cheerStart=e,this.cheerUntil=e+(t==="repair"?5:3),(t==="record"||t==="finale")&&(this.danceUntil=e+30)}repaired(e){this.robotRepaired=!0,this.badge.visible=!0,this.celebrate(e,"repair")}leaveBench(){this.robotRepaired&&(this.routeIndex=0,this.reduced&&(this.robot.position.fromArray(ro.at(-1)),this.routeIndex=ro.length))}turnBone(e,t,i,n){let r=e.bones[t];if(!r)return;let a=r.b,o=a.parent.getWorldQuaternion(new Je),l=e.o.getWorldQuaternion(new Je),c=n.clone().applyQuaternion(l).applyQuaternion(o.invert());a.quaternion.copy(r.q).premultiply(new Je().setFromAxisAngle(c,i)),a.updateWorldMatrix(!1,!0)}update(e,t,{activity:i,musicPlaying:n=!1,finale:r=!1}={}){let a=t<this.cheerUntil,o=t<this.danceUntil&&n||r;for(let l=0;l<this.guests.length;l++){let c=this.guests[l],h=c.o;for(let x of Object.values(c.bones))x&&x.b.quaternion.copy(x.q);let u=a&&(l<6||i==="aid"),d=!this.reduced,f=t-(this.cheerStart||0)-l*.09,p=u?Math.max(0,Math.min(1,f/.45,(this.cheerUntil-t)/.7)):0;if(h.position.copy(c.p),h.rotation.y=c.rotation,d&&(h.position.y+=o?Math.sin(t*1.4+l)*.006:0,h.rotation.y+=Math.sin(t*(o?1.2:.22)+l)*(o?.07:.035)),h.updateWorldMatrix(!0,!0),d){let x=Math.sin(t*1.8+l);this.turnBone(c,"upper_arm_L",o?-.25+x*.1:-.15*p,Xn(0,0,1)),this.turnBone(c,"upper_arm_R",u?(l%3===0?.85:.48)*p:o?.25-x*.1:0,Xn(0,0,1)),this.turnBone(c,"forearm_L",-.25*p,Xn(1,0,0)),this.turnBone(c,"forearm_R",-.85*p,Xn(1,0,0)),this.turnBone(c,"head",Math.sin(f*3)*.06*p,Xn(1,0,0)),this.turnBone(c,"spine",Math.sin(t*1.2+l)*.012,Xn(0,0,1))}}if(this.robotRepaired&&i!=="aid")if(this.routeIndex!==void 0&&this.routeIndex<ro.length){let l=new R(...ro[this.routeIndex]),c=l.sub(this.robot.position);c.y=0;let h=c.length(),u=Math.min(h,Math.min(e,.1)*2.2);h<.025?this.routeIndex++:(this.robot.position.addScaledVector(c.normalize(),u),this.robot.rotation.y=Math.atan2(c.x,c.z)),this.reduced||(this.robot.position.y=Math.abs(Math.sin(t*10))*.025)}else this.robot.position.y=0,this.robot.rotation.y=0,this.robot.rotation.z=!this.reduced&&o?Math.sin(t*4)*.075:0}};var Hr=.008333333333333333,Bc=class s{constructor({radius:e=.13,obstacles:t=[]}={}){this.radius=e,this.obstacles=t,this.reset()}reset(e=this.home?.[0]??-4,t=this.home?.[1]??27){this.home=[e,t],this.p=[e,this.radius,t],this.v=[0,0,0],this.accumulator=0,this.age=0,this.moving=!1}kick(e,t){let i=5+Math.max(0,Math.min(1,t))*8;this.v=[Math.sin(e)*i*.86,i*.51,-Math.cos(e)*i*.86],this.moving=!0,this.age=0}tick(){if(this.moving){this.age+=Hr,this.v[1]-=9.81*Hr;for(let e=0;e<3;e++)this.p[e]+=this.v[e]*Hr;if(this.p[1]<this.radius){this.p[1]=this.radius,this.v[1]=Math.abs(this.v[1])>.55?-this.v[1]*.38:0;let e=Math.exp(-2.7*Hr);this.v[0]*=e,this.v[2]*=e}for(let e of this.obstacles){let t=this.p[0]-e.x,i=this.p[2]-e.z,n=Math.hypot(t,i),r=this.radius+e.r;if(n<r&&this.p[1]<(e.height||2)){let a=n?t/n:1,o=n?i/n:0;this.p[0]=e.x+a*r,this.p[2]=e.z+o*r;let l=this.v[0]*a+this.v[2]*o;l<0&&(this.v[0]-=1.6*l*a,this.v[2]-=1.6*l*o)}}Math.hypot(this.v[0],this.v[2])<.06&&this.p[1]<=this.radius+.001&&(this.v=[0,0,0],this.moving=!1),(this.age>12||Math.abs(this.p[0])>28||this.p[2]<9||this.p[2]>40||!this.p.every(Number.isFinite))&&this.reset()}}advance(e,t=()=>{}){for(this.accumulator+=Math.max(0,Math.min(e,.25));this.accumulator+1e-10>=Hr;)this.tick(),t(this),this.accumulator-=Hr}predict(e,t){let i=new s({radius:this.radius,obstacles:this.obstacles});i.reset(this.p[0],this.p[2]),i.kick(e,t);let n=[];for(let r=0;r<600&&i.moving;r++)i.tick(),r%8===0&&n.push([...i.p]);return n}},zs=["kick","aid","maker"];function lm(s){let e=s&&typeof s=="object"?s:{};return{version:1,overnights:Number.isInteger(e.overnights)?Math.max(0,e.overnights):0,robotRepaired:e.robotRepaired===!0,day:Number.isInteger(e.day)&&e.day>0?e.day:1,active:!!e.active,completed:[...new Set((Array.isArray(e.completed)?e.completed:[]).filter(t=>zs.includes(t)))],best:Number.isFinite(e.best)?Math.max(0,e.best):0,finished:Number.isInteger(e.finished)?Math.max(0,e.finished):0}}function rd(s){return(s.completed.length||s.finished)&&s.day++,s.active=!0,s.completed=[],s}function cm(s,e){return!s.active||!zs.includes(e)||s.completed.includes(e)?!1:(s.completed.push(e),!0)}function mM(s){return zs.find(e=>!s.completed.includes(e))||"finale"}function hm(s){return!s.active||mM(s)!=="finale"?!1:(s.active=!1,s.finished++,!0)}function Gr(s){return zs.every(e=>s.completed.includes(e))}var gM={kick:"Kick the globe",records:"Spin a record",aid:"Help the robot",maker:"Build a useful skill",canoe:"Across the lake",finale:"Meet at the stage"},ao=["Communicate","Solve","Create","Connect","Stay curious"],kc=class{constructor(e,t){this.e=e,this.h=t,this.concert=new Fc(e,e.jamKit,{reduced:t.reduced}),this.active=null,this.keys=new Set,this.clock=0,this.reduced=t.reduced,this.kit=e.jamKit;let i;try{i=JSON.parse(localStorage.getItem("skillsjam.round.v1"))}catch{}this.state=lm(i),this.root=new Be,this.root.name="FestivalActivities",e.scene.add(this.root),this.ballMesh=this.kit.instances.get("kickball");let n=new ii().setFromObject(this.ballMesh).getSize(new R);this.ball=new Bc({radius:Math.max(n.x,n.y,n.z)/2,obstacles:[{x:-5.4,z:25.1,r:.45,height:.6},{x:-10,z:26,r:.7,height:1}]}),this.ball.reset(),this.ballMesh.position.fromArray(this.ball.p),this.hero=this.kit.instances.get("hero"),this.syncHeroVisibility(),this.kit.play("hero","idle"),this.kit.controlledBall=!0,this.marker=new Be,this.marker.name="KickTargets",this.root.add(this.marker),this.targets=[];for(let r=0;r<3;r++){let a=new Fe(new yi(.9,.045,6,40),new wt({color:["#1b7d78","#c85a3f","#cb9227"][r],roughness:.9}));a.rotation.x=-Math.PI/2,a.position.y=.05,this.marker.add(a),this.targets.push(a)}if(this.path=new pi(new ze,new Ra({color:"#185a56",dashSize:.16,gapSize:.12,depthTest:!1})),this.path.renderOrder=5,this.root.add(this.path),this.marker.visible=this.path.visible=!1,this.recordHomes=new Map(ao.map(r=>{let a=this.kit.instances.get("record_"+r.toLowerCase().replaceAll(" ","_"));return[r,{o:a,p:a.position.clone(),q:a.quaternion.clone()}]})),this.deck=new Fe(new St(.19,.19,.035,32),new wt({color:"#254c48",roughness:.7})),this.deck.position.set(11.75,.94,26.06),this.root.add(this.deck),this.reactions=new Oc(this.kit,{reduced:this.reduced,repaired:this.state.robotRepaired}),this.repair=new Dc(e,this.kit.instances.get("robot"),{home:this.reactions.robotHome,reduced:this.reduced,onFit:()=>this.h.chime(),onComplete:()=>{this.state.robotRepaired=!0,this.reactions.repaired(this.clock),this.result("aid","Your friend is awake!")}}),this.adventure=new Pc(e,this.kit,{reduced:this.reduced,getDusk:t.getDusk,setDusk:t.setDusk,playMusic:t.playCamp,endMusic:t.endCampMusic,musicState:t.musicState,toggleMusic:t.toggleMusic,onWake:()=>{this.state.overnights=(this.state.overnights||0)+1,this.save(),this.exit(!1),this.h.wakeAtFestival?.()}}),this.mixer=new Lc(e,this.kit,{reduced:this.reduced,onPour:()=>this.h.chime(),onWin:()=>{this.h.chime(),this.reactions.celebrate(this.clock)},onComplete:()=>this.result("maker","Three useful skills. Three happy outcomes!")}),this.ui=document.createElement("section"),this.ui.id="festivalPlay",this.ui.hidden=!0,this.ui.setAttribute("aria-label","Festival activity"),document.body.append(this.ui),this.launch=document.createElement("button"),this.launch.id="roundLaunch",this.launch.className="round-launch",this.launch.onclick=()=>this.h.showJournal?.(),document.getElementById("hud").append(this.launch),this.syncLaunch(),this.raycaster=new zn,e.canvas.addEventListener("pointerdown",r=>{if(this.active&&(r.stopImmediatePropagation(),this.active==="records"&&this.recordPhase!=="playing")){let a=e.canvas.getBoundingClientRect();this.raycaster.setFromCamera(new ie((r.clientX-a.left)/a.width*2-1,-(r.clientY-a.top)/a.height*2+1),e.camera);let o=this.raycaster.intersectObjects([...this.recordHomes.values()].map(l=>l.o),!0)[0];if(o){let l=o.object;for(;l&&!ao.some(h=>this.recordHomes.get(h).o===l);)l=l.parent;let c=ao.findIndex(h=>this.recordHomes.get(h).o===l);c>=0&&this.ui.querySelector(`[data-record="${c}"]`).click()}}},!0),this.profile=[],this.lastFrame=0,this.qa=new URLSearchParams(location.search).has("playQA"),this.qa){this.qaText=document.createElement("output"),this.qaText.id="playMetrics",this.qaText.style="position:fixed;right:12px;top:155px;z-index:18;background:#fff5dc;padding:8px;font:12px monospace;max-width:260px;white-space:normal;overflow-wrap:anywhere",document.body.append(this.qaText);let r=document.createElement("button");r.textContent="Save QA frame",r.style="position:fixed;right:12px;top:280px;z-index:18;padding:10px",document.body.append(r),r.onclick=async()=>{let a="play_"+(this.active||"entrance"),o=await new Promise(c=>e.canvas.toBlob(c,"image/png")),l=await fetch("/__kit_capture/"+a,{method:"POST",headers:{"Content-Type":"image/png"},body:o});r.textContent=l.ok?"QA frame saved":"Capture unavailable"}}window.addEventListener("keydown",r=>this.key(r,!0),!0),window.addEventListener("keyup",r=>this.key(r,!1),!0),window.addEventListener("blur",()=>this.clearInput()),document.addEventListener("visibilitychange",()=>this.clearInput())}save(){try{localStorage.setItem("skillsjam.round.v1",JSON.stringify(this.state))}catch{}this.syncLaunch()}syncLaunch(){this.launch.textContent=Gr(this.state)?"Headliner ready \xB7 Meet at the stage":`Headliner clues \xB7 ${this.state.completed.length}/${zs.length}`}journal(){return $p(this.state.completed)}canAttendConcert(){return Gr(this.state)}clearInput(){this.keys.clear(),this.charging=!1,this.repair?.cancel(),this.mixer?.cancel(),this.adventure?.keys.clear(),this.adventure?.journey&&(this.adventure.journey.held=!1)}startRound(){this.exit(!1),this.finaleAt=0,this.state.active||(rd(this.state),this.save()),this.h.prepare(),this.h.welcomeClues?.()}continueRound(){this.state.active||this.startRound(),this.h.showJournal?.()}complete(e){cm(this.state,e),e!=="kick"&&this.h.award(e),this.save(),this.reactUntil=this.clock+2.5,this.reactions.celebrate(this.clock,e==="aid"?"repair":e==="records"?"record":"success"),this.h.chime()}open(e){return["kick","records","aid","maker","finale","canoe"].includes(e)?(this.exit(!1),this.h.prepare(),!this.state.active&&!Gr(this.state)&&zs.includes(e)&&(rd(this.state),this.save()),this.active=e,this.syncHeroVisibility(),this.ui.hidden=!1,document.getElementById("toast").classList.remove("show"),document.body.classList.add("playing-activity"),this.ui.dataset.activity=e,this.savedHero={p:this.hero.position.clone(),q:this.hero.quaternion.clone()},this.ui.innerHTML=`<div class="play-head"><div><small>PROMPTSTOCK \xB7 DAY ${this.state.day}</small><h2>${gM[e]}</h2><p id="playHint"></p></div><span class="play-navigation"><button data-action="menu">Main menu</button><button data-action="exit" aria-label="Return to wandering">\u2715</button></span></div><div class="play-dock" id="playDock"></div>`,this.ui.querySelector("[data-action=exit]").onclick=()=>this.exit(),this.ui.querySelector("[data-action=menu]").onclick=()=>this.h.mainMenu?.(),e==="kick"?this.setupKick():e==="records"?this.setupRecords():e==="aid"?this.setupAid():e==="maker"?this.setupMaker():e==="canoe"?this.adventure.open(this.ui):this.setupFinale(),this.profile=[],this.lastFrame=0,this.ui.querySelector("button")?.focus(),!0):!1}hint(e){this.ui.querySelector("#playHint").textContent=e}dock(e){this.ui.querySelector("#playDock").innerHTML=e}button(e,t){this.ui.querySelector("#"+e).onclick=t}result(e,t){this.complete(e);let i=Gr(this.state);this.hint(i?"Three acts of kindness. Follow the path behind the tents: the headliner is ready.":t+" Find your next clue on the lawn."),this.ui.querySelector("#playDock").insertAdjacentHTML("beforeend",`<div class="activity-success" role="status"><strong>${t}</strong><button id="playNext">${i?"Back to the lawn \xB7 Find the stage":"Back to exploring"}</button></div>`),this.button("playNext",()=>this.exit()),this.ui.querySelector("#playNext").focus({preventScroll:!0})}setupKick(){this.hint("Land the globe inside each ring. Aim with \u2190 \u2192. Hold Space and release to kick."),this.score=0,this.shots=0,this.hit=new Set,this.shotDone=!1,this.kickTimer=-1,this.aim=0,this.power=.4;let e=(this.state.day-1)%3-1;[[-1+e,20],[4-e,17],[1+e,14]].forEach((t,i)=>{this.targets[i].position.set(t[0],.045,t[1]),this.targets[i].material.color.set(["#167d76","#d25435","#c49624"][i])}),this.marker.visible=!0,this.hero.position.set(1,0,27.65),this.hero.rotation.y=Math.PI,this.kit.play("hero","idle"),this.resetBall(),this.dock(`<div class="course-score"><strong id="kickScore">0 / 3 rings</strong><span id="shotCount">0 kicks \xB7 best ${this.state.best}</span></div><div class="kick-controls"><label>Aim <input id="kickAim" aria-label="Kick aim" type="range" min="-45" max="45" value="0"></label><label>Power <input id="kickPower" aria-label="Kick power" type="range" min="0" max="100" value="40"></label></div><div class="play-actions"><button id="kickNow" class="primary">Kick globe</button><button id="kickAssist" disabled>Help me aim</button><button id="kickRetry">Reset ball</button></div><p class="play-note">A / D sidestep \xB7 W / S approach \xB7 Space charges \xB7 Esc leaves. Touch: use the sliders and Kick.</p>`),this.ui.querySelector("#kickAim").oninput=t=>{this.aim=Number(t.target.value)*Math.PI/180,this.preview()},this.ui.querySelector("#kickPower").oninput=t=>{this.power=Number(t.target.value)/100,this.preview()},this.button("kickNow",()=>this.kick()),this.button("kickAssist",()=>{this.assist(),this.hint("Try this angle and power, then make the kick.")}),this.button("kickRetry",()=>this.resetBall()),this.aimTarget()}resetBall(){this.ball.reset(this.hero.position.x,this.hero.position.z-.5),this.kickTimer=-1,this.shotDone=!1,this.kit.play("hero","idle"),this.preview()}aimTarget(){this.aim=0,this.power=.4,this.ui.querySelector("#kickAim").value=0,this.ui.querySelector("#kickPower").value=40,this.preview()}assist(){let e=this.targets.find((r,a)=>!this.hit.has(a));if(!e)return;this.aim=Math.atan2(e.position.x-this.ball.p[0],this.ball.p[2]-e.position.z);let t=1/0;for(let r=0;r<=100;r++){let a=this.ball.predict(this.aim,r/100);for(let o of a){if(o[1]>.55)continue;let l=Math.hypot(o[0]-e.position.x,o[2]-e.position.z);l<t&&(t=l,this.power=r/100)}}let i=this.ui.querySelector("#kickAim"),n=this.ui.querySelector("#kickPower");i&&(i.value=this.aim*180/Math.PI),n&&(n.value=this.power*100),this.preview()}preview(){if(this.active!=="kick"||this.ball.moving)return;let e=this.ball.predict(this.aim,this.power);this.path.geometry.dispose(),this.path.geometry=new ze().setFromPoints(e.map(t=>new R(...t))),this.path.computeLineDistances(),this.path.visible=!0}kick(){this.ball.moving||this.kickTimer>=0||this.hit.size===3||(this.hero.position.set(this.ball.p[0]-Math.sin(this.aim)*.5,0,this.ball.p[2]+Math.cos(this.aim)*.5),this.hero.rotation.y=Math.PI-this.aim,this.shot={aim:this.aim,power:this.power},this.kickTimer=0,this.kit.play("hero","kick",!0),this.path.visible=!1,this.shots++,this.ui.querySelector("#kickAssist").disabled=this.shots<2,this.ui.querySelector("#shotCount").textContent=`${this.shots} kicks \xB7 best ${this.state.best}`)}scoreStep(){if(!this.shotDone)for(let e=0;e<3;e++){let t=this.targets[e];if(!this.hit.has(e)&&this.ball.p[1]<.55&&Math.hypot(this.ball.p[0]-t.position.x,this.ball.p[2]-t.position.z)<.83){this.hit.add(e),this.shotDone=!0,this.score=Math.max(0,300-(this.shots-this.hit.size)*20),t.material.color.set("#f0d570"),this.reactUntil=this.clock+2,this.reactions.celebrate(this.clock),this.h.chime(),this.hint(`${this.hit.size} of 3! ${this.hit.size<3?"Try the next ring.":"Every ring found."}`),this.ui.querySelector("#kickScore").textContent=`${this.hit.size} / 3 rings`,this.hit.size===3&&(this.state.best=Math.max(this.state.best,this.score),this.ui.querySelector("#shotCount").textContent=`${this.shots} kicks \xB7 best ${this.state.best}`,this.result("kick",`Course complete \xB7 ${this.score} points \xB7 ${this.shots} kicks`)),this.resetAt=this.clock+1.3;break}}}setupRecords(){this.recordRequest=(this.recordRequest||0)+1,this.recordPhase="choose",this.selected=null,this.recordAwarded=!1,this.hint("Lift a record, then place it on the turntable to play its song."),this.dock(`<div class="record-picks">${ao.map((e,t)=>`<button data-record="${t}">${Oi(e)}</button>`).join("")}</div><p id="recordRead" class="record-read">Five records. Five songs. Pick your next spin.</p><p id="recordPlayback" role="status"></p><div class="play-actions"><button id="recordPlace" class="primary" disabled>Place & play</button><button id="recordPause">Pause music</button><button id="recordBack">Return to crate</button></div>`),this.ui.querySelectorAll("[data-record]").forEach(e=>e.onclick=()=>{this.recordPhase!=="loading"&&(this.restoreRecords(),this.selected=ao[Number(e.dataset.record)],this.recordPhase="inspect",this.ui.querySelectorAll("[data-record]").forEach(t=>t.setAttribute("aria-pressed",String(t===e))),this.ui.querySelector("#recordRead").textContent=Oi(this.selected).toUpperCase()+" \xB7 "+{Communicate:"Explain one useful idea simply.",Solve:"Break a problem into one manageable step.",Create:"Make a small first draft.",Connect:"Invite someone to share a useful tip.","Stay curious":"Ask one question you have not asked before."}[this.selected],this.ui.querySelector("#recordPlace").disabled=!1,this.ui.querySelector("#recordPlace").textContent="Place & play")}),this.button("recordBack",()=>{this.recordPhase!=="loading"&&(this.restoreRecords(),this.selected=null,this.recordPhase="choose",this.ui.querySelector("#recordPlace").disabled=!0,this.ui.querySelector("#recordRead").textContent="Choose another record.")}),this.button("recordPause",()=>this.h.toggleMusic?.()),this.button("recordPlace",async()=>{if(!this.selected||this.recordPhase!=="inspect")return;let e=this.selected,t=++this.recordRequest;this.recordPhase="loading",this.hint(`Loading ${Oi(e)}\u2026`),this.ui.querySelector("#recordPlace").disabled=!0,this.ui.querySelector("#recordPlace").textContent="Loading\u2026",this.setRecordChoicesDisabled(!0);let i=await this.h.playRecord?.(e);if(!(t!==this.recordRequest||this.active!=="records"||this.selected!==e||this.recordPhase!=="loading")){if(this.setRecordChoicesDisabled(!1),!i){this.recordPhase="inspect",this.ui.querySelector("#recordPlace").disabled=!1,this.ui.querySelector("#recordPlace").textContent="Retry record",this.hint("Music did not start. Retry or choose another record.");return}this.recordPhase="playing",this.h.record(e),this.ui.querySelector("#recordPlace").textContent="On the turntable",this.recordAwarded?this.hint(`${Oi(e)} is playing.`):(this.recordAwarded=!0,this.result("records","A record shared. Your stamp is ready.")),this.syncRecordAudio()}}),this.syncRecordAudio()}setRecordChoicesDisabled(e){this.ui.querySelector("#recordBack").disabled=e,this.ui.querySelectorAll("[data-record]").forEach(t=>t.disabled=e)}syncRecordAudio(){if(this.active!=="records")return;let e=this.h.musicState?.();if(!e)return;let t=this.ui.querySelector("#recordPlayback"),i=this.ui.querySelector("#recordPause");this.recordPhase==="playing"&&this.hint(e.status==="playing"?`${Oi(e.title)} is playing. Enjoy the song or choose another.`:e.status==="paused"?`${Oi(e.title)} is paused.`:e.status==="loading"?`Loading ${Oi(e.title)}\u2026`:"Music could not play. Press Retry music."),t&&(t.textContent=e.status==="error"?`${Oi(e.title)} could not play. Retry the record.`:`${Oi(e.title)} \xB7 ${e.status}`),i&&(i.textContent=e.status==="playing"?"Pause music":e.status==="loading"?"Cancel loading":e.status==="error"?"Retry music":"Resume music",i.disabled=!e.src)}restoreRecords(){for(let{o:e,p:t,q:i}of this.recordHomes.values())e.position.copy(t),e.quaternion.copy(i)}setupAid(){this.hint("Fit three parts. Line up the gold markers. Wake your friend."),this.dock(`<div class="repair-top"><strong id="repairCount">0 / 3 fitted</strong><span id="repairStatus" role="status">Drag a part onto its matching socket.</span></div><div class="repair-controls"><div class="repair-picks">${so.map((t,i)=>`<button data-repair-part="${t.id}" aria-label="Select ${t.name}" style="--part:${t.color}"><span>${t.symbol}</span><small>${t.name}</small><kbd>${i+1}</kbd></button>`).join("")}</div><div class="repair-tools"><button id="repairRotate" disabled>Rotate \u21BB <kbd>R</kbd></button><button id="repairFit" disabled>Fit part <kbd>Enter</kbd></button><button id="repairPower" class="primary" disabled>POWER</button></div></div><p class="repair-tip">Drag to fit \xB7 or select a part, rotate, then press Fit.</p>`),this.repair.open(this.state.day,this.ui),this.repair.camera(),this.ui.querySelectorAll("[data-repair-part]").forEach(t=>t.onclick=()=>this.repair.select(t.dataset.repairPart)),this.button("repairRotate",()=>this.repair.rotate()),this.button("repairFit",()=>this.repair.fit());let e=this.ui.querySelector("#repairPower");e.setAttribute("aria-label","Power on robot. Hold with pointer or press Enter."),e.onpointerdown=t=>{e.disabled||(t.preventDefault(),e.setPointerCapture(t.pointerId),this.repair.held=!0)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>this.repair.held=!1,e.onkeydown=t=>{["Space","Enter"].includes(t.code)&&(t.preventDefault(),this.repair.held=!0)},e.onkeyup=t=>{t.code==="Space"&&(t.preventDefault(),this.repair.held=!1)}}setupMaker(){this.mixer.open(this.ui),this.mixer.camera();let e=document.createElement("button");e.className="mix-free",e.textContent="Prompt builder",e.onclick=()=>{this.exit(),this.h.freePrompt()},this.ui.querySelector(".play-navigation").prepend(e)}setupFinale(){if(!Gr(this.state)){this.hint("Complete all three mini-games in this round to unlock the headliner."),this.dock('<button id="resumeRound" class="primary">Continue the round</button>'),this.button("resumeRound",()=>this.continueRound());return}hm(this.state),this.save(),this.previousDusk=this.h.getDusk(),this.h.setDusk(1),this.concert.open(),this.concertEnded=!1,this.ui.querySelector(".play-head small").textContent="BORINQU\xC9N \xB7 PUERTO RICO \xB7 LIVE AT PROMPTSTOCK",this.ui.querySelector("h2").textContent="One Island One View",this.hint("You brought everyone together. This one is for you."),this.dock(`<div class="concert-playing"><span class="concert-dot"></span><span id="concertStatus" role="status">Taking the stage\u2026</span><time id="concertTime">0:00 / 3:14</time></div><progress id="concertProgress" aria-label="Concert progress" value="0" max="194"></progress><div class="play-actions"><button id="concertSound" class="primary">Loading music\u2026</button><button id="concertCamera" aria-pressed="${this.concert.steady}">${this.concert.steady?"Cinematic camera":"Steady camera"}</button><label class="concert-volume">Volume <input id="concertVolume" aria-label="Concert volume" type="range" min="0" max="1" step=".05" value="${this.h.musicState?.().volume??.65}"></label></div><div id="concertEnding" hidden><small>FESTIVAL COMPLETE</small><h3>One island. One view. All of us.</h3><p>You kicked, shared, repaired and created. Now you belong to the band.</p><div class="play-actions"><button id="concertReplay">Encore</button><button id="anotherRound">Another festival day</button><button id="keepWandering">Keep wandering</button></div></div>`),this.button("concertSound",()=>this.h.toggleMusic?.()),this.button("concertCamera",()=>{this.concert.steady=!this.concert.steady;let e=this.ui.querySelector("#concertCamera");e.textContent=this.concert.steady?"Cinematic camera":"Steady camera",e.setAttribute("aria-pressed",String(this.concert.steady))}),this.ui.querySelector("#concertVolume").oninput=e=>this.h.setMusicVolume?.(e.target.value),this.button("concertReplay",()=>this.open("finale")),this.button("anotherRound",()=>this.startRound()),this.button("keepWandering",()=>this.exit()),this.h.playFinale?.(),this.syncConcertAudio()}syncConcertAudio(){if(this.active!=="finale"||!this.concert.active)return;let e=this.h.musicState?.();if(!e)return;let t=this.ui.querySelector("#concertStatus"),i=this.ui.querySelector("#concertSound"),n=e.status==="playing"?"Borinqu\xE9n \xB7 One Island One View":e.status==="ended"?"Thank you, Puerto Rico.":e.status==="error"?"Tap Retry music to start the show.":e.status==="loading"?"Loading the headliner\u2026":"Concert paused";t.textContent!==n&&(t.textContent=n),i.textContent=e.status==="playing"?"Pause concert":e.status==="error"?"Retry music":e.status==="loading"?"Cancel loading":e.status==="ended"?"Play again":"Play concert",e.status==="ended"&&this.finishConcert()}finishConcert(){this.concertEnded||(this.concertEnded=!0,this.ui.querySelector("#concertEnding").hidden=!1,this.hint("The festival is complete. The connection stays."),this.ui.querySelector("#concertSound").hidden=!0,this.ui.querySelector("#concertReplay").focus({preventScroll:!0}))}key(e,t){if(!this.active)return;if(e.code==="Tab"){if(!t)return;let n=[...this.ui.querySelectorAll("button,input")].filter(o=>!o.disabled&&o.getClientRects().length),r=n[0],a=n.at(-1);e.shiftKey&&document.activeElement===r?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),r.focus());return}let i=!!e.target.closest("input,button");if(e.code==="Escape"&&t){e.preventDefault(),e.stopImmediatePropagation(),this.exit();return}if(this.active==="canoe"){this.adventure.key(e,t),e.stopImmediatePropagation();return}if(this.active==="maker"){t&&this.mixer.key(e),i||e.stopImmediatePropagation();return}if(this.active==="aid"){if(e.target.id==="repairPower")return;t&&!e.repeat&&(["Digit1","Digit2","Digit3"].includes(e.code)&&(e.preventDefault(),this.repair.select(so[Number(e.code.at(-1))-1].id)),e.code==="KeyR"&&(e.preventDefault(),this.repair.rotate()),e.code==="Enter"&&!i&&(e.preventDefault(),this.repair.fit())),i||e.stopImmediatePropagation();return}if(this.active!=="kick"||i&&e.code!=="Space"&&e.code!=="KeyW"&&e.code!=="KeyA"&&e.code!=="KeyS"&&e.code!=="KeyD"){i||e.stopImmediatePropagation();return}if(["Space","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD"].includes(e.code)){if(e.code==="Space"&&e.target.matches("button"))return;e.preventDefault(),e.stopImmediatePropagation(),t?(this.keys.add(e.code),e.code==="Space"&&!e.repeat&&!this.ball.moving&&(this.charging=!0,this.power=0)):(this.keys.delete(e.code),e.code==="Space"&&this.charging&&(this.charging=!1,this.kick()))}}update(e,t){if(this.clock=t,this.lastFrame&&document.visibilityState==="visible"&&(this.profile.push(performance.now()-this.lastFrame),this.profile.length>600&&this.profile.shift()),this.lastFrame=performance.now(),this.qa&&this.e.frame%60===0&&(this.qaText.textContent=JSON.stringify(this.metrics())),this.ambient(t,e),!!this.active){if(this.active==="kick"){if(this.charging&&(this.power=Math.min(1,this.power+e*.7),this.ui.querySelector("#kickPower").value=this.power*100,this.preview()),!this.ball.moving&&this.kickTimer<0&&this.hit.size<3){let i=!1,n=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),r=(this.keys.has("KeyS")?1:0)-(this.keys.has("KeyW")?1:0);(n||r)&&(this.hero.position.x=ct.clamp(this.hero.position.x+n*e*1.5,-2,4),this.hero.position.z=ct.clamp(this.hero.position.z+r*e*1.5,27,30),this.ball.reset(this.hero.position.x,this.hero.position.z-.5),i=!0);let a=(this.keys.has("ArrowRight")?1:0)-(this.keys.has("ArrowLeft")?1:0);a&&(this.aim=ct.clamp(this.aim+a*e*.5,-.78,.78),this.ui.querySelector("#kickAim").value=this.aim*180/Math.PI),(i||a)&&this.preview(),this.walking!==i&&(this.kit.play("hero",i?"walk":"idle"),this.walking=i)}if(this.kickTimer>=0){let i=this.kickTimer;this.kickTimer+=e,i<.5&&this.kickTimer>=.5&&(this.ball.kick(this.shot.aim,this.shot.power),this.h.chime()),this.kickTimer>1.05&&(this.kickTimer=-1,this.kit.play("hero","idle"))}this.ball.advance(e,()=>this.scoreStep()),this.ballMesh.position.fromArray(this.ball.p),!this.reduced&&this.ball.moving&&(this.ballMesh.rotation.x-=Math.hypot(this.ball.v[0],this.ball.v[2])*e/this.ball.radius),this.resetAt&&t>=this.resetAt&&(this.resetAt=0,this.hit.size<3&&(this.hero.position.set(1,0,27.65),this.resetBall(),this.aimTarget())),!this.ball.moving&&this.ball.age>0&&!this.shotDone&&this.kickTimer<0&&(this.hint("Close! Adjust the aim or power, or try Assist this kick."),this.resetBall()),this.e.camera.aspect<.7?this.e.setCamera([this.hero.position.x,10,this.hero.position.z+10],[this.hero.position.x,.3,22]):this.e.setCamera([this.hero.position.x+3,7,this.hero.position.z+7],[this.hero.position.x,.6,this.e.camera.aspect>1.4?26:24])}else if(this.active==="records"){if(this.e.setCamera([11.1,1.65,28],[11.1,1.16,26]),this.selected){let i=this.recordHomes.get(this.selected).o;this.recordPhase==="inspect"?(i.position.lerp(new R(11.1,1.5,26.85),this.reduced?1:1-Math.exp(-e*10)),i.quaternion.slerp(new Je,this.reduced?1:1-Math.exp(-e*10))):this.recordPhase==="playing"&&(i.position.lerp(new R(11.75,.965,26.06),this.reduced?1:1-Math.exp(-e*10)),this.recordSpin||(this.recordSpin=0),this.h.musicPlaying?.()&&!this.reduced&&(this.recordSpin+=e),i.rotation.set(-Math.PI/2,0,this.recordSpin))}}else if(this.active==="aid")this.repair.update(e,t);else if(this.active==="maker")this.mixer.update(e,t);else if(this.active==="canoe")this.adventure.update(e,t);else if(this.active==="finale"&&this.concert.active){let i=this.h.musicState?.()||{},n=i.currentTime||0;this.concert.update(n,i.playing);let r=a=>`${Math.floor(a/60)}:${String(Math.floor(a%60)).padStart(2,"0")}`;this.ui.querySelector("#concertTime").textContent=r(n)+" / "+r(i.duration||194),this.ui.querySelector("#concertProgress").value=n,this.ui.querySelector("#concertProgress").max=i.duration||194,this.syncConcertAudio()}}}ambient(e,t){if(this.concert?.active)return;this.reactions.update(t,e,{activity:this.active,musicPlaying:this.h.musicPlaying?.()||!1,finale:this.active==="finale"});let i=this.kit.instances.get("dog");i&&this.petUntil>e&&!this.reduced?(i.rotation.y=Math.sin(e*3)*.18,i.position.y=Math.abs(Math.sin(e*5))*.05):i&&(i.position.y=0,i.rotation.y=0)}pet(){this.petUntil=this.clock+4,this.h.chime()}metrics(){let e=[...this.profile].sort((i,n)=>i-n),t=this.e.renderer.info;return{samples:e.length,medianFrameMs:e[Math.floor(e.length*.5)]||0,p95FrameMs:e[Math.floor(e.length*.95)]||0,drawCalls:t.render.calls,triangles:t.render.triangles,renderPath:this.e.low?"lighter":this.e.postprocessingSupported===!1?"direct":"composer"}}syncHeroVisibility(){this.hero.visible=!!this.e.jamReview||this.active==="kick"||this.active==="finale"}exit(e=!0){this.active&&(this.finaleAt=0,this.concert?.active&&(this.concert.close(),this.h.pauseMusic?.()),this.clearInput(),this.active==="maker"&&this.mixer.close(),this.active==="canoe"&&this.adventure.close(),this.active==="aid"&&(this.repair.close(),this.reactions.leaveBench()),this.restoreRecords(),this.marker.visible=this.path.visible=!1,this.resetAt=0,this.ball.reset(),this.ballMesh.position.fromArray(this.ball.p),this.savedHero&&(this.hero.position.copy(this.savedHero.p),this.hero.quaternion.copy(this.savedHero.q)),this.kit.play("hero","idle"),this.active==="finale"&&this.previousDusk!==void 0&&(this.h.setDusk(this.previousDusk),this.previousDusk=void 0),this.active=null,this.syncHeroVisibility(),this.ui.hidden=!0,document.body.classList.remove("playing-activity"),e&&this.h.returnToWorld())}};var oo=class s extends Fe{constructor(){let e=s.SkyShader,t=new Dt({name:e.name,uniforms:Ni.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Kt,depthWrite:!1});super(new bt(1,1,1),t),this.isSky=!0}};oo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var zc=class extends Fe{constructor(e,t={}){super(e),this.isWater=!0;let i=this,n=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new R(.70707,.70707,0),u=new ve(t.sunColor!==void 0?t.sunColor:16777215),d=new ve(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new R(0,0,0),p=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Vi,m=t.fog!==void 0?t.fog:!1,g=new ti,y=new R,S=new R,_=new R,b=new Le,T=new R(0,0,-1),A=new ot,v=new R,E=new R,P=new ot,I=new Le,N=new Nt,k=new Wt(n,r,{type:si}),L={name:"MirrorShader",uniforms:Ni.merge([ue.fog,ue.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Le},sunColor:{value:new ve(8355711)},sunDirection:{value:new R(.70707,.70707,0)},eye:{value:new R},waterColor:{value:new ve(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},O=new Dt({name:L.name,uniforms:Ni.clone(L.uniforms),vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,lights:!0,side:x,fog:m});O.uniforms.mirrorSampler.value=k.texture,O.uniforms.textureMatrix.value=I,O.uniforms.alpha.value=o,O.uniforms.time.value=l,O.uniforms.normalSampler.value=c,O.uniforms.sunColor.value=u,O.uniforms.waterColor.value=d,O.uniforms.sunDirection.value=h,O.uniforms.distortionScale.value=p,O.uniforms.eye.value=f,i.material=O,i.onBeforeRender=function(V,q,ne){if(S.setFromMatrixPosition(i.matrixWorld),_.setFromMatrixPosition(ne.matrixWorld),b.extractRotation(i.matrixWorld),y.set(0,0,1),y.applyMatrix4(b),v.subVectors(S,_),v.dot(y)>0)return;v.reflect(y).negate(),v.add(S),b.extractRotation(ne.matrixWorld),T.set(0,0,-1),T.applyMatrix4(b),T.add(_),E.subVectors(S,T),E.reflect(y).negate(),E.add(S),N.position.copy(v),N.up.set(0,1,0),N.up.applyMatrix4(b),N.up.reflect(y),N.lookAt(E),N.far=ne.far,N.updateMatrixWorld(),N.projectionMatrix.copy(ne.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(N.projectionMatrix),I.multiply(N.matrixWorldInverse),g.setFromNormalAndCoplanarPoint(y,S),g.applyMatrix4(N.matrixWorldInverse),A.set(g.normal.x,g.normal.y,g.normal.z,g.constant);let X=N.projectionMatrix;P.x=(Math.sign(A.x)+X.elements[8])/X.elements[0],P.y=(Math.sign(A.y)+X.elements[9])/X.elements[5],P.z=-1,P.w=(1+X.elements[10])/X.elements[14],A.multiplyScalar(2/A.dot(P)),X.elements[2]=A.x,X.elements[6]=A.y,X.elements[10]=A.z+1-a,X.elements[14]=A.w,f.setFromMatrixPosition(ne.matrixWorld);let Z=V.getRenderTarget(),Q=V.xr.enabled,Re=V.shadowMap.autoUpdate;i.visible=!1,V.xr.enabled=!1,V.shadowMap.autoUpdate=!1,V.setRenderTarget(k),V.state.buffers.depth.setMask(!0),V.autoClear===!1&&V.clear(),V.render(q,N),i.visible=!0,V.xr.enabled=Q,V.shadowMap.autoUpdate=Re,V.setRenderTarget(Z);let Se=ne.viewport;Se!==void 0&&V.state.viewport(Se)}}};var um={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var lo=class extends an{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Hc=class extends an{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bs(um),this.copyPass.material.blending=Wi,this.timer=new Ua}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lo!==void 0&&(a instanceof lo?i=!0:a instanceof Hc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vc=class extends an{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ve}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var co={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wc=class extends an{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ni.clone(co.uniforms),this.material=new Sr({name:co.name,uniforms:this.uniforms,vertexShader:co.vertexShader,fragmentShader:co.fragmentShader}),this._fsQuad=new Or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ds?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===za&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ad=class{constructor(e){this.canvas=e,this.batches=[],this.low=!1,this.dusk=0,this.cam=[0,1.8,31],this.time={value:0},this.geometries=new Map,this.materials=new Map,this.lastSize="",this.lastLight=-1,this.frame=0,this.renderer=new vc({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.debug.onShaderError=(i,n)=>{throw new Error("The graphics engine could not compile a material: "+i.getProgramInfoLog(n))},this.renderer.outputColorSpace=at,this.renderer.toneMapping=Ds,this.renderer.toneMappingExposure=.94,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Is,this.renderer.shadowMap.autoUpdate=!1,this.scene=new gr,this.scene.fog=new ha("#b1cedb",.0032),this.scene.environmentIntensity=.2,this.artMeadow=new sn().load("assets/art-direction/meadow-albedo-v2.png"),this.artMeadow.colorSpace=at,this.artMeadow.wrapS=this.artMeadow.wrapT=_i,this.artMeadow.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.fill=new os("#d3e1ec",.18),this.fill.position.set(35,35,55),this.scene.add(this.fill),this.camera=new Nt(63,1,.08,1400),this.sky=new oo,this.sky.scale.setScalar(1e3),this.sky.material.uniforms.turbidity.value=2.2,this.sky.material.uniforms.rayleigh.value=2.8,this.sky.material.uniforms.mieCoefficient.value=.004,this.sky.material.uniforms.mieDirectionalG.value=.78,this.scene.add(this.sky),this.hemi=new Ia("#b9d7ed","#514b32",.48),this.scene.add(this.hemi),this.sun=new os("#fff1d4",3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-62,right:62,top:55,bottom:-55,near:1,far:260}),this.sun.shadow.normalBias=.018,this.sun.shadow.bias=-12e-5,this.sun.shadow.radius=2.2,this.sun.shadow.camera.updateProjectionMatrix(),this.scene.add(this.sun,this.sun.target),this.fire=new Gi("#ff873d",18,11,2),this.fire.position.set(-51,1.05,-16),this.scene.add(this.fire),this.stageLight=new Gi("#ffd69a",12,20,2),this.stageLight.position.set(0,5,-31),this.scene.add(this.stageLight),this.pmrem=new Ur(this.renderer),this.updateLighting(!0),Op(this);let t=new Wt(1,1,{type:si,samples:Math.min(2,this.renderer.capabilities.maxSamples)});t.depthTexture=new pn(1,1,Ii),this.composer=new Gc(this.renderer,t),this.composer.addPass(new Vc(this.scene,this.camera)),this.occlusion=new bc(this.camera),this.composer.addPass(this.occlusion),this.finishPass=new Sc,this.composer.addPass(this.finishPass),this.composer.addPass(new Wc)}async loadJamKit(){this.jamKit=await qp(this),this.jamKit.instanceCrowd(this.legacyPeople||[]),Fp(this,this.jamKit);for(let e of this.batches)e.replacements=e.nodes.map(Zu),e.allReplaced=e.replacements.every(Boolean),e.dirty=!0;return this.jamKit}createMeadow(e,t){return Up(this,e,t)}texture(e){let t=new mi(e);return t.colorSpace=at,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t}geometry(e,t){if(this.geometries.has(e))return this.geometries.get(e);let i=new ze,n=new Pn(t,8);return i.setAttribute("position",new Hi(n,3,0)),i.setAttribute("normal",new Hi(n,3,3)),i.setAttribute("uv",new Hi(n,2,6)),i.computeBoundingSphere(),this.geometries.set(e,i),i}material(e){let[t,i,n]=e.props,r=[e.tex?.id||"",i,n,t,n?e.color.join(","):""].join("|");if(this.materials.has(r))return this.materials.get(r);let a={color:16777215,roughness:i===5?.8:i===6?.95:.88,metalness:0,map:e.tex?.gl||null,side:lt,shadowSide:lt};e.tex&&(a.alphaTest=.28,a.alphaToCoverage=!0),n&&(a.emissive=new ve().setRGB(...e.color),a.emissiveIntensity=n*2.3,a.emissiveMap=e.tex?.gl||null),(i===5||i===6)&&(a.bumpMap=this.surfaceDetail(i),a.bumpScale=i===5?.022:.008);let o=new wt(a);return o.name=`Festival material ${r}`,t&&this.addWind(o,t),i===8&&Br(o,"mountain",this.time),(i===1||i===7)&&Br(o,i===1?"grass":"path",this.time,i===1?this.artMeadow:null,i===1?this.groundPaths:null),this.materials.set(r,o),o}surfaceDetail(e){if(this.detailTextures??=new Map,this.detailTextures.has(e))return this.detailTextures.get(e);let t=128,i=new Uint8Array(t*t*4);for(let r=0;r<t;r++)for(let a=0;a<t;a++){let o=a/t*Math.PI*2,l=r/t*Math.PI*2,c=e===5?.5+.28*Math.sin(o*12+Math.sin(l*2)*1.5)+.1*Math.sin(o*31+l*2):.5+.23*Math.sin(o*24)*Math.sin(l*24),h=(r*t+a)*4,u=Math.round(c*255);i[h]=i[h+1]=i[h+2]=u,i[h+3]=255}let n=new Ln(i,t,t);return n.wrapS=n.wrapT=_i,n.magFilter=Pt,n.minFilter=Si,n.generateMipmaps=!0,n.needsUpdate=!0,this.detailTextures.set(e,n),n}addWind(e,t){e.onBeforeCompile=i=>{i.uniforms.festivalTime=this.time,i.vertexShader=`uniform float festivalTime;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 origin=vec3(0.);
#ifdef USE_INSTANCING
origin=instanceMatrix[3].xyz;
#endif
transformed.x+=sin(festivalTime*1.25+origin.z*.43+origin.x*.13)*${t.toFixed(4)}*.055*max(position.y,0.);
transformed.z+=cos(festivalTime*.85+origin.x*.31)*${t.toFixed(4)}*.035*max(position.y,0.);`)},e.customProgramCacheKey=()=>`festival-wind-${t}`}build(e,t){e.update(),this.legacyPeople=[];let i=new Map,n=o=>{if(o.jamHuman&&this.legacyPeople.push(o),o.geo&&o.props[1]!==3&&!(this.groundPaths&&o.props[1]===7)){let l=[o.geo,o.tex?.id||"",...o.props,o.props[2]?o.color.join(","):""].join("|");i.has(l)||i.set(l,{geo:o.geo,nodes:[]}),i.get(l).nodes.push(o)}for(let l of o.children)n(l)};n(e);let r=new Le,a=new ve;for(let o of i.values()){let l=o.nodes[0],c=this.material(l);if(o.mesh=new ni(this.geometry(o.geo,t[o.geo]),c,o.nodes.length),o.mesh.frustumCulled=!1,o.mesh.castShadow=!!l.props[3],o.mesh.receiveShadow=!0,o.mesh.instanceMatrix.setUsage(Jh),o.data=new Float32Array(o.nodes.length*24),o.nodes.forEach((h,u)=>{h.batch=o,h.index=u,o.data.set(h.world,u*24),o.mesh.setMatrixAt(u,r.fromArray(h.world)),o.mesh.setColorAt(u,a.setRGB(...h.color,at))}),o.mesh.instanceMatrix.needsUpdate=!0,o.mesh.instanceColor.needsUpdate=!0,l.tex||l.props[0]){let h=new rs({depthPacking:Za,map:l.tex?.gl||null,alphaTest:l.tex?.28:0,side:lt});l.props[0]&&this.addWind(h,l.props[0]),o.mesh.customDepthMaterial=h}this.scene.add(o.mesh),this.batches.push(o)}this.createWater(),this.scene.updateMatrixWorld(!0)}createWater(){let t=new Uint8Array(65536);for(let r=0;r<128;r++)for(let a=0;a<128;a++){let o=a/128*Math.PI*2,l=r/128*Math.PI*2,c=Math.sin(o*4+Math.sin(l*3))*.32+Math.sin(o*9-l*4)*.16,h=Math.cos(l*5+Math.sin(o*2))*.32+Math.cos(l*11+o*5)*.12,u=new R(c,h,1).normalize(),d=(r*128+a)*4;t[d]=(u.x*.5+.5)*255,t[d+1]=(u.y*.5+.5)*255,t[d+2]=(u.z*.5+.5)*255,t[d+3]=255}let i=new Ln(t,128,128);i.wrapS=i.wrapT=_i,i.magFilter=Pt,i.minFilter=Si,i.generateMipmaps=!0,i.needsUpdate=!0,this.water=new zc(new zt(320,104),{textureWidth:512,textureHeight:512,waterNormals:i,sunDirection:this.sun.position.clone().normalize(),sunColor:16773849,waterColor:2645861,distortionScale:1.9,fog:!0}),this.water.rotation.x=-Math.PI/2,this.water.position.set(0,-.16,-105),this.water.material.uniforms.size.value=3.5;let n=this.water.onBeforeRender;this.water.onBeforeRender=(...r)=>{!this.play?.concert?.active&&(this.frame===1||this.frame%(this.low?12:8)===0)&&n.apply(this.water,r)},this.scene.add(this.water)}updateLighting(e=!1){let t=this.dusk,i=this.campNight||0;if(!e&&Math.abs(t-this.lastLight)<.005&&Math.abs(i-(this.lastCampNight||0))<.005)return;this.lastLight=t,this.lastCampNight=i,this.cloudSky&&(this.cloudSky.material.uniforms.dusk.value=t);let n=new R(-.65,ct.lerp(.58,.19,t),-.38).normalize();if(this.cloudSky&&this.cloudSky.material.uniforms.sunDirection.value.copy(n),this.sun.position.copy(n).multiplyScalar(120),this.sun.target.position.set(0,0,-7),this.sky.material.uniforms.sunPosition.value.copy(n),this.sun.color.set("#ffe4b9").lerp(new ve("#ffb26e"),t),this.sun.intensity=ct.lerp(2.5,1.65,t),this.fill&&(this.fill.intensity=ct.lerp(.12,.1,t)),this.hemi.intensity=ct.lerp(.48,.42,t),this.scene.fog.color.set("#b1cedb").lerp(new ve("#b9907b"),t),this.fire.intensity=ct.lerp(18,40,t),this.stageLight.intensity=ct.lerp(12,45,t),this.sun.intensity*=1-i*.96,this.hemi.intensity*=1-i*.55,this.scene.environmentIntensity=.2*(1-i*.88),this.scene.fog.color.lerp(new ve("#25364e"),i),this.water&&(this.water.material.uniforms.sunDirection.value.copy(n),this.water.material.uniforms.sunColor.value.copy(this.sun.color)),(e||t<.01||t>.99)&&(this.environmentDusk===void 0||Math.abs(t-this.environmentDusk)>.5)){let r=new gr,a=this.sky.clone();a.visible=!0,a.material=this.sky.material.clone(),a.material.uniforms=Ni.clone(this.sky.material.uniforms),a.material.uniforms.showSunDisc&&(a.material.uniforms.showSunDisc.value=!1),r.add(a);let o=this.pmrem.fromScene(r,.04,.1,1500);this.environmentTarget?.dispose(),this.environmentTarget=o,this.scene.environment=o.texture,this.environmentDusk=t,a.material.dispose()}}resize(){let e=this.play?.concert?.active?65e4:18e5,t=Math.min(devicePixelRatio,this.low?1:1.25,Math.sqrt(e/(innerWidth*innerHeight))),i=[innerWidth,innerHeight,t,this.low].join(":");i!==this.lastSize&&(this.lastSize=i,this.renderer.setPixelRatio(t),this.renderer.setSize(innerWidth,innerHeight,!1),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.composer.setPixelRatio(t),this.composer.setSize(innerWidth,innerHeight),this.meadow&&(this.meadow.count=this.low?Math.floor(this.meadow.instanceMatrix.count*.25):this.meadow.instanceMatrix.count),this.renderer.shadowMap.enabled=!this.low,this.renderer.shadowMap.needsUpdate=!0)}setCamera(e,t){this.cam=e,this.camera.position.fromArray(e),this.camera.lookAt(...t),this.camera.updateMatrixWorld()}draw(e){this.jamKit?.update(e);for(let i of this.contactShadows||[])i.mesh.visible=this.jamKit.enabled&&i.root.visible,i.mesh.position.x=i.root.position.x,i.mesh.position.z=i.root.position.z;this.frame++,this.renderer?.shadowMap&&!this.low&&(this.lastShadowTime===void 0||e-this.lastShadowTime>=1/(this.play?.concert?.active?12:24))&&(this.renderer.shadowMap.needsUpdate=!0,this.lastShadowTime=e),this.renderer?.info&&(this.renderer.info.autoReset=!1,this.renderer.info.reset()),this.time.value=e,this.sky&&(this.sky.material.uniforms.time.value=e),this.updateLighting();let t=new Le;for(let i of this.batches)if(i.dirty){i.mesh.visible=!(this.jamKit?.enabled&&i.allReplaced);for(let n=0;n<i.nodes.length;n++)t.fromArray(i.data,n*24),(i.nodes[n].concertHidden||this.jamKit?.enabled&&i.replacements?.[n])&&t.scale(new R(0,0,0)),i.mesh.setMatrixAt(n,t);i.mesh.instanceMatrix.needsUpdate=!0,i.dirty=!1}if(this.water&&(this.water.material.uniforms.time.value=e*.35),this.fire.intensity=(18+22*this.dusk)*(1+Math.sin(e*6)*.08),this.low||this.postprocessingSupported===!1)this.renderer.render(this.scene,this.camera);else if(this.renderer.setRenderTarget(null),this.composer.render(),this.renderer.setRenderTarget(null),this.postprocessingSupported===void 0){let i=this.renderer.getContext(),n=new Uint8Array(4);i.readPixels(Math.floor(i.drawingBufferWidth/2),Math.floor(i.drawingBufferHeight/2),1,1,i.RGBA,i.UNSIGNED_BYTE,n),this.postprocessingSupported=n[3]>0,this.postprocessingSupported||(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera))}}project(e){let t=new R(...e).project(this.camera);return t.z>1?null:[(t.x*.5+.5)*innerWidth,(-t.y*.5+.5)*innerHeight,t.z]}async compile(){await this.renderer.compileAsync(this.scene,this.camera)}};typeof window<"u"&&(window.FestivalCopy={recordLabel:Oi},window.FestivalCrowd={EXTRA_FESTIVAL_GUESTS:xd},window.FestivalEngine=ad,window.FestivalPlay=kc,window.FestivalMusic=po);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
