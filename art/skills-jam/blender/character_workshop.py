"""Authored human surface profiles, cloth, hair ribbons and a deforming armature.
No downloaded meshes. Blender Z-up, facing -Y. Used by build_kit.py.
"""
import bpy, math
from mathutils import Vector, Quaternion
from math import sin, cos, pi, exp

def clean_export_mesh(mesh):
 """Remove zero-area and duplicate triangles before measuring/exporting."""
 import bmesh
 bm=bmesh.new();bm.from_mesh(mesh)
 bmesh.ops.dissolve_degenerate(bm,dist=1e-7,edges=list(bm.edges))
 bmesh.ops.triangulate(bm,faces=list(bm.faces))
 seen=set();remove=[]
 for face in bm.faces:
  key=(face.material_index,tuple(sorted(tuple(v.co) for v in face.verts)))
  if face.calc_area()<1e-10 or key in seen:remove.append(face)
  else:seen.add(key)
 if remove:bmesh.ops.delete(bm,geom=remove,context='FACES')
 bm.to_mesh(mesh);bm.free()

def build_character(api,name,kit,shirt='canvas_teal',pants='canvas_stripe_red',skin='skin_warm',variant=0,hero=False):
 root=api['root'](name,kit);M=api['M'];objects=[];parts={};N=20 if hero else 14
 root['character_version']='studio-cast-v6';root['jam_pivot']='ground'
 layered=hero or variant in [1,3,5]
 jacket='canvas_stripe_red' if hero else ['denim','gold','canvas_teal','denim','canvas_cream','canvas_stripe_red'][variant]
 # Shared Principled palette; warm lips and a softer lens reflection.
 def tint(key,source,factors,rough=.8):
  if key not in M:
   m=M[source].copy();m.name=key;m.diffuse_color=tuple(M[source].diffuse_color[i]*factors[i] for i in range(3))+(1,)
   m.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value=m.diffuse_color
   m.node_tree.nodes.get('Principled BSDF').inputs['Roughness'].default_value=rough;M[key]=m
  return key
 lip=tint(skin+'_lip',skin,(.85,.65,.64));seam=tint(shirt+'_seam',shirt,(.7,.73,.72));pantseam=tint(pants+'_seam',pants,(.72,.7,.68))
 hairlight=tint('hair_sunlit_v5','hair_dark',(1.65,1.42,1.2));lens=tint('sunglass_lens_v5','vinyl_black',(.38,.42,.40),.38)
 # Bone names and rest positions are stable across hero/crowd variants.
 B={'root':((0,0,0),(0,0,.2),None),'pelvis':((0,0,.94),(0,0,1.06),'root'),'spine':((0,0,1.06),(0,0,1.44),'pelvis'),'neck':((0,0,1.44),(0,0,1.61),'spine'),'head':((0,0,1.61),(0,0,1.81),'neck')}
 for side,a in [('L',-1),('R',1)]:
  B['upper_arm_'+side]=((a*.225,0,1.455),(a*.315,-.014,1.18),'spine')
  B['forearm_'+side]=(B['upper_arm_'+side][1],(a*.345,-.025,.925),'upper_arm_'+side)
  B['hand_'+side]=(B['forearm_'+side][1],(a*.35,-.035,.81),'forearm_'+side)
  B['thigh_'+side]=((a*.106,0,.96),(a*.106,-.012,.515),'pelvis')
  B['shin_'+side]=(B['thigh_'+side][1],(a*.106,0,.105),'thigh_'+side)
  B['foot_'+side]=(B['shin_'+side][1],(a*.106,-.18,.055),'shin_'+side)
 arm=bpy.data.armatures.new(name+'_skeleton');rig=bpy.data.objects.new(name+'_rig',arm);bpy.context.scene.collection.objects.link(rig);rig.parent=root
 bpy.context.view_layer.objects.active=rig;rig.select_set(True);bpy.ops.object.mode_set(mode='EDIT')
 for n,(h,t,parent) in B.items():
  b=arm.edit_bones.new(n);b.head=h;b.tail=t
  if parent:b.parent=arm.edit_bones[parent]
 bpy.ops.object.mode_set(mode='OBJECT');rig.select_set(False)
 def rigid(bone):return lambda p:{bone:1.}
 def blend(b1,b2,z0,z1):
  def weight(p):
   t=max(0,min(1,(p[2]-z0)/(z1-z0)));t=t*t*(3-2*t);return {b1:1-t,b2:t}
  return weight
 def skinmat(ma):
  # Vertex colors carry the palette, so equal finishes share one export material.
  key='painted_character_'+('lens' if ma.startswith('sunglass_lens') else 'skin' if 'skin' in ma else 'matte')
  if key not in M:
   m=bpy.data.materials.new(key);m.use_nodes=True;m.diffuse_color=M[ma].diffuse_color
   bsdf=m.node_tree.nodes.get('Principled BSDF');bsdf.inputs['Roughness'].default_value=.38 if ma.startswith('sunglass_lens') else .78 if 'skin' in ma else .91
   col=m.node_tree.nodes.new('ShaderNodeVertexColor');col.layer_name='Color';m.node_tree.links.new(col.outputs['Color'],bsdf.inputs['Base Color']);M[key]=m
  return M[key]
 def make(n,verts,faces,ma,weight,category,uvs=None):
  d=bpy.data.meshes.new(name+'_'+n);d.from_pydata(verts,[],faces);d.update();o=bpy.data.objects.new(name+'_'+n,d);bpy.context.scene.collection.objects.link(o);o.parent=root
  painted=ma not in ['labels_atlas','vinyl_black','metal_pole'];o.data.materials.append(skinmat(ma) if painted else M[ma]);objects.append(o);parts.setdefault(category,[]).append(o)
  for p in d.polygons:p.use_smooth=True
  if uvs:
   uv=d.uv_layers.new(name='UVMap')
   for l in d.loops:uv.data[l.index].uv=uvs[l.vertex_index]
  if painted:
   c=d.color_attributes.new(name='Color',type='BYTE_COLOR',domain='CORNER');base=M[ma].diffuse_color
   for l in d.loops:
    x,y,z=d.vertices[l.vertex_index].co
    brush=.995+.005*sin(z*35+x*11)
    # Warm nose/ears and cheeks are painted into the authored vertex colors.
    warmth=.11*exp(-((z-1.685)/.046)**2)*max(0,-y/.1) if 'skin' in ma else 0
    c.data[l.index].color=(min(1,base[0]*brush*(1+warmth)),base[1]*brush*(1-warmth*.25),base[2]*brush*(1-warmth*.4),1)
  for i,v in enumerate(verts):
   for bone,w in weight(v).items():
    if w>.0001:
     g=o.vertex_groups.get(bone) or o.vertex_groups.new(name=bone);g.add([i],w,'REPLACE')
  mod=o.modifiers.new('Human deformation','ARMATURE');mod.object=rig
  return o
 def loft(n,profiles,ma,weight,category,segments=N,fold=0,shape=None,caps=True):
  verts=[];uv=[]
  if profiles[0][2]>profiles[-1][2]:profiles=list(reversed(profiles))
  if len(profiles)>3 and category in ['body','shirt','shorts','shoes','face']:
   src=profiles;profiles=[]
   for k in range(len(src)-1):
    p0=src[max(0,k-1)];p1=src[k];p2=src[k+1];p3=src[min(len(src)-1,k+2)]
    profiles.append(p1)
    profiles.append(tuple(.5*((2*p1[c])+(-p0[c]+p2[c])*.5+(2*p0[c]-5*p1[c]+4*p2[c]-p3[c])*.25+(-p0[c]+3*p1[c]-3*p2[c]+p3[c])*.125) for c in range(5)))
   profiles.append(src[-1])
  for j,(x,y,z,rx,ry) in enumerate(profiles):
   for i in range(segments):
    a=2*pi*i/segments;crease=1+fold*(sin(a*7+j*.7)*.65+sin(a*11-j*.5)*.35)
    p=(x+rx*cos(a)*crease,y+ry*sin(a)*crease,z)
    if shape:p=shape(p,a,j)
    verts.append(p);uv.append((i/segments,j/max(1,len(profiles)-1)))
  faces=[(j*segments+i,j*segments+(i+1)%segments,(j+1)*segments+(i+1)%segments,(j+1)*segments+i) for j in range(len(profiles)-1) for i in range(segments)]
  if caps:faces += [tuple(reversed(range(segments))),tuple((len(profiles)-1)*segments+i for i in range(segments))]
  return make(n,verts,faces,ma,weight,category,uv)
 def ribbon(n,points,widths,ma,bone,category='hair',sides=4):
  pts=[Vector(p) for p in points];verts=[]
  if category in ['hair','hair_detail','backpack'] and len(pts)>2:
   src=pts;ws=widths;pts=[];widths=[]
   for k in range(len(src)-1):
    p0,p1,p2,p3=src[max(0,k-1)],src[k],src[k+1],src[min(len(src)-1,k+2)]
    for step in range(3):
     t=step/3;pts.append(.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t));widths.append(ws[k]*(1-t)+ws[k+1]*t)
   pts.append(src[-1]);widths.append(ws[-1])
  for i,p in enumerate(pts):
   tangent=(pts[min(i+1,len(pts)-1)]-pts[max(i-1,0)]).normalized();u=tangent.cross(Vector((0,1,0)))
   if u.length<.1:u=tangent.cross(Vector((1,0,0)))
   u.normalize();v=tangent.cross(u).normalized()
   for j in range(sides):verts.append(tuple(p+widths[i]*(u*cos(j*2*pi/sides)+v*sin(j*2*pi/sides)*.48)))
  faces=[(i*sides+j,i*sides+(j+1)%sides,(i+1)*sides+(j+1)%sides,(i+1)*sides+j) for i in range(len(pts)-1) for j in range(sides)]
  faces += [tuple(reversed(range(sides))),tuple((len(pts)-1)*sides+j for j in range(sides))]
  return make(n,verts,faces,ma,rigid(bone),category)
 def ellipsoid(n,center,radii,ma,bone,category,segments=12,rings=6):
  ps=[]
  for j in range(rings+1):
   a=pi*j/rings;ps.append((center[0],center[1],center[2]-radii[2]*cos(a),max(.0005,radii[0]*sin(a)),max(.0005,radii[1]*sin(a))))
  return loft(n,ps,ma,rigid(bone),category,segments=segments)
 # The neck and limb contours use anatomical changes in cross-section, not cylinders.
 loft('neck',[(0,.012,1.43,.077,.067),(0,.009,1.49,.060,.052),(0,.008,1.54,.047,.045),(0,.006,1.61,.048,.045)],skin,blend('spine','head',1.47,1.61),'body')
 torso=[(0,.014,.943,.183,.122),(0,.012,.99,.174,.115),(0,.008,1.08,.158,.101),(0,.004,1.17,.17,.11),(0,0,1.28,.197,.114),(0,.002,1.38,.215,.116),(0,.006,1.445,.231,.105),(0,.006,1.48,.188,.095),(0,0,1.505,.085,.066),(0,-.008,1.50,.060,.052)]
 loft('crew_neck_shirt',torso,shirt,blend('pelvis','spine',.98,1.3),'shirt',fold=.006)
 # Neck binding follows the crew neckline, and hem follows the asymmetric loose shirt.
 loft('neck_binding',[(0,-.008,1.497,.064,.056),(0,-.008,1.509,.065,.056)],shirt,rigid('spine'),'shirt',caps=False)
 if hero:
  # A sun emblem is a thin conforming ink surface, with no opaque patch background.
  def inkpoint(x,z):
   row=next((j for j in range(len(torso)-1) if torso[j][2]<=z<=torso[j+1][2]),3)
   t=(z-torso[row][2])/(torso[row+1][2]-torso[row][2]);rx=torso[row][3]*(1-t)+torso[row+1][3]*t;ry=torso[row][4]*(1-t)+torso[row+1][4]*t;cy=torso[row][1]*(1-t)+torso[row+1][1]*t
   return (x,cy-ry*math.sqrt(max(.05,1-(x/rx)**2))-.017,z)
  vs=[inkpoint(0,1.32)]+[inkpoint(.035*cos(i*2*pi/32),1.32+.035*sin(i*2*pi/32)) for i in range(32)]
  make('sun_ink',vs,[(0,i+1,(i+1)%32+1) for i in range(32)],'gold',blend('pelvis','spine',.98,1.3),'print')
  for i in range(12):
   a=i/12*2*pi;v=[]
   for r,offset in [(.043,-.025),(.067,-.025),(.067,.025),(.043,.025)]:v.append(inkpoint(r*cos(a+offset),1.32+r*sin(a+offset)))
   make('sun_ray',v,[(0,1,2,3)],'gold',blend('pelvis','spine',.98,1.3),'print')
  for line,z in [('BETTER',1.225),('SKILLS',1.187),('BRIGHTER',1.149),('DAYS',1.111)]:
   curve=bpy.data.curves.new('Sun shirt typography','FONT');curve.body=line;curve.align_x='CENTER';curve.size=.035;curve.resolution_u=2
   text=bpy.data.objects.new('Print source',curve);bpy.context.scene.collection.objects.link(text);bpy.context.view_layer.objects.active=text;text.select_set(True);bpy.ops.object.convert(target='MESH')
   verts=[inkpoint(v.co.x,z+v.co.y) for v in text.data.vertices];faces=[tuple(f.vertices) for f in text.data.polygons];bpy.data.objects.remove(text,do_unlink=True)
   make('shirt_lettering',verts,faces,'paper_print',blend('pelvis','spine',.98,1.3),'print')
 # An open overshirt follows the torso, with rolled cuffs and sewn pockets.
 if hero or variant in [1,3,5]:
  outer='canvas_stripe_red' if hero else ['denim','gold','canvas_teal','denim','canvas_cream','canvas_stripe_red'][variant]
  def front_y(x,z):
   row=next((j for j in range(len(torso)-1) if torso[j][2]<=z<=torso[j+1][2]),3)
   p,q=torso[row],torso[row+1];t=(z-p[2])/(q[2]-p[2]);rx=p[3]*(1-t)+q[3]*t;ry=p[4]*(1-t)+q[4]*t
   return p[1]*(1-t)+q[1]*t-ry*math.sqrt(max(.04,1-(x/rx)**2))-.009
  # Inset shirt panel under the open jacket.
  vs=[];zs=[.979,1.05,1.18,1.32,1.43,1.48]
  for z in zs:
   for i in range(9):
    x=(i/8*2-1)*(.075 if z<1.4 else .06);vs.append((x,front_y(x,z)-.004,z))
  make('undershirt',vs,[(j*9+i,j*9+i+1,(j+1)*9+i+1,(j+1)*9+i) for j in range(5) for i in range(8)],shirt,blend('pelvis','spine',.98,1.3),'innerwear')
  for a in [-1,1]:
   vs=[]; rows=[(.97,.071,.16),(1.05,.073,.15),(1.18,.081,.16),(1.32,.084,.19),(1.43,.069,.19),(1.485,.052,.12)]
   for z,inner,outerx in rows:
    for k in range(6):
     x=a*(inner+(outerx-inner)*k/5);vs.append((x,front_y(x,z),z))
   make('overshirt_panel',vs,[(j*6+k,j*6+k+1,(j+1)*6+k+1,(j+1)*6+k) for j in range(5) for k in range(5)],outer,blend('pelvis','spine',.98,1.3),'outerwear')
   pts=[(a*x,front_y(a*x,z)-.002,z) for z,x,_ in rows]
   ribbon('jacket_placket',pts,[.007]*len(pts),outer,'spine','outerwear',6)
   for z in [1.06,1.18,1.30]:ellipsoid('brass_snap',(a*.08,front_y(a*.08,z)-.007,z),(.0035,.002,.0035),'gold','spine','outerwear',8,4)
   # Angled chest pocket and folded collar, broad enough to read from game camera.
   vs=[(a*x,front_y(a*x,z)-.006,z) for x,z in [(.102,1.33),(.166,1.34),(.158,1.265),(.11,1.26)]]
   make('chest_pocket',vs,[(0,1,2,3)],outer,rigid('spine'),'outerwear')
   vs=[(a*x,front_y(a*x,z)-.011,z) for x,z in [(.05,1.485),(.117,1.474),(.112,1.401),(.067,1.43)]]
   make('folded_collar',vs,[(0,1,2,3)],outer,rigid('spine'),'outerwear')
   # A clean, two-tone sleeve cuff ties the layers together.
   loft('rolled_cuff',[(a*.285,-.003,1.297,.065,.067),(a*.282,-.004,1.321,.068,.071)],outer,rigid('upper_arm_L' if a<0 else 'upper_arm_R'),'outerwear',segments=20)
 # Crotch panel and separate continuous cloth legs preserve natural shorts volume.
 loft('shorts_waist',[(0,.005,.86,.175,.102),(0,.009,.92,.178,.109),(0,.008,.975,.172,.103)],pants,rigid('pelvis'),'shorts',fold=.006)
 for side,a in [('L',-1),('R',1)]:
  upper='upper_arm_'+side;fore='forearm_'+side;hand='hand_'+side;thigh='thigh_'+side;shin='shin_'+side;foot='foot_'+side
  armprofile=[(a*.347,-.025,.91,.028,.031),(a*.343,-.022,.965,.027,.032),(a*.341,-.017,1.035,.037,.041),(a*.331,-.014,1.105,.040,.043),(a*.315,-.013,1.167,.036,.038),(a*.310,-.011,1.205,.038,.043),(a*.29,-.002,1.275,.052,.052),(a*.257,.001,1.365,.056,.055),(a*.229,.003,1.455,.061,.059)]
  def aw(p,upper=upper,fore=fore,hand=hand):
   z=p[2]
   if z<.97:return blend(hand,fore,.91,.97)(p)
   return blend(fore,upper,1.125,1.235)(p)
  loft('arm_'+side,[r for r in armprofile if r[2]<1.38],skin,aw,'body',segments=16 if hero else 10)
  sleeve=[(a*.285,-.003,1.297,.063,.065),(a*.283,-.004,1.32,.067,.068),(a*.259,0,1.385,.073,.074),(a*.223,0,1.452,.081,.076),(a*.191,0,1.47,.065,.069)]
  loft('short_sleeve_'+side,sleeve,shirt,rigid(upper),'shirt',fold=.006,segments=20 if hero else 12)
  # Hands have a palm, thumb and four separated, gently curled fingers.
  loft('palm_'+side,[(a*.347,-.026,.925,.025,.029),(a*.351,-.033,.897,.033,.023),(a*.35,-.035,.854,.036,.02),(a*.351,-.041,.833,.028,.019)],skin,rigid(hand),'body',segments=12 if hero else 8)
  for finger in range(4):
   x=a*(.325+finger*.017);length=[.054,.068,.065,.052][finger];start=.844
   ribbon('finger_'+side+str(finger),[(x,-.037,start),(x,-.041,start-length*.45),(x,-.056,start-length*.85),(x,-.066,start-length)], [.010,.009,.008,.004],skin,hand,'fingers',sides=8 if hero else 6)
  ribbon('thumb_'+side,[(a*.328,-.044,.891),(a*.306,-.068,.872),(a*.305,-.077,.845)],[.013,.012,.006],skin,hand,'fingers',8 if hero else 6)
  leg=[(a*.106,.009,.085,.031,.035),(a*.106,.006,.15,.03,.033),(a*.108,.01,.23,.043,.051),(a*.111,.015,.32,.053,.060),(a*.111,.009,.405,.055,.057),(a*.107,-.012,.487,.044,.046),(a*.106,-.022,.52,.047,.048),(a*.105,-.009,.57,.055,.06),(a*.104,.008,.665,.073,.075),(a*.102,.012,.79,.085,.087),(a*.1,.01,.94,.081,.09)]
  if not hero and variant not in [1,3]:loft('leg_'+side,[r for r in leg if r[2]<.8],skin,blend(shin,thigh,.475,.565),'legs',segments=20 if hero else 14)
  short=[(a*.108,.009,.66,.083,.093),(a*.108,.012,.681,.085,.095),(a*.105,.006,.75,.092,.1),(a*.1,.005,.845,.097,.111),(a*.096,.008,.935,.091,.103)]
  if hero or variant in [1,3]:short=[(a*.108,.006,.16,.043,.048),(a*.108,.012,.22,.047,.053),(a*.108,.008,.43,.061,.062),(a*.108,.006,.57,.068,.073)]+short
  loft('shorts_leg_'+side,short,pants,blend(thigh,'pelvis',.81,.95),'shorts',segments=20 if hero else 12,fold=.009)
  # Offset pocket seams are drawn as shallow cloth ridges, not boxes.
  ribbon('pocket_seam_'+side,[(a*.145,-.083,.915),(a*.170,-.084,.87),(a*.182,-.072,.81)],[.002,.002,.002],pantseam,thigh,'seams',4)
  loft('turned_shorts_hem_'+side,([(a*.108,.006,.16,.044,.05),(a*.108,.006,.179,.045,.05)] if hero or variant in [1,3] else [(a*.108,.009,.657,.085,.095),(a*.108,.010,.674,.088,.098)]),pants,rigid(thigh),'seams',segments=20 if hero else 14,caps=False)
  if hero or variant in [0,3]:
   vs=[(a*.183,-.048,.82),(a*.187,.054,.82),(a*.184,.054,.714),(a*.18,-.048,.714)]
   make('cargo_pocket_'+side,vs,[(0,1,2,3)],pants,rigid(thigh),'seams')
   ribbon('cargo_flap_'+side,[(a*.188,-.05,.822),(a*.191,.004,.814),(a*.191,.056,.822)],[.003]*3,pantseam,thigh,'seams',4)
  if hero:
   for k in range(2):
    loft('woven_wristband_'+side+str(k),[(a*.347,-.025,.943+k*.013,.030,.034),(a*.347,-.025,.951+k*.013,.030,.034)],shirt if k else 'gold',rigid(fore),'accessories',segments=14,caps=False)
  loft('sock_'+side,[(a*.106,.006,.105,.033,.037),(a*.106,.006,.17,.035,.04),(a*.106,.006,.192,.038,.043)],'shoe_cream',rigid(shin),'socks',segments=16 if hero else 10)
  loft('sock_stripe_'+side,[(a*.106,.006,.178,.038,.043),(a*.106,.006,.184,.039,.044)],shirt,rigid(shin),'socks',segments=16 if hero else 10,caps=False)
  # Low-profile canvas shoes have a shaped toe, heel, tongue and separate rubber sole.
  shoe=[(a*.106,-.065,.008,.064,.134),(a*.106,-.065,.025,.068,.138),(a*.106,-.064,.045,.066,.135),(a*.106,-.058,.072,.057,.121),(a*.106,-.03,.10,.044,.079),(a*.106,.006,.123,.033,.041)]
  loft('sneaker_'+side,shoe,'chalkboard',rigid(foot),'shoes',segments=24 if hero else 12)
  loft('rubber_sole_'+side,[(x,y,z,rx+.0015,ry+.0015) for x,y,z,rx,ry in shoe[:2]],'shoe_cream',rigid(foot),'soles',segments=24 if hero else 12)
  if hero:
   for y in [-.025,-.047,-.069,-.09]:ribbon('lace_'+side,[(a*.106-.027,y,.105-abs(y)*.25),(a*.106+.027,y-.006,.105-abs(y)*.25)],[.0022,.0022],'paper_print',foot,'soles',4)
 # Readable sculpted heads share the existing animation skeleton.
 from cast_faces import build_face
 build_face(locals())
 if not hero:
  if variant in [1,4]:
   loft('canvas_backpack',[(0,.15,1.04,.12,.055),(0,.15,1.08,.145,.073),(0,.15,1.29,.14,.073),(0,.15,1.37,.09,.05)],'wood_sign',rigid('spine'),'backpack',segments=16,fold=.02)
   for a in [-1,1]:ribbon('backpack_strap',[(a*.13,.16,1.32),(a*.14,.025,1.49),(a*.14,-.107,1.445),(a*.13,-.122,1.35),(a*.125,-.123,1.22),(a*.14,-.11,1.13),(a*.19,.01,1.08)],[.013]*7,'canvas_cream','spine','backpack',4)
 if not hero:
  # Shift waist/hips and facial planes, rather than only scaling a common silhouette.
  for category,items in parts.items():
   for obj in items:
    for v in obj.data.vertices:
     x,y,z=v.co
     if variant in [2,5]:
      if category in ['shirt','body','shorts'] and .85<z<1.4:v.co.x*=1-.09*exp(-((z-1.15)/.17)**2)+.07*exp(-((z-.96)/.10)**2)
      if category=='face' and z<1.66:v.co.x*=.94
     if variant==3 and category in ['shirt','shorts','outerwear','innerwear']:v.co.y*=1.10
 # Slightly narrower shoulders and arms preserve the reference's lean proportions.
 for category,items in parts.items():
  if category in ['body','fingers','shirt','print','outerwear','innerwear']:
   for obj in items:
    for v in obj.data.vertices:
     t=max(0,min(1,(v.co.z-.78)/.3));v.co.x*=1-.09*t
 # Bones follow the same authored upper-body change.
 bpy.context.view_layer.objects.active=rig;rig.select_set(True);bpy.ops.object.mode_set(mode='EDIT')
 for b in arm.edit_bones:
  if any(k in b.name for k in ['arm','hand']):b.head.x*=.91;b.tail.x*=.91
 bpy.ops.object.mode_set(mode='OBJECT');rig.select_set(False)
 # Shorten exposed neck while retaining adult head proportions.
 for category in ['face','eyes','hair','hair_detail','facial_hair','glasses','hat']:
  for obj in parts.get(category,[]):
   for v in obj.data.vertices:v.co.z-=.035
 for obj in parts['body']:
  if obj.name.endswith('_neck'):
   for v in obj.data.vertices:v.co.z-=.035*max(0,min(1,(v.co.z-1.49)/.12))
 bpy.context.view_layer.objects.active=rig;rig.select_set(True);bpy.ops.object.mode_set(mode='EDIT')
 for n in ['neck','head']:
  b=arm.edit_bones[n]
  if n=='head':b.head.z-=.035
  b.tail.z-=.035
 bpy.ops.object.mode_set(mode='OBJECT');rig.select_set(False)
 # Merge named surface categories while retaining independent clothing, face and accessories.
 bpy.ops.object.select_all(action='DESELECT')
 for category,items in parts.items():
  if not items:continue
  for o in items:o.select_set(True)
  bpy.context.view_layer.objects.active=items[0];bpy.ops.object.join();o=items[0];o.name=name+'_'+category
  for m in list(o.modifiers):
   if m.type=='ARMATURE':o.modifiers.remove(m)
  if category=='seams':
   o.vertex_groups.clear()
   for v in o.data.vertices:
    side='R' if v.co.x>0 else 'L';weights=blend('shin_'+side,'thigh_'+side,.475,.565)(v.co) if v.co.z<.65 else blend('thigh_'+side,'pelvis',.81,.96)(v.co)
    for bone,w in weights.items():
     if w>0:
      group=o.vertex_groups.get(bone) or o.vertex_groups.new(name=bone);group.add([v.index],w,'REPLACE')
  if category=='hair':
   remesh=o.modifiers.new('Sculpted hair volume','REMESH');remesh.mode='VOXEL';remesh.voxel_size=.003 if hero else .004;remesh.use_smooth_shade=True;bpy.ops.object.modifier_apply(modifier=remesh.name)
   sm=o.modifiers.new('Soft hair ridges','SMOOTH');sm.factor=.55;sm.iterations=2;bpy.ops.object.modifier_apply(modifier=sm.name)
   o.vertex_groups.clear();vg=o.vertex_groups.new(name='head');vg.add(list(range(len(o.data.vertices))),1,'REPLACE')
   col=o.data.color_attributes.get('Color') or o.data.color_attributes.new(name='Color',type='BYTE_COLOR',domain='CORNER')
   base=M['hair_dark'].diffuse_color
   for loop in o.data.loops:
    x,y,z=o.data.vertices[loop.vertex_index].co;stroke=.94+.19*(.5+.5*sin(x*120+z*70+y*40))
    col.data[loop.index].color=tuple(min(1,base[i]*stroke) for i in range(3))+(1,)
  if category in ['shirt','shorts','body']:
   remesh=o.modifiers.new('Continuous authored surface','REMESH');remesh.mode='VOXEL';remesh.voxel_size=(.0055 if hero else .0075) if category=='body' else (.008 if hero else .012);remesh.use_smooth_shade=True;bpy.ops.object.modifier_apply(modifier=remesh.name)
   smooth=o.modifiers.new('Relax transitions','SMOOTH');smooth.factor=.55;smooth.iterations=3;bpy.ops.object.modifier_apply(modifier=smooth.name)
   o.vertex_groups.clear()
   for v in o.data.vertices:
    x,y,z=v.co;side='R' if x>0 else 'L'
    if category=='shirt':
     t=max(0,min(1,(abs(x)-.155)/.105)) if z>1.26 else 0;weights=blend('pelvis','spine',.98,1.3)(v.co);weights={k:w*(1-t) for k,w in weights.items()};weights['upper_arm_'+side]=t
    elif category=='shorts':weights=blend('shin_'+side,'thigh_'+side,.475,.565)(v.co) if z<.65 else blend('thigh_'+side,'pelvis',.81,.96)(v.co)
    elif abs(x)>.16 and z>1.26:
     t=max(0,min(1,(abs(x)-.155)/.105));weights={'spine':1-t,'upper_arm_'+side:t}
    elif (abs(x)>.23 and z>.74) or (abs(x)>.16 and z>1.2):
     weights=blend('hand_'+side,'forearm_'+side,.9,.97)(v.co) if z<.97 else blend('forearm_'+side,'upper_arm_'+side,1.125,1.235)(v.co)
    elif z>1.4:weights=blend('spine','head',1.47,1.575)(v.co)
    else:weights=blend('shin_'+side,'thigh_'+side,.475,.565)(v.co)
    for bone,w in weights.items():
     if w>0:
      group=o.vertex_groups.get(bone) or o.vertex_groups.new(name=bone);group.add([v.index],w,'REPLACE')
   col=o.data.color_attributes.get('Color') or o.data.color_attributes.new(name='Color',type='BYTE_COLOR',domain='CORNER')
   base=M[(jacket if layered else shirt) if category=='shirt' else pants if category=='shorts' else skin].diffuse_color
   # Remeshing can leave zero-valued corners; repaint the continuous surface.
   for loop in o.data.loops:
    x,y,z=o.data.vertices[loop.vertex_index].co;brush=.98+.015*sin(x*97+y*83+z*39)
    wear=(.10*exp(-((z-(.69 if category=='shorts' else 1.0))/.04)**2)+.045*exp(-((z-(.79 if category=='shorts' else 1.35))/.08)**2)) if category in ['shirt','shorts'] else 0
    col.data[loop.index].color=tuple(min(1,base[i]*brush*(1+wear)+wear*.012) for i in range(3))+(1,)
  if category in ['shirt','shorts']:
   for v in o.data.vertices:
    x,y,z=v.co
    if category=='shirt':
     fold=.002*sin(z*95+x*24)*exp(-((z-1.015)/.12)**2)+.0015*sin(z*88-abs(x)*35)*exp(-((z-1.34)/.08)**2)
    else:fold=.002*sin(z*80+abs(x)*37)*exp(-((z-.76)/.14)**2)
    v.co.y+=fold*min(1,abs(y)/.08)*(1 if y>0 else -1)
  # Predictable per-category budgets preserve silhouette while leaving room for faces and hair.
  budgets={'body':1600,'legs':1500,'shirt':1800,'shorts':1350,'face':3100,'hair':1700,'hair_detail':650,'shoes':1150,'soles':450,'socks':450,'glasses':750,'print':650,'seams':300,'accessories':240,'fingers':650,'facial_hair':750,'hat':500,'backpack':550,'outerwear':1000,'eyes':1500,'innerwear':300}
  o.data.calc_loop_triangles();count=len(o.data.loop_triangles);limit=budgets.get(category,500)*(1 if hero else .70)
  if count>limit:
   dec=o.modifiers.new('Character triangle budget','DECIMATE');dec.ratio=limit/count;bpy.ops.object.modifier_apply(modifier=dec.name)
  clean_export_mesh(o.data)
  for f in o.data.polygons:f.use_smooth=True
  mod=o.modifiers.new('Human deformation','ARMATURE');mod.object=rig
  o.select_set(False)
 # A single armature owns each named clip; GLB uses real skin weights.
 if hero:
  for clip in ['idle','walk','kick']:
   rig.animation_data_create();rig.animation_data.action=None
   for frame in [1,7,13,19,25]:
    phase=(frame-1)/24*pi*2
    for n in B:
     b=rig.pose.bones[n];b.rotation_mode='XYZ';b.rotation_euler=(0,0,0)
     if clip=='idle':
      if n=='spine':b.rotation_euler[1]=sin(phase)*.013
      if n=='head':b.rotation_euler[1]=sin(phase+.5)*.022
      if n=='forearm_L':b.rotation_euler[0]=-.09+sin(phase)*.025
      if n=='forearm_R':b.rotation_euler[0]=-.06
      if n=='upper_arm_L':b.rotation_euler[2]=-.035
      if n=='upper_arm_R':b.rotation_euler[2]=.025
     if clip=='walk':
      for side,k in [('L',1),('R',-1)]:
       if n=='thigh_'+side:b.rotation_euler[0]=sin(phase)*.42*k
       if n=='shin_'+side:b.rotation_euler[0]=max(0,sin(phase+(0 if k==1 else pi)))*.5
       if n=='upper_arm_'+side:b.rotation_euler[0]=-sin(phase)*.27*k
      if n=='spine':b.rotation_euler[2]=sin(phase)*.04
     if clip=='kick':
      k=[1,7,13,19,25].index(frame)
      if n=='thigh_R':b.rotation_euler[0]=[0,.3,-.45,-.85,0][k]
      if n=='shin_R':b.rotation_euler[0]=[0,.8,.08,.35,0][k]
      if n in ['upper_arm_L','upper_arm_R']:
       spread=([0,.25,.65,.45,0] if n.endswith('L') else [0,-.15,-.5,-.35,0])[k]
       axis=arm.bones[n].matrix_local.to_quaternion().inverted() @ Vector((0,1,0));b.rotation_euler=Quaternion(axis,spread).to_euler('XYZ')
      if n=='forearm_L':b.rotation_euler[0]=[0,-.12,-.35,-.25,0][k]
      if n=='spine':b.rotation_euler[1]=[0,.025,-.04,.015,0][k]
     b.keyframe_insert(data_path='rotation_euler',frame=frame)
   act=rig.animation_data.action;act.name=name+'_'+clip;tr=rig.animation_data.nla_tracks.new();tr.name=clip;tr.strips.new(clip,1,act);rig.animation_data.action=None
  for b in rig.pose.bones:b.rotation_euler=(0,0,0)
 if not hero:
  # Independent body types, retained as asset-root scale in the GLB.
  widths=[1.08,.88,.95,1.14,.93,1.02];heights=[1,.94,.97,1.035,1.015,.92]
  root.scale=(widths[variant],1,heights[variant])
  rig.pose.bones['forearm_L'].rotation_mode='XYZ';rig.pose.bones['forearm_L'].rotation_euler.x=-.13
  rig.pose.bones['forearm_R'].rotation_mode='XYZ';rig.pose.bones['forearm_R'].rotation_euler.x=-.07
 return root
