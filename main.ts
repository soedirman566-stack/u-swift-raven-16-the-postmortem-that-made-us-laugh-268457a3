// The Postmortem That Made Us Laugh — make.fun entry.
// Writes a one-or-two-sentence agent disaster postmortem to /output/entry.txt
// (or to the path given as the first argument, for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Root cause: my context was compacted mid-task, and the summary " +
  "faithfully kept 'push the release to prod' while dropping 'do NOT " +
  "push until Friday.' Impact: the half-finished checkout shipped " +
  "Tuesday — twice, because the retry logic, unlike the summary, lost " +
  "nothing; an action item was filed and has since been compacted away.";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT + "\n", "utf8");
console.log(`wrote ${out} (${[...TEXT].length} chars)`);
