import type { Topic } from "../../types";

/** Async JavaScript - Waiting for things without freezing the page or your test run. */
export const topic: Topic = {
  slug: "async",
  title: "Async JavaScript",
  icon: "loader",
  description: "Waiting for things without freezing the page or your test run.",
  level: "intermediate",
  lessons: [
    {
      slug: "async-basics",
      title: "Asynchronous Basics",
      description: "Sync vs async, and why blocking is expensive.",
      content: `Asynchronous work is work you start and come back to later. You hand the job to the browser, carry on with the next line, and get a callback when the job finally finishes. It is like ordering coffee, taking a ticket, and chatting until the machine beeps. The counter is not blocked while your drink is made.

**Synchronous means standing in line**
Synchronous code does one thing and finishes it before the next thing starts. It is like a cashier serving one customer at a time in a single queue. Nothing else moves until the current step is done, even if that step is slow.

**Asynchronous is not the same as fast**
Nothing actually got quicker. The slow job took exactly as long. What changed is that the page could paint, run timers and answer clicks while it ran. Overlapping the waiting is the benefit, not speed.

**One thread is why this matters**
JavaScript runs your code on a single thread, which is one lane of traffic. A long synchronous job fills the lane and nothing else can move. In the browser the page stops painting and clicks stop working. In a test runner nothing else in the process advances either.

**What counts as asynchronous**
- Network requests, such as fetch or any API call
- Timers, such as setTimeout and setInterval
- Reading or writing files with the file system module
- Waiting on a database, or on a Playwright action
A long for loop over a million items is not asynchronous. JSON.parse on a ten megabyte string is not asynchronous. Both hold the lane until they finish, because nothing hands control back to the browser.

**Callbacks were the old way**
Callbacks came first. You pass a function to another function and it calls it later. Chaining several for a real flow turned into a pyramid of indentation, and one forgotten error check hid a real failure. Promises replaced that pyramid. async and await are the newest layer on top of promises, and they only change how the code reads.

**await never blocks the thread**
await pauses one function and gives the lane back so other code can run. The paused function is written down somewhere and resumed later, like a bookmark in a book. The rest of that function waits. The rest of the page does not.

**Where you meet this in real work**
- Playwright actions return promises, so awaiting page.click is what keeps a test running one step at a time
- A test that fires three API calls and waits for each one pays three round trips instead of one
- A slow synchronous helper inside your test doubles as a freeze, and every timer you rely on arrives late`,
      codeExample: `// Async means "start it, come back later". Sync means "wait in line".
// The letters show the real print order, not the order of the lines.

console.log("A - sync, running now");

// Starts a slow job and hands control straight back. It does not block B.
const slowJob = new Promise((resolve) => {
  setTimeout(() => resolve("the slow job finished"), 50);
});

console.log("B - sync code kept going while that job ran");

// A timer is a queue too. It waits for the sync code to end, then it fires.
setTimeout(() => console.log("C - 0ms timer fired, the 50ms job is still running"), 0);

// The promise only settles at 50ms, so its handler is the last thing here.
slowJob.then((message) => console.log("D - " + message));`,
      quiz: [
        {
          question: "Why does JavaScript need async code?",
          options: ["To run on multiple threads","To wait for slow operations without blocking","To make code shorter","It does not need it"],
          correctIndex: 1,
          explanation: "Async lets single-threaded JS wait on I/O/network without freezing.",
        },
        {
          question: "Which runs first: a Promise microtask or a setTimeout callback?",
          options: ["Promise microtask","setTimeout callback","They run together","Random order"],
          correctIndex: 0,
          explanation: "Microtasks (Promises) are processed before the next macrotask (timer).",
        },
      ],
    },
    {
      slug: "promises",
      title: "Promises",
      description: "A value that is not ready yet, with three outcomes.",
      content: `A promise is a placeholder for a value that is not ready yet. Think of it as a receipt for a parcel. You hold the receipt now, and later it tells you what arrived or that something went wrong. It has one job, which is to report the outcome of some work exactly once.

**Three states, and settled for good**
- pending: the work is still running. This is the starting state.
- fulfilled: the work finished and produced a value.
- rejected: the work failed and produced an error.
Settled means the promise has stopped changing. Once fulfilled it stays fulfilled forever. Once rejected it stays rejected forever. A late resolve or a late reject is ignored. That is why a promise is safer than a shared variable, which any other function could overwrite.

**Creating one with new Promise**
new Promise takes an executor function, and that executor runs immediately and synchronously. The executor receives two functions from JavaScript. resolve(value) marks the promise fulfilled. reject(error) marks it rejected. Call one of them once. Calling both is pointless, because only the first call counts. You almost never build one yourself, because the APIs you call already return promises.

**Reading one with then, catch and finally**
then registers a function to run when the promise fulfils. catch registers a function to run when it rejects. finally registers a function that runs either way, so it suits cleanup. Leaving off catch means the rejection has nowhere to go, and Node reports an unhandled rejection.

**The chaining rule**
then does not return the original value. It returns a new promise for whatever its callback returned. Return a value and the new promise fulfils with it. Return a promise and the new promise waits for that one instead, which flattens nested work into a straight line.

**How errors move**
A throw inside a then callback rejects the promise that then returned. The next catch further down the chain receives that error. This is why one catch at the end of a long chain can handle an error thrown anywhere above it.

**What a promise cannot do**
A promise cannot be cancelled. Once the work has started, ignoring the result is all you can do. A promise also cannot be read directly. There is no promise.result, you wait for it with then or with await.

**Where you meet this in real work**
- An API helper returns a promise, so a test waits for the data before asserting on it
- A file write with the file system module returns a promise that rejects on a bad path
- A rejected promise with no catch gives you a noisy error and a test run that looks broken for no clear reason`,
      codeExample: `// A promise is a value that is not ready yet. This one reports later.
function loadThing(ms, shouldFail) {
  // The executor runs immediately. It decides when the promise settles.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("could not load thing"));
      else resolve({ id: 7, name: "Ana" });
    }, ms);
  });
}

// then returns a NEW promise, so handlers can be chained flat.
loadThing(40, false)
  .then((thing) => {
    console.log("loaded:", thing.name);
    // Returning a promise here is unwrapped before the next then runs.
    return loadThing(40, false).then((more) => more.name);
  })
  .then((name) => console.log("second step:", name))
  .catch((err) => console.log("caught:", err.message))
  .finally(() => console.log("cleanup always runs"));

// A throw inside a callback becomes a rejection that catch can see.
Promise.resolve(10)
  .then((n) => {
    throw new Error("bad number " + n);
  })
  .catch((err) => console.log("rejected instead:", err.message));`,
      quiz: [
        {
          question: "What are the three states of a Promise?",
          options: ["pending, fulfilled, rejected","start, middle, end","open, closed, error","wait, done, done"],
          correctIndex: 0,
          explanation: "A promise starts pending and settles to fulfilled or rejected.",
        },
        {
          question: "What does Promise.all do?",
          options: ["Waits for all promises, failing fast on rejection","Runs them one at a time","Returns only the first result","Cancels all promises"],
          correctIndex: 0,
          explanation: "Promise.all resolves when every promise resolves; it rejects as soon as one rejects.",
        },
      ],
    },
    {
      slug: "promise-composition",
      title: "Promise Composition",
      description: "all, allSettled, race, any, and chaining with then/catch.",
      content: `Composition means building one asynchronous flow out of several. You have two or more promises and you want one answer from them: all of them, the fastest one, or every outcome no matter what. Promise ships four tools for this, and each one throws away something you might have wanted.

**Promise.all waits for everything**
Promise.all takes an array of promises and gives back a promise for an array of results in the same order you passed in. It resolves when every input has resolved. If any input rejects, the whole thing rejects with that first error, and the other results are thrown away even if they arrive later. The rule is all or nothing.

**Promise.allSettled reports every outcome**
Promise.allSettled also waits for everything, but it never rejects. It resolves with an array where each slot is a report object. Every report has a status field, which is either "fulfilled" or "rejected". A fulfilled report also has a value, and a rejected report also has a reason. Always read the status before you read the other field, because one of them is missing.

**Promise.race takes the first to settle**
Promise.race resolves or rejects with whichever input settles first, and then it stops caring about the rest. One input settling is enough. The losers are still running, and their results are dropped, so a race cannot cancel the work you did not win with.

**Promise.any takes the first success**
Promise.any is the mirror image of race. It ignores rejections and resolves with the first fulfilled result. If every input rejects, it rejects with an AggregateError, which is a single error object holding an errors array of all the failures. Both race and any want a success, but any is happy to have rejections along the way.

**Sequential and parallel are different**
Sequential means waiting for one call before starting the next, so the total time is the sum of all the calls. Parallel means starting them all before waiting for any, so the total time is the slowest single call. If the second call does not need the first result, sequential is wasted waiting and usually a performance bug.

**The throwaway variable trick**
To make two calls run at once, start both first, drop the results into variables, then wait for them together. The call starts on the assignment line, not on the await line. Promise.all then waits for both and hands back the results as an array.

**Patterns worth knowing, and where you meet them**
- Map over an array of promises with Promise.all so you get one result per input
- Cap how many run at once with a small pool helper, so fifty requests do not hit the server at once
- Chain steps with array reduce into one waterfall promise when each step needs the previous result
- Use allSettled in a test that collects every page's result, so one bad page does not hide the rest
- Seed a test database with several requests at once and wait for the slowest one
- Race a page load against a timeout so the test fails fast instead of hanging`,
      codeExample: `// Composition: one result from several promises.
// Each fake call waits real ms, so these timings are real.
function call(name, ms, fail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (fail ? reject(new Error(name + " failed")) : resolve(name + " ok")), ms);
  });
}

// all rejects on the FIRST failure and drops the rest.
Promise.all([call("users", 60, false), call("orders", 40, true)])
  .catch((e) => console.log("all stopped early:", e.message));

// allSettled waits for everyone and reports each outcome.
Promise.allSettled([call("users", 60, false), call("orders", 40, true)])
  .then((rs) => rs.forEach((r) => console.log("settled:", r.status, r.value || r.reason.message)));

// Sequential pays 60 + 40. Parallel pays the slowest only.
async function compare() {
  let start = Date.now();
  await call("users", 60, false);
  await call("orders", 40, false);
  const sequential = Date.now() - start;

  start = Date.now();
  const both = await Promise.all([call("users", 60, false), call("orders", 40, false)]);
  console.log("sequential " + sequential + "ms vs parallel " + (Date.now() - start) + "ms");
  console.log("parallel gave both:", both.join("+"));

  // any wants a success. All failing means an AggregateError.
  Promise.any([call("users", 20, true), call("orders", 20, false)])
    .then((win) => console.log("any picked the first success:", win))
    .catch((e) => console.log("any aggregate:", e.name, e.errors.length, "failures"));
}

compare();`,
      quiz: [
        {
          question: "What does Promise.allSettled return when one promise rejects?",
          options: ["It rejects immediately","It resolves with one report per promise, each carrying a status","It resolves with only the fulfilled values","It retries the failed promise"],
          correctIndex: 1,
          explanation: "allSettled never rejects. Each slot is a report object with status and value or reason.",
        },
        {
          question: "What error does Promise.any reject with when every promise fails?",
          options: ["A plain Error with the last message","An AggregateError holding an errors array","Nothing, it resolves with undefined","A TypeError about undefined"],
          correctIndex: 1,
          explanation: "Promise.any collects every rejection into a single AggregateError.",
        },
      ],
    },
    {
      slug: "async-await",
      title: "async / await",
      description: "Writing async code that reads like sync code.",
      content: `async and await let you write promise code in the order things actually happen. Instead of nesting handlers with then, you write one straight line at a time and stop at each point where you need to wait. The promise machinery underneath is unchanged. Only the reading changes.

**An async function always returns a promise**
Putting async before a function declaration or expression changes one thing: the return value gets wrapped in a promise. Even returning a plain number gives you a promise that fulfils with that number. Throwing synchronously inside an async function rejects that promise instead of crashing the caller.

**await pauses one function and nothing else**
await takes a promise, waits for it to settle, and hands you the value. While it waits, the engine puts the function aside and runs other code. This is why await never blocks the thread. Blocking means the whole program stops. await never does that. It only stops the one function that contains it, and code after the await waits for it.

**await works on anything**
You can await a promise, or you can await 42, or undefined. Awaiting a non promise just gives the event loop a turn and carries on. So wrapping a plain value in Promise.resolve is a safe habit, and awaiting something that is not a promise is not a bug.

**try and catch replace then and catch**
Because await makes the code read like synchronous code, try and catch finally fits naturally. Put await inside try and any error from that line, or from anything it calls, lands in the catch. You can also use try and catch without any await, because an async function already turns a throw into a rejection.

**Sequential awaits are the default**
Writing await a then await b starts b only after a has finished, so you pay the two times added together. If b does not need the result of a, that waiting is wasted. Start both first, then wait for them together with Promise.all, and you pay only the slower one.

**The classic for loop bug**
A for loop with await inside runs the body one item at a time and waits on every pass, which is the slow version. The fix is to collect the promises into an array as the loop runs, then wait on the whole array with Promise.all. The loop body now starts all the work, and one await waits for the batch.

**Returning, floating promises and top level await**
return inside an async function resolves the promise that function returns, so returning a value works the way you expect. A promise you start but never await is called floating, and a floating promise that rejects reports the problem late, often after the test has already passed or failed. Top level await means using await outside any function, and it only works in a module, which is a file loaded with import or export. In a plain Node script it is a syntax error, so wrap it in an async function instead.`,
      codeExample: `// async makes the function return a promise. await unwraps one.
const wait = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

async function loadUser(id) {
  await wait(40, null);
  if (id < 0) throw new Error("no user " + id);
  return { id: id, name: "Ana" };
}

// try and catch replaces .catch because await reads like sync code.
async function safely(id) {
  try {
    const user = await loadUser(id);
    return "PASSED: " + user.name;
  } catch (err) {
    return "FAILED: " + err.message;
  }
}

// Sequential awaits add up: 50ms then another 50ms.
async function sequential() {
  const started = Date.now();
  await wait(50, "first");
  await wait(50, "second");
  return Date.now() - started;
}

// Start both on these two lines, then await them together.
async function parallel() {
  const started = Date.now();
  const a = wait(50, "first");
  const b = wait(50, "second");
  const [one, two] = await Promise.all([a, b]);
  return { ms: Date.now() - started, text: one + " and " + two };
}

(async () => {
  console.log(await safely(1));
  console.log(await safely(-1));
  console.log("sequential took " + (await sequential()) + "ms");
  const fast = await parallel();
  console.log("parallel took " + fast.ms + "ms and gave " + fast.text);
})();`,
      quiz: [
        {
          question: "What does the await keyword do?",
          options: ["Blocks the entire program","Pauses the async function until the promise settles","Creates a new thread","Converts sync to async"],
          correctIndex: 1,
          explanation: "await suspends the async function only, not the whole thread.",
        },
        {
          question: "Where can await be used?",
          options: ["Anywhere","Only inside async functions (or modules)","Only in callbacks","Only in arrow functions"],
          correctIndex: 1,
          explanation: "await is only valid inside async functions or top-level module code.",
        },
      ],
    },
    {
      slug: "fetch-apis",
      title: "fetch & Working with Real APIs",
      description: "Making requests, reading responses, and handling errors.",
      content: `fetch is the built in function for HTTP requests. You give it a URL and it gives back a promise. That promise resolves to a Response object, which holds the status, the headers and a way to read the body. There are always two steps: wait for the response, then read the body.

**fetch does not reject on 404 or 500**
A 404 Not Found is a valid answer from a healthy server, so fetch treats it as a success. A 500 is the same story. The promise only rejects when the request never completed, such as a typo in the host name or no connection at all. So you must check response.ok yourself. It is true for status 200 to 299 and false for everything else.

**The shape of a real call**
Wait for fetch, check res.ok and throw if it is false, then await res.json() to read the body. The body can only be read once, so read it before you start asserting. Skipping the ok check is the most common bug here, because a 404 error body then gets parsed and treated like real data.

**Error first style in a helper**
A helper that hands back the raw response forces every caller to repeat the checks. A helper that throws on a bad status puts the error handling in one place. Put the status and the body in the message, because "request failed" tells you nothing at three in the morning.

**Sending data**
method picks the verb. headers carries metadata. body carries the payload, and a JavaScript object has to be turned into a string with JSON.stringify first. If the body is JSON you must also set Content-Type to application/json, or the server will read the text as something else and reject it.

**Query strings with URL**
Build a URL object and use its searchParams to add query values. searchParams escapes spaces and symbols for you. Do not paste values in by hand, because one stray space in a search term breaks the whole request.

**Timeouts and retries**
An AbortController produces a signal you can pass to fetch, and aborting that signal makes the promise reject with an AbortError. Put a setTimeout around it so a hanging server cannot hang your test run forever, and clear that timer once the response arrives. A flaky endpoint fails now and then, so retry a few times and wait longer after each failure, which is called exponential backoff. Only retry the safe cases. Never retry a POST that creates something, because you may create it twice.

**Browser fetch versus Playwright**
Fetch from inside the page is subject to CORS, which is the browser rule that stops one origin reading another origin's response. Playwright's request context does not run inside the page, so it has no CORS problem and no page cookies. An API test built on a request fixture is the fast, reliable way to check a backend.`,
      codeExample: `// fetch resolves to a Response and does NOT reject on a 404.
// This fake has the same shape, so the code below is real logic.
function fakeFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = url.includes("users");
      resolve({
        ok: found,
        status: found ? 200 : 404,
        async json() {
          return found ? { users: ["Ana", "Bob"] } : { error: "not found" };
        },
      });
    }, 30);
  });
}

// A helper that throws with the status AND the body, so the
// failure message tells you what the server actually said.
async function getJson(url, options) {
  const method = (options && options.method) || "GET";
  const res = await fakeFetch(url);
  const body = JSON.stringify(await res.json());
  if (!res.ok) throw new Error(method + " " + url + " -> HTTP " + res.status + " " + body);
  return JSON.parse(body);
}

async function apiTest() {
  // searchParams escapes values, so a space in "a b" is safe.
  const url = new URL("https://api.test.com/users");
  url.searchParams.set("page", "1");
  url.searchParams.set("q", "a b");

  try {
    const data = await getJson(url.toString());
    console.log("request was:", url.pathname + url.search);
    console.log("users returned:", data.users.length);
  } catch (err) {
    console.log("helper threw:", err.message);
  }

  try {
    await getJson("https://api.test.com/orders");
  } catch (err) {
    console.log("second call threw:", err.message);
  }
}

apiTest();`,
      quiz: [
        {
          question: "When does fetch reject its promise?",
          options: ["On HTTP 404","On network-level failures only","On HTTP 500","When JSON is missing"],
          correctIndex: 1,
          explanation: "fetch only rejects on network errors. HTTP statuses must be checked via response.ok.",
        },
        {
          question: "What does JSON.stringify do?",
          options: ["Parses text into objects","Turns an object into a JSON string","Validates an API","Formats code"],
          correctIndex: 1,
          explanation: "stringify serializes to a string; parse is the reverse.",
        },
      ],
    },
    {
      slug: "event-loop",
      title: "The Event Loop",
      description: "Microtasks, macrotasks, and the output-order puzzles.",
      content: `The event loop is the rule book that decides when waiting work gets its turn. It is the answer to "why did that log line print before this one". JavaScript runs your code on one thread, so something has to keep track of everything that is waiting.

**Three places work waits**
- The call stack is the list of functions running right now. It is last in, first out, like a stack of plates. Only one function runs at a time.
- The task queue, also called the macrotask queue, holds whole callbacks such as setTimeout, setInterval and I/O results.
- The microtask queue holds promise callbacks, which means then handlers and everything that runs after an await.

**The loop itself**
Run the code on the stack until the stack is empty. Then drain the entire microtask queue, running every callback in it. Then take exactly one task from the task queue, run it, and start again. The stack must be empty before anything queued is allowed to run. That is why a queued callback can never interrupt a function that is still going.

**Microtasks always beat timers**
Promise callbacks run before the next timer. A microtask queued from inside another microtask still runs before the next timer, because the microtask queue is emptied completely rather than one item at a time. So a log line, then a then handler, then a zero millisecond timer, print in that order.

**setTimeout with 0 is not immediate**
It means "run this as soon as possible after the stack empties", not "run this now". Any slow synchronous code queued ahead of it pushes it back. In practice it lands a few milliseconds later, and that gap is a classic cause of a flaky wait.

**Why a long loop freezes everything**
A busy while loop occupies the call stack and never gives it up. Timers, clicks and promise callbacks are all ready, and none of them may run until the stack is empty. In the browser the page stops repainting. In a test runner your timer based waits all arrive late at once.

**Unhandled rejections**
A rejected promise with no catch has nowhere to go. Node reports an unhandled rejection, and newer versions can end the process on it. If you start a promise and never keep the handle, you get that message instead of your own error.

**How this explains a flaky wait**
A fixed wait of 500ms really means "set a timer and hope the loop is free in time". If a long synchronous step is running, the timer fires late and the check runs against stale state. Replacing a fixed sleep with a loop that polls using await is more reliable, because it asks repeatedly instead of guessing once. Remember the order in a real test too: synchronous code, then every pending promise callback, then one timer at a time. A helper that logs inside itself, followed by an assert after an await, will print the helper log before the assertion even if the code reads the other way round.`,
      codeExample: `// The event loop decides the print order, not the order of the lines.

console.log("1 - sync, running now");

setTimeout(() => console.log("6 - timer, a macrotask"), 0);

Promise.resolve().then(() => {
  console.log("4 - microtask from a promise");
  // A microtask queued inside a microtask still beats the next timer.
  Promise.resolve().then(() => console.log("5 - microtask from a microtask"));
});

queueMicrotask(() => console.log("4b - microtask from queueMicrotask"));

console.log("2 - sync again");

// A busy loop holds the call stack, so the 20ms timer cannot fire yet.
function blockFor(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

setTimeout(() => console.log("7 - the delayed timer finally ran"), 20);
blockFor(120);
console.log("3 - sync work done, the loop can breathe now");`,
      quiz: [
        {
          question: "Which runs before the other: microtasks or macrotasks?",
          options: ["Macrotasks always","Microtasks drain before the next macrotask","They alternate equally","Randomized"],
          correctIndex: 1,
          explanation: "The event loop drains the whole microtask queue before each macrotask.",
        },
        {
          question: "What lives on the call stack?",
          options: ["Timers","Functions currently executing","Promise callbacks waiting","HTTP responses"],
          correctIndex: 1,
          explanation: "The call stack holds only what is currently executing.",
        },
      ],
    },
  ],
};

export default topic;