# JavaScript content spec

Every JavaScript lesson ships three files. Read this whole document before writing.

## 1. Theory — `src/data/javascript/topics/<topic>.ts`

One file per topic, already scaffolded. Fill in `content` and `codeExample` for
every lesson. Do not change `slug`, `title` or `description` — the curriculum
manifest (`src/data/javascript/curriculum.ts`) is the source of truth for those.

### Voice: plain English, short sentences, everyday analogies

The audience is an automation tester, not a CS student. Rewrite dense notes into
plain language.

- Short sentences. One idea per sentence. No clause with three nested conditions.
- Explain jargon the moment you use it. `A closure is a function that remembers
  the variables that were in scope where it was created.`
- Use a concrete analogy for every abstract idea, then connect it to code.
  `A closure is like a backpack. Your function carries away the variables it
  needed, even after the function that made it has finished running.`
- Prefer "the browser" / "the page" / "your test" over "we" / "the runtime".
- No marketing voice, no "let's dive in", no exclamation marks.
- Keep the technical term. Explain it, never replace it. The learner has to be
  able to search for it later.

### `content` shape

A template literal, 2500-4000 characters. Rendered by the app as: a line that
is exactly `**Bold Heading**` becomes an `<h2>`, a line starting `- ` becomes a
bullet, everything else becomes a paragraph. Fenced code blocks are stripped,
so just write code as bare lines.

```
Opening paragraph in plain language: what this is and why it matters.

**What it means in plain words**
- Short bullet, no period needed
- Another bullet
- A third one

**How it works**
- Named mechanism, explained simply
- The step that trips people up
- The rule to remember

**Common mistakes**
- The wrong version people write
- The correct version
- A third trap

**Where you meet this in real work**
- Playwright / Cypress scenario
- A plain-JavaScript scenario
- An API-testing scenario
```

Use 4-7 `**Heading**` sections. Keep every line short enough to read on a phone.

### `codeExample` shape

A template literal, 600-1500 characters. This is pre-loaded into a runnable
editor on the lesson page, so it must actually run and print something on its
own. No browser-only APIs, no `import`, no `require`, no `await` at the top level.

```js
// Two or three short lines of comment explaining what this shows.
const nums = [1, 2, 3, 4, 5];

// ...working code using only the lesson's topic...

console.log(nums.filter((n) => n % 2 === 0));
```

## 2. Practice bank — `src/data/javascript/questions/<topic>/<lesson>.json`

30+ interview questions per lesson. These are the questions a technical
interviewer actually asks about this topic, ordered easiest to hardest.

JSON array, no wrapper object:

```json
[
  {
    "id": 1,
    "question": "Why does `typeof null` return 'object'?",
    "answer": "This is a bug from 1995 that was never fixed, because fixing it would break the web. The original implementation tagged every value with a type bit, and null shared a tag with objects.\n\ncode:\nconsole.log(typeof null);        // 'object'\nconsole.log(null === null);       // true\nconsole.log(Array.isArray(null));   // false\n\nreal example:\nA test data builder returns null for a missing field. `typeof field` says 'object' and your test tries field.name, which throws. Guard with `field === null` instead."
  }
]
```

Rules:

- `id` starts at 1 and increments by 1. No duplicates.
- `question` is the interview question as it would be asked out loud. At least
  20 characters. Vary the phrasing: "What happens when...", "Explain why...",
  "How would you fix...", "What is the difference between X and Y...".
- `answer` follows this exact three-block convention, separated by blank lines:
  1. Plain-language explanation of the correct behaviour, 1-3 sentences. Say
     what the answer IS, not just what it is called.
  2. A line that is exactly `code:` followed by a **runnable** snippet, 3-15
     lines. The snippet must not depend on anything defined earlier in the file,
     and must be copy-paste runnable in Node.
  3. A line that is exactly `real example:` followed by 1-2 sentences tying it to
     automation testing or a real codebase.
- No markdown fences anywhere. No backticks in the answer.
- At least 10 of the 30 must be genuinely hard: "why does this ordering happen",
  "rewrite this so it does not leak", "what breaks if you remove this line".
- Cover the whole topic. Do not write 30 variations of the first question.
- No duplicate question text within a file.

## 3. Coding bank — `src/data/javascript/coding/<topic>/<lesson>.json`

30+ pure coding challenges per lesson. A short task in, working code out.

```json
[
  {
    "id": 1,
    "question": "Write a function `groupBy` that takes an array of user objects and a key name, and returns an object where each key is that field's value and each value is the array of matching users.\n\nExample: groupBy(users, 'role')",
    "answer": "Use a plain object as a lookup. Read the dynamic key with a computed property name, create the bucket on first sight, then push.\n\ncode:\nfunction groupBy(items, key) {\n  return items.reduce((acc, item) => {\n    const bucket = String(item[key]);\n    (acc[bucket] ||= []).push(item);\n    return acc;\n  }, {});\n}\n\nconst users = [\n  { name: 'Ana', role: 'admin' },\n  { name: 'Bob', role: 'user' },\n  { name: 'Cid', role: 'admin' },\n];\nconsole.log(groupBy(users, 'role'));\n\noutput:\n{ admin: [ { name: 'Ana', role: 'admin' }, { name: 'Cid', role: 'admin' } ], user: [ { name: 'Bob', role: 'user' } ] }"
  }
]
```

Rules:

- `id` starts at 1 and increments by 1. No duplicates.
- `question` is an imperative coding task. State the function or variable name to
  build. Include the input and the expected result in one or two short lines. For
  anything non-obvious, give a concrete example of the input. At least 20 chars.
- `answer` uses this exact three-block convention:
  1. One or two plain sentences on the approach.
  2. `code:` then a **complete, runnable, self-contained** program. Declare every
     variable and function it uses. Define the sample input inside the snippet.
     4-20 lines. Must not reference anything from outside the snippet.
  3. `output:` then the **exact** `console.log` output, including the comments
     you put after each log call. If the answer has no `console.log`, add one.
- The stated `output:` must actually be what the code prints. Double-check string
  quotes, spacing and array formatting. This is the one thing a reviewer will
  spot immediately if it is wrong.
- Browser-only APIs (`document`, `window`, `localStorage`, `fetch`) are allowed
  only in `dom`, `storage-apis` and `testing` lessons. Everywhere else the code
  must run in plain Node.
- No markdown fences. No backticks in the answer.
- No duplicate question text within a file.

## 4. Verify before you finish

From the repo root:

```bash
node scripts/validate-curriculum.mjs --only=<topic-slug> --verbose
```

It must print `all checks passed` with zero failures for your topic. Run it and
fix anything it reports. If you cannot get a file to 30 valid questions, write
the rest rather than leaving it short.

## Never

- Never edit `src/data/javascript/curriculum.ts`.
- Never edit another topic's files. You own only your own topic's three files.
- Never touch anything under `src/data/python/`, or the `python` key of any map.
- Never shorten an existing lesson's `slug` or `title`.
