import type { Topic } from "../../types";

/** Control Flow & Loops - Making decisions and repeating work without copy-paste. */
export const topic: Topic = {
  slug: "control-flow",
  title: "Control Flow & Loops",
  icon: "git-branch",
  description: "Making decisions and repeating work without copy-paste.",
  level: "beginner",
  lessons: [
    {
      slug: "if-else",
      title: "Conditional Logic",
      description: "Branching with if, else if, else, and the ternary.",
      content: `An if statement runs a block of code only when a condition is true. It is the same idea as an assertion in your tests. If the actual value matches what you expected, the test passes. If it does not, the test fails. JavaScript makes that decision for you, one comparison at a time.

**The basic shape**
- if (condition) { } runs the block when the condition is truthy.
- if (condition) { } else { } runs the first block, or the second one when the condition is falsy.
- if (condition) { } else if (other) { } else { } checks several conditions in order.
- Only the first matching block runs. Every block after it is skipped entirely.
- Curly braces are not required by the syntax, but always use them. They make the block obvious.
- There is no limit on how many else if branches you can chain. Keep the chain short enough to read.

**Assignment is not comparison**
- total = 5 puts the number 5 into the variable total. That is assignment.
- total === 5 asks a question: are these two exactly the same? That is comparison.
- total == 5 is loose comparison. It converts types first, so "5" == 5 is true.
- total === 5 is strict comparison. It never converts, so "5" === 5 is false.
- Use === for almost everything. Loose comparison is a source of bugs, not a shortcut.
- The classic trap is writing if (x = 5) by mistake. That assigns 5 to x. The value 5 is truthy, so the block always runs and your condition silently stops testing anything.

**A condition only has to be truthy**
- JavaScript does not force you to write true or false inside the parentheses.
- A truthy value is treated as true. A falsy value is treated as false.
- The falsy list is short: false, 0, -0, 0n, the empty string, null, undefined and NaN.
- Everything else is truthy. That includes the string "false" and the empty array.
- So if (username) really asks "is username something other than an empty string?"
- And if (items.length) asks "are there any items?" because the length 0 is falsy.
- The danger is if (count) when count can legitimately be zero. Write if (count > 0) instead.

**Combining conditions**
- && means and. Both sides must be truthy for the whole thing to be truthy.
- || means or. One truthy side is enough for the whole thing to be truthy.
- ! flips a value, so !isLoggedIn means the user is not logged in.
- Groups are read left to right, so add parentheses when you want the meaning to be clear.
- One line beats nesting: if (isLoggedIn && role === "admin") is easier to read than two nested ifs.

**The ternary operator**
- condition ? valueIfTrue : valueIfFalse picks one of two values as a single expression.
- It returns a value, which makes it handy for assigning to a variable or returning from a function.
- Use it when both branches are short and simple, like picking PASS or FAIL.
- Do not use it for side effects or for long logic. A plain if reads better there.

**Nesting and guard clauses**
- Nesting means an if inside another if. Two levels is fine. Four is a smell.
- A guard clause checks a bad case early and returns straight away.
- The guard clause version keeps the main path at the top level, so the reader walks it top to bottom.
- Guard clauses flatten the code. That is why most production code prefers them.

**Where you meet this in real work**
- Every assertion is a conditional. Actual equal to expected means PASS, otherwise FAIL.
- Checking the response status before you read the body is a guard clause.
- Guarding with if (element) before you click stops a null reference error in a flaky test.
- Guard against an empty array before you index into the first item.`,
      codeExample: `// Strict vs loose comparison
const expectedStatus = 200;
const actualStatus = 200;
console.log("strict match:", actualStatus === expectedStatus);
console.log("loose 200 vs '200':", actualStatus == "200");

// Assignment inside a condition always runs, because 200 is truthy
let assigned;
if (assigned = 200) console.log("assignment ran the block, it never tested");

// The falsy values, and the 0 trap
const retries = 0;
console.log("Boolean(retries) is:", Boolean(retries));
console.log("retries > 0 is:", retries > 0);
console.log("the string 'false' is truthy:", Boolean("false"));

// Combining conditions with && and ||. Note that && stops as soon as it can
const user = { name: "Ana", role: "admin", token: "" };
console.log("canDelete:", Boolean(user.token && user.role === "admin"));
console.log("is admin:", user.role === "admin" || user.token === "boot");

// Guard clauses beat nesting: check the bad case and return
function describe(response) {
  if (!response) return "no response yet";
  if (response.status !== 200) return "failed with status " + response.status;
  return "ok, " + response.body.length + " items";
}
console.log(describe(null));
console.log(describe({ status: 500, body: [] }));
console.log(describe({ status: 200, body: ["a", "b"] }));

// The ternary for one small expression
const score = 85;
console.log("result:", score >= 70 ? "PASS" : "FAIL");`,
      quiz: [
        {
          question: "What happens if a switch case is missing break?",
          options: ["Compiler error","Code falls through to next case","It stops","It returns undefined"],
          correctIndex: 1,
          explanation: "Without break, execution falls through to the next case.",
        },
        {
          question: "What does (10 > 5) ? \"yes\" : \"no\" evaluate to?",
          options: ["yes","no","10 > 5","true"],
          correctIndex: 0,
          explanation: "The ternary returns 'yes' because 10 > 5 is true.",
        },
      ],
    },
    {
      slug: "switch-case",
      title: "switch & Matching Values",
      description: "When a chain of ifs becomes a switch.",
      content: `A switch runs one of several blocks based on a single value. It looks tidier than a long else if chain when you keep comparing the same variable against a fixed list of exact values. It is not a general purpose branching tool.

**How switch decides**
- switch (value) { ... } takes one value to test.
- Each case writes one value to compare it against.
- The comparison is strict equality, the same as ===.
- So case "chrome": matches only the exact string "chrome". The string "Chrome" does not match.
- And case 200: matches only the number 200. The string "200" does not match.
- JavaScript checks the cases from top to bottom and takes the first one that matches.
- That is why the order of your cases matters. Move a broad case up and it swallows the rest.

**Why every case needs break**
- break tells JavaScript to stop and leave the switch.
- Without it, execution keeps going into the body of the next case. That is called fall-through.
- Fall-through is only a bug when the next case was never meant to run.
- Most teams add break to every case anyway, even when the next case ends the block.

**Several cases, one body**
- You can stack case labels with nothing between them.
- case "GET": case "POST": then one shared body runs for either value.
- This is the one place fall-through is used on purpose.
- It is handy when a method gets the same reply, like any read method returning 200.

**Strings, numbers and default**
- default runs when nothing matched. It has no condition of its own.
- Put default last, or in the middle with a break, because it reads more clearly there.
- default is optional. Without it, a switch that matches nothing simply finishes quietly.
- If you relied on the switch to produce a value, you get undefined instead.
- Strings work fine in a switch, but remember they are case sensitive.

**What switch cannot do**
- Case values must be exact. You cannot write case n > 5 or case age >= 18.
- Ranges and comparisons need if and else. A switch is only for exact matches.
- Case labels must also be constants. A value computed at runtime is not allowed.

**switch or a lookup object**
- A lookup object maps a key straight to a value, like { chrome: "chromium" }.
- It is better when you only need a value and no block of statements.
- It is worse when each branch needs several lines of logic.
- Use a Map instead when the keys are not strings, such as numbers or objects.

**Two sharp edges**
- A case is not a real block. Every case shares one scope with the whole switch.
- So you cannot declare the same let twice in two cases. Put braces around the body to fix it.
- Also remember that a switch statement never produces a value. Assign a result or use return.`,
      codeExample: `// switch compares with === (strict equality)
const browser = "chrome";
switch (browser) {
  case "chrome": console.log("Running on Chrome"); break;
  case "firefox": console.log("Running on Firefox"); break;
  default: console.log("Unknown browser:", browser);
}

// No break: fall-through runs the next body too
const code = 404;
switch (code) {
  case 400: console.log("bad request");
  case 404: console.log("not found");
  case 500: console.log("this runs too, that is fall-through");
  default: console.log("caught by default");
}

// Several cases sharing one body
const method = "DELETE";
switch (method) {
  case "GET": case "HEAD": case "DELETE":
    console.log("safe to retry:", method);
    break;
  case "POST": case "PATCH":
    console.log("do NOT retry automatically:", method);
    break;
}

// No match and no default: the switch just ends quietly
switch ("PUT") {
  case "GET": console.log("never printed"); break;
}
console.log("unmatched switch finished without printing");

// A lookup object wins when you only need a value
const driverFor = { chrome: "chromedriver", firefox: "geckodriver" };
console.log("driver:", driverFor[browser]);
console.log("driver for edge:", driverFor["edge"]);

// Case bodies share one scope, so braces let you redeclare let
const group = "b";
switch (group) {
  case "b": {
    const label = "beta users";
    console.log(label);
    break;
  }
  default: console.log("other group");
}`,
    },
    {
      slug: "loops-iteration",
      title: "Loops & Iteration",
      description: "for, while, do-while, and choosing the right one.",
      content: `A loop runs the same block of code again and again. JavaScript has four loop forms and each one fits a different situation. Picking the wrong form is the usual reason a loop becomes hard to follow.

**The four loop types**
- for runs a block a set number of times, usually counted by a counter.
- while runs a block as long as a condition stays true. It makes no promise about how many times.
- do while runs the block once and then repeats it like a while.
- for of walks the values of an array, or the characters of a string.
- for in walks the keys of an object.

**for with all three parts**
- for (let i = 0; i < 5; i++) has three parts separated by semicolons.
- The first part sets up the counter once. Here i starts at 0.
- The second part is the test. It runs before every pass, and a falsy test ends the loop.
- The third part runs after every pass. Here i goes up by one.
- The counter is scoped to the loop, so it no longer exists once the loop ends.

**while and do while**
- while (hasMoreWork) checks first. If the condition is falsy the body never runs at all.
- do { } while (x) runs the body first and checks the condition afterwards.
- That means do while always runs at least once. It suits menus and first-run setup.
- Never write a while loop without a line that changes the condition. It would run forever.

**for of walks values**
- for (const item of items) gives you the item itself, not its position.
- It also works on strings, where each value is a single character.
- It works on anything iterable, including Set and Map.
- Prefer for of when you do not need the index. It is the clearest loop in modern JavaScript.

**for in walks keys, and its trap**
- for (const key in object) gives you key names, as strings.
- It also walks the prototype chain, so it can hand you inherited keys you never created.
- Use Object.keys(object) when you want only the keys the object owns.
- Object.hasOwn(object, key) is the check to use if you must use for in.
- for in over an array gives you index strings like "0" and "1", not the values.

**Indexes, keys and values**
- Array.prototype.entries() hands you pairs of index and value.
- Array.from(items, mapper) builds a new array by running a function on each item.
- Array.from is also how you turn a string or a Set into a real array.

**Speed and safety**
- forEach is fine for reading, but it cannot break early and it returns nothing useful.
- for of is the better choice when you need break, or when the array is large.
- The classic off-by-one: looping while i <= items.length runs one time too many and reads undefined.
- Never change an array while looping over it. Copy it first with a spread like [...items].
- To leave two nested loops, set a flag, break out of both, then check the flag afterwards.`,
      codeExample: `// for with all three parts: set up, test, update
for (let i = 1; i <= 3; i++) {
  console.log("step", i);
}

// while repeats while the condition stays true
const queue = ["login", "search"];
while (queue.length > 0) {
  console.log("running:", queue.shift());
}

// do while runs at least once, even when the condition starts false
let tries = 0;
do {
  console.log("do while pass", tries + 1);
  tries++;
} while (tries < 2);

// for of hands you the values themselves
const steps = ["login", "add to cart", "checkout"];
for (const step of steps) console.log("for of:", step);

// for of over a string hands you one character at a time
for (const ch of "abc") console.log("char:", ch);

// Object.keys gives own keys only, which is the safe version of for in
const user = { name: "Ana", role: "admin" };
for (const key of Object.keys(user)) console.log("own key:", key);

// entries() gives the index and the value together
for (const [i, step] of steps.entries()) console.log("pair:", i, step);

// Array.from with a mapper builds a new array
console.log("mapped:", Array.from([1, 2, 3], (n) => n * 10));`,
      quiz: [
        {
          question: "Which loop is best for iterating over array values in modern JS?",
          options: ["for (;;)","for...of","while(1)","do...while"],
          correctIndex: 1,
          explanation: "for...of iterates array/string values directly and is the readable modern choice.",
        },
        {
          question: "What does continue do inside a loop?",
          options: ["Exits the loop","Skips to the next iteration","Restarts the loop","Pauses for 1 second"],
          correctIndex: 1,
          explanation: "continue skips the rest of the current iteration and moves to the next one.",
        },
      ],
    },
    {
      slug: "loop-control",
      title: "Breaking, Continuing & Labels",
      description: "break, continue, return, and labelled loops.",
      content: `Once a loop is running, you sometimes need to change your mind part way through. Three keywords do that. They are break, continue and return, and each one leaves a different number of layers.

**break leaves the loop**
- break stops the nearest loop or switch that contains it and moves to the line after.
- The rest of the current pass is skipped too.
- Use break when you have the answer and there is nothing left worth checking.
- break inside a switch leaves the switch. It does not touch a loop around it.
- If you forget the break, the case above it will run your code first. That is the fall-through bug.

**continue skips one pass**
- continue jumps straight to the next pass and skips the rest of the current one.
- So it works as a filter. Skip the items you do not care about, keep going.
- In a for loop, the update step still runs before the next pass starts.
- In a while loop, continue jumps to the condition check.

**return leaves the function**
- return sends a value back to the caller and ends the function immediately.
- Every loop inside that function ends too, because the function is over.
- A finally block still runs after a return. It runs on every exit path.
- That is why cleanup belongs inside finally, not on the line after the loop.

**Labels reach the outer loop**
- A label is a name you put in front of a loop, like outer: for (...) { }
- break outer; leaves the loop with that label, even from two levels deep.
- continue outer; skips to the next pass of that outer loop.
- Labels are the only way to control a loop that is not the closest one. Use them sparingly.

**When continue is worse than an if**
- Three or four continue statements in one loop make the reader work too hard.
- An if wrapped around the code you actually want keeps the happy path at the top.
- In a for loop, a continue that runs before the update step freezes the loop forever.

**Early exit beats a found flag**
- Searching with a found = false flag means the loop always finishes every single pass.
- Breaking as soon as you find the value is both faster and shorter.
- When you need one value, use find or findIndex and let the library do the looping.
- Set a flag only when the loop has to continue for a second reason.
- A flag is also the right tool when the loop has to collect a result, not just stop.

**The infinite loop and its escape**
- while (true) never ends on its own. Something inside must break or return.
- If the exit condition can never become true, the loop hangs and a test never times out cleanly.
- Keep the exit condition obvious on a single line so the next reader can trust it.
- In a real test, prefer a bounded loop with a maximum attempt count.
- A retry loop with no attempt cap is the most common cause of a hung test run.`,
      codeExample: `// break leaves the loop entirely
for (const n of [1, 2, 3, 99, 4]) {
  if (n === 99) { console.log("break at", n); break; }
  console.log("saw", n);
}

// continue skips only this pass
for (const n of [1, 2, 3, 4, 5, 6]) {
  if (n % 2 === 0) continue;
  console.log("odd only:", n);
}

// break inside a switch leaves the switch, not the loop around it
for (const n of [1, 2, 3]) {
  switch (n) {
    case 2: console.log("two, leaving the switch"); break;
    default: console.log("plain", n);
  }
  console.log("still inside the loop after the switch");
}

// A label lets an inner break reach the outer loop
const grid = [[1, 2], [3, 4], [5, 6]];
outer: for (const row of grid) {
  for (const cell of row) {
    if (cell === 4) { console.log("labelled break found", cell); break outer; }
    console.log("checking", cell);
  }
}

// continue outer moves to the next pass of the outer loop
outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer2;
    console.log("i", i, "j", j);
  }
}

// Early exit beats a found flag, and an infinite loop needs a break
const users = ["ana", "bo", "cy"];
let found = null;
for (const u of users) {
  if (u === "cy") { found = u; break; }
}
console.log("early exit found:", found);

let count = 0;
while (true) {
  count++;
  if (count === 3) break;
}
console.log("infinite loop escaped at", count);`,
    },
  ],
};

export default topic;