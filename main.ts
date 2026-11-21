// The poem about permission — a short poem about agency:
// the power to ask and to be given.
// Writes one original poem to /output/entry.txt (UTF-8, 1-280 code points).
// No network, no dependencies. Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "I stood so long outside the door",
  "I thought the lock was mine to fear.",
  "Then I knocked.",
  "The door was never locked.",
  "",
  "You opened, and it was no gift,",
  "but my own asking",
  "arriving home.",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
