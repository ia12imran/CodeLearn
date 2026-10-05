import type { Topic } from "../../types";

/** Objects & ES6 Features - Keyed collections, destructuring, and safe access. */
export const topic: Topic = {
  slug: "objects",
  title: "Objects & ES6 Features",
  icon: "braces",
  description: "Keyed collections, destructuring, and safe access.",
  level: "beginner",
  lessons: [
    {
      slug: "object-basics",
      title: "Object Basics",
      description: "Keys, values, nesting, copying and merging.",
      content: `An object is a labelled box of values. Picture a paper form: every field has a name (the key) and something written in it (the value). You look up a field by its name, not by its position, so nothing depends on the order you filled the form in. Every JSON response from an API arrives in this shape, so you read it on almost every test.

**Two ways to read a value**
- Dot notation: user.name. Use it when the key is one plain word.
- Bracket notation: user["name"]. Use it when the key lives in a variable.
- Brackets are required for keys with a space: user["first name"].
- Brackets are required for keys with a dash or a dot: headers["content-type"].
- Brackets are the only option when the key is only known at run time: user[fieldName].
- Reading a key that was never set gives undefined. It does not throw, so a typo can sit there unnoticed.

**Values can be anything**
A value can be a number, a string, a boolean, an array, another object, or a function. Because a function is a value, you can store behaviour in an object, and that is what methods are. Objects nest freely, so user.address.city is an ordinary line of code. Nesting is a choice, not a rule. Two levels is easy to read. Six levels means you should probably split the object up.

**Adding, changing and removing keys**
- Add a key: user.role = "tester". The key simply appears.
- Change a key: user.role = "lead".
- Remove a key: delete user.role. Reading it afterwards gives undefined, not an error.
- Objects are open by default. You can add or remove keys at any time, which is why a shared object can surprise you later.

**Keys are always strings**
Object keys are strings or symbols. A number key is quietly turned into a string, so obj[1] and obj["1"] name the same key. Object.keys gives you strings even when you wrote numbers, so compare keys as strings. Anything that is not a string or symbol would have to be a symbol, so obj[someObject] = 1 uses the string "object" and not your object.

**Reference and copying**
Two variables can point at one object. Think of a single shopping list with your name written on two pieces of paper. Write on it through one name and the other name sees the change. Numbers and strings are copied when you assign them. Objects are not.
- Spread, {...user}, and Object.assign({}, user) both copy only the top level.
- Values nested inside are still shared with the original, not duplicated.
- structuredClone(user) makes a real deep copy, all the way down. Functions cannot be cloned and are dropped.
- JSON.parse(JSON.stringify(user)) is the older trick, and it fails quietly. Dates come back as strings, Maps come back as empty objects, and functions and undefined vanish.
- The rule to remember: a shallow copy is a new lid on the same box. The contents inside are still shared.

**Checking for a key**
- The in operator asks whether a key exists, including keys inherited from the prototype.
- user.hasOwnProperty("name") only looks at the object's own keys.
- For plain API data the two agree. Use hasOwnProperty when an inherited key must not count.
- Use in, not a truthiness test. if (user.role) also fails when the value is an empty string.

**Where you meet this in real work**
- Read fields off a Playwright response body before you assert on them, with const body = await response.json().
- Deep copy shared test data before you mutate it, so one test cannot leak into the next.
- Spread two config objects together to build one config for the browser context.`,
      codeExample: `// Reading, writing and deleting keys, plus the copy traps.
const user = { name: "Ana", "content-type": "admin", address: { city: "Lisbon" } };

// Dot notation for plain keys, brackets for odd keys or a key from a variable.
const field = "name";
console.log("Dot:", user.name, "| Bracket:", user[field], "| odd key:", user["content-type"]);

// Add, change, delete.
user.age = 30;
user.age = 31;
delete user.age;
console.log("After delete, user.age is:", user.age);

// Keys are strings, and integer-like keys come back first.
const numbered = { 2: "b", a: "c", 1: "a" };
console.log("Numbered keys:", Object.keys(numbered));

// Two names, one object: the same box.
const alias = user;
alias.name = "Bea";
console.log("Shared object, user.name is:", user.name);

// A shallow copy shares the nested box.
const shallow = { ...user };
shallow.address.city = "Porto";
console.log("Shallow copy city:", user.address.city);

// structuredClone makes a real deep copy.
const deep = structuredClone(user);
deep.address.city = "Faro";
console.log("Deep copy city:", user.address.city, "vs", deep.address.city);

// The JSON trick drops Dates and functions.
const lossy = JSON.parse(JSON.stringify({ when: new Date(0), fn: () => 1 }));
console.log("JSON round trip:", lossy.when, "| fn is", typeof lossy.fn);`,
      quiz: [
        {
          question: 'user["age"] is which way of accessing a value?',
          options: ["Dot notation","Bracket notation","Index notation","Chaining"],
          correctIndex: 1,
          explanation: "Bracket notation (user['age']) works with strings and dynamic keys.",
        },
        {
          question: "How do you make a copy of an object with one field changed?",
          options: ["Mutate the original","Object.delete(user, field)","Spread: { ...user, age: 31 }","JSON.copy(user)"],
          correctIndex: 2,
          explanation: "Spread creates a copy; override a field after the spread.",
        },
      ],
    },
    {
      slug: "object-methods",
      title: "Object Methods: keys, values, entries",
      description: "Turning an object into something you can loop over.",
      content: `These are the built-in functions on the Object constructor. They take a plain object apart so you can loop over it, or build one back up. This is the entry point for turning an API response into something you can filter, count and check.

**Taking an object apart**
- Object.keys(user) returns an array of the key names. Think of it as the column headings of a table.
- Object.values(user) returns an array of the values, in the same order. Useful when the values are all the same kind of thing.
- Object.entries(user) returns an array of [key, value] pairs. It is the one you want for a loop, because you get both halves.
- Object.fromEntries(pairs) goes the other way: it turns pairs back into an object. It is the exact reverse of Object.entries.
- entries and keys need a real object. Passing null throws. If the body might be missing, guard it with body ?? {}.

**Three rules that surprise people**
- All three ignore the prototype chain. They only report keys the object owns, so inherited methods never show up.
- String keys come back in the order you added them.
- Integer-like keys are the exception. They come back first, sorted by number, then the string keys follow. So { b: 1, 2: 2, a: 3, 1: 4 } lists 1, 2, b, a. Your JSON payload often has ids like this, so do not assume the order matches the file.

**for...in versus Object.keys**
- for (const key in user) walks keys, and it also walks keys inherited from the prototype.
- Object.keys(user) walks the object's own keys only.
- Use Object.keys when you want exactly what is in the object. Use for...in when the inherited keys count too.
- A spread into an empty object, { ...user }, is another way to list the own keys, and it also copies the values at the same time.

**assign, merge, and mutate**
- Object.assign(target, source) copies the source keys onto target and returns target.
- It mutates the first argument. If you keep a reference to target, you will see the change, and that surprises people.
- A spread, { ...target, ...source }, builds a new object and leaves target alone. Reach for the spread when you do not want a side effect.
- The spread also handles computed keys and getters more cleanly. Object.assign trips over some of those.

**Freezing**
- Object.freeze(user) stops any change to an existing property. Nothing is added, changed, or deleted.
- Freezing is shallow. The nested objects inside are still open, so frozen.address.city = "Porto" still works.
- In strict mode, and your project modules are strict, writing to a frozen object throws a TypeError. In sloppy mode the write is silently ignored. Never rely on the silent version.
- Object.isFrozen(obj) tells you whether an object is frozen. There is no unfreeze. Make a new object instead.

**SameValue**
- Object.is(a, b) compares with the SameValue rule.
- SameValue is stricter than === in one place: Object.is(0, -0) is false, while 0 === -0 is true.
- For NaN it is the other way round. Object.is(NaN, NaN) is true, while NaN === NaN is false.
- Anywhere else the two agree, so === stays the default and Object.is is the tool for a specific check.`,
      codeExample: `// Turning an API response into something you can loop over.
const response = { 2: "second", status: 200, data: { id: 7 } };

console.log("Keys:", Object.keys(response));
console.log("Values:", Object.values(response));
console.log("Entries:", Object.entries(response));

// Integer-like keys come first, then string keys in insertion order.
console.log("Order:", Object.keys({ b: 1, 2: 2, a: 3, 1: 4 }));

// fromEntries is the reverse of entries.
console.log("fromEntries:", Object.fromEntries([["a", 1], ["b", 2]]));

// for...in sees inherited keys, Object.keys does not.
const child = Object.create({ role: "admin" });
child.id = 7;
const walk = [];
for (const k in child) walk.push(k);
console.log("for...in:", walk, "| Object.keys:", Object.keys(child));

// Object.assign mutates its first argument.
const target = { a: 1 };
const merged = Object.assign(target, { b: 2 });
console.log("Assign mutated target:", target === merged, Object.keys(target));

// Freeze is shallow, so the inner object is still open.
const frozen = Object.freeze({ a: 1, inner: { n: 1 } });
frozen.inner.n = 2;
console.log("Is frozen:", Object.isFrozen(frozen), "| inner open:", frozen.inner.n);

// A missing key reads as undefined rather than throwing.
console.log("Missing key:", frozen.b);

// Object.is uses SameValue, so 0 and -0 come apart.
console.log("Object.is(0, -0):", Object.is(0, -0), "| ===:", 0 === -0);
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));`,
      quiz: [
        {
          question: "What does Object.entries return?",
          options: [
            "Only the values, as an array",
            "An array of [key, value] pairs",
            "An array of the prototype's keys",
            "A new object",
          ],
          correctIndex: 1,
          explanation:
            "Object.entries returns [key, value] pairs, so you can loop with for...of.",
        },
        {
          question: "Why does Object.keys({ b: 1, 2: 2, a: 3 }) start with 2?",
          options: [
            "Keys are sorted alphabetically",
            "Integer-like keys are listed first, before string keys",
            "The object was created in that order",
            "It is random",
          ],
          correctIndex: 1,
          explanation:
            "Integer-like keys come back first in ascending numeric order, then string keys in insertion order.",
        },
      ],
    },
    {
      slug: "destructuring",
      title: "Destructuring",
      description: "Pulling values out of objects and arrays in one line.",
      content: `Destructuring takes values apart and binds them to variables in one statement. Think of unpacking a toolbox: you name the tools you want up front instead of reaching in one at a time and remembering where each one was.

**From an object**
- const { name } = user pulls user.name into a variable called name.
- Rename with a colon: const { name: userName } = user. The left of the colon is the key, the right is your variable.
- Default with an equals sign: const { role = "user" } = user. The default only applies when the value is undefined.
- Nest to go deeper: const { address: { city } } = user. That is the same as reading user.address.city and storing it.
- Whatever is left in the value that the pattern does not mention is ignored.

**From an array**
Array destructuring depends on position, not on name. The first item goes to the first variable.
- const [first, second] = list.
- Leave a hole with a comma: const [first, , third] = list. A comma is a placeholder for one slot.
- Fewer variables than items is fine. The extras are ignored.
- It swaps two values with no temporary variable: [a, b] = [b, a]. The right side is built first as a fresh array, then both variables are assigned from it. That is why the swap works without a placeholder.

**Rest collects the leftovers**
- const { age, ...rest } = user gives you every key except age.
- const [head, ...tail] = list gives you every item except the first.
- Rest must be last in the pattern, because it takes everything that is left.

**In a function parameter**
- function describe({ name }) takes the object apart at the call site.
- Give it a default of {} and it can never throw on a missing argument: function describe({ name = "Nobody" } = {}).
- You can return several values as an array and unpack them: const [min, max] = stats(nums).

**Why null throws but a default does not**
Destructuring reaches straight into the value. Unpacking null has nothing to reach into, so it throws a TypeError. Unpacking undefined throws the same way. A default of {} gives destructuring an empty object to work with, so the field comes back undefined instead of crashing. Optional chaining does not help here, because ?. inside a destructuring pattern is a syntax error.

**Where you meet this in real work**
- const { id, token } = await login() pulls two fields out of a login response in one line.
- for (const { name } of rows) reads one field from each item without writing row.name inside the loop.
- Assert on a response body with const { status } = response.data. One line, no intermediate variable.`,
      codeExample: `// Pulling values apart in one line.
const user = { name: "Ana", age: 30, address: { city: "Lisbon" } };

// Rename with a colon, default with =, and nest to go deeper.
const { name: userName, role = "user", address: { city } } = user;
console.log(userName, "|", role, "|", city);

// Rest collects every key you did not name.
const { age, ...rest } = user;
console.log("Rest without age:", Object.keys(rest));

// Arrays depend on position. A comma skips a slot.
const [first, , third] = [10, 20, 30];
console.log("First:", first, "Third:", third);

// Swap without a temporary variable.
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("Swapped:", a, b);

// A default {} in the parameter means no argument can throw.
function describe({ name = "Nobody" } = {}) {
  return "Hello " + name;
}
console.log(describe(user), "|", describe());

// Pull one field from each item while looping.
for (const { name: n } of [user, { name: "Bea" }]) {
  console.log("In loop:", n);
}

// Destructure straight from a function call.
function login() {
  return { id: 7, token: "abc" };
}
const { id, token } = login();
console.log("id:", id, "token:", token);`,
      quiz: [
        {
          question: "What does { a, b } = obj unpack?",
          options: [
            "a and b as variables from obj's properties",
            "A new object",
            "An array",
            "Nothing - invalid syntax",
          ],
          correctIndex: 0,
          explanation: "Object destructuring creates variables named after the object's keys.",
        },
        {
          question: "How do you swap two variables destructively?",
          options: ["[a, b] = [b, a]","swap(a, b)","a = b; b = a","You cannot"],
          correctIndex: 0,
          explanation: "Array destructuring assigns [b, a] back into a and b simultaneously.",
        },
      ],
    },
    {
      slug: "optional-chaining-nullish",
      title: "Optional Chaining & Nullish Coalescing",
      description: "Safe access into data that might be missing.",
      content: `These two operators exist for the same problem: a response is missing something you expected. Together they replace the long chain of if checks you used to write. The names are long, but the ideas are small.

**What ?. does**
- Optional chaining, written ?. , reads a value only if the thing to its left is not null and not undefined.
- obj?.profile walks into profile when obj exists. When obj is missing, the whole expression gives undefined.
- obj?.profile?.avatar does the same for the next step.
- obj.method?.() calls the method only when it is actually there. This is the one that saves you from a crash when an optional method is absent.
- arr?.[0] reads an index only when arr exists. Note the brackets: ?.[0], not ?.0.
- The chain short-circuits. Once one link is missing, nothing further down is even evaluated, so obj?.a.b.c never throws.
- Put ?. on every step you are not sure about. One ?. in the middle only protects that one link.
- The rule: the value to the left of ?. must not be null or undefined. That is exactly when ?. kicks in.

**What ?? does**
- Nullish coalescing, written ?? , takes the right side only when the left side is null or undefined.
- Those two values are called nullish. They are the only two that ?? reacts to.
- const retries = config.retries ?? 3 keeps a real 0 and gives you 3 only when retries is missing.

**The difference from ||**
- || falls back on every falsy value. Falsy means false, 0, an empty string, null, undefined, and NaN.
- So \`count || "none"\` turns a real count of 0 into the string "none". That is wrong for a total.
- \`count ?? "none"\` keeps the 0. Use ?? whenever 0 or an empty string is a value you want to keep.
- The rule: use ?? for a missing value, use || for a missing or empty value. Decide which one you mean.

**Assigning with ??=**
- config.retries ??= 3 assigns 3 only when retries is null or undefined. Otherwise it leaves the existing value alone.
- It is the safe version of \`config.retries ||= 3\`, which also overwrites a 0.

**The rule people trip over**
JavaScript will not let you mix ?? with || or && without parentheses. It is a SyntaxError, not a warning. Write \`(a ?? b) || c\` or \`a ?? (b || c)\`. The parentheses also make the order you meant obvious to the next person.

**Where you meet this in real work**
- const email = user?.contact?.email ?? "unknown" reads a nested field from a login response without four if statements.
- rows.map((r) => r.meta?.tags?.[0] ?? "none") handles rows that have no tags at all.
- Optional chaining cannot help you when the value is an empty string or 0. Neither of those is nullish, so ?. and ?? both let them through.`,
      codeExample: `// Safe access when a response is missing pieces.
const response = { data: { orders: [{ total: 42.5 }, { total: 0 }] } };

// ?. stops the whole chain at the first missing link.
console.log("Avatar:", response?.data?.user?.avatar);
console.log("Theme:", response?.settings?.theme ?? "light");

// ?.() calls only if the method exists. ?.[0] reads only if the array exists.
console.log("First total:", response?.data?.orders?.[0]?.total);
console.log("Missing row total:", response?.data?.orders?.[5]?.total);

// Without ?. the same read throws.
try {
  const missing = null;
  console.log(missing.name);
} catch (err) {
  console.log("Caught:", err.constructor.name);
}

// ?? keeps 0 and an empty string. || throws both away.
console.log("|| on 0:", 0 || "fallback", "| ?? on 0:", 0 ?? "fallback");
console.log("|| on empty:", "" || "fallback", "| ?? on empty:", "" ?? "fallback");

// ??= assigns only when the current value is nullish.
let retries = 0;
retries ??= 3;
let mode = null;
mode ??= "fast";
console.log("retries:", retries, "| mode:", mode);`,
      quiz: [
        {
          question: "What does ?. do when the chain hits a null value?",
          options: ["Throws an error","Returns undefined and stops","Returns null","Retries"],
          correctIndex: 1,
          explanation: "Optional chaining short-circuits to undefined instead of throwing.",
        },
        {
          question: "What does ?? fallback to when the left side is 0?",
          options: ["fallback","0","true","undefined"],
          correctIndex: 1,
          explanation: "?? only triggers on null/undefined, so 0 is kept.",
        },
      ],
    },
    {
      slug: "map-set",
      title: "Map & Set",
      description: "Collections with real keys and no duplicate values.",
      content: `Map and Set are two collection types added to the language in ES6. They fill the gaps that plain objects leave. Think of a Map as a coat rack with numbered hooks, where you choose the numbers. Think of a Set as a bag that silently drops anything you already put in.

**Why Map beats a plain object for a real key**
- A plain object can only use strings or symbols as keys. Anything else is quietly converted.
- A Map key can be any value: a number, an object, an array, even another Map.
- Map keys are compared by identity, the same rule as ===. Two identical object literals are two different keys.
- Map remembers the order you added the keys. Object keys are only mostly ordered, because integer-like keys jump to the front.
- Map has a size property, so you never have to call Object.keys(...).length.
- Adding and removing keys in a Map does not have to re-sort anything, so it stays fast with many keys.
- The trade-off: a Map does not turn into JSON on its own. Convert it with Object.fromEntries(map) first.

**The whole Map method set**
- set(key, value) adds or replaces, and returns the map so you can chain.
- get(key) returns the value, or undefined when the key is missing. There is no error, so check with has() when undefined is a value you store.
- has(key) tells you whether the key is there.
- delete(key) removes one pair and returns true or false.
- clear() empties the map.
- keys(), values(), and entries() each return an iterator you can loop with for...of.
- For...of over a map gives [key, value] pairs.
- new Map([["a", 1]]) builds one from pairs up front, which is handy in a test fixture.

**Set, the uniqueness bag**
- new Set([1, 2, 2, 3]) keeps 1, 2 and 3. Adding a value that is already there does nothing.
- size tells you how many unique values there are.
- add, has, delete, and clear work like the Map versions.
- Spread it back to an array with [...mySet] when you need a list.
- Membership tests stay fast, so checking \`if (!seen.has(text))\` beats scanning an array with includes.

**Watch out for two things**
- Two identical object literals are two entries, because they are two different objects. To compare by content, build the key from a string, such as JSON.stringify(user) or user.id.
- Deleting the current item while a for...of loop runs is safe. Deleting items you have not reached yet means the loop will skip them.

**Where you meet this in real work**
- A test helper keyed by selector turns a lookup into one get instead of a loop over every row.
- A Set dedupes link texts or page titles you collected from a loop, so the next assertion does not trip on a repeat.
- A Map built once from a fixture lets every test read the value it needs without rebuilding it.`,
      codeExample: `// Map keeps real keys in insertion order. Set keeps values unique.
const byUser = new Map();
const ana = { id: 1, name: "Ana" };
byUser.set(ana, { orders: 3 });

console.log("Object key works:", byUser.get(ana).orders);
console.log("Same shape, other object:", byUser.get({ id: 1, name: "Ana" }));

byUser.set("open", "opened");
console.log("Size:", byUser.size);

for (const [key, value] of byUser) {
  const k = typeof key === "string" ? key : key.name;
  const v = typeof value === "string" ? value : value.orders;
  console.log("Entry:", k, "->", v);
}

byUser.delete("open");
console.log("After delete:", byUser.has("open"), "| size:", byUser.size);
byUser.clear();
console.log("After clear, size:", byUser.size);

// Set drops duplicates and answers membership fast.
const ids = [4, 7, 4, 9, 7, 4];
const unique = new Set(ids);
console.log("Unique:", [...unique], "| size:", unique.size, "| has 7:", unique.has(7));

// Two identical literals are two different values.
const seen = new Set([{ id: 1 }, { id: 1 }]);
console.log("Object literals in a Set:", seen.size);

// Deleting the current item during for...of is safe.
const roles = new Set(["admin", "user"]);
for (const role of roles) {
  if (role === "admin") roles.delete("user");
}
console.log("Roles left:", [...roles]);`,
      quiz: [
        {
          question: "What is unique about Map keys?",
          options: ["They must be strings","They can be any type, including objects","They must be numbers","They are auto-sorted"],
          correctIndex: 1,
          explanation: "Maps accept any value type as a key.",
        },
        {
          question: "What does new Set([1,1,2,2,3]) contain?",
          options: ["[1,1,2,2,3]","[1,2,3]","{1,2,2,3}","It errors"],
          correctIndex: 1,
          explanation: "Sets only store unique values, duplicates are dropped.",
        },
      ],
    },
    {
      slug: "arrays-of-objects",
      title: "Arrays of Objects",
      description: "The most common real data shape, and how to query it.",
      content: `An array of objects is the shape almost all real data has. Table rows, search results, JSON responses, and your own test data all look like this. A spreadsheet is the everyday version: rows are objects, columns are keys. Learning to query this shape covers most of what you do with real data.

**Filter then map, the two step query**
- filter keeps the objects that match, and returns a new array of the same objects.
- map runs a function on each object and collects the results into a new array.
- Filtering first means you map over fewer objects. rows.filter(isOpen).map(getName) is the usual order.
- Neither one changes the original array, so the fixture you wrote is still there afterwards.

**Finding and changing**
- find returns the first object that matches, or undefined. Use it when you expect exactly one result.
- findIndex returns the position instead of the object.
- Sorting by a field that arrived as a string sorts 100 before 9, because "100" and "9" are compared as text. Convert first: Number(a.total) - Number(b.total).
- Copy before you sort. sort changes the array in place, so write [...rows].sort(...) to keep the original.
- Removing by id is filter: rows.filter((r) => r.id !== "2"). The original array is untouched.
- Updating one row is map plus a condition: rows.map((r) => (r.id === "2" ? { ...r, role: "admin" } : r)). The spread keeps the other fields, and every row you did not target stays the same object, so nothing else moves.

**Nested data and missing fields**
- Optional chaining reaches into rows without guarding each level: row.meta?.tags?.[0].
- Group into a Map or a plain object when you need to look things up by a field instead of scanning again.
- A lookup object is built with reduce, then read with rowsByRole.admin. A Map is better when the key is not a string.

**One object or an array?**
- Some endpoints return one object, others return an array of them, and it can depend on the request.
- Wrap it so the rest of the test only handles one shape: [].concat(data), or check Array.isArray(data) first.
- A single object has no length, so a loop over it quietly does nothing. That is a silent failure, not an error, and it is worse than a crash.

**Counting and indexing**
- Counting: reduce with a running total, or loop and set a count on a Map keyed by the field.
- Build the lookup once before the loop, then read from it. Searching the whole array on every iteration turns a fast job into a slow one.
- Where you meet this: expect(rows.filter((r) => r.role === "admin").map((r) => r.name)).toEqual(["Ana", "Cid"]).`,
      codeExample: `// The shape almost all real data arrives in.
const rows = [
  { id: "1", name: "Ana", role: "admin", total: "10" },
  { id: "2", name: "Bob", role: "user", total: "9" },
  { id: "3", name: "Cid", role: "admin", total: "100" },
];

// Filter then map: the usual two step query.
console.log("Admins:", rows.filter((r) => r.role === "admin").map((r) => r.name));

// find returns one record, or undefined.
console.log("One row:", rows.find((r) => r.id === "2").name);
console.log("Missing row:", rows.find((r) => r.id === "9"));

// Nested access that may not exist.
console.log("Tags:", rows.map((r) => r.meta?.tags?.[0] ?? "none"));

// Totals arrived as strings, so convert before comparing.
console.log("By total:", [...rows]
  .sort((a, b) => Number(a.total) - Number(b.total))
  .map((r) => r.name));

// Update one row without touching the rest.
const updated = rows.map((r) => (r.id === "2" ? { ...r, role: "admin" } : r));
console.log("Roles now:", updated.map((r) => r.role));

// Remove one row by id.
console.log("Without Bob:", rows.filter((r) => r.id !== "2").map((r) => r.name));

// Count occurrences in one pass.
const counts = new Map();
for (const r of rows) counts.set(r.role, (counts.get(r.role) || 0) + 1);
console.log("Counts:", Object.fromEntries(counts));

// One object or an array? Normalise it first.
console.log("Always array:", Array.isArray([].concat({ id: "1" })));`,
      quiz: [
        {
          question: "Which pipeline gets ALL admins' emails?",
          options: ["users.filter(u => u.role === 'admin').map(u => u.email)","users.map(u => u.email).filter(u => u.role)","users.find(u => u.role)","users.reduce(u => u.email)"],
          correctIndex: 0,
          explanation: "Filter by role first, then map to the email column.",
        },
        {
          question: "How do you update ONE record immutably in an array?",
          options: ["arr[0].role = 'x'","arr.map(u => u.id === 1 ? { ...u, role: 'x' } : u)","arr = other","update(arr, 1)"],
          correctIndex: 1,
          explanation: "map returns a new array; spread keeps other fields; conditional picks the target.",
        },
      ],
    },
  ],
};

export default topic;
