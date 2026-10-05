import type { Topic } from "../../types";

/** Performance & Security - Making code fast, and keeping it from being exploited. */
export const topic: Topic = {
  slug: "performance-security",
  title: "Performance & Security",
  icon: "shield",
  description: "Making code fast, and keeping it from being exploited.",
  level: "advanced",
  lessons: [
    {
      slug: "performance-basics",
      title: "Performance Basics",
      description: "Measuring first, then optimising the right thing.",
      content: `Performance work is not about clever code. It is about finding the one slow spot, fixing it, and proving the number moved. Guessing costs days. Measuring costs a minute.

**Measure first, always**
- Guessing at a bottleneck is like tightening every bolt on a car because one wheel wobbles.
- Timing tells you which line is slow. Reading the code only tells you which line looks slow.
- Decide whether a line needs to change only after you have a number for it.
- Time it again afterwards. Two comparable numbers are the only proof you will have.
- console.time("label") starts a stopwatch. console.timeEnd("label") stops it and prints milliseconds. Both labels must match, or nothing prints.
- Date.now() returns milliseconds, so subtracting two readings gives a duration. process.hrtime.bigint() counts nanoseconds, for fast work.
- Time the whole operation once. Only go inside it if the whole thing is too slow.

**What a slow test suite really costs you**
- A suite that takes 40 minutes instead of 4 gets skipped when a release goes late.
- The point of a suite is fast feedback. A slow suite is telling you about yesterday.
- Most of the cost is waiting, not thinking. Long timeouts and fixed sleeps are the usual suspects.
- Time the whole run the same way, then attack the ten slowest spec files.

**The cheap wins, in the order to try them**
- Do not look the same thing up over and over. Each lookup is work.
- Read array.length once into a const instead of reading the property on every pass.
- Move a function out of the loop. Defining it 10000 times builds 10000 unused functions.
- Do not build a fresh object or array literal inside a hot loop when one reused copy will do.
- Replace list.includes(value) in a loop with a Set and set.has(value). An array search is a walk, a Set lookup is a direct trip.
- Return or break as soon as you have the answer. The rest of the work is waste.
- Do not use JSON.parse(JSON.stringify(x)) as a copy. A spread is cheaper.

**O(n) versus O(n squared)**
- Big O notation describes how work grows as data grows. It is a growth curve, not a stopwatch.
- O(n) means work grows in step with the data. Double the rows, double the work.
- O(n squared) is a loop inside a loop over the same data. Double the rows, quadruple the work.
- The nested loop below compares every row with every target. The Set version touches each row once.
- Two loops over one collection? Ask whether the inner search could be a lookup table.

**Debounce and throttle: this fires too often**
- Debounce waits until the input is quiet for a moment, then runs once. It suits search-as-you-type.
- Throttle runs the work at most once per time window while you keep typing. It suits scroll and resize handlers.
- Both sit on setTimeout or requestAnimationFrame. Debounce resets the timer, throttle checks the clock.
- This is why a test must wait for the page to settle, and why a fixed sleep is a bad substitute.

**Memory leaks in plain words**
- A leak is memory your code still holds but will never use again. Like a drawer nobody empties.
- An event listener you added and never removed keeps its element, and everything it points at, alive.
- A closure that captured a big array keeps that array alive for as long as the closure is reachable.
- A Map or cache you only ever add to grows with no ceiling. Give it a size limit or an expiry time.
- A cached value that never expires also serves stale answers. Cache with a time to live.

**Where you meet this in real work**
- A helper that scans a table for a row it already found twenty lines earlier.
- A Playwright spec that calls waitForTimeout(5000) instead of waiting for a real condition.
- A fixture that adds a listener to page and never removes it between tests.
- Micro-optimising a cold path is wasted work. Nobody notices a report that runs once a night.
- The profiler-first rule: no change lands without a before number and an after number.`,
      codeExample: `// Timing works in plain Node. console.time / console.timeEnd are the
// built-in stopwatch. In a browser you would also open the Performance panel.
const rows = Array.from({ length: 3000 }, (_, i) => i);
const targets = Array.from({ length: 2000 }, (_, i) => i * 3);

console.time("includes inside a loop, O(n squared)");
const slow = rows.filter((r) => targets.includes(r));
console.timeEnd("includes inside a loop, O(n squared)");

console.time("Set.has instead, O(n)");
const lookup = new Set(targets);
const fast = rows.filter((r) => lookup.has(r));
console.timeEnd("Set.has instead, O(n)");
console.log("same answer?", slow.length === fast.length, fast.length, "matches");

// A hand-rolled stopwatch for when console.time is not available.
function timed(label, fn) {
  const start = Date.now();
  const out = fn();
  console.log(label + ": " + (Date.now() - start) + "ms, " + out + " items");
  return out;
}
timed("JSON round trip as a copy", () => JSON.parse(JSON.stringify(rows)).length);
timed("spread as a copy", () => [...rows].length);

// A cache with no ceiling is a leak. Watch the heap grow.
const before = process.memoryUsage().heapUsed;
const cache = new Map();
for (let i = 0; i < 100000; i++) cache.set("id-" + i, { payload: "x".repeat(200) });
console.log("cache entries:", cache.size, "| MB:", Math.round(before / 1e6), "->", Math.round(process.memoryUsage().heapUsed / 1e6));
cache.clear();
console.log("cleared to", cache.size, "entries; the heap drops when the GC runs");`,
    },
    {
      slug: "browser-rendering",
      title: "The Rendering Pipeline",
      description: "Layout, paint, reflow, and requestAnimationFrame.",
      content: `Before a single pixel of a page reaches the screen, the browser puts the page through a fixed sequence of steps. Knowing the order is the whole skill, because your JavaScript can only push the browser back to one of those steps. This lesson is the one you cannot practise without a browser, so the example below fakes a tiny DOM and counts the work instead.

**The pipeline, in order**
- Parse HTML. The browser reads the bytes and turns tags into a tree of objects.
- Build the DOM, the Document Object Model. That tree is the live, changeable version of your HTML.
- Build the CSSOM, the CSS Object Model. The same thing, but for your stylesheets and inline styles.
- Build the render tree. DOM and CSSOM are merged, and elements with display: none are dropped.
- Layout, also called reflow: work out the exact position and size of every box.
- Paint: fill in the pixels, the colours, the text, the shadows.
- Composite: stack the painted layers and hand them to the screen.
- Change something near the top and every step below it runs again. That is the cost you pay for a style change.
- Adding or removing a node dirties the DOM. Reading a size after a write forces layout to happen right now.

**Reflow versus repaint versus composite**
- Reflow means the browser recalculates geometry. Like re-measuring the whole kitchen because you moved one shelf.
- Repaint means it fills in pixels again, because a colour or a shadow changed but the boxes did not.
- Composite means it moves layers that are already painted. It is the cheapest of the three.
- Cost order to remember: geometry beats paint, paint beats moving a ready-made layer.

**The read-write-read-write trap**
- offsetWidth, offsetHeight, clientHeight, scrollTop and getBoundingClientRect are all reads of layout.
- Writing a style and then reading a size makes the browser do the layout it was trying to postpone. That is a forced synchronous reflow.
- Do that inside a loop over 100 rows and you pay for 100 layouts instead of one.
- The fix is to batch. Do all the writes first, then do all the reads.
- requestAnimationFrame gives you the callback that runs just before the next paint. Change what is on screen there, never in a loop that reads.

**Why left and top are slow and transform is fast**
- left and top change geometry, so every frame triggers reflow and repaint.
- transform and opacity only move or fade a layer that is already painted, so they stay on the GPU and skip layout.
- Same animation, very different cost. This is why tutorials tell you to animate transform.

**The DOM is live, and it is big**
- Every style change has to be reasoned about against the whole page, not just the element you touched.
- A documentFragment is a staging area. Build in it, then insert once, so the page is disturbed once.
- Setting innerHTML re-parses a whole HTML string. Every child is thrown away and rebuilt.
- Virtual scrolling exists for the same reason: build only the rows that fit on screen, and recycle the rest.

**The event loop and the frozen page**
- JavaScript runs one long task at a time on the main thread. The browser cannot paint in the middle of your task.
- A loop over 3000 rows that takes 200ms is a page that looks frozen for 200ms, because nothing is being drawn.
- Yield to the event loop between chunks of work and the page keeps painting. Your test then stops timing out for no reason.

**Where you meet this in real work**
- A table that scrolls like treacle, because each row write is followed by a read.
- A spinner that never appears, because one synchronous task outran the first frame.
- A scroll test that needs waitForTimeout because virtual scrolling has not caught up yet.
- None of this is visible in a terminal. Open the browser devtools, record a performance profile, and look.`,
      codeExample: `// Fake DOM: one node plus counters for the work a real browser would do.
// Real names: offsetWidth, requestAnimationFrame, createDocumentFragment.
const el = (tag) => ({ tag, style: { left: 0, transform: "", opacity: 1 } });
const stats = { reflows: 0, paints: 0 };
const read = (n) => { stats.reflows++; return n.style.left; };   // offsetWidth
const write = (n, p, v) => { n.style[p] = v; stats.paints++; };
const row = el("li");

// Trap: write, read, write, read. Layout is forced again on every pass.
const t0 = Date.now();
for (let i = 0; i < 5000; i++) { write(row, "left", i); read(row); }
console.log("trapped:", stats.reflows, "forced reflows in", Date.now() - t0, "ms");

// Fix: every write first, then one read. That is one layout for the batch.
stats.reflows = 0;
stats.paints = 0;
const t1 = Date.now();
for (let i = 0; i < 5000; i++) write(row, "transform", "translateX(" + i + "px)");
read(row);
console.log("batched:", stats.paints, "paints,", stats.reflows, "reflow,", Date.now() - t1, "ms");

// left and top repaint. transform and opacity only composite a ready layer.
stats.paints = 0;
write(row, "left", 20);                          // geometry, so a repaint
write(row, "transform", "translateX(20px)");      // composite only
write(row, "opacity", 0.5);                      // composite only
console.log("one frame -> paints:", stats.paints, "(the last two did not repaint)");`,
    },
    {
      slug: "security",
      title: "Web Security for Testers",
      description: "XSS, CSRF, prototype pollution, and safe test code.",
      content: `Security bugs are not exotic. Almost all of them come from one habit: trusting something you should not have. Your job as a tester is to feed hostile input into a field and check the system stays boring. This lesson is the vocabulary for those tests.

**The trust boundary**
- A trust boundary is the line where data arrives from outside your program.
- Anything from a user, a URL, a query string, a cookie or an API response is untrusted. Everything you wrote yourself is trusted.
- Untrusted does not mean malicious. It means nobody has checked it yet.
- Validate at the boundary, then trust your own validated copy.
- typeof x === "string" checks the shape of the value, not its safety.

**XSS and its three flavours**
- XSS, cross-site scripting, means attacker text gets executed as code by the browser, using the logged-in session.
- Stored XSS: the payload is saved in a database and replayed to every later visitor.
- Reflected XSS: the payload comes back in the response, from a URL parameter or a search box, and fires on one page load.
- DOM-based XSS: no server round trip. The payload sits in the address bar and is read by your own JavaScript.
- Testing all three is mechanical: type a name such as <img src=x onerror=alert(1)> and watch what the page does with it.

**Why innerHTML is the classic hole**
- element.innerHTML = value and document.write(value) both parse the string as HTML. An onerror attribute is code, so the browser runs it.
- element.textContent = value stores value as text. A tag stays a tag on screen and never becomes code. This is the fix.
- If you must render real HTML, sanitise it with a library such as DOMPurify, then insert the cleaned string.
- An escapeHtml helper is the hand-rolled version: replace &, <, >, " and ' with entities. It is fine for plain text only.

**CSRF: the browser sends the cookies by itself**
- CSRF, cross-site request forgery, abuses a cookie the browser attaches without being asked.
- A logged-in tester visits evil.example, which posts a form to your app. Your app sees the cookie and acts, and no password was stolen.
- SameSite=Lax or Strict stops the cookie riding along on a cross-site post. It is the cheapest strong defence.
- Requiring a custom header or a CSRF token defeats it too, because a cross-site form cannot set custom headers.
- Checking Origin or Referer is the fourth belt, not a replacement for the first three.

**Prototype pollution**
- Every object inherits from Object.prototype. Writable, code there runs for objects you never touched.
- A recursive merge that copies untrusted JSON key by key can be handed __proto__ and write straight into that shared object.
- Then isAdmin is true on every object in the process, and your authorisation checks quietly pass.
- The fix is to reject __proto__, constructor and prototype as keys, and to use Object.create(null) or a Map for untrusted dictionaries.

**The rest of the list**
- eval and new Function turn a string into running code. Never call them on anything a user can influence.
- An open redirect takes your URL and sends the user somewhere else. Validate the host against an allowlist.
- Anything shipped to the browser is public. An API key in a bundle is a published key.
- Keep secrets on the server. Send the browser a short lived token at most.

**Test the defences, do not assume them**
- Type a script tag as a name, save it, reload, and assert the text comes back escaped. Look at the DOM, not the pixels.
- Assert that no new script or event handler attribute appeared anywhere on the page.
- Check the response cookie for SameSite, and confirm a cross-origin POST without a token is rejected.
- Send {"__proto__": {"isAdmin": true}} to any endpoint that merges input, then assert ({}).isAdmin is still undefined.
- Log what a page sends. Request headers in devtools catch leaked tokens faster than code review.`,
      codeExample: `// A user typed this, so it is untrusted. escapeHtml makes it inert.
function escapeHtml(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Fake of element.textContent: stores text, not markup.
const comment = { set textContent(v) { this.innerHTML = escapeHtml(v); } };
const payload = '<img src=x onerror="alert(1)">';
comment.textContent = payload;
console.log("1. escaped:", comment.innerHTML);
console.log("2. no live tag:", !/<img/.test(comment.innerHTML));

// Prototype pollution: a recursive merge that trusts key names.
function merge(target, source, safe) {
  for (const key of Object.keys(source)) {
    if (safe && ["__proto__", "constructor", "prototype"].includes(key)) continue;
    const v = source[key];
    target[key] = v && typeof v === "object" ? merge(target[key] || {}, v, safe) : v;
  }
  return target;
}
const attack = JSON.parse('{"role":"user","__proto__":{"isAdmin":true}}');
merge({}, attack, false);
console.log("3. unsafe merge leaks:", ({}).isAdmin);
delete Object.prototype.isAdmin;
console.log("4. safe merge:", ({}).isAdmin, "| role:", merge({}, attack, true).role);

// CSRF: the browser sends cookies by itself, so check the token.
const allowed = (h) => h.token === "t-99" && h.origin === "https://app.test";
console.log("5. cookie only:", allowed({ cookie: "sid=abc" }));
console.log("6. token+origin:", allowed({ token: "t-99", origin: "https://app.test" }));`,
    },
  ],
};

export default topic;
