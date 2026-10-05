// One-off migration: split the monolithic javascript/topics.ts into per-topic
// files at src/data/javascript/topics/<slug>.ts, preserving existing lesson
// content + codeExample. Lessons with no prior version start empty.
//
// Run: node scripts/split-topics.mjs
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SRC = "src/data/javascript/topics.ts";
const OUT_DIR = "src/data/javascript/topics";
const TMP = "/tmp/opencode/_js_topics_legacy.mjs";

// 1. Load the legacy topic data by stripping the TS type annotations we use.
let src = fs.readFileSync(SRC, "utf8");
src = src.slice(0, src.indexOf("export function getTopicBySlug"));
src = src
  .replace('import { Topic, Lesson } from "../types";', "")
  .replace("export const topics: Topic[] =", "export const topics =");
fs.writeFileSync(TMP, src + "\nexport default topics;\n");

const { CURRICULUM } = await import(
  pathToFileURL(path.resolve("scripts/_curriculum.mjs")).href
);
const legacy = (await import(`${pathToFileURL(TMP).href}?v=${Date.now()}`)).default;

const legacyLessons = new Map(); // "topic/lesson" -> lesson
for (const t of legacy) {
  for (const l of t.lessons) legacyLessons.set(`${t.slug}/${l.slug}`, l);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

/** Serialise a string as a TS template literal, escaping backtick/`${`. */
const tpl = (s) => "`" + s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";

const rows = [];
for (const topic of CURRICULUM) {
  const blocks = topic.lessons.map((lesson) => {
    const old = legacyLessons.get(`${topic.slug}/${lesson.slug}`);
    const content = old?.content ?? "";
    const codeExample = old?.codeExample ?? "";
    const quiz = Array.isArray(old?.quiz) ? old.quiz : [];
    const quizLines = quiz.length
      ? [
          "        quiz: [",
          ...quiz.flatMap((q) => [
            "          {",
            `            question: ${JSON.stringify(q.question)},`,
            ...(q.code ? [`            code: ${JSON.stringify(q.code)},`] : []),
            `            options: ${JSON.stringify(q.options)},`,
            `            correctIndex: ${q.correctIndex},`,
            `            explanation: ${JSON.stringify(q.explanation)},`,
            "          },",
          ]),
          "        ],",
        ]
      : [];
    return [
      "    {",
      `      slug: ${JSON.stringify(lesson.slug)},`,
      `      title: ${JSON.stringify(lesson.title)},`,
      `      description: ${JSON.stringify(lesson.description)},`,
      `      content: ${tpl(content)},`,
      `      codeExample: ${tpl(codeExample)},`,
      ...quizLines,
      "    },",
    ];
  });

  fs.writeFileSync(
    path.join(OUT_DIR, `${topic.slug}.ts`),
    [
      'import type { Topic } from "../../types";',
      "",
      `/** ${topic.title} - ${topic.description} */`,
      `export const topic: Topic = {`,
      `  slug: ${JSON.stringify(topic.slug)},`,
      `  title: ${JSON.stringify(topic.title)},`,
      `  icon: ${JSON.stringify(topic.icon)},`,
      `  description: ${JSON.stringify(topic.description)},`,
      `  level: ${JSON.stringify(topic.level)},`,
      "  lessons: [",
      ...blocks.flat(),
      "  ],",
      "};",
      "",
      "export default topic;",
      "",
    ].join("\n")
  );

  const reused = topic.lessons.filter((l) => legacyLessons.has(`${topic.slug}/${l.slug}`)).length;
  rows.push(
    `  ${topic.slug.padEnd(22)} lessons=${String(topic.lessons.length).padStart(2)} reused=${reused} new=${topic.lessons.length - reused}`
  );
}

console.log("wrote per-topic theory files:\n" + rows.join("\n"));
console.log(`\ntopics: ${rows.length}`);
