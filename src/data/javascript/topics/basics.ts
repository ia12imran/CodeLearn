import type { Topic } from "../../types";

/** JavaScript Basics - Variables, values, types, and the operators that move data around. */
export const topic: Topic = {
  slug: "basics",
  title: "JavaScript Basics",
  icon: "code",
  description: "Variables, values, types, and the operators that move data around.",
  level: "beginner",
  lessons: [
    {
      slug: "variables",
      title: "Variables: let & const",
      description: "Storing values, and why var is a trap.",
      content: `A variable is a name you give to a value so you can use it later. Picture a labelled box in a storeroom. The box holds the value. The label is the name. You write the name to get the value back.

**let, const and var**
- let is a box you are allowed to empty and refill later
- const is a box whose label is glued down, so the name can never point at a different box
- var is the old keyword from before 2015. It still works, and it still misbehaves
- Start with const. Move to let only at the exact line where the value really changes
- JavaScript will not stop you writing var, so choosing the other two has to be deliberate

**The reassignment rule**
- Reassigning means pointing a name at a different value. It is an equals sign on a line of its own
- let total = 1; then total = 2; is perfectly fine
- const total = 1; then total = 2; throws a TypeError and kills that line
- That TypeError is a gift. It turns a silent slip in a long test into a loud failure
- const only stops you repointing the name. It does not freeze what is inside

**Why a const object can still change**
- An object or an array is a container, like a shopping bag. const glues the bag to the name
- You cannot swap the bag, but you can put things in it and take things out
- const user = { name: 'Ana' }; then user.name = 'Bob'; works, because it is the same bag
- const user = { name: 'Ana' }; then user = { name: 'Bob' }; throws, because that is a new bag
- To make a bag genuinely read-only you need Object.freeze, which a test rarely needs

**Scope, which is just visibility**
- Scope means the set of lines from which you can see a name
- let and const are block scoped. A block is anything sitting between curly braces
- A name declared inside a block stops existing at the closing brace, like a note inside a folder
- var is function scoped. It ignores blocks and stays alive until the whole function ends
- {
    let inside = 1;
  }
  console.log(inside); // ReferenceError, the name is gone
- var placed inside those braces is still readable after them, because var looks at the function
- A for loop built with var i has exactly one i, shared by the whole function
- A callback inside that loop reads the shared i later, by which time the loop has already finished
- Three log callbacks all print 3, because they all looked at the same number at the end
- let i gives each turn of the loop its own copy of i, so each callback sees its own number
- The same bug shows up with setTimeout inside a var loop, and it ships into real tests

**Declaring with no value**
- let found; creates the name and fills it with undefined straight away
- undefined means nobody has put anything there yet, like a blank field on a form
- const always needs a value. const answer; on its own is a SyntaxError before anything runs
- The better habit is to give a real starting value, or null, so the intent is visible

**Naming rules**
- A name may hold letters, digits, dollar signs and underscores, but cannot start with a digit
- JavaScript is case sensitive, so userName and username are two different names
- Reserved words such as class, new and return can never be used as names
- Use camelCase for variables, like firstResult. Words joined with no space, capital at the start
- Use SCREAMING_SNAKE_CASE for fixed values that never change, like BASE_URL
- Name a variable after what it holds, not after what it does. cartItems beats listOfStuff

**Where you meet this in real work**
- A test that holds a locator in const locator = page.getByRole('button') and reuses it five times
- A beforeEach block that rebuilds test data with let, so every test starts from a clean copy
- A loop that collects page objects, which with var quietly overwrites and returns one entry
- A config file that exports one const BASE_URL, and every spec imports that single name`,
      codeExample: `// let, const and var side by side. Run this and read the output.
let score = 10;              // let: the value is allowed to change
score = 20;
console.log("let reassigned:", score);

const baseUrl = "https://shop.test";
console.log("const baseUrl:", baseUrl);
// baseUrl = "https://other.test";  // uncomment: throws a TypeError

// const stops you repointing the name, not editing the value inside it.
const user = { name: "Ana", roles: ["admin"] };
user.name = "Bob";
user.roles.push("editor");
console.log("const object still mutable:", user);

// Block scope: the name dies at the closing brace.
{
  let inside = 1;
  var fromVar = 2;
  console.log("inside the block:", inside, fromVar);
}
console.log("var survives, let does not:", typeof fromVar, typeof inside);

// The loop trap. var shares one i, let gives every turn its own.
const withVar = [];
for (var i = 0; i < 3; i++) {
  withVar.push(() => i);
}
const withLet = [];
for (let k = 0; k < 3; k++) {
  withLet.push(() => k);
}
console.log("var loop, all three closures saw:", withVar.map((f) => f()));
console.log("let loop, each closure saw:", withLet.map((f) => f()));

// Declaring with no value gives you undefined straight away.
let found;
console.log("found is", found, "| typeof", typeof found);`,
        quiz: [
          {
            question: "Which keyword should you use by default for a value that never changes?",
            options: ["var","let","const","static"],
            correctIndex: 2,
            explanation: "const is the default choice. Use let only when you need to reassign.",
          },
          {
            question: "What happens when you reassign a const variable?",
            options: ["It updates silently","It throws a TypeError","It creates a copy","Nothing"],
            correctIndex: 1,
            explanation: "Reassigning a const throws a TypeError.",
          },
        ],
    },
    {
      slug: "data-types",
      title: "Data Types & typeof",
      description: "The 7 primitives and the one object you cannot trust typeof on.",
      content: `Every value in JavaScript belongs to one of two families. A primitive is a single value with no extra parts, like the number 7 or the text 'login'. An object is a container that can hold other values, like { name: 'Ana' } or [1, 2, 3]. There are exactly seven primitive types. Everything else you meet is an object.

**The seven primitives**
- string, text in quotes, such as '42' or "Ana's account"
- number, every kind of number. 42, 3.14, -7 and 0 are all the same one type
- boolean, exactly two possible values: true and false
- undefined, the value a name carries when nothing has been put into it
- null, a value you choose on purpose to mean there is deliberately nothing here
- symbol, a unique private label, usually used as an object property key
- bigint, whole numbers too large for a normal number, written with a trailing n
- string, number and boolean are the three you will touch every single day

**typeof, the operator that asks the question**
- typeof returns the name of the type as text, so typeof 42 gives 'number'
- typeof 42 gives 'number', typeof '42' gives 'string', typeof true gives 'boolean'
- typeof undefined gives 'undefined'. This one is honest
- typeof 10n gives 'bigint', and typeof Symbol('id') gives 'symbol'
- typeof [] and typeof {} both give 'object', because an array is a special kind of object
- typeof function () {} gives 'function', a different answer from 'object'
- typeof someNameNobodyDeclared gives 'undefined' instead of throwing, so it is a safe existence check

**The trap: typeof null**
- typeof null gives 'object'. That is a bug, not a rule
- In 1995 values were stored with a type tag inside their bits, and null shared a tag with objects
- The specification now insists on 'object', because fixing it would break sites written long ago
- So never use typeof to test for null. Test the value directly with value === null
- Use value === null || value === undefined when you want to allow both

**Other surprises worth knowing**
- typeof NaN is 'number'. NaN stands for not a number, yet it is stored as one
- Testing NaN needs Number.isNaN(value). The old global isNaN converts first, and then lies
- Testing an array needs Array.isArray(value). typeof cannot tell an array from a plain object
- Mixing a bigint with a number throws a TypeError, so pick one and stay with it

**Objects wrapped in a box**
- new String('hi') builds a real object that happens to hold the text 'hi'
- typeof new String('hi') is 'object', not 'string', because it is a wrapper object
- It exists for legacy reasons and has no place in a modern test. Use the primitive
- Note that 'hi'.length still works, because the language unwraps the box for you

**Big numbers and exact numbers**
- A normal number is stored as a 64-bit float, giving roughly 15 to 17 exact digits
- 0.1 + 0.2 is 0.30000000000000004, because 0.1 has no exact binary form
- 9007199254740993 comes back as 9007199254740992, because the final digit is dropped
- A bigint stores whole numbers exactly. You write it as 9007199254740993n
- Use bigint for ids and for money held in whole units. Use number for everything else
- Money as a float is a trap. Store 1999 as an integer of cents instead

**Where you meet this in real work**
- A test data builder that returns null for a missing field, and a typeof check waves it through
- An API response whose id comes back as a string, so a strict number assertion fails
- A price read from the page as '19.99' and checked against the number 19.99
- A response helper that checks Array.isArray before it reads .length on a body`,
      codeExample: `// The seven primitives, and what typeof says about each one.
const samples = {
  string: "42",
  number: 42,
  boolean: true,
  undefined: undefined,
  null: null,
  symbol: Symbol("id"),
  bigint: 10n,
};

for (const key of Object.keys(samples)) {
  console.log(key.padEnd(10), "->", typeof samples[key]);
}

console.log("typeof a function:", typeof function () {});
console.log("typeof an array:", typeof [], "| really an array?", Array.isArray([]));

// NaN says not a number, but typeof still reports number.
console.log("typeof NaN:", typeof NaN, "| is it NaN?", Number.isNaN(NaN));

// typeof does not throw on a name that was never declared.
console.log("typeof a missing name:", typeof someNameNobodyDeclared);

// Floats cannot hold most decimals exactly.
console.log("0.1 + 0.2 =", 0.1 + 0.2);

// bigint is exact, a plain number is not.
console.log("bigint keeps the last digit:", 9007199254740993n === 9007199254740993n);
console.log("number drops it:", 9007199254740993 === 9007199254740992);`,
        quiz: [
          {
            question: "What is the result of typeof null?",
            options: ["\"null\"","\"undefined\"","\"object\"","\"number\""],
            correctIndex: 2,
            explanation: "A long-standing JavaScript bug: typeof null returns 'object'.",
          },
          {
            question: "Which type represents an intentional empty value?",
            options: ["undefined","null","NaN","void"],
            correctIndex: 1,
            explanation: "null is intentionally 'no value'. undefined means 'not assigned'.",
          },
        ],
    },
    {
      slug: "operators",
      title: "Operators",
      description: "Arithmetic, comparison, logical, and the assignment shortcuts.",
      content: `An operator is a symbol that takes values and produces a result. The plus in 2 + 3 is an operator. In a test script you spend most of your time on comparison operators, because every assertion is one underneath. Getting them right removes a whole family of confusing failures.

**Arithmetic and the modulo**
- + adds, - subtracts, * multiplies, / divides, and ** raises to a power
- / always gives a decimal result, so 7 / 2 is 3.5 and never 3
- % is the modulo operator. It hands back the remainder after division
- 10 % 3 is 1, because 10 is three threes with one left over
- The sign of a modulo follows the number on the left, so -10 % 3 is -1 and not 2
- The standard even-number test is n % 2 === 0, which you will write often

**Unary operators, ++ and --**
- Unary means one value. The minus in -5 is a unary minus, not a subtraction
- Unary plus converts text to a number, so +'42' is 42 and +'hi' is NaN
- ++ adds one and stores the result back. -- subtracts one and stores the result back
- Prefix changes the value first, so let a = ++b hands a the new value of b
- Postfix hands out the old value first, so let a = b++ hands a the value before the change
- With b starting at 1, ++b leaves b at 2, while b++ hands you 1 and leaves b at 2
- Inside a big expression the difference is obvious. Inside a single statement it is not

**Comparison and equality**
- > is greater than, < is less than, >= is greater than or equal, <= is less than or equal
- Each one produces a boolean, true or false. That is its only job
- These are not strict, so 5 > '3' is true: the text quietly becomes 3
- Reading two strings with < compares them character by character, so '10' < '9' is true
- === compares type and value together, so '10' === 10 is false
- == compares after converting types, so '10' == 10 is true
- !== and != are the negations of === and ==
- In a test, write === and !== only. Loose equality is the root of most type bugs

**Logic, short-circuit, and ??**
- && is logical AND, || is logical OR, and ! is logical NOT
- Short-circuit means the right-hand side is skipped once the answer is already known
- false && boom() never calls boom, and that skipping is the guard pattern
- A guard reads like this: if the user is missing or not allowed, return early
- && returns one of its two values, not necessarily a boolean
- || returns the first truthy value, which is exactly why it works as a fallback
- a || 'guest' gives 'guest' when a is null, undefined, 0, an empty string, false or NaN
- If 0 or an empty string are values you want to keep, use ?? instead of ||

- ?? returns the right side only when the left is null or undefined
- 0 ?? 'fallback' is 0, while null ?? 'fallback' is 'fallback'
- That single difference is the whole point of ??, and it is a large one

**Shortcuts you will see in real code**
- The ternary operator picks between two values: condition ? whenTrue : whenFalse
- Assignment shortcuts: += adds and stores, -= subtracts and stores, and so on
- x ||= 'guest' assigns only when x is currently falsy, so a real 0 gets overwritten
- x ??= 'guest' assigns only when x is null or undefined, so a real 0 survives
- ?. is optional chaining. user?.address?.city stops at the first null and gives undefined
- Optional chaining is an operator, not a disguised if, so it fits mid-expression
- The comma operator runs each side left to right and hands back the last value
- For (a = 1, b = 2, a + b) prints 3. It is rare, and it confuses readers

**Where operators bite**
- 1 + 2 + '3' is the text '33', because 1 and 2 add to 3 before the join
- '1' + 2 and 1 + '2' are both the text '12', because + changes its mind for strings
- '3' - 1 is the number 2, because minus forces numbers and will not concatenate
- true + true is 2, since booleans turn into 1 and 0 for arithmetic
- 1 < 2 < 3 is true, then true < 3 becomes 1 < 3, which is true. It is not a range check
- && binds tighter than ||, so a && b || c is read as (a && b) || c`,
      codeExample: `// Arithmetic, the modulo, and the difference between prefix and postfix.
console.log("7 / 2 =", 7 / 2);
console.log("10 % 3 =", 10 % 3, "| -10 % 3 =", -10 % 3);
console.log("2 ** 10 =", 2 ** 10);
console.log("unary +'42' =", +"42", "| unary +'hi' =", +"hi");

let a = 1;
const pre = ++a;
let b = 1;
const post = b++;
console.log("++a handed out", pre, "and left a at", a);
console.log("b++ handed out", post, "and left b at", b);

// Strict and loose equality.
console.log("'10' === 10:", "10" === 10, "| '10' == 10:", "10" == 10);

// Short-circuit, fallbacks, nullish and optional chaining.
const boom = () => "should never run";
console.log("false && boom():", false && boom());
console.log("0 || 'fallback':", 0 || "fallback", "| 0 ?? 'fallback':", 0 ?? "fallback");
console.log("null ?? 'guest':", null ?? "guest");
const user = { address: null };
console.log("optional chain:", user?.address?.city);
console.log("ternary:", 3 > 2 ? "cart has items" : "cart is empty");

let retries = null;
retries ??= 3;
console.log("after ??=, retries is", retries);

// The classic traps.
console.log("1 + 2 + '3' =", 1 + 2 + "3");
console.log("true + true =", true + true);
console.log("1 < 2 < 3 =", 1 < 2 < 3);`,
        quiz: [
          {
            question: "Why avoid == (loose equality)?",
            options: ["It's slow","It coerces types, causing surprise matches","It's deprecated","It only works on numbers"],
            correctIndex: 1,
            explanation: "== converts types first, so '10' == 10 is true. === prevents that.",
          },
          {
            question: "Which are falsy values?",
            options: ["0, '', nan, false","0, '', null, undefined, NaN, false","'0', ' ', null","Only false"],
            correctIndex: 1,
            explanation: "Those six values are falsy; everything else is truthy.",
          },
        ],
    },
    {
      slug: "type-conversions",
      title: "Type Conversions",
      description: "Coercion: how JavaScript quietly changes your types.",
      content: `JavaScript converts between types constantly. Sometimes you ask it to, and sometimes it does it behind your back. The automatic kind is called implicit conversion, and its nickname is coercion. The kind you write on purpose is explicit conversion. Coercion causes most confusing test failures.

**Implicit and explicit, side by side**
- Implicit means JavaScript converts for you. '5' * 2 is 10 without you asking
- Explicit means you convert yourself. Number('5') * 2 is also 10, and you can see it happening
- Explicit is always better in a test, because the next reader can see the intent

**The rules that turn anything into a number**
- The machine behind this is called ToNumber, and it uses one table for every value
- '42' becomes 42, because a clean numeric string converts cleanly
- '' becomes 0, and '  ' also becomes 0, because whitespace is trimmed away first
- '42px' becomes NaN, and 'abc' becomes NaN. One stray letter is a failure, not 42
- true becomes 1 and false becomes 0
- null becomes 0, but undefined becomes NaN. That single difference catches a lot of people
- [] becomes 0, and [5] becomes 5, because an array converts through its one item
- [1, 2] also becomes NaN, because a list has no single number it could stand for
- NaN stands for not a number. It is the result of a failed conversion, not a crash

**Why the plus sign is special**
- + adds numbers, but the moment either side is a string it joins text instead
- 1 + 2 is 3. '1' + 2 is '12'. 1 + '2' is also '12', from either side
- - * and / always force numbers, so '10' - 2 is 8 and '6' * 3 is 18
- This is why page code sometimes writes count + '' on purpose, to force text output
- It is also why total + ' items' surprises you when total was a number

**Four ways to ask for a number**
- Number('42') is strict. It gives 42, or NaN if anything extra is in the way
- Number('') is 0, Number(null) is 0, and Number(undefined) is NaN
- parseInt('42px', 10) reads the leading digits and stops, so it hands back 42
- The second argument is the base, and 16 reads hexadecimal. Always pass 10
- parseFloat('12.5 usd') gives 12.5, and it also stops at the first character it dislikes
- Unary plus runs the same conversion as Number(), so +'42' is 42
- In a test, use Number for clean data and parseFloat for messy text scraped off a page
- Never use parseInt for money. It truncates 19.99 down to 19

**Turning things into strings and booleans**
- String(42) gives '42', and it works on anything, including null and undefined
- (42).toString() gives '42' too, but it throws on null and on undefined
- A template literal also converts whatever you place inside it, so text and numbers mix easily
- Prefer String() or a template literal, because neither of them can throw
- Boolean() is the explicit version of the check an if statement performs anyway
- Falsy means falsey, and there are exactly eight falsy values to learn
- The falsy set: false, 0, -0, 0n, the empty string, null, undefined and NaN
- Everything else is truthy, including the values that look empty
- [] is truthy, because an empty array is still an object
- {} is truthy for exactly the same reason
- '0' and ' ' are truthy too, because any non-empty string is truthy
- That is why Array.isArray(x) && x.length is the correct emptiness test

**Why typeof is the exception**
- typeof is the one operator that never converts its argument
- typeof '42' is 'string' and not 'number', so it always reports what is really there
- The old global isNaN does convert first, which is exactly why Number.isNaN was added

**Conversion bugs in tests**
- expect(text).toBe(7) fails when the page hands you '7', because the types differ
- expect(Number(text)).toBe(7) passes, and the fix sits on your side
- expect('0').toBe(false) fails, even though '0' is a truthy string
- Reading an attribute always gives a string, so convert before any number assertion
- Convert inside the assertion, not the locator, so the expected value stays readable`,
      codeExample: `// Implicit conversion happens on its own. Explicit is the safe version.
console.log("'5' * 2 =", "5" * 2);
console.log("'5' + 2 =", "5" + 2);
console.log("'10' < '9' =", "10" < "9");

// The ToNumber table, one input per line.
const inputs = ["42", "", "  ", "42px", "abc", true, null, undefined, [], [5], [1, 2], {}];
for (const value of inputs) {
  console.log(String(value).padEnd(15), "->", Number(value));
}

// Four ways to ask for a number.
console.log("Number('42'):", Number("42"));
console.log("parseInt('42px', 10):", parseInt("42px", 10));
console.log("parseFloat('12.5 usd'):", parseFloat("12.5 usd"));
console.log("unary +'42':", +"42");

// Strings and booleans, including the surprising truthy values.
console.log("String(null):", String(null), "| String(undefined):", String(undefined));
console.log("Boolean(''):", Boolean(""), "| Boolean(NaN):", Boolean(NaN));
console.log("[] is truthy:", Boolean([]), "| {} is truthy:", Boolean({}));
console.log("'0' is truthy:", Boolean("0"), "| ' ' is truthy:", Boolean(" "));

// typeof is the one operator that never converts its argument.
console.log("typeof '42' =", typeof "42");

// The bug you will meet in a real assertion.
const cartText = "7 items in cart";
const expected = 7;
console.log("straight compare:", cartText === expected);
console.log("after converting:", parseInt(cartText, 10) === expected);`,
        quiz: [
          {
            question: "What is '10' < '9' when both are strings?",
            options: ["false (9 < 10 numerically)","true (character-by-character)","NaN","Error"],
            correctIndex: 1,
            explanation: "Relational comparison on strings compares character codes: '1' vs '9'.",
          },
          {
            question: "How do you safely turn '12.5 USD' into a number?",
            options: ["Number('12.5 USD')","parseFloat('12.5 USD')","'12.5 USD' + 0","Number.parseInt it twice"],
            correctIndex: 1,
            explanation: "parseFloat tolerates trailing text; Number would give NaN.",
          },
        ],
    },
  ],
};

export default topic;
