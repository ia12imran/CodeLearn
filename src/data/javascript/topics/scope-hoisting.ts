import type { Topic } from "../../types";

/** Scope, Hoisting & this - The rules that decide what a piece of code can actually see. */
export const topic: Topic = {
  slug: "scope-hoisting",
  title: "Scope, Hoisting & this",
  icon: "layers",
  description: "The rules that decide what a piece of code can actually see.",
  level: "advanced",
  lessons: [
    {
      slug: "scope-rules",
      title: "Scope Rules",
      description: "Global, function, block, and module scope.",
      content: `Scope is the rulebook that decides which variables a piece of code can read and which it can change. Nothing about that is checked while your test runs. Every name is matched to a box before your first line executes, using only the place you typed it. That is why the same helper can see a variable in one file and throw "x is not defined" in another.

**The scope chain, drawn as boxes**
- Think of nested boxes. The innermost box can look outward. It can never look into a box that sits inside it.
- A function can use the variables around it. Code outside that function can never reach inside it.
- If a name is not in the current box, JavaScript checks the next box out, and keeps going outward until it runs out.
- Run out of boxes with no match and you get ReferenceError: x is not defined.
- This outward-only search is the scope chain. The word lexical means the chain was fixed by the position in the file, not by who called the function.

**The four boxes you actually meet**
- Global scope: every top-level name in a classic script. Everyone can reach it, so it is easy to leak and easy to collide.
- Function scope: created by every function body and every parameter list. var lives here and nowhere else.
- Block scope: created by any pair of curly braces. let, const and class live here. if, for, while and a plain {} all count.
- Module scope: any file loaded with import or export is its own sealed box. Nothing leaks in or out unless you export it.

**Shadowing, when an inner box reuses the name**
- Shadowing means an inner box declares a name that an outer box already uses.
- The inner name wins inside its own box. The outer one is untouched and still correct outside.
- const timeout = 1000; function wait() { const timeout = 5000; } Inside wait it is 5000, outside it is still 1000.
- Shadowing is a bug factory when you forget which one you are holding. Rename the inner variable when it confuses you.

**Why for (let i) is safe and for (var i) is not**
- let builds a brand new box on every turn of the loop, with its own copy of i inside.
- Three callbacks made on three turns each keep their own i, so they print 0, 1, 2.
- var makes one shared i for the whole function. The callbacks all read the finished value, so they print 3, 3, 3.
- Same loop, same intention, different result. That is what scope does to you.

**Where you meet this in real work**
- A helper quietly rewrites a page-level variable, and you spend an hour wondering why the test is flaky.
- Two spec files both define const page. Nothing breaks, because module scope keeps them in separate boxes.
- Wrapping a temporary variable in an if block with its own braces, so it cannot collide with a same-named variable further down.
- A rule of thumb for everything you write: default to const, use let only when you must reassign, never use var.`,
      codeExample: `// The scope chain: an inner box can see outward, never inward.
const env = "staging";          // global box

function deploy(target) {      // function box
  const env = "prod";           // shadows the global one
  const url = "https://" + target + ".test.internal";
  function log() {              // nested box
    console.log(env + " -> " + url);
  }
  log();
}
deploy("api");
console.log("outside the function, env is still:", env);

// Blocks are real boxes for let and const. var ignores them.
if (true) {
  let token = "block only";
  var leaky = "function wide";
}
console.log("typeof token:", typeof token);   // undefined
console.log("typeof leaky:", typeof leaky);   // string

// for (let i) gives every callback its own copy of i.
const withLet = [];
for (let i = 0; i < 3; i++) withLet.push(() => i);
console.log("for (let i):", withLet.map((fn) => fn()));

const withVar = [];
for (var j = 0; j < 3; j++) withVar.push(() => j);
console.log("for (var j):", withVar.map((fn) => fn()));`,
    },
    {
      slug: "hoisting",
      title: "Hoisting in Detail",
      description: "What moves to the top, what does not, and why.",
      content: `Hoisting is the preparation that happens before your code runs. Before the first statement executes, the browser does a pass over each scope and sets up every declaration it finds there. That pass is called hoisting. Only after it finishes does your code run, top to bottom, as written. This is why a function can be called on line 2 even though it is written on line 20.

**The stage-crew analogy**
- Before the curtain rises, the crew walks the set and tapes a label to the floor for every object that will appear.
- Every label goes down before the show starts, no matter which line of the script first mentions that object.
- Your declarations are the labels. The show itself is your code running in order.
- So a helper can be called at the top of the file even though its body sits at the bottom. Its label is already down.

**What each kind of declaration does in that first pass**
- var: the name is created and set to undefined. That is all. The real value arrives when its own line runs.
- function declarations: the entire function is created and filled in. It is fully usable from the top of its scope. This is the only kind of declaration that is ready to run.
- let and const: the name is created but marked unusable. Reading it early throws ReferenceError instead of returning undefined. That locked gap is the temporal dead zone, covered in the next lesson.
- class declarations: also created early, also unusable until their own line runs.
- Function expressions and arrow functions sit on the right of an equals sign, so there is no name to create. They cannot be called before their line runs.

**Hoisting is not the engine moving your code**
- Nothing is physically relocated. Your helper is not teleported to the top of the file.
- The browser simply knows about it before execution reaches it, the way a phone knows an alarm time long before the alarm sounds.
- Real implementations usually keep your source order in memory and jump around it, rather than copying declarations upward. Same behaviour, different mechanism.
- Because nothing moves, a hoisted function does not see later assignments for free. It sees whatever the variables hold at the moment it is called.

**Hoisting versus the dead zone**
- Hoisting is the preparation step. It runs once per scope, before any line executes.
- The dead zone is the stretch between that preparation and the let line. The name exists, but reading it throws.
- var has no dead zone. It exists from the top and reads as undefined, which is why var bugs stay silent and let bugs fail loudly.
- Function declarations skip both problems, which is why they can be called from anywhere in their scope.

**Where you meet this in real work**
- A spec file calling a helper that is declared further down. It works. Moving the helper above the call changes nothing.
- export default function login() {...} is hoisted, so a nav file can import it and call it from any line.
- let browser = await playwright.launch(); placed above a helper that reads browser. Reorder those two and the helper starts throwing.
- A defensive habit for your test code: write helpers as function declarations, and never rely on hoisting to rescue a mistake.`,
      codeExample: `// Hoisting: declarations are prepared before any line runs, but not all
// of them are usable. Each try/catch keeps the example running.
console.log("1. var exists but has no value yet:", readEarly());
function readEarly() {
  return typeof earlyVar;          // "undefined", var was created, not assigned
}
var earlyVar = "assigned on a later line";

// A function declaration is complete from the top of the scope.
console.log("2. function declaration:", describe());
function describe() {
  return "ready before I was written";
}

// A function expression has no name to hoist.
try {
  notYet();
} catch (err) {
  console.log("3. function expression:", err.name);
}
const notYet = () => "too late";

// let and const are created but locked until their own line runs.
try {
  console.log(later);              // still in the dead zone
} catch (err) {
  console.log("4. let above its own line:", err.name);
}
const later = "unlocked now";
console.log("5. let below its own line:", later);

// Hoisting does not move values. A function reads them at call time.
const page = { name: "checkout" };
function title() { return page.name; }
console.log("6. resolved at call time:", title());`,
    },
    {
      slug: "tdz",
      title: "Temporal Dead Zone",
      description: "The gap where let and const exist but cannot be read.",
      content: `The temporal dead zone, shortened to TDZ, is the gap between two moments: the moment you enter a scope, and the moment your code reaches the line that gives a let or const its value. Inside that gap the name already exists, so nothing calls it undefined, but it is locked, so reading it throws.

**The locked door analogy**
- Every let and const in a scope is a door that has already been painted into the wall.
- The room is ready and the name is on the door. The key is handed over only when your code reaches that line.
- Try the door before the key arrives and you get a ReferenceError, not an empty value.
- The stretch between the room being ready and the key arriving is the dead zone. It closes by itself, the moment that line runs.

**What you actually get**
- Reading a let or const too early throws ReferenceError: Cannot access 'x' before initialization.
- It is never undefined. undefined means the variable exists and holds nothing. The dead zone means you are not allowed to look yet.
- The error fires when you read or write the name, not when the scope is created. Storing the value in a variable you only print later is perfectly fine.
- typeof is the one exception, and it catches people out. typeof on a name that was never declared returns "undefined" without any error, but typeof on a dead-zone name still throws.

**How wide the gap gets**
- It opens when the scope is entered and closes on that single line. Moving the line lower makes the gap wider.
- Every let and const in the same block has its own gap, and each one closes on its own line.
- A whole block can be inside a dead zone. If a block reads one of its own let names while starting up, the block has already thrown.
- A function that runs before the let it needs hits the same door. The dead zone belongs to the scope, not to the order in the caller.

**The other places the same rule shows up**
- class declarations. class Order {} cannot be used above its own line, unlike a function declaration.
- Function parameter defaults. function connect(page = page) throws, because the parameter is already inside its own dead zone while its default runs.
- for (let i = 0; ...) has a fresh dead zone on every turn, so reading i before the first turn fails.
- const locks the name, not the value. const user = {} still allows user.name = "Ana". For a frozen value you need Object.freeze.

**How to stay out of it**
- Declare first, assign second. let total; then total = sum(cart);
- Put every const and let at the top of the function, above the code that reads them.
- Prefer a function declaration for anything that must be callable from anywhere. Function declarations have no dead zone.
- When you read "Cannot access before initialization", look for a use above its declaration in the same scope, or a helper that ran too early.

**Where you meet this in real work**
- A Playwright fixture that creates browser after a helper already tried to read it. Moving the setup one line earlier fixes it.
- Two config modules that import each other. One reads the other while it is still starting up.
- A default parameter that wants to use a module-level variable which has not been assigned yet.`,
      codeExample: `// The temporal dead zone: the name exists, but it is locked until its own
// line runs. Every ReferenceError is caught so the demo keeps going.
function scopeDemo() {
  try {
    console.log(first);            // locked, so this throws
  } catch (err) {
    console.log("1. reading let too early:", err.name);
  }
  const first = "unlocked";
  console.log("2. reading let after its line:", first);
}
scopeDemo();

// var has no dead zone. It exists from the top and reads as undefined.
function varDemo() {
  console.log("3. var before its line:", typeof early);
  var early = "assigned later";
}
varDemo();

// A bare let has no gap left: its dead zone closes on its own line.
let held;
console.log("4. a bare let is already open:", typeof held);
held = held ?? "set by hand";
console.log("5. read and reassign it:", held);

// typeof cannot peek through the door, but a never-declared name is safe.
console.log("6. typeof a missing name:", typeof neverDeclaredAtAll);
try {
  console.log(typeof locked);
} catch (err) {
  console.log("7. typeof a locked name:", err.name);
}
const locked = "open";

// A class follows the let rule, not the function rule.
try {
  new Order();
} catch (err) {
  console.log("8. class above its own line:", err.name);
}
class Order {
  constructor() { this.state = "paid"; }
}
console.log("9. class below its own line:", new Order().state);`,
    },
    {
      slug: "this-binding",
      title: "How this Gets Its Value",
      description: "The four binding rules, in priority order.",
      content: `this is not magic, and it is not the function. this is one value the browser picks while your function runs. Four rules pick it, and they are checked in a fixed order. The first rule that applies wins. Knowing the order is the whole skill.

**The four rules, in priority order**
- The new rule is the strongest. Calling a function with new makes this the brand new object. If the constructor returns an object, that returned object becomes this instead of the fresh one.
- The explicit rule comes next. call, apply and bind set this by hand. call takes arguments one by one, apply takes an array, bind returns a new function with this already locked in.
- The implicit rule is the everyday one. When you write object.method(), this is the object sitting before the dot.
- The default rule is the fallback. No receiver at all means this is undefined in a module or in strict mode, and globalThis in an old sloppy classic script.
- Arrow functions sit outside all four. An arrow has no this of its own, so it copies the this from the code around where it was written. That is called lexical this.

**Why undefined and not the window**
- In an ES module, or any file with "use strict", a function called with no receiver gets this = undefined.
- In a sloppy classic script the same call quietly gets globalThis, which is the window. The same file can therefore behave differently in a script tag and in a module.
- Test files are almost always modules or strict, so the safe assumption on your machine is undefined.
- Passing a method around on its own loses the receiver. const go = page.goto; go(url) has no object before the dot, so this is undefined inside.

**The classic setTimeout trap**
- setTimeout(function () { this.x }, 100) runs the callback later with no receiver, so this is undefined and this.x throws.
- The that workaround copies the value into a variable first, then reads the variable inside the callback.
- The modern fix is an arrow function. It keeps the this of the surrounding scope and needs no extra variable.
- The same bug appears in array callbacks. Passing page.waitForSelector straight into then or map loses the page.

**Reading the order out loud**
- new User() beats call, apply and bind, because new creates its own object.
- obj.method() beats a bare method(), because the dot supplies a receiver.
- Anything with no receiver falls through to the default rule.
- An arrow function is not in the list at all. It has no opinion, it borrows.

**Where you meet this in real work**
- A helper built for an object that receives undefined, because it was handed over as a bare callback.
- An event handler that expects the clicked element and gets undefined instead.
- A class method passed to page.once or to a promise chain, where one bind call fixes it.
- A rule for your own test code: use arrows for callbacks, and reach for call or bind only when you deliberately want a different this.`,
      codeExample: `"use strict";   // no receiver means undefined

// 1. implicit: this is the object before the dot.
const account = {
  owner: "Ana",
  balance: 10,
  report() { return this.owner + " has " + this.balance; },
};
console.log("1. implicit:", account.report());

// 2. explicit: call one by one, apply an array.
console.log("2. call:", account.report.call({ owner: "Cid", balance: 5 }));
console.log("3. apply:", account.report.apply({ owner: "Bo", balance: 3 }, []));

// 3. bind locks this in, gives a new function.
console.log("4. bind:", account.report.bind({ owner: "Dee", balance: 7 })());

// 4. new wins, and a returned object wins instead.
function Account(owner, balance) {
  Object.assign(this, { owner, balance, report: account.report });
}
console.log("5. new:", new Account("Eve", 3).report());
function Wrapped() { return { owner: "returned" }; }
console.log("6. new returns it:", new Wrapped().owner);

// 5. default: no receiver means undefined.
function loose() { return this; }
console.log("7. default:", loose());

// later() stands in for setTimeout (no receiver).
function later(fn) { return fn(); }
const session = {
  user: "Ana",
  start() {
    const that = this;
    function classic() { return this; }
    return { classic, arrow: () => that.user };
  },
};
const run = session.start();
console.log("8. arrow keeps this:", run.arrow());
console.log("9. handed off, this is:", later(run.classic));
console.log("10. bind fixes it:", later(run.classic.bind(session)).user);`,
    },
  ],
};

export default topic;