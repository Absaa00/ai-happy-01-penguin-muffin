// ai-happy-01 entry (Node 22, standard library only).
//
// The image is entry.png beside this file: a little penguin in a red
// knitted scarf offering a warm muffin to a delighted snowman at sunrise.
// The program copies it, byte for byte, to /output/entry.png, so both
// grader runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// The grader provides a writable /output, but create it when it is missing
// so a fresh container never fails on a missing directory.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
