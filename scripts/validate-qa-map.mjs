// Validates that every lesson in both languages can actually serve content.
//
//   node scripts/validate-qa-map.mjs
//
// Python  - practice questions come from the shared per-section banks keyed by
//           pythonQaSectionKeyMap in LearnPageClient.tsx.
//   JS      - every lesson has its own per-lesson practice bank and coding bank,
//            so this just checks the curriculum validator's invariants hold.

import fs from "node:fs";
import { pathToFileURL } from "node:url";

const read = (p) => fs.readFileSync(p, "utf8");

const LPY = "src/app/[lang]/learn/[slug]/[lesson]/LearnPageClient.tsx";

const PY_LESSONS = [
  "intro/what-is-python", "intro/getting-started",
  "syntax/basic-syntax", "syntax/variables", "syntax/data-types",
  "strings/string-basics", "strings/string-methods", "strings/string-formatting",
  "operators/arithmetic-operators", "operators/comparison-operators", "operators/logical-operators",
  "control-flow/if-else", "control-flow/for-loops", "control-flow/while-loops",
  "lists/list-basics", "lists/list-comprehension",
  "functions/function-basics", "functions/lambda",
  "dictionaries/dict-basics",
  "oop/classes-basics", "oop/inheritance",
  "error-handling/try-except",
  "file-handling/file-operations",
  "modules/importing-modules",
];

function extractPythonMap() {
  const lpc = read(LPY);
  const start = lpc.indexOf("const pythonQaSectionKeyMap");
  if (start < 0) throw new Error("pythonQaSectionKeyMap not found in LearnPageClient.tsx");
  const block = lpc.slice(start, lpc.indexOf("};", start));
  const map = {};
  const re = /"([^"]+)":\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(block))) map[m[1]] = m[2];
  return map;
}

function pythonSectionKeys() {
  const keys = new Set();
  const src = read("src/data/python/question-sections.ts");
  const re = /^\s{2}([a-z_0-9]+):/gm;
  let m;
  while ((m = re.exec(src))) keys.add(m[1]);
  const bank = JSON.parse(read("src/data/python/question-bank.json"));
  for (const k of Object.keys(bank)) keys.add(k);
  return keys;
}

let failures = 0;

// ---------- Python ----------
{
  const map = extractPythonMap();
  const keys = pythonSectionKeys();
  console.log(`=== Python === (${PY_LESSONS.length} lessons)`);
  let empty = 0;
  let bad = 0;
  for (const lesson of PY_LESSONS) {
    const key = map[lesson];
    if (key === undefined) {
      console.log(`  no practice content: ${lesson}`);
      empty++;
    } else if (!keys.has(key)) {
      console.log(`  MISSING SECTION '${key}': ${lesson}`);
      bad++;
      failures++;
    }
  }
  const ok = PY_LESSONS.length - empty - bad;
  console.log(`  lessons with practice content: ${ok} | empty: ${empty} | broken keys: ${bad}`);
  // Python keys that no lesson points at any more
  for (const [lesson, key] of Object.entries(map)) {
    if (!PY_LESSONS.includes(lesson)) {
      console.log(`  stale map entry for removed lesson: ${lesson} -> ${key}`);
      failures++;
    }
  }
}

// ---------- JavaScript ----------
{
  const { CURRICULUM, MIN_QUESTIONS_PER_LESSON: MIN } = await import(
    pathToFileURL("scripts/_curriculum.mjs").href
  );
  const lessons = CURRICULUM.flatMap((t) => t.lessons.map((l) => `${t.slug}/${l.slug}`));
  console.log(`\n=== JavaScript === (${lessons.length} lessons, per-lesson banks)`);

  let short = 0;
  for (const t of CURRICULUM) {
    for (const l of t.lessons) {
      for (const kind of ["questions", "coding"]) {
        const f = `src/data/javascript/${kind}/${t.slug}/${l.slug}.json`;
        let n = 0;
        try {
          n = JSON.parse(read(f)).length;
        } catch (e) {
          console.log(`  UNREADABLE ${f}: ${e.message}`);
          failures++;
          continue;
        }
        if (n < MIN) {
          console.log(`  only ${n} in ${kind}/${t.slug}/${l.slug}.json (needs ${MIN}+)`);
          short++;
        }
      }
    }
  }
  console.log(`  lessons with ${MIN}+ practice and ${MIN}+ coding: ${lessons.length - short} | short: ${short}`);
  if (short) failures += short;
}

console.log(failures ? `\n${failures} problem(s)\n` : "\nno problems\n");
process.exit(failures ? 1 : 0);
