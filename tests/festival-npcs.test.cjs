const { test } = require('node:test');
const assert = require('node:assert/strict');

async function load() {
  return import('../festival-npcs.mjs');
}

test('NPC schema: required fields, unique ids, valid schedule tags', async () => {
  const {
    NPC_REGISTRY, FEATURED_NPCS, CROWD_GROUPS, LOCATION_KEYS, SCHEDULE_TAGS,
    validateNpc, assertNpcRegistry, listNpcs, getNpc,
  } = await load();

  assert.ok(FEATURED_NPCS.length >= 3 && FEATURED_NPCS.length <= 16);
  assert.equal(CROWD_GROUPS.length, 12);
  assert.equal(NPC_REGISTRY.length, FEATURED_NPCS.length + CROWD_GROUPS.length);

  for (const npc of NPC_REGISTRY) {
    assert.deepEqual(validateNpc(npc), [], `errors for ${npc.id}`);
    assert.ok(LOCATION_KEYS[npc.location], npc.id);
    for (const tag of npc.schedule) assert.ok(SCHEDULE_TAGS[tag], `${npc.id}:${tag}`);
  }

  assert.equal(assertNpcRegistry(), true);

  const ids = NPC_REGISTRY.map((n) => n.id);
  assert.equal(new Set(ids).size, ids.length);

  const kitIds = FEATURED_NPCS.map((n) => n.kitId).filter(Boolean);
  assert.equal(new Set(kitIds).size, kitIds.length);

  assert.equal(listNpcs().length, NPC_REGISTRY.length);
  assert.equal(listNpcs({ featuredOnly: true }).length, FEATURED_NPCS.length);
  assert.equal(listNpcs({ backgroundOnly: true }).length, CROWD_GROUPS.length);

  assert.equal(getNpc('maya').kitId, 'guest_0');
  assert.equal(getNpc('guest_0').id, 'maya');
  assert.equal(getNpc('nope'), null);
});

test('concert layout still respects reserved featured guests from registry', async () => {
  const { featuredConcertKitIds, FEATURED_NPCS, assertNpcRegistry } = await load();
  const { FEATURED_SEATS, featuredSeatAssignments, concertSeats } = await import('../concert-layout.mjs');

  const ids = featuredConcertKitIds();
  assert.deepEqual(ids, [
    'guest_0', 'guest_1', 'guest_2', 'guest_3', 'guest_4', 'guest_5',
    'repair_helper_0', 'repair_helper_1', 'hero', 'robot', 'dog',
  ]);
  assert.equal(ids.length, FEATURED_NPCS.filter((n) => n.concertReserved).length);
  assert.ok(ids.length <= FEATURED_SEATS.length);
  assertNpcRegistry(undefined, { seatCount: FEATURED_SEATS.length });

  const assignments = featuredSeatAssignments();
  assert.equal(assignments.length, ids.length);
  assignments.forEach((a, i) => {
    assert.equal(a.kitId, ids[i]);
    assert.deepEqual(a.seat, [...FEATURED_SEATS[i]]);
  });

  // Background lawn seats still avoid featured companion footprints.
  const seats = concertSeats(73);
  const all = [...FEATURED_SEATS, ...seats.map((s) => [s.x, s.z])];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      assert.ok(
        Math.hypot(all[i][0] - all[j][0], all[i][1] - all[j][1]) > 1.35,
        `overlap ${i}/${j}`,
      );
    }
  }
});

test('background crowd groups generate the same EXTRA_FESTIVAL_GUESTS spacing', async () => {
  const { generateBackgroundGuests, CROWD_GROUPS } = await load();
  const { EXTRA_FESTIVAL_GUESTS } = await import('../festival-crowd.mjs');
  const generated = generateBackgroundGuests(CROWD_GROUPS);
  assert.equal(generated.length, 48);
  assert.deepEqual([...EXTRA_FESTIVAL_GUESTS], [...generated]);
  generated.forEach(([x, z, r], i) => {
    assert.ok([x, z, r].every(Number.isFinite));
    assert.ok(z > -45);
    assert.ok(!(Math.abs(x) < 7 && z > 12 && z < 31));
    for (const [a, b] of generated.slice(i + 1)) {
      assert.ok(Math.hypot(x - a, z - b) > 1.5);
    }
  });
});

test('repair helper spawns and reaction guest ids stay playable', async () => {
  const { repairHelperSpawns, reactionGuestKitIds, scheduleStatus } = await load();
  const helpers = repairHelperSpawns();
  assert.equal(helpers.length, 2);
  assert.deepEqual(helpers.map((h) => h.id), ['repair_helper_0', 'repair_helper_1']);
  helpers.forEach((h) => {
    assert.equal(h.position.length, 3);
    assert.ok(h.asset.startsWith('crowd_'));
  });
  assert.deepEqual(reactionGuestKitIds(), [
    'guest_0', 'guest_1', 'guest_2', 'guest_3', 'guest_4', 'guest_5',
    'repair_helper_0', 'repair_helper_1',
  ]);
  const status = scheduleStatus();
  assert.equal(status.concert_seat.live, true);
  assert.equal(status.watch_stage.live, false);
  assert.equal(status.visit_food_stall.live, false);
  assert.equal(status.talk_with_friends.live, false);
});

test('invalid NPC definitions fail validation', async () => {
  const { validateNpc, assertNpcRegistry, FEATURED_NPCS } = await load();
  assert.ok(validateNpc({ id: 'x', role: 'a', location: 'nope', schedule: ['stay_home'] }).length);
  assert.ok(validateNpc({ id: 'x', role: 'a', location: 'stage', schedule: ['fly'] }).length);
  assert.throws(
    () => assertNpcRegistry([
      ...FEATURED_NPCS.slice(0, 1),
      { ...FEATURED_NPCS[0], id: 'dup_maya' }, // duplicate kitId guest_0
    ]),
    /duplicate kitId/,
  );
});
