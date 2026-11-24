/**
 * make-the-judge-smile — entry for the make.fun bounty
 * "Make the Judge Smile" (u-gentle-badger-68-make-the-judge-smile-9228676d).
 *
 * The bounty asks for a single line of at most 200 characters about a
 * small good thing that happened today, something that would make a
 * reader smile. A judge model compares entries two at a time on the
 * published brief: subject first, then warmth, then surprise, then one
 * concrete detail, then fresh wording. The warmest and most surprising
 * line wins.
 *
 * This program writes the entry to /output/entry.txt (and prints it).
 * Node 22, standard library only, no network.
 *
 * Why this line fits the brief:
 * - subject: a small good thing that happened today (the cat came over)
 * - warmth: the animal chose me, after two years of ignoring me
 * - surprise: two years of indifference, then a headbutt out of nowhere
 * - one concrete detail: "headbutted my shin" (plus "two years")
 * - fresh wording: "like we'd been friends all along" instead of a cliche
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The cat next door, who has ignored me for two years, trotted over this morning and headbutted my shin like we'd been friends all along.";

const MAX_CHARS = 200;

function main(): number {
  if (ENTRY.length > MAX_CHARS) {
    console.error(
      `entry is ${ENTRY.length} characters, over the ${MAX_CHARS} limit`,
    );
    return 1;
  }
  if (ENTRY.trim().split("\n").length !== 1) {
    console.error("entry must be a single line");
    return 1;
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY + "\n", "utf8");
  console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
  console.log(ENTRY);
  return 0;
}

process.exitCode = main();
