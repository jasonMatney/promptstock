/**
 * Hostname-scoped localStorage helpers for passport stamps and district discoveries.
 * Pure load/save — no DOM. Keys stay stable for existing saves.
 */

export const PASSPORT_STORAGE_KEY = 'skillsjam.world.passport.v1';
export const DISCOVERY_STORAGE_KEY = 'skillsjam.discovery.v2';
export const ROUND_STORAGE_KEY = 'skillsjam.round.v1';

export const STAMP_IDS = Object.freeze(['maker', 'ai', 'aid', 'swap', 'news', 'records']);
export const PILL_IDS = Object.freeze(['prompt', 'tool', 'context']);
export const RECORD_CHOICES = Object.freeze(['Communicate', 'Solve', 'Create', 'Connect', 'Stay curious']);
export const DISTRICT_IDS = Object.freeze(['camp', 'garden', 'pier']);

export function emptyPassport() {
  return { badges: [], pills: [], record: 'Communicate', dog: false };
}

/**
 * @param {unknown} saved
 * @param {readonly string[]} [stampIds]
 */
export function normalizePassport(saved, stampIds = STAMP_IDS) {
  const data = emptyPassport();
  if (!saved || typeof saved !== 'object') return data;
  const src = /** @type {Record<string, unknown>} */ (saved);
  data.badges = Array.isArray(src.badges)
    ? [...new Set(src.badges.filter((x) => stampIds.includes(/** @type {string} */ (x))))]
    : [];
  data.pills = Array.isArray(src.pills)
    ? [...new Set(src.pills.filter((x) => PILL_IDS.includes(/** @type {string} */ (x))))]
    : [];
  data.record = RECORD_CHOICES.includes(/** @type {string} */ (src.record))
    ? /** @type {string} */ (src.record)
    : 'Communicate';
  data.dog = !!src.dog;
  return data;
}

/**
 * @param {Storage|{getItem(k:string):string|null}|null|undefined} [storage]
 * @param {readonly string[]} [stampIds]
 */
export function loadPassport(storage, stampIds = STAMP_IDS) {
  const store = storage ?? (typeof localStorage !== 'undefined' ? localStorage : null);
  if (!store?.getItem) return emptyPassport();
  try {
    return normalizePassport(JSON.parse(store.getItem(PASSPORT_STORAGE_KEY) || 'null'), stampIds);
  } catch {
    return emptyPassport();
  }
}

/**
 * @param {{badges:string[],pills:string[],record:string,dog:boolean}} data
 * @param {Storage|{setItem(k:string,v:string):void}|null|undefined} [storage]
 */
export function savePassport(data, storage) {
  const store = storage ?? (typeof localStorage !== 'undefined' ? localStorage : null);
  if (!store?.setItem) return;
  try {
    store.setItem(PASSPORT_STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* private mode / quota */
  }
}

/**
 * @param {readonly string[]} [districtIds]
 * @param {Storage|{getItem(k:string):string|null}|null|undefined} [storage]
 */
export function loadDiscoveries(districtIds = DISTRICT_IDS, storage) {
  const store = storage ?? (typeof localStorage !== 'undefined' ? localStorage : null);
  if (!store?.getItem) return [];
  try {
    const parsed = JSON.parse(store.getItem(DISCOVERY_STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.filter((id) => districtIds.includes(id)) : [];
  } catch {
    return [];
  }
}

/**
 * @param {string[]} discoveries
 * @param {Storage|{setItem(k:string,v:string):void}|null|undefined} [storage]
 */
export function saveDiscoveries(discoveries, storage) {
  const store = storage ?? (typeof localStorage !== 'undefined' ? localStorage : null);
  if (!store?.setItem) return;
  try {
    store.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(discoveries));
  } catch {
    /* private mode / quota */
  }
}
