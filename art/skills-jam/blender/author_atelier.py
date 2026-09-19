"""Refine the editable working kits; original blender/*.blend files stay intact.

Design reference: pipeline/concepts/tent-atelier-v1.png (GPT Image).
Run with Blender 4.5 LTS, background mode, --python-exit-code 1.
This pass replaces only the four named tent hierarchies in sources/tent_kit.blend
and adds removable atelier_* details to the existing props. It is repeatable.
"""
import math
from pathlib import Path

import bpy
from mathutils import Vector

HERE = Path(__file__).resolve().parent
PREFIX = "atelier_"


def material(name, color, metal=0, roughness=.8, emission=0):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Roughness'].default_value = roughness
    bsdf.inputs['Metallic'].default_value = metal
    if emission:
        bsdf.inputs['Emission Color'].default_value = (*color, 1)
        bsdf.inputs['Emission Strength'].default_value = emission
    mat.diffuse_color = (*color, 1)
    return mat


def mesh(root, name, vertices, faces, mat, smooth=False):
    data = bpy.data.meshes.new(PREFIX + name)
    data.from_pydata(vertices, [], faces)
    data.update()
    obj = bpy.data.objects.new(PREFIX + name, data)
    bpy.context.collection.objects.link(obj)
    obj.parent = root
    obj.data.materials.append(mat)
    for poly in data.polygons:
        poly.use_smooth = smooth
    return obj


def box(root, name, center, size, mat, bevel=0):
    bpy.ops.mesh.primitive_cube_add(size=1, location=center)
    obj = bpy.context.object
    obj.name = PREFIX + name
    obj.scale = size
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.parent = root
    obj.data.materials.append(mat)
    if bevel:
        mod = obj.modifiers.new('Soft crafted edges', 'BEVEL')
        mod.width = bevel
        mod.segments = 1
        obj.modifiers.new('Weighted corner normals', 'WEIGHTED_NORMAL')
    return obj


def beam(root, name, a, b, radius, mat, sides=6):
    a, b = Vector(a), Vector(b)
    bpy.ops.mesh.primitive_cylinder_add(vertices=sides, radius=radius,
                                      depth=(b-a).length, location=(a+b)/2)
    obj = bpy.context.object
    obj.name = PREFIX + name
    obj.parent = root
    obj.rotation_euler = (b-a).to_track_quat('Z', 'Y').to_euler()
    obj.data.materials.append(mat)
    return obj


