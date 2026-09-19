"""Regenerate only the seven human hierarchies in editable working sources.
Original kits one directory above sources/ remain untouched. Export is separate.
"""
import bpy, sys
from pathlib import Path
HERE=Path(__file__).resolve().parent
sys.path.insert(0,str(HERE))
from character_workshop import build_character
PALETTE={'canvas_cream':'efdfb9','canvas_teal':'21534d','canvas_stripe_red':'c65a36','wood_sign':'b78b56','chalkboard':'243c36','metal_pole':'656c60','foliage_card':'547b48','vinyl_black':'161e24','paper_print':'f5e9d5','skin_warm':'bd885f','hair_dark':'30231f','shoe_cream':'e0d2b4','gold':'d5a342','denim':'354f69','skin_deep':'80513a','skin_light':'dfac83','iris_hazel':'755038','skin_nostril':'714735'}
args=sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
for kit in ['player_jam','crowd_kit']:
 if '--hero-only' in args and kit!='player_jam':continue
 source=HERE/'sources'/f'{kit}.blend'
 bpy.ops.wm.open_mainfile(filepath=str(source))
 S=bpy.context.scene;S.render.fps=24;S.frame_set(1)
 targets=['player_jam'] if kit=='player_jam' else ['crowd_'+str(i+1) for i in range(6)]
 for o in bpy.data.objects:o.hide_viewport=False;o.hide_set(False);o.select_set(False)
 for name in targets:
  old=bpy.data.objects.get(name)
  if old:
   for child in list(old.children_recursive):bpy.data.objects.remove(child,do_unlink=True)
   bpy.data.objects.remove(old,do_unlink=True)
 for action in list(bpy.data.actions):
  if any(action.name.startswith(n+'_') for n in targets):bpy.data.actions.remove(action)
 M={m.name:m for m in bpy.data.materials}
 # Private v6 materials keep unrelated props and retained dog untouched.
 for key,h in PALETTE.items():
  m=bpy.data.materials.new('cast_v6_'+key);m.use_nodes=True
  rgb=[int(h[i:i+2],16)/255 for i in (0,2,4)];rgb=[((v+.055)/1.055)**2.4 if v>.04045 else v/12.92 for v in rgb]
  m.diffuse_color=tuple(rgb)+(1,);bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=m.diffuse_color;bs.inputs['Roughness'].default_value=.72
  M[key]=m
 # Fresh shared shader finishes, palette is carried by vertex colors.
 M={k:v for k,v in M.items() if not k.startswith('painted_character_')}
 def root(n,kit):
  o=bpy.data.objects.new(n,None);S.collection.objects.link(o);o['asset_id']=n;o['kit']=kit;o['jam_pivot']='ground';return o
 if kit=='player_jam':build_character({'M':M,'root':root},'player_jam',kit,shirt='canvas_teal',pants='denim',hero=True)
 else:
  for i in range(6):
   build_character({'M':M,'root':root},'crowd_'+str(i+1),kit,['canvas_teal','canvas_cream','gold','canvas_cream','canvas_stripe_red','canvas_cream'][i],['denim','canvas_teal','canvas_cream'][i%3],['skin_warm','skin_deep','skin_light'][i%3],i)
 S.frame_set(1)
 visible={o for n in targets for o in [bpy.data.objects[n],*bpy.data.objects[n].children_recursive]}
 if kit=='crowd_kit':visible.update([bpy.data.objects['golden_retriever'],*bpy.data.objects['golden_retriever'].children_recursive])
 for o in bpy.data.objects:o.hide_render=o not in visible
 bpy.ops.wm.save_as_mainfile(filepath=str(source),compress=True)
 print('AUTHORED_PEOPLE',kit)
