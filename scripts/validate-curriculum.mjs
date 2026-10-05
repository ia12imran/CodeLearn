// Validates the JavaScript curriculum: theory files, per-lesson practice banks
// (30+ interview Q&A each) and per-lesson coding banks (30+ coding Q&A each).
//
// Run: node scripts/validate-curriculum.mjs [--verbose]
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const { CURRICULUM, MIN_QUESTIONS_PER_LESSON: MIN } = await import(
  pathToFileURL(path.resolve("scripts/_curriculum.mjs")).href
);

const verbose = process.argv.includes("--verbose");
const only = process.argv.find((a) => a.startsWith("--only="))?.split("=")[1];

let failures = 0;
let warnings = 0;
const fail = (m) => {
  failures++;
  console.log(`  FAIL  ${m}`);
};
const warn = (m) => {
  warnings++;
  if (verbose) console.log(`  warn  ${m}`);
};
const detail = (m) => {
  if (verbose) console.log(`        ${m}`);
};

function checkBank(kind, topic, lesson) {
  const file = path.join("src/data/javascript", kind, topic.slug, `${lesson.slug}.json`);
  const key = `${topic.slug}/${lesson.slug}`;

  if (!fs.existsSync(file)) {
    fail(`${kind}/${topic.slug}/${lesson.slug}.json is missing (${key})`);
    return 0;
  }
  let qs;
  try {
    qs = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    fail(`${kind}/${topic.slug}/${lesson.slug}.json is not valid JSON: ${e.message}`);
    return 0;
  }
  if (!Array.isArray(qs)) {
    fail(`${kind}/${topic.slug}/${lesson.slug}.json must be a JSON array`);
    return 0;
  }
  if (qs.length < MIN) fail(`${kind}/${topic.slug}/${lesson.slug}.json has ${qs.length} questions, needs ${MIN}+`);

  const ids = new Set();
  const seen = new Set();
  qs.forEach((q, i) => {
    const at = `${kind}/${topic.slug}/${lesson.slug}.json #${i + 1}`;
    if (typeof q?.id !== "number") fail(`${at}: id must be a number`);
    else if (ids.has(q.id)) fail(`${at}: duplicate id ${q.id}`);
    else ids.add(q.id);

    const qt = (q?.question ?? "").trim();
    if (qt.length < 20) fail(`${at}: question is too short (${qt.length} chars)`);
    if (seen.has(qt.toLowerCase())) fail(`${at}: duplicate question text`);
    seen.add(qt.toLowerCase());

    const ans = q?.answer ?? "";
    if (typeof ans !== "string" || ans.trim().length < 60) fail(`${at}: answer is too short`);
    if (!ans.includes("\ncode:")) fail(`${at}: answer needs a "\\ncode:" block`);
    if (kind === "coding" && !/\noutput:/.test(ans)) fail(`${at}: coding answer needs an "output:" block`);
    if (ans.includes("```")) fail(`${at}: answer must not use markdown fences`);
    // an empty code block means the answer was never filled in
    if (/\ncode:\s*\n\s*\n/.test(ans)) fail(`${at}: code block is empty`);
  });
  return qs.length;
}

function checkTheory(topic) {
  const file = path.join("src/data/javascript/topics", `${topic.slug}.ts`);
  if (!fs.existsSync(file)) {
    fail(`topics/${topic.slug}.ts is missing`);
    return 0;
  }
  const src = fs.readFileSync(file, "utf8");
  if (!src.includes("export const topic: Topic")) fail(`topics/${topic.slug}.ts must export "topic"`);
  for (const lesson of topic.lessons) {
    if (!src.includes(`slug: "${lesson.slug}"`)) fail(`topics/${topic.slug}.ts is missing lesson ${lesson.slug}`);
  }
  const empties = (src.match(/content: ``/g) || []).length + (src.match(/codeExample: ``/g) || []).length;
  if (empties) fail(`topics/${topic.slug}.ts has ${empties} empty content/codeExample field(s)`);
  return empties;
}

console.log("=== JavaScript curriculum ===\n");
let totalLessons = 0;
let totalPractice = 0;
let totalCoding = 0;

for (const topic of CURRICULUM) {
  if (only && topic.slug !== only) continue;
  totalLessons += topic.lessons.length;

  let p = 0;
  let c = 0;
  let pOk = true;
  let cOk = true;
  for (const lesson of topic.lessons) {
    const pn = checkBank("questions", topic, lesson);
    const cn = checkBank("coding", topic, lesson);
    p += pn;
    c += cn;
    if (pn < MIN) pOk = false;
    if (cn < MIN) cOk = false;
    if (verbose) detail(`${topic.slug}/${lesson.slug}: practice=${pn} coding=${cn}`);
  }
  const empties = checkTheory(topic);
  totalPractice += p;
  totalCoding += c;

  console.log(
    `  ${topic.slug.padEnd(22)} ${String(topic.lessons.length).padStart(2)} lessons | practice ${String(p).padStart(4)} ${pOk ? "OK " : "LOW"} | coding ${String(c).padStart(4)} ${cOk ? "OK " : "LOW"}${empties ? ` | theory ${empties} empty` : ""}`
  );
}

console.log(
  `\n  totals: ${totalLessons} lessons, ${totalPractice} practice Q, ${totalCoding} coding Q (minimum ${totalLessons * MIN} each)`
);
console.log(
  failures
    ? `  ${failures} failure(s), ${warnings} warning(s)\n`
    : `  all checks passed${warnings ? `, ${warnings} warning(s)` : ""}\n`
);
process.exit(failures ? 1 : 0);
