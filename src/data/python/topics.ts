import { Topic, Lesson } from "../types";

export const topics: Topic[] = [
  {
    slug: "intro",
    title: "Python Introduction",
    icon: "rocket",
    description: "What is Python and why learn it?",
    level: "beginner",
    lessons: [
      {
        slug: "what-is-python",
        title: "What is Python?",
        description: "Learn what Python is and why it's so popular.",
        content: `Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and first released in 1991.

**Why Python?**
- **Easy to learn** - Simple, readable syntax
- **Versatile** - Web dev, data science, AI, automation, scripting
- **Huge community** - Massive ecosystem of libraries
- **High demand** - One of the most sought-after skills in tech

**Python is used by:**
- Instagram, Spotify, Netflix (backend services)
- NASA, ESA (scientific computing)
- Google, Amazon, Microsoft (AI/ML)
- Instagram handles 1+ billion users with Python/Django`,
        codeExample: `# Your first Python program
print("Hello, World!")

# Python can do math
print(2 + 3)

# Python can work with text
print("Python is awesome!".upper())
print("Hello".center(20, "-"))`,
        quiz: [
          {
            question: "Who created Python?",
            options: ["James Gosling", "Guido van Rossum", "Bjarne Stroustrup", "Dennis Ritchie"],
            correctIndex: 1,
            explanation: "Python was created by Guido van Rossum and first released in 1991.",
          },
          {
            question: 'What does print("Hello") output?',
            options: ["Hello", '"Hello"', "Error", "Nothing"],
            correctIndex: 0,
            explanation: "print() outputs the string without quotes: Hello",
          },
        ],
      },
      {
        slug: "getting-started",
        title: "Getting Started",
        description: "How to install and run Python.",
        content: `**Installing Python:**

1. Visit python.org/downloads
2. Download the latest version (Python 3.x)
3. Run the installer (check "Add Python to PATH" on Windows)
4. Verify installation in terminal: \`python --version\`

**Running Python:**

- **Interactive mode**: Type \`python\` in terminal
- **Script mode**: Create a \`.py\` file and run \`python filename.py\`
- **Online**: Use this app's code editor!

**Your first script:**
Create a file called \`hello.py\`:
\`\`\`python
print("Hello from a Python file!")
\`\`\`
Run it: \`python hello.py\``,
        codeExample: `# Variables store data
name = "Alice"
age = 25
height = 5.6
is_student = True

# Print with f-strings
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} ft")
print(f"Student: {is_student}")`,
        quiz: [
          {
            question: 'What is the output of: x = 5; print(x + 3)?',
            options: ["53", "8", "5 + 3", "Error"],
            correctIndex: 1,
            explanation: "x = 5, so x + 3 = 8",
          },
          {
            question: "Which file extension is used for Python files?",
            options: [".python", ".py", ".pt", ".pyt"],
            correctIndex: 1,
            explanation: "Python files use the .py extension.",
          },
        ],
      },
    ],
  },
  {
    slug: "syntax",
    title: "Python Syntax",
    icon: "code",
    description: "Learn Python syntax rules and basics.",
    level: "beginner",
    lessons: [
      {
        slug: "basic-syntax",
        title: "Basic Syntax",
        description: "Understanding Python's syntax rules.",
        content: `**Key Syntax Rules:**

1. **Indentation matters** - Python uses indentation (spaces) instead of braces
2. **No semicolons** - Statements end at the line break
3. **Case sensitive** - \`Variable\` and \`variable\` are different
4. **Comments** - Use \`#\` for single-line comments

**Indentation:**
Python uses indentation to define code blocks. Use 4 spaces (standard).

\`\`\`python
if True:
    print("This is indented")   # 4 spaces
    print("Still inside if")    # 4 spaces
print("This is outside")        # no indentation
\`\`\``,
        codeExample: `# This is a comment
name = "Python"  # inline comment

# Indentation defines blocks
for i in range(3):
    print(f"Count: {i}")
    if i == 1:
        print("  Middle item!")

# Multiple lines with backslash
total = 1 + 2 + 3 + \\
        4 + 5 + 6
print(f"Total: {total}")`,
        quiz: [
          {
            question: "How many spaces is standard Python indentation?",
            options: ["2", "4", "8", "1 tab"],
            correctIndex: 1,
            explanation: "PEP 8 recommends 4 spaces for indentation.",
          },
          {
            question: "What symbol starts a comment in Python?",
            options: ["//", "/*", "#", "--"],
            correctIndex: 2,
            explanation: "Python uses # for comments.",
          },
        ],
      },
      {
        slug: "variables",
        title: "Variables",
        description: "Creating and using variables.",
        content: `**Variables** are containers for storing data values.

**Naming Rules:**
- Must start with a letter or underscore
- Can contain letters, numbers, underscores
- Cannot use Python keywords (if, for, class, etc.)
- Case sensitive (\`myVar\` ≠ \`myvar\`)

**No declaration needed** - Just assign a value:
\`\`\`python
x = 10          # int
name = "Alice"  # string
pi = 3.14       # float
active = True   # bool
\`\`\`

**Multiple assignment:**
\`\`\`python
x, y, z = 1, 2, 3
a = b = c = 0
\`\`\``,
        codeExample: `# Different variable types
count = 42          # Integer
price = 19.99       # Float
name = "Python"     # String
is_fun = True       # Boolean
nothing = None      # NoneType

# Type checking
print(type(count))
print(type(price))
print(type(name))

# Swap variables
a, b = 10, 20
a, b = b, a
print(f"a={a}, b={b}")`,
        quiz: [
          {
            question: "Which is a valid Python variable name?",
            options: ["2name", "_name", "my-name", "class"],
            correctIndex: 1,
            explanation: "_name is valid. Names can't start with numbers, contain hyphens, or be keywords.",
          },
          {
            question: "What type is: x = 3.14?",
            options: ["int", "float", "decimal", "number"],
            correctIndex: 1,
            explanation: "3.14 is a float (floating point number).",
          },
        ],
      },
      {
        slug: "data-types",
        title: "Data Types",
        description: "Understanding Python's built-in data types.",
        content: `**Python's Core Data Types:**

| Type | Example | Description |
|------|---------|-------------|
| \`int\` | \`42\` | Whole numbers |
| \`float\` | \`3.14\` | Decimal numbers |
| \`str\` | \`"hello"\` | Text strings |
| \`bool\` | \`True\` | Boolean (True/False) |
| \`list\` | \`[1, 2, 3]\` | Ordered, mutable collection |
| \`tuple\` | \`(1, 2, 3)\` | Ordered, immutable collection |
| \`dict\` | \`{"a": 1}\` | Key-value pairs |
| \`set\` | \`{1, 2, 3}\` | Unordered unique items |
| \`None\` | \`None\` | No value |

**Type conversion:**
\`\`\`python
int("42")     # string to int
float("3.14") # string to float
str(42)       # int to string
list("abc")   # string to list ['a','b','c']
\`\`\``,
        codeExample: `# Exploring data types
print(type(42))         # <class 'int'>
print(type(3.14))       # <class 'float'>
print(type("hello"))    # <class 'str'>
print(type(True))       # <class 'bool'>
print(type([1,2,3]))    # <class 'list'>
print(type((1,2)))      # <class 'tuple'>
print(type({"a": 1}))   # <class 'dict'>
print(type({1, 2}))     # <class 'set'>
print(type(None))       # <class 'NoneType'>

# Type conversion
x = "100"
y = int(x) + 50
print(f"Converted: {y}")  # 150`,
        quiz: [
          {
            question: "What is the type of [1, 2, 3]?",
            options: ["tuple", "list", "array", "set"],
            correctIndex: 1,
            explanation: "[1, 2, 3] is a list (square brackets).",
          },
          {
            question: 'What does int("42") return?',
            options: ['"42"', "42 (string)", "42 (integer)", "Error"],
            correctIndex: 2,
            explanation: "int() converts the string '42' to the integer 42.",
          },
        ],
      },
    ],
  },
  {
    slug: "strings",
    title: "Python Strings",
    icon: "type",
    description: "Working with text data in Python.",
    level: "beginner",
    lessons: [
      {
        slug: "string-basics",
        title: "String Basics",
        description: "Creating and using strings.",
        content: `**Strings** are sequences of characters enclosed in quotes.

**Creating strings:**
\`\`\`python
single = 'Hello'
double = "Hello"
triple = """Multi-line
string"""
\`\`\`

**String operations:**
\`\`\`python
"Hello" + " World"  # Concatenation: "Hello World"
"Ha" * 3            # Repetition: "HaHaHa"
len("Hello")        # Length: 5
\`\`\`

**Escape characters:**
\`\`\`python
\\n  Newline
\\t  Tab
\\'  Single quote
\\"  Double quote
\\\\  Backslash
\`\`\`

**Raw strings** (ignore escape chars):
\`\`\`python
path = r"C:\\new\\folder"
\`\`\``,
        codeExample: `# String creation
s1 = 'Single quotes'
s2 = "Double quotes"
s3 = """Triple quotes
for multi-line
strings"""

# String operations
first = "Python"
second = "Programming"
combined = first + " " + second
repeated = "Ha" * 5

print(combined)
print(repeated)
print(len(combined))

# Escape characters
print("Line 1\\nLine 2")
print("She said \\"Hello\\"")`,
        quiz: [
          {
            question: 'What is len("Hello")?',
            options: ["4", "5", "6", "Error"],
            correctIndex: 1,
            explanation: '"Hello" has 5 characters.',
          },
          {
            question: 'What does "Hi" * 3 produce?',
            options: ["Hi3", "Hi Hi Hi", "HiHiHi", "Error"],
            correctIndex: 2,
            explanation: 'String repetition: "Hi" * 3 = "HiHiHi"',
          },
        ],
      },
      {
        slug: "string-methods",
        title: "String Methods",
        description: "Built-in string methods.",
        content: `**Common String Methods:**

| Method | Description | Example |
|--------|-------------|---------|
| \`.upper()\` | Uppercase | \`"hello".upper()\` → \`"HELLO"\` |
| \`.lower()\` | Lowercase | \`"HELLO".lower()\` → \`"hello"\` |
| \`.strip()\` | Remove whitespace | \`" hi ".strip()\` → \`"hi"\` |
| \`.split()\` | Split into list | \`"a,b,c".split(",")\` → \`["a","b","c"]\` |
| \`.join()\` | Join list to string | \`"-".join(["a","b"])\` → \`"a-b"\` |
| \`.replace()\` | Replace text | \`"hello".replace("l","r")\` → \`"herro"\` |
| \`.find()\` | Find substring | \`"hello".find("ll")\` → \`2\` |
| \`.count()\` | Count occurrences | \`"hello".count("l")\` → \`2\` |
| \`.startswith()\` | Starts with? | \`"hello".startswith("he")\` → \`True\` |
| \`.endswith()\` | Ends with? | \`"hello".endswith("lo")\` → \`True\` |

**Note:** Strings are **immutable** - methods return new strings.`,
        codeExample: `text = "  Hello, World!  "

# Case methods
print(text.upper())
print(text.lower())
print(text.strip())  # Remove extra spaces
print(text.strip().title())  # Title Case

# Search methods
sentence = "the cat sat on the mat"
print(sentence.find("cat"))       # 4
print(sentence.count("the"))      # 2
print(sentence.startswith("the"))  # True
print(sentence.endswith("mat"))    # True

# Transform methods
print(sentence.replace("cat", "dog"))
print("a,b,c".split(","))
print("-".join(["2024", "01", "01"]))`,
        quiz: [
          {
            code: 'text = "  Hello  "',
            question: "What does text.strip() return?",
            options: ['"  Hello"', '"Hello"', '"Hello  "', '"  Hello  "'],
            correctIndex: 1,
            explanation: ".strip() removes whitespace from both ends.",
          },
          {
            question: 'What does "a,b,c".split(",") return?',
            options: ['"a,b,c"', '["a","b","c"]', '("a","b","c")', '{"a","b","c"}'],
            correctIndex: 1,
            explanation: ".split(',') returns a list of substrings.",
          },
        ],
      },
      {
        slug: "string-formatting",
        title: "String Formatting",
        description: "Formatting strings with f-strings and more.",
        content: `**Three ways to format strings:**

**1. f-strings (recommended - Python 3.6+):**
\`\`\`python
name = "Alice"
age = 25
print(f"{name} is {age} years old")
print(f"{name} will be {age + 1} next year")
print(f"{'centered':^20}")
print(f"{3.14159:.2f}")  # 3.14
\`\`\`

**2. .format() method:**
\`\`\`python
print("{} is {} years old".format(name, age))
print("{1} {0}".format("World", "Hello"))
\`\`\`

**3. % formatting (old style):**
\`\`\`python
print("%s is %d years old" % (name, age))
\`\`\`

**f-string expressions:**
\`\`\`python
print(f"{'hello':>20}")  # Right align, width 20
print(f"{'hello':<20}")  # Left align
print(f"{'hello':^20}")  # Center
print(f"{42:05d}")        # Zero-padded: 00042
print(f"{0.856:.1%}")     # Percentage: 85.6%
\`\`\``,
        codeExample: `name = "Alice"
score = 95.678
items = 3

# f-string basics
print(f"Student: {name}")
print(f"Score: {score:.1f}")
print(f"Items: {items:03d}")

# Expressions in f-strings
print(f"Double score: {score * 2:.1f}")
print(f"Name length: {len(name)}")

# Alignment
headers = ["Name", "Score", "Grade"]
for h in headers:
    print(f"{h:>15}")

# Formatting numbers
big_num = 1000000
print(f"Population: {big_num:,}")
print(f"Percentage: {0.95:.0%}")`,
        quiz: [
          {
            code: 'x = 3.14159',
            question: 'What does f"{x:.2f}" produce?',
            options: ["3.14", "3.14159", "3.1", "3"],
            correctIndex: 0,
            explanation: ".2f formats to 2 decimal places: 3.14",
          },
          {
            question: "Which is the recommended modern way to format strings?",
            options: ["% formatting", ".format()", "f-strings", "string.concat()"],
            correctIndex: 2,
            explanation: "f-strings (Python 3.6+) are the most readable and performant.",
          },
        ],
      },
    ],
  },
  {
    slug: "operators",
    title: "Python Operators",
    icon: "calculator",
    description: "Arithmetic, comparison, and logical operators.",
    level: "beginner",
    lessons: [
      {
        slug: "arithmetic-operators",
        title: "Arithmetic Operators",
        description: "Math operations in Python.",
        content: `**Arithmetic Operators:**

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Subtraction | \`5 - 3\` | \`2\` |
| \`*\` | Multiplication | \`5 * 3\` | \`15\` |
| \`/\` | Division | \`5 / 3\` | \`1.6667\` |
| \`//\` | Floor Division | \`5 // 3\` | \`1\` |
| \`%\` | Modulus | \`5 % 3\` | \`2\` |
| \`**\` | Exponent | \`5 ** 3\` | \`125\` |

**Operator precedence** (PEMDAS):
1. \`**\` (exponent)
2. \`+\`, \`-\` (unary)
3. \`*\`, \`/\`, \`//\`, \`%\`
4. \`+\`, \`-\``,
        codeExample: `a, b = 17, 5

print(f"{a} + {b} = {a + b}")    # 22
print(f"{a} - {b} = {a - b}")    # 12
print(f"{a} * {b} = {a * b}")    # 85
print(f"{a} / {b} = {a / b}")    # 3.4
print(f"{a} // {b} = {a // b}")  # 3
print(f"{a} % {b} = {a % b}")    # 2
print(f"{a} ** {b} = {a ** b}")  # 1419857

# Practical examples
print(f"\\n100 items, 3 per box:")
print(f"  Boxes needed: {-(-100 // 3)}")  # Ceiling division
print(f"  Leftover: {100 % 3}")`,
        quiz: [
          {
            question: "What is 17 // 5?",
            options: ["3.4", "3", "4", "2"],
            correctIndex: 1,
            explanation: "// is floor division - it rounds down to 3.",
          },
          {
            question: "What is 17 % 5?",
            options: ["3", "2", "3.4", "175"],
            correctIndex: 1,
            explanation: "% gives the remainder: 17 = 3*5 + 2, so remainder is 2.",
          },
        ],
      },
      {
        slug: "comparison-operators",
        title: "Comparison Operators",
        description: "Comparing values in Python.",
        content: `**Comparison Operators:**

| Operator | Meaning | Example |
|----------|---------|---------|
| \`==\` | Equal to | \`5 == 5\` → \`True\` |
| \`!=\` | Not equal | \`5 != 3\` → \`True\` |
| \`>\` | Greater than | \`5 > 3\` → \`True\` |
| \`<\` | Less than | \`5 < 3\` → \`False\` |
| \`>=\` | Greater or equal | \`5 >= 5\` → \`True\` |
| \`<=\` | Less or equal | \`5 <= 3\` → \`False\` |

**Chained comparisons:**
\`\`\`python
x = 5
print(1 < x < 10)    # True
print(1 < x < 3)     # False
\`\`\``,
        codeExample: `x, y = 10, 20

# Basic comparisons
print(f"{x} == {y}: {x == y}")
print(f"{x} != {y}: {x != y}")
print(f"{x} > {y}: {x > y}")
print(f"{x} < {y}: {x < y}")
print(f"{x} >= {y}: {x >= y}")
print(f"{x} <= {y}: {x <= y}")

# Chained comparisons
age = 25
print(f"\\n18 <= {age} <= 65: {18 <= age <= 65}")

# String comparison
print(f'"apple" < "banana": {"apple" < "banana"}')
print(f'"abc" == "abc": {"abc" == "abc"}')`,
        quiz: [
          {
            question: "What is the result of: 5 != 5?",
            options: ["True", "False", "5", "Error"],
            correctIndex: 1,
            explanation: "5 != 5 is False because 5 is equal to 5.",
          },
          {
            question: "Which checks if two values are NOT equal?",
            options: ["==", "!=", "<>", "!="],
            correctIndex: 1,
            explanation: "!= is the not-equal operator.",
          },
        ],
      },
      {
        slug: "logical-operators",
        title: "Logical Operators",
        description: "and, or, not operators.",
        content: `**Logical Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| \`and\` | True if BOTH are true | \`True and False\` → \`False\` |
| \`or\` | True if AT LEAST ONE is true | \`True or False\` → \`True\` |
| \`not\` | Reverses the boolean | \`not True\` → \`False\` |

**Truth table for \`and\`:**
\`\`\`
True and True   → True
True and False  → False
False and True  → False
False and False → False
\`\`\`

**Truth table for \`or\`:**
\`\`\`
True or True   → True
True or False  → True
False or True  → True
False or False → False
\`\`\`

**Short-circuit evaluation:**
Python stops evaluating as soon as the result is determined.
\`\`\`python
x = 0
result = x != 0 and 10 / x > 2  # Safe! Won't divide by zero
\`\`\``,
        codeExample: `age = 25
has_id = True
is_vip = False

# and - both must be true
print(f"Can enter: {age >= 21 and has_id}")

# or - at least one must be true
print(f"VIP or over 21: {is_vip or age >= 21}")

# not - reverses
print(f"Not VIP: {not is_vip}")

# Complex conditions
score = 85
has_bonus = True
passed = score >= 70 and (score >= 80 or has_bonus)
print(f"\\nPassed with honors: {passed}")

# Short-circuit
name = ""
display = name or "Anonymous"
print(f"Name: {display}")`,
        quiz: [
          {
            question: "What is True and False?",
            options: ["True", "False", "None", "Error"],
            correctIndex: 1,
            explanation: "and requires BOTH to be True. Since one is False, result is False.",
          },
          {
            question: "What is not False or True?",
            options: ["False", "True", "None", "Error"],
            correctIndex: 1,
            explanation: "not False = True, then True or True = True",
          },
        ],
      },
    ],
  },
  {
    slug: "control-flow",
    title: "Control Flow",
    icon: "git-branch",
    description: "If/else statements and loops.",
    level: "beginner",
    lessons: [
      {
        slug: "if-else",
        title: "If / Elif / Else",
        description: "Conditional statements.",
        content: `**If/Elif/Else** controls program flow based on conditions.

\`\`\`python
if condition1:
    # runs if condition1 is True
elif condition2:
    # runs if condition1 is False AND condition2 is True
elif condition3:
    # runs if all above are False AND condition3 is True
else:
    # runs if ALL conditions are False
\`\`\`

**Shorthand (ternary):**
\`\`\`python
x = 10
result = "even" if x % 2 == 0 else "odd"
\`\`\`

**Match statement (Python 3.10+):**
\`\`\`python
status = 404
match status:
    case 200: print("OK")
    case 404: print("Not Found")
    case _: print("Unknown")  # default
\`\`\``,
        codeExample: `temp = 28

# Temperature advisor
if temp < 0:
    print("Freezing! Stay inside.")
elif temp < 15:
    print("Cold. Wear a jacket.")
elif temp < 25:
    print("Nice weather!")
elif temp < 35:
    print("Getting warm.")
else:
    print("Hot! Stay hydrated.")

# Nested conditions
age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Welcome to the movie!")
    else:
        print("Please buy a ticket.")
else:
    print("Sorry, you must be 18+.")

# Ternary operator
number = 7
parity = "even" if number % 2 == 0 else "odd"
print(f"{number} is {parity}")`,
        quiz: [
          {
            question: "How many elif blocks can an if statement have?",
            options: ["1", "2", "Unlimited", "0"],
            correctIndex: 2,
            explanation: "You can have unlimited elif blocks, plus one else.",
          },
          {
            question: "What does the _ case do in match?",
            options: ["Matches everything", "Default case", "Error", "Nothing"],
            correctIndex: 1,
            explanation: "_ is the wildcard/default case in match statements.",
          },
        ],
      },
      {
        slug: "for-loops",
        title: "For Loops",
        description: "Iterating with for loops.",
        content: `**For loops** iterate over a sequence (list, string, range, etc.)

\`\`\`python
# Basic for loop
for item in sequence:
    print(item)
\`\`\`

**range() function:**
\`\`\`python
range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8
\`\`\`

**Loop with enumerate:**
\`\`\`python
for index, item in enumerate(["a", "b", "c"]):
    print(f"{index}: {item}")
\`\`\`

**Loop with zip:**
\`\`\`python
names = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
\`\`\`

**List comprehension:**
\`\`\`python
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
\`\`\``,
        codeExample: `# Basic iteration
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# range
print("\\nCounting:")
for i in range(1, 6):
    print(f"  {i}")

# enumerate
print("\\nWith index:")
for i, fruit in enumerate(fruits):
    print(f"  {i}: {fruit}")

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(f"\\nSquares: {squares}")

# Nested loops
print("\\nMultiplication table (1-3):")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"  {i}x{j}={i*j}", end="")
    print()`,
        quiz: [
          {
            question: "What does range(1, 5) produce?",
            options: ["1,2,3,4,5", "1,2,3,4", "0,1,2,3,4", "1,2,3"],
            correctIndex: 1,
            explanation: "range(1, 5) generates 1, 2, 3, 4 (stop is exclusive).",
          },
          {
            question: "What does enumerate() return?",
            options: ["Just values", "Just indices", "Index-value pairs", "Nothing"],
            correctIndex: 2,
            explanation: "enumerate() returns (index, value) pairs.",
          },
        ],
      },
      {
        slug: "while-loops",
        title: "While Loops",
        description: "Looping with while.",
        content: `**While loops** repeat as long as a condition is True.

\`\`\`python
while condition:
    # code to repeat
\`\`\`

**Common patterns:**
\`\`\`python
# Counter
count = 0
while count < 5:
    print(count)
    count += 1

# Input validation
while True:
    user_input = input("Enter a number: ")
    if user_input.isdigit():
        break

# Game loop
game_running = True
while game_running:
    # game logic
    if should_quit:
        game_running = False
\`\`\`

**break and continue:**
- \`break\` - exits the loop entirely
- \`continue\` - skips to next iteration`,
        codeExample: `# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Guessing game simulation
secret = 7
guess = 0
attempts = 0

print("\\nGuess the number (1-10)!")
while guess != secret:
    guesses = [3, 5, 7]  # Simulated guesses
    guess = guesses[attempts] if attempts < len(guesses) else 7
    attempts += 1
    if guess < secret:
        print(f"  Guess {attempts}: {guess} - Too low!")
    elif guess > secret:
        print(f"  Guess {attempts}: {guess} - Too high!")
    else:
        print(f"  Guess {attempts}: {guess} - Correct!")

print(f"Found in {attempts} attempts!")

# Break and continue
print("\\nSkip multiples of 3:")
for i in range(1, 16):
    if i % 3 == 0:
        continue
    if i > 12:
        break
    print(f"  {i}", end="")
print()`,
        quiz: [
          {
            question: "What happens if the while condition is never False?",
            options: ["Runs once", "Error", "Infinite loop", "Skips"],
            correctIndex: 2,
            explanation: "If the condition never becomes False, it's an infinite loop.",
          },
          {
            question: "What does 'continue' do in a loop?",
            options: ["Exits loop", "Skips to next iteration", "Restarts program", "Pauses"],
            correctIndex: 1,
            explanation: "continue skips the rest of the current iteration and goes to the next one.",
          },
        ],
      },
    ],
  },
  {
    slug: "lists",
    title: "Python Lists",
    icon: "list",
    description: "Working with ordered, mutable collections.",
    level: "beginner",
    lessons: [
      {
        slug: "list-basics",
        title: "List Basics",
        description: "Creating and accessing lists.",
        content: `**Lists** are ordered, mutable collections that can hold any type.

\`\`\`python
# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, None]
nested = [[1, 2], [3, 4]]
empty = []
\`\`\`

**Accessing elements:**
\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits[0]    # "apple" (first)
fruits[-1]   # "cherry" (last)
fruits[1:3]  # ["banana", "cherry"] (slicing)
\`\`\`

**List methods:**
\`\`\`python
fruits.append("date")      # Add to end
fruits.insert(1, "fig")    # Insert at index
fruits.remove("banana")    # Remove by value
fruits.pop()               # Remove last
fruits.sort()              # Sort in place
fruits.reverse()           # Reverse in place
len(fruits)                # Length
\`\`\``,
        codeExample: `# Creating lists
colors = ["red", "green", "blue"]
numbers = list(range(1, 6))

# Accessing
print(f"First: {colors[0]}")
print(f"Last: {colors[-1]}")
print(f"Slice: {colors[1:]}")

# Modifying
colors.append("yellow")
colors.insert(1, "purple")
print(f"After add: {colors}")

colors.remove("green")
popped = colors.pop()
print(f"After remove: {colors}")
print(f"Popped: {popped}")

# Useful operations
print(f"Length: {len(colors)}")
print(f"Index of blue: {colors.index('blue')}")
print(f"Count of red: {colors.count('red')}")
print(f"'red' in colors: {'red' in colors}")`,
        quiz: [
          {
            question: "Which method adds an element to the end of a list?",
            options: [".add()", ".append()", ".insert()", ".push()"],
            correctIndex: 1,
            explanation: ".append() adds an element to the end of a list.",
          },
          {
            question: 'What does [1,2,3][1] return?',
            options: ["1", "2", "3", "[2]"],
            correctIndex: 1,
            explanation: "Index 1 is the second element: 2.",
          },
        ],
      },
      {
        slug: "list-comprehension",
        title: "List Comprehension",
        description: "Creating lists concisely.",
        content: `**List comprehension** creates new lists from expressions.

**Syntax:**
\`\`\`python
[expression for item in iterable if condition]
\`\`\`

**Examples:**
\`\`\`python
# Basic
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# With function
upper = [word.upper() for word in ["hello", "world"]]

# Nested
pairs = [(x, y) for x in range(3) for y in range(3)]

# Conditional expression
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
\`\`\`

**When to use comprehensions:**
- Simple transformations
- Filtering
- When it improves readability
- Don't use for complex logic - use regular loops instead`,
        codeExample: `# Basic list comprehensions
squares = [x**2 for x in range(1, 11)]
print(f"Squares: {squares}")

# With filter
evens = [x for x in range(1, 21) if x % 2 == 0]
print(f"Evens: {evens}")

# String manipulation
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(f"Upper: {upper_words}")

# Nested
matrix = [[i*3 + j + 1 for j in range(3)] for i in range(3)]
print(f"Matrix: {matrix}")

# Flattened
flat = [num for row in matrix for num in row]
print(f"Flat: {flat}")

# Conditional
labels = ["+" if x > 5 else "-" for x in range(1, 11)]
print(f"Labels: {labels}")`,
        quiz: [
          {
            question: "What does [x*2 for x in range(3)] produce?",
            options: ["[2, 4, 6]", "[0, 2, 4]", "[1, 2, 3]", "[0, 1, 2]"],
            correctIndex: 1,
            explanation: "range(3) = 0,1,2, each multiplied by 2 = 0,2,4",
          },
          {
            question: "Where does the filter condition go?",
            options: ["Before for", "After for, before if", "At the end", "Before the expression"],
            correctIndex: 1,
            explanation: "Syntax: [expr for item in iterable if condition]",
          },
        ],
      },
    ],
  },
  {
    slug: "functions",
    title: "Python Functions",
    icon: "function-square",
    description: "Creating reusable code blocks.",
    level: "intermediate",
    lessons: [
      {
        slug: "function-basics",
        title: "Function Basics",
        description: "Defining and calling functions.",
        content: `**Functions** are reusable blocks of code.

\`\`\`python
def function_name(parameters):
    """Docstring - describes what the function does."""
    # code block
    return result
\`\`\`

**Key concepts:**
- \`def\` keyword starts function definition
- Parameters are optional
- \`return\` sends a value back (optional)
- Without \`return\`, function returns \`None\`

**Default parameters:**
\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
\`\`\`

**Multiple return values:**
\`\`\`python
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)
\`\`\``,
        codeExample: `# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
print(greet("Bob"))

# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(f"\\nPower: {power(3)} = {power(3, 3)}")

# Multiple returns
def analyze(scores):
    return min(scores), max(scores), sum(scores) / len(scores)

data = [85, 92, 78, 95, 88]
low, high, avg = analyze(data)
print(f"\\nScores: {data}")
print(f"Min: {low}, Max: {high}, Avg: {avg:.1f}")

# No return
def print_line(char="=", length=30):
    print(char * length)

print()
print_line()
print("Section Title")
print_line("-")`,
        quiz: [
          {
            question: "What does a function return without a return statement?",
            options: ["0", "Empty string", "None", "Error"],
            correctIndex: 2,
            explanation: "Functions without return return None.",
          },
          {
            code: "def add(a, b=5):\n    return a + b\n\nprint(add(3))",
            question: "What does add(3) return?",
            options: ["3", "5", "8", "Error"],
            correctIndex: 2,
            explanation: "b defaults to 5, so 3 + 5 = 8.",
          },
        ],
      },
      {
        slug: "lambda",
        title: "Lambda Functions",
        description: "Anonymous one-line functions.",
        content: `**Lambda** functions are small anonymous functions.

\`\`\`python
# Syntax
lambda parameters: expression

# Equivalent to:
def func(parameters):
    return expression
\`\`\`

**Common uses:**
\`\`\`python
# Simple transformation
double = lambda x: x * 2

# With sorted
students = [("Alice", 90), ("Bob", 80)]
students.sort(key=lambda s: s[1], reverse=True)

# With map/filter
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))

# In list comprehension
squares = [x**2 for x in range(10)]
\`\`\`

**When to use:**
- Short, one-off functions
- As arguments to higher-order functions (map, filter, sorted)
- For complex logic, use \`def\` instead`,
        codeExample: `# Lambda basics
double = lambda x: x * 2
add = lambda a, b: a + b

print(f"Double 5: {double(5)}")
print(f"Add 3,7: {add(3, 7)}")

# With sorted
students = [("Alice", 92), ("Bob", 85), ("Charlie", 95), ("Diana", 88)]
by_grade = sorted(students, key=lambda s: s[1], reverse=True)
print(f"\\nBy grade: {by_grade}")

# With map and filter
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

print(f"\\nSquared: {squared}")
print(f"Evens: {evens}")

# Real-world example
words = ["banana", "apple", "cherry", "date"]
by_length = sorted(words, key=lambda w: len(w))
print(f"\\nBy length: {by_length}")`,
        quiz: [
          {
            question: "What is a lambda function?",
            options: ["Named function", "Anonymous function", "Class method", "Built-in function"],
            correctIndex: 1,
            explanation: "Lambda creates small anonymous (unnamed) functions.",
          },
          {
            question: "Lambda functions can have multiple expressions?",
            options: ["Yes, unlimited", "Only one expression", "Only with return", "Only two"],
            correctIndex: 1,
            explanation: "Lambda functions are limited to a single expression.",
          },
        ],
      },
    ],
  },
  {
    slug: "dictionaries",
    title: "Python Dictionaries",
    icon: "book-open",
    description: "Key-value pair collections.",
    level: "beginner",
    lessons: [
      {
        slug: "dict-basics",
        title: "Dictionary Basics",
        description: "Creating and using dictionaries.",
        content: `**Dictionaries** store data in key-value pairs.

\`\`\`python
# Creating dictionaries
person = {"name": "Alice", "age": 30, "city": "NYC"}
empty = {}
from_keys = dict.fromkeys(["a", "b", "c"], 0)
\`\`\`

**Accessing values:**
\`\`\`python
person["name"]          # "Alice" (KeyError if missing)
person.get("name")      # "Alice" (None if missing)
person.get("x", "N/A")  # "N/A" (default value)
\`\`\`

**Dictionary methods:**
\`\`\`python
person.keys()     # dict_keys(["name", "age", "city"])
person.values()   # dict_values(["Alice", 30, "NYC"])
person.items()    # dict_items([("name","Alice"), ...])
person.update({"age": 31})
person.pop("city")
\`\`\`

**Iteration:**
\`\`\`python
for key in person:
    print(key, person[key])

for key, value in person.items():
    print(f"{key}: {value}")
\`\`\``,
        codeExample: `# Creating and accessing
student = {
    "name": "Alice",
    "grades": [90, 85, 92],
    "major": "CS"
}

print(f"Name: {student['name']}")
print(f"Major: {student.get('major', 'Undeclared')}")
print(f"GPA: {student.get('gpa', 'N/A')}")

# Modifying
student["age"] = 20
student["grades"].append(88)
print(f"\\nUpdated: {student}")

# Methods
print(f"\\nKeys: {list(student.keys())}")
print(f"Values: {list(student.values())}")

# Iteration
print("\\nStudent info:")
for key, value in student.items():
    print(f"  {key}: {value}")`,
        quiz: [
          {
            question: "What does .get() do vs direct access?",
            options: ["Same thing", "Returns None instead of error", "Faster", "Returns default"],
            correctIndex: 1,
            explanation: ".get() returns None (or default) instead of raising KeyError.",
          },
          {
            question: "How do you iterate over key-value pairs?",
            options: [".keys()", ".values()", ".items()", ".entries()"],
            correctIndex: 2,
            explanation: ".items() returns (key, value) tuples for iteration.",
          },
        ],
      },
    ],
  },
  {
    slug: "oop",
    title: "Object-Oriented Python",
    icon: "box",
    description: "Classes, objects, and OOP concepts.",
    level: "intermediate",
    lessons: [
      {
        slug: "classes-basics",
        title: "Classes & Objects",
        description: "Creating classes and objects.",
        content: `**Classes** are blueprints for creating objects.

\`\`\`python
class Dog:
    # Class attribute (shared by all instances)
    species = "Canine"

    # Constructor (initializes instance)
    def __init__(self, name, age):
        self.name = name   # Instance attribute
        self.age = age

    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"

    # String representation
    def __repr__(self):
        return f"Dog('{self.name}', {self.age})"
\`\`\`

**Creating objects:**
\`\`\`python
dog1 = Dog("Rex", 5)  # Calls __init__
print(dog1.bark())     # "Rex says Woof!"
print(dog1.species)    # "Canine"
\`\`\`

**Key concepts:**
- \`class\` keyword defines a class
- \`__init__\` is the constructor
- \`self\` refers to the current instance
- Instance attributes are unique to each object
- Class attributes are shared`,
        codeExample: `class BankAccount:
    bank_name = "PyBank"

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.history = []

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.history.append(f"+{amount}")
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.history.append(f"-{amount}")
            return True
        print("Insufficient funds!")
        return False

    def get_statement(self):
        lines = [f"Account: {self.owner}"]
        lines.append(f"Bank: {self.bank_name}")
        for entry in self.history:
            lines.append(f"  {entry}")
        lines.append(f"Balance: \${self.balance}")
        return "\\n".join(lines)

# Usage
acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc.get_statement())`,
        quiz: [
          {
            question: "What does __init__ do?",
            options: ["Destroys object", "Initializes object", "Creates class", "Imports module"],
            correctIndex: 1,
            explanation: "__init__ is the constructor that initializes a new object.",
          },
          {
            question: "What does 'self' refer to?",
            options: ["The class", "The current instance", "The parent class", "Nothing"],
            correctIndex: 1,
            explanation: "self refers to the current instance of the class.",
          },
        ],
      },
      {
        slug: "inheritance",
        title: "Inheritance",
        description: "Extending classes.",
        content: `**Inheritance** lets a class reuse code from another class.

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):        # Dog inherits from Animal
    def speak(self):      # Override parent method
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
\`\`\`

**Key concepts:**
- Parent class (base/super class)
- Child class (derived/sub class)
- Method overriding
- \`super().__init__()\` calls parent constructor
- \`isinstance(obj, Class)\` checks type

**Types of inheritance:**
- Single: A → B
- Multiple: A, B → C
- Multilevel: A → B → C`,
        codeExample: `class Shape:
    def __init__(self, color="red"):
        self.color = color

    def area(self):
        return 0

    def describe(self):
        return f"{self.color} {self.__class__.__name__}, area={self.area():.2f}"

class Circle(Shape):
    def __init__(self, radius, color="blue"):
        super().__init__(color)
        self.radius = radius

    def area(self):
        import math
        return math.pi * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height, color="green"):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# Usage
shapes = [Circle(5), Rectangle(4, 6), Circle(3, "red")]
for s in shapes:
    print(s.describe())

# isinstance check
c = Circle(10)
print(f"\\nIs Shape: {isinstance(c, Shape)}")
print(f"Is Circle: {isinstance(c, Circle)}")`,
        quiz: [
          {
            question: "What does super().__init__() do?",
            options: ["Creates new class", "Calls parent constructor", "Destroys object", "Nothing"],
            correctIndex: 1,
            explanation: "super().__init__() calls the parent class's constructor.",
          },
          {
            question: "Can a child class override a parent method?",
            options: ["No, never", "Yes, by redefining it", "Only with permission", "Only static methods"],
            correctIndex: 1,
            explanation: "Child classes override parent methods by redefining them.",
          },
        ],
      },
    ],
  },
  {
    slug: "error-handling",
    title: "Error Handling",
    icon: "alert-triangle",
    description: "Try/except and exception handling.",
    level: "intermediate",
    lessons: [
      {
        slug: "try-except",
        title: "Try / Except",
        description: "Handling errors gracefully.",
        content: `**Try/Except** catches and handles errors.

\`\`\`python
try:
    # code that might fail
    result = 10 / 0
except ZeroDivisionError:
    # handles specific error
    print("Cannot divide by zero!")
except ValueError as e:
    # catches ValueError, stores error in e
    print(f"Bad value: {e}")
except Exception as e:
    # catches all other errors
    print(f"Unexpected error: {e}")
else:
    # runs if NO error occurred
    print("Success!")
finally:
    # ALWAYS runs
    print("Cleanup code")
\`\`\`

**Common exceptions:**
\`\`\`
ValueError      - Wrong value type
TypeError       - Wrong operation for type
KeyError        - Dictionary key not found
IndexError      - List index out of range
FileNotFoundError - File doesn't exist
ZeroDivisionError - Division by zero
AttributeError  - Attribute doesn't exist
\`\`\``,
        codeExample: `# Basic try/except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")

# Handling multiple exceptions
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"

print(safe_divide(10, 3))
print(safe_divide(10, 0))
print(safe_divide("10", 3))

# Raising exceptions
def set_age(age):
    if not isinstance(age, int) or age < 0 or age > 150:
        raise ValueError(f"Invalid age: {age}")
    return f"Age set to {age}"

try:
    print(set_age(25))
    print(set_age(-5))
except ValueError as e:
    print(f"Error: {e}")

# Practical example
def read_number(text):
    try:
        return float(text)
    except ValueError:
        print(f"  '{text}' is not a valid number")
        return None

values = ["3.14", "abc", "42", "xyz"]
for v in values:
    result = read_number(v)
    if result is not None:
        print(f"  Converted: {result}")`,
        quiz: [
          {
            question: "When does the 'else' block in try/except run?",
            options: ["Always", "Only on error", "Only if no error", "Never"],
            correctIndex: 2,
            explanation: "The else block runs only if no exception was raised.",
          },
          {
            question: "When does 'finally' run?",
            options: ["Only on error", "Only if no error", "Always", "Never"],
            correctIndex: 2,
            explanation: "finally always runs, whether or not an exception occurred.",
          },
        ],
      },
    ],
  },
  {
    slug: "file-handling",
    title: "File Handling",
    icon: "file-text",
    description: "Reading and writing files.",
    level: "intermediate",
    lessons: [
      {
        slug: "file-operations",
        title: "File Operations",
        description: "Working with files in Python.",
        content: `**File modes:**
\`\`\`
"r"   Read (default)
"w"   Write (overwrites)
"a"   Append
"x"   Create (error if exists)
"r+"  Read and write
\`\`\`

**Best practice - use 'with':**
\`\`\`python
with open("file.txt", "r") as f:
    content = f.read()
# File automatically closed
\`\`\`

**Reading methods:**
\`\`\`python
f.read()          # Entire file as string
f.readline()      # One line
f.readlines()     # List of lines
\`\`\`

**Writing:**
\`\`\`python
with open("output.txt", "w") as f:
    f.write("Hello\\n")
    f.writelines(["Line 1\\n", "Line 2\\n"])
\`\`\``,
        codeExample: `import json

# Writing a text file
with open("demo.txt", "w") as f:
    f.write("Line 1: Hello\\n")
    f.write("Line 2: World\\n")
    f.write("Line 3: Python\\n")

# Reading a file
with open("demo.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line
with open("demo.txt", "r") as f:
    for i, line in enumerate(f, 1):
        print(f"Line {i}: {line.strip()}")

# Working with JSON
data = {
    "students": [
        {"name": "Alice", "grade": 95},
        {"name": "Bob", "grade": 87}
    ]
}

with open("students.json", "w") as f:
    json.dump(data, f, indent=2)

with open("students.json", "r") as f:
    loaded = json.load(f)
    for s in loaded["students"]:
        print(f"{s['name']}: {s['grade']}")`,
        quiz: [
          {
            question: "Why use 'with' when opening files?",
            options: ["It's faster", "Auto-closes the file", "Required syntax", "None of the above"],
            correctIndex: 1,
            explanation: "'with' ensures the file is automatically closed, even if an error occurs.",
          },
          {
            question: "What mode overwrites an existing file?",
            options: ['"r"', '"a"', '"w"', '"x"'],
            correctIndex: 2,
            explanation: '"w" opens for writing and truncates (overwrites) the file.',
          },
        ],
      },
    ],
  },
  {
    slug: "modules",
    title: "Python Modules",
    icon: "puzzle",
    description: "Importing and using modules.",
    level: "intermediate",
    lessons: [
      {
        slug: "importing-modules",
        title: "Importing Modules",
        description: "Using built-in and external modules.",
        content: `**Modules** are Python files containing functions/classes.

**Import methods:**
\`\`\`python
import math
print(math.sqrt(16))

from math import sqrt, pi
print(sqrt(16))

from math import *  # Import all (avoid this)
print(sqrt(16))

import math as m    # Alias
print(m.sqrt(16))
\`\`\`

**Common built-in modules:**
\`\`\`
math      - Math functions
random    - Random numbers
datetime  - Date and time
os        - Operating system
json      - JSON handling
re        - Regular expressions
collections - Special containers
functools - Function utilities
itertools - Iteration tools
\`\`\`

**Creating your own:**
\`\`\`python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

# main.py
from mymodule import greet
\`\`\``,
        codeExample: `import math
import random
from datetime import datetime, timedelta

# Math module
print("Math functions:")
print(f"  sqrt(144) = {math.sqrt(144)}")
print(f"  pi = {math.pi:.6f}")
print(f"  ceil(3.2) = {math.ceil(3.2)}")
print(f"  floor(3.8) = {math.floor(3.8)}")

# Random module
print("\\nRandom:")
print(f"  randint(1,10) = {random.randint(1,10)}")
print(f"  choice(['a','b','c']) = {random.choice(['a','b','c'])}")
print(f"  random() = {random.random():.4f}")

# Datetime module
now = datetime.now()
print(f"\\nDatetime:")
print(f"  Now: {now}")
print(f"  Date: {now.strftime('%Y-%m-%d')}")
print(f"  Time: {now.strftime('%H:%M:%S')}")
tomorrow = now + timedelta(days=1)
print(f"  Tomorrow: {tomorrow.strftime('%A')}")`,
        quiz: [
          {
            question: "What's the difference between 'import math' and 'from math import sqrt'?",
            options: ["Same thing", "First uses m.sqrt(), second uses sqrt()", "First is faster", "Second imports all"],
            correctIndex: 1,
            explanation: "'import math' requires math.sqrt(), 'from math import sqrt' allows sqrt() directly.",
          },
          {
            question: "Which module handles date and time?",
            options: ["time", "datetime", "calendar", "Both time and datetime"],
            correctIndex: 3,
            explanation: "Both 'time' and 'datetime' modules handle dates and times, but datetime is more feature-rich.",
          },
        ],
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getLessonBySlug(topicSlug: string, lessonSlug: string): Lesson | undefined {
  const topic = getTopicBySlug(topicSlug);
  return topic?.lessons.find((l) => l.slug === lessonSlug);
}

export function getTotalLessons(): number {
  return topics.reduce((acc, t) => acc + t.lessons.length, 0);
}

export function getNextLesson(currentTopicSlug: string, currentLessonSlug: string): { topicSlug: string; lessonSlug: string } | null {
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    for (let j = 0; j < topic.lessons.length; j++) {
      if (topic.slug === currentTopicSlug && topic.lessons[j].slug === currentLessonSlug) {
        if (j + 1 < topic.lessons.length) {
          return { topicSlug: topic.slug, lessonSlug: topic.lessons[j + 1].slug };
        }
        if (i + 1 < topics.length) {
          return { topicSlug: topics[i + 1].slug, lessonSlug: topics[i + 1].lessons[0].slug };
        }
        return null;
      }
    }
  }
  return null;
}