def cloth(root, name, cols, rows, point, mat):
    vertices = [point(i/cols, j/rows) for j in range(rows+1) for i in range(cols+1)]
    faces = [(j*(cols+1)+i, j*(cols+1)+i+1, (j+1)*(cols+1)+i+1,
              (j+1)*(cols+1)+i) for j in range(rows) for i in range(cols)]
    obj = mesh(root, name, vertices, faces, mat, True)
    uv = obj.data.uv_layers.new()
    for loop in obj.data.loops:
        v = loop.vertex_index
        uv.data[loop.index].uv = (v % (cols+1)/cols, v // (cols+1)/rows)
    return obj


def lantern(root, x, y, z, brass, glow):
    beam(root, 'lantern_hanger', (x,y,z+.25), (x,y,z+.43), .022, brass)
    beam(root, 'lantern_diffuser', (x,y,z-.12), (x,y,z+.16), .085, glow, 8)
    for h in [-.16,.20]:
        beam(root, 'lantern_cap', (x,y,z+h-.025), (x,y,z+h+.025), .13, brass, 8)
    for i in range(4):
        a = i*math.pi/2
        dx, dy = math.cos(a)*.105, math.sin(a)*.105
        beam(root, 'lantern_cage', (x+dx,y+dy,z-.16), (x+dx,y+dy,z+.20), .012, brass, 4)


def tents():
    path = HERE/'sources/tent_kit.blend'
    bpy.ops.wm.open_mainfile(filepath=str(path))
    cream = material('canvas_atelier_cream', (.72,.62,.43))
    teal = material('canvas_atelier_teal', (.035,.20,.19))
    rust = material('canvas_atelier_rust', (.43,.10,.06))
    gold = material('canvas_atelier_ochre', (.65,.35,.075))
    wood = material('wood_atelier_cedar', (.24,.105,.038), roughness=.72)
    brass = material('atelier_brass', (.53,.30,.075), .65, .32)
    glow = material('atelier_lantern_glow', (1,.64,.25), roughness=.45, emission=2.2)
    for key,w,d,eave,peak in [('ai',8.4,6,2.8,4.1),('maker',12,8,3,4.65),
                              ('aid',8.4,6,2.8,4.1),('swap',8.2,5.8,2.75,4.05)]:
        root = bpy.data.objects['tent_'+key]
        # These are working copies; all original source hierarchies remain in ../.
        for obj in list(root.children_recursive):
            bpy.data.objects.remove(obj, do_unlink=True)
        root.hide_viewport = root.hide_render = False
        root.hide_set(False)
        root['art_revision'] = 'atelier-v1'
        accent = rust if key=='aid' else gold if key=='maker' else teal
        for side in [-1,1]:
            for stripe in range(8):
                def roof(u,v,side=side,stripe=stripe):
                    return (side*w/2*u, (-d/2+d*(stripe+v)/8)*(1-(1-u)*.28),
                            peak+(eave-peak)*u-.24*math.sin(u*math.pi)
                            -.055*math.sin(v*math.pi)*math.sin(u*math.pi))
                cloth(root,'roof',8,3,roof,accent if stripe%2==0 else cream)
            cloth(root,'scalloped_side',32,1,
                  lambda u,v:(side*w/2,-d/2+d*u,eave-v*(.18+.09*math.sin(u*math.pi*8)**2)),cream)
            cloth(root,'side_gold_hem',32,1,
                  lambda u,v:(side*(w/2+.008),-d/2+d*u,eave-.18-.09*math.sin(u*math.pi*8)**2+v*.035),gold)
            cloth(root,'side_curtain',16,4,
                  lambda u,v:(side*(w/2+.055*math.sin(u*math.pi*12)*(1-v)),
                              -d*.05+d*.55*u,.07+(eave-.15)*v),cream)
            cloth(root,'gathered_entry',8,6,
                  lambda u,v:(side*(w/2-(.22+.65*abs(v-.45))*(u)),
                              -d/2+.06*math.sin(u*math.pi*6),.08+(eave-.13)*v),cream)
            box(root,'curtain_tie',(side*(w/2-.22),-d/2-.025,eave*.46),(.44,.12,.12),accent,.015)
            for y in [-d/2,d/2]:
                box(root,'cedar_post',(side*w/2,y,eave/2),(.13,.13,eave),wood,.015)
                box(root,'brass_foot',(side*w/2,y,.065),(.19,.19,.13),brass,.015)
                beam(root,'knee_brace',(side*w/2,y,eave-.65),(side*(w/2-.65),y,eave-.04),.055,wood)
                beam(root,'guy_rope',(side*w/2,y,eave-.1),(side*w*.54,y*1.13,.08),.012,gold)
            for seam in [0,4,8]:
                y=-d/2+d*seam/8
                for j in range(6):
                    def point(u): return (side*w/2*u,y*(1-(1-u)*.28),peak+(eave-peak)*u-.24*math.sin(u*math.pi)+.012)
                    beam(root,'roof_piping',point(j/6),point((j+1)/6),.014,gold,4)
            lantern(root,side*(w/2-.38),-d/2-.13,eave-.62,brass,glow)
        cloth(root,'back_curtain',24,4,
              lambda u,v:(w*(u-.5),d/2+.06*math.sin(u*math.pi*16),.06+(eave-.10)*v),cream)
        # Hipped end panels close the old empty gable with striped, curved canvas.
        for end in [-1,1]:
            for stripe in range(8):
                verts=[]
                for row in range(8):
                    r=row/8
                    for col in [stripe,stripe+1]:
                        verts.append((w*(col/8-.5)*(1-r),end*d/2*(1-r*.28),
                                      eave+(peak-eave)*r-.24*math.sin(r*math.pi)))
                verts.append((0,end*d*.36,peak))
                faces=[(row*2,row*2+1,row*2+3,row*2+2) for row in range(7)]
                faces.append((14,15,16))
                mesh(root,'hipped_canopy',verts,faces,accent if stripe%2==0 else cream,True)
            beam(root,'ridge_finial',(0,end*d*.36,peak),(0,end*d*.36,peak+.12),.035,brass)
        beam(root,'ridge', (0,-d*.36,peak),(0,d*.36,peak),.035,brass)
        # Preserve banner material identity: the runtime supplies crisp, readable titles.
        banner = bpy.data.materials['banner_'+key]
        cloth(root,'banner',1,1,lambda u,v:(w*.68*(u-.5),-d/2-.16,eave-.67+v*.76),banner)
        for z in [eave-.67,eave+.09]:
            beam(root,'banner_trim',(-w*.34,-d/2-.17,z),(w*.34,-d/2-.17,z),.018,gold,4)
    save(path)


def props():
    path = HERE/'sources/props_kit.blend'
    bpy.ops.wm.open_mainfile(filepath=str(path))
    for obj in list(bpy.data.objects):
        if obj.name.startswith(PREFIX): bpy.data.objects.remove(obj,do_unlink=True)
    leather=material('atelier_leather',(.11,.055,.027),roughness=.7)
    brass=material('atelier_brass',(.53,.30,.075),.65,.32)
    cream=material('canvas_atelier_stitch',(.78,.66,.43))
    for name in ['backpack_teal','backpack_rust']:
        root=bpy.data.objects[name]
        for x in [-.095,.095]:
            box(root,'pack_webbing',(x,-.154,.21),(.035,.015,.32),leather,.004)
            box(root,'pack_buckle',(x,-.168,.29),(.052,.018,.045),brass,.006)
            box(root,'pack_buckle_inset',(x,-.180,.29),(.026,.007,.020),leather)
        box(root,'pack_label',(0,-.16,.13),(.072,.016,.039),cream,.004)
        beam(root,'pack_handle',(-.055,0,.448),(.055,0,.448),.012,leather)
        root['art_revision']='atelier-v1'
    root=bpy.data.objects['record_table']
    box(root,'table_edge',(0,-.333,.853),(1.79,.026,.055),leather,.01)
    for x in [-.84,.84]:
        box(root,'corner_bracket',(x,-.349,.845),(.075,.025,.075),brass,.01)
    save(path)


def save(path):
    bpy.context.scene.frame_set(1)
    bpy.ops.file.pack_all()
    bpy.context.preferences.filepaths.save_version=0
    bpy.ops.wm.save_as_mainfile(filepath=str(path),compress=True)
    print('AUTHORED',path)


tents()
props()
