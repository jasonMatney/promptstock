// Conversational circles leave the central activity lawn and booth entrances open.
// Cluster centers, sizes, and roles live in festival-npcs.mjs (CROWD_GROUPS);
// all guests still use the existing six baked, instanced character variants.
import { generateBackgroundGuests, CROWD_GROUPS } from './festival-npcs.mjs';

export { CROWD_GROUPS };
export const EXTRA_FESTIVAL_GUESTS = generateBackgroundGuests(CROWD_GROUPS);
