import { Topic, Lesson } from "../types";

export const topics: Topic[] = [
  {
    slug: "intro",
    title: "JavaScript Introduction",
    icon: "rocket",
    description: "What is JavaScript and why automation testers need it.",
    level: "beginner",
    lessons: [
      {
        slug: "what-is-javascript",
        title: "What is JavaScript?",
        description: "Understand what JavaScript is and where it runs.",
        content: `JavaScript is the programming language of the web. Created in 1995, it now powers interactive websites, web apps, servers (Node.js), mobile apps and automation frameworks.

**Why JavaScript is everywhere**
- Runs natively in every browser - no installation needed
- Works on the server with Node.js
- Powers the biggest automation tools: Playwright, Cypress, WebDriverIO
- Huge ecosystem: millions of packages on npm

**Where JavaScript runs**
- Browser: DOM manipulation, events, fetch, storage
- Node.js: servers, scripts, test runners, CLI tools
- Automation: Playwright, Cypress, Selenium WebDriver, Appium

JavaScript is NOT Java. It is a separate language that only shares a similar name.

**The ECMAScript standard**
JavaScript is standardized as ECMAScript (ES). Modern features come from ES6 (ES2015) and later. Almost every automation test you write uses ES6+ syntax: arrow functions, let/const, promises, async/await.`,
        codeExample: `// Your first JavaScript program
console.log("Hello, World!");

// JavaScript can do math
console.log(2 + 3);

// JavaScript can work with text
console.log("javascript".toUpperCase());

// Everything runs instantly in your browser
const message = "I can run JS right here!";
console.log(message);`,
        quiz: [
          {
            question: "Which popular automation frameworks use JavaScript?",
            options: ["Playwright and Cypress", "Pytest and Selenium", "JUnit and PHPUnit", "RSpec and Cucumber"],
            correctIndex: 0,
            explanation: "Playwright, Cypress, and WebDriverIO are all JavaScript-based automation tools.",
          },
          {
            question: "JavaScript is standardized under which name?",
            options: ["Java", "TypeScript", "ECMAScript", "JScript"],
            correctIndex: 2,
            explanation: "JavaScript follows the ECMAScript (ES) standard.",
          },
        ],
      },
      {
        slug: "why-javascript-for-automation",
        title: "Why JavaScript for Automation Testing",
        description: "Learn why JS is a top choice for test automation.",
        content: `Automation testing replaces slow, repetitive manual checks with fast, repeatable scripts. JavaScript is one of the best languages for this job.

**Where JavaScript dominates automation**
- UI testing: Playwright, Cypress, WebDriverIO, Puppeteer
- API testing: Supertest, Playwright request API
- Load testing: k6 (scripted in JS)
- Mobile testing: Appium (JS drivers)
- Unit testing: Jest, Mocha, Vitest

**What you will actually use as an automation engineer**
- Selectors: locating buttons, inputs, and text on a page
- Async logic: waiting for elements with await
- Assertions: checking expected values match actual values
- Test data: building objects, arrays, and JSON payloads
- API calls: sending requests and validating responses

**Key point**
The JavaScript you write in a Playwright test is just JavaScript. Master plain JavaScript - variables, functions, objects, arrays, promises, and async/await - and you can learn any JS test framework quickly.`,
        codeExample: `// What an automation test "feels like" in plain JS
// 1. Define test data
const user = { name: "admin", password: "secret" };

// 2. A helper that "waits" like automation tools do
function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 3. Simulate a test step
async function testLogin() {
  console.log("Opening login page...");
  await waitFor(200); // pretend to wait for the element
  console.log("Filling username: " + user.name);
  console.log("Clicking Login...");
  console.log("Login test passed!");
}

testLogin();`,
        quiz: [
          {
            question: "Which of these is a JavaScript UI testing framework?",
            options: ["Cypress", "Playwright", "WebdriverIO", "Jest"],
            correctIndex: 1,
            explanation: "Playwright is a popular JavaScript UI automation framework.",
          },
          {
            question: "What concept is used most in JS automation tests?",
            options: ["Threads", "async/await", "Pointers", "Goto statements"],
            correctIndex: 1,
            explanation: "Automation tests constantly use async/await to wait for pages and elements.",
          },
        ],
      },
    ],
  },
  {
    slug: "basics",
    title: "JavaScript Basics",
    icon: "code",
    description: "Variables, data types, operators, and conversions.",
    level: "beginner",
    lessons: [
      {
        slug: "variables",
        title: "Variables: let & const",
        description: "Storing data with let, const, and var.",
        content: `Variables store data so you can use it later. Modern JavaScript uses let for changing values and const for values that should not be reassigned.

**Declaring variables**
let count = 5;       // can be reassigned
const pi = 3.14;     // cannot be reassigned
var old = 10;        // legacy - avoid in new code

**let vs const vs var**
- let: block-scoped, can be updated. Use for values that change
- const: block-scoped, cannot be updated. Use by default
- var: function-scoped, hoisted weirdly. Legacy, avoid

**Naming rules**
- Must start with a letter, underscore, or dollar sign
- Case sensitive: userName and username are different
- Cannot be a reserved word (if, for, class, etc.)
- Convention: camelCase for variables (firstName), SCREAMING_SNAKE for constants

**Block scope**
{ let x = 1; }   // x only exists inside these braces
console.log(x);  // ReferenceError: x is not defined`,
        codeExample: `// let: value can change
let score = 10;
score = 20;
console.log("Score:", score);

// const: value cannot be reassigned
const appName = "Test Runner";
console.log("App:", appName);
// appName = "Other";  // TypeError if you run this line

// Prefer const whenever the value won't change
const testData = ["login", "signup"];
console.log("Test cases:", testData.length);

// const does NOT freeze objects - you can change properties
const user = { name: "Ana" };
user.name = "Bob";
console.log("User:", user.name);`,
        quiz: [
          {
            question: "Which keyword should you use by default for a value that never changes?",
            options: ["var", "let", "const", "static"],
            correctIndex: 2,
            explanation: "const is the default choice. Use let only when you need to reassign.",
          },
          {
            question: "What happens when you reassign a const variable?",
            options: ["It updates silently", "It throws a TypeError", "It creates a copy", "Nothing"],
            correctIndex: 1,
            explanation: "Reassigning a const throws a TypeError.",
          },
        ],
      },
      {
        slug: "data-types",
        title: "Data Types & typeof",
        description: "The primitive types and how to inspect values.",
        content: `JavaScript has 8 data types. The 7 primitive types are: string, number, boolean, undefined, null, symbol, and bigint. Objects are the 8th type.

**Primitive types**
- string: text data
- number: 42, 3.14, NaN, Infinity
- boolean: true / false
- undefined: a variable with no value assigned
- null: an intentional "no value"
- symbol: unique identifiers
- bigint: very large integers, written as 10n

**typeof operator**
typeof 42           // "number"
typeof "hi"         // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  (known quirk!)
typeof []           // "object"  (arrays are objects)
typeof function(){} // "function"

**Numbers are tricky**
0.1 + 0.2  // 0.30000000000000004 - floating point
Number.isInteger(42)  // true

**Dynamic typing**
A variable can change type at any time: let x = "hi"; x = 42;  // allowed`,
        codeExample: `// The primitive types
const name = "Playwright";
const version = 1.43;
const isStable = true;
let notAssigned;
const empty = null;

console.log("name:", name, typeof name);
console.log("version:", version, typeof version);
console.log("isStable:", isStable, typeof isStable);
console.log("notAssigned:", notAssigned, typeof notAssigned);
console.log("empty:", empty, typeof empty); // quirk: object

// Arrays and objects
console.log("[]:", typeof []);
console.log("{}:", typeof {});

// Floating point gotcha
console.log("0.1 + 0.2 =", 0.1 + 0.2);

// Checking integers
console.log("Is 42 an integer?", Number.isInteger(42));`,
        quiz: [
          {
            question: "What is the result of typeof null?",
            options: ['"null"', '"undefined"', '"object"', '"number"'],
            correctIndex: 2,
            explanation: "A long-standing JavaScript bug: typeof null returns 'object'.",
          },
          {
            question: "Which type represents an intentional empty value?",
            options: ["undefined", "null", "NaN", "void"],
            correctIndex: 1,
            explanation: "null is intentionally 'no value'. undefined means 'not assigned'.",
          },
        ],
      },
      {
        slug: "operators",
        title: "Operators",
        description: "Comparison, logical, and arithmetic operators.",
        content: `Operators combine values into expressions. Test automation is full of comparisons, so these matter a lot.

**Arithmetic**
+ - * / %, plus + for strings (concatenation).
2 + 3 = 5, but "2" + 3 = "23" (string wins).

**Comparison - the critical ones**
== loose equality (coerces types) - avoid
=== strict equality (type AND value) - always use
!= and !== the negations
> < >= <= relational

**Logical**
&& (and), || (or), ! (not)
Short-circuit: false && x returns false without evaluating x.
|| returns the first truthy value.

**Type pitfall**
0, "", null, undefined, NaN, false are falsy; everything else is truthy.
"0" and " " (space) are truthy strings.

**Assignment and increments**
= , +=, -=, ++ , --

**The gotcha that breaks tests**
"10" === 10 is false. Always compare like types. If a test compares a UI string to a number, convert first with Number() or parseInt().

**Automation note**
Assertions are comparisons: expect(actual).toBe(expected) is === under the hood. Keep both sides the same type.`,
        codeExample: `// Strict vs loose
console.log("'10' == 10 :", "10" == 10);   // true (coerces)
console.log("'10' === 10:", "10" === 10);  // false (types differ)

// Comparison results
console.log("5 > 3:", 5 > 3);
console.log("5 >= 5:", 5 >= 5);
console.log("'a' < 'b':", "a" < "b");

// Logical operators with truthiness
const user = null;
const name = user || "guest";
console.log("Fallback via ||:", name);

const isLoggedIn = true;
const isAdmin = false;
console.log("Can access admin panel:", isLoggedIn && isAdmin);
console.log("Can access somewhere:", isLoggedIn || isAdmin);

// Common automation pattern: convert before compare
const uiPrice = "19.99";       // read from the page (string)
const expected = 19.99;        // from data (number)
console.log("String === number:", uiPrice === expected);
console.log("Parsed compare:   ", parseFloat(uiPrice) === expected);

// Remainder (useful for pagination checks)
console.log("10 % 3 =", 10 % 3);`,
        quiz: [
          {
            question: "Why avoid == (loose equality)?",
            options: [
              "It's slow",
              "It coerces types, causing surprise matches",
              "It's deprecated",
              "It only works on numbers",
            ],
            correctIndex: 1,
            explanation: "== converts types first, so '10' == 10 is true. === prevents that.",
          },
          {
            question: 'Which are falsy values?',
            options: [
              "0, '', nan, false",
              "0, '', null, undefined, NaN, false",
              "'0', ' ', null",
              "Only false",
            ],
            correctIndex: 1,
            explanation: "Those six values are falsy; everything else is truthy.",
          },
        ],
      },
      {
        slug: "type-conversions",
        title: "Type Conversions",
        description: "Implicit vs explicit conversions between types.",
        content: `JavaScript converts between types - sometimes automatically (implicit) and sometimes when you ask (explicit). The implicit ones cause most bugs in test scripts.

**Implicit coercion (auto)**
"1" + 2      -> "12"  (plus prefers string concatenation)
"10" - 2     -> 8     (minus forces numbers)
"3" * 2      -> 6
2 < "10"     -> true  (relational converts strings to numbers)
"" == 0      -> true  (another reason to avoid ==)

**Explicit (be safe and do this)**
Number("42")     -> 42
parseInt("42px", 10) -> 42
parseFloat("12.5usd") -> 12.5
String(42)       -> "42"
Boolean("")      -> false

**String comparison note**
"10" < "9" is true when compared as strings (first char '1' vs '9').
Always convert to numbers first when comparing numeric text.

**Truthy conversion**
Boolean conversion in conditions: 0, "", null, undefined, NaN are falsy.

**Parsing gotchas**
Number("12px") -> NaN  (fails!)
parseInt("12px") -> 12 (lenient)
Number(null) -> 0, Number(undefined) -> NaN

**Automation note**
Page text is always strings: '3 items', '$19.99', '42px'. Parse before comparing with expected numbers, or assertions fail mysteriously.`,
        codeExample: `// Implicit coercion surprises
console.log("'1' + 2  =", "1" + 2);    // "12"
console.log("'10' - 2 =", "10" - 2);   // 8
console.log("'6' * 3  =", "6" * 3);    // 18
console.log("'10' < '9' =", "10" < "9");   // true (string compare!)

// Explicit conversions (prefer these)
const n = Number("42");
console.log("Number('42'):", n, typeof n);

const fromHtml = "price: 12.5 usd";
console.log("parseFloat:", parseFloat(fromHtml));
console.log("parseInt:", parseInt("42px", 10));

// The NaN trap
console.log("Number('12px'):", Number("12px"));
console.log("isNaN check:", isNaN(Number("12px")));

// Convert the UI string before comparing
const cartText = "7 items in cart";
const count = parseInt(cartText, 10);
console.log("Parsed cart count:", count, "| is 7:", count === 7);

// String conversion
console.log("String(42):", String(42));
console.log("String(true):", String(true));

// Boolean conversion
console.log("Boolean(''):", Boolean(""));
console.log("Boolean('x'):", Boolean("x"));`,
        quiz: [
          {
            question: "What is '10' < '9' when both are strings?",
            options: [
              "false (9 < 10 numerically)",
              "true (character-by-character)",
              "NaN",
              "Error",
            ],
            correctIndex: 1,
            explanation: "Relational comparison on strings compares character codes: '1' vs '9'.",
          },
          {
            question: "How do you safely turn '12.5 USD' into a number?",
            options: [
              "Number('12.5 USD')",
              "parseFloat('12.5 USD')",
              "'12.5 USD' + 0",
              "Number.parseInt it twice",
            ],
            correctIndex: 1,
            explanation: "parseFloat tolerates trailing text; Number would give NaN.",
          },
        ],
      },
    ],
  },
  {
    slug: "control-flow",
    title: "Control Flow & Loops",
    icon: "git-branch",
    description: "Making decisions and repeating code.",
    level: "beginner",
    lessons: [
      {
        slug: "if-else",
        title: "Conditional Logic",
        description: "if, else if, else, switch, and the ternary operator.",
        content: `Programs make decisions. JavaScript gives you if/else, switch, and the ternary operator.

**if / else if / else**
if (condition) {
  // runs when condition is truthy
} else if (otherCondition) {
  // runs when the first is falsy and this is truthy
} else {
  // runs when all conditions are falsy
}

**Truthy/falsy reminders**
if (username) checks "is username not empty?" because empty string is falsy.
if (count) fails when count is 0 even if 0 is a valid value. Be careful.

**Ternary (shorthand)**
const result = condition ? valueIfTrue : valueIfFalse;

**switch**
switch uses strict equality (===). Remember break or the code falls through.

**Automation note**
Assertions are exactly conditionals: if actual === expected then PASS else FAIL.`,
        codeExample: `// if / else if / else
const temp = 28;
if (temp < 0) console.log("Freezing");
else if (temp < 15) console.log("Cold");
else if (temp < 25) console.log("Nice");
else if (temp < 35) console.log("Warm");
else console.log("Hot!");

// Ternary
const score = 85;
const passed = score >= 70 ? "PASS" : "FAIL";
console.log("Result:", passed);

// The 0 gotcha
const cartCount = 0;
if (cartCount) console.log("has items");
else console.log("Cart is empty (0 is falsy!)");

// switch
const browser = "chrome";
switch (browser) {
  case "chrome": console.log("Running on Chrome"); break;
  case "firefox": console.log("Running on Firefox"); break;
  default: console.log("Unknown browser");
}

// Assertion-style check used in tests
const expected = 200;
const actual = 200;
console.log("API status check:", actual === expected ? "PASS" : "FAIL");`,
        quiz: [
          {
            question: "What happens if a switch case is missing break?",
            options: ["Compiler error", "Code falls through to next case", "It stops", "It returns undefined"],
            correctIndex: 1,
            explanation: "Without break, execution falls through to the next case.",
          },
          {
            question: 'What does (10 > 5) ? "yes" : "no" evaluate to?',
            options: ["yes", "no", "10 > 5", "true"],
            correctIndex: 0,
            explanation: "The ternary returns 'yes' because 10 > 5 is true.",
          },
        ],
      },
      {
        slug: "loops-iteration",
        title: "Loops & Iteration",
        description: "for, while, do-while, for...of, and for...in.",
        content: `Loops repeat code. Modern JavaScript has several loop forms.

**for - classic counting loop**
for (let i = 0; i < 5; i++) { console.log(i); }

**while - repeats while condition is truthy**
**do...while - runs at least once**

**for...of - iterate values of arrays/strings (preferred)**
for (const fruit of ["apple", "banana"]) { console.log(fruit); }

**for...in - iterate keys of objects (use with care)**

**break and continue**
break exits the loop entirely. continue skips to the next iteration.

**Automation note**
for...of is what you use to loop over test data, locator results, and API responses. Avoid index-based for loops unless you need the index.`,
        codeExample: `// for loop with index
for (let i = 1; i <= 5; i++) {
  console.log("Step", i);
}

// for...of over an array
const steps = ["login", "navigate", "assert"];
for (const step of steps) {
  console.log("Running:", step);
}

// while loop
let tries = 0;
while (tries < 3) {
  console.log("Attempt", tries + 1);
  tries++;
}

// break and continue
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;   // skip multiples of 3
  if (i > 7) break;            // stop early
  console.log("Number:", i);
}

// Looping over test data
const testData = [
  { user: "admin", pass: true },
  { user: "guest", pass: false },
];
for (const t of testData) {
  console.log(t.user + ": " + (t.pass ? "passes" : "fails"));
}`,
        quiz: [
          {
            question: "Which loop is best for iterating over array values in modern JS?",
            options: ["for (;;)", "for...of", "while(1)", "do...while"],
            correctIndex: 1,
            explanation: "for...of iterates array/string values directly and is the readable modern choice.",
          },
          {
            question: "What does continue do inside a loop?",
            options: ["Exits the loop", "Skips to the next iteration", "Restarts the loop", "Pauses for 1 second"],
            correctIndex: 1,
            explanation: "continue skips the rest of the current iteration and moves to the next one.",
          },
        ],
      },
    ],
  },
  {
    slug: "strings",
    title: "Strings & Template Literals",
    icon: "type",
    description: "Working with text data in JavaScript.",
    level: "beginner",
    lessons: [
      {
        slug: "string-basics",
        title: "String Basics",
        description: "Creating strings and basic operations.",
        content: `Strings hold text. You can write them with single quotes, double quotes, or backticks (template literals).

**Creating strings**
const a = 'single';
const b = "double";
const c = "template with backticks";

**Length and access**
"Hello".length       // 5
"Hello"[0]           // "H"  (strings are indexable)
"Hello".charAt(1)    // "e"

**Concatenation**
"Hello" + " " + "World"   // old way
"Hi " + name              // simpler: template literals

**Escape characters**
Newline, tab, and quotes inside strings use backslash escapes.

**Strings are immutable**
Methods return NEW strings; the original is never changed.

**Automation note**
Every locator, text assertion, and URL in a test is a string. Compare text with === and watch out for extra whitespace and case.`,
        codeExample: `// Creating strings
const single = "single quotes";
const double = "double quotes";
console.log("Single:", single);
console.log("Double:", double);

// Accessing and length
const fruit = "banana";
console.log("Length:", fruit.length);
console.log("First char:", fruit[0]);
console.log("Last char:", fruit[fruit.length - 1]);

// Escapes
console.log("Line 1\\nLine 2");
console.log("Tab\\there");

// Immutability
const original = "hello";
const shout = original.toUpperCase();
console.log("Original:", original, "| changed:", shout);

// Text comparison (case matters!)
const expected = "Login";
const actual = "login";
console.log("Case-sensitive match:", expected === actual);
console.log("Lowercase match:", expected.toLowerCase() === actual);`,
        quiz: [
          {
            question: 'What does "JavaScript".length return?',
            options: ["9", "10", "11", "12"],
            correctIndex: 1,
            explanation: '"JavaScript" has 10 characters.',
          },
          {
            question: "Are strings mutable in JavaScript?",
            options: ["Yes", "No, methods return new strings", "Only for emojis", "Depends on quotes used"],
            correctIndex: 1,
            explanation: "Strings are immutable. Methods like toUpperCase() return a new string.",
          },
        ],
      },
      {
        slug: "string-methods",
        title: "String Methods",
        description: "The most useful built-in string methods.",
        content: `JavaScript strings have many built-in methods. These are the ones you will use daily in test automation.

**Searching**
str.includes("sub")   // boolean - contains?
str.startsWith("ab")  // boolean
str.endsWith("z")     // boolean
str.indexOf("sub")    // first index or -1

**Changing**
str.toUpperCase() / str.toLowerCase()
str.trim()            // remove surrounding whitespace
str.slice(start, end) // substring by index
str.replace("old", "new")
str.replaceAll("old", "new")
str.padStart(5, "0")  // "00042"

**Splitting and joining**
str.split(",")        // "a,b,c" -> ["a","b","c"]
arr.join("-")         // ["a","b"] -> "a-b"

**Automation note**
- Always trim() scraped text before comparing - pages have stray whitespace
- Use toLowerCase() for case-insensitive text checks
- includes() is the go-to for "does this text contain X" assertions`,
        codeExample: `const text = "  Welcome to the site  ";

// Trim whitespace - critical for scraped text
console.log("trimmed:", text.trim());

// Case
console.log("upper:", text.trim().toUpperCase());
console.log("lower:", text.trim().toLowerCase());

// Checks
const url = "https://example.com/login";
console.log("startsWith https:", url.startsWith("https://"));
console.log("includes login:", url.includes("login"));
console.log("endsWith .com:", url.endsWith(".com"));

// Extract the domain
const domain = url.replace("https://", "").split("/")[0];
console.log("domain:", domain);

// Replace
const msg = "Test 1 of 5 passed";
console.log("replace:", msg.replace("1", "one"));

// Pad for aligned reports
console.log("Padded:", "42".padStart(5, "0"));

// Compare text case-insensitively
const expected = "LOGIN";
const actual = "login";
console.log("Case-insensitive match:", expected.toLowerCase() === actual.toLowerCase());`,
        quiz: [
          {
            question: 'What does "a,b,c".split(",") return?',
            options: ['"a,b,c"', '["a","b","c"]', '"[a,b,c]"', '"abc"'],
            correctIndex: 1,
            explanation: "split() turns the string into an array of parts separated by the delimiter.",
          },
          {
            question: "Which method checks if a string contains a substring?",
            options: ["find()", "includes()", "substring()", "charAt()"],
            correctIndex: 1,
            explanation: "includes() returns true/false; indexOf() also works but returns an index or -1.",
          },
        ],
      },
      {
        slug: "template-literals",
        title: "Template Literals",
        description: "Interpolation, multi-line strings, and embedded expressions.",
        content: `Template literals use backtick characters (the key under the tilde) instead of quotes. They are the modern way to build strings.

**Interpolation - embed values directly**
Wrap the string in backtick characters and put any expression inside dollar-sign followed by curly braces:
const name = "Ana";
Old style: "Hello, " + name + "!"
Modern style: the name variable placed inside curly-brace interpolation.

**Any expression inside the braces**
const price = 19.99;
Put price * 2 between the curly braces and the interpolation evaluates it for you.

**Multi-line strings**
Backticks let you write natural multi-line strings without escape codes.

**Dynamic values**
Test frameworks build strings like selectors, URLs, and test names this way.

**Automation note**
- Build locators dynamically
- Create API payloads and URLs
- Write readable test messages`,
        codeExample: `// Basic interpolation
const browser = "Chromium";
const version = 121;
console.log("Running " + browser + " v" + version);

// Expressions inside
const base = 100;
console.log("base + 50 = " + (base + 50));

// Multi-line strings
const report = "TEST RESULTS\\n------------\\nLogin: PASS\\nLogout: PASS";
console.log(report);

// Dynamic locator/selector building (like automation tools)
function locator(id) {
  return '[data-testid="' + id + '"]';
}
console.log("Selector:", locator("submit-btn"));

// Building readable test messages
const status = "failure";
const reason = "timeout";
console.log("Login test: " + status + " (reason: " + reason + ")");

// Mapping into strings
const steps = ["open", "fill", "submit"];
console.log("Flow:", steps.map(s => s.toUpperCase()).join(" -> "));`,
        quiz: [
          {
            question: "Which character encloses a template literal?",
            options: ["Double quotes", "Backticks", "Single quotes", "Angle brackets"],
            correctIndex: 1,
            explanation: "Template literals use backticks and interpolate with ${expression}.",
          },
          {
            question: "What is template literal interpolation used for?",
            options: ["Only comments", "Embedding expressions in strings", "Deleting variables", "Incrementing numbers"],
            correctIndex: 1,
            explanation: "Interpolation embeds variables and expressions directly inside a string.",
          },
        ],
      },
    ],
  },
  {
    slug: "functions",
    title: "JavaScript Functions",
    icon: "function-square",
    description: "Declarations, arrows, callbacks, scope, and closures.",
    level: "intermediate",
    lessons: [
      {
        slug: "function-basics",
        title: "Function Basics",
        description: "Declaring, parameters, returns, and default values.",
        content: `Functions are reusable blocks of code. In JavaScript, functions are VALUES - you can store, pass, and return them.

**Function declaration**
function add(a, b) {
  return a + b;
}
add(2, 3);  // 5

**Function expression**
const add = function (a, b) { return a + b; };

**Parameters and defaults**
function greet(name = "friend") {
  return "Hello, " + name + "!";
}

**Rest parameters**
function total(...nums) { /* nums is an array */ }

**Hoisting**
Function declarations are hoisted - callable before they appear. Function expressions are not.

**Missing arguments**
Calling oneArg() with no argument makes the parameter undefined.

**return**
A function without a return statement returns undefined.

**Automation note**
Page objects in Playwright are usually classes; helpers are plain functions. Keep functions small and single-purpose.`,
        codeExample: `// Declaration (hoisted - callable before definition)
console.log(multiply(6, 7));
function multiply(a, b) {
  return a * b;
}

// Expression with default params
const buildUrl = (base, query) =>
  query ? base + "?" + query : base;
console.log(buildUrl("https://api.test.com", "page=2&size=10"));

// Rest parameters
function total(...prices) {
  return prices.reduce((sum, p) => sum + p, 0);
}
console.log("Total:", total(10, 20, 5));

// Missing and extra args
function oneArg(a) { return a; }
console.log("Missing:", oneArg());
console.log("Extra ignored:", oneArg(1, 2, 3));

// No return -> undefined
function sayHi() { console.log("Hi!"); }
console.log("sayHi() returned:", sayHi());

// Reusable automation helper
function assertStatus(status, expected) {
  return status === expected;
}
console.log("Status check:", assertStatus(200, 200));`,
        quiz: [
          {
            question: "What does a function return if it has no return statement?",
            options: ["null", "0", "undefined", "the last expression"],
            correctIndex: 2,
            explanation: "Functions without a return statement return undefined.",
          },
          {
            question: "What does hoisting do for function declarations?",
            options: ["Deletes them", "Lets you call them before definition", "Makes them private", "Slows them down"],
            correctIndex: 1,
            explanation: "Function declarations are hoisted to the top of their scope.",
          },
        ],
      },
      {
        slug: "arrow-functions",
        title: "Arrow Functions",
        description: "The concise modern function syntax.",
        content: `Arrow functions are a shorter way to write functions. Introduced in ES6, they are now standard everywhere including test frameworks.

**Basic syntax**
const add = (a, b) => a + b;
- One parameter: parentheses optional, x => x * 2
- Zero parameters: need empty parentheses, () => 5
- Multi-statement bodies need curly braces and explicit return

**The short callback**
array.map(function(item) { return item * 2; });
array.map(item => item * 2);

**Key difference: this**
Arrow functions do NOT have their own this. They inherit this from the surrounding scope. This is why they are preferred for callbacks and event handlers.

**No arguments object**
Arrows do not have the arguments object. Use rest parameters instead.

**No hoisting**
Arrow functions are expressions and are not hoisted, so define them before use.

**Use in automation**
- map/filter/find callbacks over test data
- Hooks in test frameworks: beforeEach(() => {...})
- Promise chains: .then(res => res.json())
- Assertions: expect(value).toBe(expected)`,
        codeExample: `// Various arrow forms
const square = x => x * x;
const add = (a, b) => a + b;
const greet = () => "Hello!";
console.log(square(9), add(2, 5), greet());

// Block body with explicit return
const isAdult = (age) => {
  if (age >= 18) return "adult";
  return "minor";
};
console.log(isAdult(21));

// Used with array methods
const scores = [45, 80, 90, 60];
const passing = scores.filter(score => score >= 70);
const doubled = scores.map(score => score * 2);
console.log("Passing:", passing);
console.log("Doubled:", doubled);

// this behavior: arrows inherit this
const counter = {
  count: 0,
  next() {
    setTimeout(() => {
      this.count++;      // this = counter (lexical)
      console.log("Count:", this.count);
    }, 50);
  },
};
counter.next();`,
        quiz: [
          {
            question: "Do arrow functions have their own this?",
            options: ["Yes, always", "No, they inherit this from scope", "Only in strict mode", "Only when bound"],
            correctIndex: 1,
            explanation: "Arrow functions have no own this; they use the lexical this from surrounding scope.",
          },
          {
            question: "Can arrow functions be hoisted like declarations?",
            options: ["Yes", "No, they are expressions", "Only if named", "Only in modules"],
            correctIndex: 1,
            explanation: "Arrow functions are expressions and are not hoisted.",
          },
        ],
      },
      {
        slug: "lexical-scope-closures",
        title: "Scope & Closures",
        description: "Lexical scope, closures, and variable visibility.",
        content: `Scope defines where variables are visible. Closures let inner functions remember variables from the scope where they were created - even after that outer function has finished.

**Types of scope**
- Global scope: visible everywhere
- Function scope: visible inside the function (var)
- Block scope: visible inside the braces (let, const)

**Lexical (static) scope**
Visibility is decided by where code is WRITTEN, not where it runs. A nested function can read variables of its outer functions.

**What is a closure?**
A closure is a function that captures the variables of its outer scope at creation time:
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2  (count survives after makeCounter returned)

**Why closures matter for automation**
- "Remembering" state between test steps
- Factory functions that build configs
- Private variables that hide implementation details
- Event handlers and setTimeout callbacks use closures

**Common interview trap**
console.log inside a setTimeout in a loop with var prints the final value. Use let or wrap with a closure.`,
        codeExample: `// Closure: counter keeps state
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log("Counter:", counter(), counter(), counter());

// Closure in a factory
function createGreeter(prefix) {
  return function (name) {
    return prefix + " " + name;
  };
}
const sayHi = createGreeter("Hello");
const sayBye = createGreeter("Goodbye");
console.log(sayHi("Ana"));
console.log(sayBye("Bob"));

// Private state
function createBankAccount() {
  let balance = 0;
  return {
    deposit(m) { balance += m; return balance; },
    getBalance() { return balance; },
  };
}
const acct = createBankAccount();
acct.deposit(100);
acct.deposit(50);
console.log("Balance:", acct.getBalance());

// Classic loop + var trap
for (var i = 0; i < 3; i++) {
  setTimeout(function () { console.log("var i:", i); }, 0);
}
// Fix with let
for (let j = 0; j < 3; j++) {
  setTimeout(function () { console.log("let j:", j); }, 0);
}`,
        quiz: [
          {
            question: "What is a closure?",
            options: [
              "A function that closes the browser",
              "A function that remembers its outer scope variables",
              "A private class field",
              "A type of loop",
            ],
            correctIndex: 1,
            explanation: "A closure captures and remembers the variables of the scope where it was created.",
          },
          {
            question: "Which keyword creates block-scoped variables?",
            options: ["var", "let and const", "function", "this"],
            correctIndex: 1,
            explanation: "let and const are block-scoped. var is function-scoped.",
          },
        ],
      },
      {
        slug: "callbacks",
        title: "Callbacks",
        description: "Passing functions to functions for async and reuse.",
        content: `A callback is a function passed as an argument to another function, to be called later. Callbacks power events, timers, and all asynchronous code.

**Sync callback (built-in methods)**
["a", "b"].forEach(item => console.log(item));
const evens = [1,2,3,4].filter(n => n % 2 === 0);

**Async callback (runs later)**
setTimeout(() => console.log("later"), 1000);

**Why callbacks matter for automation**
- Test frameworks: beforeEach(() => ...), afterEach(() => ...)
- Playwright: page.on("requestfailed", callback)
- Event listeners and hooks are all callbacks
- Node.js: fs.readFile(path, (err, data) => ...)

**Callback hell**
Nested callbacks become unreadable:
apiCall(data, result => {
  apiCall2(result, result2 => {
    apiCall3(result2, result3 => { ... });
  });
});
Modern code replaces deep nesting with Promises and async/await (next topics).

**Higher-order functions**
A function that takes or returns another function is a higher-order function. map, filter, forEach are higher-order.`,
        codeExample: `// Sync callback examples
const scores = [85, 40, 92, 60];
const above = scores.filter(s => s > 70);
console.log("Above 70:", above);

scores.forEach((s, index) => {
  console.log("Score " + (index + 1) + ":", s);
});

// Async callback - runs after the current code
setTimeout(() => {
  console.log("This runs last (after 300ms)");
}, 300);
console.log("This runs first");

// Higher-order function using a callback
function processData(items, transform) {
  return items.map(transform);
}
const doubled = processData([1, 2, 3], n => n * 2);
console.log("Processed:", doubled);

// Write your own callback
function loginTest(username, onSuccess, onFail) {
  const valid = username === "admin";
  if (valid) onSuccess();
  else onFail();
}
loginTest(
  "admin",
  () => console.log("Login PASSED"),
  () => console.log("Login FAILED")
);`,
        quiz: [
          {
            question: "What is a callback?",
            options: [
              "A function passed to another function to run later",
              "A built-in method",
              "A type of variable",
              "A DOM element",
            ],
            correctIndex: 0,
            explanation: "A callback is a function passed as an argument and invoked by the receiving function.",
          },
          {
            question: "What is the main downside of heavily nested callbacks?",
            options: ["Slow execution", "Callback hell - unreadable code", "Memory leaks always", "No error handling"],
            correctIndex: 1,
            explanation: "Deeply nested callbacks create 'callback hell'. Promises and async/await solve this.",
          },
        ],
      },
    ],
  },
  {
    slug: "arrays",
    title: "JavaScript Arrays",
    icon: "list",
    description: "Ordered collections and the powerful array methods.",
    level: "beginner",
    lessons: [
      {
        slug: "array-basics",
        title: "Array Basics",
        description: "Creating arrays, accessing and modifying elements.",
        content: `Arrays store ordered collections of values. They can mix any types.

**Creating arrays**
const nums = [1, 2, 3];
const mixed = [1, "two", true, null];
const empty = [];
const fromString = "abc".split("");

**Accessing**
arr[0]            // first element
arr[arr.length-1] // last element
arr.at(-1)        // modern: last element

**Adding / removing**
arr.push(x)       // add to end (returns new length)
arr.pop()         // remove from end
arr.unshift(x)    // add to start
arr.shift()       // remove from start
arr.splice(1, 1)  // remove 1 element at index 1

**Finding the length**
arr.length

**Copying**
const copy = [...arr];   // spread - a real copy
const copy2 = arr.slice();

**Mutating vs returning new**
push/pop/splice MUTATE the original. slice/spread do NOT.
Slice/extract: arr.slice(start, end) returns a NEW array.

**Automation note**
Test data (carts, tables, configs) lives in arrays. Master push/pop and the copy behavior to avoid nasty bugs.`,
        codeExample: `// Creating and accessing
const colors = ["red", "green", "blue"];
console.log("First:", colors[0]);
console.log("Last:", colors[colors.length - 1]);
console.log("Length:", colors.length);

// Adding / removing
colors.push("yellow");
console.log("After push:", colors);
colors.pop();
console.log("After pop:", colors);
colors.unshift("purple");
console.log("After unshift:", colors);
colors.shift();
console.log("After shift:", colors);

// splice: remove 1 element at index 1
colors.splice(1, 1);
console.log("After splice:", colors);

// Copy with spread - mutating the copy leaves original alone
const original = [1, 2, 3];
const copy = [...original];
copy.push(99);
console.log("Original:", original);
console.log("Copy:", copy);

// slice is non-mutating
const nums = [10, 20, 30, 40];
console.log("Slice 1-3:", nums.slice(1, 3));
console.log("Original safe:", nums);`,
        quiz: [
          {
            question: "Which method adds an element to the END of an array?",
            options: ["push()", "shift()", "unshift()", "splice()"],
            correctIndex: 0,
            explanation: "push() adds to the end. unshift() adds to the start.",
          },
          {
            question: "How do you make a real copy of an array?",
            options: ["const copy = original", "const copy = [...original]", "const copy = original.push()", "There is no way"],
            correctIndex: 1,
            explanation: "The spread operator [...] creates a new independent array.",
          },
        ],
      },
      {
        slug: "advanced-arrays",
        title: "Advanced Array Methods",
        description: "map, filter, find, some, every, sort, and more.",
        content: `These methods replace manual for loops and are the bread and butter of modern JavaScript. They are non-mutating (they return new arrays or values).

**map - transform every element**
const doubled = [1,2,3].map(n => n * 2);   // [2,4,6]

**filter - keep matching elements**
const evens = [1,2,3,4].filter(n => n % 2 === 0);  // [2,4]

**find - first matching element (or undefined)**
const user = users.find(u => u.id === 3);

**some - is there at least one match? (boolean)**
**every - do all elements match? (boolean)**
**includes - does the array contain a value? (boolean)**

**sort - sorts IN PLACE, beware strings**
[10, 2, 1].sort((a,b) => a - b)  // [1,2,10]

**Cheat with huge test data**
Extracting, filtering, and transforming API responses is exactly this.

**forEach vs map**
forEach runs code for each item (returns nothing). map builds a new array. Use map when you need the result.`,
        codeExample: `const users = [
  { name: "Ana", age: 30, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Cid", age: 25, active: true },
];

// map - extract names
console.log("Names:", users.map(u => u.name));

// filter - active users
console.log("Active:", users.filter(u => u.active).map(u => u.name));

// find - first match
console.log("Found:", users.find(u => u.age === 17));

// some / every
console.log("Anyone under 18?", users.some(u => u.age < 18));
console.log("All over 16?", users.every(u => u.age > 16));

// includes
console.log("Has Ana?", ["Ana", "Bob"].includes("Ana"));

// sort numbers properly (with comparator)
const nums = [10, 2, 1, 100];
console.log("Sorted:", [...nums].sort((a, b) => a - b));

// sort strings by name
console.log("By name:", [...users].sort((a, b) => a.name.localeCompare(b.name)).map(u => u.name));

// forEach - no result, just side effects
users.forEach(u => console.log("Processing", u.name));`,
        quiz: [
          {
            question: "What does arr.map(fn) return?",
            options: ["The original array", "A new transformed array", "A boolean", "undefined"],
            correctIndex: 1,
            explanation: "map() returns a new array with each element transformed by the callback.",
          },
          {
            question: "Which method returns the FIRST element matching a condition?",
            options: ["filter", "find", "some", "map"],
            correctIndex: 1,
            explanation: "find() returns the first match (or undefined). filter() returns all matches as an array.",
          },
        ],
      },
      {
        slug: "reduce",
        title: "Reduce",
        description: "Fold an array down to a single value.",
        content: `reduce is the most powerful (and most intimidating) array method. It folds an array down into a single value - a number, object, string, or even another array.

**Signature**
array.reduce(callback, initialValue);
callback(accumulator, currentItem, index, array)

**The accumulator**
The accumulator carries the running result between steps. The initialValue starts it; the callback's return becomes the next accumulator.

**Examples**
Sum: [1,2,3].reduce((total, n) => total + n, 0)   // 6
Max: [1,2,9].reduce((m, n) => Math.max(m, n))     // 9

**Counting or grouping into an object**
tests.reduce((count, t) => { count[t.status]++;  ... })

**Flattening arrays**
[[1,2],[3,4]].reduce((flat, row) => flat.concat(row), [])  // [1,2,3,4]

**reduce vs the alternatives**
For totals, reduce is the classic tool. Sometimes map+filter is clearer; use reduce when you need to build ONE result value (like a counter or grouped object).

**Automation note**
- Counting passed/failed/skipped tests
- Grouping test results by suite
- Computing averages/report summaries`,
        codeExample: `// Sum with reduce
const scores = [85, 90, 72, 95];
const total = scores.reduce((sum, s) => sum + s, 0);
console.log("Total:", total, "Average:", total / scores.length);

// Max value
const nums = [3, 11, 7, 9];
console.log("Max:", nums.reduce((m, n) => (n > m ? n : m)));

// Group array into an object - count by status
const results = ["pass", "fail", "pass", "skip", "pass"];
const counts = results.reduce((acc, r) => {
  acc[r] = (acc[r] || 0) + 1;
  return acc;
}, {});
console.log("Status counts:", counts);

// Flatten nested arrays
const rows = [[1, 2], [3, 4], [5]];
console.log("Flattened:", rows.reduce((flat, row) => flat.concat(row), []));

// Build a lookup map: id -> user
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Bob" },
];
const byId = users.reduce((map, u) => {
  map[u.id] = u.name;
  return map;
}, {});
console.log("Lookup:", byId);`,
        quiz: [
          {
            question: "What does the accumulator do in reduce()?",
            options: [
              "Starts the loop",
              "Carries the running result between steps",
              "Counts iterations",
              "Nothing",
            ],
            correctIndex: 1,
            explanation: "The accumulator carries the result and the callback's return value becomes the next accumulator.",
          },
          {
            question: "[1,2,3].reduce((t, n) => t + n, 0) gives?",
            options: ["6", "0", "[1,2,3]", "3"],
            correctIndex: 0,
            explanation: "reduce sums the array: 0+1+2+3 = 6.",
          },
        ],
      },
    ],
  },
  {
    slug: "objects",
    title: "Objects & ES6 Features",
    icon: "box",
    description: "Objects, destructuring, optional chaining, Map/Set.",
    level: "intermediate",
    lessons: [
      {
        slug: "object-basics",
        title: "Object Basics",
        description: "Creating, reading, updating, and iterating objects.",
        content: `Objects store key-value pairs. This is the most common data structure in JavaScript: JSON responses, configs, test data - all objects.

**Creating objects**
const user = { name: "Ana", age: 30, active: true };

**Reading values**
user.name          // dot notation
user["age"]        // bracket notation (for dynamic keys)

**Writing values**
user.age = 31;
user["role"] = "tester";   // add new key

**Deleting**
delete user.active;

**Checking keys**
"name" in user        // true
Object.keys(user)     // ["name","age",...]
Object.values(user)
Object.entries(user)  // [[key,value], ...]

**Iteration**
for (const key in user) { ... }      // keys
Object.entries(user).forEach(([k,v]) => ...)

**Shorthand and computed keys**
const a = 1; { a } === { a: 1 }
const key = "dynamic"; { [key]: 5 }

**Automation note**
API payloads and responses are objects. Read values, copy with spread, and spread-merge configs.`,
        codeExample: `// Create + read + write
const user = { name: "Ana", age: 30 };
user.age = 31;
user.role = "tester";
console.log(user);

// Bracket notation for dynamic keys
const field = "age";
console.log(user[field]);

// Keys / values / entries
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// Iterate entries
for (const [key, value] of Object.entries(user)) {
  console.log(key + ": " + value);
}

// Spread to copy / merge
const base = { browser: "chromium", headless: true };
const extra = { timeout: 5000 };
const config = { ...base, ...extra, headless: false };
console.log("Merged config:", config);

// Delete
delete config.timeout;
console.log("After delete:", config);`,
        quiz: [
          {
            question: 'user["age"] is which way of accessing a value?',
            options: ["Dot notation", "Bracket notation", "Index notation", "Chaining"],
            correctIndex: 1,
            explanation: "Bracket notation (user['age']) works with strings and dynamic keys.",
          },
          {
            question: "How do you make a copy of an object with one field changed?",
            options: [
              "Mutate the original",
              "Object.delete(user, field)",
              "Spread: { ...user, age: 31 }",
              "JSON.copy(user)",
            ],
            correctIndex: 2,
            explanation: "Spread creates a copy; override a field after the spread.",
          },
        ],
      },
      {
        slug: "destructuring",
        title: "Destructuring",
        description: "Pulling values out of objects and arrays neatly.",
        content: `Destructuring unpacks values from objects and arrays into variables with clean syntax.

**Object destructuring**
const user = { name: "Ana", age: 30 };
const { name, age } = user;

**Rename keys**
const { name: userName } = user;

**Defaults**
const { missing = "fallback" } = user;

**Rest**
const { age, ...rest } = user;  // rest = { name }

**Array destructuring**
const [first, second] = [1, 2];
Swap: [a, b] = [b, a];
Ignore items: const [, second] = list;

**Function parameters**
function logUser({ name, age }) { ... }  // pass the object

**return multiple values**
function stats(arr) { return [min, max]; }
const [min, max] = stats(nums);

**Automation note**
Extract what you need from API responses: const { id, token } = await login();`,
        codeExample: `// Object destructuring
const user = { name: "Ana", age: 30, email: "a@test.com" };
const { name, age } = user;
console.log("Name:", name, "Age:", age);

// Rename + default
const { name: userName, address = "unknown" } = user;
console.log(userName, "|", address);

// Rest pattern
const { age: _, ...rest } = user;
console.log("Rest (no age):", rest);

// Array destructuring
const coords = [10, 20];
const [x, y] = coords;
console.log("x:", x, "y:", y);

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log("Swapped:", a, b);

// Destructure in function params
function describe({ name, age }) {
  return name + " is " + age;
}
console.log(describe(user));

// Return and destructure multiple values
function minMax(nums) {
  return [Math.min(...nums), Math.max(...nums)];
}
const [min, max] = minMax([3, 8, 1, 9]);
console.log("min/max:", min, max);`,
        quiz: [
          {
            question: "What does { a, b } = obj unpack?",
            options: [
              "a and b as variables from obj's properties",
              "A new object",
              "An array",
              "Nothing - invalid syntax",
            ],
            correctIndex: 0,
            explanation: "Object destructuring creates variables named after the object's keys.",
          },
          {
            question: "How do you swap two variables destructively?",
            options: [
              "[a, b] = [b, a]",
              "swap(a, b)",
              "a = b; b = a",
              "You cannot",
            ],
            correctIndex: 0,
            explanation: "Array destructuring assigns [b, a] back into a and b simultaneously.",
          },
        ],
      },
      {
        slug: "optional-chaining-nullish",
        title: "Optional Chaining & Nullish Coalescing",
        description: "Safe deep access and fallback values (ES2020).",
        content: `Two modern safety features that prevent painful 'cannot read property of undefined' errors.

**Optional chaining**
Instead of:
if (user && user.profile && user.profile.avatar) { ... }

Write:
user?.profile?.avatar

- ?. stops and returns undefined if anything before it is null/undefined
- Works with calls too: obj.method?.()
- Works with indexes: arr?.[0]

**Nullish coalescing**
const value = maybeNull ?? "fallback";
- ?? returns the right side ONLY when left is null OR undefined
- Unlike || which also catches 0, "" and false

**Use them together**
const name = user?.profile?.name ?? "Anonymous";

**Warning**
?? cannot mix with || or && without parentheses.

**Automation note**
Deeply nested API responses are full of optional fields. These operators make extraction safe and tidy.`,
        codeExample: `// Nested object that may lack fields
const user = {
  name: "Ana",
  profile: { avatar: "a.png" },
  // no 'settings' key
};

// Old verbose style
if (user && user.settings && user.settings.theme) {
  console.log("Theme:", user.settings.theme);
} else {
  console.log("No theme (old style)");
}

// Optional chaining
console.log("Avatar:", user?.profile?.avatar);
console.log("Theme:", user?.settings?.theme ?? "default");

// ?? vs || difference
const zero = 0;
console.log("|| gives:", zero || "fallback");   // fallback (0 is falsy)
console.log("?? gives:", zero ?? "fallback");   // 0 (only null/undefined)

const empty = "";
console.log("|| gives:", empty || "fallback");
console.log("?? gives:", empty ?? "fallback");

// Deep API response access
const response = {
  data: { orders: [{ total: 42.5 }] },
};
const firstTotal = response?.data?.orders?.[0]?.total ?? 0;
console.log("First order total:", firstTotal);`,
        quiz: [
          {
            question: "What does ?. do when the chain hits a null value?",
            options: [
              "Throws an error",
              "Returns undefined and stops",
              "Returns null",
              "Retries",
            ],
            correctIndex: 1,
            explanation: "Optional chaining short-circuits to undefined instead of throwing.",
          },
          {
            question: "What does ?? fallback to when the left side is 0?",
            options: ["fallback", "0", "true", "undefined"],
            correctIndex: 1,
            explanation: "?? only triggers on null/undefined, so 0 is kept.",
          },
        ],
      },
      {
        slug: "map-set",
        title: "Map & Set",
        description: "Keyed collections with any value types.",
        content: `Map and Set are modern collections that improve on objects and arrays.

**Map - key-value with any key types**
Map keys can be objects or any type (object keys are strings). Order is preserved.

Creating:     const m = new Map();
Setting:      m.set("a", 1);
Getting:      m.get("a");
Checking:     m.has("a")
Deleting:     m.delete("a")
Size:         m.size
Iterating:    for (const [k, v] of m) { ... }
Create from pairs: new Map([["a",1],["b",2]])

**Map vs object**
- Keys: any type vs string-only
- Order: guaranteed vs mostly
- Performance: better for frequent add/delete
- JSON: objects serialize; Maps do not (convert manually)

**Set - unique values only**
Adding dupes is a no-op.
new Set([1,2,2,3])  ->  {1,2,3}
size, has, delete, add, clear.

**Automation note**
- Sets: dedupe a list of IDs or link texts
- Maps: cache lookup tables keyed by real objects`,
        codeExample: `// Map basics
const prices = new Map([
  ["apple", 1.2],
  ["banana", 0.8],
]);
prices.set("orange", 1.5);
prices.has("apple");
prices.delete("banana");
console.log("Size:", prices.size, "| apple:", prices.get("apple"));

// Iterate entries
for (const [key, value] of prices) {
  console.log("Item:", key, "->", value);
}

// Map with object keys
const clickCounts = new Map();
const btnA = { id: "a" };
const btnB = { id: "b" };
clickCounts.set(btnA, 3);
clickCounts.set(btnB, 1);
console.log("btnA clicks:", clickCounts.get(btnA));

// Set basics - deduplication
const withDuplicates = [1, 2, 2, 3, 3, 3];
const unique = new Set(withDuplicates);
console.log("Unique values:", [...unique]);

// Real-world: dedupe collected link texts
const links = ["Home", "Home", "About", "Contact", "Home"];
const seen = new Set();
for (const text of links) {
  if (!seen.has(text)) {
    seen.add(text);
    console.log("New link found:", text);
  }
}`,
        quiz: [
          {
            question: "What is unique about Map keys?",
            options: [
              "They must be strings",
              "They can be any type, including objects",
              "They must be numbers",
              "They are auto-sorted",
            ],
            correctIndex: 1,
            explanation: "Maps accept any value type as a key.",
          },
          {
            question: "What does new Set([1,1,2,2,3]) contain?",
            options: ["[1,1,2,2,3]", "[1,2,3]", "{1,2,2,3}", "It errors"],
            correctIndex: 1,
            explanation: "Sets only store unique values, duplicates are dropped.",
          },
        ],
      },
      {
        slug: "arrays-of-objects",
        title: "Arrays of Objects",
        description: "Table-like data: filter, sort, map real records.",
        content: `Most automation data looks like an array of objects - API results, table rows, config lists. This lesson combines everything you have learned.

**Shape**
const users = [
  { id: 1, name: "Ana", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
];

**Common operations**
- Get all names: users.map(u => u.name)
- Filter: users.filter(u => u.role === "admin")
- Find by id: users.find(u => u.id === 2)
- Sort: [...users].sort((a,b) => a.name.localeCompare(b.name))
- Total of a field: users.reduce((t,u) => t + u.age, 0)
- Grouping: reduce into a map/object by key

**Chaining**
data
  .filter(user => user.active)
  .map(user => user.email)
  .sort();

**Immutable updates**
const updated = users.map(u => u.id === 1 ? { ...u, role: "editor" } : u);

**Automation note**
Assert against this data: expect(sortedNames).toEqual(expectedNames). Build tests that consume JSON-like rows.`,
        codeExample: `const users = [
  { id: 1, name: "Ana", role: "admin", age: 30 },
  { id: 2, name: "Bob", role: "user", age: 17 },
  { id: 3, name: "Cid", role: "admin", age: 25 },
];

// Extract a column
console.log("Names:", users.map(u => u.name));

// Filter by role
const admins = users.filter(u => u.role === "admin");
console.log("Admins:", admins.map(u => u.name));

// Find single record
console.log("User 2:", users.find(u => u.id === 2).name);

// Sort by name
const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted names:", sorted.map(u => u.name));

// Total age with reduce
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log("Total age:", totalAge);

// Chained pipeline
const adultEmails = users
  .filter(u => u.age >= 18)
  .map(u => u.name.toLowerCase() + "@test.com")
  .sort();
console.log("Adult emails:", adultEmails);

// Immutable update of one record
const updated = users.map(u => (u.id === 2 ? { ...u, age: 18 } : u));
console.log("Bob's new age:", updated.find(u => u.id === 2).age);`,
        quiz: [
          {
            question: "Which pipeline gets ALL admins' emails?",
            options: [
              "users.filter(u => u.role === 'admin').map(u => u.email)",
              "users.map(u => u.email).filter(u => u.role)",
              "users.find(u => u.role)",
              "users.reduce(u => u.email)",
            ],
            correctIndex: 0,
            explanation: "Filter by role first, then map to the email column.",
          },
          {
            question: "How do you update ONE record immutably in an array?",
            options: [
              "arr[0].role = 'x'",
              "arr.map(u => u.id === 1 ? { ...u, role: 'x' } : u)",
              "arr = other",
              "update(arr, 1)",
            ],
            correctIndex: 1,
            explanation: "map returns a new array; spread keeps other fields; conditional picks the target.",
          },
        ],
      },
    ],
  },
  {
    slug: "async",
    title: "Async JavaScript",
    icon: "alert-triangle",
    description: "Promises, async/await, fetch, and the event loop.",
    level: "advanced",
    lessons: [
      {
        slug: "async-basics",
        title: "Asynchronous Basics",
        description: "Sync vs async, timers, and why async matters.",
        content: `JavaScript runs on a single thread. Asynchronous code lets it wait for slow operations (network, timers, file I/O) without blocking everything else.

**Synchronous**
const a = doThing();       // waits until doThing finishes
console.log(a);

**Asynchronous**
setTimeout(() => console.log("later"), 1000);  // doesn't block
console.log("now");

**Examples of async operations**
- Network requests (fetch, API calls)
- Timers (setTimeout, setInterval)
- Reading files
- Waiting for page elements in Playwright
- Database queries

**How the engine does it**
The call stack runs sync code. Async callbacks go to a task queue. The event loop keeps pushing callbacks back onto the stack when it is free. So 'later' always runs after 'now'.

**Result**
- Code never blocks the UI/browser
- Order is NOT guaranteed without coordination
- Coordination is done with callbacks, then Promises, then async/await

**Automation note**
Playwright locators are async: await page.locator().click(). Errors in async code need await or the failure looks confusing.`,
        codeExample: `// Sync order
console.log("1. sync start");

// Async - runs later
setTimeout(() => {
  console.log("3. timer finished (async)");
}, 0);
setTimeout(() => {
  console.log("4. another timer (1s)");
}, 1000);

// Immediate microtask (Promises) - runs BEFORE timers
Promise.resolve().then(() => {
  console.log("2. microtask (Promise)");
});

console.log("1b. sync end — after this the event loop starts");
// Expected order: sync start, sync end, microtask, timers`,
        quiz: [
          {
            question: "Why does JavaScript need async code?",
            options: [
              "To run on multiple threads",
              "To wait for slow operations without blocking",
              "To make code shorter",
              "It does not need it",
            ],
            correctIndex: 1,
            explanation: "Async lets single-threaded JS wait on I/O/network without freezing.",
          },
          {
            question: "Which runs first: a Promise microtask or a setTimeout callback?",
            options: [
              "Promise microtask",
              "setTimeout callback",
              "They run together",
              "Random order",
            ],
            correctIndex: 0,
            explanation: "Microtasks (Promises) are processed before the next macrotask (timer).",
          },
        ],
      },
      {
        slug: "promises",
        title: "Promises",
        description: "then, catch, finally, and promise chaining.",
        content: `A Promise represents a value that may be available now, later, or never. It lets you write async flows without nested callbacks.

**States**
- pending: work in progress
- fulfilled: value ready (onFulfilled handlers)
- rejected: error occurred (onRejected handlers)

**Creating**
const p = new Promise((resolve, reject) => {
  // do work
  if (ok) resolve(value);
  else reject(new Error("fail"));
});

**Consuming**
p
  .then(value => ...)
  .catch(err => ...)
  .finally(() => ...);   // clean-up, always runs

**Chaining**
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => render(posts))
  .catch(err => showError(err));

**Combinators**
Promise.all([a, b])       // wait for ALL, fail fast on rejection
Promise.allSettled([a, b])// wait for ALL, report each result
Promise.race([a, b])      // first to settle

**Promise.all in automation**
Run several API assertions in parallel, or wait for multiple elements.

**then value vs callback hell**
Promises flatten nesting: one level instead of pyramids.`,
        codeExample: `// Create a promise
function wait(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

wait(100, "ready")
  .then((msg) => {
    console.log("First:", msg);
    return wait(100, "second step");
  })
  .then((msg) => console.log("Then:", msg))
  .catch((err) => console.log("Error:", err))
  .finally(() => console.log("Cleanup ran"));

// Rejection handling
function mayFail(flag) {
  return new Promise((resolve, reject) => {
    if (flag) resolve("success");
    else reject(new Error("boom"));
  });
}
mayFail(false)
  .then(console.log)
  .catch((err) => console.log("Caught:", err.message));

// Promise.all - parallel, one result array
Promise.all([
  wait(50, { id: 1, name: "Ana" }),
  wait(80, { id: 2, name: "Bob" }),
]).then(([first, second]) => {
  console.log("All resolved:", first.name, second.name);
});

// Promise.allSettled - reports failures too
Promise.allSettled([mayFail(true), mayFail(false)]).then((results) =>
  results.forEach((r) => console.log("Settled:", r.status))
);`,
        quiz: [
          {
            question: "What are the three states of a Promise?",
            options: [
              "pending, fulfilled, rejected",
              "start, middle, end",
              "open, closed, error",
              "wait, done, done",
            ],
            correctIndex: 0,
            explanation: "A promise starts pending and settles to fulfilled or rejected.",
          },
          {
            question: "What does Promise.all do?",
            options: [
              "Waits for all promises, failing fast on rejection",
              "Runs them one at a time",
              "Returns only the first result",
              "Cancels all promises",
            ],
            correctIndex: 0,
            explanation: "Promise.all resolves when every promise resolves; it rejects as soon as one rejects.",
          },
        ],
      },
      {
        slug: "async-await",
        title: "async / await",
        description: "Promise syntax sugar that reads like sync code.",
        content: `async/await is modern JavaScript's way to consume promises without .then chains. It reads top-to-bottom like regular code while staying non-blocking.

**Syntax**
async function loadUser() {
  const user = await fetchUser();
  console.log(user);
}

- async before a function makes it ALWAYS return a Promise
- await pauses the function until the promise settles (does NOT block the thread)
- await only works INSIDE async functions (or top-level in modules)

**Error handling with try/catch**
async function safe() {
  try {
    const user = await fetchUser();
  } catch (err) {
    console.error("failed:", err);
  }
}

**Parallel execution**
const [a, b] = await Promise.all([fetchA(), fetchB()]);

**Not needed to await every time**
const p = fetchA();          // starts now
const q = fetchB();          // runs concurrently
const a = await p; const b = await q;

**Sequential vs parallel**
await a(); await b();       // ~sum of times
Promise.all                    // ~max of times

**Automation note**
Playwright's whole API is async: await page.goto(...), await expect(...).toBeVisible(). Structure test steps as async functions.`,
        codeExample: `// Simulated async helpers
const wait = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

// async function returns a Promise
async function getUser() {
  await wait(50, null);
  return { id: 1, name: "Ana" };
}

getUser().then((u) => console.log("user:", u.name));

// async/await style + try/catch
async function runTest() {
  try {
    console.log("Test: navigating...");
    const page = await wait(100, { title: "Login" });
    const input = await wait(50, "admin");
    console.log("Title:", page.title, "| Input:", input);
    return "PASSED";
  } catch (err) {
    console.log("FAILED:", err.message);
    return "FAILED";
  }
}

// Run it and use the returned promise value
runTest().then((result) => console.log("Result:", result));

// Sequential vs parallel
async function timing() {
  const t0 = Date.now();
  // parallel: both start together
  const [a, b] = await Promise.all([wait(100, "A"), wait(100, "B")]);
  console.log("Parallel took ~" + (Date.now() - t0) + "ms:", a, b);
}
timing();`,
        quiz: [
          {
            question: "What does the await keyword do?",
            options: [
              "Blocks the entire program",
              "Pauses the async function until the promise settles",
              "Creates a new thread",
              "Converts sync to async",
            ],
            correctIndex: 1,
            explanation: "await suspends the async function only, not the whole thread.",
          },
          {
            question: "Where can await be used?",
            options: [
              "Anywhere",
              "Only inside async functions (or modules)",
              "Only in callbacks",
              "Only in arrow functions",
            ],
            correctIndex: 1,
            explanation: "await is only valid inside async functions or top-level module code.",
          },
        ],
      },
      {
        slug: "fetch-apis",
        title: "fetch & Working with Real APIs",
        description: "HTTP requests, JSON handling, and error checks.",
        content: `fetch is the built-in function for making HTTP requests in the browser and modern Node.

**Basic GET that returns JSON**
const response = await fetch(url);
const data = await response.json();

**Important checks**
- fetch only rejects on NETWORK errors, NOT on HTTP errors (404, 500)
- Always check response.ok first:
  if (!response.ok) throw new Error("HTTP " + response.status);

**Other methods**
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ana" }),
});

**Common verbs for API testing**
GET - read
POST - create
PUT/PATCH - update
DELETE - remove

**JSON conversion**
JSON.stringify(obj)  -> string
JSON.parse(str)      -> object

**Automation note**
This is the heart of API testing. Flow:
1. Build request
2. Assert response.status
3. Parse JSON body
4. Assert fields in the body
5. Verify side effects

**Query params**
fetch(url + "?" + new URLSearchParams({ q: "x" }))`,
        codeExample: `// NOTE: this runs in the CodeEditor sandbox. A real URL may be blocked
// by CORS, so we simulate a fetch against a local function instead.

function fakeApi(url, options) {
  return new Promise((resolve) => {
    const ok = url.includes("users");
    setTimeout(() => {
      resolve({
        ok,
        status: ok ? 200 : 404,
        async json() {
          return ok ? { users: ["Ana", "Bob"] } : { error: "not found" };
        },
      });
    }, 100);
  });
}

async function apiTest() {
  const url = "https://api.test.com/users?id=1";
  const response = await fakeApi(url);

  // Real code does: if (!response.ok) throw ...
  if (!response.ok) {
    console.log("HTTP error:", response.status);
    return;
  }
  const data = await response.json();
  console.log("Status:", response.status);
  console.log("Total users:", data.users.length);

  // Assert the payload
  const expected = 2;
  console.log("Count matches:", data.users.length === expected);
  console.log("Has 'Ana':", data.users.includes("Ana"));
}

apiTest();

// JSON conversions - transform objects to strings and back
const payload = { name: "Ana", role: "admin" };
const asString = JSON.stringify(payload);
console.log("Stringified:", asString);
console.log("Parsed back:", JSON.parse(asString));`,
        quiz: [
          {
            question: "When does fetch reject its promise?",
            options: [
              "On HTTP 404",
              "On network-level failures only",
              "On HTTP 500",
              "When JSON is missing",
            ],
            correctIndex: 1,
            explanation: "fetch only rejects on network errors. HTTP statuses must be checked via response.ok.",
          },
          {
            question: "What does JSON.stringify do?",
            options: [
              "Parses text into objects",
              "Turns an object into a JSON string",
              "Validates an API",
              "Formats code",
            ],
            correctIndex: 1,
            explanation: "stringify serializes to a string; parse is the reverse.",
          },
        ],
      },
      {
        slug: "event-loop",
        title: "The Event Loop",
        description: "How single-threaded JS stays responsive.",
        content: `The event loop is the runtime engine that lets single-threaded JavaScript handle many async operations. Interviewers love this topic.

**The pieces**
1. Call stack - runs functions one at a time (LIFO)
2. Web APIs / Node APIs - timers, fetch, DOM events live here
3. Task queue (macrotasks) - setTimeout, setInterval, I/O callbacks
4. Microtask queue - Promise handlers (.then, await continuation), queueMicrotask

**The loop in action**
while (stack !== empty || queues !== empty) {
  1. Run the call stack clean
  2. Run ALL microtasks (Promise callbacks update state, then DOM rerenders)
  3. Run ONE macrotask (next timer callback)
  4. Repeat
}

**Key ordering rule**
Microtasks drain BEFORE the next macrotask. So:
console.log(1);
Promise.resolve().then(() => console.log(2));
setTimeout(() => console.log(3), 0);
// prints 1, 2, 3

**Why it matters**
- Ordering of test logs and awaits
- Understanding why small delays sometimes fix flaky tests
- Explaining blocking vs non-blocking

**Blocking the loop**
A long synchronous for loop in call stack blocks everything - that is what 'blocking' means. Async only helps when you don't block the stack.`,
        codeExample: `console.log("1 - sync");

setTimeout(() => console.log("5 - macrotask timer"), 0);

Promise.resolve("2 - microtask").then((msg) => console.log(msg));

queueMicrotask(() => console.log("3 - another microtask"));

setTimeout(() => console.log("6 - second macrotask"), 0);

console.log("4 - sync end");
// Expected output order:
// 1, 4, 2, 3, 5, 6
// Why: all sync first, then all microtasks, then macrotasks one at a time.

// Practical: heavy sync work blocks timers
function blockForClick() {
  const start = Date.now();
  while (Date.now() - start < 200) {
    // busy loop - blocks the event loop for 200ms
  }
  console.log("Blocking task finished");
}

setTimeout(() => console.log("timer ran at ~200ms"), 50);
console.log("Blocking started...");
blockForClick();
console.log("Sync continues after block; timer queued and runs next");`,
        quiz: [
          {
            question: "Which runs before the other: microtasks or macrotasks?",
            options: [
              "Macrotasks always",
              "Microtasks drain before the next macrotask",
              "They alternate equally",
              "Randomized",
            ],
            correctIndex: 1,
            explanation: "The event loop drains the whole microtask queue before each macrotask.",
          },
          {
            question: "What lives on the call stack?",
            options: [
              "Timers",
              "Functions currently executing",
              "Promise callbacks waiting",
              "HTTP responses",
            ],
            correctIndex: 1,
            explanation: "The call stack holds only what is currently executing.",
          },
        ],
      },
    ],
  },
  {
    slug: "classes",
    title: "Classes & Prototypes",
    icon: "book-open",
    description: "Classes, inheritance, prototypes, and JSON.",
    level: "advanced",
    lessons: [
      {
        slug: "class-basics",
        title: "Class Basics",
        description: "Class syntax, constructors, methods, and static.",
        content: `Classes are a modern way to write constructor-style objects. Underneath they still use prototypes, but the syntax is cleaner.

**Declaring a class**
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi " + this.name;
  }
}

- constructor runs once when you do new User("Ana")
- this refers to the future instance
- Methods are shared, not copied per instance

**Using it**
const user = new User("Ana");
user.name;        // "Ana"
user.greet();     // "Hi Ana"

**Fields (public class fields)**
class User {
  role = "user";          // set on every instance
  constructor(name) { this.name = name; }
}

**Getters and setters**
get fullName() { return this.first + " " + this.last; }

**Static members**
Static belongs to the class, not the instance:
User.compare(a, b) -> User.compare is called, not user.compare.

**Automation note**
Page Object Model: class LoginPage { constructor(page){...} async login(user){...} } - each page is a class, each action a method.`,
        codeExample: `class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.role = "user";
  }
  get fullName() {
    return this.first + " " + this.last;
  }
  greet() {
    return "Hello, " + this.fullName;
  }
  static compare(a, b) {
    return a.first.localeCompare(b.first);
  }
}

// Instance usage
const ana = new User("Ana", "Ionescu");
console.log(ana.greet());
console.log("Role:", ana.role);

// Getter acts like a property
console.log("Full name:", ana.fullName);

// Static: called on the class
const bob = new User("Bob", "Popa");
const sorted = [ana, bob].sort(User.compare);
console.log("Sorted:", sorted.map((u) => u.first).join(", "));

// instanceof check
console.log("Is instance:", ana instanceof User);

// Page-object-style class sketch (automation analogy)
class LoginPage {
  constructor() {
    this.logins = 0;
  }
  async fillCredentials(user, pass) {
    this.logins++;
    return "filled " + user;
  }
  async submit() {
    return this.logins > 0 ? "submitted" : "nothing to submit";
  }
}
const page = new LoginPage();
page.fillCredentials("admin", "secret").then((r) => console.log("step:", r));
page.submit().then((r) => console.log("next:", r));`,
        quiz: [
          {
            question: "What runs when you create new User('Ana')?",
            options: ["A static method", "The constructor", "A getter", "Nothing"],
            correctIndex: 1,
            explanation: "new invokes the constructor to set up the instance.",
          },
          {
            question: "When should you use a static method?",
            options: [
              "When it needs instance data",
              "When it relates to the class, not instances",
              "For every method",
              "Never",
            ],
            correctIndex: 1,
            explanation: "Static methods live on the class itself and don't receive this.",
          },
        ],
      },
      {
        slug: "class-inheritance",
        title: "Class Inheritance",
        description: "extends, super, and method overriding.",
        content: `Inheritance lets a class reuse and extend another class. This maps perfectly to automation: a base Test class with setup, specialized page classes extending a common base.

**extends**
class Animal {
  constructor(name) { this.name = name; }
  speak() { return "..." }
}
class Dog extends Animal {
  speak() { return "Woof"; }
}

**super**
- super(...args) in the constructor: call the parent constructor
- super.method() in a method: call the parent version

**Example hierarchy**
class BasePage {
  constructor(url) { this.url = url; }
  open() { return "opening " + this.url; }
}
class LoginPage extends BasePage {
  constructor() { super("/login"); }
  submit() { return "Logging in"; }
}

**Why overwrite?**
Override to change behavior, then optionally call super to keep parent behavior.

**Check instanceof**
loginPage instanceof BasePage  // true (inheritance chain)

**Automation note**
- BasePage defines common steps (navigation, wait)
- Page classes extend it and add page-specific actions
- A base Playwright test class can hold hooks and logging`,
        codeExample: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}

class Dog extends Animal {
  speak() {
    return this.name + " barks";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.lives = 9;
  }
  speak() {
    return super.speak() + " - meow";
  }
}

const dog = new Dog("Rex");
const cat = new Cat("Mimi");
console.log(dog.speak());
console.log(cat.speak());

// Inheritance chain + instanceof
console.log("dog is Animal:", dog instanceof Animal);
console.log("cat is Animal:", cat instanceof Animal);

// Automation-flavored: base page + specialized page
class BasePage {
  constructor(url) {
    this.url = url;
  }
  open() {
    return "Navigating to " + this.url;
  }
}
class LoginPage extends BasePage {
  constructor() {
    super("https://app.test/login");
  }
  open() {
    return super.open() + " (with auth cookie)";
  }
}
const login = new LoginPage();
console.log(login.open());`,
        quiz: [
          {
            question: "What does super() do in a subclass constructor?",
            options: [
              "Deletes the parent",
              "Calls the parent constructor",
              "Creates a new class",
              "Nothing",
            ],
            correctIndex: 1,
            explanation: "super(...) invokes the parent class constructor for proper initialization.",
          },
          {
            question: "loginPage instanceof BasePage is true when?",
            options: [
              "Always",
              "When LoginPage extends BasePage",
              "Never",
              "Only in strict mode",
            ],
            correctIndex: 1,
            explanation: "instanceof follows the prototype chain, so subclasses match their base.",
          },
        ],
      },
      {
        slug: "prototypal-inheritance",
        title: "Prototypal Inheritance",
        description: "The prototype chain that powers everything.",
        content: `Classes are syntax sugar. Underneath, JavaScript uses prototypes: objects inherit from other objects through a chain.

**Every object has a prototype**
Roughly: {}.__proto__ -> Object.prototype
In modern code, use Object.getPrototypeOf(obj) instead of __proto__.

**The chain**
const user = { name: "Ana" };
user.toString();   // found on Object.prototype via the chain

- user -> User.prototype -> Object.prototype -> null
- Property lookup walks the chain until found or object is null.

**Object.create(proto)**
const base = { greet() { return "hi"; } };
const child = Object.create(base);
child.greet();   // inherits from base

**Adding methods (legacy pattern)**
function User(name) { this.name = name; }
User.prototype.sayHi = function () { return "Hi " + this.name; };

**constructor proper**
User.prototype.constructor === User;  // set a new prototype's constructor back

**Modern take**
You rarely write prototypes by hand. But knowing the chain explains how arrays get .map, how classes inherit, and how 'this' behaves - and it is a classic interview topic.`,
        codeExample: `// Prototype chain demonstration
const user = { name: "Ana" };
console.log("has toString via chain:", typeof user.toString === "function");
console.log("proto is Object.prototype:", Object.getPrototypeOf(user) === Object.prototype);

// Object.create - inherit from a plain object
const base = {
  greet() {
    return "Hi, " + this.name;
  },
};
const member = Object.create(base);
member.name = "Bob";
console.log(member.greet()); // method found on the prototype

// Legacy constructor + prototype method
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function () {
  return "Hello " + this.name;
};
const a = new User("Ana");
console.log(a.sayHi());
console.log("method lives on User.prototype:", a.sayHi.name === "sayHi");

// The full chain from an array
const nums = [1, 2, 3];
console.log("arrays get map via chain:",
  Array.prototype.map === nums.map === null ||
  Object.getPrototypeOf(nums) === Array.prototype);

// Own properties vs inherited
const ownUser = { name: "Ana" };
console.log("own property:", Object.hasOwn(ownUser, "name"));      // true
console.log("inherited:", Object.hasOwn(ownUser, "toString"));     // false`,
        quiz: [
          {
            question: "When you access an object property, JS checks:",
            options: [
              "Only the object itself",
              "The object, then up the prototype chain",
              "Only the prototype",
              "The global object",
            ],
            correctIndex: 1,
            explanation: "Lookup goes up the prototype chain until found or reaching null.",
          },
          {
            question: "Where do array methods like map come from?",
            options: [
              "Each array copies them",
              "Array.prototype via the chain",
              "The global scope",
              "The array literal",
            ],
            correctIndex: 1,
            explanation: "Arrays inherit their methods from Array.prototype.",
          },
        ],
      },
      {
        slug: "json",
        title: "Working with JSON",
        description: "Serialization, parsing, and JSON in automation.",
        content: `JSON is the language of web APIs and config files. Almost every automation task involves parsing or producing JSON.

**Shape reminder**
{ "name": "Ana", "age": 30, "tags": ["a", "b"] }
Keys must be double-quoted. No comments, no trailing commas, no undefined/functions.

**The built-ins**
JSON.stringify(value)  -> JSON string
JSON.parse(text)       -> value
JSON.stringify(value, null, 2)  -> pretty-printed (indent 2)

**gotchas of stringify**
- undefined and functions are dropped inside objects
- Dates become strings
- NaN and Infinity become null

**Comparing two JSON payloads**
JSON.stringify(a) === JSON.stringify(b)  // ORDER matters - brittle. Prefer deep-equality tools like expect(a).toEqual(b) in Playwright.

**JSON in automation**
- API request bodies: JSON.stringify(payload)
- Response bodies: res.json()
- Config files: import/parse userData.json
- Snapshots / fixtures

**safe parse**
try { JSON.parse(text) } catch (err) { ... } - malformed JSON throws.`,
        codeExample: `const user = {
  name: "Ana",
  age: 30,
  tags: ["admin", "automation"],
  active: true,
};

// Stringify variants
console.log("Compact:", JSON.stringify(user));
console.log("Pretty:");
console.log(JSON.stringify(user, null, 2));

// Parse back
const text = '{"name":"Bob","age":25}';
const parsed = JSON.parse(text);
console.log("Parsed name:", parsed.name);

// Drops undefined / functions
const tricky = { a: 1, fn() {}, b: undefined };
console.log("Clean JSON:", JSON.stringify(tricky)); // only "a"

// Deep compare two payloads
const first = { id: 1, name: "Ana" };
const second = JSON.parse(JSON.stringify(first));
console.log("Deep equal via stringify:", JSON.stringify(first) === JSON.stringify(second));

// Safe parse
function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    return { error: "invalid json" };
  }
}
console.log("Bad JSON handled:", safeParse("{oops").error);

// Config-style usage
const apiPayload = JSON.stringify({ user: "admin", remember: true });
console.log("Request body:", apiPayload);`,
        quiz: [
          {
            question: "How do you pretty-print JSON?",
            options: [
              "JSON.stringify(value, null, 2)",
              "JSON.pretty(value)",
              "JSON.stringify()",
              "console.json(value)",
            ],
            correctIndex: 0,
            explanation: "The third argument of stringify sets the indentation.",
          },
          {
            question: "What happens to JSON.parse on malformed input?",
            options: [
              "Returns null",
              "Throws an error (wrap in try/catch)",
              "Returns the text",
              "Ignores the problem",
            ],
            correctIndex: 1,
            explanation: "Invalid JSON throws a SyntaxError, so guard it.",
          },
        ],
      },
    ],
  },
  {
    slug: "dom",
    title: "DOM & Browser APIs",
    icon: "layout-grid",
    description: "Selecting, building, and testing page elements.",
    level: "intermediate",
    lessons: [
      {
        slug: "dom-basics",
        title: "DOM Basics",
        description: "window, document, and the DOM tree.",
        content: `The DOM (Document Object Model) is a tree representation of the HTML page. JavaScript manipulates this tree to make pages dynamic.

**The entry points**
- window: the browser window (global object in browsers)
- document: the whole page - the tree root
- document.title, document.URL, document.querySelector(...)

**Nodes and elements**
The tree is made of nodes. Elements (tags) are the nodes you care about most: div, button, input, form...

**Parent and children**
div has parentElement, children, childNodes, firstElementChild, lastElementChild.

**Traversal example**
document.body.children  // direct child elements
tag.parentElement       // one level up

**Key difference vs other languages**
You don't 'return' the DOM; browsers give you live references. If the page changes, the old reference may become stale.

**Automation note**
Playwright queries the DOM behind the scenes. Knowing the DOM helps you write better selectors and understand why locators behave oddly. The tools used here (querySelector) mirror what CSS selectors do.`,
        codeExample: `// NOTE: In the CodeEditor sandbox there is NO real browser DOM.
// We simulate a tiny DOM-ish structure to practice the ideas.
const doc = {
  title: "Example Page",
  body: {
    tagName: "BODY",
    children: [
      { tagName: "HEADER", id: "top", textContent: "Site header" },
      { tagName: "MAIN", id: "content", children: [
        { tagName: "BUTTON", id: "submit-btn", textContent: "Submit" },
        { tagName: "INPUT", id: "email", value: "a@test.com" },
      ]},
    ],
  },
};

console.log("Title:", doc.title);

// Walk the "tree"
const body = doc.body;
for (const child of body.children) {
  console.log("Top-level tag:", child.tagName + " (id=" + child.id + ")");
}

// Nested access: find then descend
const main = body.children.find((c) => c.tagName === "MAIN");
const button = main.children.find((c) => c.tagName === "BUTTON");
console.log("Button text:", button.textContent, "| id:", button.id);

// Reading a form value (like reading a field in a test)
const input = main.children.find((c) => c.tagName === "INPUT");
console.log("Email field holds:", input.value);`,
        quiz: [
          {
            question: "What does the DOM represent?",
            options: [
              "A database",
              "The HTML page as a tree of nodes",
              "The server",
              "A network protocol",
            ],
            correctIndex: 1,
            explanation: "The DOM models the page as an object tree you can manipulate.",
          },
          {
            question: "What is the root of the page tree?",
            options: ["window", "document", "body", "html"],
            correctIndex: 1,
            explanation: "document is the entry point; html is a node inside it.",
          },
        ],
      },
      {
        slug: "dom-selection",
        title: "Selecting Elements",
        description: "querySelector, getElementById, and going further.",
        content: `Selection is how you grab elements to act on them. The tools you use here are the CSS selector engine that automation frameworks also use.

**The main APIs**
document.getElementById("x")
document.querySelector(".class")     // first match
document.querySelectorAll("li.task") // all matches -> NodeList
document.querySelector(".list li")   // nested descendant selector

**Selectors in detail**
- #id
- .class
- tag
- [attribute="value"]
- :checked, :disabled, :nth-child(2)
- .parent > .child (direct),  .parent .child (descendant)

**From an element**
const box = document.querySelector(".box");
box.querySelector("span")   // search WITHIN box

**querySelectorAll result**
A NodeList - use for...of or Array.from() to get real array methods (map/filter).

**Automation note**
Playwright uses the same CSS selectors. Data-testid attributes like desktop testing gold standard: [data-testid="submit"] is robust against UI changes.`,
        codeExample: `// Simulated DOM matching for practice (real code uses querySelector)
function findMany(nodes, test) {
  return nodes.flatMap((n) => findManyRec(n, test));
}
function findManyRec(node, test) {
  const hits = (node.children || []).filter(test);
  return hits.concat((node.children || []).flatMap((c) => findManyRec(c, test)));
}

const doc = {
  children: [
    { tagName: "DIV", id: "header", className: "page-head", children: [
      { tagName: "BUTTON", className: "btn", textContent: "Menu" },
    ]},
    { tagName: "UL", className: "task-list", children: [
      { tagName: "LI", className: "task", textContent: "Task 1" },
      { tagName: "LI", className: "task done", textContent: "Task 2" },
    ]},
  ],
};

// Like querySelectorAll("li.task")
const tasks = findMany(doc.children, (n) => n.tagName === "LI" && n.className.includes("task"));
console.log("LI tasks:", tasks.map((t) => t.textContent));

// Like querySelector(".task.done")
const done = tasks.find((t) => t.className.includes("done"));
console.log("Done task:", done.textContent);

// In a real browser you would write:
// const list = document.querySelectorAll("li.task");
// const doneAlt = document.querySelector(".task.done");
console.log("Selector loaded: li.task found " + tasks.length + " item(s)");
console.log("Selector loaded: .task.done found " + (done ? 1 : 0) + " item(s)");`,
        quiz: [
          {
            question: "Which selector matches elements with id='submit'?",
            options: [".submit", "#submit", "submit", "id=submit"],
            correctIndex: 1,
            explanation: "# tells querySelector to match an ID.",
          },
          {
            question: "What does querySelectorAll return?",
            options: [
              "A single element",
              "A NodeList of matches",
              "An array always",
              "An HTML string",
            ],
            correctIndex: 1,
            explanation: "querySelectorAll returns a NodeList (array-like).",
          },
        ],
      },
      {
        slug: "dom-manipulation",
        title: "Changing the DOM",
        description: "Creating, editing, and removing elements.",
        content: `Once you have an element, you can read and change it. These APIs let you build dynamic UIs - and also let automation read page state.

**Reading and setting text**
element.textContent        // set or get plain text
element.innerHTML          // set or get HTML (avoid for user input - XSS risk)
element.value              // form field value

**CSS classes and styles**
element.classList.add("active")
element.classList.remove("active")
element.classList.toggle("active")
element.classList.contains("hidden")
element.style.display = "none"
element.getAttribute("href") / element.setAttribute(...)

**Structure**
element.append(newChild)   // add at end
element.prepend(newChild)  // add at start
child.remove()             // delete the node

**Creating elements**
const el = document.createElement("li");
el.textContent = "new item";
list.append(el);

**Data-* attributes**
element.dataset.testid = "submit-btn";   // mixes well with automation

**Automation note**
Frameworks like Playwright essentially perform these reads: textContent, value, class attributes, dataset.testid. Assert against these:
expect(await element.textContent()).toBe("Submit");`,
        codeExample: `// Simulating the DOM mutation APIs for practice
function makeEl(tag, text) {
  return { tagName: tag, textContent: text || "", classList: new Set(), children: [] };
}

const list = makeEl("UL", "");
list.children.push(makeEl("LI", "one"));
list.children.push(makeEl("LI", "two"));

// Read text of first item
console.log("First item:", list.children[0].textContent);

// Add a child (like append)
list.children.push(makeEl("LI", "three"));
console.log("Items now:", list.children.map((c) => c.textContent).join(", "));

// Edit in place (setAttribute-style)
list.children[1].textContent = "two-updated";
console.log("After edit:", list.children.map((c) => c.textContent).join(", "));

// Class toggling (like classList)
list.classList.add("task-list", "visible");
list.classList.delete("visible");
console.log("Class list:", [...list.classList].join(" "));

// Remove an element (like remove())
list.children.splice(0, 1);
console.log("After remove:", list.children.map((c) => c.textContent).join(", "));

// In a real browser you write:
// document.querySelector("li").textContent = "changed";
// document.querySelector("li").classList.add("active");
// document.createElement("li"); list.append(li);
console.log("Browser flow: createElement -> append -> textContent");`,
        quiz: [
          {
            question: "Which property safely sets plain text on an element?",
            options: ["innerHTML", "textContent", "value", "style"],
            correctIndex: 1,
            explanation: "textContent treats the string as text (innerHTML risks XSS).",
          },
          {
            question: "How do you add a CSS class to an element?",
            options: [
              "element.class = 'x'",
              "element.classList.add('x')",
              "element.setClass('x')",
              "class(element, 'x')",
            ],
            correctIndex: 1,
            explanation: "classList.add manages classes safely.",
          },
        ],
      },
      {
        slug: "events",
        title: "Events",
        description: "click, submit, listeners, bubbling, delegates.",
        content: `Events fire when users interact with the page. Understanding them helps you test interactions reliably.

**Common events**
mouse: click, dblclick, mouseover, mousedown, mouseup
keyboard: keydown, keyup, keypress
form: submit, change, input, focus, blur
page: DOMContentLoaded, load, scroll, resize

**Adding listeners**
element.addEventListener("click", handler);
element.addEventListener("click", handler, { once: true });
Inline: onclick=... (avoid mixing with automation)

**Removing**
element.removeEventListener("click", handler);

**The event object**
args.handler receives the event (e):
- e.target - element clicked
- e.type - "click"
- e.preventDefault() - stop default action (form submit)
- e.stopPropagation() - stop bubbling

**Two event helpers (legacy but still seen)**
onclick="fn()"  and  element.onclick = fn  - replace on with 'on' + type.

**Bubbling**
An event fires on its target, then bubbles UP through parents. Useful for delegated handling.

**Automation note**
Automation triggers real events: page.click('button') dispatches a click the browser can observe. Add event listeners to spy during tests, or to prove a callback fires: set a flag when clicked.`,
        codeExample: `// Simulating the event-object pattern for practice
class FakeEventTarget {
  constructor() {
    this.handlers = {};
  }
  addEventListener(type, fn) {
    (this.handlers[type] = this.handlers[type] || []).push(fn);
  }
  dispatch(type) {
    (this.handlers[type] || []).forEach((fn) =>
      fn({ type, target: this, preventDefault() {}, stopPropagation() {} })
    );
  }
}

const button = new FakeEventTarget();
let clickedCount = 0;
let lastTarget = null;

button.addEventListener("click", (e) => {
  clickedCount++;
  lastTarget = e.type;
});

button.dispatch("click");
button.dispatch("click");
console.log("Clicks heard:", clickedCount, "| last event type:", lastTarget);

// preventDefault stops form submission
const form = new FakeEventTarget();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submit intercepted (default prevented)");
});
form.dispatch("submit");

// Real browser equivalent:
// document.querySelector("#btn").addEventListener("click", handler);
// form.addEventListener("submit", (e) => e.preventDefault());
// In a test: page.click("button#submit") fires the same "click" event.`,
        quiz: [
          {
            question: "What does e.preventDefault() do?",
            options: [
              "Stops the script",
              "Cancels the browser's default action",
              "Deletes the element",
              "Stops the event loop",
            ],
            correctIndex: 1,
            explanation: "preventDefault cancels default behavior like form submission.",
          },
          {
            question: "What is event bubbling?",
            options: [
              "Events firing multiple times",
              "An event traveling from target up to ancestors",
              "Slower events",
              "Events going down the tree only",
            ],
            correctIndex: 1,
            explanation: "After firing on the target, events bubble up through ancestors.",
          },
        ],
      },
      {
        slug: "forms",
        title: "Forms",
        description: "Filling, reading, and validating form data.",
        content: `Forms are everywhere in automation: login, checkout, search. You need to fill them and read their values.

**Getting a field**
const email = document.querySelector("#email");
email.value = "a@test.com";         // set
const val = email.value;            // read

**input types you will automate**
- text / email / password: value property
- checkbox / radio: field.checked
- select (dropdown):
  const sel = document.querySelector("select");
  sel.value = "opt2";               // set by value
  const chosen = sel.value;
- textarea: .value like inputs
- number / range: .value as string - convert with parseInt

**Events when filling**
Setting .value programmatically does NOT fire input events.
In automation frameworks like Playwright, fill() sets value AND fires the right events - which is why you should use the tool, not raw JS.

**Read the form state**
const disabled = btn.disabled;   // boolean
const required = input.required;
const formValid = form.checkValidity();

**Automation note**
The classic login flow test:
1. fill username + password
2. click submit
3. assert success message
4. read any persisted value`,
        codeExample: `// Simulated form values for practice
const form = {
  email: { value: "", checked: false },
  password: { value: "" },
  newsletter: { checked: false },
  plan: { value: "free" },
  submitDisabled: true,
};

// Fill fields (like fill("#email", "a@test.com"))
form.email.value = "a@test.com";
form.password.value = "secret123";
form.newsletter.checked = true;
form.plan.value = "pro";
form.submitDisabled = false;

console.log("Email:", form.email.value);
console.log("Newsletter checked:", form.newsletter.checked);
console.log("Plan selected:", form.plan.value);
console.log("Submit enabled:", !form.submitDisabled);

// Assert style - a test assertion
const expectedEmail = "a@test.com";
console.log("Email matches:", form.email.value === expectedEmail);

// Convert number-ish values
const quantity = "3";
console.log("Quantity + 1 =", parseInt(quantity, 10) + 1);

// Real browser flow:
// await page.locator("#email").fill("a@test.com");
// await page.locator("#plan").selectOption("pro");
// await page.locator("button[type=submit]").click();`,
        quiz: [
          {
            question: "Which property holds a checkbox's state?",
            options: ["value", "checked", "selected", "state"],
            correctIndex: 1,
            explanation: "checked is the boolean state for checkboxes and radios.",
          },
          {
            question: "Why use fill() instead of setting .value directly?",
            options: [
              "It's faster",
              "It fires the proper events automation needs",
              "It's the only way",
              "No reason",
            ],
            correctIndex: 1,
            explanation: "fill() sets the value and dispatches input/change events.",
          },
        ],
      },
      {
        slug: "window-object",
        title: "Window Object",
        description: "The global object, navigation, and browser APIs.",
        content: `window is the browser's global object. Every global variable and function becomes a property of window. It holds the location, history, and many browser APIs.

**Globals live on window**
window.alert, window.console, window.setTimeout, window.fetch
globalThis === window  (the universal name in Node too)

**Location** (page URL tools)
window.location.href        // full URL
window.location.pathname    // "/login"
window.location.search      // "?id=5"
window.location.reload()    // reload
window.location.href = url  // navigate

**History**
window.history.back(), history.forward(), pushState for SPA routes

**Useful browser APIs**
window.localStorage / sessionStorage
storage.setItem(key, value); storage.getItem(key); storage.removeItem(key)

**Timers**
setTimeout(fn, ms) / clearTimeout(id)
setInterval(fn, ms) / clearInterval(id)

**Window-sizing**
window.innerWidth, window.innerHeight, window.matchMedia() for responsive tests

**Automation note**
- Check URL after navigation: expect(page).toHaveURL(/login/)
- Test responsive layouts via viewport width
- Seed/clear localStorage between tests`,
        codeExample: `// Simulated window-ish object to demonstrate concepts
const windowLike = {
  innerWidth: 1280,
  location: { href: "https://app.test/login?id=1", pathname: "/login", search: "?id=1" },
  localStorage: new Map(),
};

console.log("Size:", windowLike.innerWidth + "px wide");
console.log("Path:", windowLike.location.pathname);
console.log("Query:", windowLike.location.search);
console.log("Full URL:", windowLike.location.href);

// localStorage-like usage
windowLike.localStorage.set("token", "abc123");
console.log("Stored token:", windowLike.localStorage.get("token"));
windowLike.localStorage.delete("token");
console.log("After clear:", windowLike.localStorage.get("token") || "none");

// URL building with query params (typical automation task)
function buildUrl(base, params) {
  const qs = Object.entries(params)
    .map(([k, v]) => k + "=" + v)
    .join("&");
  return qs ? base + "?" + qs : base;
}
console.log("Built:", buildUrl("https://api.test.com/users", { page: 2, size: 25 }));

// Timers
let count = 0;
const timer = setInterval(() => {
  count++;
  console.log("Interval tick", count);
  if (count === 2) clearInterval(timer);
}, 50);`,
        quiz: [
          {
            question: "What is the window object in browsers?",
            options: [
              "The global object holding most browser APIs",
              "A DOM element",
              "A style rule",
              "The printer",
            ],
            correctIndex: 0,
            explanation: "window is the global object; globals and browser APIs live on it.",
          },
          {
            question: "Which window object holds the page URL?",
            options: ["window.history", "window.location", "window.document", "window.navigator"],
            correctIndex: 1,
            explanation: "location holds href, pathname, search.",
          },
        ],
      },
    ],
  },
  {
    slug: "modules",
    title: "Modules & Tooling",
    icon: "file-text",
    description: "ES modules, bundlers, and package managers.",
    level: "intermediate",
    lessons: [
      {
        slug: "modules",
        title: "ES Modules",
        description: "import/export and why modules exist.",
        content: `Modules split code into files. Each file can export values and import others. This is how serious projects and test suites are organized.

**Why modules**
- Reuse code across files
- Isolate scope (no global pollution)
- Clear dependencies
- Enforce boundaries between test helpers, pages, and data

**Exporting**
export const HOST = "https://api.test.com";
export function login(user) { ... }
export default class LoginPage { ... }      // one default per file
Export list: export { HOST, login, LoginPage };

**Importing**
import { HOST, login } from "./api.js";
import LoginPage from "./pages/login.js";   // default import
import * as api from "./api.js";            // namespace: api.HOST

**Aliases**
import { login as signIn } from "./api.js";

**Rules**
- Top-level only (imports can't sit inside if blocks)
- Static: the browser/linker sees imports before running
- Modern ESM in the browser and Playwright projects
- .js/.mjs/.ts extensions; package.json type: module

**CommonJS (legacy but everywhere)**
const api = require("./api");
module.exports = { ... };

**Automation note**
Auto flow: helpers in one file, pages in another, tests import both. Clean imports make big suites maintainable.`,
        codeExample: `// Simulating module exports/imports with a tiny module registry
// (Real projects use import/export at the file level.)

const registry = {};

function define(name, exports) {
  registry[name] = exports;
}

function use(name) {
  return registry[name];
}

// Simulated file: api.js
define("api", {
  HOST: "https://api.test.com",
  login: (user) => "Logging in as " + user,
});

// Simulated file: login-page.js
define("LoginPage", {
  default: { submit: () => "submitted" },
});

// Consumer (simulates the import statements)
const { HOST, login } = use("api");
const LoginPage = use("LoginPage").default;

console.log("Host:", HOST);
console.log(login("admin"));

async function runTest() {
  console.log(await LoginPage.submit());
}
runTest();

// In a real project:
// import { HOST, login } from "./api.js";
// import LoginPage from "./pages/login.js";`,
        quiz: [
          {
            question: "When is a module's code executed?",
            options: [
              "On demand",
              "Once, when the module is first imported",
              "Never",
              "In strict mode only",
            ],
            correctIndex: 1,
            explanation: "ES modules are evaluated once on first import, then cached.",
          },
          {
            question: "How do you import a default export?",
            options: [
              "import * as x",
              "import x from './file.js'",
              "import { x }",
              "require(default)",
            ],
            correctIndex: 1,
            explanation: "Default imports use the bare import name without braces.",
          },
        ],
      },
      {
        slug: "dynamic-imports",
        title: "Dynamic Imports",
        description: "Loading modules on demand at runtime.",
        content: `Dynamic imports load code when you need it, not at startup. This improves startup time and enables lazy loading.

**Syntax**
const mod = await import("./api.js");
mod.login("admin");

- returns a Promise that resolves to the module namespace
- can use variables in the path (not possible with static import)
- works in browsers and Node
- imported modules are cached after first load

**Why dynamic**
- Only load heavy code (PDF libs, charts) when the feature opens
- Code-splitting: bundlers split into chunks loaded on demand
- Loading test helpers optionally in automation
- Selecting between implementations (mock vs real service) at runtime

**In automation**
- Choose adapter: const api = condition ? await import("./mock.js") : await import("./real.js");
- Reduce test boot time for huge helper libraries

**Compare**
Static: import { helper } from "./h.js";  - always loaded, fastest to use
Dynamic: await import("./h.js")           - loaded on demand, async

**Errors**
A failed dynamic import rejects the promise - wrap in try/catch if the module may be missing.`,
        codeExample: `// Simulating a lazy-loadable helper module
const moduleStore = {
  "./format.js": {
    formatPrice: (n) => "$" + n.toFixed(2),
    currency: "USD",
  },
};

// Dynamic import equivalent (returns a Promise)
function dynamicImport(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (moduleStore[path]) resolve(moduleStore[path]);
      else reject(new Error("module not found: " + path));
    }, 30);
  });
}

function needsFormatting() {
  return true; // imagine this depends on a flag
}

async function main() {
  if (needsFormatting()) {
    // Lazy: only load the formatter if we actually need it
    const fmt = await dynamicImport("./format.js");
    console.log("Loaded on demand:", fmt.formatPrice(9.9));
    console.log("Currency:", fmt.currency);
  } else {
    console.log("Module never loaded - faster startup");
  }

  // Handling a missing module
  try {
    await dynamicImport("./missing.js");
  } catch (err) {
    console.log("Caught:", err.message);
  }
}
main();

// Real browser/Node equivalent:
// const fmt = await import("./format.js");
// fmt.formatPrice(9.9);`,
        quiz: [
          {
            question: "What does dynamic import return?",
            options: [
              "The module value",
              "A Promise resolving to the module namespace",
              "void",
              "A string",
            ],
            correctIndex: 1,
            explanation: "import() returns a Promise for the module namespace object.",
          },
          {
            question: "When is dynamic import useful?",
            options: [
              "Always",
              "To load heavy code only when needed",
              "To avoid all imports",
              "Only in Node",
            ],
            correctIndex: 1,
            explanation: "Lazy loading improves startup and enables code splitting.",
          },
        ],
      },
      {
        slug: "package-managers",
        title: "Package Managers",
        description: "npm, yarn, pnpm and the node_modules ecosystem.",
        content: `Package managers install and manage third-party libraries. Nearly every automation project uses npm (often wrapped by the tool itself).

**npm basics**
- npm init    create a project (makes package.json)
- npm install pkg
- npm install -D pkg   dev dependency (Playwright installs like this)
- npm install         install everything from package-lock.json
- npm run scriptName  run a script from package.json 'scripts'
- npm uninstall pkg

**package.json key parts**
- dependencies: runtime deps
- devDependencies: build/test/tooling deps (-D)
- scripts: named commands
  "scripts": { "test:all": "npx playwright test" }
- engines / type / version fields

**Lockfile**
package-lock.json pins exact versions for reproducible installs. Always commit it.

**Semantic versioning**
^1.2.3  -> compatible with 1.x
~1.2.3  -> patch-level only
1.2.3   -> exact
"latest" - avoid in CI

**node_modules**
Where packages land - never commit it. Regenerate with npm ci in CI.

**Other managers**
yarn: yarn add / yarn
pnpm: fast, disk-efficient, symlinked store

**Automation note**
Playwright: npm init playwright@latest creates test config, tests folder, and package.json scripts for you.`,
        codeExample: `// What a package.json looks like (parsed here for practice)
const packageJson = {
  name: "my-test-suite",
  version: "1.0.0",
  type: "module",
  scripts: {
    test: "playwright test",
    "test:smoke": "playwright test --grep @smoke",
    "test:headed": "playwright test --headed",
  },
  dependencies: {},
  devDependencies: {
    "@playwright/test": "^1.49.0",
    typescript: "^5.5.0",
  },
};

console.log("Test command:", packageJson.scripts.test);
console.log("Smoke command:", packageJson.scripts["test:smoke"]);
console.log("Playwright version pin:", packageJson.devDependencies["@playwright/test"]);

// Pinning rules (semver)
const range = "^1.49.0";
console.log("Range type:", range.startsWith("^") ? "compatible with 1.x" : "exact");

// Lockfile protects against surprises
console.log("package-lock.json committed? Always yes in real repos.");

// In a terminal you'd run:
// npm install -D @playwright/test
// npx playwright test --grep @smoke`,
        quiz: [
          {
            question: "What does npm install -D pkg do?",
            options: [
              "Installs a runtime dependency",
              "Installs a dev dependency",
              "Deletes the package",
              "Runs tests",
            ],
            correctIndex: 1,
            explanation: "-D adds the package to devDependencies.",
          },
          {
            question: "Why commit package-lock.json?",
            options: [
              "So installs are reproducible",
              "It's required for git",
              "For faster downloads",
              "It hides secrets",
            ],
            correctIndex: 0,
            explanation: "The lockfile pins exact dependency versions.",
          },
        ],
      },
      {
        slug: "module-bundlers",
        title: "Module Bundlers",
        description: "What bundlers do: Vite, Webpack, Rollup, esbuild.",
        content: `Bundlers take many source files and turn them into optimized files the browser can load quickly. Modern front-end builds use them for every project.

**The problem they solve**
Browsers historically loaded many JS files with slow requests. Bundlers combine and minify them into few files (or many small chunks).

**What a bundler does**
- Resolves imports between files
- Tree-shakes: drops unused exports (only matters for static imports)
- Minifies: shortens names, strips whitespace/comments
- Code-splits: splits dynamic imports into async chunks
- Transpiles: converts TypeScript and new syntax to compatible output
- Manages assets: CSS, images, fonts

**Popular bundlers**
- Vite: fast dev server, modern default (built on Rollup) - beginner friendly
- Webpack: the classic, most config-heavy, many legacy projects
- Rollup: small libs focused, ES module friendly
- esbuild: extremely fast, used inside Vite and others

**Automation connection**
- Playwright tests use your app's built output
- Testing Storybook or Vite dev servers: Vite serves the bundle
- Some frameworks build test bundles with the same tooling

**Dev vs build**
Dev: fast, unminified, hot reload (Vite dev server)
Build: processed, minified, split, ready for deployment`,
        codeExample: `// Simulate tree-shaking + bundling on a record of modules
const modules = {
  "./utils.js": { exports: ["formatPrice", "deprecatedFn"], used: ["formatPrice"] },
  "./api.js": { exports: ["login", "getUsers"], used: ["login"] },
};

for (const [file, mod] of Object.entries(modules)) {
  const treeShaken = mod.exports.filter((name) => mod.used.includes(name));
  console.log(
    file,
    "-> keeps",
    treeShaken.join(", "),
    "| drops",
    mod.exports.filter((name) => !mod.used.includes(name)).join(", ")
  );
}

// Simulate minification: shrink a function
function minify(source) {
  return source.replace(/\s+/g, " ").trim().slice(0, 60);
}
const rawSource = "function formatPrice(price) { return price.toFixed(2); }";
console.log("Minified-ish:", minify(rawSource) + "...");

// Real-life commands (context only, not run here):
// npx vite build        (bundles + minifies your app)
// npx playwright test   (tests the served app)`,
        quiz: [
          {
            question: "What is tree-shaking?",
            options: [
              "Cutting down unused exports",
              "Planting pixels",
              "Restarting servers",
              "Renaming files",
            ],
            correctIndex: 0,
            explanation: "Bundlers drop unused exported code to shrink output.",
          },
          {
            question: "Which bundler is the modern fast default?",
            options: ["Webpack", "Vite", "Gulp", "Babel"],
            correctIndex: 1,
            explanation: "Vite is the fast, modern default for new projects.",
          },
        ],
      },
      {
        slug: "ecmascript",
        title: "ECMAScript Evolution",
        description: "The standard and the features you should know.",
        content: `ECMAScript (ES) is the language standard JavaScript implements. The yearly releases add features you'll meet in repos and interviews.

**ES2015 (ES6) - the big one**
let/const, arrow functions, template literals, classes, destructuring, default/rest/spread, Modules, Map/Set, Promises (ES6 later), for...of

**ES2016-ES2017**
Array.prototype.includes (2016)
async/await, Object.values/entries (2017)

**ES2018**
rest/spread for objects, Promise.finally

**ES2019**
Array.prototype.flat, flatMap, Object.fromEntries, optional catch binding

**ES2020**
Optional chaining (?.), nullish coalescing (??), BigInt, Promise.allSettled, dynamic import, globalThis

**ES2021**
String.replaceAll, numeric separators (1_000), Promise.any

**ES2022**
Class fields (private #), static blocks, top-level await in modules

**ES2023**
Array.findLast, toSorted/toReversed/toSpliced (non-mutating)

**How they arrive**
Modern browsers implement quickly; Node versions gate what test frameworks can use. TypeScript often widens availability by transpiling.

**Automation note**
Playwright's Node version determines the JS you can write in configs and helpers. Check engines.node versions when features look unsupported.`,
        codeExample: `// Spot-it: which ES year added these?
const features = [
  ["arrow functions", "ES6 / ES2015"],
  ["async/await", "ES2017"],
  ["? and ??", "ES2020"],
  ["replaceAll", "ES2021"],
  ["private # fields", "ES2022"],
  ["toSorted (non-mutating)", "ES2023"],
];
for (const [feature, year] of features) {
  console.log(feature, "->", year);
}

// Modern-feature quick demo
const nums = [3, 1, 2];
console.log("toSorted (safe):", nums.toSorted((a, b) => a - b));
console.log("original unchanged:", nums);

const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log("fromEntries round-trip:", Object.fromEntries(entries));

const price = 1_000_000;
console.log("Numeric separators:", price);

let text = "foo foo bar";
console.log("replaceAll:", text.replaceAll("foo", "baz"));`,
        quiz: [
          {
            question: "Which version was the 'big' ES update?",
            options: ["ES5", "ES2015/ES6", "ES2020", "ES2023"],
            correctIndex: 1,
            explanation: "ES6/ES2015 added most of modern syntax (arrows, classes, modules).",
          },
          {
            question: "What do non-mutating toSorted() methods avoid?",
            options: [
              "Returning new arrays",
              "Changing the original array",
              "Slow sorting",
              "Type errors",
            ],
            correctIndex: 1,
            explanation: "toSorted returns a copy, leaving the original untouched.",
          },
        ],
      },
    ],
  },
  {
    slug: "advanced",
    title: "Advanced & Interview Prep",
    icon: "sparkles",
    description: "Regex, generators, legacy code, and hot questions.",
    level: "advanced",
    lessons: [
      {
        slug: "regex-intro",
        title: "Intro to Regular Expressions",
        description: "Test().test, exec, and pattern building.",
        content: `Regular expressions match patterns in text. For automation they are used to validate formats, extract values, and write match assertions (like toMatch in Playwright).

**Create a regex**
const re = /ab+c/;        // literal
const re2 = new RegExp("ab+c");

**Core building blocks**
Sequence:    abc matches "abc"
Character classes: [a-z], [0-9], [a-zA-Z], [aeiou]
Ranges and negated: [^0-9] = any non-digit
Shorthand:   \\d  digit,  \\w  word char,  \\s  whitespace,  .  any char
Quantifiers: *  (0+),  +  (1+),  ?  (0 or 1),  {2,4}  (between 2 and 4)
Anchors:     ^ start,  $ end
Groups:      (abc)  captures,  (?:abc)  non-capturing,  (a|b)  alternation
Escapes:     \\\\.  matches a literal dot

**Methods on the regex**
re.test(str)     // boolean - does it match somewhere?
re.exec(str)     // array of match + groups, or null

**Methods on the string**
str.match(re)    // first match info (or all with /g)
str.replace(re, repl)
str.split(re)

**Common flags**
g global, i ignore case, m multiline, u unicode

**Automation note**
- expect(page).toHaveURL(/.login/)  - regex in Playwright assertions
- Extract an invoice code: /INV-(\\\\d{5})/
- Format checks for emails, phones, dates, and IDs

**Watch out**
Write regex for the general pattern, not brittle page-specific text. Keep them short and readable - long regexes are maintenance traps.`,
        codeExample: `// test: does the string match somewhere?
const emailRe = /^[a-z0-9.-]+@[a-z0-9]+\\.[a-z]{2,}$/i;
console.log("Valid email:", emailRe.test("ana@test.com"));
console.log("Rejects no-at:", emailRe.test("anatest.com"));

// Date pattern
const dateRe = /^\\d{4}-\\d{2}-\\d{2}$/;
console.log("Date ok:", dateRe.test("2026-09-21"));
console.log("Date no:", dateRe.test("21-09-2026"));

// Extract text with a capture group
const invoiceRe = /INV-(\\d{5})/;
const code = "Your invoice INV-12345 was paid";
const match = code.match(invoiceRe);
console.log("Captured number:", match ? match[1] : "no match");

// replace
const phones = "555-123-4567";
console.log("Masked:", phones.replace(/\\d{3}-\\d{3}-/, "***-***-"));

// split
const csv = "alpha;beta;gamma";
console.log("Split:", csv.split(/;/).join(" | "));

// Playwright-style: toHaveURL with a regex
const currentUrl = "https://app.test/login?tab=credentials";
console.log("URL path matches:", /.login/.test(currentUrl));`,
        quiz: [
          {
            question: "What does /^a/ test for?",
            options: [
              "Any a anywhere",
              "A string starting with a",
              "Exactly one a",
              "Two a's",
            ],
            correctIndex: 1,
            explanation: "^ anchors the match to the start of the string.",
          },
          {
            question: "Which method returns true/false for a match?",
            options: ["exec", "test", "match", "split"],
            correctIndex: 1,
            explanation: "RegExp.test() returns a boolean.",
          },
        ],
      },
      {
        slug: "generators",
        title: "Generator Functions",
        description: "function* and the yield protocol.",
        content: `Generators are functions you can pause and resume. They are advanced but show up in interview questions and power tools like async iterators and state machines.

**Syntax**
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
const it = counter();
it.next();  // { value: 1, done: false }
it.next();  // { value: 2, done: false }
...

**How yield works**
- calling a generator returns an iterator; the body does NOT run yet
- each next() runs until the next yield, returns its value
- when the body finishes, next() returns { value: undefined, done: true }

**Passing values back in**
you can send a value into next(sentValue) - it becomes the result of the paused yield.

**Delegation**
yield* anotherGenerator() yields values from another generator/iterable.

**Use cases**
- Infinite or large sequences (calculate on demand - memory friendly)
- Lazy data pipelines
- Advanced: async generators iterate paginated APIs one page at a time

**Never (rarely) needed in everyday automation**
But knowing them shows depth; the spread operator and for...of work with iterables, and arrays/strings/sets are iterable too.`,
        codeExample: `// Basic generator
function* counter() {
  yield "one";
  yield "two";
  yield "three";
}
const it = counter();
console.log(it.next().value);
console.log(it.next().value);

// Iterate with for...of (generators are iterable)
function* letters() {
  yield "a";
  yield "b";
  yield "c";
}
for (const l of letters()) {
  console.log("letter:", l);
}

// Lazy sequence - computes on demand (no big array needed)
function* range(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
let sum = 0;
for (const n of range(1, 5)) sum += n;
console.log("Sum 1..5:", sum);

// Delegation with yield*
function* combined() {
  yield* range(1, 2);
  yield* ["x", "y"];
}
console.log("Delegated:", [...combined()]);

// Spreading a generator (careful: it runs once)
console.log("Spreaded letters:", [...letters()].join("-"));`,
        quiz: [
          {
            question: "When does a generator's body start running?",
            options: [
              "At definition",
              "On the first .next() call",
              "After two yields",
              "Immediately",
            ],
            correctIndex: 1,
            explanation: "The body runs lazily, starting at the first next().",
          },
          {
            question: "What does yield do?",
            options: [
              "Returns a Promise",
              "Pauses and emits a value",
              "Deletes a value",
              "Ends the function",
            ],
            correctIndex: 1,
            explanation: "yield pauses the generator and outputs a value.",
          },
        ],
      },
      {
        slug: "legacy-var",
        title: "Legacy var & Hoisting",
        description: "The old way and its surprising behaviors.",
        content: `Before let/const, var was the only way to declare a variable. You'll meet it in legacy code and interview questions even though modern code avoids it.

**Behavior differences**
- var is function-scoped, not block-scoped
  if (true) { var x = 1; }  ->  x is visible OUTSIDE the if
- let/const are block-scoped
- var hoists: declared (as undefined) to the top of its function

**Hoisting examples**
console.log(a);   // undefined, NOT an error
var a = 5;

vs
console.log(b);   // ReferenceError (temporal dead zone)
let b = 5;

**var + closures loop bug**
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));   // 3 3 3  (shared i)
}
with let -> 0 1 2 (each iteration its own binding)

**Global gotcha**
var at top level adds a property to the global object (window). let/const do not.

**Redecaration**
var allows redeclaring the same name; let/const throw.

**Rule**
Write new code with let/const only. Use var-awareness when reading old scripts, jQuery-era code, and legacy bundlers.`,
        codeExample: `// var is function-scoped, not block-scoped
function demo() {
  if (true) {
    var inside = "visible here";
  }
  console.log("var leaks out of block:", inside);
}
demo();

// let is block-scoped (error if accessed outside)
function demo2() {
  if (true) {
    let block = "hidden";
  }
  try {
    console.log(block);
  } catch (err) {
    console.log("let is block-scoped:", err.message.includes("not defined"));
  }
}
demo2();

// Hoisting: var is hoisted as undefined
console.log("hoisted var:", hoistedVar);   // undefined
var hoistedVar = 10;

// let in the temporal dead zone
try {
  console.log(tdz);
} catch (err) {
  console.log("let before declaration throws:", err.name);
}
let tdz = 1;

// The classic loop bug fixed by let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let captured:", i), 0);
}`,
        quiz: [
          {
            question: "What scope does var use?",
            options: ["Block", "Function", "Global only", "Module"],
            correctIndex: 1,
            explanation: "var is function-scoped; only let/const are block-scoped.",
          },
          {
            question: "console.log(x); var x = 5; prints?",
            options: ["5", "undefined", "ReferenceError", "null"],
            correctIndex: 1,
            explanation: "var hoists the declaration (undefined) to the top.",
          },
        ],
      },
      {
        slug: "legacy-topics",
        title: "Legacy Topics",
        description: "Callbacks, IIFEs, jQuery, and old-style code.",
        content: `You'll inherit legacy test suites and frameworks. Recognizing old patterns prevents misdiagnosis when modern and legacy code clash.

**IIFE - immediately invoked function expression**
(function () { ... })();
Purpose: create a private scope before modules existed.
Modern equivalent: a module file.

**Classic 'submitting a form' callback world**
Old sites: inline onclick handlers, document.write, heavy global scope.

**Callback-based APIs (pre-Promise)**
fs.readFile(path, function (err, data) { ... });   // Node legacy
New: async/await.

**jQuery-era DOM**
$(document).ready(function () { ... });
$("#btn").on("click", fn)
Still present in older apps being automated.

**The global namespace problem**
Old scripts polluted window.x; modern modules keep names local.

**CommonJS exports**
const x = require("./x");  module.exports = x;
Still used in Node config files even today.

**Prototype-based inheritance**
function Car(color) { this.color = color; }
Car.prototype.go = function () { ... }   // pre-class pattern

**Rule of thumb**
Understand them enough to read, but write modern code. When automating legacy apps, prefer the framework's modern API over tricks that match the old page's era.`,
        codeExample: `// IIFE example (module before modules)
(function () {
  const secret = "module-scoped";
  console.log("IIFE runs, secret stays private:", secret.length + " chars");
})();
// secret is NOT accessible here (try to read it -> error)

// Prototype-based "class"
function Car(color) {
  this.color = color;
}
Car.prototype.go = function () {
  return "Driving a " + this.color + " car";
};
const myCar = new Car("red");
console.log(myCar.go());

// Callback-based node style (recreated for practice)
function readFileAsync(path, callback) {
  setTimeout(() => callback(null, "file contents of " + path), 30);
}
readFileAsync("config.json", (err, data) => {
  if (err) console.log("Error:", err);
  else console.log("Callback got:", data);
});

// jQuery-era expression (conceptual)
function onDocReady(fn) {
  if (document && document.readyState === "loading") {
    setTimeout(() => fn(), 10);
  } else {
    fn();
  }
}
onDocReady(() => console.log("ready handler simulated"));`,
        quiz: [
          {
            question: "Why were IIFEs used?",
            options: [
              "To run code on click",
              "To create a private scope before modules",
              "To make code sync",
              "To import modules",
            ],
            correctIndex: 1,
            explanation: "IIFEs immediately ran and isolated their scope.",
          },
          {
            question: "What replaced callback-heavy APIs?",
            options: [
              "More callbacks",
              "Promises and async/await",
              "setImmediate",
              "Closures",
            ],
            correctIndex: 1,
            explanation: "Promises and async/await flatten legacy callback flows.",
          },
        ],
      },
      {
        slug: "interview-prep",
        title: "Interview Questions",
        description: "The questions testers actually get asked.",
        content: `A quick-fire review of the classic questions on JavaScript-for-automation interviews. Know the one-line answer and one example for each.

**1. var vs let vs const**
var: function-scoped, hoisted, redeclarable, legacy.
let: block-scoped, mutable.
const: block-scoped, cannot be reassigned (objects still mutable).

**2. What is the event loop?**
Single-threaded runtime cycling the call stack, microtask queue, and macrotask queue. Microtasks (Promises) drain before macrotasks (timers).

**3. async/await vs Promise.then**
await reads like sync code and removes nesting; it's syntax sugar over promises. Both are promises underneath.

**4. What is this?**
The context a function runs in: the object it's called on, the global, or lexical scope for arrows (arrows have no own this).

**5. Closures**
Functions remember outer-scope variables after the outer function exits - used for state, factories, and private data.

**6. == vs ===**
== coerces types; === requires same type AND value. Always use ===.

**7. Deep vs shallow copy**
Spread {...} is shallow (nested objects shared). JSON round-trip or structuredClone give deep copies.

**8. Map vs Object**
Map: any keys, insertion order, better for heavy add/delete. Object: string/symbol keys, serializes to JSON.

**9. Promise.all vs allSettled**
all rejects fast on first rejection; allSettled waits for all and reports each result.

**10. Playwright vs Selenium (if asked)**
Playwright: auto-waiting, modern, fast, web-first assertions, scripting language support.

**Pattern for answers**
1. Define it in one line. 2. Give the automation relevance. 3. Small example.
Concise and correct beats long and rambling.`,
        codeExample: `// == vs ===
console.log("5 == '5' :", 5 == "5");    // true (coerced)
console.log("5 === '5':", 5 === "5");   // false (types differ)

// Default parameters + arrow (common whiteboard basics)
const greet = (name = "world") => "hello " + name;
console.log(greet());
console.log(greet("ana"));

// Shallow vs deep copy
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
shallow.nested.b = 99;            // shared with original!
console.log("shallow shares nested:", original.nested.b);

const deep = JSON.parse(JSON.stringify(original)); // deep copy
deep.nested.b = 1;
console.log("deep copy protects original:", original.nested.b);

// Classic async ordering (event loop) quiz
console.log("start");
setTimeout(() => console.log("timer"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output: start, end, promise, timer`,
        quiz: [
          {
            question: "What does === require?",
            options: [
              "Only same value",
              "Same type AND value",
              "Literals only",
              "Numbers only",
            ],
            correctIndex: 1,
            explanation: "=== is strict equality, checking type and value.",
          },
          {
            question: "Why is {...obj} a shallow copy?",
            options: [
              "It copies only top-level fields",
              "It copies everything deeply",
              "It never works",
              "It copies the reference",
            ],
            correctIndex: 0,
            explanation: "Spread copies top-level values; nested objects are shared.",
          },
        ],
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getLessonBySlug(topicSlug: string, lessonSlug: string): Lesson | undefined {
  const topic = getTopicBySlug(topicSlug);
  return topic?.lessons.find((l) => l.slug === lessonSlug);
}

export function getTotalLessons(): number {
  return topics.reduce((acc, t) => acc + t.lessons.length, 0);
}

export function getNextLesson(currentTopicSlug: string, currentLessonSlug: string): { topicSlug: string; lessonSlug: string } | null {
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    for (let j = 0; j < topic.lessons.length; j++) {
      if (topic.slug === currentTopicSlug && topic.lessons[j].slug === currentLessonSlug) {
        if (j + 1 < topic.lessons.length) {
          return { topicSlug: topic.slug, lessonSlug: topic.lessons[j + 1].slug };
        }
        if (i + 1 < topics.length) {
          return { topicSlug: topics[i + 1].slug, lessonSlug: topics[i + 1].lessons[0].slug };
        }
        return null;
      }
    }
  }
  return null;
}
