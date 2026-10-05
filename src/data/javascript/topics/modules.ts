import type { Topic } from "../../types";

/** Modules & Tooling - Splitting code into files and shipping it to production. */
export const topic: Topic = {
  slug: "modules",
  title: "Modules & Tooling",
  icon: "package",
  description: "Splitting code into files and shipping it to production.",
  level: "intermediate",
  lessons: [
    {
      slug: "modules",
      title: "ES Modules",
      description: "import, export, default, and named exports.",
      content: `A module is just a JavaScript file that says what it gives away and what it needs. One file per idea: page objects in one file, test data in another, helpers in a third. Nothing else in the project has to know how any of them work.

**Each file is its own island**
- A file loaded with import or export is a module, and every module has its own top-level scope.
- Think of it as a room with a locked door. Only what you export is visible outside.
- Top-level const, let, function and class names are private. Two files can both define login and neither breaks the other.
- Unlike a plain script, a module adds nothing to the global object, so nothing leaks.
- A module runs at most once per page load, however many files import it. The second import hands back the same finished values.

**Named exports and the one default export**
- export const HOST = "https://api.test.com" exports a value. export function login(user) exports a function. Both are named exports.
- export default login exports a single thing as the default. A file may have at most one default.
- import { HOST, login } from "./api.js" takes named exports. The braces say "these exact names".
- import LoginPage from "./pages/login.js" takes the default. No braces, and you pick the local name.
- Use named exports when a file has more than one thing worth sharing. They rename themselves when the original name changes.
- Use a default when there is one obvious thing: one component, one class, one function.
- import * as api from "./api.js" grabs the whole module as an object, so you call api.login().

**Re-exporting and renaming**
- export { login } from "./api.js" passes a name straight through without importing it first. That is a re-export.
- export * from "./api.js" passes through every named export. The default one is left out.
- A barrel file collects re-exports so callers can import from one place. Convenient, but it hides where things really live.
- Aliasing renames on the way in: import { login as signIn } from "./api.js".
- You can rename on the way out too: export { login as signIn } from "./api.js".

**Live bindings, and code that runs once**
- A named export is a live binding. It is a window onto the variable, not a photo of it.
- So if a module does export let count = 0 and later count = 5, any importer reading count after that line sees 5.
- A default export is a snapshot, because it copies the value once at the export.
- Imported names are read-only in the importer. To reset a shared counter, export a reset function instead.
- Import state lives in one place, and every importer shares it.

**Errors, and traps that stay silent**
- Asking for a name a module does not export is a hard error, caught before your code runs. Reading a missing property off an object would just give undefined.
- That strictness is the point. The tool that builds your code checks the shapes for you.
- A circular import, where A imports B and B imports A, gives you undefined instead of an error, because B is still half-built when A reads it.
- Break the cycle by moving the shared piece into a third file that both sides import.
- import must sit at the top level. You cannot hide one inside an if block.

**CommonJS, the older system**
- CommonJS is the older Node system: const api = require("./api") and module.exports = { ... }.
- CommonJS hands back an object you can change at any moment. ES modules publish live bindings a tool can analyse.
- Importing a name CommonJS lacks gives undefined, with no error at all. That is why the two mix badly.
- Node treats .mjs as ES modules and .cjs as CommonJS, so one project can hold both.

**Tree shaking**
- Tree shaking means the build deletes code nobody imported. It is how a bundle loses the 200 KB of a chart library you never used.
- It only works with static ES module imports, because the tool has to know the names before anything runs.
- A dynamic import hides the path, so the tool must keep the whole module. The next lesson covers that.`,
      codeExample: `// A stand-in for import/export, so you can watch the rules work.
// --- a.js ---   export const HOST = "..."; export let retries = 3;
const a = {
  HOST: "https://api.test.internal",
  retries: 3,
  default: { name: "ApiClient" },
};

// --- b.js ---   import { retries } from "./a.js";
const b = { load: () => "loaded with retries=" + a.retries };

// registry = the cache Node keeps, so each file runs once
const cache = new Map();
let runs = 0;
function load(path) {
  if (!cache.has(path)) {
    runs++;
    cache.set(path, path === "./a.js" ? a : b);
  }
  return cache.get(path);
}

// This is what import { HOST, retries, default as ApiClient } gives you.
const { HOST, retries, default: ApiClient } = load("./a.js");
console.log("named export:", HOST, "retries:", retries);
console.log("default export:", ApiClient.name);
console.log("other file sees:", b.load());

// Live binding: the exporter reassigns, the importer follows.
a.retries = 5;
console.log("after the exporter reassigns:", b.load());
console.log("3 imports later, file ran once:", runs === 1 && load("./a.js") === a);

// A cycle: each file needs the other, so one side sees a half-built object.
const cycle = { api: {}, client: { api: undefined } };
cycle.client.api = cycle.api;
console.log("cycle half-built, so api.name is:", cycle.client.api.name);

// Tree shaking: the build drops exports nobody imported.
console.log("kept HOST, retries, dropped default, brandColor");`,
      quiz: [
        {
          question: "When is a module's code executed?",
          options: ["On demand","Once, when the module is first imported","Never","In strict mode only"],
          correctIndex: 1,
          explanation: "ES modules are evaluated once on first import, then cached.",
        },
        {
          question: "How do you import a default export?",
          options: ["import * as x","import x from './file.js'","import { x }","require(default)"],
          correctIndex: 1,
          explanation: "Default imports use the bare import name without braces.",
        },
      ],
    },
    {
      slug: "dynamic-imports",
      title: "Dynamic Imports",
      description: "Loading code on demand with import().",
      content: `A static import starts downloading before your first line runs. A dynamic import asks for the code later, when a promise settles. That single difference changes when the network request happens.

**What import() actually does**
- import("./chart.js") is a function call, so it can sit inside an if block, a loop, or a click handler.
- It returns a Promise. You have to await it or attach a .then to it.
- The path can be a variable. import(somePath) is legal. A static import with a built-up string is not.
- The browser only fetches the file when the call runs. That is the whole point.
- After the first load the module is cached by path, so a second call resolves instantly.

**When you want lazy loading**
- The code is heavy and only one screen needs it: a chart library, a PDF viewer, a spreadsheet grid.
- The feature sits behind a flag, so most sessions never touch that code at all.
- The cost only makes sense after someone asks, like fetching a PDF when they click Download.
- You want to pick an implementation at run time, for example a mock adapter during a test run.

**The result is a module object**
- Awaiting the import gives you a namespace object holding every export of that file.
- The default export sits on .default, so you call mod.default.draw(). Named exports are directly on the object.
- That is the same shape import * as ns gives you, so the two styles read the same afterwards.

**Loading it on interaction**
- Put the import in the click handler, await it, then run the code that needs it.
- The first click waits for the download. Show a spinner, or accept the delay if the file is small.
- If the panel is opened often, preload it on hover or on focus so the wait is already over.

**A small loader with a cache**
- The module system already caches by path. Your own cache stops you repeating work that is still in flight.
- Keep a Map of path to promise, return the same promise on the next call, and nothing downloads twice.

**When the load fails**
- A missing file rejects the promise. It does not throw from somewhere inside your handler.
- A try and catch around the await turns that into a normal error you can log or report.
- This is why a dynamic import is the safer choice when a file might be absent.

**Top-level await and preloading**
- await works at the top level of a module. It does not work in a plain script, because nothing is there to wait.
- To preload, fire the import early and keep the promise: const ready = import("./chart.js"). Later, await ready.
- A link tag with rel="modulepreload" tells the browser a file will be needed soon.
- The real payoff is code splitting. A bundler puts each dynamic import into its own chunk file, and that chunk only arrives when the code runs.`,
      codeExample: `// A stand-in for import("./chart.js"), which returns a Promise.
const files = {
  "./chart.js": { default: "Chart", draw: (n) => "drew " + n + " bars" },
};

// The cache: a path is downloaded once, then reused.
const cache = new Map();
let downloads = 0;

function importModule(path) {
  if (cache.has(path)) return cache.get(path);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      downloads++;
      if (files[path]) resolve(Object.assign({}, files[path]));
      else reject(new Error("404 for " + path));
    }, 10);
  });
  cache.set(path, promise);
  return promise;
}

const USE_CHARTS = false;   // imagine a feature flag

async function main() {
  // Preload: fire it early so the download overlaps with other work.
  const early = importModule("./chart.js");

  if (USE_CHARTS) {
    const mod = await early;                 // await import("./chart.js")
    console.log(mod.default, "|", mod.draw(3)); // module object, .default
  } else {
    console.log("flag off, so it was never awaited");
  }

  try {
    await importModule("./missing.js");
  } catch (err) {
    console.log("caught:", err.message);
  }

  console.log("downloads:", downloads, "(the cache made the second one free)");
}
main();`,
      quiz: [
        {
          question: "What does dynamic import return?",
          options: ["The module value","A Promise resolving to the module namespace","void","A string"],
          correctIndex: 1,
          explanation: "import() returns a Promise for the module namespace object.",
        },
        {
          question: "When is dynamic import useful?",
          options: ["Always","To load heavy code only when needed","To avoid all imports","Only in Node"],
          correctIndex: 1,
          explanation: "Lazy loading improves startup and enables code splitting.",
        },
      ],
    },
    {
      slug: "package-managers",
      title: "Package Managers",
      description: "npm, package.json, semver, scripts, and lockfiles.",
      content: `A package manager downloads code that other people wrote and keeps track of exactly what you asked for. npm is the one that ships with Node. Yarn and pnpm do the same job with different storage tricks.

**What it actually does**
- It reads package.json, works out the whole tree of packages needed, and downloads them into a folder called node_modules.
- It reads package-lock.json so the second install produces the same tree as the first.
- It reads each dependency's own package.json, so a package gets its own requirements installed for you.

**package.json, field by field**
- name: the package name. It has to be unique if you publish it.
- version: the current version, written in the semantic versioning style.
- type: set to "module" to tell Node that .js files in this project use ES modules.
- main: the entry file that older tools load when someone requires the package.
- exports: the modern replacement for main. It also controls which files outside your package may be imported.
- scripts: named commands you run with npm run.
- dependencies and devDependencies: what the package needs to run, versus what it needs to build and test.
- private: set to true and npm publish refuses to upload the package.

**dependencies versus devDependencies**
- dependencies are installed for the people who install your package, because your running code needs them.
- devDependencies stay on your own machine, because they are tests, linters and build tools.
- npm install -D @playwright/test puts a package in devDependencies. Playwright belongs there.
- A test suite usually has almost nothing in dependencies and a long list in devDependencies.

**Semantic versioning**
- A version is major.minor.patch. 1.4.2 is major 1, minor 4, patch 2.
- A patch fixes a bug. A minor adds something in a backwards-compatible way. A major breaks something for callers.
- ^1.49.0 means any patch or minor inside major 1. So 1.49.7 and 1.55.0 are fine, and 2.0.0 is not.
- ~1.49.0 is stricter. It allows patches only, so 1.49.7 but not 1.50.0.
- 1.49.0 with no symbol means exactly that one version.
- Carets and tildes are ranges. npm resolves them once and then freezes the answer into the lockfile.

**The lockfile and CI**
- package-lock.json lists every package with an exact version and a checksum.
- Commit it. That file is what makes an install reproducible on another machine.
- npm install may update the lockfile when a range allows something newer.
- npm ci installs straight from the lockfile, refuses a lockfile that is out of date, and is the right command in CI.

**Running commands**
- npm run test runs the test script from package.json. npm run on its own lists every script.
- npx playwright test runs a binary out of node_modules without needing a script, and downloads it if it is missing.
- A global install with -g puts a command on your PATH. Your project must not quietly depend on it.

**Publishing**
- npm publish uploads the package to the public registry, unless private is true stops it.
- Use the files field or a .npmignore so you do not ship your tests and screenshots.`,
      codeExample: `// package.json is just data. Read it and most npm questions answer themselves.
const pkg = {
  name: "shop-tests",
  version: "2.1.0",
  private: true,
  type: "module",
  scripts: {
    test: "playwright test",
    "test:smoke": "playwright test --grep @smoke",
  },
  dependencies: { axios: "^1.7.2" },
  devDependencies: { "@playwright/test": "^1.49.0", typescript: "~5.5.4" },
  peerDependencies: { react: "^18.0.0" },
};

console.log("npm run test:smoke ->", pkg.scripts["test:smoke"]);

// A caret range takes any patch or minor bump inside the major version.
function satisfies(range, version) {
  const [maj, min] = range.replace("^", "").split(".").map(Number);
  const [m, n] = version.split(".").map(Number);
  return m === maj && n >= min;
}
const range = pkg.devDependencies["@playwright/test"];
console.log("1.49.7 inside " + range + ":", satisfies(range, "1.49.7"));
console.log("1.55.0 inside " + range + ":", satisfies(range, "1.55.0"));
console.log("2.0.0  inside " + range + ":", satisfies(range, "2.0.0"));

// dependencies ship to users. devDependencies stay on your machine.
console.log("ships to users:", Object.keys(pkg.dependencies));
console.log("build and test only:", Object.keys(pkg.devDependencies));
console.log("publishable:", !pkg.private);`,
      quiz: [
        {
          question: "What does npm install -D pkg do?",
          options: ["Installs a runtime dependency","Installs a dev dependency","Deletes the package","Runs tests"],
          correctIndex: 1,
          explanation: "-D adds the package to devDependencies.",
        },
        {
          question: "Why commit package-lock.json?",
          options: ["So installs are reproducible","It's required for git","For faster downloads","It hides secrets"],
          correctIndex: 0,
          explanation: "The lockfile pins exact dependency versions.",
        },
      ],
    },
    {
      slug: "module-bundlers",
      title: "Module Bundlers",
      description: "Bundlers, transpilers, and polyfills explained.",
      content: `A bundler takes many source files and produces fewer files that a browser can load quickly. It reads every import line, works out which file depends on which, then writes the result out.

**What a bundler does**
- It resolves imports to real paths, both ./api.js and a bare package name found in node_modules.
- It follows those imports from your entry file and builds a graph of every file involved.
- It bundles them into a small number of files. Sometimes one, sometimes a chunk per route.
- It tree-shakes. It drops exports nobody imports, because a static import list tells it exactly what is used.
- It minifies. It shortens variable names and removes whitespace and comments.
- It rewrites assets, so importing a PNG or a font hands you a URL.

**Development and production are different builds**
- Development mode favours speed. Files stay readable, rebuilds take milliseconds, and everything is served over HTTP.
- Production mode favours size and delivery speed. It minifies, splits, adds hashed filenames for caching, and drops unused code.
- Same source, two outputs. If a bug only shows in production, look at the minified file and load a source map.

**Three different jobs**
- A bundler assembles files and decides what to leave out.
- A transpiler changes syntax into an older syntax. TypeScript needs one to strip its types, and Babel can lower optional chaining into a long if.
- A polyfill is code you ship to fill in a feature the browser never received. It covers missing engine features, not new syntax.
- These often live in one tool. Knowing which job is which tells you which part to go looking at when it breaks.

**Side effects block tree shaking**
- If a module's top-level code does something, the bundler cannot delete it without changing behaviour.
- Assigning a global, registering a polyfill, or adding a window listener in the module body all count as side effects.
- Keep that code in one file, import it for its effect, and declare the sideEffects field in package.json so the bundler knows.
- A module that only declares things and exports them is safe to shake.

**Source maps and hot module replacement**
- A source map is a file that maps the minified output back to your original file and line. Browsers load it when devtools are open, so stack traces point at real code.
- Hot module replacement swaps one module in the running page without a full reload, keeping your test state and scroll position.
- It only works when that module has no side effects other code depends on.

**Native modules and import maps**
- Modern browsers load ES modules directly over HTTP, so a bundler is no longer strictly required.
- An import map is a block of JSON in the page saying which bare name maps to which URL. It replaced the old need to bundle third-party libraries.
- Many teams still bundle, because bundling gives smaller payloads, older browser support and a build step that fails loudly.`,
      codeExample: `// A miniature bundler: follow the imports, keep what is used, drop the rest.
const files = {
  "index.js": { imports: ["./chart.js", "./polyfills.js"], uses: ["drawChart"] },
  "./chart.js": { exports: ["drawChart", "toSVG", "brandColor"], sideEffect: false },
  "./polyfills.js": { exports: [], sideEffect: true },
};

// Start at the entry file and walk the graph, like a bundler does.
const seen = new Set();
(function walk(file) {
  if (seen.has(file)) return;
  seen.add(file);
  (files[file].imports || []).forEach(walk);
})("index.js");

// Tree shaking keeps only the exports the entry asks for. Side effects stay whole.
const wanted = files["index.js"].uses;
for (const file of seen) {
  const mod = files[file];
  if (mod.sideEffect) {
    console.log(file + " -> kept whole, its top-level code does something");
  } else {
    const used = (mod.exports || []).filter((n) => wanted.includes(n));
    console.log(file + " -> kept: [" + used.join(", ") + "]");
  }
}

// Minification squeezes. A source map undoes it for the debugger.
const raw = "function drawChart ( bars ) {\\n  return bars.length;\\n}";
const min = raw.replace(/[ \\t\\n]+/g, " ").trim();
console.log("before:", raw.length, "chars | after:", min.length, "chars");
console.log("min:", min);
console.log("map entry:", JSON.stringify({ generated: [1, 12], original: ["chart.js", 1, 9] }));`,
      quiz: [
        {
          question: "What is tree-shaking?",
          options: ["Cutting down unused exports","Planting pixels","Restarting servers","Renaming files"],
          correctIndex: 0,
          explanation: "Bundlers drop unused exported code to shrink output.",
        },
        {
          question: "Which bundler is the modern fast default?",
          options: ["Webpack","Vite","Gulp","Babel"],
          correctIndex: 1,
          explanation: "Vite is the fast, modern default for new projects.",
        },
      ],
    },
    {
      slug: "ecmascript",
      title: "ECMAScript Evolution",
      description: "From ES5 to ES2023 and what each edition added.",
      content: `ECMAScript is the document that describes the JavaScript language. Engines such as V8, SpiderMonkey and JavaScriptCore are the programs that implement it. TC39 is the committee that writes it. A proposal there moves through a staged process, and what survives becomes the yearly edition.

**ES5, the first big jump**
- Released in 2009. It added strict mode, JSON, and a batch of array methods such as forEach, map and filter.
- Strict mode turns silent mistakes into errors. Code written that way is better code.

**ES2015, the one people mean by ES6**
- let and const, so a variable belongs to the block it sits in
- arrow functions, short functions that do not create their own this
- template literals, backticks with a hole in them for a value
- classes, a cleaner way to write a constructor and its prototype
- destructuring, for pulling a value apart: const { id } = user
- default, rest and spread parameters
- Map and Set, collections keyed by value instead of by string
- Promise, an object standing for a value that arrives later
- modules, the import and export system
- for...of, which loops over any iterable

**The years after that**
- ES2017: async and await, so a Promise chain reads as straight-line code, plus Object.entries and Object.values
- ES2018: spread and rest in object literals, and async iteration with for await
- ES2019: Array.flat and flatMap, Object.fromEntries, and the optional catch binding, which is a catch with no parameter
- ES2020: optional chaining ?. and nullish coalescing ??, plus BigInt for whole numbers too large for Number, and Promise.allSettled
- ES2021: logical assignment such as ||= and ??=, and String.replaceAll
- ES2022: class fields, so count = 0 can sit inside the class body, private #fields, and top-level await in modules
- ES2023: Array.findLast, and toSorted, toReversed and toSpliced, which copy instead of mutating

**Ask what the engine can do, not what it is called**
- Feature detection tries the feature and checks the answer: typeof window?.structuredClone !== "undefined"
- Version sniffing is guesswork. Browsers ship features out of order and backport them, so a version number is not one fixed list.
- If a polyfill fills the gap, detect the polyfilled behaviour rather than the native feature.

**Target what your tests run on**
- The browser list in your CI config is the real target. Nothing outside that list matters for the test run.
- Run the suite against the oldest browser in that list, not against the newest one on your laptop.
- Read the engines field in package.json when a feature behaves oddly in Node. The Node version is your floor.`,
      codeExample: `// Ask the runtime what it can do. Never guess from a version string.
function supports(label, test) {
  try {
    const ok = test();
    console.log(label.padEnd(26), ok ? "yes" : "no");
  } catch {
    console.log(label.padEnd(26), "no");
  }
}

supports("ES2015 template literal", () => \`n=\${1 + 1}\` === "n=2");
supports("ES2017 Object.entries", () => Object.entries({ a: 1 }).length === 1);
supports("ES2019 Array.flat", () => [[1], [2, [3]]].flat().length === 3);
supports("ES2020 optional chaining", () => ({})?.deep?.nope === undefined);
supports("ES2020 nullish coalescing", () => (0 ?? 1) === 0);
supports("ES2020 BigInt", () => typeof 2n === "bigint");
supports("ES2021 replaceAll", () => "a a b".replaceAll("a", "z") === "z z b");
supports("ES2022 class fields", () => {
  class Page { retries = 3; }
  return new Page().retries === 3;
});
supports("ES2023 findLast", () => [1, 2, 3].findLast((n) => n < 3) === 2);

// Same result, different years of the standard.
const nums = [5, 1, 4];
console.log("\\ntoSorted (ES2023):", nums.toSorted((a, b) => a - b), "original:", nums);
console.log("sort (always existed):", [...nums].sort((a, b) => a - b));

// ES2017 put async and await on top of Promises.
async function total(list) {
  const parts = await Promise.all(list.map(async (n) => n * 2));
  return parts.reduce((a, b) => a + b, 0);
}
total([1, 2, 3]).then((n) => console.log("async/await total:", n));`,
      quiz: [
        {
          question: "Which version was the 'big' ES update?",
          options: ["ES5","ES2015/ES6","ES2020","ES2023"],
          correctIndex: 1,
          explanation: "ES6/ES2015 added most of modern syntax (arrows, classes, modules).",
        },
        {
          question: "What do non-mutating toSorted() methods avoid?",
          options: ["Returning new arrays","Changing the original array","Slow sorting","Type errors"],
          correctIndex: 1,
          explanation: "toSorted returns a copy, leaving the original untouched.",
        },
      ],
    },
  ],
};

export default topic;