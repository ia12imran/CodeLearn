import type { Topic } from "../../types";

/** Strings & Template Literals - Working with text: searching, slicing, building and formatting. */
export const topic: Topic = {
  slug: "strings",
  title: "Strings & Template Literals",
  icon: "type",
  description: "Working with text: searching, slicing, building and formatting.",
  level: "beginner",
  lessons: [
    {
      slug: "string-basics",
      title: "String Basics",
      description: "Creating strings and reading them like arrays.",
      content: `A string is just text. JavaScript has no separate type for a single letter, so "a" and "a whole sentence" are both strings. Every selector, URL and expected message in a test is a string, which makes this the type you touch most often.

**Three ways to write one**
- Single quotes: 'Login button'. Use these by default.
- Double quotes: "Login button". They mean exactly the same thing, so match whatever your team already uses.
- Backticks: these make a template literal. They can hold several lines and drop values inside. The template-literals lesson covers them.
- The quote you did not open is free. 'He said "yes"' needs no escaping.
- To use the same quote inside, escape it with a backslash: 'It\\'s here' or "It\\"s here".

**Primitives that behave like arrays**
- A primitive is a value that is not an object. Strings are primitives, so copying one copies the text with it.
- Even so, strings answer to index access and read .length, because the language made them borrow array behaviour.
- "Hello".length is 5.
- "Hello"[1] is "e". One character comes back as a one-character string, never as a number.
- "Hello".at(-1) is "o". Negative counts run backwards from the end.
- charAt(1) also gives "e". That is the older way, and it does not accept negative indexes. at() is the newer one.
- codePointAt(0) gives the number behind the character, 72 for "H". It also reads characters outside the Basic Multilingual Plane, the first 65536 code points, which is where newer emoji live.

**You cannot write into a string**
- Strings are immutable. Immutable means the value can never change after it exists.
- So 'cat'[0] = 'b' quietly does nothing, in sloppy mode and strict mode alike.
- Every string method returns a new string instead, and leaves the original untouched.
- That is why const shout = name.toUpperCase() leaves name exactly as it was.

**Joining and comparing**
- The + operator joins two strings, so 'a' + 'b' is 'ab'.
- The < and > operators compare instead, and never join. 'a' < 'b' is true because 'a' sorts before 'b'.
- + runs left to right and adds numbers when it can. 1 + 2 + '3' is '33', while 1 + (2 + '3') is '123'.
- === compares exactly, so 'Login' === 'login' is false. It checks the type too, so 5 === '5' is false.
- localeCompare sorts the way a reader expects. 'a'.localeCompare('B') is -1, and the argument goes first.

**Traps worth knowing**
- The empty string '' is truthy. That surprises people who write if (name) when name came from user input.
- typeof 'x' is 'string', but typeof new String('x') is 'object'. Do not call new String.
- String(value) converts anything to a string. It is the safe version of value + ''.
- String.raw keeps a backslash as plain text, so String.raw\`a\\nb\` holds two characters instead of a newline. Use it when a value already carries escapes you do not want interpreted.

**Where you meet this in real work**
- A Playwright locator: page.getByRole('button', { name: 'Sign in' }) is all strings.
- Comparing what the page said to what you expected. Trim first, then compare, because pages add stray whitespace.
- Checking a URL: https://example.com plus a path joins, while indexOf('/') tells you where the path starts.`,
      codeExample: `// The three quote styles, and getting past the quote character.
const single = 'Login button';
const double = "Login button";
console.log(single === double, single.length);

// Same quote inside: escape it with a backslash.
const tricky = 'It\\'s "quoted"';
console.log(tricky);

// Strings read like arrays.
const word = "Hello";
console.log(word.length, word[0], word[1], word.at(-1));
console.log(word.charAt(1), word.codePointAt(0));

// You cannot write into a string.
word[0] = "J";
console.log(word, "<- unchanged");

// + joins. < compares. === matches exactly.
console.log("a" + "b", "a" < "b", "Login" === "login");
console.log("a".localeCompare("B"), "< 0 means a sorts first");
console.log(1 + 2 + "3", 1 + (2 + "3"), "< left to right wins");

// The empty string is truthy, which surprises people.
console.log(Boolean(""), Boolean("0"));

// String.raw keeps an escape as plain text.
console.log(String.raw\`C:\\new\\table\`);`,
      quiz: [
        {
          question: "What does \"JavaScript\".length return?",
          options: ["9","10","11","12"],
          correctIndex: 1,
          explanation: "\"JavaScript\" has 10 characters.",
        },
        {
          question: "Are strings mutable in JavaScript?",
          options: ["Yes","No, methods return new strings","Only for emojis","Depends on quotes used"],
          correctIndex: 1,
          explanation: "Strings are immutable. Methods like toUpperCase() return a new string.",
        },
      ],
    },
    {
      slug: "string-methods",
      title: "String Methods",
      description: "slice, split, replace, includes, padStart and friends.",
      content: `A string carries a long list of built-in methods. Because strings never change, every one of these hands you back a new string and leaves the original alone. These are the ones you will reach for daily in test automation.

**split and join are two halves of one idea**
- split cuts a string into an array of pieces. '/users/ana'.split('/') gives ['', 'users', 'ana'].
- join glues an array back into a string. ['a', 'b'].join('-') gives 'a-b'.
- Together they are how you take a URL apart, or build a path out of parts.
- split('') cuts between every character. That is the quick way round a string, and the wrong way for emoji.

**Asking questions about a string**
- includes('sub') answers yes or no: does this text contain that piece?
- startsWith and endsWith check the two ends. Useful for asserting a URL starts with https://.
- indexOf('sub') gives the position of the first match, or -1 when there is none.
- lastIndexOf does the same from the right, which is how you find a file extension.
- -1 is the thing to test for. An index of 0 is a real position, not a miss.

**Taking pieces out**
- slice(start, end) runs from start up to but not including end, just like Array.slice. Negative indexes count from the end.
- substring(start, end) is the older version. Negative values become 0, and it swaps the arguments when start is larger than end.
- substr(start, length) is the older older version. It takes a length instead of an end, and it is deprecated.
- Rule of thumb: use slice. Nothing new today needs substr.

**Replacing text**
- replace('old', 'new') swaps the first match only.
- replaceAll('old', 'new') swaps every match, and is usually the one you want.
- A regular expression is the shorthand for pattern matching. The /g flag means global, so replace(/-/g, '+') swaps all of them.
- The first argument picks the style. A string means literal text, while /-/ means the - is a pattern.
- That difference matters. replace('a.b', 'x') leaves a.b alone, but replace(/a.b/, 'x') also matches acb, because . stands for any character in a regex.
- $1 in the replacement puts a captured group back. '2024-01-02'.replace(/(\\d+)-(\\d+)-(\\d+)/, '$3/$2/$1') gives '02/01/2024'.
- The replacement can also be a function. Then it runs once per match, receives the matched text, and whatever it returns goes back in. 'ab'.replace(/b/, (m) => m.toUpperCase()) gives 'aB'.

**Cleaning and shaping**
- trim() removes whitespace from both ends, trimStart() only the front, trimEnd() only the back.
- toUpperCase and toLowerCase change the case. They do not trim, so chain them: raw.trim().toLowerCase().
- padStart(5, '0') fills the front until the text is 5 long, so '42' becomes '00042'. padEnd fills the back. Handy for aligned report output.
- repeat(3) copies the string three times.
- concat('b') joins the way + does. It is mostly used to merge many strings in one call.
- at(-1) is the last character. 'Hello'.at(-1) is 'o'.

**Emoji and the UTF-16 trap**
- JavaScript measures length in UTF-16 code units, which are the building blocks characters are stored in.
- A modern emoji takes two of those units, so the emoji alone has a length of 2, not 1.
- That is why split('') cuts an emoji in half, and why spreading into an array is the safe way to walk a string. Spread means filling an array from the values, as in [...str].
- charCodeAt reads those UTF-16 units. codePointAt reads the real character, so it is the one to use when you are counting emoji.
- String.raw keeps escapes as written text, which is useful when a value already contains backslashes, such as a Windows path.`,
      codeExample: `// split and join are two halves of the same idea.
const path = "/users/ana/orders";
const parts = path.split("/");
console.log(parts, parts.join(" > "));

// Asking questions. -1 is the "not found" answer.
const page = "  Welcome to the Dashboard  ";
const clean = page.trim();
console.log(clean.startsWith("Welcome"), clean.endsWith("board"));
console.log(clean.includes("Dash"), clean.indexOf("to"));
console.log(clean.lastIndexOf("o"), clean.indexOf("zzz"));

// slice keeps negative indexes, substring swaps its arguments.
console.log(clean.slice(-4), clean.substring(0, 7), "Dashboard".substr(4, 5));

// replace: string means first hit, /g regex means all hits.
console.log("a-b-c".replace("-", "+"), "a-b-c".replaceAll("-", "+"));
console.log("a-b-c".replace(/-/g, "+"));
console.log("2024-01-02".replace(/(\\d+)-(\\d+)-(\\d+)/, "$3/$2/$1"));
console.log("ab".replace(/b/, (m) => m.toUpperCase()), "<- function replacement");

// Padding lines things up, repeat copies, concat joins.
console.log("42".padStart(5, "0"), "42".padEnd(5, "."), "ab".repeat(3));
console.log(clean.at(0), clean.at(-1), "foo".concat("bar", "!"));

// split("") breaks an emoji. Spreading keeps it whole.
const face = "\\u{1F600}";
console.log(face, "length:", face.length, "spread:", [...face].length);
console.log([...face + "a"].length, "<- 2, not 3");`,
      quiz: [
        {
          question: "What does \"a,b,c\".split(\",\") return?",
          options: ["\"a,b,c\"","[\"a\",\"b\",\"c\"]","\"[a,b,c]\"","\"abc\""],
          correctIndex: 1,
          explanation: "split() turns the string into an array of parts separated by the delimiter.",
        },
        {
          question: "Which method checks if a string contains a substring?",
          options: ["find()","includes()","substring()","charAt()"],
          correctIndex: 1,
          explanation: "includes() returns true/false; indexOf() also works but returns an index or -1.",
        },
      ],
    },
    {
      slug: "template-literals",
      title: "Template Literals",
      description: "Backticks, interpolation, and multi-line strings.",
      content: `A template literal is a string written with backticks instead of quotes. The backtick key usually sits under the tilde on a US keyboard. Template literals are the normal way to build a string out of other values, because the values go straight into the text instead of being glued on with plus signs.

**Dropping values into the text**
- Type a value inside a dollar sign and curly braces and it is converted to a string for you: \`Total: \${total}\`.
- The old way needs a plus on both sides: 'Total: ' + total. That gets hard to read fast.
- So this: 'Page ' + name + ' of ' + total + ' took ' + ms + 'ms'.
- And this: \`Page \${name} of \${total} took \${ms}ms\`.
- The braces hold an expression, not just a name. Anything that produces a value goes in: \${price * qty}, \${user.name.trim()}, \${items.length}.
- A ternary fits too. A ternary is a yes-or-no choice written in one line, as in \${isAdmin ? 'admin' : 'guest'}.

**Lines and the leading newline**
- Backticks can hold several lines, so a multi-line message needs no escape codes at all.
- The catch: the newline you press right after the opening backtick becomes part of the string.
- The usual fix is to call .trim() straight after the closing backtick. That drops the first newline and the indent on the last line.
- Because trim() also eats the indent of your first real line, add the padding back yourself if you want neat indentation.

**When not to use them**
- Plain text with no values in it. Single quotes are fine and marginally cheaper.
- Very long text such as an article body, where every backtick has to be escaped.
- Anything a user typed. If the input itself contains a backtick, build it with JSON.stringify or escape it, or you have opened a hole in the script.

**Two traps**
- Inside the braces, a leading + or - is a unary operator, the one-character version of maths. So \${-n} flips the sign and \${+'5'} turns text into the number 5.
- If you meant the words, keep them as plain text: sign is -, value is \${n}.
- The other trap is maths written outside the braces. \`Total \${count} - 1\` prints "Total 3 - 1". Put the operation inside and you get the answer: \`Total \${count - 1}\`.

**Tagged templates, briefly**
- A tagged template is a function called with the raw pieces of a template. The tag sits in front of the backticks, as in myTag\`hello \${name}\`.
- The function receives the text before each value and the values themselves as separate arguments. Libraries use this to add syntax of their own.
- Worth recognising when you see it. Not worth writing every day.

**Where you meet this in real work**
- Playwright and Cypress locators, where the selector usually holds a variable such as a user id.
- URLs and API payloads in an API test.
- Assertion messages and test titles, where the step name and the failure reason both come from the data.`,
      codeExample: `// Backticks let you drop values straight into the text.
const browser = "Chromium";
const version = 121;
console.log(\`Running \${browser} v\${version}\`);

// Anything that produces a value works inside the braces.
const total = 19.99 * 3;
const state = total > 50 ? "OVER LIMIT" : "ok";
console.log(\`Total \${total.toFixed(2)} (\${state})\`);
console.log(\`Selector: [data-testid="\${browser.toLowerCase()}-submit"]\`);

// Backticks span lines, so multi-line messages need no \\n.
const report = \`Login: PASS
Checkout: FAIL\`;
console.log(report);

// The newline after the opening backtick is real; trim() removes it.
const card = \`
  Name: Ana
  Role: admin\`;
console.log(JSON.stringify(card.trim()));

// Trap: maths outside the braces is only printed.
const count = 3;
console.log(\`Total \${count} - 1\`);
console.log(\`Total \${count - 1}\`);`,
      quiz: [
        {
          question: "Which character encloses a template literal?",
          options: ["Double quotes","Backticks","Single quotes","Angle brackets"],
          correctIndex: 1,
          explanation: "Template literals use backticks and interpolate with ${expression}.",
        },
        {
          question: "What is template literal interpolation used for?",
          options: ["Only comments","Embedding expressions in strings","Deleting variables","Incrementing numbers"],
          correctIndex: 1,
          explanation: "Interpolation embeds variables and expressions directly inside a string.",
        },
      ],
    },
    {
      slug: "string-performance",
      title: "String Performance & Immutability",
      description: "Why += in a loop is slow, and what to do instead.",
      content: `A string in JavaScript is immutable, which means it can never change after it exists. So when code looks like it is editing a string, it is really building a brand new one and dropping the old one. That is the whole reason string performance is a topic of its own.

**Why += in a loop hurts**
- The tidy loop looks like this: start with let s = '' and then run s += 'x' ten thousand times.
- Each += has to read the old string, join it with 'x', and store the result somewhere new in memory.
- By step ten thousand the engine has built ten thousand strings. Add up the characters copied and it is about fifty million character writes.
- That is the real cost of immutability. You cannot edit in place, because there is no place to edit. You only ever get a fresh string.
- Modern engines use ropes, which are strings shaped like a tree so joining takes roughly constant time. The loop is no longer the disaster it once was, but it still allocates on every pass.
- The rule did not change: in a hot loop, push the pieces into an array and join once at the end. Arrays grow by doubling, so each push stays cheap and the work is shared out.

**Why searching and slicing are not free**
- + is left to right, so a long chain of joins gets more expensive as the string grows.
- Some engines implement substring and indexOf by scanning from the start. That is O(n), which is shorthand for how cost grows with size. O(n) means linear, so twice the text means twice the work.
- A single call on a short string is nothing. The same call inside a loop over a long string adds up, and the fix is small.
- Save the length into a variable instead of calling .length on every pass, and take one slice rather than re-slicing the same big string again and again.
- Pick slice over substring where you can, and pass numbers you already know rather than making the engine work them out.

**The other hot-loop mistake**
- JSON.stringify turns a whole object into text every time you call it. One call is fine.
- Put that call inside a loop that runs hundreds of times and you pay for the same text hundreds of times.
- Build it once before the loop, or keep the length from one call instead of serialising again just to count characters.
- The same idea applies to trim, replace and slice inside a loop. Each one builds a new string, so the copies pile up.

**The general lesson**
- Measure before you optimise. Timing two versions with console.time tells you which one is actually slower on your machine today.
- Engines change from year to year, so a tip written down in 2015 may be wrong now. Timing beats memory.
- Readability has a price. A loop with s += 'x' is easy to read. The array version is three lines longer and much faster.
- In a test the difference never shows up, because the loop runs a few times. Reach for the fast version when a loop runs in the thousands or more, and keep the readable one everywhere else.

**Where you meet this in real work**
- Generating test data, where a loop of ten thousand rows turns into a very slow run.
- Crawling or scraping, where a page body can be a megabyte of text and gets searched repeatedly.
- Anything inside a beforeEach hook that rebuilds the same big string on every test in the file.`,
      codeExample: `// Strings never change, so building one a piece at a time
// allocates a brand new string on every single pass.
function slowWay(rounds) {
  let s = "";
  for (let i = 0; i < rounds; i++) s += "x";
  return s.length;
}

// Collect the pieces first, then glue them together once.
function fastWay(rounds) {
  const parts = [];
  for (let i = 0; i < rounds; i++) parts.push("x");
  return parts.join("").length;
}

console.time("+= in a loop");
slowWay(200000);
console.timeEnd("+= in a loop");

console.time("array + join");
fastWay(200000);
console.timeEnd("array + join");

// Serialising a big object in a hot loop hurts too.
const big = { rows: Array.from({ length: 300 }, (_, i) => ({ id: i })) };
console.time("JSON.stringify x50");
let chars = 0;
for (let i = 0; i < 50; i++) chars += JSON.stringify(big).length;
console.timeEnd("JSON.stringify x50");
console.log("chars serialised:", chars, "| length precomputed:", big.rows.length);`,
    },
  ],
};

export default topic;