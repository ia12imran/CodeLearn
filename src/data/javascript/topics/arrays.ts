import type { Topic } from "../../types";

/** JavaScript Arrays - Ordered lists, and the methods that make them painless. */
export const topic: Topic = {
  slug: "arrays",
  title: "JavaScript Arrays",
  icon: "list",
  description: "Ordered lists, and the methods that make them painless.",
  level: "beginner",
  lessons: [
    {
      slug: "array-basics",
      title: "Array Basics",
      description: "Creating, indexing, length, and common gotchas.",
      content: `An array is a list of values in a fixed order, and you can change that list after you build it. Think of a numbered shopping list stuck to the fridge. You can add a line, cross one out, or read the third line. The position of a line is its index, and JavaScript counts positions from 0, not 1.

**Three ways to build one**
- Square brackets with values: const nums = [1, 2, 3]. This is the normal way.
- Array.from converts something else: Array.from("abc") gives ['a', 'b', 'c'].
- new Array(3) makes an array with three slots and nothing in them.

**An array is really an object**
- typeof [1, 2] is 'object', never 'array'. Arrays are objects with extra powers.
- Array.isArray(x) is the honest test. It returns true only for a real array.
- Any slot can hold anything: a number, a string, null, or another array.
- Two arrays with the same values are not the same array. The === check compares the containers.

**Length, holes and index access**
- The first slot is index 0. The last slot is arr[arr.length - 1], or arr.at(-1).
- An index past the end gives undefined instead of an error. arr[99] is undefined.
- arr.length is a plain number, and JavaScript keeps it correct after every add and remove.
- arr[0] and arr['0'] are the same slot. Property keys are strings inside, so the number is converted for you.
- arr[-1] does not count from the end. It sets a property named "-1" and leaves length alone.
- Shortening length deletes items for good. arr.length = 1 on [1, 2, 3] leaves [1].
- Lengthening length makes holes. arr.length = 5 gives three items and two empty slots.
- A hole is a slot that was never filled. Reading one gives undefined, but it is not the same as storing undefined.
- The check 0 in [ , 'x'] is false, while 0 in ['x', ] is true. Map and forEach skip holes.
- new Array(3) and a length that is too big both make holes. Use Array(3).fill(null) when you want real values.

**Methods that change the array, and methods that do not**
- Mutate means the original is edited: push, pop, shift, unshift, splice.
- Copy means you get a new array and the old one is untouched: slice, concat, spread, map, filter.
- const copy = [...arr] makes a shallow copy. Objects nested inside are still shared with the original.
- A common bug: calling a copy method and dropping the result. Nothing changes unless you assign it.

**Finding a value**
- indexOf compares with ===, which is strict equality. It never finds NaN, because NaN === NaN is false.
- includes uses the same rule but treats NaN as equal to itself. So [NaN].includes(NaN) is true.
- Use includes when you only want yes or no. Use indexOf when you also want the position.

**When a Set is the better tool**
- A Set is a list that refuses duplicates. Adding the same value twice keeps one copy.
- If the order does not matter and repeats are noise, a Set saves you a dedupe step.
- A Set also stores values in a hash table, so "is this in here?" stays fast on a big list.

**Where you meet this in real work**
- Collected API rows, locator results, and the names of your test cases.
- Cleaning a list before you loop it: const names = [...new Set(rows.map(r => r.name))].
- Asserting on a length first, so a missing list fails with a clear message.`,
      codeExample: `// Building arrays three ways, then reading slots.
const nums = [1, 2, 3];
console.log("literal:", nums, "length:", nums.length);
console.log("from string:", Array.from("abc"));
console.log("from length:", new Array(3), "len:", new Array(3).length);

console.log("typeof:", typeof nums, "| isArray:", Array.isArray(nums));
console.log("first:", nums[0], "by key:", nums["0"], "last:", nums.at(-1));
console.log("past the end:", nums[99]);

// Setting length truncates, or extends with holes.
const flex = [1, 2, 3];
flex.length = 1;
console.log("shortened:", flex);
flex.length = 4;
console.log("lengthened:", flex, "| is 2 filled?", 2 in flex);

// Mutating methods edit the original.
const colors = ["red", "green"];
colors.push("blue");
colors.unshift("black");
console.log("after push + unshift:", colors);
console.log("pop returned:", colors.pop(), "-> now", colors);

// Copying methods leave the original alone.
const original = [1, 2, 3];
const copy = original.slice();
copy.push(99);
console.log("original:", original, "| copy:", copy);

// indexOf cannot find NaN. includes can.
const weird = [NaN];
console.log("indexOf NaN:", weird.indexOf(NaN), "| includes NaN:", weird.includes(NaN));

// A Set keeps one copy of each value.
console.log("unique:", [...new Set(["a", "b", "a", "b"])]);`,
        quiz: [
          {
            question: "Which method adds an element to the END of an array?",
            options: ["push()","shift()","unshift()","splice()"],
            correctIndex: 0,
            explanation: "push() adds to the end. unshift() adds to the start.",
          },
          {
            question: "How do you make a real copy of an array?",
            options: ["const copy = original","const copy = [...original]","const copy = original.push()","There is no way"],
            correctIndex: 1,
            explanation: "The spread operator [...] creates a new independent array.",
          },
        ],
    },
    {
      slug: "array-methods",
      title: "Reading Arrays: at, find, some, every",
      description: "The search and check methods you reach for daily.",
      content: `These methods ask questions about an array and never change it. Most of them take a callback, which is a small function you hand to the method. The method runs your function once per item and uses what it returns. Think of an inspector walking down a row of shopping carts and marking each one pass or fail.

**Finding one item**
- find returns the first item your test accepts, or undefined when nothing passes.
- findIndex returns the position of that first item, or -1 when nothing passes.
- findLast and findLastIndex run from the end, so they return the final match instead of the first.
- Never write filter(cond)[0]. Filter builds the whole array first, then you throw it away. Find stops at the first match and hands back the item itself.

**What your callback actually receives**
- The callback gets three arguments: the value, the index, and the whole array.
- (item) => item.ok uses only the value.
- (item, i) => i > 2 skips the first three by position instead of by value.
- (item, i, all) => all.length - i === 1 spots the last item in one pass.

**Yes or no questions**
- some asks "is there at least one match?" and stops at the first true.
- every asks "do all of them match?" and stops at the first false.
- The empty-array trap: [].some(test) is false, and [].every(test) is true. Nothing to check means nothing failed.
- So a loop that collects zero rows passes an every check. Guard it: rows.length > 0 && rows.every(check).

**includes and a starting point**
- includes answers "is this value in here?", and unlike indexOf it does find NaN.
- The second argument is fromIndex, the position where the search starts. [1, 2, 3].includes(1, 1) is false.
- A negative fromIndex counts back from the end, so includes(3, -1) finds the last slot.

**Faster lookups than a loop**
- includes walks the array from the start every single time. Ten items checked ten times means a hundred comparisons.
- A Set keeps its values in a hash table, a structure built for fast lookup, so one check costs about the same no matter how big it is.
- const seen = new Set(items); seen.has(value) turns a full scan into one quick lookup.
- The rule: one lookup, just use includes. Thousands of lookups inside a loop, build the Set once.
- Object.fromEntries(rows.map(r => [r.id, r])) gives a plain object, so byId[7] finds the row with id 7.
- A Map is the newer tool: new Map(rows.map(r => [r.id, r])), then byId.get(7). Keys keep their real types.
- Use an object for string keys you read as byId['7']. Use a Map when keys are numbers or objects.

**flatMap for one extra step**
- map turns each item into exactly one item. flatMap lets your callback return an array, and it flattens that array by one level.
- [1, 2].flatMap(n => [n, n]) gives [1, 1, 2, 2]. map would give [[1, 1], [2, 2]].
- Use flatMap to explode one row into several values, or to drop a row by returning [] instead.
- Return a flat value for the split, or a nested one for the search. Not both in the same callback.

**Where you meet this in real work**
- page.locator("li").allTextContents() gives you an array to search before you assert.
- Checking that every row in a response body has an id, and finding the first row that fails.
- Removing duplicate labels before you loop over them.`,
      codeExample: `const rows = [
  { id: 1, name: "Ana", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Cid", role: "admin" },
];

// find gives the item. findIndex gives the position.
const admin = rows.find(r => r.role === "admin");
console.log("first admin:", admin.name, "at index", rows.findIndex(r => r.role === "admin"));
console.log("missing:", rows.find(r => r.role === "ghost"));

// The callback gets value, index and the whole array.
console.log("last row:", rows.find((r, i, all) => i === all.length - 1).name);
console.log("second row:", rows.find((r, i) => i === 1).name);
console.log("last admin:", rows.findLast(r => r.role === "admin").name);

// some and every, and the empty-array trap.
console.log("any admin?", rows.some(r => r.role === "admin"));
console.log("all admins?", rows.every(r => r.role === "admin"));
console.log("empty every:", [].every(() => false), "| empty some:", [].some(() => true));

// includes with a starting position.
console.log("1 from index 1:", [1, 2, 3].includes(1, 1), "| 3 from -1:", [1, 2, 3].includes(3, -1));

// Set lookup beats a loop of includes.
const values = [5, 9, 12, 9];
const seen = new Set(values);
console.log("set has 12:", seen.has(12), "| set size:", seen.size);

// flatMap flattens one level that map leaves nested.
console.log("flatMap:", values.flatMap(v => [v, v * 2]));

// A lookup object built once.
const byId = Object.fromEntries(rows.map(r => [r.id, r.name]));
console.log("byId[3]:", byId[3]);`,
      quiz: [
          {
            question: "What does arr.map(fn) return?",
            options: ["The original array","A new transformed array","A boolean","undefined"],
            correctIndex: 1,
            explanation: "map() returns a new array with each element transformed by the callback.",
          },
          {
            question: "Which method returns the FIRST element matching a condition?",
            options: ["filter","find","some","map"],
            correctIndex: 1,
            explanation: "find() returns the first match (or undefined). filter() returns all matches as an array.",
          },
        ],
    },
    {
      slug: "advanced-arrays",
      title: "map, filter & Transformations",
      description: "Building new arrays instead of mutating old ones.",
      content: `map, filter and their relatives take a list and hand you a new list. They never touch the original. That is what makes them safe in a test: a bad transformation cannot corrupt data a later step still needs. Think of copying a spreadsheet before editing the cells.

**map keeps the length**
- map runs your function on every item and collects the results into a new array.
- The result always has the same length as the original. The only way to change a length is to filter.
- users.map(u => u.name) turns objects into strings. [1, 2].map(n => n * 2) doubles the numbers.
- The trap: people try to drop items with map. It cannot be done, because the length never shrinks.
- Rule of thumb: map changes every item, filter chooses which items survive.

**filter keeps the matches**
- filter keeps every item where your test is true and throws the rest away.
- The result is a new, shorter array. The original still holds everything.
- [1, 2, 3, 4].filter(n => n % 2 === 0) gives [2, 4]. [1, '', 2].filter(Boolean) drops empties.
- Another trap: filtering and then reading result[0] instead of using find.

**Chaining them**
- map then filter reads like two sentences: change each item, then keep the ones that pass.
- rows.map(r => r.total).filter(n => n > 100) works because every step returns an array.
- Order matters when the map is expensive. Filter first and you do less work.
- A five-step chain builds five throwaway arrays. That is cheap for a hundred rows and starts to cost something at tens of thousands. Cut steps when you notice that.

**forEach is not map**
- forEach runs your function for its side effects, and returns undefined.
- Use it to log, to push into another array, or to click elements one at a time.
- If you needed a result and you got undefined, you wanted map.
- forEach also passes the index, so rows.forEach((r, i) => ...) works when position matters.
- Never sort inside a forEach over that same array. The items shift while you walk them and you skip some.

**map reaches anything with a length**
- Strings have a length, so "abc".split('').map(c => c.toUpperCase()) gives ['A', 'B', 'C'].
- [...'abc'].map(c => c + '!') works too, because the spread builds a real array first.
- Sets and typed arrays also have a length, so map runs on them.
- A plain object has no length, so map skips it. Object.entries(obj) turns it into [key, value] pairs you can map over.

**Sorting and when to use a plain loop**
- sort rewrites the array in place and returns that same array. Nothing was copied.
- So write [...nums].sort(...) when the original belongs to someone else.
- toSorted, toReversed and toSpliced are the non-mutating versions. arr.toSorted() gives a new array.
- A plain for loop wins when you need to stop early, because there is no break in forEach.
- It also wins when the logic is heavy enough that a named variable reads better than a nested arrow function.
- Use a loop when the list is huge and you do not need a new array, so you skip the copy entirely.

**Where you meet this in real work**
- Shaping an API response into the exact rows your assertions expect.
- Keeping only visible rows: rows.filter(r => r.visible).map(r => r.label).
- Trimming collected text before you compare it: labels.map(s => s.trim()).filter(Boolean).`,
      codeExample: `const users = [
  { name: "Ana", age: 30, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Cid", age: 25, active: true },
];

// map: same length, every item changed.
console.log("names:", users.map(u => u.name));
console.log("length kept:", users.map(u => u.name).length === users.length);

// filter: only the matches survive.
console.log("adults:", users.filter(u => u.age >= 18).map(u => u.name));

// Chain: map first, then filter.
console.log("names without Bob:", users.map(u => u.name).filter(n => n !== "Bob"));

// map cannot drop items, filter can.
console.log("kept:", users.map(u => (u.active ? u.name : null)).filter(Boolean));

// forEach returns undefined. It is only there for side effects.
const result = users.forEach(u => u.name.toUpperCase());
console.log("forEach gave back:", result);

// map also runs on a string turned into an array.
console.log("letters:", "abc".split("").map(c => c.toUpperCase()).join("-"));

// sort edits in place. toSorted and a copy do not.
const nums = [10, 2, 1];
const sortedCopy = [...nums].sort((a, b) => a - b);
console.log("original:", nums, "| sorted copy:", sortedCopy);
console.log("toSorted:", nums.toSorted((a, b) => b - a), "| still:", nums);`,
      quiz: [
          {
            question: "What does arr.map(fn) return?",
            options: ["The original array","A new transformed array","A boolean","undefined"],
            correctIndex: 1,
            explanation: "map() returns a new array with each element transformed by the callback.",
          },
          {
            question: "Which method returns the FIRST element matching a condition?",
            options: ["filter","find","some","map"],
            correctIndex: 1,
            explanation: "find() returns the first match (or undefined). filter() returns all matches as an array.",
          },
        ],
    },
    {
      slug: "reduce",
      title: "reduce & Grouping",
      description: "Folding an array into one value, plus groupBy patterns.",
      content: `reduce folds a list into one single value. Imagine collapsing a stack of receipts into one summary sheet: you take the first receipt, add each new one into the sheet, and at the end you are holding exactly one thing. That running thing is called the accumulator.

**The shape of the call**
- array.reduce(function(accumulator, current, index, array) { ... }, initialValue)
- Your function runs once per item. It receives the running total, the item, the position, and the whole array.
- Whatever your function returns becomes the accumulator for the next item.
- The initial value is not optional in good code. Seed 0 for a sum, [] for a list, {} for an object.

**Totals, counts and the biggest value**
- [1, 2, 3].reduce((total, n) => total + n, 0) gives 6.
- Drop the 0 and the first item becomes the accumulator, so a sum of numbers happens to work by luck.
- A sum of strings only works with a seed: [1, 2].reduce((a, b) => a + b, '').
- A sum over an empty array with no seed throws a TypeError. You cannot fold nothing.
- nums.reduce((max, n) => Math.max(max, n), -Infinity) gives the largest number.
- Math.max(...nums) spreads the array into arguments and blows the stack on a huge list. Reduce has no such limit.

**Counting and grouping into an object**
- results.reduce((acc, r) => { acc[r.status] = (acc[r.status] || 0) + 1; return acc; }, {}) counts by status.
- The accumulator is an object. Each key is a value you have seen, each value is its running count.
- An object accumulator has to return itself. Leave out return acc and the next step gets undefined, then it crashes.

**reduce acting as map or filter**
- To keep items: rows.reduce((keep, r) => { if (r.ok) keep.push(r); return keep; }, []).
- To change items: rows.reduce((out, r) => [...out, r.name.toUpperCase()], []).
- Both work and both read worse than map or filter. Use reduce when you are folding into one value.
- For nested lists, the built-in flat(1) flattens exactly one level. That is a fixed rule, not a bug.

**The object accumulator footgun**
- A plain {} accumulator lets a key like "__proto__" or "constructor" reach the prototype.
- That is called prototype pollution, and it can quietly break code far away from your test.
- Safer options: start from Object.create(null), or use a Map, which has no prototype chain to walk into.

**When reduce is the wrong tool**
- If a plain loop with a running total reads more clearly, write the loop. A test is not a puzzle.
- A good test of the code: if you need a comment to explain what the accumulator holds, use a for loop.

**Where you meet this in real work**
- Counting passed, failed and skipped tests in a report summary.
- Turning a list of id and row pairs into a lookup object, so later searches are instant.
- Totalling response times to print one average at the end of a run.`,
      codeExample: `const results = [
  { name: "login", status: "pass", ms: 120 },
  { name: "search", status: "fail", ms: 300 },
  { name: "logout", status: "pass", ms: 90 },
];

// Sum, with the initial value written out.
const total = results.reduce((sum, r) => sum + r.ms, 0);
console.log("total ms:", total, "| average:", Math.round(total / results.length));

// Count occurrences into an object. The accumulator must return itself.
const byStatus = results.reduce((acc, r) => {
  acc[r.status] = (acc[r.status] || 0) + 1;
  return acc;
}, {});
console.log("counts:", byStatus);

// Group rows into buckets.
const byName = results.reduce((acc, r) => {
  (acc[r.name] ||= []).push(r.status);
  return acc;
}, {});
console.log("grouped:", byName);

// Find the biggest without spreading into Math.max.
console.log("slowest:", results.reduce((max, r) => Math.max(max, r.ms), 0).toString() + "ms");

// Build a lookup object once.
const byId = Object.fromEntries(results.map((r, i) => [i, r.name]));
console.log("lookup:", byId);

// reduce on an empty array with no seed throws, so always seed.
console.log("seeded:", [].reduce((a, b) => a + b, 0));`,
      quiz: [
          {
            question: "What does the accumulator do in reduce()?",
            options: ["Starts the loop","Carries the running result between steps","Counts iterations","Nothing"],
            correctIndex: 1,
            explanation: "The accumulator carries the result and the callback's return value becomes the next accumulator.",
          },
          {
            question: "[1,2,3].reduce((t, n) => t + n, 0) gives?",
            options: ["6","0","[1,2,3]","3"],
            correctIndex: 0,
            explanation: "reduce sums the array: 0+1+2+3 = 6.",
          },
        ],
    },
    {
      slug: "array-flattening",
      title: "Flattening, Sorting & Splicing",
      description: "flat, flatMap, sort pitfalls, and splice vs slice.",
      content: `Flattening means turning nested arrays into one flat list. Think of unpacking moving boxes: each box is an array, and the items inside are what you actually want. This lesson also covers the three methods people mix up most: flat, sort and splice.

**flat and how deep it goes**
- [1, [2, [3]]].flat() gives [1, 2, [3]]. flat takes a depth, and the default is 1.
- [1, [2, [3]]].flat(2) gives [1, 2, 3]. flat(Infinity) flattens every level, however deep it goes.
- The default is 1 because that is the safe choice. Nesting that deep usually points at a shape you should question.
- flat never changes the original array. It always returns a new one.
- So [[1, [2]], [3]].flat(1) gives [1, 2, 3], because one level was enough for this shape. Count your levels before you guess.

**flatMap, and when it beats map plus flat**
- flatMap maps every item and then flattens the result by one level.
- [[1, 2], [3, 4]].flatMap(row => row) is shorter than the same map and then flat.
- words.flatMap(w => w.split(' ')) splits and flattens in one pass, instead of two arrays.
- Use flatMap when your map already hands back an array per item.

**Doing it by hand**
- A manual flatten needs recursion, which is a function calling itself on smaller input.
- Take the first item. If it is an array, flatten it and add it to the result. Otherwise add it as it is.
- Then walk the rest the same way and return what you built.
- Recursion handles any depth and any nesting style. flat(Infinity) is shorter but only understands arrays.

**splice versus slice**
- splice(start, deleteCount, ...newItems) edits the array and hands back what it removed.
- slice(start, end) returns a piece and leaves the array exactly as it was.
- arr.splice(1, 2) removes two items at index 1 and returns them to you.
- arr.slice(1, 2) returns a one-item copy and changes nothing at all.

**sort, its trap, and the copies**
- sort edits the array in place and returns that same array. Nothing was copied.
- [10, 2, 1].sort() gives [1, 10, 2], which is not what you wanted. The default sort reads items as text, and "10" comes before "2" the same way A comes before B.
- Pass a comparator to fix it: nums.sort((a, b) => a - b). It returns a number, and a negative number means a comes first.
- Modern engines sort stably, so items that compare equal keep their original order. Old browsers did not.
- Copy first when the array is not yours: [...nums].sort((a, b) => a - b).
- toSorted, toReversed and toSpliced are the non-mutating versions. They follow the same rules, so toSorted still compares text by default.

**Comparing two lists properly**
- Deep equal means checking nested structure and values, not just length.
- Compare lengths first. If they differ, stop right there.
- Then walk both with one index and recurse whenever an item is an array.
- For objects, compare the keys too. JSON.stringify is a quick trick, but it depends on key order.

**Where you meet this in real work**
- Response bodies that return rows of rows, such as a table inside a table.
- Comparing collected text against an expected array of strings.
- Sorting a list of results for a report without changing the object you were handed.`,
      codeExample: `// flat: the default depth is 1, so deeper arrays survive.
const nested = [1, [2, [3, [4]]]];
console.log("flat():", nested.flat(), "flat(2):", nested.flat(2));
console.log("flat(Infinity):", nested.flat(Infinity));

// flatMap flattens one level that map leaves nested.
const words = ["hello world", "flat map"];
console.log("map:", words.map(w => w.split(" ")).length, "nested arrays");
console.log("flatMap:", words.flatMap(w => w.split(" ")));

// A manual recursive flatten.
function flatten(input) {
  const out = [];
  for (const item of input) {
    if (Array.isArray(item)) out.push(...flatten(item));
    else out.push(item);
  }
  return out;
}
console.log("manual:", flatten(nested));

// splice edits the array and hands back what it removed.
const colors = ["red", "green", "blue"];
const nums = [2, 10, 1];
console.log("splice returned:", colors.splice(1, 1), "| now:", colors);
console.log("slice:", nums.slice(1), "| untouched:", nums);

// Default sort is text order. A comparator fixes numbers.
console.log("default:", [...nums].sort());
console.log("numeric:", [...nums].sort((a, b) => a - b));
console.log("descending:", nums.toSorted((a, b) => b - a), "| original:", nums);

// Deep equal that walks nested arrays.
function deepEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((item, i) => (Array.isArray(item) ? deepEqual(item, b[i]) : item === b[i]));
}
console.log("deepEqual:", deepEqual([1, [2]], [1, [2]]), deepEqual([1, [2]], [1, 2]));`,
      quiz: [],
    },
  ],
};

export default topic;
