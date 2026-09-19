"""Cheap orthographic turnaround still from a shipped GLB (no .blend required).

Usage:
  blender --background --python art/skills-jam/blender/turnaround.py -- --kit player_jam
  blender --background --python art/skills-jam/blender/turnaround.py -- --kit tent_kit --root tent_ai

Writes PNG under art/skills-jam/renders/turnarounds/. Opt-in via npm run render:turnaround.
"""
from __future__ import annotations

import math
import sys
from pathlib import Path

import bpy
from mathutils import Vector

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT_DIR = HERE.parent / "renders" / "turnarounds"


def _argv_after_double_dash():
    if "--" in sys.argv:
        return sys.argv[sys.argv.index("--") + 1 :]
    return []


def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def find_root(name: str):
    obj = bpy.data.objects.get(name)
    if obj:
        return obj
    for o in bpy.data.objects:
        if o.get("asset_id") == name:
            return o
    # Prefer exact name among imported empties/armatures
    for o in bpy.data.objects:
        if o.name == name or o.name.startswith(name + "."):
            return o
    return None


def world_bbox_for(root):
    depsgraph = bpy.context.evaluated_depsgraph_get()
    corners = []
    stack = [root]
    while stack:
        o = stack.pop()
        stack.extend(list(o.children))
        if o.type != "MESH":
            continue
        eval_obj = o.evaluated_get(depsgraph)
        mesh = eval_obj.to_mesh()
        try:
            mat = eval_obj.matrix_world
            for v in mesh.vertices:
                corners.append(mat @ v.co)
        finally:
            eval_obj.to_mesh_clear()
    if not corners:
        raise RuntimeError(f"No mesh under {root.name}")
    xs = [c.x for c in corners]
    ys = [c.y for c in corners]
    zs = [c.z for c in corners]
    mn = Vector((min(xs), min(ys), min(zs)))
    mx = Vector((max(xs), max(ys), max(zs)))
    return mn, mx


def main():
    args = _argv_after_double_dash()
    kit = "player_jam"
    root_name = None
    if "--kit" in args:
        kit = args[args.index("--kit") + 1]
    if "--root" in args:
        root_name = args[args.index("--root") + 1]
    root_name = root_name or kit

    glb = ROOT / "assets" / "models" / f"{kit}.glb"
    if not glb.is_file():
        raise SystemExit(f"Missing {glb}")

    reset_scene()
    bpy.ops.import_scene.gltf(filepath=str(glb))
    root = find_root(root_name)
    if not root:
        raise SystemExit(f"Root {root_name!r} not found in {glb.name}")

    mn, mx = world_bbox_for(root)
    center = (mn + mx) * 0.5
    size = mx - mn
    radius = max(size.length * 0.55, 0.5)

    # Simple studio: soft light + orthographic camera
    light_data = bpy.data.lights.new(name="TurnKey", type="AREA")
    light_data.energy = 400
    light_data.size = radius
    light = bpy.data.objects.new("TurnKey", light_data)
    bpy.context.collection.objects.link(light)
    light.location = center + Vector((radius, -radius, radius))

    fill_data = bpy.data.lights.new(name="TurnFill", type="AREA")
    fill_data.energy = 120
    fill_data.size = radius
    fill = bpy.data.objects.new("TurnFill", fill_data)
    bpy.context.collection.objects.link(fill)
    fill.location = center + Vector((-radius * 0.8, radius * 0.4, radius * 0.6))

    cam_data = bpy.data.cameras.new("TurnCam")
    cam_data.type = "ORTHO"
    cam_data.ortho_scale = max(size.x, size.z) * 1.35 + 0.2
    cam = bpy.data.objects.new("TurnCam", cam_data)
    bpy.context.collection.objects.link(cam)
    cam.location = center + Vector((0, -radius * 2.2, size.z * 0.15))
    direction = center - cam.location
    cam.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    bpy.context.scene.camera = cam

    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE_NEXT"
    scene.render.resolution_x = 512
    scene.render.resolution_y = 512
    scene.render.film_transparent = True
    scene.render.image_settings.file_format = "PNG"
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out = OUT_DIR / f"{kit}_{root_name}.png"
    scene.render.filepath = str(out)

    bpy.ops.render.render(write_still=True)
    print(f"Wrote {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
