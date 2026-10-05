import type { Topic } from "../../types";

/** DOM & Browser APIs - Reading and changing a live web page from JavaScript. */
export const topic: Topic = {
  slug: "dom",
  title: "DOM & Browser APIs",
  icon: "globe",
  description: "Reading and changing a live web page from JavaScript.",
  level: "intermediate",
  lessons: [
    {
      slug: "dom-basics",
      title: "DOM Basics",
      description: "The DOM tree, nodes, and creating elements.",
      content: `The DOM stands for Document Object Model. It is the browser's live picture of your page.

The HTML file you wrote is only text. When the browser reads that file, it builds a tree of objects in memory. That tree is the DOM.

Think of a flat-pack box. The flat file is the instructions. The assembled tree is the real thing you can walk around and change.

JavaScript always talks to the tree, never to the file.

**What the DOM actually is**
- The HTML file is the blueprint. The DOM is the assembled model.
- document is the root object. It sits at the top of the tree and is the door into everything else.
- window sits above document. It is the browser tab itself and it holds the URL, timers and history.
- The tree is built while the browser parses. Your script can run before the last node exists, which is why load order matters.

**Nodes and node types**
- A node is one single thing in the tree. A div is a node. The words inside it are a separate node.
- nodeType is a number that says what kind of node you have. 1 is an element, 2 is an attribute, 3 is text, 8 is a comment.
- Element nodes have a tagName in upper case. Text nodes have no tagName, only a data string.
- You rarely pick text nodes on purpose. You ask for elements and read the text inside them.

**Parent, child, and the live tree**
- A parent holds children. A child knows its parent. The link runs both ways.
- children gives you only element children. childNodes also includes text and comments.
- The tree is live, not a snapshot. Keep a reference to a node, move it somewhere else, and your reference still points at that same live node.
- The trap: a reference to a node you removed still exists in JavaScript. It is now detached, so nothing on screen can reach it.

**Text versus markup**
- textContent reads plain text. Reading it builds no elements, so it is fast and it is safe.
- innerHTML returns markup as a string. Reading it makes the browser parse that markup back into nodes. That work is wasted on you.
- Setting innerHTML re-parses a string. Setting textContent just stores a string. Never read innerHTML in a loop over thousands of nodes.

**document.write is off limits**
- document.write pushes HTML straight into the page while it loads. It only behaves while the page is still parsing.
- Run later and it can wipe the whole document. It also blocks parsing while it works.
- Once a framework has mounted, document.write either throws or destroys the app. Do not use it.

**Where you meet this in real work**
- Playwright asks the browser for the DOM over a protocol. Cypress injects code into the page and walks the tree directly.
- Both of them wait for a node to exist before touching it. That wait is just watching the tree change.
- When a test says element not found, it means no node in the tree matched. It does not mean the page is broken.`,
      codeExample: `// There is no browser in this editor, so we build a tiny fake DOM.
// Each node is a plain object: nodeType, tagName, textContent, parent, children.
const TYPE = { DOCUMENT: 9, ELEMENT: 1, TEXT: 3, COMMENT: 8 };

function el(tag, text, kids) {
  const node = { nodeType: TYPE.ELEMENT, tagName: tag.toUpperCase(),
    textContent: text, parent: null, children: [] };
  for (const kid of kids || []) appendTo(node, kid);
  return node;
}

// In a real browser the browser wires parent and child links for you.
// Here it is just pointer juggling, and that is all it really is.
function appendTo(parent, child) {
  child.parent = parent;
  parent.children.push(child);
  return child;
}

const document = { nodeType: TYPE.DOCUMENT, tagName: "#document", children: [] };
const heading = appendTo(document, el("h1", "Dashboard"));
const list = appendTo(document, el("ul"));
appendTo(list, el("li", "First task"));
const second = appendTo(list, el("li", "Second task"));

console.log("nodeType 1 means element:", second.nodeType === TYPE.ELEMENT);
console.log("tagName:", second.tagName, "| parent:", second.parent.tagName);
console.log("two levels up:", second.parent.parent.tagName);

// The tree is live. Move a node and the reference you already held still works.
appendTo(list, heading);
console.log("h1 moved to:", heading.parent.tagName, "| text still:", heading.textContent);
console.log("list now holds:", list.children.map((n) => n.textContent).join(" | "));`,
      quiz: [
        {
          question: "What does the DOM represent?",
          options: ["A database","The HTML page as a tree of nodes","The server","A network protocol"],
          correctIndex: 1,
          explanation: "The DOM models the page as an object tree you can manipulate.",
        },
        {
          question: "What is the root of the page tree?",
          options: ["window","document","body","html"],
          correctIndex: 1,
          explanation: "document is the entry point; html is a node inside it.",
        },
      ],
    },
    {
      slug: "dom-selection",
      title: "Selecting Elements",
      description: "querySelector, closest, and resilient selector strategy.",
      content: `Finding an element is the first thing every script and every test does. The browser ships several finders. They all hand back the same thing, a live reference to a node.

What differs between them is how you describe what you want.

**The two workhorses**
- querySelector takes a CSS selector and returns the first match, or null when nothing matches.
- querySelectorAll takes a CSS selector and returns a NodeList of every match.
- Because they read CSS you already know the syntax. #id, .class, tag, [attr=value], and > for a direct child.
- Always check the result. A null return often just means the page had not built that node yet.

**NodeList is not an Array**
- A NodeList is array-like. It has a length and you can loop it, but it has no map and no filter.
- Wrap it with Array.from(nodeList) when you want real array methods.
- The list from querySelectorAll is static. It is a snapshot, so later page changes do not update it.

**The older finders still exist**
- getElementById is the fastest finder, because ids are indexed. It only works on document, never on a subtree.
- getElementsByClassName returns a live NodeList, which means it updates itself as the page changes.
- getElementsByTagName is the loosest of them. It matches every tag on the page.

**Which selector survives a redesign**
- Best is data-testid. It exists only for tests, so the design team can rename every class and it still works.
- Next is role plus accessible name, such as a button whose accessible name is Checkout. That describes meaning, not styling.
- Then a stable id that the app treats as part of its contract.
- Last is a CSS class. Classes exist for styling, so they move whenever the design moves.

**Why nth-child is the most fragile selector**
- nth-child(2) counts position, not meaning. Insert one row above and every index shifts.
- The same selector can quietly point at a different row in a different environment.
- Prefer finding the row that contains the text you expect, then scoping the query inside that row.

**Walking up with closest, and scoping down**
- closest starts at the node you call it on and walks upward until it finds a match.
- That is how you go from a clicked button back to the row, card or list item that owns it.
- matches answers yes or no about one node. It is a cheap way to filter a NodeList.
- element.querySelectorAll searches only inside that element and never escapes upward. Scope hard when a class appears in a header, a sidebar and the main area.

**How Playwright, Cypress and Selenium differ**
- Playwright asks the browser directly. Its locator waits, retries and reads a fresh snapshot every time.
- Cypress injects code into the page and runs the same querySelector your own app runs.
- Selenium asks a driver process to find the element by selector over the wire.
- That is why every tool has its own test-side locator API. Each one wraps find the element with its own waiting behaviour.`,
      codeExample: `// No browser here, so we hand-roll the finders.
// querySelectorAll really does take a CSS selector string like this one.
const node = (tag, cls, text, kids) => ({ tag, cls, text, children: kids || [] });
const btn = node("button", [], "Delete");
const doc = node("#document", [], "", [
  node("ul", ["task-list"], "", [
    node("li", ["task"], "Buy milk", [btn]),
    node("li", ["task", "done"], "Ship release"),
  ]),
]);

// Depth first walk, like the real engine does it.
function walk(n, out) {
  out.push(n);
  for (const kid of n.children) walk(kid, out);
  return out;
}
function matches(n, sel) {
  if (sel.charAt(0) === ".") return n.cls.includes(sel.slice(1));
  return n.tag === sel;
}

const all = walk(doc, []);
const found = all.filter((n) => matches(n, ".task"));
// querySelectorAll returns a NodeList: length plus keys, no map.
const nodeList = { length: found.length };
found.forEach((n, i) => { nodeList[i] = n; });

console.log("length:", nodeList.length, "| has map:", typeof nodeList.map);
console.log("Array.from:", Array.from(nodeList).map((n) => n.text).join(" | "));
// nth-child(2) counts position, not meaning.
console.log("nth-child(2) points at:", nodeList[1].text);

// closest walks UP to the row that owns the click.
function closest(n, sel) {
  for (let p = n; p; p = p.parent) if (matches(p, sel)) return p;
  return null;
}
btn.parent = doc.children[0].children[0];
console.log("closest('.task') from button:", closest(btn, ".task").text);`,
      quiz: [
        {
          question: "Which selector matches elements with id='submit'?",
          options: [".submit","#submit","submit","id=submit"],
          correctIndex: 1,
          explanation: "# tells querySelector to match an ID.",
        },
        {
          question: "What does querySelectorAll return?",
          options: ["A single element","A NodeList of matches","An array always","An HTML string"],
          correctIndex: 1,
          explanation: "querySelectorAll returns a NodeList (array-like).",
        },
      ],
    },
    {
      slug: "dom-manipulation",
      title: "Changing the DOM",
      description: "textContent, classList, attributes, createDocumentFragment.",
      content: `Reading the page is one half of the DOM. Writing to it is the other half.

Writing means you add nodes, remove nodes, change their text and change their attributes. Almost every method is one short line. The real trap is picking the wrong one.

**Three ways to set the words inside an element**
- textContent sets and reads plain text. The browser escapes any tags you put in, so a user cannot inject markup.
- innerHTML parses a string of markup into real nodes. Use it only for markup you fully control.
- innerText reads the text as it is rendered. It is layout aware, so it is slower and it hides anything set to display none.
- Rule of thumb: textContent for anything from a user or an API. innerHTML only for your own templates.

**classList versus className**
- className is one string. Assign to it and you wipe every class that was there before.
- classList is a live list of the individual names. add, remove, toggle and contains each touch one name.
- toggle tells you which way it went. It returns true when it added the class and false when it removed it.

**Attributes and data attributes**
- setAttribute writes any attribute. getAttribute reads it back as a string, or null when it is missing.
- Attributes written as data-something appear on the dataset object.
- dataset.testid maps to data-testid. A dash becomes a camelCase step, so data-user-id is dataset.userId.

**Creating, placing and removing nodes**
- createElement makes a detached node. It exists in memory but is not on the page yet.
- Detached means invisible. CSS does not apply and no event reaches it.
- append adds one or many nodes at the end. prepend adds at the start.
- appendChild is the older form. It takes exactly one node and cannot take a string.
- insertBefore needs the new node plus the node to sit in front of. replaceWith swaps one node for another.
- child.remove() works from the child side. parent.removeChild(child) works from the parent side.

**Batch your writes**
- A DocumentFragment is a lightweight offscreen container. You build nodes inside it, then append it once.
- The browser recalculates layout once at the end. Appending one node at a time recalculates it every single time.
- That repeated recalculation is called reflow. On a list of a thousand rows the difference is obvious.

**Rebuild from data, always**
- The reliable pattern is a render function. It takes an array of items and rebuilds the list from scratch.
- It has no hidden state to fall out of sync, so a test can always trust what it reads.
- Never build an HTML string by pasting untrusted input into it. Use createElement and textContent instead.

**Where you meet this in real work**
- Playwright reads textContent and innerText and compares them. It reads attributes for test ids.
- Asserting that an item disappeared usually means watching for the node to be removed, not for a text change.`,
      codeExample: `// Plain objects stand in for elements. Same method names, no browser.
function createElement(tag) {
  return {
    tagName: tag.toUpperCase(),
    textContent: "",
    classList: new Set(),
    dataset: {},
    children: [],
    parent: null,
    append(node) { node.parent = this; this.children.push(node); return this; },
    remove() {
      if (!this.parent) return;
      this.parent.children = this.parent.children.filter((c) => c !== this);
      this.parent = null;
    },
  };
}

// Build offscreen, then swap the list in once.
const list = createElement("ul");
list.classList.add("task-list");

function render(items) {
  const fragment = createElement("#fragment"); // a DocumentFragment in the browser
  for (const item of items) {
    const li = createElement("li");
    li.textContent = item.title; // markup stays text, nothing executes
    li.dataset.testid = "task-" + item.id; // maps to data-testid
    if (item.done) li.classList.add("done");
    fragment.append(li);
  }
  list.children = fragment.children;
  list.children.forEach((c) => (c.parent = list));
}

render([{ id: 1, title: "Buy milk", done: false }, { id: 2, title: "Ship <v2>", done: true }]);
console.log("Rendered:", list.children.map((c) => c.textContent + " done=" + c.classList.has("done")).join(" | "));

list.children[0].remove();
console.log("After remove:", list.children.length, "row(s) | first testid:", list.children[0].dataset.testid);`,
      quiz: [
        {
          question: "Which property safely sets plain text on an element?",
          options: ["innerHTML","textContent","value","style"],
          correctIndex: 1,
          explanation: "textContent treats the string as text (innerHTML risks XSS).",
        },
        {
          question: "How do you add a CSS class to an element?",
          options: ["element.class = 'x'","element.classList.add('x')","element.setClass('x')","class(element, 'x')"],
          correctIndex: 1,
          explanation: "classList.add manages classes safely.",
        },
      ],
    },
    {
      slug: "events",
      title: "Events",
      description: "Listeners, the event object, delegation, and bubbling.",
      content: `An event is a record that something happened. A click, a key press, a submit, a scroll.

The browser builds the event object and hands it to every listener you registered. Events are how a page reacts. They are also how a test watches a page.

**addEventListener takes three things**
- The first argument is the event name as a string, such as click or submit.
- The second argument is the handler, a function that receives the event object.
- The third argument is an options object. You may pass it or leave it out.
- To remove a listener, call removeEventListener with the same type and the same function reference.
- An anonymous arrow function has no reference to match, so nothing gets removed. Keep the handler in a variable.

**The options object**
- once runs the handler a single time and then removes it. Good for a one-shot submit.
- capture listens during the capture phase, before the event reaches the target.
- passive promises that you will not call preventDefault. The browser can scroll without waiting for you.
- Setting passive on touch and scroll listeners is the standard performance advice.

**Three phases**
- Capture. The event walks down from window to the target.
- Target. The listener on the clicked node runs.
- Bubble. The event walks back up from the target to window.
- stopPropagation halts the rest of the walk.
- stopImmediatePropagation also skips the remaining listeners on the same node.

**target versus currentTarget**
- target is the deepest node the event happened on. Click a label inside a button and target is the label.
- currentTarget is the element whose listener is running right now. In a delegated handler that is the parent.
- Rule: inside a delegated handler use currentTarget for the parent and target for the clicked item.

**Delegation**
- Event delegation puts one listener on a shared parent and lets it handle many children.
- It is like one receptionist at a desk serving every visitor, instead of one receptionist per room.
- It survives new children too. Nodes added later are handled with no new listeners at all.
- Use closest on the target to walk back up to the row or card that owns it.

**preventDefault versus stopPropagation**
- preventDefault cancels the browser's built-in action. Form navigation and link following are the usual two.
- stopPropagation stops other nodes from seeing the event. It does not cancel the default action.
- Use both when you handle a submit yourself and do not want the parent handler to also react.

**Where you meet this in real work**
- Clicking a submit button fires submit on the button and on the form. Handle it once, on the form.
- Clicking a label forwards the click to its input, which is why label tests pass after a single click.
- Keyboard work needs keydown or key. A bare keypress is unreliable and deprecated.
- A custom event lets your own code announce something. Build it with CustomEvent and fire it with dispatchEvent. Tests can listen for it too.
- page.click dispatches a real click through all three phases, so your delegated listener will see it.`,
      codeExample: `// Tiny event system. Real order: capture, target, bubble.
function el(tag, kids) {
  const n = { tagName: tag, parent: null, children: kids || [], listeners: [] };
  n.children.forEach((c) => (c.parent = n));
  return n;
}
function fire(target, type, detail) {
  // One event object, shared by every listener.
  const e = { type, detail, target, currentTarget: null, stopped: false,
    stopPropagation() { this.stopped = true; }, preventDefault() { this.prevented = true; } };
  const down = [];
  for (let n = target; n; n = n.parent) down.unshift(n); // window down to target
  for (const n of down.concat(down.slice(1).reverse())) { // then target, then back up
    if (e.stopped) break;
    e.currentTarget = n;
    n.listeners.filter((l) => l.type === type).forEach((l) => l.fn(e));
  }
}

// One listener on the parent handles many children: event delegation.
const row = el("tr");
const btn = el("button");
row.children.push(btn); btn.parent = row;
row.listeners.push({ type: "click", fn: (e) =>
  console.log("target", e.target.tagName, "| currentTarget", e.currentTarget.tagName) });
fire(btn, "click");

// A custom event is how your own code announces something.
// In a browser: new CustomEvent("saved", { detail }) then dispatchEvent.
const saved = el("status");
saved.listeners.push({ type: "saved", fn: (e) => console.log("custom event id", e.detail.id) });
fire(saved, "saved", { id: 7 });`,
      quiz: [
        {
          question: "What does e.preventDefault() do?",
          options: ["Stops the script","Cancels the browser's default action","Deletes the element","Stops the event loop"],
          correctIndex: 1,
          explanation: "preventDefault cancels default behavior like form submission.",
        },
        {
          question: "What is event bubbling?",
          options: ["Events firing multiple times","An event traveling from target up to ancestors","Slower events","Events going down the tree only"],
          correctIndex: 1,
          explanation: "After firing on the target, events bubble up through ancestors.",
        },
      ],
    },
    {
      slug: "forms",
      title: "Forms",
      description: "Reading input values, validation, and submit events.",
      content: `A form is how a page collects input. For an automation tester a form is also the thing you drive most: login, search, checkout. Reading values back out correctly removes most flaky form tests.

**form.elements is the reliable way in**
- form.elements is a live collection of every input, select, textarea and button inside the form.
- Reach a field by its name attribute, because that is the name sent to the server.
- A lookup by class or by position breaks the moment somebody adds a hidden field.
- A field placed outside the form but carrying a matching form attribute still shows up in this collection.

**value versus textContent**
- An input holds no child nodes. The current text lives in its value property.
- Reading textContent on an input gives you the default text in the markup, not what the user typed.
- That mismatch is the most common cause of a test reading an empty string from a field it just filled.
- A textarea is the exception. A textarea keeps its default value as a child text node.

**input versus change**
- input fires on every keystroke. Use it for live counters and instant validation.
- change fires when the value settles, usually on blur. Use it for expensive work.
- Assigning value from script fires neither. Playwright's fill dispatches both for you, which is why you should use fill.

**Checkboxes, radios and selects**
- A checkbox and a radio report their state in checked, a boolean.
- value on a checkbox is the fixed string from the markup, often the literal "on".
- Group radios by their name attribute. Only the selected one is checked.
- A select has a value that must match the option value you want. selectedIndex is the position, and it is -1 when nothing is chosen.
- The options live in select.options, a live collection with a length and numeric indexes.

**Submitting**
- The submit event fires on the form when a submit button is clicked or Enter is pressed.
- Always preventDefault in the handler, or the browser reloads the page and your test loses its state.
- form.reset() puts every field back to the default in the markup and clears checked boxes.

**Constraint validation**
- required, type, min, max, minlength, pattern and step are the rules you put on a field.
- validity.valid is the boolean summary. checkValidity() runs the rules and returns the same answer.
- reportValidity() runs the rules and shows the browser's own error bubbles.
- The novalidate attribute turns the whole check off, so then you read the values yourself.

**FormData, and when to call the API instead**
- new FormData(form) builds a key and value map from every named field, checkboxes, selects and files included.
- It is the closest thing to the request body the browser would really send.
- A form submit might be a page navigation, an XHR or a fetch call. You cannot tell which from the outside.
- In a test, intercept the request or call the API directly. Testing the API checks your logic. Testing the form checks wiring. Usually you want both, in separate tests.`,
      codeExample: `// No browser here. A form is an object holding fields, keyed by name.
function field(props) {
  return Object.assign({ type: "text", value: "", checked: false }, props);
}

const form = {
  elements: {
    email: field({ type: "email", required: true }),
    password: field({ type: "password", required: true }),
    plan: field({ type: "select", value: "free", options: ["free", "pro"], selectedIndex: 0 }),
    newsletter: field({ type: "checkbox", value: "on" }),
  },
};

// In a real browser: await page.fill("#email", "a@test.com")
form.elements.email.value = "a@test.com";
form.elements.password.value = "short";
form.elements.plan.value = "pro";
form.elements.plan.selectedIndex = 1;
form.elements.newsletter.checked = true;

console.log("email value:", form.elements.email.value);
console.log("checked:", form.elements.newsletter.checked, "| value stays:", form.elements.newsletter.value);

// Constraint validation. The browser runs these rules before it submits.
const RULES = { email: (v) => v.includes("@"), password: (v) => v.length >= 8 };
for (const name of Object.keys(RULES)) {
  const el = form.elements[name];
  console.log(name, "valid:", el.required ? RULES[name](el.value) : true);
}

// FormData gathers every named field, exactly like the browser before sending.
const data = {};
for (const name of Object.keys(form.elements)) {
  const el = form.elements[name];
  data[name] = el.type === "checkbox" ? el.checked : el.value;
}
console.log("FormData:", data);`,
      quiz: [
        {
          question: "Which property holds a checkbox's state?",
          options: ["value","checked","selected","state"],
          correctIndex: 1,
          explanation: "checked is the boolean state for checkboxes and radios.",
        },
        {
          question: "Why use fill() instead of setting .value directly?",
          options: ["It's faster","It fires the proper events automation needs","It's the only way","No reason"],
          correctIndex: 1,
          explanation: "fill() sets the value and dispatches input/change events.",
        },
      ],
    },
    {
      slug: "window-object",
      title: "Window Object",
      description: "Timers, location, history, and sizing the viewport.",
      content: `window is the browser tab as a JavaScript object. It is also the global object in a browser.

That means any variable you declare without let or const ends up on it. Everything browser specific you read, like the URL or the screen size, hangs off window.

**The global object**
- The global object is the one object every bare name resolves against.
- In a browser that is window. In Node it is globalThis. globalThis is the name that works in both.
- Inside an ES module the top level this is undefined, not the global object.
- Practical consequence: declare variables with let or const. Then nothing leaks onto window by accident.

**Timers**
- setTimeout runs a function once after a delay in milliseconds. It returns a numeric id.
- clearTimeout takes that id and cancels the run. There is no other way to cancel it.
- setInterval runs a function every delay. clearInterval takes its id and stops it.
- Keep the id in a variable. Without it you have a timer running and no handle on it at all.
- A delay is a minimum, not a promise. A busy tab or a throttled tab makes the callback arrive late.

**requestAnimationFrame**
- It asks to run a callback just before the next repaint of the screen.
- Use it for animation and for anything that must match the frame rate, such as dragging.
- The browser calls it about sixty times a second, and it stops while the tab is hidden.

**location is the URL, and history is the back stack**
- location.href is the whole URL. Assigning to it navigates the tab.
- location.pathname is the path. location.search is the query string, leading question mark included.
- location.hash is the fragment after the hash. location.reload() reloads the current page.
- history.length is how many entries the tab has in its back stack. history.back() and history.forward() move through it.
- pushState adds an entry without loading a page. That is how a single page app fakes routes.
- In tests, reading location after an action is how you assert that a navigation happened.

**Reading the browser and the screen**
- navigator.userAgent is a string describing the browser. Tests match on a substring of it.
- screen.width and screen.height are the whole monitor. innerWidth and innerHeight are the viewport only.
- outerWidth includes the browser chrome. innerWidth is what decides your responsive layout.
- scrollY is how far the page is scrolled down. Zero means the top.
- devicePixelRatio is CSS pixels per physical pixel. It matters when you compare screenshots.

**resize and scroll, and window versus document**
- resize fires on every step while a window is being dragged. scroll fires on every scroll step, maybe sixty times a second.
- Throttle or debounce both, or the page spends its time inside your handler.
- document is the page tree. window is the tab. window.document points at that tree.
- localStorage and sessionStorage also hang off window. They have their own topic.

**Where you meet this in real work**
- Setting the viewport size in Playwright changes innerWidth. Reading it back proves a breakpoint fired.
- Asserting on location after a click catches the redirect that a text assertion misses.
- A test that reads history.length after a back navigation confirms the stack really moved.`,
      codeExample: `// No browser, so window is a plain object with real names.
const win = {
  innerWidth: 1280, innerHeight: 720, scrollY: 0,
  screen: { width: 2560, height: 1440 },
  navigator: { userAgent: "Mozilla/5.0 Chrome/124.0" },
  location: { href: "https://shop.test/checkout?coupon=SAVE10#pay" },
  history: { length: 3, back() { this.length -= 1; return "back"; } },
  listeners: {},
  addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); },
};

// A browser splits location into parts.
const url = new URL(win.location.href);
console.log("host:", url.host, "| path:", url.pathname, "| coupon:", url.searchParams.get("coupon"));
console.log("viewport", win.innerWidth + "x" + win.innerHeight, "| monitor", win.screen.width);
console.log("history", win.history.length, "->", win.history.back(), "->", win.history.length);

// Timers hand back a handle. Keep it to cancel.
let ticks = 0;
const id = setInterval(() => { ticks += 1; }, 50);
clearInterval(id);
console.log("interval cleared, ticks:", ticks, "| handle:", typeof id);

// resize and scroll fire every step, so handlers stay cheap.
let fires = 0;
for (const type of ["resize", "scroll"]) win.addEventListener(type, () => fires++);
for (let step = 0; step < 5; step += 1) {
  win.innerWidth -= 40;
  win.scrollY += 300;
  win.listeners.resize.forEach((fn) => fn());
  win.listeners.scroll.forEach((fn) => fn());
}
console.log("5 steps gave", fires, "calls | width", win.innerWidth, "scrollY", win.scrollY);`,
      quiz: [
        {
          question: "What is the window object in browsers?",
          options: ["The global object holding most browser APIs","A DOM element","A style rule","The printer"],
          correctIndex: 0,
          explanation: "window is the global object; globals and browser APIs live on it.",
        },
        {
          question: "Which window object holds the page URL?",
          options: ["window.history","window.location","window.document","window.navigator"],
          correctIndex: 1,
          explanation: "location holds href, pathname, search.",
        },
      ],
    },
  ],
};

export default topic;