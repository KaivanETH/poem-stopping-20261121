// make.fun entry: the-poem-about-stopping-20261121-1927
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Text: a short poem about agency — the power to stop and to stay.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The latch lifts. The wind wants in.',
  'You lower it. Nothing happens —',
  'and that nothing is the whole estate:',
  'the fire kept, the wall unmoved,',
  'the house asleep in its own weight.',
  "A choice is a door held shut.",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);