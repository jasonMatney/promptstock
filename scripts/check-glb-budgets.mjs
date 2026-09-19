#!/usr/bin/env node
/**
 * Compare shipped assets/models/*.glb against REPORT.json + kits.manifest.json ceilings.
 * No Blender required — uses Three.js GLTFLoader (textures stubbed).
 *
 * Exit 1 on any triangle / size / byte budget failure.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const report = JSON.parse(fs.readFileSync(path.join(root, 'art/skills-jam/REPORT.json'), 'utf8'));
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, 'art/skills-jam/blender/kits.manifest.json'), 'utf8'),
);

const SIZE_TOL = 0.025; // metres — skinned bind-pose vs Blender measure can drift slightly on X
const HEIGHT_TOL = 0.01;

const loader = new GLTFLoader();
loader.register((parser) => {
  parser.loadTexture = async () => new THREE.Texture();
  return { name: 'budget_texture_stub' };
});

function countTris(rootObj) {
  let tris = 0;
  rootObj.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const idx = o.geometry.index;
    tris += idx ? idx.count / 3 : o.geometry.attributes.position.count / 3;
  });
  return tris;
}

function findRoot(scene, name) {
  let found;
  scene.traverse((o) => {
    if (found) return;
    if (o.userData?.asset_id === name || o.name === name) found = o;
  });
  return found;
}

async function loadKit(kitId) {
  const file = path.join(root, 'assets/models', `${kitId}.glb`);
  const buf = fs.readFileSync(file);
  const glb = await loader.parseAsync(
    buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
    '',
  );
  return { file, bytes: buf.length, glb };
}

const failures = [];
let combined = 0;

for (const kit of manifest.kits) {
  const { file, bytes, glb } = await loadKit(kit.id);
  combined += bytes;
  const ceiling = manifest.byteCeilings?.[kit.glb];
  if (ceiling != null && bytes > ceiling) {
    failures.push(`${kit.glb}: ${bytes} bytes > ceiling ${ceiling}`);
  }

  const expected = report[kit.id];
  if (!expected) {
    failures.push(`${kit.id}: missing from REPORT.json`);
    continue;
  }

  for (const asset of expected) {
    const obj = findRoot(glb.scene, asset.name);
    if (!obj) {
      failures.push(`${kit.id}/${asset.name}: root missing in GLB`);
      continue;
    }
    obj.updateWorldMatrix(true, true);
    const tris = countTris(obj);
    if (tris !== asset.triangles) {
      failures.push(
        `${kit.id}/${asset.name}: triangles ${tris} != REPORT ${asset.triangles}`,
      );
    }
    if (kit.triangleBudgetPerRoot != null && tris > kit.triangleBudgetPerRoot) {
      failures.push(
        `${kit.id}/${asset.name}: triangles ${tris} > budget ${kit.triangleBudgetPerRoot}`,
      );
    }

    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    // REPORT size_xyz_m is Blender XYZ (Z-up height last). glTF/Three is Y-up:
    // compare [x, z, y] ↔ REPORT [x, y, z].
    const measured = [size.x, size.z, size.y];
    const reported = asset.size_xyz_m;
    for (let i = 0; i < 3; i++) {
      const tol = i === 2 ? HEIGHT_TOL : SIZE_TOL;
      if (Math.abs(measured[i] - reported[i]) > tol) {
        failures.push(
          `${kit.id}/${asset.name}: size[${i}] ${measured[i].toFixed(4)} vs REPORT ${reported[i]} (tol ${tol})`,
        );
      }
    }
  }

  // Extra roots with asset_id should still be listed in REPORT.
  const reportedNames = new Set(expected.map((a) => a.name));
  glb.scene.traverse((o) => {
    const id = o.userData?.asset_id;
    if (id && !reportedNames.has(id)) {
      failures.push(`${kit.id}: GLB has asset_id ${id} not in REPORT.json`);
    }
  });

  console.log(
    `OK ${kit.id}: ${expected.length} roots, ${(bytes / 1e6).toFixed(2)} MB` +
      (ceiling != null ? ` (ceiling ${(ceiling / 1e6).toFixed(2)} MB)` : ''),
  );
}

const combinedCeiling = manifest.byteCeilings?.allGlbsCombined;
if (combinedCeiling != null && combined > combinedCeiling) {
  failures.push(`all GLBs combined: ${combined} bytes > ceiling ${combinedCeiling}`);
} else {
  console.log(`OK combined models: ${(combined / 1e6).toFixed(2)} MB`);
}

if (failures.length) {
  console.error('\nGLB budget check failed:');
  for (const f of failures) console.error(' -', f);
  process.exit(1);
}

console.log('\nAll GLB triangle / bbox / byte budgets passed.');
