/**
 * Map destinations and scenic-tour stop lists for Promptstock.
 * Pure data + tiny helpers — no DOM. Consumed by skills-jam-3d.html via window.FestivalMapData.
 */

/** @typedef {{id:string,name:string,short:string,tag:string,x:number,z:number,y?:number,arrival:readonly number[],yaw:number,icon:string,color:string}} Destination */

/** @type {Readonly<Record<string, Destination>>} */
export const DESTINATIONS = Object.freeze({
  maker: Object.freeze({
    id: "maker",
    name: "The Tinker Tent",
    short: "Tinker Tent",
    tag: "A little practice. A new possibility.",
    x: 0,
    z: 2.3,
    y: 2.3,
    arrival: Object.freeze([0, 1.8, 6.5]),
    yaw: 0,
    icon: "✦",
    color: "#e9ae45",
  }),
  ai: Object.freeze({
    id: "ai",
    name: "A small dose of possibility",
    short: "Dubious Advice Bureau",
    tag: "Curiosity sold separately. Batteries not required.",
    x: -16,
    z: 4.5,
    y: 2.4,
    arrival: Object.freeze([-16, 1.8, 7]),
    yaw: 0,
    icon: "✺",
    color: "#075358",
  }),
  aid: Object.freeze({
    id: "aid",
    name: "A little reality check",
    short: "The Reboot Clinic",
    tag: "Confidence is not the same as correctness.",
    x: 16,
    z: 4.5,
    y: 2.4,
    arrival: Object.freeze([16, 1.8, 7]),
    yaw: 0,
    icon: "+",
    color: "#c44c37",
  }),
  swap: Object.freeze({
    id: "swap",
    name: "What will you pass on?",
    short: "Brain Swap Bazaar",
    tag: "Your odd little talent belongs here.",
    x: -17,
    z: 20.5,
    y: 2.4,
    arrival: Object.freeze([-17, 1.8, 23.3]),
    yaw: 0,
    icon: "↔",
    color: "#538b71",
  }),
  news: Object.freeze({
    id: "news",
    name: "Fresh connections",
    short: "The Patch Notes Press",
    tag: "Choose a tool. Set a boundary. Check the result.",
    x: 17,
    z: 19,
    y: 2.35,
    arrival: Object.freeze([17, 1.8, 21.8]),
    yaw: 0,
    icon: "▤",
    color: "#307681",
  }),
  records: Object.freeze({
    id: "records",
    name: "Spin a skill",
    short: "The Crate Escape",
    tag: "The good stuff is worth passing on.",
    x: 11,
    z: 28.6,
    y: 2.1,
    arrival: Object.freeze([10.5, 1.8, 30.6]),
    yaw: 0,
    icon: "◉",
    color: "#e9ae45",
  }),
  stage: Object.freeze({
    id: "stage",
    name: "The No-Skip Stage",
    short: "Lakeside Stage",
    tag: "Stay a while. There is no rush.",
    x: 0,
    z: -28,
    y: 3,
    arrival: Object.freeze([0, 1.8, -25.5]),
    yaw: 0,
    icon: "♫",
    color: "#c44c37",
  }),
  poster: Object.freeze({
    id: "poster",
    name: "Festival notice",
    short: "The Notice Board",
    tag: "Please do not feed the algorithm. It already ate the weekend.",
    x: -25,
    z: 29,
    y: 2.3,
    arrival: Object.freeze([-23, 1.8, 31]),
    yaw: 0.5,
    icon: "▧",
    color: "#f5e4ba",
  }),
  dog: Object.freeze({
    id: "dog",
    name: "Make a four-legged friend",
    short: "The Goodest Festival Guest",
    tag: "No skills required. Just kindness.",
    x: -10,
    z: 27,
    y: 1.8,
    arrival: Object.freeze([-10, 1.8, 29.2]),
    yaw: 0,
    icon: "♡",
    color: "#e9ae45",
  }),
  kick: Object.freeze({
    id: "kick",
    name: "Give the world a little nudge",
    short: "Kick the globe",
    tag: "Three rings. One little act of courage.",
    x: 0,
    z: 27,
    y: 1.8,
    arrival: Object.freeze([0, 1.82, 30]),
    yaw: 0,
    icon: "◉",
    color: "#e9ae45",
  }),
  lake: Object.freeze({
    id: "lake",
    name: "A quieter kind of progress",
    short: "Lakeside Lookout",
    tag: "Take a breath. You belong here.",
    x: 23,
    z: -46,
    y: 2.2,
    arrival: Object.freeze([23, 1.8, -44]),
    yaw: 0,
    icon: "≈",
    color: "#307681",
  }),
  camp: Object.freeze({
    id: "camp",
    short: "Woodland Camp",
    name: "Stories around the fire",
    tag: "A warm fire. A slower conversation.",
    x: -51,
    z: -12,
    arrival: Object.freeze([-51, 1.82, -8]),
    yaw: 0,
    icon: "♨",
    color: "#a96942",
  }),
  garden: Object.freeze({
    id: "garden",
    short: "The Wild Garden",
    name: "A little closer to the world",
    tag: "Find the color hiding in plain sight.",
    x: 51,
    z: -15,
    arrival: Object.freeze([51, 1.82, -11]),
    yaw: 0,
    icon: "❀",
    color: "#80658d",
  }),
  pier: Object.freeze({
    id: "pier",
    short: "Lantern Pier",
    name: "Out over the water",
    tag: "Borrow a canoe. Follow the smoke across the lake.",
    x: 23,
    z: -65,
    arrival: Object.freeze([23, 1.82, -63]),
    yaw: 0,
    icon: "☷",
    color: "#4e8290",
  }),
});

/** Scenic tour stop order (booths then lakeside districts). */
export const TOUR_ROUTE = Object.freeze(["maker","ai","aid","swap","news","records","stage","lake","camp","garden","pier"]);

/** Destination ids shown on the festival map panel (order matters for SVG pins). */
export const MAP_PANEL_IDS = Object.freeze(["kick","maker","ai","aid","swap","news","records","stage","lake","dog","poster","camp","garden","pier"]);

/** @returns {string[]} */
export function destinationIds() {
  return Object.keys(DESTINATIONS);
}

/**
 * Mutable clone suitable for pushing onto the live \`spots\` array.
 * @param {string} id
 * @returns {Destination & {arrival: number[]}}
 */
export function cloneDestination(id) {
  const src = DESTINATIONS[id];
  if (!src) throw new Error(`Unknown map destination "${id}"`);
  return { ...src, arrival: src.arrival.slice() };
}

/** @returns {Array<Destination & {arrival: number[]}>} */
export function listDestinations() {
  return destinationIds().map(cloneDestination);
}

export default {
  DESTINATIONS,
  TOUR_ROUTE,
  MAP_PANEL_IDS,
  destinationIds,
  cloneDestination,
  listDestinations,
};
