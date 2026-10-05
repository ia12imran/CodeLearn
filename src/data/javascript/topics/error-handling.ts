import type { Topic } from "../../types";

/** Error Handling & Debugging - Failing loudly, recovering gracefully, and finding the real cause. */
export const topic: Topic = {
  slug: "error-handling",
  title: "Error Handling & Debugging",
  icon: "alert-triangle",
  description: "Failing loudly, recovering gracefully, and finding the real cause.",
  level: "advanced",
  lessons: [
    {
      slug: "try-catch",
      title: "try / catch / finally",
      description: "Catching errors, re-throwing, and cleanup.",
      content: `Some lines of code can fail. A file is missing. A value is not what you expected. A helper returns nothing. When that happens, JavaScript throws an error. An error is an object that stops the current code path and carries a message. Think of it like a smoke alarm: it does not fix the toast, but it tells you something is wrong before the kitchen burns. try, catch, and finally are how you decide what happens next.

**What try does**
- try marks the block of lines that might fail.
- It is like putting a mat under a glass you are carrying. If you drop it, the mat catches the pieces.
- If a line inside try throws, the rest of try is skipped. Control jumps straight to catch.
- If nothing throws, catch is skipped and your function carries on.

**Catch is optional**
- You can write try and finally with no catch at all. It reads as: run this, then always clean up.
- If there is no catch, the error keeps travelling up to whoever called your function.
- Catch has a binding, which is just a name for the error object. catch (err) gives you the error inside err.
- Modern JavaScript lets you write catch with no parameter at all. That is handy when you only need to clean up and do not care what went wrong.

**What finally is for**
- finally always runs. After a success, after an error, after a return, after a throw.
- It is the bit that puts the tool back in the box every single time, tired or not.
- The classic pattern is resource cleanup. You opened a file, a database connection, or a browser context. You close it in finally so a failure never leaves it open.
- If try returns a value, that value is what the caller gets, but finally still runs first.
- Careful: if finally itself throws, the new error replaces the old one and the original is lost.

**Only wrap what can fail**
- Put the one risky call inside try, not the whole function.
- Wrapping everything hides which line failed and makes real logic disappear behind an indent.
- Rule of thumb: if every line inside try is guaranteed to work, try is pointless noise.

**Catching, and doing nothing**
- A catch block that swallows the error and returns quietly is worse than not catching at all.
- If you catch, add value: log it, wrap it, retry it, or turn it into a useful return value.
- Silently ignoring is how a broken test run still reports green.
- Re-throwing means catching, then sending the same error on with a bare throw err. No new Error object, so the original stack is kept.
- If you want a better message, throw a new error and set cause. Cause is a field that links your new error to the old one, so the root cause is never lost.
- Returning a fallback is not the same as swallowing. A fallback says this failure is expected, and here is a safe answer. Return an empty list instead of crashing.
- Swallowing says this failure is a bug, and I am hiding it. Use re-throw instead.

**A retry loop**
- Some failures are temporary. A flaky server times out and works a second later.
- Wrap the call in try, wait, and try again. Count your attempts so the loop cannot run forever.
- Only retry the errors worth retrying. Retrying a typo just wastes time.`,


      codeExample: `// Shows try/catch, cleanup in finally, and a small retry loop.
// Plain Node, no imports, no top-level await.

function flakyCall(attempt) {
  if (attempt < 3) {
    throw new Error('socket hang up on attempt ' + attempt);
  }
  return 'loaded ' + attempt + ' rows';
}

function loadRows(fetchRows) {
  let connection = null;
  try {
    connection = 'db-connection';
    return fetchRows();
  } catch (err) {
    // add context, but keep the original error inside cause
    throw new Error('could not load rows: ' + err.message, { cause: err });
  } finally {
    if (connection) {
      connection = null;
      console.log('cleaned up the connection');
    }
  }
}

function withRetry(fn) {
  let attempt = 0;
  while (attempt < 3) {
    attempt += 1;
    try {
      return fn(attempt);
    } catch (err) {
      console.log('attempt ' + attempt + ' failed:', err.message);
      if (attempt === 3) throw err;
    }
  }
}

// finally runs even though we return from inside try
console.log(loadRows(() => 'ok'));
console.log('---- retry ----');
try {
  console.log(withRetry(flakyCall));
} catch (err) {
  console.log('gave up:', err.message);
}
console.log('---- custom error with cause ----');
try {
  loadRows(() => { throw new TypeError('bad shape'); });
} catch (err) {
  console.log('name:', err.name);
  console.log('cause:', err.cause.name, err.cause.message);
}`,
    },
    {
      slug: "error-types",
      title: "Built-in & Custom Errors",
      description: "TypeError vs RangeError vs your own Error subclass.",
      content: `Every error in JavaScript is built from one base class called Error. The other built-in errors are children of it. Think of Error as a blank form, and each child as the same form with a pre-printed label at the top. You read that label with the name property. Knowing which label you got tells you what kind of mistake to look for, so you can fix the cause instead of guessing.

**The base and its children**
- Error is the parent. It is what you get for anything that is not one of the specific cases below.
- TypeError means you used a value of the wrong type. The usual culprit is reading a property of null or undefined, like rows.length when rows is undefined. Also calling something that is not a function.
- RangeError means the number is outside what the thing can hold. new Array(-1) is the classic example, because a length cannot be negative. So is a number too large for a Number.
- ReferenceError means the name does not exist at all. You typed userId but the variable is userID. A typo in a variable name.
- SyntaxError means the code cannot even be parsed. A missing bracket. This one usually stops the whole file, so you rarely catch it at run time.
- EvalError is a rare one about eval and friends. You will almost never meet it. Know it exists and move on.
- URIError means a URL function got a bad string. decodeURIComponent('%') fails because % is not a real escape.

**The three properties that matter**
- name is the label. It is a string like TypeError.
- message is the human sentence. This is what you put in your test report.
- stack is a list of the functions that were running when the error was made, with file and line numbers. It is your map back to the source.
- Read stack top first. The first line is where it broke. The lines under it are the callers.

**Making your own error class**
- You write class MyError extends Error when you want callers to catch your own failures separately from everyone else's.
- A gotcha: the name is not set for you. After class MyError extends Error, new MyError().name still says Error. It is inherited and never overwritten.
- Fix it with a constructor that sets this.name = 'MyError'. It is one line, but forget it and every custom error looks like a plain Error.

**Carrying extra data**
- Because it is a real class, you can add your own fields. A status code, a request id, a list of failed ids.
- That turns the error into a small package of facts, so the catch block does not have to guess.

**Checking with instanceof**
- instanceof asks "is this object built from that class?" It is the normal way to test a custom error.
- It fails across two copies of the same library. If your test code and the code under test each load their own copy, the classes are different objects, so instanceof says false even though both are called MyError.
- A guard function wraps that check. isMyError(err) returns true or false, and callers do not have to remember the instanceof dance.
- When you are unsure, fall back to checking err.name as a string. It survives the two-copies problem.

**Not everything you throw is an Error**
- throw 'something broke' is legal JavaScript and a bad idea. A string has no name, no message, no stack.
- With no stack you lose the file and line, which is the one thing you needed.
- You can also throw objects and numbers, with the same problem. Throw Error objects so your logs stay useful.`,


      codeExample: `// Shows what each built-in error name means, then a custom error
// class that carries extra data. Plain Node, no imports.

function attempt(label, run) {
  try {
    run();
  } catch (err) {
    console.log(label + ' -> ' + err.name + ' | ' + err.message);
  }
}

// The constructor exists only to set the name.
class AppError extends Error {
  constructor(message, status, requestId) {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.requestId = requestId;
  }
}

const isAppError = (err) => err instanceof AppError;

attempt('null read', () => { const rows = null; rows.length; });
attempt('neg array', () => { new Array(-1); });
attempt('typo name', () => { notDeclaredAnywhere; });
attempt('bad json', () => { JSON.parse('{oops}'); });
attempt('bad url', () => { decodeURIComponent('%'); });

// No constructor, so name still reads "Error".
class LazyError extends Error {}
console.log('lazy name is:', new LazyError('hi').name);

const err = new AppError('user not found', 404, 'req-881');
console.log('extra data: status=' + err.status + ' id=' + err.requestId);
console.log('guard says:', isAppError(err), '| plain:', isAppError(new Error('x')));
console.log('still an Error:', err instanceof Error);
console.log('first stack line:', err.stack.split('\\n')[0].trim());`,
    },
    {
      slug: "async-errors",
      title: "Error Handling in Async Code",
      description: "Why a missing await swallows your errors.",
      content: `Async code changes when errors happen. A normal function runs straight down. An async function pauses at each await, hands control back to whoever called it, and resumes later. Think of it like sending a letter: you drop it in the box and carry on with your day. The letter is not here yet, and nothing about it can fail in front of you. Errors follow the same rule. A rejection that happens after a pause is outside the reach of a try block that has already finished.

**The number one async bug**
- This is the one to memorise. You write try, you await the call, and your catch still never fires. Something is wrong.
- The cause is a missing await. Without it you get a promise object back, and you walk straight past it.
- The call is still running. It fails a moment later, on a promise nobody is watching.
- The fix is one word. Add await, or add .catch() on the promise itself. One of the two, never neither.

**Try/catch only sees its own function**
- try/catch catches errors thrown by code running inside that try block, in that same async function.
- It cannot reach into a different function to catch its error. A helper that throws needs its own try/catch, or the caller must await it.
- If you call a helper without await inside a try, the try has already finished by the time the helper fails.

**Promises with nobody listening**
- A rejected promise with no handler is an unhandled rejection.
- In Node the default is to print a warning, and a later Node can be set to exit. In the browser it can be a silent no-op in some tools. Either way your test keeps running and the failure never shows up in the report.
- In Node you can register a listener with process.on('unhandledRejection', handler). That turns the invisible into something you can log and fail on.

**Promise.all and Promise.allSettled**
- Promise.all takes a list of promises and resolves when all of them succeed.
- If one of them rejects, Promise.all rejects immediately and the other errors are lost. You learn about one failure and never hear about the other three.
- Promise.allSettled waits for all of them, succeed or fail, and hands you an array of results.
- Each result is either status fulfilled with a value, or status rejected with a reason. You loop over that and handle each one. This is the one you want in a test runner that must report every failing test.

**Turning a rejection into a value**
- A helper that converts a rejection into a resolved error value is handy when you do not want exceptions.
- It returns a plain object, either ok with the value, or ok false with the error.
- The rule stays the same. You handle failures explicitly instead of hoping nobody notices.

**Two more traps**
- await inside forEach does not wait. forEach is not built for promises, so each iteration starts and moves on. Use a for...of loop, which does wait.
- Inside an async function, return Promise.reject(err) is the same as throw err. Use throw, because it reads like the rest of your error handling and keeps one stack.

**The habit that fixes most of it**
- Every promise needs a home. Either somebody awaits it in a try, or it gets a .catch, or it goes through Promise.allSettled.
- When a promise gets a rejection nobody handles, the error is not gone. It just has no name attached to it.`,


      codeExample: `// Shows why a missing await hides the error, then the two fixes.
// Plain Node. Wrapped in an async main because top-level
// await is not allowed in this editor.

function makeTask(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error('row lookup timed out'));
      else resolve({ rows: 3 });
    }, 5);
  });
}

async function broken() {
  try {
    makeTask(true); // BUG: no await, so try finishes first
    console.log('broken: try block already ended');
  } catch (err) {
    console.log('broken: this never runs', err.message);
  }
}

async function fixed() {
  try {
    const out = await makeTask(true);
    console.log('fixed: got', out.rows);
  } catch (err) {
    console.log('fixed: caught', err.name, err.message);
  }
}

// Turn a rejection into a plain value instead of an exception.
async function settle(promise) {
  try {
    return { ok: true, value: await promise };
  } catch (err) {
    return { ok: false, value: err.message };
  }
}

async function main() {
  process.on('unhandledRejection', (reason) => {
    console.log('listener caught a stray rejection:', reason.message);
  });

  await broken();
  await fixed();

  // Promise.all loses the other errors. allSettled reports all.
  const all = await Promise.allSettled([
    settle(makeTask(false)),
    settle(makeTask(true)),
  ]);
  for (const r of all) {
    console.log('settled ->', r.status, r.value);
  }
}

main();`,
    },
    {
      slug: "debugging",
      title: "Debugging Techniques",
      description: "console tools, breakpoints, stack traces, and narrowing bugs.",
      content: `Debugging means finding the exact line that does not do what you expected. It is a skill, not a personality trait. The main idea is the same as in any search. Do not look at the whole thing at once. Cut the problem in half, then keep cutting until the piece you hold is small enough to read line by line.

**Reading a stack trace**
- A stack trace is the list of functions that were active when the error was thrown.
- Read it from the top frame outward. The top frame is where the error was made. The frames below it are who called it.
- Each frame gives a file and a line number. The file is the script. The line is where the call sits.
- The bottom frames are usually your entry point and the Node internals. Skip those.
- In a test run, the first frame inside your own helper file is the one you care about.

**The console tools worth knowing**
- console.log is the plain one. Use it for values.
- console.table turns an array of objects into a table. Good for a list of test results.
- console.group and console.groupEnd nest related lines so a busy log stays readable.
- console.time and console.timeEnd print how long a block took. This finds the slow step in a slow test.
- console.count logs how many times a line ran. Did this run once or four hundred times is often the whole bug.
- console.trace prints the current call path without throwing anything.
- console.dir prints an object in detail, without trying to expand it into noise.
- console.log shows the value at the moment you call it. The object itself is not frozen. If it changes later, some dev tools can show you the newer value and make you doubt yourself. Log a copy instead, with structuredClone(value) or the spread syntax. The copy is a photograph. The original is a live window.

**Narrowing a bug by bisecting**
- The bug is in the half you have not already proved. So remove half the steps and see if it still happens.
- Comment out the second half of your test. Run it. Still broken, so the bug is in the first half. That one step often saves an hour.
- Keep halving until you are down to two or three lines.

**Breakpoints, and when try/catch is lying to you**
- A breakpoint is a line where your code pauses and you can inspect every variable around it. You click the line number in your editor to set one.
- The debugger statement is one word you drop into your code. It asks for a pause there even if your editor has no button. Remove it before you commit.
- A catch that swallows makes a bug invisible. Your run goes green and you have no clue why.
- If something is mysteriously fine, remove the catch and let it throw. The stack is the fastest way back to the cause.
- Do not wrap a helper in try/catch just to be safe. Let the error travel to the caller and add context there, with a cause, so the message says what you were doing.

**A value that is unexpectedly undefined**
- First inspect it. Print typeof value, then Object.keys(value). A property you think exists may be spelled differently.
- Also print Array.isArray(value). Arrays lie about their type name, so this is worth checking.
- Is the name spelled exactly the same in both places? Check the capitals.
- Is it async? If it is a promise, you need await, and then you have the value, not the promise.
- Is it a copy? A shallow copy drops nested things, and an object you spread has no methods.
- Is it zero, or is it undefined? Both look empty and mean opposite things. 0 is a real value. undefined means nothing was there.
- Is it off by one? Index 0 to length minus 1, and length is already one past the end.

**Make it small first**
- Before you change anything, copy the bug into a tiny script with no test runner and no framework.
- If it still fails there, you can try ten ideas in two seconds. If it does not fail there, the bug depends on the framework, and you now know that too.
- That is the fastest route there is.`,


      codeExample: `// A small debugging session: read a stack trace, inspect a
// surprising value, and time the slow step. Plain Node.

const results = [
  { name: 'login', ms: 210, ok: true },
  { name: 'checkout', ms: 1840, ok: false },
];

console.table(results);

console.group('slow step');
console.time('checkout');
for (let i = 0; i < 3; i++) {
  console.count('attempt'); // did this loop run once or many?
}
console.timeEnd('checkout');
console.groupEnd();

// Inspect a value before guessing what is wrong with it.
const user = { name: 'Ana', roles: ['admin'] };
console.log('typeof user:', typeof user);
console.log('keys:', Object.keys(user));
console.log('user.nam is undefined:', user.nam);

function readRows(table) {
  if (!table.rows) throw new Error('no rows on ' + table.name);
  return table.rows;
}

try {
  readRows({ name: 'users', rows: null });
} catch (err) {
  // top frames tell you where it broke, then who called it
  for (const frame of err.stack.split('\\n').slice(1, 3)) {
    console.log(frame.trim());
  }
}

// Log a copy so the value you see cannot change later.
const live = { status: 'pending' };
console.log('at print time:', live);
live.status = 'done';
console.log('after the change:', live);
console.log('a copy never changes:', structuredClone({ status: 'pending' }));`,
    },
  ],
};

export default topic;
