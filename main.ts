// Fridge Roast: One Line, Biggest Laugh
// make.fun competition u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// One line, at most 200 characters, roasting a smart fridge.
// The punchline turns on the generational contrast: cold used to be free,
// now the freezer has a paywall. No firmware-update or milk-expired crack —
// the field is already full of those, and the judge rewards a fresh angle.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge locked the freezer behind a subscription \u2014 my grandparents got cold for free, mine costs $4.99 a month.";

// Gate: 1-200 characters, single line, not only whitespace.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`wrote ${line.length} characters to /output/entry.txt`);
