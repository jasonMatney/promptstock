"""Render actual authored people, including a same-rig kick pose and cast lineup."""
import bpy,sys,math
from pathlib import Path
from mathutils import Vector
HERE=Path(__file__).resolve().parent;OUT=HERE.parent/'renders/people-v6';OUT.mkdir(parents=True,exist_ok=True)
args=sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
for kit in ['player_jam','crowd_kit']:
 if '--hero-only' in args and kit!='player_jam':continue
 bpy.ops.wm.open_mainfile(filepath=str(HERE/'sources'/f'{kit}.blend'))
 S=bpy.context.scene;S.render.engine='CYCLES';S.cycles.samples=16;S.cycles.use_denoising=True
 S.render.resolution_percentage=100;S.render.resolution_x=1000;S.render.resolution_y=1000
 S.view_settings.view_transform='AgX';S.render.image_settings.file_format='PNG'
 S.world=bpy.data.worlds.new('People studio');S.world.use_nodes=True;S.world.node_tree.nodes['Background'].inputs[0].default_value=(.20,.23,.25,1);S.world.node_tree.nodes['Background'].inputs[1].default_value=.5
 names=['player_jam'] if kit=='player_jam' else ['crowd_'+str(i+1) for i in range(6)]
 visible={o for n in names for o in [bpy.data.objects[n],*bpy.data.objects[n].children_recursive]}
 for o in bpy.data.objects:o.hide_render=o not in visible;o.hide_viewport=False;o.hide_set(False)
 for loc,power,size in [((3,-4,5),450,4),((-3,-1,3),170,3),((1,3,4),500,3)]:
  data=bpy.data.lights.new('Studio softbox','AREA');data.energy=power;data.shape='DISK';data.size=size;o=bpy.data.objects.new('Studio softbox',data);S.collection.objects.link(o);o.location=loc;o.rotation_euler=(Vector((0,0,1.3))-o.location).to_track_quat('-Z','Y').to_euler()
 bpy.ops.object.camera_add();cam=bpy.context.object;cam.data.type='ORTHO';S.camera=cam
 def render(name,loc,target,scale):
  cam.location=loc;cam.data.ortho_scale=scale;cam.rotation_euler=(Vector(target)-cam.location).to_track_quat('-Z','Y').to_euler();S.render.filepath=str(OUT/(name+'.png'));bpy.ops.render.render(write_still=True)
 if kit=='player_jam':
  rig=bpy.data.objects['player_jam_rig']
  for tr in rig.animation_data.nla_tracks:tr.mute=tr.name!='idle'
  S.frame_set(1)
  render('hero-portrait',(.8,-4,1.85),(0,0,1.65),.62)
  render('hero-full',(2,-6,2.4),(0,0,.95),2.12)
  for tr in rig.animation_data.nla_tracks:tr.mute=tr.name!='kick'
  S.frame_set(13);render('hero-kick',(3,-5,2),(0,-.05,.95),2.15)
 else:
  for n in (names if '--portraits' in args else []):
   selected={bpy.data.objects[n],*bpy.data.objects[n].children_recursive}
   for o in visible:o.hide_render=o not in selected
   h=bpy.data.objects[n].scale.z
   render(n+'-portrait',(.7,-4,1.8*h),(0,0,1.64*h),.65)
  for o in visible:o.hide_render=False
  for i,n in enumerate(names):bpy.data.objects[n].location.x=(i-2.5)*.8
  S.render.resolution_x=1800;S.render.resolution_y=900
  render('cast-lineup',(0,-7,2.4),(0,0,1),5.2)
print('PEOPLE_REVIEW_COMPLETE')
