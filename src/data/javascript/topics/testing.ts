import type { Topic } from "../../types";

/** Testing JavaScript - How the industry actually proves JavaScript works. */
export const topic: Topic = {
  slug: "testing",
  title: "Testing JavaScript",
  icon: "flask-conical",
  description: "How the industry actually proves JavaScript works.",
  level: "advanced",
  lessons: [
    {
      slug: "unit-testing",
      title: "Unit Testing with Jest",
      description: "describe, it, expect, and the arrange-act-assert shape.",
      content: `A test checks that a piece of code does what you expect. Like weighing a parcel on a calibrated scale, a test gives you a number you can trust, instead of a guess. It does not prove the code is perfect. It proves the behaviour you checked is the behaviour you got.

**What a unit is and how tests are grouped**
- A unit is the smallest piece with one job. It could be a single function that adds two numbers. Like one light switch controlling one lamp, it has a single clear responsibility.
- An integration test checks two or more units working together. Like checking the switch is wired to the right lamp, the parts agree with each other.
- An end-to-end test checks the whole app the way a user does. Like flipping the switch and seeing the room light up, it covers the whole path from user action to visible result.
- The testing pyramid puts many unit tests at the bottom, fewer integration tests above them, and few end-to-end tests at the top. Like a real pyramid, the wide base is the cheapest and fastest part to build.
- Too many slow tests is a design smell, not just a speed problem. Like a house with no doors between rooms, if a piece can only be tested through the whole app, that piece is too big or reaches for things it should not.

**The shape of a good test**
- Arrange, act, assert is the shape almost every test uses. Arrange sets the starting state. Act runs the one thing under test. Assert checks the outcome. Like cooking a meal, you gather, you cook, you taste.
- Assert the result, not the steps. Like tasting the finished dish instead of counting how many times you stirred, the outcome is what the user cares about.
- One behaviour per test. Like testing one button at a time, each test proves one rule, so a red test points at one reason.
- A test name should read as a sentence. "returns the sum of two numbers" tells the next person what the rule is without opening the file.

**What to test and what to avoid**
- Boundary cases are where bugs live. Empty input, one item, many items, the wrong type, zero, negative numbers, and duplicates. Like testing a lock with no key, the wrong key, and the right key, the edges reveal the real rule.
- Test behaviour, not private internals. Like checking that a car moves forward, you care about the wheels turning, not the wires hidden in the gearbox. If only internals change, the product still works, so the test should still pass.
- Deterministic tests always give the same answer. No real clock, no real network, no random numbers, and no dependence on test order. Like a recipe with fixed amounts, the same input gives the same output every run, so a failure is real.
- If something is genuinely hard to test, that is usually a sign it needs redesigning. Like a door that only opens if you break the frame, hard-to-test code is telling you about its shape. Take dependencies as parameters instead of reaching out for them.

**Key takeaway**
- A good unit test is fast, named clearly, and repeatable. It checks one result and runs the same way twice. Keeping the base of the pyramid strong is what makes the rest of the suite bearable.`,
      codeExample: `// A test framework, written by hand, so it runs in plain Node.
// Jest's describe / it / expect do exactly these three jobs.
const results = [];
function describe(name, fn) { fn(); }
function it(name, fn) { results.push([name, fn]); }
function expect(actual) {
  return {
    toBe(want) {
      if (actual !== want) {
        throw new Error(JSON.stringify(actual) + " !== " + JSON.stringify(want));
      }
    }
  };
}

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return 0;
  return a + b;
}

// In Jest the same suite reads:
// describe("add", () => {
//   it("adds two numbers", () => { expect(add(2, 3)).toBe(5); });
// });
describe("add", function () {
  it("returns the sum of two numbers", function () {
    const a = 2;               // Arrange
    const b = 3;
    const result = add(a, b);  // Act
    expect(result).toBe(5);    // Assert
  });
  it("returns 0 for a non-number", function () {
    expect(add("2", 3)).toBe(0);
  });
  it("handles a negative number", function () {
    expect(add(4, -1)).toBe(3);
  });
});

let pass = 0, fail = 0;
for (const [name, fn] of results) {
  try { fn(); pass++; console.log("PASS " + name); }
  catch (e) { fail++; console.log("FAIL " + name + ": " + e.message); }
}
console.log(pass + " passed, " + fail + " failed");`,
    },
    {
      slug: "test-doubles",
      title: "Spies, Mocks & Stubs",
      description: "Isolating units without faking everything.",
      content: `A test double is a stand-in for a real dependency. Like a crash test dummy standing in for a person, you swap in something smaller and more controllable so the test cannot be hurt. The goal is to test your unit in isolation and still check real behaviour.

**The vocabulary and what each one means**
- A dummy is passed in but never used. Like a placeholder name on a form, it fills a required slot so the code can run.
- A stub returns a canned answer. Like a vending machine that always drops the same snack, you decide what comes back, so the test does not depend on a real service.
- A spy records that it was called, and with what arguments. Like a security camera, it changes nothing and just notes what happened.
- A mock also asserts on the call. Like a checklist that fails the run if a step was skipped, it decides pass or fail based on how it was used.
- A fake is a working, simpler implementation. Like a notebook instead of a filing cabinet, it behaves enough like the real thing to be useful, and it is fast and predictable.

**What makes doubles possible**
- Dependency injection is what makes doubles possible. Like a lamp you can plug into any socket, the unit receives its dependencies instead of creating them inside. That is why Jest can pass in a stub at all.
- In real projects you will see \`jest.fn()\` for a spy and \`jest.spyOn(obj, "method")\` for a spy on existing code. The example below hand-rolls a spy so you can see the recording array that Jest hides.
- Assert on call count and arguments. Like checking someone dialled the right number exactly once, the count and the values are what you assert.

**Using doubles carefully**
- Mocks tie a test to how the code is written. Like checking a recipe step by step, refactoring the code without changing the result still breaks the test. Assert on results wherever you can.
- Over-mocking makes a test pass while the product breaks. Like checking the button was pressed but never checking the light came on, you can fake so much that the real behaviour is never exercised.
- Prefer a real object over a mock where you can. Like using a real calculator for a maths test, real collaborators are less brittle than detailed call expectations.
- An in-memory repository fake is the most useful double in an automation codebase. Like a notebook instead of a database, it keeps rows in a plain array, so tests run in milliseconds and clean up for free.
- Do not mock the thing under test. Like mocking the photocopy machine while testing a photocopy, you would only be testing your own fake. Mock the edges, never the middle.

**Key takeaway**
- Use the simplest double that works. A stub controls answers, a spy records, a mock enforces calls, a fake stands in for a whole system. Keep the real unit in the middle.`,
      codeExample: `// Test doubles, hand-rolled so you can see the inside.
// Jest would do this with jest.fn() or jest.spyOn(svc, "send").
function createSpy() {
  const calls = [];
  const spy = function () { calls.push([].slice.call(arguments)); };
  spy.callCount = () => calls.length;
  spy.calledWith = (...want) => {
    const last = calls[calls.length - 1] || [];
    return want.every((v, i) => last[i] === v);
  };
  return spy;
}
const results = [];
function it(name, fn) { results.push([name, fn]); }
function expect(actual) {
  return { toBe(want) {
    if (actual !== want) throw new Error(String(actual) + " !== " + String(want));
  } };
}

// The email service is a dependency, so we can pass in a double.
function sendWelcome(emailService, user) {
  emailService.send("welcome", user.email);
  return true;
}

it("sends the welcome email with the user address", function () {
  const spy = createSpy();
  const sent = sendWelcome({ send: spy }, { email: "a@b.com" });
  expect(sent).toBe(true);
  expect(spy.callCount()).toBe(1);
  expect(spy.calledWith("welcome", "a@b.com")).toBe(true);
});

let pass = 0, fail = 0;
for (const [name, fn] of results) {
  try { fn(); pass++; console.log("PASS " + name); }
  catch (e) { fail++; console.log("FAIL " + name + ": " + e.message); }
}
console.log(pass + " passed, " + fail + " failed");`,
    },
    {
      slug: "e2e-testing",
      title: "End-to-End Testing",
      description: "Playwright and Cypress patterns for real user journeys.",
      content: `End-to-end testing means driving the real app the way a user does. Like going to a shop, choosing an item, paying and walking out, the test follows one complete journey from the first click to the result on screen. It covers the links between parts that unit tests never see.

**The tradeoff and the shape of the suite**
- End-to-end tests are slow and can be flaky, but they catch what unit tests cannot. Like a smoke alarm, you want few, you want them reliable, and you still want them.
- A flaky test is worse than no test. Like a fire alarm that goes off for no reason, people learn to ignore it, and a real problem gets ignored too. Flakiness is a bug, not bad luck.
- For a web product the pyramid still holds. Many fast unit tests at the bottom, some integration tests in the middle, and a handful of end-to-end journeys guarding the critical paths. Like locking only the main doors of a building, you protect what matters most.
- A journey is a whole flow, not a single click. Login, sign up, add to basket, checkout, submit a form. Each one is worth a test because each one is worth money or trust.

**Writing a test a human can read**
- Write the test as a readable list of user steps. Go to the page, type an email, type a password, click sign in, expect to see the dashboard. Like instructions on a card, it should read top to bottom without a translator.
- In Playwright that looks like \`await page.goto()\`, \`await page.fill()\`, \`await page.click()\` and \`await expect(locator).toBeVisible()\`. The example below models the same journey in plain JavaScript so the order of the steps is obvious.
- Prefer \`data-testid\` over CSS selectors. Like calling a person by name instead of by their coat colour, a test id survives a redesign of the styling.

**Making it stable**
- Give every test run its own account and its own data. Like giving each runner their own locker, nothing is shared, so parallel runs cannot tread on each other.
- Never sleep for a fixed time. Like waiting for the green light instead of counting seconds, wait for the condition you actually care about. Playwright auto-waits for elements, and \`waitFor\` is there for everything else.
- Clean up after yourself and run against a known seed. Like wiping the counter between rounds, each run should start from the same known state and leave nothing behind.

**When it fails**
- Work in this order: run it headed to watch it, take a screenshot, record video, then read the trace. Like following footprints one at a time, each step shows more detail than the last.
- Fix the cause or delete the test. A permanently skipped test is a lie you are telling the next person.

**Key takeaway**
- Keep end-to-end tests few, stable and readable. Model them as the user's steps. Wait for real conditions. Give every run its own clean state, and debug with a trace.`,
      codeExample: `// A login journey modelled in plain JavaScript. No browser needed.
// Playwright would run: await page.goto("/login"), await page.fill("#email", ...),
// await page.click("button[type=submit]"), await expect(dash).toBeVisible().
function makeApp(users) {
  const state = { email: null, pass: null, page: "login", loggedIn: false };
  return {
    state,
    gotoLogin() { state.page = "login"; },
    fill(field, value) { state[field] = value; },
    clickLogin() {
      const u = users[state.email];
      state.loggedIn = Boolean(u) && u.pass === state.pass;
      state.page = state.loggedIn ? "dashboard" : "login";
    },
    waitForDashboard() { return state.page === "dashboard"; }
  };
}

function runJourney(name, email, pass, expectSuccess) {
  const app = makeApp({ "ada@example.com": { pass: "s3cret" } });
  app.gotoLogin();
  app.fill("email", email);
  app.fill("pass", pass);
  app.clickLogin();
  // Wait for a real condition, not a fixed sleep.
  const onDashboard = app.waitForDashboard();
  const ok = onDashboard === expectSuccess;
  console.log((ok ? "PASS " : "FAIL ") + name);
  return ok;
}

const results = [
  runJourney("valid login reaches the dashboard",
    "ada@example.com", "s3cret", true),
  runJourney("wrong password stays on login",
    "ada@example.com", "nope", false)
];

const pass = results.filter(Boolean).length;
console.log(pass + " passed, " + (results.length - pass) + " failed");`,
    },
    {
      slug: "test-data-patterns",
      title: "Test Data Patterns",
      description: "Fixtures, builders, factories, and seeding.",
      content: `Test data is what you feed into the thing under test. Like ingredients in a recipe, the right data makes the test obvious and the wrong data hides what it was meant to show. Good test data says only what this particular test cares about.

**Where the data should live**
- Inline literals are best when only a few fields matter. Like a sticky note that says "sugar", they are short and you can see the whole thing at once.
- A shared fixture file helps for large, stable objects. Like a printed template, it stops you retyping the same thirty fields in every file.
- Put the fields that matter in the test and nothing else. That is a feature, not duplication. Like highlighting only the ingredient you changed, the test then reads as a description of the rule rather than a wall of setup.
- Use names from the product. \`lockedOut: true\` beats \`field3: 1\`. When a test fails, the value in the message should already tell you what went wrong.

**Builders and factories**
- A builder function fills in sensible defaults so a test only states what it cares about. This is the single most useful pattern here. Like a sandwich counter where you pick one filling and everything else is handled, the test stays short even as the object grows.
- A factory creates many objects quickly, usually with a counter so every one is unique. Like numbered tickets from a dispenser, unique values stop tests from depending on each other or on their order.
- Keep builders small. If a builder needs fifteen options, the object is doing too much and probably wants splitting.

**Seeding, time and isolation**
- A seed script builds a known state before an end-to-end run. Like setting the table before the guests arrive, every run starts from the same place, so failures are reproducible.
- Random data is fine if the seed is fixed. Like rolling the same dice sequence every time, you get variety and still reproduce a failure later.
- Do not share a mutable object between tests. Changes leak sideways. If you need the same starting data twice, take a deep clone, like using a clean plate for each guest.
- Never let a test depend on today's date. Use a fixed timestamp or inject a clock. Like filming with the date printed on screen, a test about "overdue by 30 days" should not change its answer tomorrow.
- A small \`beforeEach\` resets state and a small \`afterEach\` cleans up. Like wiping the counter between rounds, each test should not care what ran before it.

**Key takeaway**
- Write the smallest data that makes the test clear. Inline for a few fields, a builder for defaults, a factory with a counter for uniqueness. Seed a known state, fix the clock, and never share a mutable object.`,
      codeExample: `// Builders and factories, hand-rolled.
const defaults = {
  name: "Test User", email: "user@example.com", role: "user",
  createdAt: "2026-01-01T00:00:00.000Z"   // never "today"
};

// A builder: state only what the test cares about.
const buildUser = (over) => Object.assign({}, defaults, over || {});

// A factory: a counter makes every value unique.
let n = 0;
function makeUser(over) {
  n += 1;
  return Object.assign({}, { name: "User " + n,
    email: "user" + n + "@example.com" }, over || {});
}

const results = [];
const it = (name, fn) => results.push([name, fn]);
const expect = (a) => ({ toBe(w) {
  if (a !== w) throw new Error(String(a) + " !== " + String(w));
} });

it("builder fills the rest from defaults", function () {
  const u = buildUser({ role: "admin" });
  expect(u.role).toBe("admin");
  expect(u.name).toBe("Test User");
});

it("factory makes unique emails", function () {
  expect(makeUser().email).toBe("user1@example.com");
  expect(makeUser().email).toBe("user2@example.com");
});

it("a deep clone stops a fixture leaking", function () {
  const base = { tags: ["smoke"] };
  const copy = JSON.parse(JSON.stringify(base));
  copy.tags.push("regression");
  expect(base.tags.length).toBe(1);
});

let pass = 0, fail = 0;
for (const [name, fn] of results) {
  try { fn(); pass++; console.log("PASS " + name); }
  catch (e) { fail++; console.log("FAIL " + name + ": " + e.message); }
}
console.log(pass + " passed, " + fail + " failed");`,
    },
  ],
};

export default topic;
