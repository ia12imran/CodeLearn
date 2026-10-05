import type { Topic } from "../../types";

/** JavaScript Introduction - What JavaScript is, where it runs, and why automation testers live in it. */
export const topic: Topic = {
  slug: "intro",
  title: "JavaScript Introduction",
  icon: "rocket",
  description: "What JavaScript is, where it runs, and why automation testers live in it.",
  level: "beginner",
  lessons: [
    {
      slug: "what-is-javascript",
      title: "What is JavaScript?",
      description: "The one language the web is written in.",
      content: `JavaScript is the programming language the web is written in. A web page is built from HTML, which holds the text and the buttons. CSS decides how it looks. JavaScript is what makes it react. It is the layer that hears a click, fetches fresh data and updates the page without asking the server for a whole new copy. If you spend your days automating the web, you are automating the world JavaScript runs in. So it is worth knowing what it is before you learn to drive it.

**A picture worth keeping**
- HTML is the skeleton, CSS is the paint, JavaScript is the nervous system
- A painted statue cannot blink, and a button that never responds is only decoration
- That is why a page can look finished and still do nothing until JavaScript runs
- Tests exist because that last part breaks silently, with no visible error on screen

**What JavaScript is, in plain words**
- A programming language: a written list of instructions a computer follows step by step
- The default language of the browser, so nothing needs installing to run it
- Also the language of Node.js, which runs JavaScript on a server or on your own machine
- The language behind Playwright, Cypress, WebdriverIO and most web testing tools
- A package ecosystem called npm, with more than a million ready-made libraries
- Dynamically typed: you do not declare a type up front, the value decides its type
- Nearly every popular site you use every day is running it, so bugs there are real

**Where the same language runs**
- In the browser: read and change the page, handle clicks, send network requests
- On a server with Node.js: build APIs, run build scripts, power test runners
- Inside a test run: a Playwright spec file is just an ordinary JavaScript file

**JavaScript is not Java**
- Java is a separate language, made by Sun Microsystems, aimed at desktop and Android apps
- JavaScript was made by Brendan Eich at Netscape in 1995, for web pages
- The names are similar only because Java was the fashionable name in 1995
- Both use curly braces, which is why people mix them up at the start
- The giveaway on disk: a JavaScript file ends in .js, a Java file ends in .java

**Versions: ECMAScript**
- ECMAScript is the official standard JavaScript has to follow
- ES6, also written ES2015, was the big modern release: let, const, arrow functions, classes, promises
- Later years added async/await, optional chaining and the nullish coalescing operator
- Year numbers only matter when you need a feature a newer year introduced
- In practice any current browser, or Node 18 and up, gives you nearly all of it

**Common mistakes**
- Believing JavaScript only runs in a browser. Node.js runs it just as well
- Treating ES6 features as risky. They have been standard for years
- Writing a test that only clicks around and checks nothing. A test has to assert
- Copying old ES5 tutorials full of var and callback functions. Prefer const, let and arrows
- Confusing a library with the language. React is a library. JavaScript is the language underneath
- Expecting a compile error to catch a typo. JavaScript only complains when it runs that line
- Naming a file test.js and forgetting that Node only runs files you point it at by path

**Where you meet this in real work**
- A Playwright test that logs in, fills a form and asserts the resulting URL
- A Cypress test using cy.get and cy.intercept to check the network
- A Node script that reads a JSON fixture and posts it to an API`,
      codeExample: `// A first look at the values JavaScript works with.
// Text, numbers, lists and the typeof check that tells them apart.

const language = "JavaScript";
const created = 1995;
const runsIn = ["browser", "Node.js", "test runner"];

console.log(language, "was created in", created);
console.log("Runs in:", runsIn.join(", "));

// typeof tells you what kind of value you are holding.
console.log(typeof language);   // string
console.log(typeof created);    // number
console.log(typeof runsIn);     // object
console.log(typeof true);       // boolean

// Template literals glue text together without + everywhere.
const summary = \`\${language} runs in \${runsIn.length} places, one of them your tests.\`;
console.log(summary);`,
        quiz: [
          {
            question: "Which popular automation frameworks use JavaScript?",
            options: ["Playwright and Cypress","Pytest and Selenium","JUnit and PHPUnit","RSpec and Cucumber"],
            correctIndex: 0,
            explanation: "Playwright, Cypress, and WebDriverIO are all JavaScript-based automation tools.",
          },
          {
            question: "JavaScript is standardized under which name?",
            options: ["Java","TypeScript","ECMAScript","JScript"],
            correctIndex: 2,
            explanation: "JavaScript follows the ECMAScript (ES) standard.",
          },
        ],
    },
    {
      slug: "why-javascript-for-automation",
      title: "Why JavaScript for Automation Testing",
      description: "Where JS wins in test automation, and where it does not.",
      content: `Automation means a machine repeats the checks you would otherwise do by hand. JavaScript is the language most of the modern web automation tools are written in. Learn it well and you can read a test, fix a test and write a test in one language. You never need to translate your thinking into a second language halfway through a debugging session.

**Where JavaScript dominates automation**
- Browser UI testing: Playwright, Cypress, WebdriverIO and Puppeteer
- API testing: Supertest, or the request helper built into Playwright
- Load testing: k6 load scripts are JavaScript
- Mobile testing: Appium clients can be written in JavaScript
- Unit testing: Jest, Mocha and Vitest are all JavaScript tools

**Why a JavaScript tester gets an easier time**
- One language for the page and the test, so there is no glue code between two languages
- One toolchain: Node, npm and an editor are enough to build and run the suite
- A huge community, so most answers already exist somewhere on Stack Overflow
- The DOM is readable in Node, so you can parse HTML in a unit test and assert on structure

**The JavaScript you actually use every day in a test**
- Arrays and objects to hold test data and request payloads
- Functions and arrow functions to wrap repeated steps into helpers
- Promises and async/await to wait for a page instead of guessing a sleep duration
- Destructuring, which pulls several fields out of an object in one line
- JSON.parse and JSON.stringify to move data between your test and the server

**The trade-offs, said honestly**
- A typo only shows up when that line runs. JavaScript has no compile step to catch it early
- Floating point maths can surprise you, so 0.1 + 0.2 is not exactly 0.3
- Front-end and back-end sharing one language can blur the lines between teams
- For heavy maths, data crunching or a huge enterprise backend, Python and Java are often stronger choices

**Common mistakes**
- Learning the framework before the language. You cannot debug Playwright until you know promises
- Reaching for a fixed sleep instead of waiting for the thing you actually want
- Assuming a passing run means the test is good. Check that it fails when the feature is broken
- Keeping test data as loose strings instead of typed objects, so a renamed field slips through

**A rule that keeps you out of trouble**
- If two tests share the same steps, put the steps in a function and call it from both
- If a test needs a real server, talk to the API directly instead of clicking through the UI
- If a step can be checked without a browser, check it that way. It runs a hundred times faster
- If a test is flaky, the cause is nearly always a fixed wait instead of a real wait

**Where you meet this in real work**
- A Playwright test that awaits a locator and asserts its text content
- A Cypress spec that stubs an API with cy.intercept and checks the fallback message
- A Node seed script that generates 500 test users from a single function
- A GitHub Actions workflow that installs browsers once and runs the suite in shards
- A test data builder that returns a fresh object per test, so tests cannot affect each other`,
      codeExample: `// What an automation test "feels like" in plain JavaScript.
// No framework here, just the shape of a test: data, a wait, a check.

const user = { name: "admin", password: "secret" };

// Automation tools are async because the work is not instant.
// This helper waits a moment, like waiting for an element to appear.
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loginTest() {
  console.log("Step 1: open the login page");
  await wait(100);
  console.log("Step 2: type username " + user.name);
  console.log("Step 3: click Sign in");
  await wait(100);

  const onHomePage = true;
  if (!onHomePage) {
    console.log("FAIL: still sitting on the login page");
    return;
  }
  console.log("PASS: logged in as " + user.name);
}

// A real runner would call this for you. Calling it shows the output.
loginTest();`,
        quiz: [
          {
            question: "Which of these is a JavaScript UI testing framework?",
            options: ["Cypress","Playwright","WebdriverIO","Jest"],
            correctIndex: 1,
            explanation: "Playwright is a popular JavaScript UI automation framework.",
          },
          {
            question: "What concept is used most in JS automation tests?",
            options: ["Threads","async/await","Pointers","Goto statements"],
            correctIndex: 1,
            explanation: "Automation tests constantly use async/await to wait for pages and elements.",
          },
        ],
    },
    {
      slug: "how-javascript-runs",
      title: "How JavaScript Actually Runs",
      description: "Engine, interpreter vs compiler, and what 'just in time' means.",
      content: `Your JavaScript file is just text on disk. Nothing happens until an engine reads it. The engine is the program that actually executes your code. V8 is the engine inside Chrome and inside Node.js. SpiderMonkey runs Firefox. JavaScriptCore runs Safari. Every one of those places runs your file the same way, which is why a Playwright test behaves the same on your machine and on CI. The short version is this: the engine reads your file, checks the syntax, then runs it. It runs it fast because it compiles the busy parts while your program runs. It runs it on a single thread, and it never interrupts you halfway through a line.

**Interpreter or compiler**
- An interpreter reads the file and runs each line as it goes, like reading a recipe out loud
- A compiler translates the whole file into another form first, then runs that result
- Modern JavaScript engines do both, and the second half is why the language feels fast

**Just-in-time compilation, which is the clever part**
- First the engine parses your source into a syntax tree. Parsing means turning text into a shape a computer can follow
- It interprets that shape immediately, so your code starts running almost at once
- While running, it watches for the functions and loops you use again and again
- Those hot parts get compiled into machine code, the low-level instructions a CPU understands
- The engine gets faster as your program runs longer, because it keeps guessing which code is hot
- This is called JIT, short for just-in-time. V8 calls its compiler TurboFan

**One thread, one job at a time**
- JavaScript runs your code on a single main thread, like one cook with one pan
- Nothing interrupts the middle of your line, so two lines can never tangle together
- A long loop freezes the page, because the busy thread cannot draw a new frame
- Slow code is also flaky test code. The thread is stuck, so your wait times out

**The event loop and its two queues**
- When a function finishes, the engine asks the event loop for the next piece of work
- It checks a microtask queue first. Promises land here
- Then it checks a macrotask queue. Timers and user events land here
- A microtask always beats a macrotask, even a timer set to zero milliseconds

**Hoisting, and why it surprises people**
- Function declarations are moved to the top of their scope before any line runs
- const and let are not moved, so using one before its declaration throws an error
- The safe habit is to declare a variable right where you first need it
- Arrow functions assigned to const are not hoisted, because the variable is not there yet

**What the browser adds on top**
- The DOM, which is the page as a tree of objects your script can change
- Timers, which let JavaScript hand work to the engine and pick it up later
- Web workers, which are extra threads for heavy maths, so the page stays responsive

**Where you meet this in real work**
- An await that resolves before a setTimeout callback, which looks like a bug but is correct
- A page freeze that your test reports as a timeout
- A fake timer in a unit test, which works precisely because the queue is under the engine's control`,
      codeExample: `// One thread, one job at a time, and two queues.
// The printed order surprises most beginners, so run it and look.

console.log("1 - a normal line, runs immediately");

setTimeout(() => {
  console.log("5 - timer callback, that is a macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("4 - promise callback, a microtask, jumps ahead of the timer");
});

// A function declaration is usable before the line that defines it.
greet("world");
function greet(name) {
  console.log("3 - hoisted function ran: hello " + name);
}

console.log("2 - another normal line");

// One small job at a time. A busy loop cannot be interrupted,
// which is why a heavy loop on a page is what freezes it.
let total = 0;
for (let i = 1; i <= 100000; i++) total += i;
console.log("6 - sync sum finished: " + total);`,
    },
    {
      slug: "setting-up-environment",
      title: "Setting Up Your JavaScript Environment",
      description: "Node, VS Code, running your first file, the console.",
      content: `You need three things before you write your first test: Node.js on your machine, a text editor, and a folder for the project. That is the whole setup. Everything else is optional. Get these three in place and every other tool in this course will install itself.

**Node.js, and why you need it**
- Node.js is a program that runs JavaScript outside the browser
- It ships the Node runtime, so you can run your test files like any other program
- It comes with npm, which is Node's package manager for installing libraries
- Install the current LTS version from nodejs.org. LTS means long-term support, the stable one
- Type node -v in a terminal to confirm it worked. You should see v18 or higher
- Check npm -v as well. If one works and the other does not, the install is broken

**An editor**
- VS Code is the common choice and it is free
- Any editor works, because a .js file is only text
- Turn on the editor linting so typos show up as a red underline while you type
- Save files as UTF-8 with a .js extension. Windows will sometimes hide a .js.txt ending
- Open the project folder, not one loose file, so the editor offers the right completions

**Your first project folder**
- Create a folder, then run npm init -y. That writes a package.json for you
- package.json is the project's name tag: its name, its version and its list of tools
- Install Playwright with npm install -D @playwright/test, then run npx playwright install
- The -D flag marks it a dev dependency, which means a tool for building rather than shipped code

**Running code, two ways**
- node my-test.js runs one file. It gives fast feedback while you are learning
- npx playwright test runs the whole suite and prints a report
- npx means run the tool out of this project's own node_modules folder

**The console is your main tool**
- console.log prints a value so you can see what your code actually did
- console.table prints an array of objects as a tidy grid
- console.warn and console.error mark messages as warnings and failures
- Drop a console.log into the middle of a failing test. It shows you where the truth changed

**Common mistakes**
- Running node app.js from the wrong folder. Paths are relative to where your terminal is
- Seeing Cannot find module. The package is missing, so run npm install
- Forgetting npx playwright install after a fresh clone, so browsers are missing
- Editing the test file and not saving before you run it again
- Committing your node_modules folder. It is huge and it must be in .gitignore
- Pinning your Node version in a file called .nvmrc so CI matches your machine
- Running npm install globally instead of inside the project, which breaks on a new machine`,
      codeExample: `// No installs needed for this one. It builds a tiny pretend project
// so you can see the files you will create and the commands you will type.

const packageJson = {
  name: "checkout-tests",
  version: "1.0.0",
  scripts: { test: "playwright test" },
  devDependencies: { "@playwright/test": "^1.47.0" },
};

console.log("--- what package.json holds ---");
console.log(JSON.stringify(packageJson, null, 2));
// npm run takes the script NAME, so read the key out of scripts.
const [scriptName] = Object.keys(packageJson.scripts);
console.log("To run the suite: npm run " + scriptName);

// What node -v and npm -v print on a healthy machine.
console.log("Tooling: v22.5.0  |  npm 10.8.0");

// A test file is just a list of steps. Name it tests/checkout.spec.js
async function runSuite() {
  console.log("Starting the suite...");
  const specs = ["login", "search", "checkout"];
  for (const name of specs) {
    console.log("  running " + name + " -> passed");
  }
  console.log(specs.length + " passed, 0 failed");
}

runSuite();`,
    },
  ],
};

export default topic;