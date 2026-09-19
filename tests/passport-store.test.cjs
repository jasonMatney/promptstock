const test = require('node:test');
const assert = require('node:assert/strict');
const modulePromise = import('../passport-store.mjs');

function memoryStorage(seed = {}) {
  const map = new Map(Object.entries(seed));
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => { map.set(k, String(v)); },
    _map: map,
  };
}

test('passport load normalizes badges, pills, record, and dog', async () => {
  const {
    PASSPORT_STORAGE_KEY, loadPassport, savePassport, emptyPassport, STAMP_IDS,
  } = await modulePromise;
  const store = memoryStorage({
    [PASSPORT_STORAGE_KEY]: JSON.stringify({
      badges: ['maker', 'bogus', 'ai', 'maker'],
      pills: ['prompt', 'nope', 'tool'],
      record: 'Solve',
      dog: 1,
    }),
  });
  const data = loadPassport(store);
  assert.deepEqual(data.badges, ['maker', 'ai']);
  assert.deepEqual(data.pills, ['prompt', 'tool']);
  assert.equal(data.record, 'Solve');
  assert.equal(data.dog, true);
  assert.deepEqual(STAMP_IDS.slice(), ['maker', 'ai', 'aid', 'swap', 'news', 'records']);

  const blank = emptyPassport();
  savePassport(blank, store);
  assert.deepEqual(loadPassport(store), blank);
});

test('discovery load filters to known districts and round-trips', async () => {
  const {
    DISCOVERY_STORAGE_KEY, loadDiscoveries, saveDiscoveries, DISTRICT_IDS,
  } = await modulePromise;
  const store = memoryStorage({
    [DISCOVERY_STORAGE_KEY]: JSON.stringify(['camp', 'space', 'pier']),
  });
  assert.deepEqual(loadDiscoveries(DISTRICT_IDS, store), ['camp', 'pier']);
  saveDiscoveries(['garden'], store);
  assert.deepEqual(loadDiscoveries(DISTRICT_IDS, store), ['garden']);
});

test('corrupt storage falls back safely', async () => {
  const { PASSPORT_STORAGE_KEY, DISCOVERY_STORAGE_KEY, loadPassport, loadDiscoveries, emptyPassport } = await modulePromise;
  const store = memoryStorage({
    [PASSPORT_STORAGE_KEY]: '{not-json',
    [DISCOVERY_STORAGE_KEY]: '{nope',
  });
  assert.deepEqual(loadPassport(store), emptyPassport());
  assert.deepEqual(loadDiscoveries(undefined, store), []);
});
