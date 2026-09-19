const { test } = require('node:test');
const assert = require('node:assert/strict');

async function load() {
  return import('../festival-map-data.mjs');
}

test('map data exports 14 destinations with required fields', async () => {
  const { DESTINATIONS, destinationIds, cloneDestination, listDestinations } = await load();
  const ids = destinationIds();
  assert.equal(ids.length, 14);
  assert.equal(Object.keys(DESTINATIONS).length, 14);
  for (const id of ids) {
    const d = DESTINATIONS[id];
    assert.equal(d.id, id);
    assert.equal(typeof d.name, 'string');
    assert.equal(typeof d.short, 'string');
    assert.equal(typeof d.tag, 'string');
    assert.equal(typeof d.x, 'number');
    assert.equal(typeof d.z, 'number');
    assert.equal(d.arrival.length, 3);
    assert.equal(typeof d.icon, 'string');
    assert.match(d.color, /^#[0-9a-fA-F]{6}$/);
    const clone = cloneDestination(id);
    assert.notEqual(clone.arrival, d.arrival);
    assert.deepEqual(clone.arrival, [...d.arrival]);
  }
  assert.equal(listDestinations().length, 14);
});

test('tour route and map panel ids cover expected stops', async () => {
  const { TOUR_ROUTE, MAP_PANEL_IDS, DESTINATIONS } = await load();
  assert.deepEqual([...TOUR_ROUTE], [
    'maker', 'ai', 'aid', 'swap', 'news', 'records', 'stage', 'lake', 'camp', 'garden', 'pier',
  ]);
  assert.ok(TOUR_ROUTE.every((id) => DESTINATIONS[id]));
  assert.deepEqual([...MAP_PANEL_IDS], [
    'kick', 'maker', 'ai', 'aid', 'swap', 'news', 'records', 'stage', 'lake', 'dog', 'poster',
    'camp', 'garden', 'pier',
  ]);
  assert.ok(MAP_PANEL_IDS.every((id) => DESTINATIONS[id]));
  assert.equal(MAP_PANEL_IDS.length, 14);
});

test('cloneDestination rejects unknown ids', async () => {
  const { cloneDestination } = await load();
  assert.throws(() => cloneDestination('nope'), /Unknown map destination/);
});
