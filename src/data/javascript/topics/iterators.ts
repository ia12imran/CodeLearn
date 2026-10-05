import type { Topic } from "../../types";

/** Iterators & Generators - How for...of actually works, and how to build your own iterables. */
export const topic: Topic = {
  slug: "iterators",
  title: "Iterators & Generators",
  icon: "repeat",
  description: "How for...of actually works, and how to build your own iterables.",
  level: "advanced",
  lessons: [
    {
      slug: "iterator-protocol",
      title: "The Iterator Protocol",
      description: "next(), done, and Symbol.iterator.",
      content: `An iterator is a way to step through a list of values one at a time. An everyday analogy is a waiter holding a ticket for a stack of orders. The waiter goes to the kitchen and asks for the next order. Each time, the kitchen returns the next item and says whether there is more. The rules that make this work are called the iterator protocol.

**What it means in plain words**
- An iterator is an object with a method called next(). It is the worker that does the stepping.
- next() must return an object. That object always has two parts: value and done.
- value is the next item, or undefined when there is no item.
- done is a boolean. It is false while there are more items. It is true when there are no more items.
- An iterable is a different object. It has a method with the special key Symbol.iterator. That method returns an iterator when you call it.
- The two jobs are different. The iterable is the source of items, like a menu. The iterator is the tracker, like the waiter who remembers position.
- A plain JavaScript object cannot be looped with for...of. It is not iterable by default, even if it has keys and values.

**How it works**
- Built-in types like arrays, strings, Sets, Maps, and typed arrays are already iterable. for...of can step through them.
- For an array, the array itself is iterable. But the iterator returned by Symbol.iterator is a separate object. That means you can start two independent loops over the same array at the same time.
- for...of does more than just count. It asks the iterable for its iterator once. Then it calls next() in a loop and stops when done becomes true.
- Spreading with [...something] uses the iterator protocol. Destructuring in a for...of uses it. Array.from uses it. All three rely on the same rule.
- You can do manual iteration. Call let it = arr[Symbol.iterator](); let r = it.next(); while (!r.done) { use r.value; r = it.next(); }
- You must check done. If you forget, you may keep getting { value: undefined, done: true } objects.
- The result object from next() is frozen by the protocol in practice. It is not meant to be modified.

**Why strings behave differently**
- A string is iterable. When you use for...of over a string, the iterator yields whole code points, not single letters in some cases. That matters for emoji and accented characters.
- If you loop by index with [i], you get code units. If you loop with for...of, you get code points. Both use the same protocol, but the string's iterator is defined to give code points.

**Where this shows up**
- When you iterate over a collection in tests, for...of is reading from an iterable.
- When you spread an array into arguments or into a new array, the protocol supplies values in order.
- When you see Set or Map behave in order, that order comes from their iterator. 
- When you convert something to an array with Array.from, it reads values until done.
- In real test code, this is why custom data sources can plug into for...of if they follow the same rules.

**Common mistakes**
- Treating iterable and iterator as the same thing. They are not.
- Trying to loop over a plain object with for...of. Fix by using Object.keys, Object.values, or Object.entries, which give arrays (iterables).
- Forgetting to call Symbol.iterator() when doing manual iteration. You get the wrong object.
- Ignoring done. A broken iterator could return values after done, but the rule says done is the signal to stop. Always trust it.
- Assuming you can restart an iterator by looping again. If the same iterator object is reused, it is already at the end. You must ask the iterable for a new iterator to start fresh.`,
      codeExample: `// Show iterator protocol: array iterable vs iterator, manual loop, and for...of
const arr = ['a', 'b', 'c'];
const iterable = arr;
const it = iterable[Symbol.iterator]();
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: false }
console.log(it.next()); // { value: undefined, done: true }

// Manual while loop
const it2 = arr[Symbol.iterator]();
let res = it2.next();
const manual = [];
while (!res.done) {
  manual.push(res.value);
  res = it2.next();
}
console.log(manual); // [ 'a', 'b', 'c' ]

// for...of uses the same protocol
const forOfResult = [];
for (const v of arr) {
  forOfResult.push(v);
}
console.log(forOfResult); // [ 'a', 'b', 'c' ]`,
    },
    {
      slug: "generators",
      title: "Generator Functions",
      description: "function*, yield, and pausing on demand.",
      content: `A generator is a special kind of function that can pause and resume. An everyday analogy is a recipe card that has a bookmark. You start cooking. When you reach a yield point, you pause with your bookmark in place. Later, you resume from exactly that spot and all your ingredients are still there. This pause-and-resume behavior is what makes generators powerful.

**What it means in plain words**
- A generator function is written as function* (with a star). It looks like a normal function, but behaves differently.
- Calling a generator function does not run the body immediately. It returns a generator object. That object is both an iterator and an iterable.
- The function runs only when you call next() on that generator object.
- When the function hits yield, it pauses. It hands the yielded value out to next(), and remembers its position and all local variables.
- The next time you call next(), execution resumes from right after the yield. Variables remain alive.
- When the function returns (either with return or by reaching end), done becomes true. The return value becomes the final value if returned, but for...of stops at done.

**How it works**
- yield pauses the function and produces a value. The expression yield x evaluates differently depending on what is passed into next().
- You can pass a value into next(v). That v becomes the result of the yield expression inside the generator. This lets the caller send data back in.
- A generator is an iterator, so for...of works directly over it. for...of automatically calls next() until done and ignores the return value in most cases.
- yield* delegates to another iterable. It consumes that iterable's values one by one and yields them out, pausing the outer generator as it goes. This is not the same as writing a loop and doing yield inside; delegation passes control to the inner iterable.
- A generator cannot be restarted. Once it is done, calling next() keeps returning { value: undefined, done: true }. To start over, call the generator function again to create a fresh generator object.

**Lazy sequences and control**
- Generators produce values on demand. Nothing is computed until next() is called. This is called lazy evaluation. An infinite sequence can be defined safely if you never force it to completion.
- You can break out of a for...of early. That stops calling next(), which is important for infinite generators (add a guard condition and break).
- Two control methods exist: generator.throw(e) throws an error inside the generator at the current yield point. generator.return(v) ends the generator early, sets done to true, and returns v. These are used rarely in everyday code.

**Where you see this in practice**
- Generators can paginate API responses. The generator yields one page at a time. The caller only fetches the next page when it asks for it.
- They model streams of data where values arrive over time.
- They can simplify state machines by letting code pause between states.
- For testing, a generator can simulate step-by-step input without building a full iterator class.

**Common mistakes**
- Forgetting the star in function*. Without it, calling the function runs immediately and does not return a generator.
- Thinking the body runs on first call. It does not. First next() starts it.
- Reusing a finished generator. It stays done. Always create a new one when you need a fresh sequence.
- Using yield* when you only need a single value. yield* is for delegating an entire iterable.
- Passing nothing into next() when you expect the yield result. The first next() call cannot pass a value into the generator body before the first yield; values passed to the first next() are usually ignored.`,
      codeExample: `// Show generator basics: function*, yield, pausing, for...of
function* simple() {
  yield 'x';
  yield 'y';
  yield 'z';
}

const g = simple();
console.log(g.next()); // { value: 'x', done: false }
console.log(g.next()); // { value: 'y', done: false }
console.log(g.next()); // { value: 'z', done: false }
console.log(g.next()); // { value: undefined, done: true }

// Using for...of over generator
const collected = [];
for (const v of simple()) {
  collected.push(v);
}
console.log(collected); // [ 'x', 'y', 'z' ]

// Passing values back via next()
function* echo() {
  const first = yield 'ready';
  const second = yield first;
  return second;
}
const g2 = echo();
console.log(g2.next());        // { value: 'ready', done: false }
console.log(g2.next('hello')); // { value: 'hello', done: false }
console.log(g2.next('world')); // { value: 'world', done: true }

// Lazy infinite guard
function* countUp(start) {
  let n = start;
  while (true) {
    yield n++;
  }
}
const c = countUp(1);
const limited = [];
for (let i = 0; i < 3; i++) {
  const r = c.next();
  limited.push(r.value);
}
console.log(limited); // [ 1, 2, 3 ]`,
    },
    {
      slug: "custom-iterables",
      title: "Custom Iterables",
      description: "Making your own objects usable with for...of and spread.",
      content: `A custom iterable is an object you make that works with for...of and spread. An everyday analogy is a keybox at an office. You can hand the keybox to anyone, and the keybox can give them a keychain (an iterator). The keychain is what they use to step through keys. If you follow the iterator protocol, your object becomes compatible with all language features that expect iterables.

**What it means in plain words**
- To be iterable, an object needs a method at Symbol.iterator. That method must return an iterator.
- The returned iterator is its own object. It must have a next() method.
- next() must return { value, done } as before.
- You can implement both in one object, but it is cleaner to return a separate iterator object. That way the iterable can start fresh when asked again.
- When you add this, for...of works on your object. [...yourObject] also works. Destructuring and Array.from work too.
- The key is Symbol.iterator. A Symbol is a unique key, so two different collections can each define their own iteration order without colliding.

**How to build one**
- Create an object. Define [Symbol.iterator]() on it. Return an object with next().
- Keep state (like a current index or pointer) inside the iterator.
- For each call to next(), produce the next value or mark done true.
- For finite iterables, return done true when you run out.
- For infinite iterables, never return done true. That is allowed by the protocol, but you must always break the loop from outside.
- You can use a generator to implement Symbol.iterator. That is shorter and less error-prone.

**Practical examples**
- Range: a simple object that yields integers from start to end (inclusive or exclusive). With it, for (let n of range(1,3)) works and [...range(1,3)] gives [1,2,3].
- Linked list traversal: make the list iterable so you can loop over nodes without exposing internal pointers in calling code.
- Tree traversal (like depth-first): return an iterator that yields values in the order you choose.
- Pagination simulation: a custom iterable over pages. Each next() could conceptually load a page, but with in-memory data it just yields. You can also implement this with a generator.
- Building objects from iterables: Object.fromEntries can take an iterable of [key, value] pairs. So a custom iterable that yields pairs lets you build objects directly.

**Where this matters**
- In tests, you may mock a data source (like a cursor) that should work with for...of. Making it iterable keeps the code clean.
- In libraries, exposing iterables means your data works naturally with spread, destructuring, and built-in methods.
- You rarely need this in everyday app code, but it makes data sources composable. One code path can consume any iterable.
- It is a common interview topic because it shows understanding of the protocol.

**Common mistakes**
- Returning the same iterator object every time Symbol.iterator() is called. Then a second loop cannot start fresh.
- Forgetting to return { value, done }. Returning just a value breaks the protocol.
- Off-by-one errors when marking done. Check conditions carefully.
- Creating infinite iterables without a break condition in the caller. for...of will never end.
- Using a string key instead of Symbol.iterator. That will not work with for...of.`,
      codeExample: `// Build a custom iterable Range and iterate with for...of and spread
const Range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;
    return {
      next() {
        if (current <= end) {
          const value = current;
          current++;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

const collected = [];
for (const n of Range) {
  collected.push(n);
}
console.log(collected); // [ 1, 2, 3 ]

// Spread uses the same iterator
console.log([...Range]); // [ 1, 2, 3 ]

// Generator version of an iterable
function rangeGen(start, end) {
  return {
    [Symbol.iterator]() {
      let n = start;
      return {
        next() {
          if (n <= end) {
            const value = n;
            n++;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
}
console.log([...rangeGen(4, 6)]); // [ 4, 5, 6 ]

// Iterable yielding pairs for Object.fromEntries
const pairs = {
  [Symbol.iterator]() {
    let i = 0;
    const items = [['a', 1], ['b', 2]];
    return {
      next() {
        if (i < items.length) {
          return { value: items[i++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
const obj = Object.fromEntries(pairs);
console.log(obj); // { a: 1, b: 2 }`,
    },
  ],
};

export default topic;