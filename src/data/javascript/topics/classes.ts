import type { Topic } from "../../types";

/** Classes & Prototypes - Blueprints, inheritance, and the prototype chain underneath it all. */
export const topic: Topic = {
  slug: "classes",
  title: "Classes & Prototypes",
  icon: "box",
  description: "Blueprints, inheritance, and the prototype chain underneath it all.",
  level: "intermediate",
  lessons: [
    {
      slug: "class-basics",
      title: "Class Basics",
      description: "constructor, methods, static, and private fields.",
      content: `A class is a recipe. It describes what an object should contain and what it should be able to do, without being an object itself. One recipe, many cakes: every cake is made separately, but they all came from the same page of the cookbook.

**What new actually does**
- Makes a brand new empty object
- Points that object's hidden link at Class.prototype
- Calls the constructor, which fills the object in
- If the constructor returns another object, that object wins and becomes the result of new
- An instance is simply one object built from a class: a real cake rather than a recipe

**Where methods and fields live**
- The class body runs once, at the moment the class is defined. That single run collects the methods into one object called the prototype. The body is then thrown away.
- The prototype is the hidden object another object points at for the things it does not have itself. So a method is not on the instance. Ten thousand users means ten thousand name properties but still only one greet function.
- Fields written as role = "user" inside the body are different. They are copied onto every new object in turn, before the constructor body runs, so each object owns its own copy.

**Methods versus arrow properties**
- greet() {} is a method on the prototype. When you call user.greet() the dot supplies this, and this is just the object a method was called on.
- greet = () => {} is a class field holding an arrow function. It gets copied onto every instance, which wastes memory, and its this is permanently bound to that one object.
- The arrow version keeps its this when you pass it around. A method loses this the moment you detach it, so const g = user.greet; g() throws. Both are legal. Know which one you wrote.

**Static methods, getters and setters**
- A static method belongs to the class, not to instances. Call it as User.compare(a, b). There is no this instance inside it, so use statics for helpers that only need their arguments, like a factory or a comparison.
- Static fields are properties of the class itself, which is a good home for shared constants.
- get fullName() { return this.first + " " + this.last } reads like a property but runs like a function when you ask for it.
- A setter validates or transforms on the way in: set age(n) { ... }. You can attach a getter to an object you already have with Object.defineProperty, without rebuilding it.

**Private fields**
- #token is a private field, and the engine enforces it. Reading obj.#token outside the class body is a parse error, not undefined.
- That is stronger than a field called password, which anybody can rename. Private means private, and it is the only real lock.
- If outside code needs the value, hand out a controlled getter that returns it.

**Common mistakes**
- Calling a class without new throws a TypeError. Classes are not hoisted, so you cannot use one above the line that defines it.
- Forgetting that methods are not bound. Passing user.greet as a callback loses this.
- Writing twenty lines in a constructor when three lines of class body would do the same thing.

**Where you meet this**
- A Page Object is a class. The constructor stores the page, and the methods are the actions.
- A shared base test class holds beforeEach and the config.
- A page object talks to exactly one collaborator, the page. That is the whole design idea.`,
      codeExample: `// A class is a template. new builds one object from it.
// Methods sit on the shared prototype. #fields are enforced private.
class Account {
  #balance = 0;                 // private, enforced by the engine
  static count = 0;             // belongs to the class, not to instances

  constructor(owner, balance) {
    this.owner = owner;         // a plain field, one copy per instance
    this.#balance = balance;
    Account.count += 1;
  }

  deposit(amount) {             // one shared method on the prototype
    this.#balance += amount;
    return this;
  }

  get balance() { return this.#balance; }        // getter reads like a field
  set balance(v) {
    if (v < 0) throw new Error("balance cannot be negative");
    this.#balance = v;
  }

  static fromString(text) {      // static: needs no instance
    const [owner, balance] = text.split(":");
    return new Account(owner, Number(balance));
  }
}

const ana = Account.fromString("Ana:100").deposit(50);
const bob = Account.fromString("Bob:10");
console.log(ana.owner, ana.balance);                 // Ana 150
console.log(bob.balance, Account.count);             // 10 2
console.log(ana instanceof Account);                 // true
console.log(Object.getPrototypeOf(ana) === Account.prototype); // true

try {
  ana.balance = -5;
} catch (err) {
  console.log("setter guard:", err.message);
}

// ana.#balance written here is a parse error, not undefined. That is the point.`,
      quiz: [
        {
          question: "What runs when you create new User('Ana')?",
          options: ["A static method","The constructor","A getter","Nothing"],
          correctIndex: 1,
          explanation: "new invokes the constructor to set up the instance.",
        },
        {
          question: "When should you use a static method?",
          options: ["When it needs instance data","When it relates to the class, not instances","For every method","Never"],
          correctIndex: 1,
          explanation: "Static methods live on the class itself and don't receive this.",
        },
      ],
    },
    {
      slug: "class-inheritance",
      title: "Class Inheritance",
      description: "extends, super, and overriding properly.",
      content: `Inheritance is when one class says: I am based on that class, and I keep everything it can do. It is a reuse shortcut. JavaScript allows exactly one parent per class, so inheritance is a single line of descent, not a branching tree.

**extends and super**
- class Dog extends Animal means every Dog can do everything Animal can do.
- super(...) calls the parent's constructor. You must call it before you touch this in the child's constructor.
- That rule exists because this does not exist yet until the parent has finished building it. Touch it early and you get "Cannot read properties of undefined".
- super only works inside a constructor or a method of a class that extends something. In a plain class or a plain function it is a syntax error.

**The chain it builds**
- dog goes to Dog.prototype, then Animal.prototype, then Object.prototype, then null.
- Every link is an ordinary object. extends just inserts one more link in the middle.
- Because lookup walks the chain, a Dog passes instanceof Animal. It also passes instanceof Object, like everything else.

**Override, then extend**
- Writing speak() on Dog replaces the inherited one, so Dog answers in its own voice.
- To keep the parent's behaviour, call super.speak() and add to it. That is extending rather than replacing.
- To widen instead of replace, call super only when needed: this.label = this.label ?? super.label.

**The one gotcha with JSON.stringify**
- JSON.stringify lists own enumerable properties, and plain object properties are enumerable by default.
- Methods written with the class keyword are non-enumerable, so stringify skips them.
- Anything you bolt on afterwards, such as this.debug = true, is enumerable and shows up. A parent field set in the constructor is enumerable too. Be deliberate about what you hang off a model object.

**Abstract by convention**
- JavaScript has no abstract keyword. A base class throws instead: if (!this.canFly) throw new Error("subclass must set canFly").
- Put that check in the base constructor, so a bad subclass fails the moment it is created rather than three tests later.

**The diamond problem, and broken promises**
- Inheritance problems show up when a class inherits from two branches that share an ancestor. A change in the shared ancestor is then ambiguous.
- JavaScript dodges this structurally: one parent only. When you want behaviour from two places, copy methods onto a prototype with Object.assign. That is a mixin, and it cannot form a diamond. The cost is visibility, because the class no longer says where its methods came from.
- Inheritance also lets any child break the parent's rules with no warning. The base documents that a subclass must set url before open(). A child forgets, open() builds the text "undefined/login", and your test fails later on a navigation timeout, far from the cause. TypeScript catches some of this. Plain JavaScript catches nothing.

**Where you meet this**
- class BasePage holds url, open() and waitForLoad(). Each page object extends it and adds its own steps.
- Never extend a test class just to reuse one helper. Pass the helper in instead. That is the next lesson.`,
      codeExample: `// extends inserts one more link in the prototype chain.
// super calls the parent constructor or the parent method.
class BasePage {
  constructor(url) {
    this.url = url;                 // enumerable, so JSON.stringify sees it
  }
  open() {
    return "GET " + this.url;       // class methods stay out of JSON
  }
  describe() {
    return "page at " + this.url;
  }
}

class LoginPage extends BasePage {
  constructor() {
    super("/login");                // must run before any use of this
    this.needsAuth = true;
  }
  describe() {
    return super.describe() + " (needs auth)";   // override, then extend
  }
}

const page = new LoginPage();
console.log(page.open());
console.log(page.describe());
console.log("chain:", page instanceof BasePage, page instanceof Object);
console.log("json keeps fields, drops methods:", JSON.stringify(page));

// Abstract by convention: the base class throws instead.
class Shape {
  area() {
    throw new Error("subclass must implement area()");
  }
}
class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area() {
    return Math.round(Math.PI * this.r ** 2);
  }
}
console.log("circle area:", new Circle(2).area());
try {
  new Shape().area();
} catch (err) {
  console.log("base blocked:", err.message);
}`,
      quiz: [
        {
          question: "What does super() do in a subclass constructor?",
          options: ["Deletes the parent","Calls the parent constructor","Creates a new class","Nothing"],
          correctIndex: 1,
          explanation: "super(...) invokes the parent class constructor for proper initialization.",
        },
        {
          question: "loginPage instanceof BasePage is true when?",
          options: ["Always","When LoginPage extends BasePage","Never","Only in strict mode"],
          correctIndex: 1,
          explanation: "instanceof follows the prototype chain, so subclasses match their base.",
        },
      ],
    },
    {
      slug: "prototypal-inheritance",
      title: "Prototypal Inheritance",
      description: "The mechanism that makes classes work.",
      content: `Classes are a tidier spelling of something older. The older thing is the prototype chain, and every object in JavaScript is already part of it whether you wrote a class or not.

**Every object points at another object**
- A plain object literal points at Object.prototype. Every other plain literal points at that same one object.
- That shared object is why toString works on a literal you made with nothing but curly braces. You did not add it. You borrowed it.
- The end of the chain is null. Nothing points anywhere after that.

**Reading a property walks the chain**
- The engine looks on the object first. If the name is not there, it looks at that object's prototype, then the next one, and keeps going.
- The first match wins and the search stops. If nothing matches, you get undefined.
- This is why [1, 2, 3].map works. map is not on the array. It is on Array.prototype, two steps along the chain.
- A method only cares that the name resolved. It does not care where the name came from.

**A dictionary with no prototype**
- Object.create(null) makes an object whose prototype is null, so there is nothing above it to interfere.
- Use it for maps keyed by whatever a user typed. If someone sends the key toString, an ordinary object already has a method sitting there and your lookup silently breaks.
- A null-prototype object has no toString either, so print it with JSON.stringify or Object.keys.

**Reading and changing the link**
- obj.__proto__ is an accessor property kept for old code. It works, but it looks like an ordinary field and confuses everyone who reads it. Avoid it.
- Object.getPrototypeOf(obj) is the tool you want. It returns the prototype, or null.
- Object.setPrototypeOf(obj, proto) replaces the link after the fact. It is slow, because engines optimise objects for the shape they already have. Swapping the link throws that cache away, and it also defeats any code already compiled against the old parent.
- So build the shape you want at creation time with Object.create, not afterwards.

**The most confused point: two different prototypes**
- Every function has a property called prototype. That is the object new will hand out. User.prototype is a plain object full of methods.
- Every function also has an invisible internal link called its [[Prototype]], which is Function.prototype itself. Every function inherits call and apply from there.
- Check it yourself: Object.getPrototypeOf(User) === Function.prototype is true, and User.prototype.constructor === User is also true.
- Mental image: a function is a machine. Its .prototype is the manual stapled to the machine. Its [[Prototype]] is the workshop the machine itself was built in.

**Own versus inherited**
- Object.hasOwn(obj, key) answers about the object alone. The key in obj operator walks the chain, so "toString" in obj is true on a plain object.
- The classic bug is a for...in loop over user input, where a key called toString turns up in your loop and is not data.
- for...in walks the whole chain and gives you strings. Object.keys gives only own string keys, and Object.entries gives own keys with their values. Prefer those by default.

**There is nothing magic here**
- function User(n) { this.n = n } plus User.prototype.greet = function () { ... } is what the class keyword compiles to.
- One difference is worth knowing. Class methods are non-enumerable, so they stay out of for...in and out of JSON.stringify. A method you add by assigning to the prototype is an ordinary enumerable property.
- Reach for the prototype by hand only to patch a built-in, and even then remember that Array.prototype.feed = ... affects every array in the process, including arrays inside libraries you did not write.`,
      codeExample: `// Every object has a hidden link. Reading a missing name walks it.
const ana = { name: "Ana" };
console.log("shared proto:", Object.getPrototypeOf(ana) === Object.getPrototypeOf({}));
console.log("borrowed method:", typeof ana.toString === "function");
console.log("own only:", Object.hasOwn(ana, "name"), Object.hasOwn(ana, "toString"));
console.log("in walks the chain:", "toString" in ana);

// A dictionary with no prototype is safe for user-supplied keys.
const dict = Object.create(null);
dict["toString"] = "typed by user";
console.log("null proto:", dict["toString"], Object.getPrototypeOf(dict));

// A function's .prototype property is not its own [[Prototype]] link.
function User(name) { this.name = name; }
User.prototype.greet = function () { return "hi " + this.name; };
console.log("prototype is a property:", Object.hasOwn(User, "prototype"));
console.log("link is Function.prototype:", Object.getPrototypeOf(User) === Function.prototype);
console.log("pointing back:", User.prototype.constructor === User);

// A hand-rolled class. This is what the class keyword compiles to.
const Kid = function (name) { this.name = name; };
Kid.prototype.greet = function () { return "hey " + this.name; };
console.log(new Kid("Mia").greet(), Object.keys(Kid.prototype));

// class methods stay hidden from JSON; prototype assignments do not.
class R {
  constructor(n) { this.n = n; }
  beep() { return "beep " + this.n; }
}
console.log(JSON.stringify(new R("R2")), Object.keys(R.prototype));`,
      quiz: [
        {
          question: "When you access an object property, JS checks:",
          options: ["Only the object itself","The object, then up the prototype chain","Only the prototype","The global object"],
          correctIndex: 1,
          explanation: "Lookup goes up the prototype chain until found or reaching null.",
        },
        {
          question: "Where do array methods like map come from?",
          options: ["Each array copies them","Array.prototype via the chain","The global scope","The array literal"],
          correctIndex: 1,
          explanation: "Arrays inherit their methods from Array.prototype.",
        },
      ],
    },
    {
      slug: "composition-over-inheritance",
      title: "Composition over Inheritance",
      description: "Mixins, factory functions, and avoiding deep hierarchies.",
      content: `"Prefer composition over inheritance" is a rule of thumb, not a law. It says: instead of a class pretending to be a poor version of another class, let a class hold the thing it needs as a plain property.

**The is-a test**
- Inheritance means is-a. A Dog is-a Animal, so a Dog can stand in wherever an Animal is expected.
- Composition means has-a. A Car has-a Engine. A car is not a kind of engine, and nobody would pass a car where an engine was wanted.
- If the sentence only makes sense after you swap in a different noun, you wanted composition.

**Why deep trees hurt**
- Inheritance gives you one parent. Real systems need behaviour from two places, so teams add a layer. Four levels later: AdminUser extends Staff extends Person extends Entity.
- Change something in Person and you cannot tell who is affected without running the whole suite.
- Worse, each layer quietly adds behaviour the layer below knows nothing about. That is how a base class ends up with a method called getLabel meaning four different things in four files.

**Small capability classes instead**
- Give each job its own tiny class: Logger, Clock, Retry, Screenshot. Give it one or two methods.
- The main class takes them in the constructor and stores them. It calls logger.info and clock.now when it needs them.
- Now every piece is short, readable on its own, and easy to delete. The main class reads like a list of steps.

**Dependency injection is what makes it testable**
- Passing a collaborator in from outside is called dependency injection. You built the list, so you can swap any entry.
- Pass a fake Clock that always returns the same time, and a test that would wait thirty seconds finishes instantly and never flakes.
- With inheritance you cannot replace one collaborator without also inheriting everything else about the base class.
- The fake only needs the shape the main class calls: one method, one fixed return value. Nothing in the fake knows it is a fake, and nothing in the main class knows either. That is the payoff of a small interface.

**Mixins: reuse with no parent**
- A mixin is a function that copies methods onto a prototype with Object.assign(Class.prototype, mixin).
- You get methods from many sources and still cannot form a diamond, because nothing inherits.
- The price is that the class no longer says where its methods came from, and two mixins that both define start collide. The second one silently wins.

**When a factory is enough**
- If you only ever need one object, skip the class. Write function makeClient(config) { ... return { get, post } }.
- The returned object closes over config, so you get the same behaviour with no prototype and no new. A closure is a function that carries away the variables around it.
- The catch is that nobody can extend it later. That is fine right up until someone needs to.

**When inheritance is still right**
- It fits when the relationship really is is-a, when the base has behaviour worth reusing, and when the hierarchy stays about two levels deep.
- Framework-style classes, custom error types and shared page base classes earn it.
- The smell is a subclass that ignores most of what it inherits. That is composition in a costume.
- In real tests a fixture usually holds page, request and logger objects, and a Playwright class takes request as a constructor argument so a test can pass a fake one.`,
      codeExample: `// Prefer composition: hold what you need instead of extending something.
class FakeClock {
  now() { return 0; }             // same shape as the real one, fixed value
}
class Logger {
  constructor(sink) { this.sink = sink; }
  info(msg) { this.sink.push("[info] " + msg); }
}

// Collaborators are passed in, so a test can fake one of them.
class Checkout {
  constructor(clock, logger) {     // dependency injection
    this.clock = clock;
    this.logger = logger;
    this.startedAt = clock.now();
  }
  pay(amount) {
    this.logger.info("charging " + amount);
    return this.clock.now() - this.startedAt;
  }
}

const logs = [];
const checkout = new Checkout(new FakeClock(), new Logger(logs));
console.log("elapsed in test:", checkout.pay(42));
console.log(logs);

// A mixin copies methods onto a prototype with Object.assign.
const timed = {
  time(fn) { return "took " + fn(); }
};
class Suite {
  constructor(name) { this.name = name; }
}
Object.assign(Suite.prototype, timed);
console.log(new Suite("smoke").time(() => new Suite("smoke").name));

// When you only need one object, a factory with a closure is enough.
function makeClient(baseUrl) {
  return {
    get: (path) => baseUrl + path,
    post: (path, body) => baseUrl + path + " " + JSON.stringify(body),
  };
}
const client = makeClient("https://api.test");
console.log(client.get("/users"));
console.log(client.post("/users", { name: "Ana" }));`,
    },
    {
      slug: "json",
      title: "Working with JSON",
      description: "parse, stringify, replacers, and safe API payloads.",
      content: `JSON is a text format, not a JavaScript value. The name means JavaScript Object Notation, which only claims to be the way we write objects down as text. Two functions move between the text and the live object.

**parse and stringify**
- JSON.parse(text) reads the text and hands you a fresh object. It throws a SyntaxError on malformed input: a trailing comma, single quotes, an unquoted key.
- Put it in try/catch, or behind a small helper that returns null.
- JSON.stringify(value) turns an object back into text. It never throws for an ordinary object. A circular reference is the one thing that makes it throw.

**Only six things exist in JSON**
- The types are object, array, string, number, boolean and null. That is the whole format.
- undefined has no JSON form. In an object the key is dropped. In an array the item turns into null.
- A function is dropped the same way, and a Symbol is dropped.
- A Date is an object with no enumerable fields, but it does have a toJSON method, so JSON.stringify(new Date()) gives an ISO text string such as "2024-01-15T09:30:00.000Z". Any other object with only internal state becomes {}.
- A Map and a Set have no enumerable own keys, so they also become {}. You need a replacer to save them.
- NaN and Infinity are not valid JSON numbers, so they become null.

**Replacer and space**
- The second argument is a replacer. Pass an array of key names and only those keys survive. That is your whitelist.
- Pass a function instead and it runs on every key and value, so you can rename, delete by returning undefined, or flatten a Map into a plain object.
- The third argument is the indent. JSON.stringify(value, null, 2) gives readable output you can paste straight into a bug report.

**parse revives nothing**
- JSON.parse builds plain objects. A date came out as a string and stays a string. There is no automatic way back.
- Give an object a toJSON method and stringify will call it for you. Use it to format money or to hide a password.
- The second argument of parse is a reviver. It is called on every key with the value and the key name. Return a new value to transform it, such as wrapping any date-looking string back into a Date.

**Never merge untrusted JSON**
- Spreading parsed data from a stranger into your own object lets a key like __proto__ reach the prototype and change behaviour for every object.
- Pick the fields you want by name and build a new object. Do not spread the whole parsed body.

**Comparing parsed JSON**
- Two objects that look identical are not equal with ===, because === compares references and every parse creates new objects.
- Compare the text with JSON.stringify(a) === JSON.stringify(b) if you control the key order, and remember key order matters.
- In tests use a deep equality assertion instead. Playwright's expect(a).toEqual(b) walks the structure for you.

**Where you meet this**
- Every request body you send is JSON.stringify(payload).
- Every response you read is response.json(), which is parse under the hood.
- Test fixtures, config files and recorded network traffic are all JSON.`,
      codeExample: `// JSON is text. stringify makes text, parse makes an object.
const user = {
  name: "Ana",
  age: 30,
  tags: ["admin"],
  createdAt: new Date("2024-01-15T09:30:00Z"),
  nick: undefined,
  greet() { return "hi"; },
};

console.log("compact:", JSON.stringify(user));
console.log("pretty:\n" + JSON.stringify({ id: 7, ok: true }, null, 2));

// Only six JSON types exist, so most of this is gone or odd.
console.log("types:", JSON.stringify({
  fn: function () {},
  d: new Date(0),
  m: new Map([["a", 1]]),
  bad: NaN,
}));

// A replacer array is a whitelist. A replacer function transforms.
console.log("whitelist:", JSON.stringify(user, ["name", "age"]));
console.log("replacer:", JSON.stringify({ pw: "s3cret", id: 7 },
  (key, val) => (key === "pw" ? "***" : val)));

// parse throws on bad text, so guard it.
function safeParse(text) {
  try { return JSON.parse(text); } catch (err) { return { error: err.constructor.name }; }
}
console.log("bad input:", safeParse("{oops"));

// parse leaves everything plain. A reviver brings a Date back.
const raw = '{"at":"2024-01-15T09:30:00Z"}';
console.log("date stays text:", typeof JSON.parse(raw).at);
const revived = JSON.parse(raw, (key, val) => (key === "at" ? new Date(val) : val));
console.log("reviver rebuilds it:", revived.at instanceof Date);

// Two equal objects are still two references.
const a = { id: 1 };
const b = JSON.parse(JSON.stringify(a));
console.log("=== is", a === b, "| deep is", JSON.stringify(a) === JSON.stringify(b));`,
    },
  ],
};

export default topic;
