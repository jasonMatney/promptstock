import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// Depth-only contact occlusion reuses the main pass depth, including alpha-cut foliage.
// Twelve nearby samples avoid a second scene/normal render on this dense festival.
export class FestivalOcclusionPass extends ShaderPass {
 constructor(camera){
  super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},inverseProjection:{value:camera.projectionMatrixInverse},projection:{value:camera.projectionMatrix},resolution:{value:new THREE.Vector2(1,1)},strength:{value:.82}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
 varying vec2 vUv;uniform sampler2D tDiffuse;uniform sampler2D tDepth;uniform mat4 inverseProjection;uniform mat4 projection;uniform vec2 resolution;uniform float strength;
 vec3 pointAt(vec2 uv){float depth=texture2D(tDepth,uv).x;vec4 p=inverseProjection*vec4(uv*2.-1.,depth*2.-1.,1.);return p.xyz/p.w;}
 void main(){vec4 color=texture2D(tDiffuse,vUv);float depth=texture2D(tDepth,vUv).x;vec3 p=pointAt(vUv);vec3 normal=normalize(cross(dFdx(p),dFdy(p)));float occlusion=0.;
 if(depth<.99999){vec2 radius=clamp(vec2(projection[0][0],projection[1][1])*.62/max(-p.z,.5),vec2(2.)/resolution,vec2(.045));
 for(int i=0;i<12;i++){float a=float(i)*2.399963;float ring=sqrt((float(i)+.5)/12.);vec2 coord=vUv+vec2(cos(a),sin(a))*radius*ring;if(any(lessThan(coord,vec2(0.)))||any(greaterThan(coord,vec2(1.))))continue;vec3 delta=pointAt(coord)-p;float distanceToPoint=length(delta);float cosine=max(dot(normal,delta)/max(distanceToPoint,.001)-.12,0.);occlusion+=cosine*(1.-smoothstep(.12,1.25,distanceToPoint))*smoothstep(.012,.06,distanceToPoint);}
 }
 color.rgb*=1.-strength*clamp(occlusion/5.,0.,.65);gl_FragColor=color;
 }`});
  this.camera=camera;
 }
 setSize(w,h){this.uniforms.resolution.value.set(w,h);}
 render(renderer,writeBuffer,readBuffer,...rest){this.uniforms.tDepth.value=readBuffer.depthTexture;super.render(renderer,writeBuffer,readBuffer,...rest);}
}

// A small HDR highlight glow. This uses normal composer ping-pong targets and
// avoids the multi-resolution additive framebuffer path that blanks some GPUs.
export class FestivalFinishPass extends ShaderPass {
 constructor(){super({uniforms:{tDiffuse:{value:null},resolution:{value:new THREE.Vector2(1,1)}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform vec2 resolution;
 void main(){vec4 source=texture2D(tDiffuse,vUv);vec3 glow=vec3(0.);for(int i=0;i<12;i++){float a=float(i)*2.399963;float radius=2.+float(i)*.8;vec3 c=texture2D(tDiffuse,vUv+vec2(cos(a),sin(a))*radius/resolution).rgb;glow+=max(c-vec3(1.15),vec3(0.));}vec3 color=source.rgb+glow*.018;float luminance=dot(color,vec3(.2126,.7152,.0722));color=mix(vec3(luminance),color,1.045);vec2 d=vUv-.5;color*=1.-.14*dot(d,d);gl_FragColor=vec4(color,source.a);}`});}
 setSize(w,h){this.uniforms.resolution.value.set(w,h);}
}
