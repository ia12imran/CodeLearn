/**
 * Single source of truth for the JavaScript curriculum.
 *
 * Every topic listed here must have:
 *   - a theory file at   ./topics/<slug>.ts        (exported as `topic`)
 *   - a practice bank at ./questions/<slug>.json  (30+ interview Q&A per lesson)
 *   - a coding bank at   ./coding/<slug>.json     (30+ coding Q&A per lesson)
 *
 * `validate-curriculum.mjs` enforces all three.
 */
export const CURRICULUM = [
    {
        slug: "intro",
        title: "JavaScript Introduction",
        icon: "rocket",
        description: "What JavaScript is, where it runs, and why automation testers live in it.",
        level: "beginner",
        lessons: [
            { slug: "what-is-javascript", title: "What is JavaScript?", description: "The one language the web is written in." },
            { slug: "why-javascript-for-automation", title: "Why JavaScript for Automation Testing", description: "Where JS wins in test automation, and where it does not." },
            { slug: "how-javascript-runs", title: "How JavaScript Actually Runs", description: "Engine, interpreter vs compiler, and what 'just in time' means." },
            { slug: "setting-up-environment", title: "Setting Up Your JavaScript Environment", description: "Node, VS Code, running your first file, the console." },
        ],
    },
    {
        slug: "basics",
        title: "JavaScript Basics",
        icon: "code",
        description: "Variables, values, types, and the operators that move data around.",
        level: "beginner",
        lessons: [
            { slug: "variables", title: "Variables: let & const", description: "Storing values, and why var is a trap." },
            { slug: "data-types", title: "Data Types & typeof", description: "The 7 primitives and the one object you cannot trust typeof on." },
            { slug: "operators", title: "Operators", description: "Arithmetic, comparison, logical, and the assignment shortcuts." },
            { slug: "type-conversions", title: "Type Conversions", description: "Coercion: how JavaScript quietly changes your types." },
        ],
    },
    {
        slug: "control-flow",
        title: "Control Flow & Loops",
        icon: "git-branch",
        description: "Making decisions and repeating work without copy-paste.",
        level: "beginner",
        lessons: [
            { slug: "if-else", title: "Conditional Logic", description: "Branching with if, else if, else, and the ternary." },
            { slug: "switch-case", title: "switch & Matching Values", description: "When a chain of ifs becomes a switch." },
            { slug: "loops-iteration", title: "Loops & Iteration", description: "for, while, do-while, and choosing the right one." },
            { slug: "loop-control", title: "Breaking, Continuing & Labels", description: "break, continue, return, and labelled loops." },
        ],
    },
    {
        slug: "strings",
        title: "Strings & Template Literals",
        icon: "type",
        description: "Working with text: searching, slicing, building and formatting.",
        level: "beginner",
        lessons: [
            { slug: "string-basics", title: "String Basics", description: "Creating strings and reading them like arrays." },
            { slug: "string-methods", title: "String Methods", description: "slice, split, replace, includes, padStart and friends." },
            { slug: "template-literals", title: "Template Literals", description: "Backticks, interpolation, and multi-line strings." },
            { slug: "string-performance", title: "String Performance & Immutability", description: "Why += in a loop is slow, and what to do instead." },
        ],
    },
    {
        slug: "functions",
        title: "JavaScript Functions",
        icon: "function-square",
        description: "Reusable blocks of logic, and the rules that decide what they can see.",
        level: "beginner",
        lessons: [
            { slug: "function-basics", title: "Function Basics", description: "Declaring, calling, parameters and return values." },
            { slug: "arrow-functions", title: "Arrow Functions", description: "The short syntax, and the one thing it changes." },
            { slug: "arguments-and-params", title: "Arguments, Defaults & Rest", description: "Handling a variable or unknown number of inputs." },
            { slug: "lexical-scope-closures", title: "Scope & Closures", description: "Functions that remember where they were born." },
            { slug: "callbacks", title: "Callbacks", description: "Passing behaviour into a function so it can call you back." },
        ],
    },
    {
        slug: "arrays",
        title: "JavaScript Arrays",
        icon: "list",
        description: "Ordered lists, and the methods that make them painless.",
        level: "beginner",
        lessons: [
            { slug: "array-basics", title: "Array Basics", description: "Creating, indexing, length, and common gotchas." },
            { slug: "array-methods", title: "Reading Arrays: at, find, some, every", description: "The search and check methods you reach for daily." },
            { slug: "advanced-arrays", title: "map, filter & Transformations", description: "Building new arrays instead of mutating old ones." },
            { slug: "reduce", title: "reduce & Grouping", description: "Folding an array into one value, plus groupBy patterns." },
            { slug: "array-flattening", title: "Flattening, Sorting & Splicing", description: "flat, flatMap, sort pitfalls, and splice vs slice." },
        ],
    },
    {
        slug: "objects",
        title: "Objects & ES6 Features",
        icon: "braces",
        description: "Keyed collections, destructuring, and safe access.",
        level: "beginner",
        lessons: [
            { slug: "object-basics", title: "Object Basics", description: "Keys, values, nesting, copying and merging." },
            { slug: "object-methods", title: "Object Methods: keys, values, entries", description: "Turning an object into something you can loop over." },
            { slug: "destructuring", title: "Destructuring", description: "Pulling values out of objects and arrays in one line." },
            { slug: "optional-chaining-nullish", title: "Optional Chaining & Nullish Coalescing", description: "Safe access into data that might be missing." },
            { slug: "map-set", title: "Map & Set", description: "Collections with real keys and no duplicate values." },
            { slug: "arrays-of-objects", title: "Arrays of Objects", description: "The most common real data shape, and how to query it." },
        ],
    },
    {
        slug: "async",
        title: "Async JavaScript",
        icon: "loader",
        description: "Waiting for things without freezing the page or your test run.",
        level: "intermediate",
        lessons: [
            { slug: "async-basics", title: "Asynchronous Basics", description: "Sync vs async, and why blocking is expensive." },
            { slug: "promises", title: "Promises", description: "A value that is not ready yet, with three outcomes." },
            { slug: "promise-composition", title: "Promise Composition", description: "all, allSettled, race, any, and chaining with then/catch." },
            { slug: "async-await", title: "async / await", description: "Writing async code that reads like sync code." },
            { slug: "fetch-apis", title: "fetch & Working with Real APIs", description: "Making requests, reading responses, and handling errors." },
            { slug: "event-loop", title: "The Event Loop", description: "Microtasks, macrotasks, and the output-order puzzles." },
        ],
    },
    {
        slug: "classes",
        title: "Classes & Prototypes",
        icon: "box",
        description: "Blueprints, inheritance, and the prototype chain underneath it all.",
        level: "intermediate",
        lessons: [
            { slug: "class-basics", title: "Class Basics", description: "constructor, methods, static, and private fields." },
            { slug: "class-inheritance", title: "Class Inheritance", description: "extends, super, and overriding properly." },
            { slug: "prototypal-inheritance", title: "Prototypal Inheritance", description: "The mechanism that makes classes work." },
            { slug: "composition-over-inheritance", title: "Composition over Inheritance", description: "Mixins, factory functions, and avoiding deep hierarchies." },
            { slug: "json", title: "Working with JSON", description: "parse, stringify, replacers, and safe API payloads." },
        ],
    },
    {
        slug: "dom",
        title: "DOM & Browser APIs",
        icon: "globe",
        description: "Reading and changing a live web page from JavaScript.",
        level: "intermediate",
        lessons: [
            { slug: "dom-basics", title: "DOM Basics", description: "The DOM tree, nodes, and creating elements." },
            { slug: "dom-selection", title: "Selecting Elements", description: "querySelector, closest, and resilient selector strategy." },
            { slug: "dom-manipulation", title: "Changing the DOM", description: "textContent, classList, attributes, createDocumentFragment." },
            { slug: "events", title: "Events", description: "Listeners, the event object, delegation, and bubbling." },
            { slug: "forms", title: "Forms", description: "Reading input values, validation, and submit events." },
            { slug: "window-object", title: "Window Object", description: "Timers, location, history, and sizing the viewport." },
        ],
    },
    {
        slug: "modules",
        title: "Modules & Tooling",
        icon: "package",
        description: "Splitting code into files and shipping it to production.",
        level: "intermediate",
        lessons: [
            { slug: "modules", title: "ES Modules", description: "import, export, default, and named exports." },
            { slug: "dynamic-imports", title: "Dynamic Imports", description: "Loading code on demand with import()." },
            { slug: "package-managers", title: "Package Managers", description: "npm, package.json, semver, scripts, and lockfiles." },
            { slug: "module-bundlers", title: "Module Bundlers", description: "Bundlers, transpilers, and polyfills explained." },
            { slug: "ecmascript", title: "ECMAScript Evolution", description: "From ES5 to ES2023 and what each edition added." },
        ],
    },
    {
        slug: "scope-hoisting",
        title: "Scope, Hoisting & this",
        icon: "layers",
        description: "The rules that decide what a piece of code can actually see.",
        level: "advanced",
        lessons: [
            { slug: "scope-rules", title: "Scope Rules", description: "Global, function, block, and module scope." },
            { slug: "hoisting", title: "Hoisting in Detail", description: "What moves to the top, what does not, and why." },
            { slug: "tdz", title: "Temporal Dead Zone", description: "The gap where let and const exist but cannot be read." },
            { slug: "this-binding", title: "How this Gets Its Value", description: "The four binding rules, in priority order." },
        ],
    },
    {
        slug: "error-handling",
        title: "Error Handling & Debugging",
        icon: "alert-triangle",
        description: "Failing loudly, recovering gracefully, and finding the real cause.",
        level: "advanced",
        lessons: [
            { slug: "try-catch", title: "try / catch / finally", description: "Catching errors, re-throwing, and cleanup." },
            { slug: "error-types", title: "Built-in & Custom Errors", description: "TypeError vs RangeError vs your own Error subclass." },
            { slug: "async-errors", title: "Error Handling in Async Code", description: "Why a missing await swallows your errors." },
            { slug: "debugging", title: "Debugging Techniques", description: "console tools, breakpoints, stack traces, and narrowing bugs." },
        ],
    },
    {
        slug: "iterators",
        title: "Iterators & Generators",
        icon: "repeat",
        description: "How for...of actually works, and how to build your own iterables.",
        level: "advanced",
        lessons: [
            { slug: "iterator-protocol", title: "The Iterator Protocol", description: "next(), done, and Symbol.iterator." },
            { slug: "generators", title: "Generator Functions", description: "function*, yield, and pausing on demand." },
            { slug: "custom-iterables", title: "Custom Iterables", description: "Making your own objects usable with for...of and spread." },
        ],
    },
    {
        slug: "storage-apis",
        title: "Storage & Browser APIs",
        icon: "database",
        description: "Persisting data and talking to the browser outside the page.",
        level: "advanced",
        lessons: [
            { slug: "storage", title: "localStorage & sessionStorage", description: "Key-value persistence, quotas, and JSON." },
            { slug: "cookies", title: "Cookies & document APIs", description: "Reading and writing cookies and the document." },
            { slug: "timers-intervals", title: "Timers, Intervals & Debounce", description: "setTimeout, setInterval, and waiting without racing." },
        ],
    },
    {
        slug: "testing",
        title: "Testing JavaScript",
        icon: "flask-conical",
        description: "How the industry actually proves JavaScript works.",
        level: "advanced",
        lessons: [
            { slug: "unit-testing", title: "Unit Testing with Jest", description: "describe, it, expect, and the arrange-act-assert shape." },
            { slug: "test-doubles", title: "Spies, Mocks & Stubs", description: "Isolating units without faking everything." },
            { slug: "e2e-testing", title: "End-to-End Testing", description: "Playwright and Cypress patterns for real user journeys." },
            { slug: "test-data-patterns", title: "Test Data Patterns", description: "Fixtures, builders, factories, and seeding." },
        ],
    },
    {
        slug: "performance-security",
        title: "Performance & Security",
        icon: "shield",
        description: "Making code fast, and keeping it from being exploited.",
        level: "advanced",
        lessons: [
            { slug: "performance-basics", title: "Performance Basics", description: "Measuring first, then optimising the right thing." },
            { slug: "browser-rendering", title: "The Rendering Pipeline", description: "Layout, paint, reflow, and requestAnimationFrame." },
            { slug: "security", title: "Web Security for Testers", description: "XSS, CSRF, prototype pollution, and safe test code." },
        ],
    },
    {
        slug: "advanced",
        title: "Advanced & Interview Prep",
        icon: "brain",
        description: "Regex, legacy JS, and the questions that decide your offer.",
        level: "advanced",
        lessons: [
            { slug: "regex-intro", title: "Intro to Regular Expressions", description: "Matching, groups, and the flags you actually need." },
            { slug: "legacy-var", title: "Legacy var & Hoisting", description: "Old JavaScript you still meet in old codebases." },
            { slug: "legacy-topics", title: "Legacy Topics", description: "IIFEs, ==, attachEvent, and other fossils." },
            { slug: "interview-prep", title: "Interview Questions", description: "The cross-topic questions that come up again and again." },
        ],
    },
];
/** Flat list of every lesson key, in curriculum order. */
export const ALL_LESSON_KEYS = CURRICULUM.flatMap((t) => t.lessons.map((l) => `${t.slug}/${l.slug}`));
/** Minimum questions required in each per-lesson bank. */
export const MIN_QUESTIONS_PER_LESSON = 30;
