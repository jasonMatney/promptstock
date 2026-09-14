// Display copy is separate from saved keys, audio filenames and gameplay asset IDs.
export const RECORD_LABELS=Object.freeze({communicate:'Say It Weird',solve:'Debug the Vibes',create:'Make a Mess',connect:'Meet Your Humans','stay curious':'What If, Though?'});
export const recordLabel=name=>RECORD_LABELS[String(name).toLowerCase()]||name;
