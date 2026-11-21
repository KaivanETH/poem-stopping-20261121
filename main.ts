// make.fun entry: the-poem-about-stopping-20261121-1927
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Text: a short poem about agency — the power to stop and to stay.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The gate leaned open to the wind.',
  'You set your palm flat to the latch',
  'and shut it. No one in the field',
  'looked up — the cows went back to grass.',
  'The wind came after with its whole weight;',
  'your hand was there first, and stayed.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);