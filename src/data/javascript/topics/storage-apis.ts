import type { Topic } from "../../types";

/** Storage & Browser APIs - Persisting data and talking to the browser outside the page. */
export const topic: Topic = {
  slug: "storage-apis",
  title: "Storage & Browser APIs",
  icon: "database",
  description: "Persisting data and talking to the browser outside the page.",
  level: "advanced",
  lessons: [
    {
      slug: "storage",
      title: "localStorage & sessionStorage",
      description: "Key-value persistence, quotas, and JSON.",
      content: `The browser hands every page two small shelves for saving text. They are called localStorage and sessionStorage. They let a page remember something after a refresh, without asking a server for it. For a tester they matter because a test often needs a login to survive between steps.

**Two shelves, one origin**
- localStorage and sessionStorage are both key-value maps. A key is a name you choose. The value is a short piece of text.
- An origin is the three parts of a web address: scheme, host and port. So http://localhost:3000 is one origin.
- The shelves are per-origin. localhost:3000 cannot see what localhost:3001 saved. That is why logging in on one port never logs you in on the other.
- localStorage survives closing the browser and opening it again. It is like a note taped to the wall.
- sessionStorage is wiped when the tab closes. It is like a note on a sticky pad you throw away at the end of the day.

**Everything is a string**
- Storage holds text only. An object goes in as text and comes back as text.
- So you convert on the way in with JSON.stringify, and on the way out with JSON.parse.
- JSON.stringify turns a value into one text string. JSON.parse turns that string back into a value.
- Skip stringify on the way in and JSON.parse throws on the way out.
- A missing key gives you null, not undefined. So test with === null.

**The small API**
- setItem writes a key. getItem reads a key. removeItem deletes one key. clear() wipes everything for the origin.
- length tells you how many keys exist. key(i) gives the name of the key at position i.
- There is no call that lists the keys. You loop from 0 to length and collect each key(i).

**Limits and traps**
- The quota is roughly 5MB per origin. Go past it and setItem throws a QuotaExceededError.
- Wrap writes in try/catch so a full shelf does not crash your page.
- A stored JSON null comes back as the text "null", and JSON.parse turns it into null. So a key that holds null and a key that is missing look identical if you only test for null.
- Storage is synchronous. Reading a big value blocks the page, like a cashier counting coins at the till.
- Never put a password in localStorage. Any script on the page can read it.

**A safer wrapper**
- getJson reads a key and returns a fallback when the text is missing or broken.
- setJson writes a key and returns true or false, instead of throwing.
- The wrapper is a few lines. Writing it once stops a whole class of bugs.

**Where you meet this in real work**
- A Playwright test reads a token from localStorage, then calls the API directly and skips the UI.
- Cypress clears localStorage between tests so one run does not leak into the next.
- A login test that passes alone and fails in a suite is often a stale sessionStorage entry.`,
      codeExample: `// A stand-in for localStorage, so this runs in plain Node.
// In a page you use window.localStorage, not this class.
function makeStorage(limit = 40) {
  const map = new Map();
  return {
    get length() { return map.size; },
    getItem: (k) => (map.has(k) ? map.get(k) : null),  // null when missing
    setItem: (k, v) => {
      if (String(v).length > limit) throw new Error('QuotaExceededError');
      map.set(k, String(v));                           // always text
    },
    clear: () => map.clear(),
    key: (i) => [...map.keys()][i] ?? null,
  };
}
const local = makeStorage();   // sessionStorage dies with the tab
function getJson(store, key, fallback = null) {
  const raw = store.getItem(key);
  if (raw === null) return fallback;   // missing, not undefined
  try { return JSON.parse(raw); }
  catch { return fallback; }           // broken text from earlier
}
function setJson(store, key, value) {
  try { store.setItem(key, JSON.stringify(value)); return true; }
  catch (e) { console.log(' refused:', e.message); return false; }
}
setJson(local, 'user', { name: 'Ana', role: 'admin' });
console.log('local  :', getJson(local, 'user'));
console.log('missing:', getJson(local, 'theme', 'light'));
console.log('big ok?:', setJson(local, 'x', 'y'.repeat(50)));
local.setItem('corrupt', '{not json');
console.log('broken :', getJson(local, 'corrupt', 'default'));
for (let i = 0; i < local.length; i++) console.log('key', i, '=', local.key(i));`,
    },
    {
      slug: "cookies",
      title: "Cookies & document APIs",
      description: "Reading and writing cookies and the document.",
      content: `A cookie is one small line of text in the form name=value. The browser attaches it to almost every request it sends to that domain. The server can read it while no page script is running. That is the whole point of a cookie, and also its cost.

**document.cookie is one string**
- Reading document.cookie gives you every cookie for the current page joined into one string, like "session=abc; theme=dark".
- You split it yourself to find one value. Split on "; ", then split each piece on its first "=".
- Writing document.cookie = "theme=dark" does not replace everything. It appends one more cookie.
- To change a cookie, write the same name again with a new value.
- A cookie with HttpOnly is missing from that string on purpose.

**Attributes decide the rules**
- expires or max-age sets how long the cookie lives. With neither, it dies when the browser closes.
- max-age counts seconds. expires is a date string. Prefer max-age because it is easier to compute.
- path limits which pages send it. path=/ means every page on the site.
- domain widens it to subdomains. Leave it off to keep the cookie on the host that set it.
- Secure means send it over https only. Without Secure, the cookie also travels in plain http.
- HttpOnly means JavaScript cannot read it. document.cookie will not show it.
- SameSite says when a cookie rides along with a request from another site. The values are Lax, Strict and None.

**SameSite is the CSRF guard**
- CSRF is cross-site request forgery. Another site tricks your logged-in browser into sending a request you never meant to make.
- SameSite=Lax sends the cookie on normal top-level clicks, but not on hidden cross-site form posts. That stops most CSRF.
- SameSite=Strict sends it only from your own site. Safer, but it breaks logins that come back from another site, such as OAuth.
- SameSite=None is the escape hatch for embedded widgets. It requires Secure.

**Deleting, and the cost**
- You cannot delete a cookie with a delete call. You write the same name with an expiry in the past.
- Every cookie for the domain rides along with every request. That is slower, and it says more about the user than you meant.
- Keep cookies small. A few kilobytes is plenty. Do not put a JSON blob in one.

**Cookies or localStorage**
- Cookies are sent to the server automatically and can be HttpOnly. localStorage is never sent, and scripts can always read it.
- A session token for a real login belongs in a cookie that is HttpOnly, Secure and SameSite.
- UI preferences and test scratch data belong in localStorage.

**Where you meet this in real work**
- A Playwright test reads cookies from the browser context, or sets one to skip the login page.
- Cypress clears cookies between tests so a session from test one does not help test two.
- An "unauthorized" bug that only happens on https is often a cookie missing SameSite or Secure.`,
      codeExample: `// A stand-in for document.cookie. In a page you assign to
// window.document.cookie and the browser keeps the jar, not you.
const jar = { forServer: '', forScript: '' };

function writeCookie(jar, name, value, attrs = {}) {
  let line = name + '=' + encodeURIComponent(value);
  if (attrs.maxAge) line += '; Max-Age=' + attrs.maxAge;
  if (attrs.path) line += '; Path=' + attrs.path;
  if (attrs.secure) line += '; Secure';
  if (attrs.httpOnly) line += '; HttpOnly';
  if (attrs.sameSite) line += '; SameSite=' + attrs.sameSite;
  // HttpOnly means page scripts never see it. The server still reads it.
  const side = attrs.httpOnly ? 'forServer' : 'forScript';
  jar[side] = jar[side] ? jar[side] + '; ' + line : line;   // appends
  return line;
}

function readCookie(text, name) {
  return text.split('; ').reduce((found, pair) => {   // null when not there
    const i = pair.indexOf('=');
    return pair.slice(0, i) === name ? decodeURIComponent(pair.slice(i + 1)) : found;
  }, null);
}

writeCookie(jar, 'theme', 'dark', { path: '/', maxAge: 86400 });
writeCookie(jar, 'csrf', 't-99', { sameSite: 'Lax' });
writeCookie(jar, 'session', 'abc123', { httpOnly: true, secure: true });
console.log('script sees:', jar.forScript);
console.log('theme      =', readCookie(jar.forScript, 'theme'));
console.log('session    =', readCookie(jar.forScript, 'session'), '(hidden)');
console.log('server sees:', jar.forServer);
writeCookie(jar, 'theme', '', { path: '/', maxAge: 0 });   // past expiry deletes
console.log('after delete:', jar.forScript);`,
    },
    {
      slug: "timers-intervals",
      title: "Timers, Intervals & Debounce",
      description: "setTimeout, setInterval, and waiting without racing.",
      content: `Timers let JavaScript run something later. They are not a pause. They are how you schedule work once the current code has finished. In tests this is the difference between a stable suite and a flaky one, because a fixed sleep is a race you are choosing to lose sometimes.

**setTimeout schedules one run**
- setTimeout(fn, ms) calls fn once, after roughly ms milliseconds, and returns a number. That number is the timer id.
- The code after the call keeps running right away. Nothing waits.
- A delay of 0 still waits. The timer runs only after the current block of code ends, because a single thread handles both.
- clearTimeout(id) cancels a scheduled run. The id is the only way to cancel it.
- If you need waiting, write the surrounding code around that fact. Do not assume the next line runs after the timer.

**setInterval repeats**
- setInterval(fn, ms) keeps calling fn every ms until you stop it.
- It returns an id too, and you must keep it. Without the id you have no handle to stop it.
- clearInterval(id) stops it. Always call it when the page unloads or the component goes away.
- A leaked interval keeps firing work forever, and the leak is invisible until the tab feels slow.

**Await in a loop is a slow loop**
- Awaiting inside a for loop waits for each step before starting the next. Ten steps of 100ms take a whole second.
- Promise.all starts every step at once and waits for all of them. The same ten steps finish in about 100ms.
- The same rule applies to test setup. Three independent setup calls belong in one Promise.all, not three separate awaits.

**Debounce: wait until the calls stop**
- Debounce runs the function once, only after the calls have stopped for N milliseconds.
- It suits a search box. Typing "cats" fires the handler three times. Debounce sends one request.
- It suits a resize handler, which can fire dozens of times a second while the window moves.
- The implementation is one clearTimeout plus a fresh setTimeout on every call, so only the last timer survives.

**Throttle: at most once per window**
- Throttle runs the function immediately, then ignores further calls for N milliseconds.
- It suits scroll and mousemove, where you want live feedback but not sixty updates a second.
- You can build one from a timestamp: if now minus lastRun is at least N, run the function and remember now.
- Debounce delays the work until things settle. Throttle caps the rate. Use debounce for text, throttle for movement.
- For visual updates, requestAnimationFrame is better than either. It runs once per painted frame, so it cannot draw more than the screen shows.

**Waiting in a test**
- Never sleep a fixed number of milliseconds and hope the page is ready. That is a race.
- Wait for a condition instead: an element visible, a response received, a value written to storage.
- In Playwright that is a locator wait or an expect. In plain JavaScript it is a loop that polls until a check passes or a timeout expires.
- Timeouts belong inside the wait, not in the test body. A fixed sleep in the body hides the real bug.

**Where you meet this in real work**
- A debounced search input means your test waits for the request to land, not for the keystroke.
- A throttled scroll handler means an assertion written right after a wheel event can run too early.
- A test that passes on your laptop and fails on CI is almost always a sleep that was too short.`,
      codeExample: `// Timers, debounce and throttle, using only timers and Date.
// The same functions run unchanged in Node and in the browser.
function debounce(fn, wait) {
  let id = null;
  return (...args) => {
    clearTimeout(id);                 // cancel the run we queued last time
    id = setTimeout(() => fn(...args), wait);
  };
}
function throttle(fn, wait) {
  let last = 0;
  return (...args) => {
    if (Date.now() - last >= wait) { // at most once per window
      last = Date.now();
      fn(...args);
    }
  };
}

const onceId = setTimeout(() => {}, 1000);   // a number in the browser
console.log('timer gave us an id to cancel:', onceId !== undefined);
clearTimeout(onceId);

let debounceRuns = 0;
const search = debounce((term) => {
  debounceRuns += 1;
  console.log('  debounced search for "' + term + '"');
}, 50);
search('c'); search('ca'); search('cats');   // one search wins, not three

let throttleRuns = 0;
const onScroll = throttle(() => { throttleRuns += 1; }, 60);
for (let i = 0; i < 10; i++) onScroll(i);
console.log('throttle ran', throttleRuns, 'time(s) out of 10 rapid calls');

let ticks = 0;
const ticker = setInterval(() => {
  ticks += 1;
  if (ticks === 3) {
    clearInterval(ticker);            // without this it never stops
    console.log('interval stopped itself at', ticks);
  }
}, 30);

setTimeout(() => console.log('burst settled, debounce runs =', debounceRuns), 150);`,
    },
  ],
};

export default topic;