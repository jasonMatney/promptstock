const { test } = require('node:test');
const assert = require('node:assert/strict');

async function load() {
  return import('../npc-schedule.mjs');
}

async function loadNpcs() {
  return import('../festival-npcs.mjs');
}

test('tag→location mapping resolves known behaviors', async () => {
  const { TAG_BEHAVIORS, resolveTagTarget, resolveLocationKey, cycleTags } = await load();
  const { LOCATION_KEYS, getNpc } = await loadNpcs();

  assert.equal(TAG_BEHAVIORS.watch_stage.location, 'festival_stage');
  assert.equal(TAG_BEHAVIORS.visit_food_stall.location, 'picnic_west');
  assert.ok(TAG_BEHAVIORS.talk_with_friends.linger > 0);

  const maya = getNpc('maya');
  const watch = resolveTagTarget('watch_stage', maya);
  assert.equal(watch.tag, 'watch_stage');
  assert.equal(watch.location, 'festival_stage');
  assert.equal(watch.position.length, 3);
  assert.ok(Number.isFinite(watch.yaw));
  // Near stage apron, not maya's home.
  assert.ok(Math.hypot(watch.position[0] - LOCATION_KEYS.festival_stage.approx[0],
    watch.position[2] - LOCATION_KEYS.festival_stage.approx[2]) < 4);

  const nova = getNpc('nova');
  assert.equal(resolveLocationKey(nova, 'picnic_west'), 'picnic_east'); // nova.home.x > 0
  const food = resolveTagTarget('visit_food_stall', nova);
  assert.equal(food.location, 'picnic_east');
  const sol = getNpc('sol');
  assert.equal(resolveLocationKey(sol, 'picnic_west'), 'picnic_west'); // sol.home.x < 0

  const talk = resolveTagTarget('talk_with_friends', maya);
  assert.ok(talk.location === 'festival_stage' || talk.position);

  assert.deepEqual(cycleTags(['stay_home', 'concert_seat', 'cheer', 'watch_stage']), [
    'stay_home', 'watch_stage',
  ]);
  assert.deepEqual(cycleTags(['concert_seat', 'cheer']), []);
});

test('cycle order advances uniquely through ambulatory tags', async () => {
  const { createActorState, advanceActor, tickActor, cycleTags } = await load();
  const { getNpc } = await loadNpcs();

  const maya = getNpc('maya');
  const expected = cycleTags(maya.schedule);
  assert.deepEqual(expected, ['stay_home', 'watch_stage']);

  const st = createActorState(maya, { phaseOffset: 0 });
  assert.equal(st.tags[st.index], 'stay_home');

  const seen = [];
  for (let i = 0; i < expected.length * 2; i++) {
    seen.push(st.target.tag);
    advanceActor(st);
  }
  assert.deepEqual(seen, [...expected, ...expected]);

  // Linger completion advances automatically.
  const walker = createActorState(maya, { phaseOffset: 0 });
  walker.x = walker.target.position[0];
  walker.z = walker.target.position[2];
  walker.lingering = true;
  walker.elapsed = walker.target.linger;
  tickActor(walker, 0.016);
  assert.equal(walker.target.tag, 'watch_stage');
  assert.equal(walker.lingering, false);
});

test('featured + crowd actor ids are unique in the runner', async () => {
  const { NpcScheduleRunner } = await load();
  const { FEATURED_NPCS, CROWD_GROUPS } = await loadNpcs();

  const runner = new NpcScheduleRunner({ featured: FEATURED_NPCS, groups: CROWD_GROUPS });
  const ids = [];
  const seen = new Set();
  for (const st of runner.actors.values()) {
    if (seen.has(st.id)) continue;
    seen.add(st.id);
    ids.push(st.id);
  }
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(ids.length, FEATURED_NPCS.length + CROWD_GROUPS.length);

  // kitId aliases point at the same state object.
  assert.equal(runner.actors.get('maya'), runner.actors.get('guest_0'));

  const before = runner.getState('maya');
  runner.advanceSchedule('maya');
  const after = runner.getState('maya');
  assert.notEqual(before.tag, after.tag);

  runner.setNpcSchedule('maya', ['visit_food_stall', 'talk_with_friends']);
  assert.deepEqual(runner.getState('maya').tags, ['visit_food_stall', 'talk_with_friends']);
  assert.equal(runner.getState('maya').tag, 'visit_food_stall');

  assert.throws(() => runner.setNpcSchedule('maya', ['fly_away']), /Unknown schedule tag/);
  assert.throws(() => runner.setNpcSchedule('nope', ['stay_home']), /Unknown schedule actor/);
});

test('walk tick moves toward target without teleporting mid-path', async () => {
  const { createActorState, tickActor } = await load();
  const { getNpc } = await loadNpcs();
  const maya = getNpc('maya');
  const st = createActorState(maya, { phaseOffset: 1 }); // watch_stage
  assert.equal(st.target.tag, 'watch_stage');
  const start = [st.x, st.z];
  tickActor(st, 0.5, { walkSpeed: 1.35 });
  const moved = Math.hypot(st.x - start[0], st.z - start[1]);
  assert.ok(moved > 0.4 && moved < 1.0, `moved ${moved}`);
  assert.equal(st.lingering, false);
});
