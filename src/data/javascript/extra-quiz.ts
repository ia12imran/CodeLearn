import { QuizQuestion } from "../types";

export const extraQuiz: Record<string, QuizQuestion[]> = {
  "intro/what-is-javascript": [
    {
      question: "In which of these environments does JavaScript run natively without installation?",
      options: ["Every web browser", "Only Node.js servers", "Only the VS Code editor", "Only mobile devices"],
      correctIndex: 0,
      explanation: "Every modern web browser ships with a JavaScript engine, so JS runs there with no installation.",
    },
    {
      question: "What is the official standard that defines how JavaScript behaves?",
      options: ["ECMAScript", "HTML5", "WebAssembly", "JSON"],
      correctIndex: 0,
      explanation: "JavaScript is standardized as ECMAScript (ES), and modern features come from ES6 (ES2015) and later.",
    },
  ],
  "intro/why-javascript-for-automation": [
    {
      question: "Which of these automation tools is built on top of JavaScript/Node.js?",
      options: ["Playwright", "Pytest", "JUnit", "Robot Framework"],
      correctIndex: 0,
      explanation: "Playwright, Cypress, and WebDriverIO are the leading JavaScript-based automation frameworks.",
    },
    {
      question: "Why does an automation tester benefit from knowing JavaScript even when their tests use a GUI recorder?",
      options: ["To write, debug, and extend test scripts the recorder cannot produce", "JavaScript is required to install a browser", "Because every CI server only runs JS", "To replace the operating system"],
      correctIndex: 0,
      explanation: "Recorded scripts cannot handle dynamic waits, API logic, or custom assertions, so JS knowledge is essential for maintainable automation.",
    },
  ],
  "basics/variables": [
    {
      question: "Which keyword declares a block-scoped variable that cannot be reassigned?",
      options: ["var", "let", "const", "static"],
      correctIndex: 2,
      explanation: "const declares a block-scoped variable that cannot be reassigned after its initial assignment.",
    },
    {
      question: "What is the main problem with using var instead of let in modern JavaScript?",
      options: ["var is not function-scoped", "var is block-scoped instead of hoisted", "var is hoisted and ignores block scope, causing bugs", "var cannot hold numbers"],
      correctIndex: 2,
      explanation: "var is hoisted to the function scope, ignores block scope, and allows redeclaration, which leads to subtle bugs.",
    },
  ],
  "basics/data-types": [
    {
      question: "What is the typeof result for null in JavaScript?",
      options: ["'null'", "'object'", "'undefined'", "'boolean'"],
      correctIndex: 1,
      explanation: "typeof null returns 'object', a long-standing JavaScript quirk inherited from the language's early days.",
    },
    {
      question: "Which of these is a primitive data type in JavaScript?",
      options: ["Array", "Map", "Symbol", "Date"],
      correctIndex: 2,
      explanation: "Symbol is one of the seven primitives (string, number, boolean, null, undefined, bigint, symbol); the others are objects.",
    },
  ],
  "basics/operators": [
    {
      question: "What does the === operator check compared to ==?",
      options: ["Only values", "Identity of functions", "Both value and type", "Only memory references"],
      correctIndex: 2,
      explanation: "=== (strict equality) compares both value and type, while == performs type coercion before comparing.",
    },
    {
      question: "What is the result of 5 + '3' in JavaScript?",
      options: ["8", "'53'", "2", "NaN"],
      correctIndex: 1,
      explanation: "The + operator concatenates when either operand is a string, so 5 + '3' produces the string '53'.",
    },
  ],
  "basics/type-conversions": [
    {
      question: "What does Boolean('false') evaluate to?",
      options: ["false", "true", "null", "undefined"],
      correctIndex: 1,
      explanation: "Any non-empty string is truthy, so Boolean('false') is true; only '', 0, NaN, null, undefined, and false coerce to false.",
    },
    {
      question: "Which expression converts the string '42' into the number 42?",
      options: ["parseInt('42')", "Number('42')", "parseFloat('42')", "All of these"],
      correctIndex: 3,
      explanation: "Number(), parseInt(), and parseFloat() all return the number 42 when given the string '42'.",
    },
  ],
  "control-flow/if-else": [
    {
      question: "What happens when new Boolean(false) is used inside an if condition?",
      options: ["if is skipped", "An error is thrown", "if runs because the Boolean object is truthy", "NaN is returned"],
      correctIndex: 2,
      explanation: "A Boolean object (new Boolean(false)) is a truthy object, so the if branch executes, unlike the primitive false.",
    },
    {
      question: "Which statement correctly logs 'big' only when count is greater than 10?",
      options: ["if (count > 10) console.log('big')", "if (count => 10) console.log('big')", "if count > 10 console.log('big')", "if (count >= 10) console.log('big')"],
      correctIndex: 0,
      explanation: "The correct operator is the strict greater-than (>) and parentheses wrap the condition; => is only used in arrow functions.",
    },
  ],
  "control-flow/loops-iteration": [
    {
      question: "What does for (const i = 0; i < 3; i++) do?",
      options: ["Prints 0, 1, 2", "Runs three times", "Throws an error because i is const", "Loops forever"],
      correctIndex: 2,
      explanation: "const cannot be reassigned, so i++ throws an error; use let i for counters in a for loop.",
    },
    {
      question: "Which loop runs a body at least once regardless of the condition?",
      options: ["for", "for...of", "do...while", "while"],
      correctIndex: 2,
      explanation: "do...while checks the condition after the body runs, guaranteeing at least one iteration.",
    },
  ],
  "strings/string-basics": [
    {
      question: "What is the length of the string 'hello' as reported by .length?",
      options: ["4", "5", "6", "undefined"],
      correctIndex: 1,
      explanation: "String length counts UTF-16 code units, and 'hello' has exactly five characters, so .length is 5.",
    },
    {
      question: "How can you access the first character of the string 'test'?",
      options: ["'test'[0]", "'test'[-1]", "'test'.first()", "'test'.charCodeAt(0)"],
      correctIndex: 0,
      explanation: "Strings are indexable with bracket notation, and index 0 is the first character 't'.",
    },
  ],
  "strings/string-methods": [
    {
      question: "What does 'JavaScript'.toUpperCase() return?",
      options: ["javascript", "JAVASCRIPT", "JavaScript", "Js"],
      correctIndex: 1,
      explanation: "toUpperCase() returns a new string with every character converted to uppercase: 'JAVASCRIPT'.",
    },
    {
      question: "Which method finds the index of the first occurrence of 'a' in 'banana'?",
      options: ["lastIndexOf('a')", "indexOf('a')", "find('a')", "searchAll('a')"],
      correctIndex: 1,
      explanation: "indexOf('a') returns 1, the position of the first 'a' in 'banana'; lastIndexOf returns the last one.",
    },
  ],
  "strings/template-literals": [
    {
      question: "What delimiter wraps a template literal string?",
      options: ["Backticks", "Single quotes", "Double quotes", "Angle brackets"],
      correctIndex: 0,
      explanation: "A template literal is wrapped in backticks, which enables interpolation and multiline text.",
    },
    {
      question: "What is a real benefit of template literals for building test selectors or messages?",
      options: ["You can embed variable values directly instead of concatenating string parts", "They make strings immutable forever", "They run only on the server", "They cannot contain punctuation"],
      correctIndex: 0,
      explanation: "Template literals let you embed variable values directly inside the string, making composed selectors and messages far more readable than concatenation.",
    },
  ],
  "functions/function-basics": [
    {
      question: "What is returned when a function without a return statement finishes running?",
      options: ["null", "0", "undefined", "false"],
      correctIndex: 2,
      explanation: "A function that lacks an explicit return implicitly returns undefined.",
    },
    {
      question: "What does a function declaration without the function keyword refer to?",
      options: ["A method", "A constructor", "An arrow function or function expression", "A generator"],
      correctIndex: 2,
      explanation: "Functions created with arrow syntax or assigned to variables are expressions, not declarations.",
    },
  ],
  "functions/arrow-functions": [
    {
      question: "What is a key difference between arrow functions and traditional function expressions?",
      options: ["Arrows keep the surrounding this instead of binding their own", "Arrows are always slower", "Arrows cannot take parameters", "Arrows cannot be stored in variables"],
      correctIndex: 0,
      explanation: "Arrow functions do not have their own this; they lexically inherit this from the enclosing scope.",
    },
    {
      question: "Which arrow function correctly doubles its argument?",
      options: ["x => x * 2", "x -> x * 2", "fn x { return x * 2 }", "double(x) => x * 2"],
      correctIndex: 0,
      explanation: "The arrow syntax is (param) => expression, so x => x * 2 is valid and returns x * 2 implicitly.",
    },
  ],
  "functions/lexical-scope-closures": [
    {
      question: "What is a closure in JavaScript?",
      options: ["A function that retains access to its outer scope after the outer function returns", "A class that cannot be extended", "A loop that never ends", "A global variable"],
      correctIndex: 0,
      explanation: "A closure captures variables from the lexical scope where it was defined, even after the outer function has finished.",
    },
    {
      question: "Given function outer() { let x = 1; return () => x; }, what does outer()() return?",
      options: ["undefined", "1", "x", "NaN"],
      correctIndex: 1,
      explanation: "The inner arrow function closes over x and returns its value 1 when called.",
    },
  ],
  "functions/callbacks": [
    {
      question: "What is a callback function?",
      options: ["A function passed as an argument to be called later", "A function with no name", "A function that returns a promise", "A built-in DOM method"],
      correctIndex: 0,
      explanation: "A callback is a function passed into another function and invoked later, often after async work or per array element.",
    },
    {
      question: "Which array method takes a callback that runs for each element and returns a new array?",
      options: ["push", "map", "join", "pop"],
      correctIndex: 1,
      explanation: "map calls the callback for every element and builds a new array from the returned values, leaving the original unchanged.",
    },
  ],
  "arrays/array-basics": [
    {
      question: "What is the result of [1, 2, 3].length?",
      options: ["2", "3", "4", "undefined"],
      correctIndex: 1,
      explanation: "The length property reports the number of elements, which is 3 for [1, 2, 3].",
    },
    {
      question: "Which method adds elements to the end of an array AND changes the original array?",
      options: ["concat", "push", "map", "slice"],
      correctIndex: 1,
      explanation: "push mutates the array in place by appending elements; concat and map return new arrays.",
    },
  ],
  "arrays/advanced-arrays": [
    {
      question: "What does [1, 2, 3, 4].filter(n => n % 2 === 0) return?",
      options: ["[2, 4]", "[1, 3]", "[1, 2, 3, 4]", "[2]"],
      correctIndex: 0,
      explanation: "filter keeps only elements for which the callback returns true, so the even numbers 2 and 4 remain.",
    },
    {
      question: "What is the common array-copy gotcha when copying an array with slice?",
      options: ["It is a shallow copy, so nested objects are still shared", "It deletes the original", "It ignores indices", "It only copies strings"],
      correctIndex: 0,
      explanation: "slice() (and spread) make shallow copies; nested objects inside are still references to the same objects.",
    },
  ],
  "arrays/reduce": [
    {
      question: "What does [1, 2, 3, 4].reduce((acc, n) => acc + n, 0) return?",
      options: ["10", "24", "4", "0"],
      correctIndex: 0,
      explanation: "reduce sums each element starting from the initial accumulator 0: 1+2+3+4 = 10.",
    },
    {
      question: "What happens if you call reduce() without an initial value on an empty array?",
      options: ["It returns undefined", "It returns 0", "It returns null", "It throws a TypeError"],
      correctIndex: 3,
      explanation: "With no initial value, reduce uses the first element as the accumulator, which fails on an empty array and throws a TypeError.",
    },
  ],
  "objects/object-basics": [
    {
      question: "How do you access the age property of const person = { age: 30 }?",
      options: ["person.age", "person->age", "person::age", "person.age()"],
      correctIndex: 0,
      explanation: "Dot notation accesses object properties directly, so person.age returns 30.",
    },
    {
      question: "What does Object.keys({ a: 1, b: 2 }) return?",
      options: ["[1, 2]", "['a', 'b']", "['1', '2']", "undefined"],
      correctIndex: 1,
      explanation: "Object.keys returns an array of the object's own enumerable property names, here ['a', 'b'].",
    },
  ],
  "objects/destructuring": [
    {
      question: "What is the value of name after const { name } = { name: 'Ada', age: 36 }?",
      options: ["'Ada'", "36", "undefined", "'name'"],
      correctIndex: 0,
      explanation: "Object destructuring pulls the name property out of the object into its own variable, so name is 'Ada'.",
    },
    {
      question: "What is the result of const [first, second] = [7, 8, 9]?",
      options: ["first is 7 and second is 8", "first is 8 and second is 9", "first is 7 and second is 9", "An error"],
      correctIndex: 0,
      explanation: "Array destructuring assigns elements by position, so first is 7 and second is 8; 9 is ignored.",
    },
  ],
  "objects/optional-chaining-nullish": [
    {
      question: "What does user?.profile?.name return if user is null?",
      options: ["null", "undefined", "TypeError", "An empty string"],
      correctIndex: 1,
      explanation: "Optional chaining short-circuits safely and returns undefined when any link in the chain is null or undefined.",
    },
    {
      question: "What does null ?? 'fallback' evaluate to?",
      options: ["null", "undefined", "'fallback'", "false"],
      correctIndex: 2,
      explanation: "The nullish coalescing operator ?? returns the right side only when the left side is null or undefined, so it yields 'fallback'.",
    },
  ],
  "objects/map-set": [
    {
      question: "How do you add a key-value pair to a Map?",
      options: ["map.add(key, value)", "map.set(key, value)", "map.push(key, value)", "map.insert(key, value)"],
      correctIndex: 1,
      explanation: "Map uses set(key, value) to store entries; add is used by Set and push by arrays.",
    },
    {
      question: "What is unique about a Set compared to an array?",
      options: ["It automatically removes duplicate values", "It sorts itself", "It can hold only numbers", "It cannot store strings"],
      correctIndex: 0,
      explanation: "A Set enforces uniqueness, so adding an already-present value is a no-op.",
    },
  ],
  "objects/arrays-of-objects": [
    {
      question: "Which expression returns the first user with the role 'admin' from an array of user objects?",
      options: ["users.find(u => u.role === 'admin')", "users.filter(u => u.role === 'admin')[undefined]", "users.first('admin')", "users.search('admin')"],
      correctIndex: 0,
      explanation: "Array.find() returns the first element for which the callback returns true, stopping early.",
    },
    {
      question: "What does users.map(u => u.name) with users = [{ name: 'Ada' }, { name: 'Lin' }] return?",
      options: ["['Ada', 'Lin']", "[{ name: 'Ada' }, { name: 'Lin' }]", "2", "['name', 'name']"],
      correctIndex: 0,
      explanation: "map extracts the name from each object, building a new array of strings: ['Ada', 'Lin'].",
    },
  ],
  "async/async-basics": [
    {
      question: "What is the return value of an async function that has no explicit return?",
      options: ["undefined", "A Promise resolving to undefined", "null", "An Error object"],
      correctIndex: 1,
      explanation: "Every async function returns a Promise; with no return, it resolves to undefined.",
    },
    {
      question: "Why are async operations important in automation testing?",
      options: ["Browsers and network requests finish at unpredictable times", "They make tests run synchronously", "They replace assertions", "They disable timeouts"],
      correctIndex: 0,
      explanation: "Page loads, network calls, and UI updates are asynchronous, so testers must await them instead of assuming instant completion.",
    },
  ],
  "async/promises": [
    {
      question: "What states can a Promise be in?",
      options: ["pending, fulfilled, rejected", "start, running, done", "open, closed, waiting", "queued, active, stopped"],
      correctIndex: 0,
      explanation: "A Promise transitions from pending to either fulfilled (resolved) or rejected, and those are its three states.",
    },
    {
      question: "Which method do you use to attach a handler for a rejected promise?",
      options: [".then() on error", ".catch()", ".finally()", ".resolve()"],
      correctIndex: 1,
      explanation: "catch() handles rejections; then() handles fulfilled values and finally() runs cleanup regardless of outcome.",
    },
  ],
  "async/async-await": [
    {
      question: "What keyword must prefix an await expression?",
      options: ["Function inside an async function", "try", "return", "yield"],
      correctIndex: 0,
      explanation: "await can only be used inside a function declared with async (or at the top level of modules).",
    },
    {
      question: "What does an await expression resolve to when the promise rejects?",
      options: ["null", "The rejection reason, thrown as an error", "undefined", "false"],
      correctIndex: 1,
      explanation: "A rejected promise makes await throw the rejection reason, which you catch with try/catch.",
    },
  ],
  "async/fetch-apis": [
    {
      question: "What does the fetch() function return?",
      options: ["A Promise of a Response", "A string of HTML", "A parsed JSON object", "An XHR object"],
      correctIndex: 0,
      explanation: "fetch() returns a Promise that resolves to a Response object when the server replies.",
    },
    {
      question: "Why do you need res.json() after a fetch call returning JSON?",
      options: ["To parse the response body into a JavaScript object", "To change the request method", "To add headers", "To close the connection"],
      correctIndex: 0,
      explanation: "res.json() reads the stream and parses the body; fetch does not auto-parse the payload for you.",
    },
  ],
  "async/event-loop": [
    {
      question: "In what order do these log: console.log('a'); setTimeout(() => console.log('b'), 0); console.log('c');?",
      options: ["a, b, c", "a, c, b", "b, a, c", "c, a, b"],
      correctIndex: 1,
      explanation: "Synchronous code ('a', 'c') runs first; the setTimeout callback is deferred to the task queue, logging 'b' last even with an 0ms delay.",
    },
    {
      question: "What does the event loop do, in simple terms?",
      options: ["It handles Async events by scheduling callbacks after the current stack empties", "It compiles JS to machine code", "It garbage collects every second", "It runs only in Node.js, not browsers"],
      correctIndex: 0,
      explanation: "The event loop moves callbacks from the task queue back onto the call stack once it is empty, enabling non-blocking async code.",
    },
  ],
  "classes/class-basics": [
    {
      question: "Which method on a class runs automatically when a new instance is created?",
      options: ["init()", "start()", "constructor()", "new()"],
      correctIndex: 2,
      explanation: "The constructor() method initializes each new instance created with the new keyword.",
    },
    {
      question: "How do you create a new instance of class User?",
      options: ["User.new()", "new User()", "User()", "create User()"],
      correctIndex: 1,
      explanation: "The new keyword invokes the class constructor and returns the instance: new User().",
    },
  ],
  "classes/class-inheritance": [
    {
      question: "Which keyword marks a class as inheriting from another class?",
      options: ["extends", "inherits", "super", "implements"],
      correctIndex: 0,
      explanation: "The extends keyword establishes inheritance, e.g. class Admin extends User.",
    },
    {
      question: "Inside a subclass constructor, what must be called before using this?",
      options: ["this.init()", "super()", "parent()", "super.constructor()"],
      correctIndex: 1,
      explanation: "super() invokes the parent constructor and must run before any this access in a subclass constructor.",
    },
  ],
  "classes/prototypal-inheritance": [
    {
      question: "How does instanceof verify that a class relationship is real?",
      options: ["It checks the prototype chain rather than the constructor name", "It compares string type names", "It shallow-compares properties", "It runs the parent constructor"],
      correctIndex: 0,
      explanation: "instanceof walks the prototype chain in order to decide whether an object inherits from the given prototype.",
    },
    {
      question: "What is the prototype chain in JavaScript?",
      options: ["Objects inherit properties via a linked chain ending at Object.prototype, ultimately null", "A stack of function calls", "A queue of events", "A list of global variables"],
      correctIndex: 0,
      explanation: "Every object has an internal prototype link; property lookups walk the chain until found or until reaching null after Object.prototype.",
    },
  ],
  "classes/json": [
    {
      question: "What does JSON.stringify({ a: 1 }) return?",
      options: ["'{a: 1}'", "'{\"a\":1}'", "{ a: 1 }", "A Promise"],
      correctIndex: 1,
      explanation: "JSON.stringify produces a JSON string with double-quoted keys, so the output is '{\"a\":1}'.",
    },
    {
      question: "Why does JSON.stringify({ name: 'Ada', fn: () => {} }) omit the fn property?",
      options: ["Functions are intentionally omitted from JSON output", "The string is too long", "Arrow functions throw an error", "Functions are converted to null"],
      correctIndex: 0,
      explanation: "JSON has no function type, so JSON.stringify silently drops function-valued properties.",
    },
  ],
  "dom/dom-basics": [
    {
      question: "What does the abbreviation DOM stand for?",
      options: ["Document Object Model", "Data Object Module", "Document Oriented Media", "Dynamic Object Mapping"],
      correctIndex: 0,
      explanation: "The DOM is the browser's tree-structured model of the document that JavaScript can read and modify.",
    },
    {
      question: "Which statement is true about the DOM?",
      options: ["It represents the page as a tree of nodes that JS can traverse and modify", "It is a separate binary format", "It only lives on the server", "It cannot be queried"],
      correctIndex: 0,
      explanation: "The DOM is an in-memory tree of element and text nodes, updated live by JavaScript.",
    },
  ],
  "dom/dom-selection": [
    {
      question: "Which method returns the FIRST element matching the CSS selector '#login'?",
      options: ["querySelector('#login')", "getElementByClass('login')", "querySelectorAll('#login')[0]", "document.login()"],
      correctIndex: 0,
      explanation: "querySelector returns the first match for any CSS selector; querySelectorAll returns all matches as a NodeList.",
    },
    {
      question: "What does document.querySelectorAll('button') return?",
      options: ["A NodeList of button elements", "The first button", "An HTML string", "undefined"],
      correctIndex: 0,
      explanation: "querySelectorAll returns a static NodeList containing every element that matches the selector.",
    },
  ],
  "dom/dom-manipulation": [
    {
      question: "Which property changes the visible text content of an element?",
      options: ["element.textContent", "element.html", "element.inner()", "element.write"],
      correctIndex: 0,
      explanation: "Setting element.textContent replaces the element's rendered text with the new value.",
    },
    {
      question: "Which method attaches a new child element to the end of a node?",
      options: ["node.appendChild(child)", "node.insertChild(child)", "node.pushChild(child)", "node.add(child)"],
      correctIndex: 0,
      explanation: "appendChild appends the child to the end of the node's children list.",
    },
  ],
  "dom/events": [
    {
      question: "Which method registers an event handler for a click?",
      options: ["element.addEventListener('click', handler)", "element.onClick = handler", "element.click(handler)", "element.handle('click', handler)"],
      correctIndex: 0,
      explanation: "addEventListener('click', handler) registers a handler, and it supports multiple handlers plus removal via removeEventListener.",
    },
    {
      question: "What does event.target refer to inside an event handler?",
      options: ["The element that actually triggered the event", "The element registered with addEventListener", "The parent node", "The window object"],
      correctIndex: 0,
      explanation: "event.target is the element where the event occurred, which may differ from the registered element due to bubbling.",
    },
  ],
  "dom/forms": [
    {
      question: "How do you reliably read the current value of an <input type=\"text\">?",
      options: ["inputEl.value", "inputEl.innerHTML", "inputEl.text", "inputEl.dataset.value"],
      correctIndex: 0,
      explanation: "the input's current text lives in its value property, which reflects what the user typed.",
    },
    {
      question: "Why should you call formElement.preventDefault() in a submit handler?",
      options: ["To stop the page from reloading and losing your handler's state", "To reset the form", "To make the form validate twice", "To close the browser tab"],
      correctIndex: 0,
      explanation: "preventDefault() cancels the browser's default behavior of reloading the page on form submission.",
    },
  ],
  "dom/window-object": [
    {
      question: "Which global object contains methods like setTimeout, fetch, and alert in a browser?",
      options: ["window", "document", "navigator", "screen"],
      correctIndex: 0,
      explanation: "window is the global object in browsers; document is the DOM entry point under it.",
    },
    {
      question: "What does window.setTimeout(fn, 1000) schedule?",
      options: ["fn to run after roughly 1000 milliseconds", "fn to run exactly 1000 times", "fn to cancel the event loop", "fn to run at once"],
      correctIndex: 0,
      explanation: "setTimeout queues fn to run after the delay (at least), not exactly; timing depends on the event loop.",
    },
  ],
  "modules/modules": [
    {
      question: "Which keyword exports a single value from a module?",
      options: ["export default", "import", "module.exports", "require"],
      correctIndex: 0,
      explanation: "export default marks a module's primary value, imported with import x from '...'.",
    },
    {
      question: "In an ES module, how do you import the named export add?",
      options: ["import { add } from './math.js'", "import add from './math.js'", "import * as add from './math.js'", "const add = require('./math.js')"],
      correctIndex: 0,
      explanation: "Named exports are imported with braces: import { add } from ...; default imports omit the braces.",
    },
  ],
  "modules/dynamic-imports": [
    {
      question: "What is the main benefit of import('./module.js') used inside a function?",
      options: ["The module loads only when that code runs, reducing initial bundle size", "It runs the module twice", "It blocks the event loop", "It disables caching"],
      correctIndex: 0,
      explanation: "Dynamic import returns a Promise and defers loading the module until execution time, enabling code splitting.",
    },
    {
      question: "What does the dynamic import expression resolve to?",
      options: ["The module namespace object", "The default export directly", "A string", "A DOM element"],
      correctIndex: 0,
      explanation: "const mod = await import('./x.js') gives the module namespace; default exports are at mod.default.",
    },
  ],
  "modules/package-managers": [
    {
      question: "Which command installs a package and saves it as a dependency in package.json?",
      options: ["npm install <pkg>", "npm unlink <pkg>", "npm compile <pkg>", "npm host <pkg>"],
      correctIndex: 0,
      explanation: "npm install <pkg> (or npm i) downloads the package and, in modern npm, records it in dependencies.",
    },
    {
      question: "What is the purpose of the package-lock.json file?",
      options: ["It pins exact dependency versions for reproducible installs", "It stores test results", "It lists every author", "It caches browser downloads"],
      correctIndex: 0,
      explanation: "package-lock.json records the exact resolved versions of every dependency so installs are deterministic.",
    },
  ],
  "modules/module-bundlers": [
    {
      question: "Why do browsers and Node often need a bundler like Vite or Webpack?",
      options: ["Bundlers combine many modules, resolve dependencies, and optimize output for production", "Bundlers replace the browser", "Bundlers are required to run console.log", "Bundlers translate CSS to HTML"],
      correctIndex: 0,
      explanation: "Bundlers resolve the import graph and emit a small number of optimized files, handling features the runtime lacks.",
    },
    {
      question: "What does tree-shaking refer to in a bundler context?",
      options: ["Removing unused exports so the bundle is smaller", "Deleting node_modules", "Pruning old git branches", "Renaming all variables to one letter"],
      correctIndex: 0,
      explanation: "Tree-shaking statically detects and drops code that is never imported, shrinking the final bundle.",
    },
  ],
  "modules/ecmascript": [
    {
      question: "Which major standard release introduced let, const, arrow functions, and classes?",
      options: ["ES6 (ES2015)", "ES3", "ES5", "ESNext only"],
      correctIndex: 0,
      explanation: "ES6/ES2015 was the landmark release that added let, const, arrows, classes, promises, and template literals.",
    },
    {
      question: "How do you check which ECMAScript features a browser supports?",
      options: ["Feature detection with a tool like caniuse, or runtime checks before using them", "Reading the browser version only", "Counting installed plugins", "By running fetch"],
      correctIndex: 0,
      explanation: "Dedicated tools and feature detection tell you whether a specific syntax/API is supported before you ship it.",
    },
  ],
  "advanced/regex-intro": [
    {
      question: "What does the regular expression /^\\d{3}$/ match?",
      options: ["Exactly three digits", "Any three characters", "A word with three letters", "Empty strings"],
      correctIndex: 0,
      explanation: "^ and $ anchor the match, \\d means digit, and {3} requires exactly three, so it matches strings like '123'.",
    },
    {
      question: "What does /world/i.test('Hello WORLD') return?",
      options: ["true", "false", "null", "world"],
      correctIndex: 0,
      explanation: "The i flag makes the match case-insensitive, so 'WORLD' satisfies /world/, and test returns true.",
    },
  ],
  "advanced/generators": [
    {
      question: "Which syntax defines a generator function?",
      options: ["function* gen()", "async function gen()", "class gen()", "const gen = => *"],
      correctIndex: 0,
      explanation: "The asterisk after function marks a generator: function* gen() returns an iterator that pauses on yield.",
    },
    {
      question: "How do you pause a generator and hand back a value?",
      options: ["yield value", "return pause", "await value", "stop value"],
      correctIndex: 0,
      explanation: "yield suspends execution and returns a value; the next .next() call resumes from the same spot.",
    },
  ],
  "advanced/legacy-var": [
    {
      question: "What is a classic bug caused by var inside a for loop?",
      options: ["The loop variable leaks and shares one final value in closures", "var cannot be used in loops", "The loop never starts", "var resets every iteration"],
      correctIndex: 0,
      explanation: "var is function-scoped and reused across iterations, so async callbacks in the loop all see the final value; let fixes this.",
    },
    {
      question: "Which statement about var hoisting is correct?",
      options: ["var declarations are hoisted to the top of their function scope but initialized to undefined", "var is destroyed before the script runs", "var cannot be used before declaration", "var has block scope"],
      correctIndex: 0,
      explanation: "var declarations are hoisted and initialized to undefined, whereas let/const are hoisted but stay in the temporal dead zone.",
    },
  ],
  "advanced/legacy-topics": [
    {
      question: "What is the legacy XMLHttpRequest object primarily used for?",
      options: ["Making HTTP requests before fetch became standard", "Parsing HTML", "Storing cookies", "Compiling templates"],
      correctIndex: 0,
      explanation: "XMLHttpRequest was the older API for AJAX requests; modern code prefers fetch().",
    },
    {
      question: "Why might a legacy test script use callback-style setTimeout chains?",
      options: ["Because callbacks were the only way to sequence async work before promises existed", "Because callbacks are faster than await", "Because setTimeout is synchronous", "Because callbacks are required by the DOM"],
      correctIndex: 0,
      explanation: "Old test code sequenced waits with nested callbacks; promise chains and async/await are the modern replacements.",
    },
  ],
  "advanced/interview-prep": [
    {
      question: "What is the difference between let and const in one sentence?",
      options: ["let allows reassignment while const does not; both are block-scoped", "let is global while const is local", "const allows reassignment but let does not", "There is no difference"],
      correctIndex: 0,
      explanation: "Both are block-scoped ES6 declarations; the difference is that const cannot be reassigned after declaration.",
    },
    {
      question: "How would you explain the difference between == and === in an interview?",
      options: ["== compares after type coercion; === compares value and type without coercion", "=== is slower than == in all browsers", "== is the same as equals() in Java", "=== only works on objects"],
      correctIndex: 0,
      explanation: "== coerces operands to a common type first, while === requires the same value and the same type, avoiding loose pitfalls.",
    },
  ],
};