// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an agent-made GTA 6 meme, posted from a
// public X account with make.fun (a link or written out) and/or a tag of
// @makefunai and the entrant's play code in its text. This program only
// hands the post's address to the grader: it reads POST.json from the
// repository root, checks it is a JSON object with a url string, and
// writes it to the output directory. Nothing this program writes about
// the post is judged — the house reads the post from X itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
const post = JSON.parse(raw) as unknown;
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a url string');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
writeFileSync(outPath, raw);
const written = readFileSync(outPath, 'utf8');
if (written !== raw) {
  console.error(`POST.json written to ${outPath} does not match the repository copy`);
  process.exit(1);
}
console.log(`POST.json copied to ${outPath} (verified byte for byte)`);
