import type { Topic } from "../../types";

/** Advanced & Interview Prep - Regex, legacy JS, and the questions that decide your offer. */
export const topic: Topic = {
  slug: "advanced",
  title: "Advanced & Interview Prep",
  icon: "brain",
  description: "Regex, legacy JS, and the questions that decide your offer.",
  level: "advanced",
  lessons: [
    {
      slug: "regex-intro",
      title: "Intro to Regular Expressions",
      description: "Matching, groups, and the flags you actually need.",
      content: `A regular expression is a pattern language for finding text. Think of it like a search filter with rules instead of just typing the exact word. For automation testing, it helps you match parts of URLs, extract IDs, or check formats without writing many if checks.

**The three parts you actually use**
- A pattern is the rule you write, like /INV-\\d+/ for finding invoice numbers.
- Flags change how the search runs. g looks for every match. i ignores case. m works line by line.
- Methods run the pattern. test gives you a yes or no. match gives you the text back. replace, exec and split do their own jobs.

**test vs match vs matchAll**
- test is like asking "is this there?" It gives you true or false. Good for a quick check like "does this URL contain login".
- match is like asking "give me what you found". With no g flag it gives an array with the match and any captured groups, or null. With g it gives every match but drops the group details.
- matchAll gives every occurrence and keeps the groups for each one. Think of test as a yes or no, match as grabbing results, matchAll as grabbing all of them with detail.

**Character classes, ranges, and negation**
- A character class [abc] means "any one of these letters". Like picking one key from a small ring of keys.
- Ranges like [a-z] mean "any letter from a to z". [0-9] means any digit. Combine them like [a-zA-Z0-9].
- Negation [^a-z] means "anything except lowercase letters". It flips the rule inside the square brackets.

**Anchors, the multiline flag, and what \\d really means**
- ^ anchors to the start of a string. $ anchors to the end. They are like bookends. Without them a pattern can match in the middle.
- The m flag makes ^ and $ match the start and end of each line instead of the whole string. That matters when you read log output.
- \\d matches a digit. \\w matches a word character. \\s matches whitespace. Their negations are \\D, \\W and \\S.
- A common trap is that \\d is ASCII only. It matches 0-9 and nothing else. For international digits you may need the u flag.

**Quantifiers, greedy, and lazy**
- * means "zero or more". + means "one or more". ? means "zero or one".
- {n,m} means "at least n, at most m". {3} means exactly 3. {3,} means three or more.
- By default a quantifier is greedy. It grabs as much as it can. Put a second ? on it and it becomes lazy, grabbing as little as it still can.
- Concrete example: <.+> is greedy, so it grabs everything between the first < and the last >. <.+?> is lazy, so it grabs one tag at a time.

**Groups, alternation, and backreferences**
- ( ) creates a capturing group. You pull the part out with match[1], match[2], and so on.
- (?: ) is a non-capturing group. It groups for logic but does not save anything. Use it when you do not need to extract.
- | is alternation, which means "or". Wrap it in a group like (cat|dog)+ when you need one or more of either.
- \\1 is a backreference. It means "the same text you just captured". So (\\w+) \\1 matches "hello hello" but not "hello world".
- (?<name>...) is a named group. You read it as match.groups.name instead of counting brackets. Much easier to read in a long pattern.

**Flags and where regex earns its keep**
- g finds every match. i ignores case. m works per line. s lets the dot match a line break too.
- Escape any user input before you build a pattern from it. Someone typing .+ should give you a literal dot, not a wildcard.
- Catastrophic backtracking is the trap to watch. A nested shape like (a+)+ on a string that will never match tries so many combinations that the page hangs. Keep patterns specific and avoid nesting quantifiers.
- Regex is great for IDs, emails, dates and log patterns. It is overkill for a simple startsWith or one split. Use string methods when the rule is simple.`,
      codeExample: `// test gives true/false
const emailRe = /^[a-z0-9.-]+@[a-z0-9]+\\.[a-z]{2,}$/i;
console.log("Valid email:", emailRe.test("ana@test.com"));
console.log("Rejects no-at:", emailRe.test("anatest.com"));

// match with a capture group
const invoiceRe = /INV-(\\d{5})/;
const text = "Your invoice INV-12345 was paid";
const m = text.match(invoiceRe);
console.log("Captured number:", m ? m[1] : "no match");

// matchAll with global flag keeps groups for every occurrence
const tags = "<div>Hi</div><span>Bye</span>";
const tagRe = /<(\\w+)>(.*?)<\\/\\1>/g;
for (const found of tags.matchAll(tagRe)) {
  console.log("Tag:", found[1], "Text:", found[2]);
}

// replace, split, anchors
const phone = "555-123-4567";
console.log("Masked:", phone.replace(/\\d{3}-\\d{3}-/, "***-***-"));
const csv = "alpha;beta;gamma";
console.log("Split:", csv.split(/;/).join(" | "));
const startsA = /^a/i.test("Apple");
console.log("Starts with A:", startsA);`,
        quiz: [
          {
            question: "What does /^a/ test for?",
            options: ["Any a anywhere","A string starting with a","Exactly one a","Two a's"],
            correctIndex: 1,
            explanation: "^ anchors the match to the start of the string.",
          },
          {
            question: "Which method returns true/false for a match?",
            options: ["exec","test","match","split"],
            correctIndex: 1,
            explanation: "RegExp.test() returns a boolean.",
          },
        ],
    },
    {
      slug: "legacy-var",
      title: "Legacy var & Hoisting",
      description: "Old JavaScript you still meet in old codebases.",
      content: `Before let and const existed, var was the only way to declare a variable. It shipped in 1995 with the very first version of JavaScript. The web was already full of pages when the rules changed, so var could never be removed. That is why you still meet it in old scripts, old build tools, and interview questions.

**Why var still exists**
- It is baked into every old page and library. Removing it would break millions of sites. It works, so it stays.
- Old frameworks rely on its quirks. Some of them depend on function scope on purpose.
- Your browser still supports it. So you can run it, even if you should not write it.

**Function scope, not block scope**
- Scope is the set of names a piece of code can see. var looks no further than the nearest function, or the top of the script.
- A block is anything between curly braces, like an if or a for loop. var ignores blocks. Think of var as ignoring the walls of a room and only noticing the building.
- So \`if (true) { var x = 1; }\` leaves x visible after the if ends. let in the same place disappears at the closing brace.
- let and const are block-scoped. They are locked inside the braces.

**Hoisting: the name exists before the line**
- Hoisting means JavaScript prepares variable names before it runs any line. It reads the whole function first and notes which names will exist.
- var hoists as undefined. The name is on the shelf but the box is empty. So \`console.log(a); var a = 5;\` prints undefined instead of crashing.
- let and const hoist too, but they land in the temporal dead zone, a short period where the name exists but using it throws a ReferenceError. Using a var is silent. Using a let early is loud.
- Hoisting is like a guest list. Everyone who is coming is on the list before the party starts, but only var hands out an empty placeholder.

**Redeclaration and shared loop variables**
- var lets you declare the same name twice in the same function. The second declaration quietly overwrites the first. let and const throw a SyntaxError instead.
- A loop with var has one single variable for the whole loop. Every callback you create in the loop shares that one box.
- \`for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i)); }\` prints 3, 3, 3. All three callbacks arrive after the loop finished, and by then i is 3.
- With let, each round of the loop gets a fresh copy. The same loop prints 0, 1, 2. One keyword is the whole fix.
- A closure is a function that remembers the variables around it. With var it remembers one shared box. With let it remembers a separate box per round.

**Leaks and safe checks**
- A top-level var in an old non-strict script becomes a property on the global object, so \`var x = 1\` also means \`window.x === 1\`. Two scripts can overwrite each other by accident. let and const do not do this.
- typeof is the one safe way to look at a name that might not exist. \`typeof missing\` gives the string 'undefined' rather than throwing.
- typeof only works for reading. Reading missing.x still throws.

**When you are forced to touch var, and how to migrate**
- An old script you did not write. A global config file that other systems read. A function parameter that a caller passes positionally.
- In all three cases, do not rewrite more than you need. var works. Read it correctly first, change it later.
- The migration rule is simple: change var to let, then change to const if nothing ever reassigns it. Then let the linter find the rest for you. Most editors flag every var on save.

**The rule to remember**
Write let and const in new code. Read var correctly in old code. Use var in new code only when you are matching an existing system that cannot be changed.`,
      codeExample: `// var ignores blocks; only the nearest function matters
function scopeDemo() {
  if (true) {
    var leaked = "set inside the if";
  }
  console.log("var escaped the block:", leaked);
}
scopeDemo();

// let disappears at the closing brace
function letDemo() {
  if (true) {
    let trapped = "set inside the if";
  }
  try {
    console.log(trapped);
  } catch (err) {
    console.log("let is block-scoped:", err.name);
  }
}
letDemo();

// Hoisting: var arrives as undefined, let is in the dead zone
console.log("hoisted var:", undefinedAtFirst);
var undefinedAtFirst = 10;
try {
  console.log(tdz);
} catch (err) {
  console.log("let before its line throws:", err.name);
}
let tdz = 1;

// One shared loop variable with var, one fresh copy per round with let
const withVar = [];
const withLet = [];
for (var i = 0; i < 3; i++) withVar.push(() => i);
for (let j = 0; j < 3; j++) withLet.push(() => j);
console.log("var loop shares one box:", withVar.map((fn) => fn()));
console.log("let loop gives each its own:", withLet.map((fn) => fn()));

// typeof is safe on a name that does not exist
console.log("typeof a missing name:", typeof somethingNobodyDeclared);`,
        quiz: [
          {
            question: "What scope does var use?",
            options: ["Block","Function","Global only","Module"],
            correctIndex: 1,
            explanation: "var is function-scoped; only let/const are block-scoped.",
          },
          {
            question: "console.log(x); var x = 5; prints?",
            options: ["5","undefined","ReferenceError","null"],
            correctIndex: 1,
            explanation: "var hoists the declaration (undefined) to the top.",
          },
        ],
    },
    {
      slug: "legacy-topics",
      title: "Legacy Topics",
      description: "IIFEs, ==, attachEvent, and other fossils.",
      content: `Old codebases keep fossils. A fossil is code that still runs but nobody would write it today. You do not need to love these patterns. You need to recognise them fast, so you do not misdiagnose a bug that is really just old style.

**IIFE, the private room that modules replaced**
- An IIFE is an immediately invoked function expression: \`(function () { ... })();\`. It is a function that runs the moment it is defined.
- Before modules, there was no way to hide variables. One file put everything on the global object, and two files with a helper named \`get\` would fight.
- The IIFE was the trick. Its variables die when it finishes, like a room with a door that locks.
- The modern equivalent is just a module file. It is private by default. Use one instead.

**Event handlers: attachEvent and the arguments object**
- \`attachEvent('onclick', fn)\` is the pre-2002 way to listen for clicks. addEventListener came later and is the only one you should write.
- The old one takes \`this\` as the window inside the handler. It also has no capture or once options. If you see it, that page predates 2002.
- \`arguments\` is an array-like object holding every argument a function received, even ones it did not name. Rest parameters (\`...rest\`) do the same job and are readable. Use the rest version.

**== versus ===, and why loose equality is a trap**
- \`==\` is loose equality. It converts types before comparing. \`===\` is strict equality. It compares type and value with no conversion.
- \`0 == '0'\` is true, and \`'0' == ''\` is also true. Empty string, false, zero, null and undefined all compare loosely equal to each other in pairs.
- It is not that \`==\` is always wrong. It is that you have to memorise the conversion table to use it. Nobody does. So use \`===\` and be done.
- The one place people still meet \`==\` is in a comparison to null, where it also catches undefined.

**Banned, broken, or just weird**
- The \`with\` statement tried to swap out the object that names resolve against. It made code impossible to reason about. It is a syntax error in strict mode. You will only find it in 2005-era code.
- \`document.all\` is the one object in the language that is falsy. It is a deliberate joke kept for the web. Never test for it. Test for undefined instead.
- \`arguments.callee\` points at the running function itself. Strict mode bans it because it breaks optimisers. Replace it with a named function.
- \`parseInt('08')\` used to read 8 as octal, base 8, so it returned 0. Always pass the radix: \`parseInt('08', 10)\`.
- \`012\` is an octal literal. \`09\` is a syntax error. Old code used leading zeros for flags. Write 0o12 or plain 12 today.

**Memory and array traps**
- Reading innerHTML into a variable, changing it, then writing it back drops every listener and every state on the page. This is the classic leak nobody can explain. Fix it by keeping the element and changing a child.
- \`new Array(5)\` creates five empty holes. The holes are not even undefined. \`Array(5).fill(0)\` gives five real zeros. Prefer \`[0,0,0,0,0]\` or fill.
- \`[10, 9, 1].sort()\` sorts as text, so 10 comes before 9. sort() without a comparator sorts by string value. Always pass a comparator.
- \`setTimeout('run()', 100)\` takes a string, which the browser compiles as code at run time. It blocks and hides errors. Always pass a function.
- The comma operator evaluates left then right and throws away the left. In a for loop header it lets you share one variable. Nowhere else is it worth it.
- \`'a,b'.replace('a', 'X')\` replaces only the first hit. Use a regex with g for all of them. Use replace with a function when the replacement needs logic.

**Why you read this topic**
You read it so you can tell old code from broken code. Half of a bug report is really just "this page was written in 2004". Recognising the fossil is often the whole diagnosis. Write the modern version in your own tests, and leave the page alone unless you own it.`,
      codeExample: `// IIFE: a private room that closes when it finishes
(function () {
  const secret = "hidden inside the IIFE";
  console.log("IIFE ran once:", secret.toUpperCase());
})();
console.log("secret outside is gone:", typeof secret === "undefined");

// arguments object vs rest parameters
function oldStyle(name) {
  return Array.from(arguments).length;
}
function newStyle(name, ...rest) {
  return 1 + rest.length;
}
console.log("arguments length:", oldStyle("a", "b", "c"));
console.log("rest length:", newStyle("a", "b", "c"));

// == converts types, === does not
console.log("0 == '0':", 0 == "0", "| 0 === '0':", 0 === "0");
console.log("null == undefined:", null == undefined);

// octal literals and parseInt
console.log("parseInt with radix:", parseInt("08", 10));
console.log("0o12 is:", 0o12, "| 012 was octal in old code");

// new Array(3) gives holes, fill gives values
console.log("holes:", new Array(3), "| filled:", Array(3).fill(0));

// sort with no comparator sorts as text, so 10 beats 9
const nums = [10, 9, 1];
console.log("default sort:", [...nums].sort());
console.log("numeric sort:", [...nums].sort((a, b) => a - b));

// replace: first hit, all hits, or a function
console.log("first only:", "a-b-c".replace("-", "+"));
console.log("all:", "a-b-c".replace(/-/g, "+"));
console.log("with logic:", "abc".replace(/[abc]/g, (ch) => ch.toUpperCase()));

// comma operator runs the left side and keeps the right
let n = (1, 2, 3);
console.log("comma operator value:", n);`,
        quiz: [
          {
            question: "Why were IIFEs used?",
            options: ["To run code on click","To create a private scope before modules","To make code sync","To import modules"],
            correctIndex: 1,
            explanation: "IIFEs immediately ran and isolated their scope.",
          },
          {
            question: "What replaced callback-heavy APIs?",
            options: ["More callbacks","Promises and async/await","setImmediate","Closures"],
            correctIndex: 1,
            explanation: "Promises and async/await flatten legacy callback flows.",
          },
        ],
    },
    {
      slug: "interview-prep",
      title: "Interview Questions",
      description: "The cross-topic questions that come up again and again.",
      content: `These are the questions that come back in almost every JavaScript interview. There are only about twenty of them. Know the short answer for each, then know one example you could type from memory.

**Asked in almost every interview**
- \`==\` versus \`===\`. Loose equality converts types before comparing. Strict equality compares type and value. Always write \`===\`. Loose equality also pairs 0, '', false, null and undefined off.
- Hoisting versus the temporal dead zone. Both keywords are prepared before any line runs. A var name arrives holding undefined. A let name sits in the dead zone and throws until its own line runs. var fails quietly, let fails loudly.
- Why typeof null is 'object'. The 1995 engine tagged values with a type bit, and null shared that bit with objects. Fixing it would break old pages. Test null with \`=== null\`.
- The four rules for this. A method call gets the object before the dot. A plain call gets undefined in strict mode. A new call gets the new object. An arrow function has no this of its own and inherits the one where it was written.
- map versus filter versus reduce. map changes each item, filter keeps some items, reduce folds the whole list into one value. Reduce is the wrong tool when you only want a new list.
- Shallow versus deep copy. \`{ ...obj }\` copies the top level only, so a change in the copy shows up in the original. \`structuredClone\` gives a real deep copy.

**Closures, objects, and promises**
- Closure versus object. A closure is a function carrying the variables around it, like a backpack. An object is a bag of data you pass around. Use a closure for hidden state, an object when the caller must see it.
- Promise.all versus Promise.allSettled. all rejects the moment one promise fails, so you lose the other results. allSettled waits for everything and reports each outcome.
- A missing await swallows errors. A rejected promise you never await becomes a silent unhandled rejection that try and catch never see. Always await it or return it.
- const does not freeze. const locks the variable, not the contents. A const array can still be pushed to. Use Object.freeze when you need protection.

**Data handling questions**
- Array versus object performance. Reading a key on an object is fast because of a hidden lookup table. Deleting from a Map stays steadier than deleting from a big object. For a plain list of values, use an array.
- for-in versus for-of. for-in walks the keys of an object and includes inherited ones. for-of walks the values of anything iterable. In an array, for-of with an index reads better.
- Spread versus Object.assign. \`{ ...obj, extra: 1 }\` is the modern form and it is also shallow. Object.assign mutates the target you pass it. Spread builds a new object.
- Deep equality of two parsed JSON objects. JSON.parse gives plain objects and arrays, so a recursive compare over own keys works. Check both sides hold the same keys, then recurse.
- The prototype chain. Every object links to another object it inherits from. Walk up with a loop or Object.getPrototypeOf. \`'x' in obj\` finds inherited names, Object.hasOwn its own.

**Language mechanics**
- let versus var in a loop. var shares one variable across every round, so every callback reads the final value. let makes a fresh binding each round. Same code, different numbers.
- Debounce versus throttle. Debounce waits until the input goes quiet. Throttle runs at most once per interval. Debounce suits a search box, throttle suits scroll.
- Event loop ordering. Microtasks such as promise callbacks drain fully before the next macrotask such as a timer. So sync code runs, then every promise, then the timer.

**When you do not know the answer**
Say what you would check and how you would find out. "I am not certain, but I would read the spec and test it in a console." Then actually do it. Interviewers rate honest reasoning above a confident guess, and you leave with a real answer instead of a wrong one.`,
      codeExample: `// typeof null is a 1995 bug we cannot fix
console.log("typeof null:", typeof null);
console.log("but null === null works:", null === null);

// this binding: method call vs plain call vs arrow
const page = {
  url: "/dashboard",
  getUrl() {
    return this.url;
  },
};
const plain = page.getUrl;
console.log("method call keeps the object:", page.getUrl());
console.log("plain call loses it:", plain());

// map / filter / reduce
const prices = [10, 0, 25, 7];
console.log("map:", prices.map((p) => p * 2));
console.log("filter:", prices.filter((p) => p > 0));
console.log("reduce folds to one value:", prices.reduce((sum, p) => sum + p, 0));

// Shallow copy shares nested objects; deep copy does not
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
shallow.nested.b = 99;
console.log("shallow copy still shares nested:", original.nested.b);
const deep = structuredClone(original);
deep.nested.b = 1;
console.log("deep copy is independent:", original.nested.b);

// const locks the variable, not the contents
const roles = ["admin"];
roles.push("viewer");
console.log("const array grew anyway:", roles);

// for-in walks keys, for-of walks values
for (const key in original) console.log("for-in key:", key);
for (const value of prices) console.log("for-of value:", value);`,
        quiz: [
          {
            question: "What does === require?",
            options: ["Only same value","Same type AND value","Literals only","Numbers only"],
            correctIndex: 1,
            explanation: "=== is strict equality, checking type and value.",
          },
          {
            question: "Why is {...obj} a shallow copy?",
            options: ["It copies only top-level fields","It copies everything deeply","It never works","It copies the reference"],
            correctIndex: 0,
            explanation: "Spread copies top-level values; nested objects are shared.",
          },
        ],
    },
  ],
};

export default topic;
