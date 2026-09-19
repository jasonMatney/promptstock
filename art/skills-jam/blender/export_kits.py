"""Headless Blender export: .blend hero kits → assets/models/*.glb.

Usage (from repo root):
  blender --background --python art/skills-jam/blender/export_kits.py
  blender --background --python art/skills-jam/blender/export_kits.py -- --kit player_jam
  blender --background --python art/skills-jam/blender/export_kits.py -- --list

Expects .blend files next to this script (see kits.manifest.json). After export,
re-run measure_kits.py (or npm run check:glb-budgets) and commit GLBs + REPORT.json.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import bpy

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
MANIFEST_PATH = HERE / "kits.manifest.json"


def _argv_after_double_dash():
    if "--" in sys.argv:
        return sys.argv[sys.argv.index("--") + 1 :]
    return []


def load_manifest():
    return json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))


def find_root(name: str):
    obj = bpy.data.objects.get(name)
    if obj:
        return obj
    for o in bpy.data.objects:
        if o.get("asset_id") == name:
            return o
    return None


def select_hierarchy(root):
    bpy.ops.object.select_all(action="DESELECT")
    stack = [root]
    while stack:
        o = stack.pop()
        o.hide_set(False)
        o.hide_viewport = False
        o.hide_render = False
        o.select_set(True)
        stack.extend(list(o.children))
    bpy.context.view_layer.objects.active = root


def ensure_asset_props(root, kit_id: str):
    """Custom props become glTF extras (asset_id / kit / jam_pivot)."""
    if "asset_id" not in root:
        root["asset_id"] = root.name
    root["kit"] = kit_id
    if "jam_pivot" not in root:
        root["jam_pivot"] = "ground"


def export_kit(kit: dict) -> Path:
    blend = HERE / kit["blend"]
    if not blend.is_file():
        raise FileNotFoundError(
            f"Missing Blender source: {blend}\n"
            f"Place editable kits under art/skills-jam/blender/ "
            f"(see README.md). Shipped GLBs in assets/models/ stay playable without them."
        )

    bpy.ops.wm.open_mainfile(filepath=str(blend))

    # Drop studio clutter so kit.test keeps rejecting cameras / punctual lights.
    for cam in list(bpy.data.cameras):
        bpy.data.cameras.remove(cam)
    for light in list(bpy.data.lights):
        bpy.data.lights.remove(light)

    missing = []
    roots = []
    for name in kit["roots"]:
        root = find_root(name)
        if not root:
            missing.append(name)
            continue
        ensure_asset_props(root, kit["id"])
        roots.append(root)
    if missing:
        raise RuntimeError(f"{kit['id']}: missing roots in blend: {', '.join(missing)}")

    # Select all kit hierarchies for a single library GLB.
    bpy.ops.object.select_all(action="DESELECT")
    for root in roots:
        stack = [root]
        while stack:
            o = stack.pop()
            o.hide_set(False)
            o.select_set(True)
            stack.extend(list(o.children))
    bpy.context.view_layer.objects.active = roots[0]

    out = ROOT / "assets" / "models" / kit["glb"]
    out.parent.mkdir(parents=True, exist_ok=True)

    bpy.ops.export_scene.gltf(
        filepath=str(out),
        export_format="GLB",
        use_selection=True,
        export_extras=True,
        export_cameras=False,
        export_lights=False,
        export_apply=False,
        export_animations=True,
        export_skins=True,
        export_morph=True,
        export_yup=True,
        export_texcoords=True,
        export_normals=True,
        export_materials="EXPORT",
        export_image_format="AUTO",
    )
    print(f"Exported {kit['id']} → {out.relative_to(ROOT)} ({out.stat().st_size} bytes)")
    return out


def main():
    args = _argv_after_double_dash()
    manifest = load_manifest()
    kits = manifest["kits"]

    if "--list" in args:
        for kit in kits:
            blend = HERE / kit["blend"]
            status = "OK" if blend.is_file() else "MISSING"
            print(f"{kit['id']:16} blend={kit['blend']:22} [{status}]")
        return

    only = None
    if "--kit" in args:
        i = args.index("--kit")
        only = args[i + 1] if i + 1 < len(args) else None
        if not only:
            raise SystemExit("--kit requires an id (see --list)")

    selected = [k for k in kits if only is None or k["id"] == only]
    if only and not selected:
        raise SystemExit(f"Unknown kit id: {only}")

    errors = []
    for kit in selected:
        try:
            export_kit(kit)
        except Exception as exc:  # noqa: BLE001 — surface to CLI
            errors.append(f"{kit['id']}: {exc}")
            print(f"ERROR {kit['id']}: {exc}", file=sys.stderr)

    if errors:
        raise SystemExit(
            "Export failed for:\n  - "
            + "\n  - ".join(errors)
            + "\n\nInstall / source notes: art/skills-jam/blender/README.md"
        )

    print("All requested kits exported. Next: npm run measure:kits && npm run check:glb-budgets")


if __name__ == "__main__":
    main()
