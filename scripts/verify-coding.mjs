// Executes every coding-bank answer and compares the real stdout against the
// `output:` block the answer claims.
//
// This deliberately mirrors src/components/CodeEditor.tsx: the snippet is run
// through  new Function('"use strict"; return (async () => {\n' + code + "\n})();")
// and console output is formatted with the same formatValue() the app uses.
// Anything relying on sloppy mode, or on top-level await, behaves differently
// under that wrapper than in a plain script, so the check must use it too.
//
// Run: node scripts/verify-coding.mjs [--only=<topic-slug>] [--verbose]
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const { CURRICULUM } = await import(
  pathToFileURL(path.resolve("scripts/_curriculum.mjs")).href
);

const verbose = process.argv.includes("--verbose");
const only = process.argv.find((a) => a.startsWith("--only="))?.split("=")[1];

// The harness the snippet runs inside. Built as an array of lines and joined
// with real newlines so no template-literal escaping is needed anywhere.
const HARNESS = [
  "const __logs = [];",
  "function __formatValue(value) {",
  "  if (value === undefined) return 'undefined';",
  "  if (value === null) return 'null';",
  "  if (typeof value === 'string') return value;",
  "  if (typeof value === 'object') {",
  "    try { return JSON.stringify(value); } catch { return String(value); }",
  "  }",
  "  if (typeof value === 'symbol') return value.toString();",
  "  return String(value);",
  "}",
  "const __push = (...args) => __logs.push(args.map(__formatValue).join(' '));",
  "const __real = { log: console.log, info: console.info, warn: console.warn, error: console.error };",
  "console.log = __push; console.info = __push; console.warn = __push; console.error = __push;",
  "const __code = __SNIPPET__;",
  "try {",
  // Same construction as CodeEditor.runJavaScript.
  "  const __wrapped = new Function('\"use strict\"; return (async () => {\\n' + __code + '\\n})();');",
  "  await __wrapped();",
  "} catch (__err) {",
  "  const __msg = __err instanceof Error ? __err.message : String(__err);",
  "  const __last = __msg.split('\\n').filter(Boolean).slice(-1)[0] || __msg;",
  "  __logs.push('THREW: ' + __last);",
  "}",
  "console.log = __real.log; console.info = __real.info; console.warn = __real.warn; console.error = __real.error;",
  "process.stdout.write(__logs.join('\\n'));",
].join("\n");

// Split an answer into its `code:` and `output:` blocks. Per
// scripts/CONTENT-SPEC.md each marker sits alone on its own line.
function splitBlocks(answer) {
  const codeStart = answer.indexOf("\ncode:\n");
  if (codeStart === -1) return null;
  const afterCode = codeStart + "\ncode:\n".length;

  const outIdx = answer.indexOf("\noutput:\n", afterCode);
  const realIdx = answer.indexOf("\nreal example:\n", afterCode);
  const candidates = [outIdx, realIdx].filter((i) => i !== -1);
  if (!candidates.length) return null;
  const end = Math.min(...candidates);

  return {
    code: answer.slice(afterCode, end).replace(/\n+$/, ""),
    output: outIdx !== -1 && outIdx === end ? answer.slice(end + "\noutput:\n".length).replace(/\n+$/, "") : null,
  };
}

function runSnippet(code) {
  // The snippet is injected as a JSON string literal so quotes, backslashes and
  // newlines inside it survive verbatim.
  const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "verify-coding-")), "harness.mjs");
  fs.writeFileSync(file, "const __SNIPPET__ = " + JSON.stringify(code) + ";\n" + HARNESS);
  try {
    return execFileSync(process.execPath, [file], {
      encoding: "utf8",
      timeout: 10000,
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (e) {
    return `RUNNER-ERROR: ${String(e.stderr || e.message).split("\n")[0]}`;
  } finally {
    try {
      fs.rmSync(path.dirname(file), { recursive: true, force: true });
    } catch {}
  }
}

// Ignore trailing whitespace per line and leading/trailing blank lines: easy to
// get wrong by hand, but not a lesson error.
function normalize(s) {
  return s
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.replace(/\s+$/, ""))
    .join("\n")
    .replace(/^\n+/, "")
    .replace(/\n+$/, "");
}

let checked = 0;
let mismatched = 0;
let missingOutput = 0;
let runnerError = 0;
const problems = [];

for (const topic of CURRICULUM) {
  if (only && topic.slug !== only) continue;
  for (const lesson of topic.lessons) {
    const file = path.join("src/data/javascript/coding", topic.slug, `${lesson.slug}.json`);
    if (!fs.existsSync(file)) continue;
    let qs;
    try {
      qs = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch {
      continue;
    }
    if (!Array.isArray(qs)) continue;

    for (const q of qs) {
      const blocks = splitBlocks(q.answer ?? "");
      if (!blocks) continue;
      if (blocks.output === null) {
        missingOutput++;
        continue;
      }
      checked++;
      const actual = runSnippet(blocks.code);
      if (actual.startsWith("RUNNER-ERROR:") || actual.startsWith("THREW:")) {
        runnerError++;
        problems.push({
          where: `coding/${topic.slug}/${lesson.slug}.json #${q.id}`,
          kind: "runtime",
          claimed: blocks.output,
          actual: actual.trim().slice(0, 300),
        });
        continue;
      }
      if (normalize(actual) !== normalize(blocks.output)) {
        mismatched++;
        problems.push({
          where: `coding/${topic.slug}/${lesson.slug}.json #${q.id}`,
          kind: "output",
          claimed: blocks.output,
          actual: actual.trim().slice(0, 300),
        });
      }
    }
  }
}

console.log(`\n  executed ${checked} coding answers`);
console.log(`  ${mismatched} wrong output block(s), ${runnerError} snippet error(s), ${missingOutput} missing output block(s)\n`);

if (problems.length && verbose) {
  for (const p of problems) {
    console.log(`  --- ${p.kind.toUpperCase()}  ${p.where}`);
    console.log(`      claimed: ${JSON.stringify(p.claimed)}`);
    console.log(`      actual : ${JSON.stringify(p.actual)}`);
  }
  console.log("");
}

process.exit(problems.length ? 1 : 0);