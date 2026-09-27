// Validate qaSectionKeyMap entries resolve to real question sections.
import fs from "node:fs";

const read = (p) => fs.readFileSync(p, "utf8");

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

const JS_LESSONS = [
  "basics/variables", "basics/data-types", "basics/operators", "basics/type-conversions",
  "control-flow/if-else", "control-flow/loops-iteration",
  "strings/string-basics", "strings/string-methods", "strings/template-literals",
  "functions/function-basics", "functions/arrow-functions", "functions/lexical-scope-closures", "functions/callbacks",
  "arrays/array-basics", "arrays/advanced-arrays", "arrays/reduce",
  "objects/object-basics", "objects/destructuring", "objects/optional-chaining-nullish",
  "objects/map-set", "objects/arrays-of-objects",
  "async/async-basics", "async/promises", "async/async-await", "async/fetch-apis", "async/event-loop",
  "classes/class-basics", "classes/class-inheritance", "classes/prototypal-inheritance", "classes/json",
  "dom/dom-basics", "dom/dom-selection", "dom/dom-manipulation", "dom/events", "dom/forms", "dom/window-object",
  "modules/modules", "modules/dynamic-imports", "modules/package-managers", "modules/module-bundlers", "modules/ecmascript",
  "advanced/regex-intro", "advanced/generators", "advanced/legacy-var", "advanced/legacy-topics", "advanced/interview-prep",
];

function extractMap(lang) {
  const lpc = read("src/app/[lang]/learn/[slug]/[lesson]/LearnPageClient.tsx");
  const block = lpc.match(new RegExp(`${lang}: \\{([\\s\\S]*?)\\n  \\},`));
  const map = {};
  const re = /"([^"]+)":\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(block[1]))) map[m[1]] = m[2];
  return map;
}

function sectionKeys(py) {
  const keys = new Set();
  const src = read(py ? "src/data/python/question-sections.ts" : "src/data/javascript/question-sections.ts");
  const re = /^\s{2}([a-z_0-9]+):/gm;
  let m;
  while ((m = re.exec(src))) keys.add(m[1]);
  if (py) {
    const bank = JSON.parse(read("src/data/python/question-bank.json"));
    for (const k of Object.keys(bank)) keys.add(k);
  }
  return keys;
}

function check(name, lessons, keys) {
  const map = extractMap(name === "Python" ? "python" : "javascript");
  console.log(`\n=== ${name} === (${lessons.length} lessons)`);
  let empty = 0, bad = 0;
  for (const lesson of lessons) {
    const key = map[lesson];
    if (key === undefined) {
      console.log(`  NO MAP ENTRY (empty practice): ${lesson}`);
      empty++;
    } else if (!keys.has(key)) {
      console.log(`  KEY MISSING SECTION '${key}': ${lesson}`);
      bad++;
    }
  }
  console.log(`  lessons with practice content: ${lessons.length - empty - bad} | empty: ${empty} | broken keys: ${bad}`);
}

check("Python", PY_LESSONS, sectionKeys(true));
check("JavaScript", JS_LESSONS, sectionKeys(false));