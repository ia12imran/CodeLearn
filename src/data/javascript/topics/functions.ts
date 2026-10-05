import type { Topic } from "../../types";

/** JavaScript Functions - Reusable blocks of logic, and the rules that decide what they can see. */
export const topic: Topic = {
  slug: "functions",
  title: "JavaScript Functions",
  icon: "function-square",
  description: "Reusable blocks of logic, and the rules that decide what they can see.",
  level: "beginner",
  lessons: [
    {
      slug: "function-basics",
      title: "Function Basics",
      description: "Declaring, calling, parameters and return values.",
      content: `A function is a named block of code you can run again with different inputs. Think of a coffee machine: the buttons are fixed, the cup under it changes what comes out. In a test suite \`buildUser("ana")\` saves you writing the same object ten times.

**Three ways to write one**
- A function declaration starts with the keyword \`function\`. It hands you a name that is usable straight away. \`function add(a, b) { return a + b; }\`
- A function expression is written the same way but sits on the right of an equals sign. \`const add = function (a, b) { return a + b; };\`
- A function expression with nothing after \`function\` is anonymous. Nobody outside can name it, so stack traces say "anonymous".
- Give the expression a name, as in \`const fact = function inner(n) { ... }\`, and it can call itself by that name. The name is private to its own body.
- An immediately invoked function expression, or IIFE, is an expression in parentheses followed by \`()\`. Those \`()\` run it on creation, which makes a private block of variables.
- Calling is name plus parentheses: \`add(2, 3)\`. The parentheses are what make it run.

**Hoisting, and why the two forms differ**
- Hoisting means JavaScript collects declarations before it runs the first line of a scope, like sorting a shopping list before you shop.
- A function declaration is hoisted as a working function. You can call it on the line above its definition.
- A function expression is hoisted only as a plain value. The variable exists, but it holds \`undefined\` until the line that assigns it runs.
- So calling \`fn()\` above a declaration works, and calling it above \`const fn = ...\` throws. This is why arrow functions cannot be hoisted. An arrow is an expression, so there is no name to move.
- Safe habit: keep declarations at the top, and expressions above the line that first uses them.

**Parameters and arguments**
- A parameter is a name in the function's own list. An argument is a value you hand over at the call site.
- In \`add(2, 3)\` the names \`a\` and \`b\` are parameters. The numbers 2 and 3 are arguments.
- Arguments are matched by position. The first argument lands in the first parameter.
- JavaScript never checks how many arguments you pass. Leave one out and it is \`undefined\`.
- Pass extra arguments and they are quietly dropped, unless the function collects them with a rest parameter.

**return ends the function on that line**
- \`return\` sends a value back to the caller and stops the function immediately.
- Any code after a \`return\` in the same block never runs. That makes an early return the neat way to leave a loop on the first match.
- A function that finishes without hitting a \`return\` gives back \`undefined\`.
- \`undefined\` means "no value came in". "No return statement" means nobody asked for one. They look the same from outside, so a missing \`return\` in one branch is hard to spot.
- Put a \`return\` in every branch, even when the value is \`false\` or \`0\`.

**fn() versus new fn()**
- \`fn()\` just runs the function. Inside it, \`this\` is \`undefined\` in strict mode.
- \`new fn()\` treats \`fn\` as a constructor. It creates a fresh empty object and points \`this\` at it, then runs the body.
- \`new\` throws away whatever the body returns. You get the new object back, never a returned value.
- That is why constructors assign onto \`this\` instead of returning anything.
- Arrow functions have no constructor behaviour, so \`new (() => {})\` throws a TypeError.

**Pure functions are easy to test**
- A pure function returns the same output for the same input. \`double(2)\` is always 4.
- A pure function touches nothing outside itself. It reads no global, writes to nothing you passed in, and does not read the clock.
- Analogy: a calculator. Same buttons, same result, no memory between presses.
- That means a pure function can be tested with one call and one expected value. No setup, no cleanup, no dependency on test order.
- Impure functions need the world faked: stub the clock and the network, or your test is flaky.`,
      codeExample: `// A declaration is hoisted, so this call on line 2 already works.
console.log("6 x 7 =", multiply(6, 7));
function multiply(a, b) {
  return a * b;
}

// An expression is only ready after the line that creates it.
const add = function (a, b) {
  return a + b;
};
console.log("2 + 3 =", add(2, 3));

// A named expression can use its own name to recurse.
const fact = function inner(n) {
  return n <= 1 ? 1 : n * inner(n - 1);
};
console.log("5! =", fact(5));

// return exits on the spot: this stops at the first even number.
function firstEven(list) {
  for (const n of list) {
    if (n % 2 === 0) return n;
  }
}
console.log("first even:", firstEven([1, 3, 8, 10]));

// No return at all means undefined.
function shout(text) {
  console.log(text);
}
console.log("shout returned:", shout("hi"));

// An IIFE runs the instant it is created.
const answer = (function () {
  return 42;
})();
console.log("IIFE gave:", answer);

// new makes an object; a plain call does not.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
const p = new Point(1, 2);
console.log("new Point:", p.x, p.y);
console.log("plain call gave:", Point(1, 2));

// Pure: same input, same output, nothing else touched.
function total(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}
console.log("total:", total([10, 20, 5]));`,
      quiz: [
          {
            question: "What does a function return if it has no return statement?",
            options: ["null","0","undefined","the last expression"],
            correctIndex: 2,
            explanation: "Functions without a return statement return undefined.",
          },
          {
            question: "What does hoisting do for function declarations?",
            options: ["Deletes them","Lets you call them before definition","Makes them private","Slows them down"],
            correctIndex: 1,
            explanation: "Function declarations are hoisted to the top of their scope.",
          },
        ],
    },
    {
      slug: "arrow-functions",
      title: "Arrow Functions",
      description: "The short syntax, and the one thing it changes.",
      content: `An arrow function is a shorter spelling for a function expression. It arrived in ES6 and it is the default style in modern JavaScript. Most of the difference is less typing. The one real behaviour change is \`this\`, so learn the syntax first and the difference second.

**The short syntax**
- The full form is \`const add = (a, b) => a + b;\`
- With one parameter you can drop the parentheses: \`const double = n => n * 2;\`
- With no parameters you must keep them: \`const now = () => Date.now();\`
- Writing \`const now = Date.now\` is not an arrow at all. It is a reference to the function, with nothing to call. Adding \`()\` is what turns it into a call.
- With a block body, meaning curly braces, you must \`return\` by hand: \`const f = (n) => { return n * 2; }\`.
- With an expression body the value is returned for you. Writing \`n => return n * 2\` is a syntax error, because there is no return keyword in an expression body.

**When dropping the parentheses is a syntax error**
- \`x => x * 2\` is fine, because the body is one expression.
- A parameter with a default value needs them: \`(x = 10) => x\` is legal, \`x = 10 => x\` is not.
- A destructured parameter needs them: \`({ id }) => id\`. The braces would otherwise be read as a block.
- Two parameters always need them: \`(a, b) => a + b\`.
- When in doubt, keep the parentheses. They are never wrong.

**\`this\` is the one behaviour that changes**
- \`this\` is a keyword that points at the object a function was called on.
- A normal function takes its \`this\` from whoever called it, so \`obj.method()\` makes \`this\` be \`obj\`.
- An arrow function has no \`this\` of its own. It copies the \`this\` of the place where the arrow was written. That is called a lexical \`this\`.
- Analogy: a normal function is a taxi that reads the address out of the passenger's hand. An arrow is a bicycle already chained to the gate outside your house. The ride can start anywhere, but the starting point was fixed when you chained it.
- This is why arrows are the safe choice inside callbacks and event handlers. They keep the \`this\` of the code around them instead of getting a new one.
- The flip side is an arrow used as an object method. \`obj.run = () => this\` has no \`this\` pointing at \`obj\`, so you lose the object. Use a method shorthand when the method needs its own object.

**Things arrows do not have**
- No \`arguments\`. In a normal function \`arguments\` is an array-like list of every argument received. Arrows have none at all. Write a rest parameter instead: \`(...args) => args\`.
- No \`new\`. \`new (() => {})\` throws a TypeError, because there is no \`this\` for \`new\` to set up and no prototype to build on.
- No \`prototype\`, so you cannot attach shared methods to one arrow and expect other arrows to inherit them.
- No hoisting. An arrow is an expression, so it does not exist until the line that creates it runs.

**Why \`const\` is required to hold one**
- An arrow is a value, so it lives in a variable.
- \`const\` stops you reassigning it by accident. After \`const double = n => n * 2\`, a later \`double = 5\` throws.
- \`let\` works too, but a function should not change identity after you create it, so \`const\` is the honest choice.
- \`var\` also holds it, but \`var\` is hoisted, so the variable holds \`undefined\` until the assignment line. Calling it earlier throws.

**When an arrow is the wrong choice**
- When the function needs its own \`this\`: an object method, a constructor, or a handler you attach and later remove by reference.
- When you need \`arguments\`. Use a rest parameter or a normal function.
- When it will be called with \`new\`.
- When it has to be hoisted. Use a declaration instead.
- Arrows have no name, so a stack trace from inside one shows the line where the callback was written, not where the failure happened. A declaration or a named expression gives you a name in the trace.`,
      codeExample: `// Every form of the syntax.
const double = n => n * 2;
const add = (a, b) => a + b;
const now = () => 42;
console.log(double(4), add(2, 5), now());

// Block body: the return has to be written out.
const label = (age) => {
  if (age >= 18) return "adult";
  return "minor";
};
console.log(label(21));

// An expression body already returns, so no keyword.
const shout = (text) => text.toUpperCase() + "!";
console.log(shout("pass"));

// Arrays take callbacks, and arrows keep them short.
const scores = [45, 80, 90, 60];
console.log("passing:", scores.filter(s => s >= 70));
console.log("doubled:", scores.map(s => s * 2));

// A normal method gets \`this\` from its object.
// An arrow property cannot, so it never reaches \`tool\`.
const tool = {
  name: "checkout form",
  readName() {
    return this.name;
  },
  readNameArrow: () => "an arrow has no this of its own",
};
console.log("normal method:", tool.readName());
console.log("arrow property:", tool.readNameArrow());

// No arguments object. A rest parameter replaces it.
const collect = (...args) => args.length;
function countArgs() {
  return arguments.length;
}
console.log("arrow:", collect(1, 2, 3), "normal:", countArgs(1, 2, 3));

// No hoisting: calling before the const line throws.
try {
  notYet();
} catch (err) {
  console.log("called too early:", err.constructor.name);
}
const notYet = () => "too late";

// No new either.
try {
  new (() => {})();
} catch (err) {
  console.log("new on an arrow:", err.constructor.name);
}`,
      quiz: [
          {
            question: "Do arrow functions have their own this?",
            options: ["Yes, always","No, they inherit this from scope","Only in strict mode","Only when bound"],
            correctIndex: 1,
            explanation: "Arrow functions have no own this; they use the lexical this from surrounding scope.",
          },
          {
            question: "Can arrow functions be hoisted like declarations?",
            options: ["Yes","No, they are expressions","Only if named","Only in modules"],
            correctIndex: 1,
            explanation: "Arrow functions are expressions and are not hoisted.",
          },
        ],
    },
    {
      slug: "arguments-and-params",
      title: "Arguments, Defaults & Rest",
      description: "Handling a variable or unknown number of inputs.",
      content: `Parameters are the names in a function's own list. Arguments are the values you hand over when you call it. Matching is done by position, so the first argument fills the first parameter and the second fills the second. That single rule is why order matters so much, and why a helper taking four bare strings is easy to misuse.

**Position is the whole rule**
- \`function area(width, height)\` called as \`area(3, 5)\` means width is 3 and height is 5.
- Swap them and you get 15 instead of an error. Nothing complains.
- Extra arguments are dropped. Too few leave the remaining parameters as \`undefined\`.
- When a mix-up is likely, take one object parameter instead. \`area({ width: 3, height: 5 })\` carries the names along with the values.

**Default parameters**
- \`function greet(name = "friend")\` uses "friend" when no argument arrives.
- The default fires only for \`undefined\`. That covers \`greet()\` and \`greet(undefined)\`.
- It does not fire for \`null\`. \`greet(null)\` gives "Hello, null", because \`null\` is a deliberate value and JavaScript leaves it alone.
- Defaults are evaluated at call time, so \`function stamp(now = Date.now())\` reads the clock on every call.
- A default may use a parameter to its left. \`function pad(n, width = n + 1)\` works, because \`n\` is already bound by then.
- A default may not use a parameter to its right. That name is not bound yet, so touching it throws a ReferenceError.
- Same trap with \`undefined\` on the left. \`function f(a = b, b = 2)\` throws as soon as \`b\` is read.

**Rest parameters**
- \`function total(...prices)\` collects every leftover argument into a real array named \`prices\`.
- You pass an array through with a spread: \`total(...[10, 20])\`. The spread unpacks the array into separate arguments.
- Because it is a genuine array, \`prices.length\` and array methods like \`reduce\` work on it.
- The rest parameter must be last. If something followed it, JavaScript would not know which arguments were left to collect, so it is a syntax error.
- Two rest parameters in one list is also a syntax error.
- \`arguments.length\` counts every argument the function received, including the ones already bound to named parameters. Rest gives you only the tail.

**Destructuring with defaults and rest**
- \`function draw({ x = 0, y = 0 } = {}, ...rest)\` pulls \`x\` and \`y\` out of the first argument and puts everything after that object into \`rest\`.
- The \`= {}\` on the parameter matters. Without it, \`draw()\` throws because there is no object to pull from. With it, each field falls back to its own default.
- That pattern means the body never needs \`if (options === undefined)\`. The signature absorbs the missing case for you.

**Options objects and the mutation bug**
- \`const DEFAULTS = { retries: 3 }\` followed by \`const options = DEFAULTS\` gives two names for one object.
- Inside the function, writing \`options.retries = 0\` writes through to \`DEFAULTS\`. The next caller starts from your leftover value.
- The fix is a copy: \`const settings = { ...DEFAULTS, ...options }\`. The spread builds a new object, so the shared defaults are never touched.
- In a test run this shows up as a test that passes on its own and fails in a full suite, because an earlier test left something behind. Shared mutable defaults are a classic cause.
- Rule of thumb: never return the shared defaults object, never store it on \`this\`, and never let a caller mutate it.`,
      codeExample: `// Order decides everything.
function area(width, height) {
  return width * height;
}
console.log("area:", area(3, 5), "| swapped:", area(5, 3));

// Defaults fire for undefined, not for null.
function greet(name = "friend") {
  return "Hello, " + name;
}
console.log(greet(), "|", greet(undefined), "|", greet(null));

// Defaults may use a parameter to their left.
function pad(n, width = n + 1) {
  return String(n).padStart(width, "0");
}
console.log("padded:", pad(7, 3));

// Rest collects leftover arguments into a real array.
function total(...prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}
console.log("total:", total(10, 20, 5), "| from array:", total(...[1, 2, 3]));

// Rest is the tail; arguments.length counts everything.
function shapes(a, ...rest) {
  return [a, rest.length, arguments.length];
}
console.log("[first, rest, all]:", shapes("box", 1, 2, 3));

// Destructuring plus defaults plus rest.
function draw({ x = 0, y = 0 } = {}, ...rest) {
  return { x, y, extra: rest.length };
}
console.log("no args at all:", draw());
console.log("one object:", draw({ x: 4, y: 5 }, "shadow", "blur"));

// The shared-defaults bug, and the copy that fixes it.
const DEFAULTS = { retries: 3, timeout: 1000 };
function runOptions(options) {
  const settings = { ...DEFAULTS, ...options };
  return settings;
}
console.log("before:", DEFAULTS.retries);
console.log("call asked for:", runOptions({ retries: 0 }).retries);
console.log("after:", DEFAULTS.retries);`,
    },
    {
      slug: "lexical-scope-closures",
      title: "Scope & Closures",
      description: "Functions that remember where they were born.",
      content: `Scope is the set of variables a piece of code can see. Lexical scope is decided by where code is written, not by who calls it. A closure is a function that carries the variables it needed away with it, and keeps them alive after the code that made it has finished.

**Scope is a set of nested boxes**
- Imagine boxes inside boxes. The innermost box holds its own items. Look one level out and you can also reach the items in the box around it.
- JavaScript works the same way. A function sees its own variables, then its parent's, then its grandparent's, and on up to the global scope.
- A function can never see inward. An outer function cannot read a variable declared inside a function nested in it.
- Looking up a name walks outward one scope at a time. The first scope that holds the name wins.
- \`let\` and \`const\` belong to the block of braces around them. \`var\` is looser: it belongs to the whole function, which is why it escapes the block you wrote it in.

**Lexical scope versus dynamic scope**
- Lexical means "decided by where you write the code". A nested function sees its parents because of where it is typed.
- Dynamic means "decided by who calls it". JavaScript does not work that way for variables.
- Example: a function written inside \`makeOrder\` can read \`taxRate\` from \`makeOrder\`, no matter who calls it. A dynamically scoped language would look at the caller instead.
- \`this\` is the exception. It is resolved by the caller, which is why it feels inconsistent next to everything else.

**What a closure actually is**
- A closure is a function plus the variables it captured when it was created. The function keeps a live reference to that environment.
- Analogy: the function is a person, and the captured variables are what they packed in a backpack before the house was sold. They can still unpack them later.
- It does not copy the values. If the outer variable changes later, the inner function sees the new value.
- Because the reference is live, a second factory call makes a second set of variables: two counters, two independent counts.

**The loop trap**
- \`for (var i = 0; ...)\` creates one single \`i\` for the whole loop. Three closures all read that same \`i\` and all see the final value.
- \`for (let i = 0; ...)\` binds a fresh \`i\` on every turn of the loop. Each closure captures its own copy and sees its own number.
- The difference has nothing to do with timers. \`let\` in a loop head binds a new variable each iteration, and that is the variable you capture.
- Same idea when you build a list of handlers in a loop. Each handler should remember its own row, not the last one.

**Closures as private state**
- \`makeCounter\` hides \`count\` inside a function and returns a function that changes it. Nothing outside can touch \`count\`.
- That is the pattern for private state in plain JavaScript. Keep the variable somewhere nobody else can see, and hand out the few functions allowed to read and write it.
- It also prevents mistakes: a caller cannot set the counter to a nonsense value.

**Where you meet closures in real work**
- Event handlers. A handler on a table row remembers the id of the row it was attached to, long after the loop that built it is gone.
- Memoisation. A \`once(fn)\` wrapper remembers the first result and returns it again without repeating the work.
- Test fixtures. A \`beforeEach\` hook builds a page object once and hands the same object to every spec.
- Callbacks in general. Every callback is a closure over the scope that created it.

**When a closure captures more than you meant**
- A closure captures every variable it mentions, not only the small one you want.
- If the outer function holds a big response body and an inner handler reads one field, the whole body stays in memory.
- Keep the large object outside the closure, or copy just the field you need into a small local first.
- Handlers added in a loop and never removed keep their captured rows alive for the life of the page, which is a slow leak in a long run.`,
      codeExample: `// An inner function reads outward, never inward.
function withTax(rate) {
  return (price) => price + price * rate;
}
console.log("line total:", withTax(0.2)(100));

// A closure is a function plus what it captured.
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const first = makeCounter();
const second = makeCounter();
console.log("counter one:", first(), first(), first());
console.log("counter two stays separate:", second());

// Live link: the closure sees later changes.
function makeLabel() {
  let status = "pending";
  return {
    read: () => status,
    set: (next) => { status = next; },
  };
}
const label = makeLabel();
console.log("before:", label.read());
label.set("paid");
console.log("after:", label.read());

// var makes ONE variable; let makes one per turn.
const withVar = [];
for (var i = 0; i < 3; i++) {
  withVar.push(() => i);
}
const withLet = [];
for (let j = 0; j < 3; j++) {
  withLet.push(() => j);
}
console.log("var loop saw:", withVar.map(fn => fn()));
console.log("let loop saw:", withLet.map(fn => fn()));

// Private state: balance is out of reach.
function createAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    read() {
      return balance;
    },
  };
}
const account = createAccount();
account.deposit(100);
account.deposit(50);
console.log("balance:", account.read(), "| not public:", account.balance);`,
      quiz: [
          {
            question: "What is a closure?",
            options: ["A function that closes the browser","A function that remembers its outer scope variables","A private class field","A type of loop"],
            correctIndex: 1,
            explanation: "A closure captures and remembers the variables of the scope where it was created.",
          },
          {
            question: "Which keyword creates block-scoped variables?",
            options: ["var","let and const","function","this"],
            correctIndex: 1,
            explanation: "let and const are block-scoped. var is function-scoped.",
          },
        ],
    },
    {
      slug: "callbacks",
      title: "Callbacks",
      description: "Passing behaviour into a function so it can call you back.",
      content: `A callback is a function you hand to somebody else's code so they can call it back when they are ready. It is like giving someone your phone number instead of your message. You do not control when they ring. You control what happens when they do.

**The shape of a callback**
- The receiving function takes a function as a parameter and calls that parameter itself.
- Array methods are the easiest example. \`list.map(n => n * 2)\` hands \`map\` a function, and \`map\` calls it once per item.
- A function that takes a function as a parameter, or returns one, is called a higher-order function.
- Passing behaviour beats passing a value when the value does not exist yet. \`readFile(path, (err, data) => ...)\` works because the callback decides the moment. \`readFile(path, data)\` cannot work, because there is no \`data\` at the moment of the call.

**Synchronous and asynchronous callbacks**
- A synchronous callback runs before the line after the call finishes. \`map\`, \`filter\` and \`forEach\` are synchronous.
- An asynchronous callback runs later, after the current block of code has finished. \`setTimeout\`, \`fetch\` and file reads are asynchronous.
- "Later" means after the current run of the script reaches the end, and then whenever the task queue gets to it. \`setTimeout(fn, 300)\` is a minimum wait, not a promise about exact timing.
- So this prints first, then second, then last. That is not a bug. It is the queue doing its job.

**Higher-order functions you already use**
- \`map\` returns a new array with the same length, holding whatever your callback returned.
- \`filter\` returns only the items where your callback returned a truthy value.
- \`reduce\` folds a list into a single value. Your callback gets an accumulator and the current item.
- \`setTimeout\`, \`addEventListener\`, \`queueMicrotask\` and Node's \`fs.readFile\` all take callbacks as parameters.
- Promises take them too, under the name of \`then\` handlers.

**Handling errors: two conventions**
- Node's convention is error-first. The callback receives \`err\` first, then the data. When nothing went wrong, \`err\` is \`null\`.
- That means \`fs.readFile("x", (err, data) => { if (err) return handle(err); ... })\`. You must check \`err\` first, or you will read data that does not exist.
- Promise style moves the failure into a \`.catch\` and leaves the happy path free of error checks.
- Both are the same idea. Someone else owns the timing, so they have to own the failure channel too.
- When you write your own callback API, pick error-first. It is what every Node library expects to receive.

**Callback hell**
- Every step that depends on the previous step nests one level deeper. Four steps in and you cannot tell which closing brace belongs to which call.
- The nesting is the problem, not the callbacks. Deep indentation hides logic and loses errors.
- Promises return a value instead of taking a continuation, so steps chain flat with \`.then(...).catch(...)\`. \`async\` and \`await\` flattens it further.
- Rule of thumb: the moment you find yourself counting braces to find the end of a callback, reach for promises.

**Rules for writing a callback**
- Call it exactly once. A second call means your assertions run twice, and the second run often fails on state the first run already changed.
- If the body can throw, wrap the call in \`try\` and \`catch\`, or the error disappears into somebody else's stack trace.
- Do not assume it runs before the next line. If you need the value immediately, return it from the function instead.
- Keep the callback short. Log the result or store it, then get out.

**Callbacks are underneath the newer syntax**
- An event listener stores your function and calls it on every click.
- A promise stores your handler and calls it when the promise settles.
- Every array method is a loop that calls your function once per item.
- Promises and \`async\` and \`await\` are a tidier interface over the same idea: hand over a function, get called back when the work is done.`,
      codeExample: `// A callback is a function you hand to somebody else to call.
function runTwice(task) {
  task();
  task();
}
let calls = 0;
runTwice(() => { calls += 1; });
console.log("callback ran", calls, "times");

// Synchronous callbacks: done before the next line runs.
const scores = [85, 40, 92, 60];
console.log("above 70:", scores.filter(s => s > 70));
console.log("with position:", scores.map((s, i) => i + ":" + s));

// Asynchronous callback: runs after the current block finishes.
setTimeout(() => console.log("this line prints last"), 0);
console.log("this line prints first");

// Your own API that takes a callback. Error-first, Node style.
function fetchUser(id, callback) {
  const found = id === 7;
  if (found) callback(null, { id: 7, name: "Ana" });
  else callback(new Error("no user " + id));
}
fetchUser(7, (err, user) => {
  if (err) return console.log("failed:", err.message);
  console.log("got user:", user.name);
});
fetchUser(9, (err, user) => {
  if (err) return console.log("failed:", err.message);
  console.log("got user:", user.name);
});

// A higher-order function: transform is a callback.
function processData(items, transform) {
  return items.map(transform);
}
console.log("processed:", processData([1, 2, 3], n => n * 10));

// Callback hell: nesting grows with every dependent step.
const done = (v) => console.log("final value:", v);
const stepTwo = (v, cb) => cb(v + 2);
const stepOne = (v, cb) => stepTwo(v, cb);
stepOne(1, done);`,
      quiz: [
          {
            question: "What is a callback?",
            options: ["A function passed to another function to run later","A built-in method","A type of variable","A DOM element"],
            correctIndex: 0,
            explanation: "A callback is a function passed as an argument and invoked by the receiving function.",
          },
          {
            question: "What is the main downside of heavily nested callbacks?",
            options: ["Slow execution","Callback hell - unreadable code","Memory leaks always","No error handling"],
            correctIndex: 1,
            explanation: "Deeply nested callbacks create 'callback hell'. Promises and async/await solve this.",
          },
        ],
    },
  ],
};

export default topic;
