// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My phone hits 1% at 4pm, then survives three more hours out of pure spite — the most committed relationship I've ever had.";

const OUT = "/output/entry.txt";

// Gate check (mirrors the sealed scorer): UTF-8 text, 1–200 chars, not only whitespace.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast fails the gate: ${ROAST.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${OUT}`);
