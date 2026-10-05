(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52947,e=>{"use strict";let t=[{slug:"intro",title:"Python Introduction",icon:"rocket",description:"What is Python and why learn it?",level:"beginner",lessons:[{slug:"what-is-python",title:"What is Python?",description:"Learn what Python is and why it's so popular.",content:`Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and first released in 1991.

**Why Python?**
- **Easy to learn** - Simple, readable syntax
- **Versatile** - Web dev, data science, AI, automation, scripting
- **Huge community** - Massive ecosystem of libraries
- **High demand** - One of the most sought-after skills in tech

**Python is used by:**
- Instagram, Spotify, Netflix (backend services)
- NASA, ESA (scientific computing)
- Google, Amazon, Microsoft (AI/ML)
- Instagram handles 1+ billion users with Python/Django`,codeExample:`# Your first Python program
print("Hello, World!")

# Python can do math
print(2 + 3)

# Python can work with text
print("Python is awesome!".upper())
print("Hello".center(20, "-"))`,quiz:[{question:"Who created Python?",options:["James Gosling","Guido van Rossum","Bjarne Stroustrup","Dennis Ritchie"],correctIndex:1,explanation:"Python was created by Guido van Rossum and first released in 1991."},{question:'What does print("Hello") output?',options:["Hello",'"Hello"',"Error","Nothing"],correctIndex:0,explanation:"print() outputs the string without quotes: Hello"}]},{slug:"getting-started",title:"Getting Started",description:"How to install and run Python.",content:'**Installing Python:**\n\n1. Visit python.org/downloads\n2. Download the latest version (Python 3.x)\n3. Run the installer (check "Add Python to PATH" on Windows)\n4. Verify installation in terminal: `python --version`\n\n**Running Python:**\n\n- **Interactive mode**: Type `python` in terminal\n- **Script mode**: Create a `.py` file and run `python filename.py`\n- **Online**: Use this app\'s code editor!\n\n**Your first script:**\nCreate a file called `hello.py`:\n```python\nprint("Hello from a Python file!")\n```\nRun it: `python hello.py`',codeExample:`# Variables store data
name = "Alice"
age = 25
height = 5.6
is_student = True

# Print with f-strings
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} ft")
print(f"Student: {is_student}")`,quiz:[{question:"What is the output of: x = 5; print(x + 3)?",options:["53","8","5 + 3","Error"],correctIndex:1,explanation:"x = 5, so x + 3 = 8"},{question:"Which file extension is used for Python files?",options:[".python",".py",".pt",".pyt"],correctIndex:1,explanation:"Python files use the .py extension."}]}]},{slug:"syntax",title:"Python Syntax",icon:"code",description:"Learn Python syntax rules and basics.",level:"beginner",lessons:[{slug:"basic-syntax",title:"Basic Syntax",description:"Understanding Python's syntax rules.",content:`**Key Syntax Rules:**

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
\`\`\``,codeExample:`# This is a comment
name = "Python"  # inline comment

# Indentation defines blocks
for i in range(3):
    print(f"Count: {i}")
    if i == 1:
        print("  Middle item!")

# Multiple lines with backslash
total = 1 + 2 + 3 + \\
        4 + 5 + 6
print(f"Total: {total}")`,quiz:[{question:"How many spaces is standard Python indentation?",options:["2","4","8","1 tab"],correctIndex:1,explanation:"PEP 8 recommends 4 spaces for indentation."},{question:"What symbol starts a comment in Python?",options:["//","/*","#","--"],correctIndex:2,explanation:"Python uses # for comments."}]},{slug:"variables",title:"Variables",description:"Creating and using variables.",content:`**Variables** are containers for storing data values.

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
\`\`\``,codeExample:`# Different variable types
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
print(f"a={a}, b={b}")`,quiz:[{question:"Which is a valid Python variable name?",options:["2name","_name","my-name","class"],correctIndex:1,explanation:"_name is valid. Names can't start with numbers, contain hyphens, or be keywords."},{question:"What type is: x = 3.14?",options:["int","float","decimal","number"],correctIndex:1,explanation:"3.14 is a float (floating point number)."}]},{slug:"data-types",title:"Data Types",description:"Understanding Python's built-in data types.",content:'**Python\'s Core Data Types:**\n\n| Type | Example | Description |\n|------|---------|-------------|\n| `int` | `42` | Whole numbers |\n| `float` | `3.14` | Decimal numbers |\n| `str` | `"hello"` | Text strings |\n| `bool` | `True` | Boolean (True/False) |\n| `list` | `[1, 2, 3]` | Ordered, mutable collection |\n| `tuple` | `(1, 2, 3)` | Ordered, immutable collection |\n| `dict` | `{"a": 1}` | Key-value pairs |\n| `set` | `{1, 2, 3}` | Unordered unique items |\n| `None` | `None` | No value |\n\n**Type conversion:**\n```python\nint("42")     # string to int\nfloat("3.14") # string to float\nstr(42)       # int to string\nlist("abc")   # string to list [\'a\',\'b\',\'c\']\n```',codeExample:`# Exploring data types
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
print(f"Converted: {y}")  # 150`,quiz:[{question:"What is the type of [1, 2, 3]?",options:["tuple","list","array","set"],correctIndex:1,explanation:"[1, 2, 3] is a list (square brackets)."},{question:'What does int("42") return?',options:['"42"',"42 (string)","42 (integer)","Error"],correctIndex:2,explanation:"int() converts the string '42' to the integer 42."}]}]},{slug:"strings",title:"Python Strings",icon:"type",description:"Working with text data in Python.",level:"beginner",lessons:[{slug:"string-basics",title:"String Basics",description:"Creating and using strings.",content:`**Strings** are sequences of characters enclosed in quotes.

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
\`\`\``,codeExample:`# String creation
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
print("She said \\"Hello\\"")`,quiz:[{question:'What is len("Hello")?',options:["4","5","6","Error"],correctIndex:1,explanation:'"Hello" has 5 characters.'},{question:'What does "Hi" * 3 produce?',options:["Hi3","Hi Hi Hi","HiHiHi","Error"],correctIndex:2,explanation:'String repetition: "Hi" * 3 = "HiHiHi"'}]},{slug:"string-methods",title:"String Methods",description:"Built-in string methods.",content:'**Common String Methods:**\n\n| Method | Description | Example |\n|--------|-------------|---------|\n| `.upper()` | Uppercase | `"hello".upper()` → `"HELLO"` |\n| `.lower()` | Lowercase | `"HELLO".lower()` → `"hello"` |\n| `.strip()` | Remove whitespace | `" hi ".strip()` → `"hi"` |\n| `.split()` | Split into list | `"a,b,c".split(",")` → `["a","b","c"]` |\n| `.join()` | Join list to string | `"-".join(["a","b"])` → `"a-b"` |\n| `.replace()` | Replace text | `"hello".replace("l","r")` → `"herro"` |\n| `.find()` | Find substring | `"hello".find("ll")` → `2` |\n| `.count()` | Count occurrences | `"hello".count("l")` → `2` |\n| `.startswith()` | Starts with? | `"hello".startswith("he")` → `True` |\n| `.endswith()` | Ends with? | `"hello".endswith("lo")` → `True` |\n\n**Note:** Strings are **immutable** - methods return new strings.',codeExample:`text = "  Hello, World!  "

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
print("-".join(["2024", "01", "01"]))`,quiz:[{code:'text = "  Hello  "',question:"What does text.strip() return?",options:['"  Hello"','"Hello"','"Hello  "','"  Hello  "'],correctIndex:1,explanation:".strip() removes whitespace from both ends."},{question:'What does "a,b,c".split(",") return?',options:['"a,b,c"','["a","b","c"]','("a","b","c")','{"a","b","c"}'],correctIndex:1,explanation:".split(',') returns a list of substrings."}]},{slug:"string-formatting",title:"String Formatting",description:"Formatting strings with f-strings and more.",content:`**Three ways to format strings:**

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
\`\`\``,codeExample:`name = "Alice"
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
print(f"Percentage: {0.95:.0%}")`,quiz:[{code:"x = 3.14159",question:'What does f"{x:.2f}" produce?',options:["3.14","3.14159","3.1","3"],correctIndex:0,explanation:".2f formats to 2 decimal places: 3.14"},{question:"Which is the recommended modern way to format strings?",options:["% formatting",".format()","f-strings","string.concat()"],correctIndex:2,explanation:"f-strings (Python 3.6+) are the most readable and performant."}]}]},{slug:"operators",title:"Python Operators",icon:"calculator",description:"Arithmetic, comparison, and logical operators.",level:"beginner",lessons:[{slug:"arithmetic-operators",title:"Arithmetic Operators",description:"Math operations in Python.",content:"**Arithmetic Operators:**\n\n| Operator | Name | Example | Result |\n|----------|------|---------|--------|\n| `+` | Addition | `5 + 3` | `8` |\n| `-` | Subtraction | `5 - 3` | `2` |\n| `*` | Multiplication | `5 * 3` | `15` |\n| `/` | Division | `5 / 3` | `1.6667` |\n| `//` | Floor Division | `5 // 3` | `1` |\n| `%` | Modulus | `5 % 3` | `2` |\n| `**` | Exponent | `5 ** 3` | `125` |\n\n**Operator precedence** (PEMDAS):\n1. `**` (exponent)\n2. `+`, `-` (unary)\n3. `*`, `/`, `//`, `%`\n4. `+`, `-`",codeExample:`a, b = 17, 5

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
print(f"  Leftover: {100 % 3}")`,quiz:[{question:"What is 17 // 5?",options:["3.4","3","4","2"],correctIndex:1,explanation:"// is floor division - it rounds down to 3."},{question:"What is 17 % 5?",options:["3","2","3.4","175"],correctIndex:1,explanation:"% gives the remainder: 17 = 3*5 + 2, so remainder is 2."}]},{slug:"comparison-operators",title:"Comparison Operators",description:"Comparing values in Python.",content:"**Comparison Operators:**\n\n| Operator | Meaning | Example |\n|----------|---------|---------|\n| `==` | Equal to | `5 == 5` → `True` |\n| `!=` | Not equal | `5 != 3` → `True` |\n| `>` | Greater than | `5 > 3` → `True` |\n| `<` | Less than | `5 < 3` → `False` |\n| `>=` | Greater or equal | `5 >= 5` → `True` |\n| `<=` | Less or equal | `5 <= 3` → `False` |\n\n**Chained comparisons:**\n```python\nx = 5\nprint(1 < x < 10)    # True\nprint(1 < x < 3)     # False\n```",codeExample:`x, y = 10, 20

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
print(f'"abc" == "abc": {"abc" == "abc"}')`,quiz:[{question:"What is the result of: 5 != 5?",options:["True","False","5","Error"],correctIndex:1,explanation:"5 != 5 is False because 5 is equal to 5."},{question:"Which checks if two values are NOT equal?",options:["==","!=","<>","!="],correctIndex:1,explanation:"!= is the not-equal operator."}]},{slug:"logical-operators",title:"Logical Operators",description:"and, or, not operators.",content:"**Logical Operators:**\n\n| Operator | Description | Example |\n|----------|-------------|---------|\n| `and` | True if BOTH are true | `True and False` → `False` |\n| `or` | True if AT LEAST ONE is true | `True or False` → `True` |\n| `not` | Reverses the boolean | `not True` → `False` |\n\n**Truth table for `and`:**\n```\nTrue and True   → True\nTrue and False  → False\nFalse and True  → False\nFalse and False → False\n```\n\n**Truth table for `or`:**\n```\nTrue or True   → True\nTrue or False  → True\nFalse or True  → True\nFalse or False → False\n```\n\n**Short-circuit evaluation:**\nPython stops evaluating as soon as the result is determined.\n```python\nx = 0\nresult = x != 0 and 10 / x > 2  # Safe! Won't divide by zero\n```",codeExample:`age = 25
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
print(f"Name: {display}")`,quiz:[{question:"What is True and False?",options:["True","False","None","Error"],correctIndex:1,explanation:"and requires BOTH to be True. Since one is False, result is False."},{question:"What is not False or True?",options:["False","True","None","Error"],correctIndex:1,explanation:"not False = True, then True or True = True"}]}]},{slug:"control-flow",title:"Control Flow",icon:"git-branch",description:"If/else statements and loops.",level:"beginner",lessons:[{slug:"if-else",title:"If / Elif / Else",description:"Conditional statements.",content:`**If/Elif/Else** controls program flow based on conditions.

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
\`\`\``,codeExample:`temp = 28

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
print(f"{number} is {parity}")`,quiz:[{question:"How many elif blocks can an if statement have?",options:["1","2","Unlimited","0"],correctIndex:2,explanation:"You can have unlimited elif blocks, plus one else."},{question:"What does the _ case do in match?",options:["Matches everything","Default case","Error","Nothing"],correctIndex:1,explanation:"_ is the wildcard/default case in match statements."}]},{slug:"for-loops",title:"For Loops",description:"Iterating with for loops.",content:`**For loops** iterate over a sequence (list, string, range, etc.)

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
\`\`\``,codeExample:`# Basic iteration
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
    print()`,quiz:[{question:"What does range(1, 5) produce?",options:["1,2,3,4,5","1,2,3,4","0,1,2,3,4","1,2,3"],correctIndex:1,explanation:"range(1, 5) generates 1, 2, 3, 4 (stop is exclusive)."},{question:"What does enumerate() return?",options:["Just values","Just indices","Index-value pairs","Nothing"],correctIndex:2,explanation:"enumerate() returns (index, value) pairs."}]},{slug:"while-loops",title:"While Loops",description:"Looping with while.",content:`**While loops** repeat as long as a condition is True.

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
- \`continue\` - skips to next iteration`,codeExample:`# Basic while loop
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
print()`,quiz:[{question:"What happens if the while condition is never False?",options:["Runs once","Error","Infinite loop","Skips"],correctIndex:2,explanation:"If the condition never becomes False, it's an infinite loop."},{question:"What does 'continue' do in a loop?",options:["Exits loop","Skips to next iteration","Restarts program","Pauses"],correctIndex:1,explanation:"continue skips the rest of the current iteration and goes to the next one."}]}]},{slug:"lists",title:"Python Lists",icon:"list",description:"Working with ordered, mutable collections.",level:"beginner",lessons:[{slug:"list-basics",title:"List Basics",description:"Creating and accessing lists.",content:`**Lists** are ordered, mutable collections that can hold any type.

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
\`\`\``,codeExample:`# Creating lists
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
print(f"'red' in colors: {'red' in colors}")`,quiz:[{question:"Which method adds an element to the end of a list?",options:[".add()",".append()",".insert()",".push()"],correctIndex:1,explanation:".append() adds an element to the end of a list."},{question:"What does [1,2,3][1] return?",options:["1","2","3","[2]"],correctIndex:1,explanation:"Index 1 is the second element: 2."}]},{slug:"list-comprehension",title:"List Comprehension",description:"Creating lists concisely.",content:`**List comprehension** creates new lists from expressions.

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
- Don't use for complex logic - use regular loops instead`,codeExample:`# Basic list comprehensions
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
print(f"Labels: {labels}")`,quiz:[{question:"What does [x*2 for x in range(3)] produce?",options:["[2, 4, 6]","[0, 2, 4]","[1, 2, 3]","[0, 1, 2]"],correctIndex:1,explanation:"range(3) = 0,1,2, each multiplied by 2 = 0,2,4"},{question:"Where does the filter condition go?",options:["Before for","After for, before if","At the end","Before the expression"],correctIndex:1,explanation:"Syntax: [expr for item in iterable if condition]"}]}]},{slug:"functions",title:"Python Functions",icon:"function-square",description:"Creating reusable code blocks.",level:"intermediate",lessons:[{slug:"function-basics",title:"Function Basics",description:"Defining and calling functions.",content:'**Functions** are reusable blocks of code.\n\n```python\ndef function_name(parameters):\n    """Docstring - describes what the function does."""\n    # code block\n    return result\n```\n\n**Key concepts:**\n- `def` keyword starts function definition\n- Parameters are optional\n- `return` sends a value back (optional)\n- Without `return`, function returns `None`\n\n**Default parameters:**\n```python\ndef greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n```\n\n**Multiple return values:**\n```python\ndef get_stats(numbers):\n    return min(numbers), max(numbers), sum(numbers) / len(numbers)\n```',codeExample:`# Basic function
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
print_line("-")`,quiz:[{question:"What does a function return without a return statement?",options:["0","Empty string","None","Error"],correctIndex:2,explanation:"Functions without return return None."},{code:"def add(a, b=5):\n    return a + b\n\nprint(add(3))",question:"What does add(3) return?",options:["3","5","8","Error"],correctIndex:2,explanation:"b defaults to 5, so 3 + 5 = 8."}]},{slug:"lambda",title:"Lambda Functions",description:"Anonymous one-line functions.",content:`**Lambda** functions are small anonymous functions.

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
- For complex logic, use \`def\` instead`,codeExample:`# Lambda basics
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
print(f"\\nBy length: {by_length}")`,quiz:[{question:"What is a lambda function?",options:["Named function","Anonymous function","Class method","Built-in function"],correctIndex:1,explanation:"Lambda creates small anonymous (unnamed) functions."},{question:"Lambda functions can have multiple expressions?",options:["Yes, unlimited","Only one expression","Only with return","Only two"],correctIndex:1,explanation:"Lambda functions are limited to a single expression."}]}]},{slug:"dictionaries",title:"Python Dictionaries",icon:"book-open",description:"Key-value pair collections.",level:"beginner",lessons:[{slug:"dict-basics",title:"Dictionary Basics",description:"Creating and using dictionaries.",content:`**Dictionaries** store data in key-value pairs.

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
\`\`\``,codeExample:`# Creating and accessing
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
    print(f"  {key}: {value}")`,quiz:[{question:"What does .get() do vs direct access?",options:["Same thing","Returns None instead of error","Faster","Returns default"],correctIndex:1,explanation:".get() returns None (or default) instead of raising KeyError."},{question:"How do you iterate over key-value pairs?",options:[".keys()",".values()",".items()",".entries()"],correctIndex:2,explanation:".items() returns (key, value) tuples for iteration."}]}]},{slug:"oop",title:"Object-Oriented Python",icon:"box",description:"Classes, objects, and OOP concepts.",level:"intermediate",lessons:[{slug:"classes-basics",title:"Classes & Objects",description:"Creating classes and objects.",content:`**Classes** are blueprints for creating objects.

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
- Class attributes are shared`,codeExample:`class BankAccount:
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
print(acc.get_statement())`,quiz:[{question:"What does __init__ do?",options:["Destroys object","Initializes object","Creates class","Imports module"],correctIndex:1,explanation:"__init__ is the constructor that initializes a new object."},{question:"What does 'self' refer to?",options:["The class","The current instance","The parent class","Nothing"],correctIndex:1,explanation:"self refers to the current instance of the class."}]},{slug:"inheritance",title:"Inheritance",description:"Extending classes.",content:`**Inheritance** lets a class reuse code from another class.

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
- Multilevel: A → B → C`,codeExample:`class Shape:
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
print(f"Is Circle: {isinstance(c, Circle)}")`,quiz:[{question:"What does super().__init__() do?",options:["Creates new class","Calls parent constructor","Destroys object","Nothing"],correctIndex:1,explanation:"super().__init__() calls the parent class's constructor."},{question:"Can a child class override a parent method?",options:["No, never","Yes, by redefining it","Only with permission","Only static methods"],correctIndex:1,explanation:"Child classes override parent methods by redefining them."}]}]},{slug:"error-handling",title:"Error Handling",icon:"alert-triangle",description:"Try/except and exception handling.",level:"intermediate",lessons:[{slug:"try-except",title:"Try / Except",description:"Handling errors gracefully.",content:`**Try/Except** catches and handles errors.

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
\`\`\``,codeExample:`# Basic try/except
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
        print(f"  Converted: {result}")`,quiz:[{question:"When does the 'else' block in try/except run?",options:["Always","Only on error","Only if no error","Never"],correctIndex:2,explanation:"The else block runs only if no exception was raised."},{question:"When does 'finally' run?",options:["Only on error","Only if no error","Always","Never"],correctIndex:2,explanation:"finally always runs, whether or not an exception occurred."}]}]},{slug:"file-handling",title:"File Handling",icon:"file-text",description:"Reading and writing files.",level:"intermediate",lessons:[{slug:"file-operations",title:"File Operations",description:"Working with files in Python.",content:`**File modes:**
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
\`\`\``,codeExample:`import json

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
        print(f"{s['name']}: {s['grade']}")`,quiz:[{question:"Why use 'with' when opening files?",options:["It's faster","Auto-closes the file","Required syntax","None of the above"],correctIndex:1,explanation:"'with' ensures the file is automatically closed, even if an error occurs."},{question:"What mode overwrites an existing file?",options:['"r"','"a"','"w"','"x"'],correctIndex:2,explanation:'"w" opens for writing and truncates (overwrites) the file.'}]}]},{slug:"modules",title:"Python Modules",icon:"puzzle",description:"Importing and using modules.",level:"intermediate",lessons:[{slug:"importing-modules",title:"Importing Modules",description:"Using built-in and external modules.",content:`**Modules** are Python files containing functions/classes.

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
\`\`\``,codeExample:`import math
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
print(f"  Tomorrow: {tomorrow.strftime('%A')}")`,quiz:[{question:"What's the difference between 'import math' and 'from math import sqrt'?",options:["Same thing","First uses m.sqrt(), second uses sqrt()","First is faster","Second imports all"],correctIndex:1,explanation:"'import math' requires math.sqrt(), 'from math import sqrt' allows sqrt() directly."},{question:"Which module handles date and time?",options:["time","datetime","calendar","Both time and datetime"],correctIndex:3,explanation:"Both 'time' and 'datetime' modules handle dates and times, but datetime is more feature-rich."}]}]}],n=[{slug:"intro",title:"JavaScript Introduction",icon:"rocket",description:"What JavaScript is, where it runs, and why automation testers live in it.",level:"beginner",lessons:[{slug:"what-is-javascript",title:"What is JavaScript?",description:"The one language the web is written in."},{slug:"why-javascript-for-automation",title:"Why JavaScript for Automation Testing",description:"Where JS wins in test automation, and where it does not."},{slug:"how-javascript-runs",title:"How JavaScript Actually Runs",description:"Engine, interpreter vs compiler, and what 'just in time' means."},{slug:"setting-up-environment",title:"Setting Up Your JavaScript Environment",description:"Node, VS Code, running your first file, the console."}]},{slug:"basics",title:"JavaScript Basics",icon:"code",description:"Variables, values, types, and the operators that move data around.",level:"beginner",lessons:[{slug:"variables",title:"Variables: let & const",description:"Storing values, and why var is a trap."},{slug:"data-types",title:"Data Types & typeof",description:"The 7 primitives and the one object you cannot trust typeof on."},{slug:"operators",title:"Operators",description:"Arithmetic, comparison, logical, and the assignment shortcuts."},{slug:"type-conversions",title:"Type Conversions",description:"Coercion: how JavaScript quietly changes your types."}]},{slug:"control-flow",title:"Control Flow & Loops",icon:"git-branch",description:"Making decisions and repeating work without copy-paste.",level:"beginner",lessons:[{slug:"if-else",title:"Conditional Logic",description:"Branching with if, else if, else, and the ternary."},{slug:"switch-case",title:"switch & Matching Values",description:"When a chain of ifs becomes a switch."},{slug:"loops-iteration",title:"Loops & Iteration",description:"for, while, do-while, and choosing the right one."},{slug:"loop-control",title:"Breaking, Continuing & Labels",description:"break, continue, return, and labelled loops."}]},{slug:"strings",title:"Strings & Template Literals",icon:"type",description:"Working with text: searching, slicing, building and formatting.",level:"beginner",lessons:[{slug:"string-basics",title:"String Basics",description:"Creating strings and reading them like arrays."},{slug:"string-methods",title:"String Methods",description:"slice, split, replace, includes, padStart and friends."},{slug:"template-literals",title:"Template Literals",description:"Backticks, interpolation, and multi-line strings."},{slug:"string-performance",title:"String Performance & Immutability",description:"Why += in a loop is slow, and what to do instead."}]},{slug:"functions",title:"JavaScript Functions",icon:"function-square",description:"Reusable blocks of logic, and the rules that decide what they can see.",level:"beginner",lessons:[{slug:"function-basics",title:"Function Basics",description:"Declaring, calling, parameters and return values."},{slug:"arrow-functions",title:"Arrow Functions",description:"The short syntax, and the one thing it changes."},{slug:"arguments-and-params",title:"Arguments, Defaults & Rest",description:"Handling a variable or unknown number of inputs."},{slug:"lexical-scope-closures",title:"Scope & Closures",description:"Functions that remember where they were born."},{slug:"callbacks",title:"Callbacks",description:"Passing behaviour into a function so it can call you back."}]},{slug:"arrays",title:"JavaScript Arrays",icon:"list",description:"Ordered lists, and the methods that make them painless.",level:"beginner",lessons:[{slug:"array-basics",title:"Array Basics",description:"Creating, indexing, length, and common gotchas."},{slug:"array-methods",title:"Reading Arrays: at, find, some, every",description:"The search and check methods you reach for daily."},{slug:"advanced-arrays",title:"map, filter & Transformations",description:"Building new arrays instead of mutating old ones."},{slug:"reduce",title:"reduce & Grouping",description:"Folding an array into one value, plus groupBy patterns."},{slug:"array-flattening",title:"Flattening, Sorting & Splicing",description:"flat, flatMap, sort pitfalls, and splice vs slice."}]},{slug:"objects",title:"Objects & ES6 Features",icon:"braces",description:"Keyed collections, destructuring, and safe access.",level:"beginner",lessons:[{slug:"object-basics",title:"Object Basics",description:"Keys, values, nesting, copying and merging."},{slug:"object-methods",title:"Object Methods: keys, values, entries",description:"Turning an object into something you can loop over."},{slug:"destructuring",title:"Destructuring",description:"Pulling values out of objects and arrays in one line."},{slug:"optional-chaining-nullish",title:"Optional Chaining & Nullish Coalescing",description:"Safe access into data that might be missing."},{slug:"map-set",title:"Map & Set",description:"Collections with real keys and no duplicate values."},{slug:"arrays-of-objects",title:"Arrays of Objects",description:"The most common real data shape, and how to query it."}]},{slug:"async",title:"Async JavaScript",icon:"loader",description:"Waiting for things without freezing the page or your test run.",level:"intermediate",lessons:[{slug:"async-basics",title:"Asynchronous Basics",description:"Sync vs async, and why blocking is expensive."},{slug:"promises",title:"Promises",description:"A value that is not ready yet, with three outcomes."},{slug:"promise-composition",title:"Promise Composition",description:"all, allSettled, race, any, and chaining with then/catch."},{slug:"async-await",title:"async / await",description:"Writing async code that reads like sync code."},{slug:"fetch-apis",title:"fetch & Working with Real APIs",description:"Making requests, reading responses, and handling errors."},{slug:"event-loop",title:"The Event Loop",description:"Microtasks, macrotasks, and the output-order puzzles."}]},{slug:"classes",title:"Classes & Prototypes",icon:"box",description:"Blueprints, inheritance, and the prototype chain underneath it all.",level:"intermediate",lessons:[{slug:"class-basics",title:"Class Basics",description:"constructor, methods, static, and private fields."},{slug:"class-inheritance",title:"Class Inheritance",description:"extends, super, and overriding properly."},{slug:"prototypal-inheritance",title:"Prototypal Inheritance",description:"The mechanism that makes classes work."},{slug:"composition-over-inheritance",title:"Composition over Inheritance",description:"Mixins, factory functions, and avoiding deep hierarchies."},{slug:"json",title:"Working with JSON",description:"parse, stringify, replacers, and safe API payloads."}]},{slug:"dom",title:"DOM & Browser APIs",icon:"globe",description:"Reading and changing a live web page from JavaScript.",level:"intermediate",lessons:[{slug:"dom-basics",title:"DOM Basics",description:"The DOM tree, nodes, and creating elements."},{slug:"dom-selection",title:"Selecting Elements",description:"querySelector, closest, and resilient selector strategy."},{slug:"dom-manipulation",title:"Changing the DOM",description:"textContent, classList, attributes, createDocumentFragment."},{slug:"events",title:"Events",description:"Listeners, the event object, delegation, and bubbling."},{slug:"forms",title:"Forms",description:"Reading input values, validation, and submit events."},{slug:"window-object",title:"Window Object",description:"Timers, location, history, and sizing the viewport."}]},{slug:"modules",title:"Modules & Tooling",icon:"package",description:"Splitting code into files and shipping it to production.",level:"intermediate",lessons:[{slug:"modules",title:"ES Modules",description:"import, export, default, and named exports."},{slug:"dynamic-imports",title:"Dynamic Imports",description:"Loading code on demand with import()."},{slug:"package-managers",title:"Package Managers",description:"npm, package.json, semver, scripts, and lockfiles."},{slug:"module-bundlers",title:"Module Bundlers",description:"Bundlers, transpilers, and polyfills explained."},{slug:"ecmascript",title:"ECMAScript Evolution",description:"From ES5 to ES2023 and what each edition added."}]},{slug:"scope-hoisting",title:"Scope, Hoisting & this",icon:"layers",description:"The rules that decide what a piece of code can actually see.",level:"advanced",lessons:[{slug:"scope-rules",title:"Scope Rules",description:"Global, function, block, and module scope."},{slug:"hoisting",title:"Hoisting in Detail",description:"What moves to the top, what does not, and why."},{slug:"tdz",title:"Temporal Dead Zone",description:"The gap where let and const exist but cannot be read."},{slug:"this-binding",title:"How this Gets Its Value",description:"The four binding rules, in priority order."}]},{slug:"error-handling",title:"Error Handling & Debugging",icon:"alert-triangle",description:"Failing loudly, recovering gracefully, and finding the real cause.",level:"advanced",lessons:[{slug:"try-catch",title:"try / catch / finally",description:"Catching errors, re-throwing, and cleanup."},{slug:"error-types",title:"Built-in & Custom Errors",description:"TypeError vs RangeError vs your own Error subclass."},{slug:"async-errors",title:"Error Handling in Async Code",description:"Why a missing await swallows your errors."},{slug:"debugging",title:"Debugging Techniques",description:"console tools, breakpoints, stack traces, and narrowing bugs."}]},{slug:"iterators",title:"Iterators & Generators",icon:"repeat",description:"How for...of actually works, and how to build your own iterables.",level:"advanced",lessons:[{slug:"iterator-protocol",title:"The Iterator Protocol",description:"next(), done, and Symbol.iterator."},{slug:"generators",title:"Generator Functions",description:"function*, yield, and pausing on demand."},{slug:"custom-iterables",title:"Custom Iterables",description:"Making your own objects usable with for...of and spread."}]},{slug:"storage-apis",title:"Storage & Browser APIs",icon:"database",description:"Persisting data and talking to the browser outside the page.",level:"advanced",lessons:[{slug:"storage",title:"localStorage & sessionStorage",description:"Key-value persistence, quotas, and JSON."},{slug:"cookies",title:"Cookies & document APIs",description:"Reading and writing cookies and the document."},{slug:"timers-intervals",title:"Timers, Intervals & Debounce",description:"setTimeout, setInterval, and waiting without racing."}]},{slug:"testing",title:"Testing JavaScript",icon:"flask-conical",description:"How the industry actually proves JavaScript works.",level:"advanced",lessons:[{slug:"unit-testing",title:"Unit Testing with Jest",description:"describe, it, expect, and the arrange-act-assert shape."},{slug:"test-doubles",title:"Spies, Mocks & Stubs",description:"Isolating units without faking everything."},{slug:"e2e-testing",title:"End-to-End Testing",description:"Playwright and Cypress patterns for real user journeys."},{slug:"test-data-patterns",title:"Test Data Patterns",description:"Fixtures, builders, factories, and seeding."}]},{slug:"performance-security",title:"Performance & Security",icon:"shield",description:"Making code fast, and keeping it from being exploited.",level:"advanced",lessons:[{slug:"performance-basics",title:"Performance Basics",description:"Measuring first, then optimising the right thing."},{slug:"browser-rendering",title:"The Rendering Pipeline",description:"Layout, paint, reflow, and requestAnimationFrame."},{slug:"security",title:"Web Security for Testers",description:"XSS, CSRF, prototype pollution, and safe test code."}]},{slug:"advanced",title:"Advanced & Interview Prep",icon:"brain",description:"Regex, legacy JS, and the questions that decide your offer.",level:"advanced",lessons:[{slug:"regex-intro",title:"Intro to Regular Expressions",description:"Matching, groups, and the flags you actually need."},{slug:"legacy-var",title:"Legacy var & Hoisting",description:"Old JavaScript you still meet in old codebases."},{slug:"legacy-topics",title:"Legacy Topics",description:"IIFEs, ==, attachEvent, and other fossils."},{slug:"interview-prep",title:"Interview Questions",description:"The cross-topic questions that come up again and again."}]}];n.flatMap(e=>e.lessons.map(t=>`${e.slug}/${t.slug}`));let o=[{slug:"intro",title:"JavaScript Introduction",icon:"rocket",description:"What JavaScript is, where it runs, and why automation testers live in it.",level:"beginner",lessons:[{slug:"what-is-javascript",title:"What is JavaScript?",description:"The one language the web is written in.",content:`JavaScript is the programming language the web is written in. A web page is built from HTML, which holds the text and the buttons. CSS decides how it looks. JavaScript is what makes it react. It is the layer that hears a click, fetches fresh data and updates the page without asking the server for a whole new copy. If you spend your days automating the web, you are automating the world JavaScript runs in. So it is worth knowing what it is before you learn to drive it.

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
- A Node script that reads a JSON fixture and posts it to an API`,codeExample:`// A first look at the values JavaScript works with.
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
console.log(summary);`,quiz:[{question:"Which popular automation frameworks use JavaScript?",options:["Playwright and Cypress","Pytest and Selenium","JUnit and PHPUnit","RSpec and Cucumber"],correctIndex:0,explanation:"Playwright, Cypress, and WebDriverIO are all JavaScript-based automation tools."},{question:"JavaScript is standardized under which name?",options:["Java","TypeScript","ECMAScript","JScript"],correctIndex:2,explanation:"JavaScript follows the ECMAScript (ES) standard."}]},{slug:"why-javascript-for-automation",title:"Why JavaScript for Automation Testing",description:"Where JS wins in test automation, and where it does not.",content:`Automation means a machine repeats the checks you would otherwise do by hand. JavaScript is the language most of the modern web automation tools are written in. Learn it well and you can read a test, fix a test and write a test in one language. You never need to translate your thinking into a second language halfway through a debugging session.

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
- A test data builder that returns a fresh object per test, so tests cannot affect each other`,codeExample:`// What an automation test "feels like" in plain JavaScript.
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
loginTest();`,quiz:[{question:"Which of these is a JavaScript UI testing framework?",options:["Cypress","Playwright","WebdriverIO","Jest"],correctIndex:1,explanation:"Playwright is a popular JavaScript UI automation framework."},{question:"What concept is used most in JS automation tests?",options:["Threads","async/await","Pointers","Goto statements"],correctIndex:1,explanation:"Automation tests constantly use async/await to wait for pages and elements."}]},{slug:"how-javascript-runs",title:"How JavaScript Actually Runs",description:"Engine, interpreter vs compiler, and what 'just in time' means.",content:`Your JavaScript file is just text on disk. Nothing happens until an engine reads it. The engine is the program that actually executes your code. V8 is the engine inside Chrome and inside Node.js. SpiderMonkey runs Firefox. JavaScriptCore runs Safari. Every one of those places runs your file the same way, which is why a Playwright test behaves the same on your machine and on CI. The short version is this: the engine reads your file, checks the syntax, then runs it. It runs it fast because it compiles the busy parts while your program runs. It runs it on a single thread, and it never interrupts you halfway through a line.

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
- A fake timer in a unit test, which works precisely because the queue is under the engine's control`,codeExample:`// One thread, one job at a time, and two queues.
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
console.log("6 - sync sum finished: " + total);`},{slug:"setting-up-environment",title:"Setting Up Your JavaScript Environment",description:"Node, VS Code, running your first file, the console.",content:`You need three things before you write your first test: Node.js on your machine, a text editor, and a folder for the project. That is the whole setup. Everything else is optional. Get these three in place and every other tool in this course will install itself.

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
- Running npm install globally instead of inside the project, which breaks on a new machine`,codeExample:`// No installs needed for this one. It builds a tiny pretend project
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

runSuite();`}]},{slug:"basics",title:"JavaScript Basics",icon:"code",description:"Variables, values, types, and the operators that move data around.",level:"beginner",lessons:[{slug:"variables",title:"Variables: let & const",description:"Storing values, and why var is a trap.",content:`A variable is a name you give to a value so you can use it later. Picture a labelled box in a storeroom. The box holds the value. The label is the name. You write the name to get the value back.

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
- A config file that exports one const BASE_URL, and every spec imports that single name`,codeExample:`// let, const and var side by side. Run this and read the output.
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
console.log("found is", found, "| typeof", typeof found);`,quiz:[{question:"Which keyword should you use by default for a value that never changes?",options:["var","let","const","static"],correctIndex:2,explanation:"const is the default choice. Use let only when you need to reassign."},{question:"What happens when you reassign a const variable?",options:["It updates silently","It throws a TypeError","It creates a copy","Nothing"],correctIndex:1,explanation:"Reassigning a const throws a TypeError."}]},{slug:"data-types",title:"Data Types & typeof",description:"The 7 primitives and the one object you cannot trust typeof on.",content:`Every value in JavaScript belongs to one of two families. A primitive is a single value with no extra parts, like the number 7 or the text 'login'. An object is a container that can hold other values, like { name: 'Ana' } or [1, 2, 3]. There are exactly seven primitive types. Everything else you meet is an object.

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
- A response helper that checks Array.isArray before it reads .length on a body`,codeExample:`// The seven primitives, and what typeof says about each one.
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
console.log("number drops it:", 9007199254740993 === 9007199254740992);`,quiz:[{question:"What is the result of typeof null?",options:['"null"','"undefined"','"object"','"number"'],correctIndex:2,explanation:"A long-standing JavaScript bug: typeof null returns 'object'."},{question:"Which type represents an intentional empty value?",options:["undefined","null","NaN","void"],correctIndex:1,explanation:"null is intentionally 'no value'. undefined means 'not assigned'."}]},{slug:"operators",title:"Operators",description:"Arithmetic, comparison, logical, and the assignment shortcuts.",content:`An operator is a symbol that takes values and produces a result. The plus in 2 + 3 is an operator. In a test script you spend most of your time on comparison operators, because every assertion is one underneath. Getting them right removes a whole family of confusing failures.

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
- && binds tighter than ||, so a && b || c is read as (a && b) || c`,codeExample:`// Arithmetic, the modulo, and the difference between prefix and postfix.
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
console.log("1 < 2 < 3 =", 1 < 2 < 3);`,quiz:[{question:"Why avoid == (loose equality)?",options:["It's slow","It coerces types, causing surprise matches","It's deprecated","It only works on numbers"],correctIndex:1,explanation:"== converts types first, so '10' == 10 is true. === prevents that."},{question:"Which are falsy values?",options:["0, '', nan, false","0, '', null, undefined, NaN, false","'0', ' ', null","Only false"],correctIndex:1,explanation:"Those six values are falsy; everything else is truthy."}]},{slug:"type-conversions",title:"Type Conversions",description:"Coercion: how JavaScript quietly changes your types.",content:`JavaScript converts between types constantly. Sometimes you ask it to, and sometimes it does it behind your back. The automatic kind is called implicit conversion, and its nickname is coercion. The kind you write on purpose is explicit conversion. Coercion causes most confusing test failures.

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
- Convert inside the assertion, not the locator, so the expected value stays readable`,codeExample:`// Implicit conversion happens on its own. Explicit is the safe version.
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
console.log("after converting:", parseInt(cartText, 10) === expected);`,quiz:[{question:"What is '10' < '9' when both are strings?",options:["false (9 < 10 numerically)","true (character-by-character)","NaN","Error"],correctIndex:1,explanation:"Relational comparison on strings compares character codes: '1' vs '9'."},{question:"How do you safely turn '12.5 USD' into a number?",options:["Number('12.5 USD')","parseFloat('12.5 USD')","'12.5 USD' + 0","Number.parseInt it twice"],correctIndex:1,explanation:"parseFloat tolerates trailing text; Number would give NaN."}]}]},{slug:"control-flow",title:"Control Flow & Loops",icon:"git-branch",description:"Making decisions and repeating work without copy-paste.",level:"beginner",lessons:[{slug:"if-else",title:"Conditional Logic",description:"Branching with if, else if, else, and the ternary.",content:`An if statement runs a block of code only when a condition is true. It is the same idea as an assertion in your tests. If the actual value matches what you expected, the test passes. If it does not, the test fails. JavaScript makes that decision for you, one comparison at a time.

**The basic shape**
- if (condition) { } runs the block when the condition is truthy.
- if (condition) { } else { } runs the first block, or the second one when the condition is falsy.
- if (condition) { } else if (other) { } else { } checks several conditions in order.
- Only the first matching block runs. Every block after it is skipped entirely.
- Curly braces are not required by the syntax, but always use them. They make the block obvious.
- There is no limit on how many else if branches you can chain. Keep the chain short enough to read.

**Assignment is not comparison**
- total = 5 puts the number 5 into the variable total. That is assignment.
- total === 5 asks a question: are these two exactly the same? That is comparison.
- total == 5 is loose comparison. It converts types first, so "5" == 5 is true.
- total === 5 is strict comparison. It never converts, so "5" === 5 is false.
- Use === for almost everything. Loose comparison is a source of bugs, not a shortcut.
- The classic trap is writing if (x = 5) by mistake. That assigns 5 to x. The value 5 is truthy, so the block always runs and your condition silently stops testing anything.

**A condition only has to be truthy**
- JavaScript does not force you to write true or false inside the parentheses.
- A truthy value is treated as true. A falsy value is treated as false.
- The falsy list is short: false, 0, -0, 0n, the empty string, null, undefined and NaN.
- Everything else is truthy. That includes the string "false" and the empty array.
- So if (username) really asks "is username something other than an empty string?"
- And if (items.length) asks "are there any items?" because the length 0 is falsy.
- The danger is if (count) when count can legitimately be zero. Write if (count > 0) instead.

**Combining conditions**
- && means and. Both sides must be truthy for the whole thing to be truthy.
- || means or. One truthy side is enough for the whole thing to be truthy.
- ! flips a value, so !isLoggedIn means the user is not logged in.
- Groups are read left to right, so add parentheses when you want the meaning to be clear.
- One line beats nesting: if (isLoggedIn && role === "admin") is easier to read than two nested ifs.

**The ternary operator**
- condition ? valueIfTrue : valueIfFalse picks one of two values as a single expression.
- It returns a value, which makes it handy for assigning to a variable or returning from a function.
- Use it when both branches are short and simple, like picking PASS or FAIL.
- Do not use it for side effects or for long logic. A plain if reads better there.

**Nesting and guard clauses**
- Nesting means an if inside another if. Two levels is fine. Four is a smell.
- A guard clause checks a bad case early and returns straight away.
- The guard clause version keeps the main path at the top level, so the reader walks it top to bottom.
- Guard clauses flatten the code. That is why most production code prefers them.

**Where you meet this in real work**
- Every assertion is a conditional. Actual equal to expected means PASS, otherwise FAIL.
- Checking the response status before you read the body is a guard clause.
- Guarding with if (element) before you click stops a null reference error in a flaky test.
- Guard against an empty array before you index into the first item.`,codeExample:`// Strict vs loose comparison
const expectedStatus = 200;
const actualStatus = 200;
console.log("strict match:", actualStatus === expectedStatus);
console.log("loose 200 vs '200':", actualStatus == "200");

// Assignment inside a condition always runs, because 200 is truthy
let assigned;
if (assigned = 200) console.log("assignment ran the block, it never tested");

// The falsy values, and the 0 trap
const retries = 0;
console.log("Boolean(retries) is:", Boolean(retries));
console.log("retries > 0 is:", retries > 0);
console.log("the string 'false' is truthy:", Boolean("false"));

// Combining conditions with && and ||. Note that && stops as soon as it can
const user = { name: "Ana", role: "admin", token: "" };
console.log("canDelete:", Boolean(user.token && user.role === "admin"));
console.log("is admin:", user.role === "admin" || user.token === "boot");

// Guard clauses beat nesting: check the bad case and return
function describe(response) {
  if (!response) return "no response yet";
  if (response.status !== 200) return "failed with status " + response.status;
  return "ok, " + response.body.length + " items";
}
console.log(describe(null));
console.log(describe({ status: 500, body: [] }));
console.log(describe({ status: 200, body: ["a", "b"] }));

// The ternary for one small expression
const score = 85;
console.log("result:", score >= 70 ? "PASS" : "FAIL");`,quiz:[{question:"What happens if a switch case is missing break?",options:["Compiler error","Code falls through to next case","It stops","It returns undefined"],correctIndex:1,explanation:"Without break, execution falls through to the next case."},{question:'What does (10 > 5) ? "yes" : "no" evaluate to?',options:["yes","no","10 > 5","true"],correctIndex:0,explanation:"The ternary returns 'yes' because 10 > 5 is true."}]},{slug:"switch-case",title:"switch & Matching Values",description:"When a chain of ifs becomes a switch.",content:`A switch runs one of several blocks based on a single value. It looks tidier than a long else if chain when you keep comparing the same variable against a fixed list of exact values. It is not a general purpose branching tool.

**How switch decides**
- switch (value) { ... } takes one value to test.
- Each case writes one value to compare it against.
- The comparison is strict equality, the same as ===.
- So case "chrome": matches only the exact string "chrome". The string "Chrome" does not match.
- And case 200: matches only the number 200. The string "200" does not match.
- JavaScript checks the cases from top to bottom and takes the first one that matches.
- That is why the order of your cases matters. Move a broad case up and it swallows the rest.

**Why every case needs break**
- break tells JavaScript to stop and leave the switch.
- Without it, execution keeps going into the body of the next case. That is called fall-through.
- Fall-through is only a bug when the next case was never meant to run.
- Most teams add break to every case anyway, even when the next case ends the block.

**Several cases, one body**
- You can stack case labels with nothing between them.
- case "GET": case "POST": then one shared body runs for either value.
- This is the one place fall-through is used on purpose.
- It is handy when a method gets the same reply, like any read method returning 200.

**Strings, numbers and default**
- default runs when nothing matched. It has no condition of its own.
- Put default last, or in the middle with a break, because it reads more clearly there.
- default is optional. Without it, a switch that matches nothing simply finishes quietly.
- If you relied on the switch to produce a value, you get undefined instead.
- Strings work fine in a switch, but remember they are case sensitive.

**What switch cannot do**
- Case values must be exact. You cannot write case n > 5 or case age >= 18.
- Ranges and comparisons need if and else. A switch is only for exact matches.
- Case labels must also be constants. A value computed at runtime is not allowed.

**switch or a lookup object**
- A lookup object maps a key straight to a value, like { chrome: "chromium" }.
- It is better when you only need a value and no block of statements.
- It is worse when each branch needs several lines of logic.
- Use a Map instead when the keys are not strings, such as numbers or objects.

**Two sharp edges**
- A case is not a real block. Every case shares one scope with the whole switch.
- So you cannot declare the same let twice in two cases. Put braces around the body to fix it.
- Also remember that a switch statement never produces a value. Assign a result or use return.`,codeExample:`// switch compares with === (strict equality)
const browser = "chrome";
switch (browser) {
  case "chrome": console.log("Running on Chrome"); break;
  case "firefox": console.log("Running on Firefox"); break;
  default: console.log("Unknown browser:", browser);
}

// No break: fall-through runs the next body too
const code = 404;
switch (code) {
  case 400: console.log("bad request");
  case 404: console.log("not found");
  case 500: console.log("this runs too, that is fall-through");
  default: console.log("caught by default");
}

// Several cases sharing one body
const method = "DELETE";
switch (method) {
  case "GET": case "HEAD": case "DELETE":
    console.log("safe to retry:", method);
    break;
  case "POST": case "PATCH":
    console.log("do NOT retry automatically:", method);
    break;
}

// No match and no default: the switch just ends quietly
switch ("PUT") {
  case "GET": console.log("never printed"); break;
}
console.log("unmatched switch finished without printing");

// A lookup object wins when you only need a value
const driverFor = { chrome: "chromedriver", firefox: "geckodriver" };
console.log("driver:", driverFor[browser]);
console.log("driver for edge:", driverFor["edge"]);

// Case bodies share one scope, so braces let you redeclare let
const group = "b";
switch (group) {
  case "b": {
    const label = "beta users";
    console.log(label);
    break;
  }
  default: console.log("other group");
}`},{slug:"loops-iteration",title:"Loops & Iteration",description:"for, while, do-while, and choosing the right one.",content:`A loop runs the same block of code again and again. JavaScript has four loop forms and each one fits a different situation. Picking the wrong form is the usual reason a loop becomes hard to follow.

**The four loop types**
- for runs a block a set number of times, usually counted by a counter.
- while runs a block as long as a condition stays true. It makes no promise about how many times.
- do while runs the block once and then repeats it like a while.
- for of walks the values of an array, or the characters of a string.
- for in walks the keys of an object.

**for with all three parts**
- for (let i = 0; i < 5; i++) has three parts separated by semicolons.
- The first part sets up the counter once. Here i starts at 0.
- The second part is the test. It runs before every pass, and a falsy test ends the loop.
- The third part runs after every pass. Here i goes up by one.
- The counter is scoped to the loop, so it no longer exists once the loop ends.

**while and do while**
- while (hasMoreWork) checks first. If the condition is falsy the body never runs at all.
- do { } while (x) runs the body first and checks the condition afterwards.
- That means do while always runs at least once. It suits menus and first-run setup.
- Never write a while loop without a line that changes the condition. It would run forever.

**for of walks values**
- for (const item of items) gives you the item itself, not its position.
- It also works on strings, where each value is a single character.
- It works on anything iterable, including Set and Map.
- Prefer for of when you do not need the index. It is the clearest loop in modern JavaScript.

**for in walks keys, and its trap**
- for (const key in object) gives you key names, as strings.
- It also walks the prototype chain, so it can hand you inherited keys you never created.
- Use Object.keys(object) when you want only the keys the object owns.
- Object.hasOwn(object, key) is the check to use if you must use for in.
- for in over an array gives you index strings like "0" and "1", not the values.

**Indexes, keys and values**
- Array.prototype.entries() hands you pairs of index and value.
- Array.from(items, mapper) builds a new array by running a function on each item.
- Array.from is also how you turn a string or a Set into a real array.

**Speed and safety**
- forEach is fine for reading, but it cannot break early and it returns nothing useful.
- for of is the better choice when you need break, or when the array is large.
- The classic off-by-one: looping while i <= items.length runs one time too many and reads undefined.
- Never change an array while looping over it. Copy it first with a spread like [...items].
- To leave two nested loops, set a flag, break out of both, then check the flag afterwards.`,codeExample:`// for with all three parts: set up, test, update
for (let i = 1; i <= 3; i++) {
  console.log("step", i);
}

// while repeats while the condition stays true
const queue = ["login", "search"];
while (queue.length > 0) {
  console.log("running:", queue.shift());
}

// do while runs at least once, even when the condition starts false
let tries = 0;
do {
  console.log("do while pass", tries + 1);
  tries++;
} while (tries < 2);

// for of hands you the values themselves
const steps = ["login", "add to cart", "checkout"];
for (const step of steps) console.log("for of:", step);

// for of over a string hands you one character at a time
for (const ch of "abc") console.log("char:", ch);

// Object.keys gives own keys only, which is the safe version of for in
const user = { name: "Ana", role: "admin" };
for (const key of Object.keys(user)) console.log("own key:", key);

// entries() gives the index and the value together
for (const [i, step] of steps.entries()) console.log("pair:", i, step);

// Array.from with a mapper builds a new array
console.log("mapped:", Array.from([1, 2, 3], (n) => n * 10));`,quiz:[{question:"Which loop is best for iterating over array values in modern JS?",options:["for (;;)","for...of","while(1)","do...while"],correctIndex:1,explanation:"for...of iterates array/string values directly and is the readable modern choice."},{question:"What does continue do inside a loop?",options:["Exits the loop","Skips to the next iteration","Restarts the loop","Pauses for 1 second"],correctIndex:1,explanation:"continue skips the rest of the current iteration and moves to the next one."}]},{slug:"loop-control",title:"Breaking, Continuing & Labels",description:"break, continue, return, and labelled loops.",content:`Once a loop is running, you sometimes need to change your mind part way through. Three keywords do that. They are break, continue and return, and each one leaves a different number of layers.

**break leaves the loop**
- break stops the nearest loop or switch that contains it and moves to the line after.
- The rest of the current pass is skipped too.
- Use break when you have the answer and there is nothing left worth checking.
- break inside a switch leaves the switch. It does not touch a loop around it.
- If you forget the break, the case above it will run your code first. That is the fall-through bug.

**continue skips one pass**
- continue jumps straight to the next pass and skips the rest of the current one.
- So it works as a filter. Skip the items you do not care about, keep going.
- In a for loop, the update step still runs before the next pass starts.
- In a while loop, continue jumps to the condition check.

**return leaves the function**
- return sends a value back to the caller and ends the function immediately.
- Every loop inside that function ends too, because the function is over.
- A finally block still runs after a return. It runs on every exit path.
- That is why cleanup belongs inside finally, not on the line after the loop.

**Labels reach the outer loop**
- A label is a name you put in front of a loop, like outer: for (...) { }
- break outer; leaves the loop with that label, even from two levels deep.
- continue outer; skips to the next pass of that outer loop.
- Labels are the only way to control a loop that is not the closest one. Use them sparingly.

**When continue is worse than an if**
- Three or four continue statements in one loop make the reader work too hard.
- An if wrapped around the code you actually want keeps the happy path at the top.
- In a for loop, a continue that runs before the update step freezes the loop forever.

**Early exit beats a found flag**
- Searching with a found = false flag means the loop always finishes every single pass.
- Breaking as soon as you find the value is both faster and shorter.
- When you need one value, use find or findIndex and let the library do the looping.
- Set a flag only when the loop has to continue for a second reason.
- A flag is also the right tool when the loop has to collect a result, not just stop.

**The infinite loop and its escape**
- while (true) never ends on its own. Something inside must break or return.
- If the exit condition can never become true, the loop hangs and a test never times out cleanly.
- Keep the exit condition obvious on a single line so the next reader can trust it.
- In a real test, prefer a bounded loop with a maximum attempt count.
- A retry loop with no attempt cap is the most common cause of a hung test run.`,codeExample:`// break leaves the loop entirely
for (const n of [1, 2, 3, 99, 4]) {
  if (n === 99) { console.log("break at", n); break; }
  console.log("saw", n);
}

// continue skips only this pass
for (const n of [1, 2, 3, 4, 5, 6]) {
  if (n % 2 === 0) continue;
  console.log("odd only:", n);
}

// break inside a switch leaves the switch, not the loop around it
for (const n of [1, 2, 3]) {
  switch (n) {
    case 2: console.log("two, leaving the switch"); break;
    default: console.log("plain", n);
  }
  console.log("still inside the loop after the switch");
}

// A label lets an inner break reach the outer loop
const grid = [[1, 2], [3, 4], [5, 6]];
outer: for (const row of grid) {
  for (const cell of row) {
    if (cell === 4) { console.log("labelled break found", cell); break outer; }
    console.log("checking", cell);
  }
}

// continue outer moves to the next pass of the outer loop
outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer2;
    console.log("i", i, "j", j);
  }
}

// Early exit beats a found flag, and an infinite loop needs a break
const users = ["ana", "bo", "cy"];
let found = null;
for (const u of users) {
  if (u === "cy") { found = u; break; }
}
console.log("early exit found:", found);

let count = 0;
while (true) {
  count++;
  if (count === 3) break;
}
console.log("infinite loop escaped at", count);`}]},{slug:"strings",title:"Strings & Template Literals",icon:"type",description:"Working with text: searching, slicing, building and formatting.",level:"beginner",lessons:[{slug:"string-basics",title:"String Basics",description:"Creating strings and reading them like arrays.",content:`A string is just text. JavaScript has no separate type for a single letter, so "a" and "a whole sentence" are both strings. Every selector, URL and expected message in a test is a string, which makes this the type you touch most often.

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
- Checking a URL: https://example.com plus a path joins, while indexOf('/') tells you where the path starts.`,codeExample:`// The three quote styles, and getting past the quote character.
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
console.log(String.raw\`C:\\new\\table\`);`,quiz:[{question:'What does "JavaScript".length return?',options:["9","10","11","12"],correctIndex:1,explanation:'"JavaScript" has 10 characters.'},{question:"Are strings mutable in JavaScript?",options:["Yes","No, methods return new strings","Only for emojis","Depends on quotes used"],correctIndex:1,explanation:"Strings are immutable. Methods like toUpperCase() return a new string."}]},{slug:"string-methods",title:"String Methods",description:"slice, split, replace, includes, padStart and friends.",content:`A string carries a long list of built-in methods. Because strings never change, every one of these hands you back a new string and leaves the original alone. These are the ones you will reach for daily in test automation.

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
- String.raw keeps escapes as written text, which is useful when a value already contains backslashes, such as a Windows path.`,codeExample:`// split and join are two halves of the same idea.
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
console.log([...face + "a"].length, "<- 2, not 3");`,quiz:[{question:'What does "a,b,c".split(",") return?',options:['"a,b,c"','["a","b","c"]','"[a,b,c]"','"abc"'],correctIndex:1,explanation:"split() turns the string into an array of parts separated by the delimiter."},{question:"Which method checks if a string contains a substring?",options:["find()","includes()","substring()","charAt()"],correctIndex:1,explanation:"includes() returns true/false; indexOf() also works but returns an index or -1."}]},{slug:"template-literals",title:"Template Literals",description:"Backticks, interpolation, and multi-line strings.",content:`A template literal is a string written with backticks instead of quotes. The backtick key usually sits under the tilde on a US keyboard. Template literals are the normal way to build a string out of other values, because the values go straight into the text instead of being glued on with plus signs.

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
- Assertion messages and test titles, where the step name and the failure reason both come from the data.`,codeExample:`// Backticks let you drop values straight into the text.
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
console.log(\`Total \${count - 1}\`);`,quiz:[{question:"Which character encloses a template literal?",options:["Double quotes","Backticks","Single quotes","Angle brackets"],correctIndex:1,explanation:"Template literals use backticks and interpolate with ${expression}."},{question:"What is template literal interpolation used for?",options:["Only comments","Embedding expressions in strings","Deleting variables","Incrementing numbers"],correctIndex:1,explanation:"Interpolation embeds variables and expressions directly inside a string."}]},{slug:"string-performance",title:"String Performance & Immutability",description:"Why += in a loop is slow, and what to do instead.",content:`A string in JavaScript is immutable, which means it can never change after it exists. So when code looks like it is editing a string, it is really building a brand new one and dropping the old one. That is the whole reason string performance is a topic of its own.

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
- Anything inside a beforeEach hook that rebuilds the same big string on every test in the file.`,codeExample:`// Strings never change, so building one a piece at a time
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
console.log("chars serialised:", chars, "| length precomputed:", big.rows.length);`}]},{slug:"functions",title:"JavaScript Functions",icon:"function-square",description:"Reusable blocks of logic, and the rules that decide what they can see.",level:"beginner",lessons:[{slug:"function-basics",title:"Function Basics",description:"Declaring, calling, parameters and return values.",content:'A function is a named block of code you can run again with different inputs. Think of a coffee machine: the buttons are fixed, the cup under it changes what comes out. In a test suite `buildUser("ana")` saves you writing the same object ten times.\n\n**Three ways to write one**\n- A function declaration starts with the keyword `function`. It hands you a name that is usable straight away. `function add(a, b) { return a + b; }`\n- A function expression is written the same way but sits on the right of an equals sign. `const add = function (a, b) { return a + b; };`\n- A function expression with nothing after `function` is anonymous. Nobody outside can name it, so stack traces say "anonymous".\n- Give the expression a name, as in `const fact = function inner(n) { ... }`, and it can call itself by that name. The name is private to its own body.\n- An immediately invoked function expression, or IIFE, is an expression in parentheses followed by `()`. Those `()` run it on creation, which makes a private block of variables.\n- Calling is name plus parentheses: `add(2, 3)`. The parentheses are what make it run.\n\n**Hoisting, and why the two forms differ**\n- Hoisting means JavaScript collects declarations before it runs the first line of a scope, like sorting a shopping list before you shop.\n- A function declaration is hoisted as a working function. You can call it on the line above its definition.\n- A function expression is hoisted only as a plain value. The variable exists, but it holds `undefined` until the line that assigns it runs.\n- So calling `fn()` above a declaration works, and calling it above `const fn = ...` throws. This is why arrow functions cannot be hoisted. An arrow is an expression, so there is no name to move.\n- Safe habit: keep declarations at the top, and expressions above the line that first uses them.\n\n**Parameters and arguments**\n- A parameter is a name in the function\'s own list. An argument is a value you hand over at the call site.\n- In `add(2, 3)` the names `a` and `b` are parameters. The numbers 2 and 3 are arguments.\n- Arguments are matched by position. The first argument lands in the first parameter.\n- JavaScript never checks how many arguments you pass. Leave one out and it is `undefined`.\n- Pass extra arguments and they are quietly dropped, unless the function collects them with a rest parameter.\n\n**return ends the function on that line**\n- `return` sends a value back to the caller and stops the function immediately.\n- Any code after a `return` in the same block never runs. That makes an early return the neat way to leave a loop on the first match.\n- A function that finishes without hitting a `return` gives back `undefined`.\n- `undefined` means "no value came in". "No return statement" means nobody asked for one. They look the same from outside, so a missing `return` in one branch is hard to spot.\n- Put a `return` in every branch, even when the value is `false` or `0`.\n\n**fn() versus new fn()**\n- `fn()` just runs the function. Inside it, `this` is `undefined` in strict mode.\n- `new fn()` treats `fn` as a constructor. It creates a fresh empty object and points `this` at it, then runs the body.\n- `new` throws away whatever the body returns. You get the new object back, never a returned value.\n- That is why constructors assign onto `this` instead of returning anything.\n- Arrow functions have no constructor behaviour, so `new (() => {})` throws a TypeError.\n\n**Pure functions are easy to test**\n- A pure function returns the same output for the same input. `double(2)` is always 4.\n- A pure function touches nothing outside itself. It reads no global, writes to nothing you passed in, and does not read the clock.\n- Analogy: a calculator. Same buttons, same result, no memory between presses.\n- That means a pure function can be tested with one call and one expected value. No setup, no cleanup, no dependency on test order.\n- Impure functions need the world faked: stub the clock and the network, or your test is flaky.',codeExample:`// A declaration is hoisted, so this call on line 2 already works.
console.log("6 x 7 =", multiply(6, 7));
function multiply(a, b) {
  return a * b;
}

// An expression is only ready after the line that creates it.
const add = function (a, b) {
  return a + b;
};
console.log("2 + 3 =", add(2, 3));

// A named expression can use its own name to recurse.
const fact = function inner(n) {
  return n <= 1 ? 1 : n * inner(n - 1);
};
console.log("5! =", fact(5));

// return exits on the spot: this stops at the first even number.
function firstEven(list) {
  for (const n of list) {
    if (n % 2 === 0) return n;
  }
}
console.log("first even:", firstEven([1, 3, 8, 10]));

// No return at all means undefined.
function shout(text) {
  console.log(text);
}
console.log("shout returned:", shout("hi"));

// An IIFE runs the instant it is created.
const answer = (function () {
  return 42;
})();
console.log("IIFE gave:", answer);

// new makes an object; a plain call does not.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
const p = new Point(1, 2);
console.log("new Point:", p.x, p.y);
console.log("plain call gave:", Point(1, 2));

// Pure: same input, same output, nothing else touched.
function total(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}
console.log("total:", total([10, 20, 5]));`,quiz:[{question:"What does a function return if it has no return statement?",options:["null","0","undefined","the last expression"],correctIndex:2,explanation:"Functions without a return statement return undefined."},{question:"What does hoisting do for function declarations?",options:["Deletes them","Lets you call them before definition","Makes them private","Slows them down"],correctIndex:1,explanation:"Function declarations are hoisted to the top of their scope."}]},{slug:"arrow-functions",title:"Arrow Functions",description:"The short syntax, and the one thing it changes.",content:"An arrow function is a shorter spelling for a function expression. It arrived in ES6 and it is the default style in modern JavaScript. Most of the difference is less typing. The one real behaviour change is `this`, so learn the syntax first and the difference second.\n\n**The short syntax**\n- The full form is `const add = (a, b) => a + b;`\n- With one parameter you can drop the parentheses: `const double = n => n * 2;`\n- With no parameters you must keep them: `const now = () => Date.now();`\n- Writing `const now = Date.now` is not an arrow at all. It is a reference to the function, with nothing to call. Adding `()` is what turns it into a call.\n- With a block body, meaning curly braces, you must `return` by hand: `const f = (n) => { return n * 2; }`.\n- With an expression body the value is returned for you. Writing `n => return n * 2` is a syntax error, because there is no return keyword in an expression body.\n\n**When dropping the parentheses is a syntax error**\n- `x => x * 2` is fine, because the body is one expression.\n- A parameter with a default value needs them: `(x = 10) => x` is legal, `x = 10 => x` is not.\n- A destructured parameter needs them: `({ id }) => id`. The braces would otherwise be read as a block.\n- Two parameters always need them: `(a, b) => a + b`.\n- When in doubt, keep the parentheses. They are never wrong.\n\n**`this` is the one behaviour that changes**\n- `this` is a keyword that points at the object a function was called on.\n- A normal function takes its `this` from whoever called it, so `obj.method()` makes `this` be `obj`.\n- An arrow function has no `this` of its own. It copies the `this` of the place where the arrow was written. That is called a lexical `this`.\n- Analogy: a normal function is a taxi that reads the address out of the passenger's hand. An arrow is a bicycle already chained to the gate outside your house. The ride can start anywhere, but the starting point was fixed when you chained it.\n- This is why arrows are the safe choice inside callbacks and event handlers. They keep the `this` of the code around them instead of getting a new one.\n- The flip side is an arrow used as an object method. `obj.run = () => this` has no `this` pointing at `obj`, so you lose the object. Use a method shorthand when the method needs its own object.\n\n**Things arrows do not have**\n- No `arguments`. In a normal function `arguments` is an array-like list of every argument received. Arrows have none at all. Write a rest parameter instead: `(...args) => args`.\n- No `new`. `new (() => {})` throws a TypeError, because there is no `this` for `new` to set up and no prototype to build on.\n- No `prototype`, so you cannot attach shared methods to one arrow and expect other arrows to inherit them.\n- No hoisting. An arrow is an expression, so it does not exist until the line that creates it runs.\n\n**Why `const` is required to hold one**\n- An arrow is a value, so it lives in a variable.\n- `const` stops you reassigning it by accident. After `const double = n => n * 2`, a later `double = 5` throws.\n- `let` works too, but a function should not change identity after you create it, so `const` is the honest choice.\n- `var` also holds it, but `var` is hoisted, so the variable holds `undefined` until the assignment line. Calling it earlier throws.\n\n**When an arrow is the wrong choice**\n- When the function needs its own `this`: an object method, a constructor, or a handler you attach and later remove by reference.\n- When you need `arguments`. Use a rest parameter or a normal function.\n- When it will be called with `new`.\n- When it has to be hoisted. Use a declaration instead.\n- Arrows have no name, so a stack trace from inside one shows the line where the callback was written, not where the failure happened. A declaration or a named expression gives you a name in the trace.",codeExample:`// Every form of the syntax.
const double = n => n * 2;
const add = (a, b) => a + b;
const now = () => 42;
console.log(double(4), add(2, 5), now());

// Block body: the return has to be written out.
const label = (age) => {
  if (age >= 18) return "adult";
  return "minor";
};
console.log(label(21));

// An expression body already returns, so no keyword.
const shout = (text) => text.toUpperCase() + "!";
console.log(shout("pass"));

// Arrays take callbacks, and arrows keep them short.
const scores = [45, 80, 90, 60];
console.log("passing:", scores.filter(s => s >= 70));
console.log("doubled:", scores.map(s => s * 2));

// A normal method gets \`this\` from its object.
// An arrow property cannot, so it never reaches \`tool\`.
const tool = {
  name: "checkout form",
  readName() {
    return this.name;
  },
  readNameArrow: () => "an arrow has no this of its own",
};
console.log("normal method:", tool.readName());
console.log("arrow property:", tool.readNameArrow());

// No arguments object. A rest parameter replaces it.
const collect = (...args) => args.length;
function countArgs() {
  return arguments.length;
}
console.log("arrow:", collect(1, 2, 3), "normal:", countArgs(1, 2, 3));

// No hoisting: calling before the const line throws.
try {
  notYet();
} catch (err) {
  console.log("called too early:", err.constructor.name);
}
const notYet = () => "too late";

// No new either.
try {
  new (() => {})();
} catch (err) {
  console.log("new on an arrow:", err.constructor.name);
}`,quiz:[{question:"Do arrow functions have their own this?",options:["Yes, always","No, they inherit this from scope","Only in strict mode","Only when bound"],correctIndex:1,explanation:"Arrow functions have no own this; they use the lexical this from surrounding scope."},{question:"Can arrow functions be hoisted like declarations?",options:["Yes","No, they are expressions","Only if named","Only in modules"],correctIndex:1,explanation:"Arrow functions are expressions and are not hoisted."}]},{slug:"arguments-and-params",title:"Arguments, Defaults & Rest",description:"Handling a variable or unknown number of inputs.",content:'Parameters are the names in a function\'s own list. Arguments are the values you hand over when you call it. Matching is done by position, so the first argument fills the first parameter and the second fills the second. That single rule is why order matters so much, and why a helper taking four bare strings is easy to misuse.\n\n**Position is the whole rule**\n- `function area(width, height)` called as `area(3, 5)` means width is 3 and height is 5.\n- Swap them and you get 15 instead of an error. Nothing complains.\n- Extra arguments are dropped. Too few leave the remaining parameters as `undefined`.\n- When a mix-up is likely, take one object parameter instead. `area({ width: 3, height: 5 })` carries the names along with the values.\n\n**Default parameters**\n- `function greet(name = "friend")` uses "friend" when no argument arrives.\n- The default fires only for `undefined`. That covers `greet()` and `greet(undefined)`.\n- It does not fire for `null`. `greet(null)` gives "Hello, null", because `null` is a deliberate value and JavaScript leaves it alone.\n- Defaults are evaluated at call time, so `function stamp(now = Date.now())` reads the clock on every call.\n- A default may use a parameter to its left. `function pad(n, width = n + 1)` works, because `n` is already bound by then.\n- A default may not use a parameter to its right. That name is not bound yet, so touching it throws a ReferenceError.\n- Same trap with `undefined` on the left. `function f(a = b, b = 2)` throws as soon as `b` is read.\n\n**Rest parameters**\n- `function total(...prices)` collects every leftover argument into a real array named `prices`.\n- You pass an array through with a spread: `total(...[10, 20])`. The spread unpacks the array into separate arguments.\n- Because it is a genuine array, `prices.length` and array methods like `reduce` work on it.\n- The rest parameter must be last. If something followed it, JavaScript would not know which arguments were left to collect, so it is a syntax error.\n- Two rest parameters in one list is also a syntax error.\n- `arguments.length` counts every argument the function received, including the ones already bound to named parameters. Rest gives you only the tail.\n\n**Destructuring with defaults and rest**\n- `function draw({ x = 0, y = 0 } = {}, ...rest)` pulls `x` and `y` out of the first argument and puts everything after that object into `rest`.\n- The `= {}` on the parameter matters. Without it, `draw()` throws because there is no object to pull from. With it, each field falls back to its own default.\n- That pattern means the body never needs `if (options === undefined)`. The signature absorbs the missing case for you.\n\n**Options objects and the mutation bug**\n- `const DEFAULTS = { retries: 3 }` followed by `const options = DEFAULTS` gives two names for one object.\n- Inside the function, writing `options.retries = 0` writes through to `DEFAULTS`. The next caller starts from your leftover value.\n- The fix is a copy: `const settings = { ...DEFAULTS, ...options }`. The spread builds a new object, so the shared defaults are never touched.\n- In a test run this shows up as a test that passes on its own and fails in a full suite, because an earlier test left something behind. Shared mutable defaults are a classic cause.\n- Rule of thumb: never return the shared defaults object, never store it on `this`, and never let a caller mutate it.',codeExample:`// Order decides everything.
function area(width, height) {
  return width * height;
}
console.log("area:", area(3, 5), "| swapped:", area(5, 3));

// Defaults fire for undefined, not for null.
function greet(name = "friend") {
  return "Hello, " + name;
}
console.log(greet(), "|", greet(undefined), "|", greet(null));

// Defaults may use a parameter to their left.
function pad(n, width = n + 1) {
  return String(n).padStart(width, "0");
}
console.log("padded:", pad(7, 3));

// Rest collects leftover arguments into a real array.
function total(...prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}
console.log("total:", total(10, 20, 5), "| from array:", total(...[1, 2, 3]));

// Rest is the tail; arguments.length counts everything.
function shapes(a, ...rest) {
  return [a, rest.length, arguments.length];
}
console.log("[first, rest, all]:", shapes("box", 1, 2, 3));

// Destructuring plus defaults plus rest.
function draw({ x = 0, y = 0 } = {}, ...rest) {
  return { x, y, extra: rest.length };
}
console.log("no args at all:", draw());
console.log("one object:", draw({ x: 4, y: 5 }, "shadow", "blur"));

// The shared-defaults bug, and the copy that fixes it.
const DEFAULTS = { retries: 3, timeout: 1000 };
function runOptions(options) {
  const settings = { ...DEFAULTS, ...options };
  return settings;
}
console.log("before:", DEFAULTS.retries);
console.log("call asked for:", runOptions({ retries: 0 }).retries);
console.log("after:", DEFAULTS.retries);`},{slug:"lexical-scope-closures",title:"Scope & Closures",description:"Functions that remember where they were born.",content:`Scope is the set of variables a piece of code can see. Lexical scope is decided by where code is written, not by who calls it. A closure is a function that carries the variables it needed away with it, and keeps them alive after the code that made it has finished.

**Scope is a set of nested boxes**
- Imagine boxes inside boxes. The innermost box holds its own items. Look one level out and you can also reach the items in the box around it.
- JavaScript works the same way. A function sees its own variables, then its parent's, then its grandparent's, and on up to the global scope.
- A function can never see inward. An outer function cannot read a variable declared inside a function nested in it.
- Looking up a name walks outward one scope at a time. The first scope that holds the name wins.
- \`let\` and \`const\` belong to the block of braces around them. \`var\` is looser: it belongs to the whole function, which is why it escapes the block you wrote it in.

**Lexical scope versus dynamic scope**
- Lexical means "decided by where you write the code". A nested function sees its parents because of where it is typed.
- Dynamic means "decided by who calls it". JavaScript does not work that way for variables.
- Example: a function written inside \`makeOrder\` can read \`taxRate\` from \`makeOrder\`, no matter who calls it. A dynamically scoped language would look at the caller instead.
- \`this\` is the exception. It is resolved by the caller, which is why it feels inconsistent next to everything else.

**What a closure actually is**
- A closure is a function plus the variables it captured when it was created. The function keeps a live reference to that environment.
- Analogy: the function is a person, and the captured variables are what they packed in a backpack before the house was sold. They can still unpack them later.
- It does not copy the values. If the outer variable changes later, the inner function sees the new value.
- Because the reference is live, a second factory call makes a second set of variables: two counters, two independent counts.

**The loop trap**
- \`for (var i = 0; ...)\` creates one single \`i\` for the whole loop. Three closures all read that same \`i\` and all see the final value.
- \`for (let i = 0; ...)\` binds a fresh \`i\` on every turn of the loop. Each closure captures its own copy and sees its own number.
- The difference has nothing to do with timers. \`let\` in a loop head binds a new variable each iteration, and that is the variable you capture.
- Same idea when you build a list of handlers in a loop. Each handler should remember its own row, not the last one.

**Closures as private state**
- \`makeCounter\` hides \`count\` inside a function and returns a function that changes it. Nothing outside can touch \`count\`.
- That is the pattern for private state in plain JavaScript. Keep the variable somewhere nobody else can see, and hand out the few functions allowed to read and write it.
- It also prevents mistakes: a caller cannot set the counter to a nonsense value.

**Where you meet closures in real work**
- Event handlers. A handler on a table row remembers the id of the row it was attached to, long after the loop that built it is gone.
- Memoisation. A \`once(fn)\` wrapper remembers the first result and returns it again without repeating the work.
- Test fixtures. A \`beforeEach\` hook builds a page object once and hands the same object to every spec.
- Callbacks in general. Every callback is a closure over the scope that created it.

**When a closure captures more than you meant**
- A closure captures every variable it mentions, not only the small one you want.
- If the outer function holds a big response body and an inner handler reads one field, the whole body stays in memory.
- Keep the large object outside the closure, or copy just the field you need into a small local first.
- Handlers added in a loop and never removed keep their captured rows alive for the life of the page, which is a slow leak in a long run.`,codeExample:`// An inner function reads outward, never inward.
function withTax(rate) {
  return (price) => price + price * rate;
}
console.log("line total:", withTax(0.2)(100));

// A closure is a function plus what it captured.
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const first = makeCounter();
const second = makeCounter();
console.log("counter one:", first(), first(), first());
console.log("counter two stays separate:", second());

// Live link: the closure sees later changes.
function makeLabel() {
  let status = "pending";
  return {
    read: () => status,
    set: (next) => { status = next; },
  };
}
const label = makeLabel();
console.log("before:", label.read());
label.set("paid");
console.log("after:", label.read());

// var makes ONE variable; let makes one per turn.
const withVar = [];
for (var i = 0; i < 3; i++) {
  withVar.push(() => i);
}
const withLet = [];
for (let j = 0; j < 3; j++) {
  withLet.push(() => j);
}
console.log("var loop saw:", withVar.map(fn => fn()));
console.log("let loop saw:", withLet.map(fn => fn()));

// Private state: balance is out of reach.
function createAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    read() {
      return balance;
    },
  };
}
const account = createAccount();
account.deposit(100);
account.deposit(50);
console.log("balance:", account.read(), "| not public:", account.balance);`,quiz:[{question:"What is a closure?",options:["A function that closes the browser","A function that remembers its outer scope variables","A private class field","A type of loop"],correctIndex:1,explanation:"A closure captures and remembers the variables of the scope where it was created."},{question:"Which keyword creates block-scoped variables?",options:["var","let and const","function","this"],correctIndex:1,explanation:"let and const are block-scoped. var is function-scoped."}]},{slug:"callbacks",title:"Callbacks",description:"Passing behaviour into a function so it can call you back.",content:"A callback is a function you hand to somebody else's code so they can call it back when they are ready. It is like giving someone your phone number instead of your message. You do not control when they ring. You control what happens when they do.\n\n**The shape of a callback**\n- The receiving function takes a function as a parameter and calls that parameter itself.\n- Array methods are the easiest example. `list.map(n => n * 2)` hands `map` a function, and `map` calls it once per item.\n- A function that takes a function as a parameter, or returns one, is called a higher-order function.\n- Passing behaviour beats passing a value when the value does not exist yet. `readFile(path, (err, data) => ...)` works because the callback decides the moment. `readFile(path, data)` cannot work, because there is no `data` at the moment of the call.\n\n**Synchronous and asynchronous callbacks**\n- A synchronous callback runs before the line after the call finishes. `map`, `filter` and `forEach` are synchronous.\n- An asynchronous callback runs later, after the current block of code has finished. `setTimeout`, `fetch` and file reads are asynchronous.\n- \"Later\" means after the current run of the script reaches the end, and then whenever the task queue gets to it. `setTimeout(fn, 300)` is a minimum wait, not a promise about exact timing.\n- So this prints first, then second, then last. That is not a bug. It is the queue doing its job.\n\n**Higher-order functions you already use**\n- `map` returns a new array with the same length, holding whatever your callback returned.\n- `filter` returns only the items where your callback returned a truthy value.\n- `reduce` folds a list into a single value. Your callback gets an accumulator and the current item.\n- `setTimeout`, `addEventListener`, `queueMicrotask` and Node's `fs.readFile` all take callbacks as parameters.\n- Promises take them too, under the name of `then` handlers.\n\n**Handling errors: two conventions**\n- Node's convention is error-first. The callback receives `err` first, then the data. When nothing went wrong, `err` is `null`.\n- That means `fs.readFile(\"x\", (err, data) => { if (err) return handle(err); ... })`. You must check `err` first, or you will read data that does not exist.\n- Promise style moves the failure into a `.catch` and leaves the happy path free of error checks.\n- Both are the same idea. Someone else owns the timing, so they have to own the failure channel too.\n- When you write your own callback API, pick error-first. It is what every Node library expects to receive.\n\n**Callback hell**\n- Every step that depends on the previous step nests one level deeper. Four steps in and you cannot tell which closing brace belongs to which call.\n- The nesting is the problem, not the callbacks. Deep indentation hides logic and loses errors.\n- Promises return a value instead of taking a continuation, so steps chain flat with `.then(...).catch(...)`. `async` and `await` flattens it further.\n- Rule of thumb: the moment you find yourself counting braces to find the end of a callback, reach for promises.\n\n**Rules for writing a callback**\n- Call it exactly once. A second call means your assertions run twice, and the second run often fails on state the first run already changed.\n- If the body can throw, wrap the call in `try` and `catch`, or the error disappears into somebody else's stack trace.\n- Do not assume it runs before the next line. If you need the value immediately, return it from the function instead.\n- Keep the callback short. Log the result or store it, then get out.\n\n**Callbacks are underneath the newer syntax**\n- An event listener stores your function and calls it on every click.\n- A promise stores your handler and calls it when the promise settles.\n- Every array method is a loop that calls your function once per item.\n- Promises and `async` and `await` are a tidier interface over the same idea: hand over a function, get called back when the work is done.",codeExample:`// A callback is a function you hand to somebody else to call.
function runTwice(task) {
  task();
  task();
}
let calls = 0;
runTwice(() => { calls += 1; });
console.log("callback ran", calls, "times");

// Synchronous callbacks: done before the next line runs.
const scores = [85, 40, 92, 60];
console.log("above 70:", scores.filter(s => s > 70));
console.log("with position:", scores.map((s, i) => i + ":" + s));

// Asynchronous callback: runs after the current block finishes.
setTimeout(() => console.log("this line prints last"), 0);
console.log("this line prints first");

// Your own API that takes a callback. Error-first, Node style.
function fetchUser(id, callback) {
  const found = id === 7;
  if (found) callback(null, { id: 7, name: "Ana" });
  else callback(new Error("no user " + id));
}
fetchUser(7, (err, user) => {
  if (err) return console.log("failed:", err.message);
  console.log("got user:", user.name);
});
fetchUser(9, (err, user) => {
  if (err) return console.log("failed:", err.message);
  console.log("got user:", user.name);
});

// A higher-order function: transform is a callback.
function processData(items, transform) {
  return items.map(transform);
}
console.log("processed:", processData([1, 2, 3], n => n * 10));

// Callback hell: nesting grows with every dependent step.
const done = (v) => console.log("final value:", v);
const stepTwo = (v, cb) => cb(v + 2);
const stepOne = (v, cb) => stepTwo(v, cb);
stepOne(1, done);`,quiz:[{question:"What is a callback?",options:["A function passed to another function to run later","A built-in method","A type of variable","A DOM element"],correctIndex:0,explanation:"A callback is a function passed as an argument and invoked by the receiving function."},{question:"What is the main downside of heavily nested callbacks?",options:["Slow execution","Callback hell - unreadable code","Memory leaks always","No error handling"],correctIndex:1,explanation:"Deeply nested callbacks create 'callback hell'. Promises and async/await solve this."}]}]},{slug:"arrays",title:"JavaScript Arrays",icon:"list",description:"Ordered lists, and the methods that make them painless.",level:"beginner",lessons:[{slug:"array-basics",title:"Array Basics",description:"Creating, indexing, length, and common gotchas.",content:`An array is a list of values in a fixed order, and you can change that list after you build it. Think of a numbered shopping list stuck to the fridge. You can add a line, cross one out, or read the third line. The position of a line is its index, and JavaScript counts positions from 0, not 1.

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
- Asserting on a length first, so a missing list fails with a clear message.`,codeExample:`// Building arrays three ways, then reading slots.
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
console.log("unique:", [...new Set(["a", "b", "a", "b"])]);`,quiz:[{question:"Which method adds an element to the END of an array?",options:["push()","shift()","unshift()","splice()"],correctIndex:0,explanation:"push() adds to the end. unshift() adds to the start."},{question:"How do you make a real copy of an array?",options:["const copy = original","const copy = [...original]","const copy = original.push()","There is no way"],correctIndex:1,explanation:"The spread operator [...] creates a new independent array."}]},{slug:"array-methods",title:"Reading Arrays: at, find, some, every",description:"The search and check methods you reach for daily.",content:`These methods ask questions about an array and never change it. Most of them take a callback, which is a small function you hand to the method. The method runs your function once per item and uses what it returns. Think of an inspector walking down a row of shopping carts and marking each one pass or fail.

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
- Removing duplicate labels before you loop over them.`,codeExample:`const rows = [
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
console.log("byId[3]:", byId[3]);`,quiz:[{question:"What does arr.map(fn) return?",options:["The original array","A new transformed array","A boolean","undefined"],correctIndex:1,explanation:"map() returns a new array with each element transformed by the callback."},{question:"Which method returns the FIRST element matching a condition?",options:["filter","find","some","map"],correctIndex:1,explanation:"find() returns the first match (or undefined). filter() returns all matches as an array."}]},{slug:"advanced-arrays",title:"map, filter & Transformations",description:"Building new arrays instead of mutating old ones.",content:`map, filter and their relatives take a list and hand you a new list. They never touch the original. That is what makes them safe in a test: a bad transformation cannot corrupt data a later step still needs. Think of copying a spreadsheet before editing the cells.

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
- Trimming collected text before you compare it: labels.map(s => s.trim()).filter(Boolean).`,codeExample:`const users = [
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
console.log("toSorted:", nums.toSorted((a, b) => b - a), "| still:", nums);`,quiz:[{question:"What does arr.map(fn) return?",options:["The original array","A new transformed array","A boolean","undefined"],correctIndex:1,explanation:"map() returns a new array with each element transformed by the callback."},{question:"Which method returns the FIRST element matching a condition?",options:["filter","find","some","map"],correctIndex:1,explanation:"find() returns the first match (or undefined). filter() returns all matches as an array."}]},{slug:"reduce",title:"reduce & Grouping",description:"Folding an array into one value, plus groupBy patterns.",content:`reduce folds a list into one single value. Imagine collapsing a stack of receipts into one summary sheet: you take the first receipt, add each new one into the sheet, and at the end you are holding exactly one thing. That running thing is called the accumulator.

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
- Totalling response times to print one average at the end of a run.`,codeExample:`const results = [
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
console.log("seeded:", [].reduce((a, b) => a + b, 0));`,quiz:[{question:"What does the accumulator do in reduce()?",options:["Starts the loop","Carries the running result between steps","Counts iterations","Nothing"],correctIndex:1,explanation:"The accumulator carries the result and the callback's return value becomes the next accumulator."},{question:"[1,2,3].reduce((t, n) => t + n, 0) gives?",options:["6","0","[1,2,3]","3"],correctIndex:0,explanation:"reduce sums the array: 0+1+2+3 = 6."}]},{slug:"array-flattening",title:"Flattening, Sorting & Splicing",description:"flat, flatMap, sort pitfalls, and splice vs slice.",content:`Flattening means turning nested arrays into one flat list. Think of unpacking moving boxes: each box is an array, and the items inside are what you actually want. This lesson also covers the three methods people mix up most: flat, sort and splice.

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
- Sorting a list of results for a report without changing the object you were handed.`,codeExample:`// flat: the default depth is 1, so deeper arrays survive.
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
console.log("deepEqual:", deepEqual([1, [2]], [1, [2]]), deepEqual([1, [2]], [1, 2]));`,quiz:[]}]},{slug:"objects",title:"Objects & ES6 Features",icon:"braces",description:"Keyed collections, destructuring, and safe access.",level:"beginner",lessons:[{slug:"object-basics",title:"Object Basics",description:"Keys, values, nesting, copying and merging.",content:`An object is a labelled box of values. Picture a paper form: every field has a name (the key) and something written in it (the value). You look up a field by its name, not by its position, so nothing depends on the order you filled the form in. Every JSON response from an API arrives in this shape, so you read it on almost every test.

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
- Spread two config objects together to build one config for the browser context.`,codeExample:`// Reading, writing and deleting keys, plus the copy traps.
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
console.log("JSON round trip:", lossy.when, "| fn is", typeof lossy.fn);`,quiz:[{question:'user["age"] is which way of accessing a value?',options:["Dot notation","Bracket notation","Index notation","Chaining"],correctIndex:1,explanation:"Bracket notation (user['age']) works with strings and dynamic keys."},{question:"How do you make a copy of an object with one field changed?",options:["Mutate the original","Object.delete(user, field)","Spread: { ...user, age: 31 }","JSON.copy(user)"],correctIndex:2,explanation:"Spread creates a copy; override a field after the spread."}]},{slug:"object-methods",title:"Object Methods: keys, values, entries",description:"Turning an object into something you can loop over.",content:`These are the built-in functions on the Object constructor. They take a plain object apart so you can loop over it, or build one back up. This is the entry point for turning an API response into something you can filter, count and check.

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
- Anywhere else the two agree, so === stays the default and Object.is is the tool for a specific check.`,codeExample:`// Turning an API response into something you can loop over.
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
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));`,quiz:[{question:"What does Object.entries return?",options:["Only the values, as an array","An array of [key, value] pairs","An array of the prototype's keys","A new object"],correctIndex:1,explanation:"Object.entries returns [key, value] pairs, so you can loop with for...of."},{question:"Why does Object.keys({ b: 1, 2: 2, a: 3 }) start with 2?",options:["Keys are sorted alphabetically","Integer-like keys are listed first, before string keys","The object was created in that order","It is random"],correctIndex:1,explanation:"Integer-like keys come back first in ascending numeric order, then string keys in insertion order."}]},{slug:"destructuring",title:"Destructuring",description:"Pulling values out of objects and arrays in one line.",content:`Destructuring takes values apart and binds them to variables in one statement. Think of unpacking a toolbox: you name the tools you want up front instead of reaching in one at a time and remembering where each one was.

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
- Assert on a response body with const { status } = response.data. One line, no intermediate variable.`,codeExample:`// Pulling values apart in one line.
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
console.log("id:", id, "token:", token);`,quiz:[{question:"What does { a, b } = obj unpack?",options:["a and b as variables from obj's properties","A new object","An array","Nothing - invalid syntax"],correctIndex:0,explanation:"Object destructuring creates variables named after the object's keys."},{question:"How do you swap two variables destructively?",options:["[a, b] = [b, a]","swap(a, b)","a = b; b = a","You cannot"],correctIndex:0,explanation:"Array destructuring assigns [b, a] back into a and b simultaneously."}]},{slug:"optional-chaining-nullish",title:"Optional Chaining & Nullish Coalescing",description:"Safe access into data that might be missing.",content:`These two operators exist for the same problem: a response is missing something you expected. Together they replace the long chain of if checks you used to write. The names are long, but the ideas are small.

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
- Optional chaining cannot help you when the value is an empty string or 0. Neither of those is nullish, so ?. and ?? both let them through.`,codeExample:`// Safe access when a response is missing pieces.
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
console.log("retries:", retries, "| mode:", mode);`,quiz:[{question:"What does ?. do when the chain hits a null value?",options:["Throws an error","Returns undefined and stops","Returns null","Retries"],correctIndex:1,explanation:"Optional chaining short-circuits to undefined instead of throwing."},{question:"What does ?? fallback to when the left side is 0?",options:["fallback","0","true","undefined"],correctIndex:1,explanation:"?? only triggers on null/undefined, so 0 is kept."}]},{slug:"map-set",title:"Map & Set",description:"Collections with real keys and no duplicate values.",content:`Map and Set are two collection types added to the language in ES6. They fill the gaps that plain objects leave. Think of a Map as a coat rack with numbered hooks, where you choose the numbers. Think of a Set as a bag that silently drops anything you already put in.

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
- A Map built once from a fixture lets every test read the value it needs without rebuilding it.`,codeExample:`// Map keeps real keys in insertion order. Set keeps values unique.
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
console.log("Roles left:", [...roles]);`,quiz:[{question:"What is unique about Map keys?",options:["They must be strings","They can be any type, including objects","They must be numbers","They are auto-sorted"],correctIndex:1,explanation:"Maps accept any value type as a key."},{question:"What does new Set([1,1,2,2,3]) contain?",options:["[1,1,2,2,3]","[1,2,3]","{1,2,2,3}","It errors"],correctIndex:1,explanation:"Sets only store unique values, duplicates are dropped."}]},{slug:"arrays-of-objects",title:"Arrays of Objects",description:"The most common real data shape, and how to query it.",content:`An array of objects is the shape almost all real data has. Table rows, search results, JSON responses, and your own test data all look like this. A spreadsheet is the everyday version: rows are objects, columns are keys. Learning to query this shape covers most of what you do with real data.

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
- Where you meet this: expect(rows.filter((r) => r.role === "admin").map((r) => r.name)).toEqual(["Ana", "Cid"]).`,codeExample:`// The shape almost all real data arrives in.
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
console.log("Always array:", Array.isArray([].concat({ id: "1" })));`,quiz:[{question:"Which pipeline gets ALL admins' emails?",options:["users.filter(u => u.role === 'admin').map(u => u.email)","users.map(u => u.email).filter(u => u.role)","users.find(u => u.role)","users.reduce(u => u.email)"],correctIndex:0,explanation:"Filter by role first, then map to the email column."},{question:"How do you update ONE record immutably in an array?",options:["arr[0].role = 'x'","arr.map(u => u.id === 1 ? { ...u, role: 'x' } : u)","arr = other","update(arr, 1)"],correctIndex:1,explanation:"map returns a new array; spread keeps other fields; conditional picks the target."}]}]},{slug:"async",title:"Async JavaScript",icon:"loader",description:"Waiting for things without freezing the page or your test run.",level:"intermediate",lessons:[{slug:"async-basics",title:"Asynchronous Basics",description:"Sync vs async, and why blocking is expensive.",content:`Asynchronous work is work you start and come back to later. You hand the job to the browser, carry on with the next line, and get a callback when the job finally finishes. It is like ordering coffee, taking a ticket, and chatting until the machine beeps. The counter is not blocked while your drink is made.

**Synchronous means standing in line**
Synchronous code does one thing and finishes it before the next thing starts. It is like a cashier serving one customer at a time in a single queue. Nothing else moves until the current step is done, even if that step is slow.

**Asynchronous is not the same as fast**
Nothing actually got quicker. The slow job took exactly as long. What changed is that the page could paint, run timers and answer clicks while it ran. Overlapping the waiting is the benefit, not speed.

**One thread is why this matters**
JavaScript runs your code on a single thread, which is one lane of traffic. A long synchronous job fills the lane and nothing else can move. In the browser the page stops painting and clicks stop working. In a test runner nothing else in the process advances either.

**What counts as asynchronous**
- Network requests, such as fetch or any API call
- Timers, such as setTimeout and setInterval
- Reading or writing files with the file system module
- Waiting on a database, or on a Playwright action
A long for loop over a million items is not asynchronous. JSON.parse on a ten megabyte string is not asynchronous. Both hold the lane until they finish, because nothing hands control back to the browser.

**Callbacks were the old way**
Callbacks came first. You pass a function to another function and it calls it later. Chaining several for a real flow turned into a pyramid of indentation, and one forgotten error check hid a real failure. Promises replaced that pyramid. async and await are the newest layer on top of promises, and they only change how the code reads.

**await never blocks the thread**
await pauses one function and gives the lane back so other code can run. The paused function is written down somewhere and resumed later, like a bookmark in a book. The rest of that function waits. The rest of the page does not.

**Where you meet this in real work**
- Playwright actions return promises, so awaiting page.click is what keeps a test running one step at a time
- A test that fires three API calls and waits for each one pays three round trips instead of one
- A slow synchronous helper inside your test doubles as a freeze, and every timer you rely on arrives late`,codeExample:`// Async means "start it, come back later". Sync means "wait in line".
// The letters show the real print order, not the order of the lines.

console.log("A - sync, running now");

// Starts a slow job and hands control straight back. It does not block B.
const slowJob = new Promise((resolve) => {
  setTimeout(() => resolve("the slow job finished"), 50);
});

console.log("B - sync code kept going while that job ran");

// A timer is a queue too. It waits for the sync code to end, then it fires.
setTimeout(() => console.log("C - 0ms timer fired, the 50ms job is still running"), 0);

// The promise only settles at 50ms, so its handler is the last thing here.
slowJob.then((message) => console.log("D - " + message));`,quiz:[{question:"Why does JavaScript need async code?",options:["To run on multiple threads","To wait for slow operations without blocking","To make code shorter","It does not need it"],correctIndex:1,explanation:"Async lets single-threaded JS wait on I/O/network without freezing."},{question:"Which runs first: a Promise microtask or a setTimeout callback?",options:["Promise microtask","setTimeout callback","They run together","Random order"],correctIndex:0,explanation:"Microtasks (Promises) are processed before the next macrotask (timer)."}]},{slug:"promises",title:"Promises",description:"A value that is not ready yet, with three outcomes.",content:`A promise is a placeholder for a value that is not ready yet. Think of it as a receipt for a parcel. You hold the receipt now, and later it tells you what arrived or that something went wrong. It has one job, which is to report the outcome of some work exactly once.

**Three states, and settled for good**
- pending: the work is still running. This is the starting state.
- fulfilled: the work finished and produced a value.
- rejected: the work failed and produced an error.
Settled means the promise has stopped changing. Once fulfilled it stays fulfilled forever. Once rejected it stays rejected forever. A late resolve or a late reject is ignored. That is why a promise is safer than a shared variable, which any other function could overwrite.

**Creating one with new Promise**
new Promise takes an executor function, and that executor runs immediately and synchronously. The executor receives two functions from JavaScript. resolve(value) marks the promise fulfilled. reject(error) marks it rejected. Call one of them once. Calling both is pointless, because only the first call counts. You almost never build one yourself, because the APIs you call already return promises.

**Reading one with then, catch and finally**
then registers a function to run when the promise fulfils. catch registers a function to run when it rejects. finally registers a function that runs either way, so it suits cleanup. Leaving off catch means the rejection has nowhere to go, and Node reports an unhandled rejection.

**The chaining rule**
then does not return the original value. It returns a new promise for whatever its callback returned. Return a value and the new promise fulfils with it. Return a promise and the new promise waits for that one instead, which flattens nested work into a straight line.

**How errors move**
A throw inside a then callback rejects the promise that then returned. The next catch further down the chain receives that error. This is why one catch at the end of a long chain can handle an error thrown anywhere above it.

**What a promise cannot do**
A promise cannot be cancelled. Once the work has started, ignoring the result is all you can do. A promise also cannot be read directly. There is no promise.result, you wait for it with then or with await.

**Where you meet this in real work**
- An API helper returns a promise, so a test waits for the data before asserting on it
- A file write with the file system module returns a promise that rejects on a bad path
- A rejected promise with no catch gives you a noisy error and a test run that looks broken for no clear reason`,codeExample:`// A promise is a value that is not ready yet. This one reports later.
function loadThing(ms, shouldFail) {
  // The executor runs immediately. It decides when the promise settles.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("could not load thing"));
      else resolve({ id: 7, name: "Ana" });
    }, ms);
  });
}

// then returns a NEW promise, so handlers can be chained flat.
loadThing(40, false)
  .then((thing) => {
    console.log("loaded:", thing.name);
    // Returning a promise here is unwrapped before the next then runs.
    return loadThing(40, false).then((more) => more.name);
  })
  .then((name) => console.log("second step:", name))
  .catch((err) => console.log("caught:", err.message))
  .finally(() => console.log("cleanup always runs"));

// A throw inside a callback becomes a rejection that catch can see.
Promise.resolve(10)
  .then((n) => {
    throw new Error("bad number " + n);
  })
  .catch((err) => console.log("rejected instead:", err.message));`,quiz:[{question:"What are the three states of a Promise?",options:["pending, fulfilled, rejected","start, middle, end","open, closed, error","wait, done, done"],correctIndex:0,explanation:"A promise starts pending and settles to fulfilled or rejected."},{question:"What does Promise.all do?",options:["Waits for all promises, failing fast on rejection","Runs them one at a time","Returns only the first result","Cancels all promises"],correctIndex:0,explanation:"Promise.all resolves when every promise resolves; it rejects as soon as one rejects."}]},{slug:"promise-composition",title:"Promise Composition",description:"all, allSettled, race, any, and chaining with then/catch.",content:`Composition means building one asynchronous flow out of several. You have two or more promises and you want one answer from them: all of them, the fastest one, or every outcome no matter what. Promise ships four tools for this, and each one throws away something you might have wanted.

**Promise.all waits for everything**
Promise.all takes an array of promises and gives back a promise for an array of results in the same order you passed in. It resolves when every input has resolved. If any input rejects, the whole thing rejects with that first error, and the other results are thrown away even if they arrive later. The rule is all or nothing.

**Promise.allSettled reports every outcome**
Promise.allSettled also waits for everything, but it never rejects. It resolves with an array where each slot is a report object. Every report has a status field, which is either "fulfilled" or "rejected". A fulfilled report also has a value, and a rejected report also has a reason. Always read the status before you read the other field, because one of them is missing.

**Promise.race takes the first to settle**
Promise.race resolves or rejects with whichever input settles first, and then it stops caring about the rest. One input settling is enough. The losers are still running, and their results are dropped, so a race cannot cancel the work you did not win with.

**Promise.any takes the first success**
Promise.any is the mirror image of race. It ignores rejections and resolves with the first fulfilled result. If every input rejects, it rejects with an AggregateError, which is a single error object holding an errors array of all the failures. Both race and any want a success, but any is happy to have rejections along the way.

**Sequential and parallel are different**
Sequential means waiting for one call before starting the next, so the total time is the sum of all the calls. Parallel means starting them all before waiting for any, so the total time is the slowest single call. If the second call does not need the first result, sequential is wasted waiting and usually a performance bug.

**The throwaway variable trick**
To make two calls run at once, start both first, drop the results into variables, then wait for them together. The call starts on the assignment line, not on the await line. Promise.all then waits for both and hands back the results as an array.

**Patterns worth knowing, and where you meet them**
- Map over an array of promises with Promise.all so you get one result per input
- Cap how many run at once with a small pool helper, so fifty requests do not hit the server at once
- Chain steps with array reduce into one waterfall promise when each step needs the previous result
- Use allSettled in a test that collects every page's result, so one bad page does not hide the rest
- Seed a test database with several requests at once and wait for the slowest one
- Race a page load against a timeout so the test fails fast instead of hanging`,codeExample:`// Composition: one result from several promises.
// Each fake call waits real ms, so these timings are real.
function call(name, ms, fail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (fail ? reject(new Error(name + " failed")) : resolve(name + " ok")), ms);
  });
}

// all rejects on the FIRST failure and drops the rest.
Promise.all([call("users", 60, false), call("orders", 40, true)])
  .catch((e) => console.log("all stopped early:", e.message));

// allSettled waits for everyone and reports each outcome.
Promise.allSettled([call("users", 60, false), call("orders", 40, true)])
  .then((rs) => rs.forEach((r) => console.log("settled:", r.status, r.value || r.reason.message)));

// Sequential pays 60 + 40. Parallel pays the slowest only.
async function compare() {
  let start = Date.now();
  await call("users", 60, false);
  await call("orders", 40, false);
  const sequential = Date.now() - start;

  start = Date.now();
  const both = await Promise.all([call("users", 60, false), call("orders", 40, false)]);
  console.log("sequential " + sequential + "ms vs parallel " + (Date.now() - start) + "ms");
  console.log("parallel gave both:", both.join("+"));

  // any wants a success. All failing means an AggregateError.
  Promise.any([call("users", 20, true), call("orders", 20, false)])
    .then((win) => console.log("any picked the first success:", win))
    .catch((e) => console.log("any aggregate:", e.name, e.errors.length, "failures"));
}

compare();`,quiz:[{question:"What does Promise.allSettled return when one promise rejects?",options:["It rejects immediately","It resolves with one report per promise, each carrying a status","It resolves with only the fulfilled values","It retries the failed promise"],correctIndex:1,explanation:"allSettled never rejects. Each slot is a report object with status and value or reason."},{question:"What error does Promise.any reject with when every promise fails?",options:["A plain Error with the last message","An AggregateError holding an errors array","Nothing, it resolves with undefined","A TypeError about undefined"],correctIndex:1,explanation:"Promise.any collects every rejection into a single AggregateError."}]},{slug:"async-await",title:"async / await",description:"Writing async code that reads like sync code.",content:`async and await let you write promise code in the order things actually happen. Instead of nesting handlers with then, you write one straight line at a time and stop at each point where you need to wait. The promise machinery underneath is unchanged. Only the reading changes.

**An async function always returns a promise**
Putting async before a function declaration or expression changes one thing: the return value gets wrapped in a promise. Even returning a plain number gives you a promise that fulfils with that number. Throwing synchronously inside an async function rejects that promise instead of crashing the caller.

**await pauses one function and nothing else**
await takes a promise, waits for it to settle, and hands you the value. While it waits, the engine puts the function aside and runs other code. This is why await never blocks the thread. Blocking means the whole program stops. await never does that. It only stops the one function that contains it, and code after the await waits for it.

**await works on anything**
You can await a promise, or you can await 42, or undefined. Awaiting a non promise just gives the event loop a turn and carries on. So wrapping a plain value in Promise.resolve is a safe habit, and awaiting something that is not a promise is not a bug.

**try and catch replace then and catch**
Because await makes the code read like synchronous code, try and catch finally fits naturally. Put await inside try and any error from that line, or from anything it calls, lands in the catch. You can also use try and catch without any await, because an async function already turns a throw into a rejection.

**Sequential awaits are the default**
Writing await a then await b starts b only after a has finished, so you pay the two times added together. If b does not need the result of a, that waiting is wasted. Start both first, then wait for them together with Promise.all, and you pay only the slower one.

**The classic for loop bug**
A for loop with await inside runs the body one item at a time and waits on every pass, which is the slow version. The fix is to collect the promises into an array as the loop runs, then wait on the whole array with Promise.all. The loop body now starts all the work, and one await waits for the batch.

**Returning, floating promises and top level await**
return inside an async function resolves the promise that function returns, so returning a value works the way you expect. A promise you start but never await is called floating, and a floating promise that rejects reports the problem late, often after the test has already passed or failed. Top level await means using await outside any function, and it only works in a module, which is a file loaded with import or export. In a plain Node script it is a syntax error, so wrap it in an async function instead.`,codeExample:`// async makes the function return a promise. await unwraps one.
const wait = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

async function loadUser(id) {
  await wait(40, null);
  if (id < 0) throw new Error("no user " + id);
  return { id: id, name: "Ana" };
}

// try and catch replaces .catch because await reads like sync code.
async function safely(id) {
  try {
    const user = await loadUser(id);
    return "PASSED: " + user.name;
  } catch (err) {
    return "FAILED: " + err.message;
  }
}

// Sequential awaits add up: 50ms then another 50ms.
async function sequential() {
  const started = Date.now();
  await wait(50, "first");
  await wait(50, "second");
  return Date.now() - started;
}

// Start both on these two lines, then await them together.
async function parallel() {
  const started = Date.now();
  const a = wait(50, "first");
  const b = wait(50, "second");
  const [one, two] = await Promise.all([a, b]);
  return { ms: Date.now() - started, text: one + " and " + two };
}

(async () => {
  console.log(await safely(1));
  console.log(await safely(-1));
  console.log("sequential took " + (await sequential()) + "ms");
  const fast = await parallel();
  console.log("parallel took " + fast.ms + "ms and gave " + fast.text);
})();`,quiz:[{question:"What does the await keyword do?",options:["Blocks the entire program","Pauses the async function until the promise settles","Creates a new thread","Converts sync to async"],correctIndex:1,explanation:"await suspends the async function only, not the whole thread."},{question:"Where can await be used?",options:["Anywhere","Only inside async functions (or modules)","Only in callbacks","Only in arrow functions"],correctIndex:1,explanation:"await is only valid inside async functions or top-level module code."}]},{slug:"fetch-apis",title:"fetch & Working with Real APIs",description:"Making requests, reading responses, and handling errors.",content:`fetch is the built in function for HTTP requests. You give it a URL and it gives back a promise. That promise resolves to a Response object, which holds the status, the headers and a way to read the body. There are always two steps: wait for the response, then read the body.

**fetch does not reject on 404 or 500**
A 404 Not Found is a valid answer from a healthy server, so fetch treats it as a success. A 500 is the same story. The promise only rejects when the request never completed, such as a typo in the host name or no connection at all. So you must check response.ok yourself. It is true for status 200 to 299 and false for everything else.

**The shape of a real call**
Wait for fetch, check res.ok and throw if it is false, then await res.json() to read the body. The body can only be read once, so read it before you start asserting. Skipping the ok check is the most common bug here, because a 404 error body then gets parsed and treated like real data.

**Error first style in a helper**
A helper that hands back the raw response forces every caller to repeat the checks. A helper that throws on a bad status puts the error handling in one place. Put the status and the body in the message, because "request failed" tells you nothing at three in the morning.

**Sending data**
method picks the verb. headers carries metadata. body carries the payload, and a JavaScript object has to be turned into a string with JSON.stringify first. If the body is JSON you must also set Content-Type to application/json, or the server will read the text as something else and reject it.

**Query strings with URL**
Build a URL object and use its searchParams to add query values. searchParams escapes spaces and symbols for you. Do not paste values in by hand, because one stray space in a search term breaks the whole request.

**Timeouts and retries**
An AbortController produces a signal you can pass to fetch, and aborting that signal makes the promise reject with an AbortError. Put a setTimeout around it so a hanging server cannot hang your test run forever, and clear that timer once the response arrives. A flaky endpoint fails now and then, so retry a few times and wait longer after each failure, which is called exponential backoff. Only retry the safe cases. Never retry a POST that creates something, because you may create it twice.

**Browser fetch versus Playwright**
Fetch from inside the page is subject to CORS, which is the browser rule that stops one origin reading another origin's response. Playwright's request context does not run inside the page, so it has no CORS problem and no page cookies. An API test built on a request fixture is the fast, reliable way to check a backend.`,codeExample:`// fetch resolves to a Response and does NOT reject on a 404.
// This fake has the same shape, so the code below is real logic.
function fakeFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = url.includes("users");
      resolve({
        ok: found,
        status: found ? 200 : 404,
        async json() {
          return found ? { users: ["Ana", "Bob"] } : { error: "not found" };
        },
      });
    }, 30);
  });
}

// A helper that throws with the status AND the body, so the
// failure message tells you what the server actually said.
async function getJson(url, options) {
  const method = (options && options.method) || "GET";
  const res = await fakeFetch(url);
  const body = JSON.stringify(await res.json());
  if (!res.ok) throw new Error(method + " " + url + " -> HTTP " + res.status + " " + body);
  return JSON.parse(body);
}

async function apiTest() {
  // searchParams escapes values, so a space in "a b" is safe.
  const url = new URL("https://api.test.com/users");
  url.searchParams.set("page", "1");
  url.searchParams.set("q", "a b");

  try {
    const data = await getJson(url.toString());
    console.log("request was:", url.pathname + url.search);
    console.log("users returned:", data.users.length);
  } catch (err) {
    console.log("helper threw:", err.message);
  }

  try {
    await getJson("https://api.test.com/orders");
  } catch (err) {
    console.log("second call threw:", err.message);
  }
}

apiTest();`,quiz:[{question:"When does fetch reject its promise?",options:["On HTTP 404","On network-level failures only","On HTTP 500","When JSON is missing"],correctIndex:1,explanation:"fetch only rejects on network errors. HTTP statuses must be checked via response.ok."},{question:"What does JSON.stringify do?",options:["Parses text into objects","Turns an object into a JSON string","Validates an API","Formats code"],correctIndex:1,explanation:"stringify serializes to a string; parse is the reverse."}]},{slug:"event-loop",title:"The Event Loop",description:"Microtasks, macrotasks, and the output-order puzzles.",content:`The event loop is the rule book that decides when waiting work gets its turn. It is the answer to "why did that log line print before this one". JavaScript runs your code on one thread, so something has to keep track of everything that is waiting.

**Three places work waits**
- The call stack is the list of functions running right now. It is last in, first out, like a stack of plates. Only one function runs at a time.
- The task queue, also called the macrotask queue, holds whole callbacks such as setTimeout, setInterval and I/O results.
- The microtask queue holds promise callbacks, which means then handlers and everything that runs after an await.

**The loop itself**
Run the code on the stack until the stack is empty. Then drain the entire microtask queue, running every callback in it. Then take exactly one task from the task queue, run it, and start again. The stack must be empty before anything queued is allowed to run. That is why a queued callback can never interrupt a function that is still going.

**Microtasks always beat timers**
Promise callbacks run before the next timer. A microtask queued from inside another microtask still runs before the next timer, because the microtask queue is emptied completely rather than one item at a time. So a log line, then a then handler, then a zero millisecond timer, print in that order.

**setTimeout with 0 is not immediate**
It means "run this as soon as possible after the stack empties", not "run this now". Any slow synchronous code queued ahead of it pushes it back. In practice it lands a few milliseconds later, and that gap is a classic cause of a flaky wait.

**Why a long loop freezes everything**
A busy while loop occupies the call stack and never gives it up. Timers, clicks and promise callbacks are all ready, and none of them may run until the stack is empty. In the browser the page stops repainting. In a test runner your timer based waits all arrive late at once.

**Unhandled rejections**
A rejected promise with no catch has nowhere to go. Node reports an unhandled rejection, and newer versions can end the process on it. If you start a promise and never keep the handle, you get that message instead of your own error.

**How this explains a flaky wait**
A fixed wait of 500ms really means "set a timer and hope the loop is free in time". If a long synchronous step is running, the timer fires late and the check runs against stale state. Replacing a fixed sleep with a loop that polls using await is more reliable, because it asks repeatedly instead of guessing once. Remember the order in a real test too: synchronous code, then every pending promise callback, then one timer at a time. A helper that logs inside itself, followed by an assert after an await, will print the helper log before the assertion even if the code reads the other way round.`,codeExample:`// The event loop decides the print order, not the order of the lines.

console.log("1 - sync, running now");

setTimeout(() => console.log("6 - timer, a macrotask"), 0);

Promise.resolve().then(() => {
  console.log("4 - microtask from a promise");
  // A microtask queued inside a microtask still beats the next timer.
  Promise.resolve().then(() => console.log("5 - microtask from a microtask"));
});

queueMicrotask(() => console.log("4b - microtask from queueMicrotask"));

console.log("2 - sync again");

// A busy loop holds the call stack, so the 20ms timer cannot fire yet.
function blockFor(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

setTimeout(() => console.log("7 - the delayed timer finally ran"), 20);
blockFor(120);
console.log("3 - sync work done, the loop can breathe now");`,quiz:[{question:"Which runs before the other: microtasks or macrotasks?",options:["Macrotasks always","Microtasks drain before the next macrotask","They alternate equally","Randomized"],correctIndex:1,explanation:"The event loop drains the whole microtask queue before each macrotask."},{question:"What lives on the call stack?",options:["Timers","Functions currently executing","Promise callbacks waiting","HTTP responses"],correctIndex:1,explanation:"The call stack holds only what is currently executing."}]}]},{slug:"classes",title:"Classes & Prototypes",icon:"box",description:"Blueprints, inheritance, and the prototype chain underneath it all.",level:"intermediate",lessons:[{slug:"class-basics",title:"Class Basics",description:"constructor, methods, static, and private fields.",content:`A class is a recipe. It describes what an object should contain and what it should be able to do, without being an object itself. One recipe, many cakes: every cake is made separately, but they all came from the same page of the cookbook.

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
- A page object talks to exactly one collaborator, the page. That is the whole design idea.`,codeExample:`// A class is a template. new builds one object from it.
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

// ana.#balance written here is a parse error, not undefined. That is the point.`,quiz:[{question:"What runs when you create new User('Ana')?",options:["A static method","The constructor","A getter","Nothing"],correctIndex:1,explanation:"new invokes the constructor to set up the instance."},{question:"When should you use a static method?",options:["When it needs instance data","When it relates to the class, not instances","For every method","Never"],correctIndex:1,explanation:"Static methods live on the class itself and don't receive this."}]},{slug:"class-inheritance",title:"Class Inheritance",description:"extends, super, and overriding properly.",content:`Inheritance is when one class says: I am based on that class, and I keep everything it can do. It is a reuse shortcut. JavaScript allows exactly one parent per class, so inheritance is a single line of descent, not a branching tree.

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
- Never extend a test class just to reuse one helper. Pass the helper in instead. That is the next lesson.`,codeExample:`// extends inserts one more link in the prototype chain.
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
}`,quiz:[{question:"What does super() do in a subclass constructor?",options:["Deletes the parent","Calls the parent constructor","Creates a new class","Nothing"],correctIndex:1,explanation:"super(...) invokes the parent class constructor for proper initialization."},{question:"loginPage instanceof BasePage is true when?",options:["Always","When LoginPage extends BasePage","Never","Only in strict mode"],correctIndex:1,explanation:"instanceof follows the prototype chain, so subclasses match their base."}]},{slug:"prototypal-inheritance",title:"Prototypal Inheritance",description:"The mechanism that makes classes work.",content:`Classes are a tidier spelling of something older. The older thing is the prototype chain, and every object in JavaScript is already part of it whether you wrote a class or not.

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
- Reach for the prototype by hand only to patch a built-in, and even then remember that Array.prototype.feed = ... affects every array in the process, including arrays inside libraries you did not write.`,codeExample:`// Every object has a hidden link. Reading a missing name walks it.
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
console.log(JSON.stringify(new R("R2")), Object.keys(R.prototype));`,quiz:[{question:"When you access an object property, JS checks:",options:["Only the object itself","The object, then up the prototype chain","Only the prototype","The global object"],correctIndex:1,explanation:"Lookup goes up the prototype chain until found or reaching null."},{question:"Where do array methods like map come from?",options:["Each array copies them","Array.prototype via the chain","The global scope","The array literal"],correctIndex:1,explanation:"Arrays inherit their methods from Array.prototype."}]},{slug:"composition-over-inheritance",title:"Composition over Inheritance",description:"Mixins, factory functions, and avoiding deep hierarchies.",content:`"Prefer composition over inheritance" is a rule of thumb, not a law. It says: instead of a class pretending to be a poor version of another class, let a class hold the thing it needs as a plain property.

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
- In real tests a fixture usually holds page, request and logger objects, and a Playwright class takes request as a constructor argument so a test can pass a fake one.`,codeExample:`// Prefer composition: hold what you need instead of extending something.
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
console.log(client.post("/users", { name: "Ana" }));`},{slug:"json",title:"Working with JSON",description:"parse, stringify, replacers, and safe API payloads.",content:`JSON is a text format, not a JavaScript value. The name means JavaScript Object Notation, which only claims to be the way we write objects down as text. Two functions move between the text and the live object.

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
- Test fixtures, config files and recorded network traffic are all JSON.`,codeExample:`// JSON is text. stringify makes text, parse makes an object.
const user = {
  name: "Ana",
  age: 30,
  tags: ["admin"],
  createdAt: new Date("2024-01-15T09:30:00Z"),
  nick: undefined,
  greet() { return "hi"; },
};

console.log("compact:", JSON.stringify(user));
console.log("pretty:
" + JSON.stringify({ id: 7, ok: true }, null, 2));

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
console.log("=== is", a === b, "| deep is", JSON.stringify(a) === JSON.stringify(b));`}]},{slug:"dom",title:"DOM & Browser APIs",icon:"globe",description:"Reading and changing a live web page from JavaScript.",level:"intermediate",lessons:[{slug:"dom-basics",title:"DOM Basics",description:"The DOM tree, nodes, and creating elements.",content:`The DOM stands for Document Object Model. It is the browser's live picture of your page.

The HTML file you wrote is only text. When the browser reads that file, it builds a tree of objects in memory. That tree is the DOM.

Think of a flat-pack box. The flat file is the instructions. The assembled tree is the real thing you can walk around and change.

JavaScript always talks to the tree, never to the file.

**What the DOM actually is**
- The HTML file is the blueprint. The DOM is the assembled model.
- document is the root object. It sits at the top of the tree and is the door into everything else.
- window sits above document. It is the browser tab itself and it holds the URL, timers and history.
- The tree is built while the browser parses. Your script can run before the last node exists, which is why load order matters.

**Nodes and node types**
- A node is one single thing in the tree. A div is a node. The words inside it are a separate node.
- nodeType is a number that says what kind of node you have. 1 is an element, 2 is an attribute, 3 is text, 8 is a comment.
- Element nodes have a tagName in upper case. Text nodes have no tagName, only a data string.
- You rarely pick text nodes on purpose. You ask for elements and read the text inside them.

**Parent, child, and the live tree**
- A parent holds children. A child knows its parent. The link runs both ways.
- children gives you only element children. childNodes also includes text and comments.
- The tree is live, not a snapshot. Keep a reference to a node, move it somewhere else, and your reference still points at that same live node.
- The trap: a reference to a node you removed still exists in JavaScript. It is now detached, so nothing on screen can reach it.

**Text versus markup**
- textContent reads plain text. Reading it builds no elements, so it is fast and it is safe.
- innerHTML returns markup as a string. Reading it makes the browser parse that markup back into nodes. That work is wasted on you.
- Setting innerHTML re-parses a string. Setting textContent just stores a string. Never read innerHTML in a loop over thousands of nodes.

**document.write is off limits**
- document.write pushes HTML straight into the page while it loads. It only behaves while the page is still parsing.
- Run later and it can wipe the whole document. It also blocks parsing while it works.
- Once a framework has mounted, document.write either throws or destroys the app. Do not use it.

**Where you meet this in real work**
- Playwright asks the browser for the DOM over a protocol. Cypress injects code into the page and walks the tree directly.
- Both of them wait for a node to exist before touching it. That wait is just watching the tree change.
- When a test says element not found, it means no node in the tree matched. It does not mean the page is broken.`,codeExample:`// There is no browser in this editor, so we build a tiny fake DOM.
// Each node is a plain object: nodeType, tagName, textContent, parent, children.
const TYPE = { DOCUMENT: 9, ELEMENT: 1, TEXT: 3, COMMENT: 8 };

function el(tag, text, kids) {
  const node = { nodeType: TYPE.ELEMENT, tagName: tag.toUpperCase(),
    textContent: text, parent: null, children: [] };
  for (const kid of kids || []) appendTo(node, kid);
  return node;
}

// In a real browser the browser wires parent and child links for you.
// Here it is just pointer juggling, and that is all it really is.
function appendTo(parent, child) {
  child.parent = parent;
  parent.children.push(child);
  return child;
}

const document = { nodeType: TYPE.DOCUMENT, tagName: "#document", children: [] };
const heading = appendTo(document, el("h1", "Dashboard"));
const list = appendTo(document, el("ul"));
appendTo(list, el("li", "First task"));
const second = appendTo(list, el("li", "Second task"));

console.log("nodeType 1 means element:", second.nodeType === TYPE.ELEMENT);
console.log("tagName:", second.tagName, "| parent:", second.parent.tagName);
console.log("two levels up:", second.parent.parent.tagName);

// The tree is live. Move a node and the reference you already held still works.
appendTo(list, heading);
console.log("h1 moved to:", heading.parent.tagName, "| text still:", heading.textContent);
console.log("list now holds:", list.children.map((n) => n.textContent).join(" | "));`,quiz:[{question:"What does the DOM represent?",options:["A database","The HTML page as a tree of nodes","The server","A network protocol"],correctIndex:1,explanation:"The DOM models the page as an object tree you can manipulate."},{question:"What is the root of the page tree?",options:["window","document","body","html"],correctIndex:1,explanation:"document is the entry point; html is a node inside it."}]},{slug:"dom-selection",title:"Selecting Elements",description:"querySelector, closest, and resilient selector strategy.",content:`Finding an element is the first thing every script and every test does. The browser ships several finders. They all hand back the same thing, a live reference to a node.

What differs between them is how you describe what you want.

**The two workhorses**
- querySelector takes a CSS selector and returns the first match, or null when nothing matches.
- querySelectorAll takes a CSS selector and returns a NodeList of every match.
- Because they read CSS you already know the syntax. #id, .class, tag, [attr=value], and > for a direct child.
- Always check the result. A null return often just means the page had not built that node yet.

**NodeList is not an Array**
- A NodeList is array-like. It has a length and you can loop it, but it has no map and no filter.
- Wrap it with Array.from(nodeList) when you want real array methods.
- The list from querySelectorAll is static. It is a snapshot, so later page changes do not update it.

**The older finders still exist**
- getElementById is the fastest finder, because ids are indexed. It only works on document, never on a subtree.
- getElementsByClassName returns a live NodeList, which means it updates itself as the page changes.
- getElementsByTagName is the loosest of them. It matches every tag on the page.

**Which selector survives a redesign**
- Best is data-testid. It exists only for tests, so the design team can rename every class and it still works.
- Next is role plus accessible name, such as a button whose accessible name is Checkout. That describes meaning, not styling.
- Then a stable id that the app treats as part of its contract.
- Last is a CSS class. Classes exist for styling, so they move whenever the design moves.

**Why nth-child is the most fragile selector**
- nth-child(2) counts position, not meaning. Insert one row above and every index shifts.
- The same selector can quietly point at a different row in a different environment.
- Prefer finding the row that contains the text you expect, then scoping the query inside that row.

**Walking up with closest, and scoping down**
- closest starts at the node you call it on and walks upward until it finds a match.
- That is how you go from a clicked button back to the row, card or list item that owns it.
- matches answers yes or no about one node. It is a cheap way to filter a NodeList.
- element.querySelectorAll searches only inside that element and never escapes upward. Scope hard when a class appears in a header, a sidebar and the main area.

**How Playwright, Cypress and Selenium differ**
- Playwright asks the browser directly. Its locator waits, retries and reads a fresh snapshot every time.
- Cypress injects code into the page and runs the same querySelector your own app runs.
- Selenium asks a driver process to find the element by selector over the wire.
- That is why every tool has its own test-side locator API. Each one wraps find the element with its own waiting behaviour.`,codeExample:`// No browser here, so we hand-roll the finders.
// querySelectorAll really does take a CSS selector string like this one.
const node = (tag, cls, text, kids) => ({ tag, cls, text, children: kids || [] });
const btn = node("button", [], "Delete");
const doc = node("#document", [], "", [
  node("ul", ["task-list"], "", [
    node("li", ["task"], "Buy milk", [btn]),
    node("li", ["task", "done"], "Ship release"),
  ]),
]);

// Depth first walk, like the real engine does it.
function walk(n, out) {
  out.push(n);
  for (const kid of n.children) walk(kid, out);
  return out;
}
function matches(n, sel) {
  if (sel.charAt(0) === ".") return n.cls.includes(sel.slice(1));
  return n.tag === sel;
}

const all = walk(doc, []);
const found = all.filter((n) => matches(n, ".task"));
// querySelectorAll returns a NodeList: length plus keys, no map.
const nodeList = { length: found.length };
found.forEach((n, i) => { nodeList[i] = n; });

console.log("length:", nodeList.length, "| has map:", typeof nodeList.map);
console.log("Array.from:", Array.from(nodeList).map((n) => n.text).join(" | "));
// nth-child(2) counts position, not meaning.
console.log("nth-child(2) points at:", nodeList[1].text);

// closest walks UP to the row that owns the click.
function closest(n, sel) {
  for (let p = n; p; p = p.parent) if (matches(p, sel)) return p;
  return null;
}
btn.parent = doc.children[0].children[0];
console.log("closest('.task') from button:", closest(btn, ".task").text);`,quiz:[{question:"Which selector matches elements with id='submit'?",options:[".submit","#submit","submit","id=submit"],correctIndex:1,explanation:"# tells querySelector to match an ID."},{question:"What does querySelectorAll return?",options:["A single element","A NodeList of matches","An array always","An HTML string"],correctIndex:1,explanation:"querySelectorAll returns a NodeList (array-like)."}]},{slug:"dom-manipulation",title:"Changing the DOM",description:"textContent, classList, attributes, createDocumentFragment.",content:`Reading the page is one half of the DOM. Writing to it is the other half.

Writing means you add nodes, remove nodes, change their text and change their attributes. Almost every method is one short line. The real trap is picking the wrong one.

**Three ways to set the words inside an element**
- textContent sets and reads plain text. The browser escapes any tags you put in, so a user cannot inject markup.
- innerHTML parses a string of markup into real nodes. Use it only for markup you fully control.
- innerText reads the text as it is rendered. It is layout aware, so it is slower and it hides anything set to display none.
- Rule of thumb: textContent for anything from a user or an API. innerHTML only for your own templates.

**classList versus className**
- className is one string. Assign to it and you wipe every class that was there before.
- classList is a live list of the individual names. add, remove, toggle and contains each touch one name.
- toggle tells you which way it went. It returns true when it added the class and false when it removed it.

**Attributes and data attributes**
- setAttribute writes any attribute. getAttribute reads it back as a string, or null when it is missing.
- Attributes written as data-something appear on the dataset object.
- dataset.testid maps to data-testid. A dash becomes a camelCase step, so data-user-id is dataset.userId.

**Creating, placing and removing nodes**
- createElement makes a detached node. It exists in memory but is not on the page yet.
- Detached means invisible. CSS does not apply and no event reaches it.
- append adds one or many nodes at the end. prepend adds at the start.
- appendChild is the older form. It takes exactly one node and cannot take a string.
- insertBefore needs the new node plus the node to sit in front of. replaceWith swaps one node for another.
- child.remove() works from the child side. parent.removeChild(child) works from the parent side.

**Batch your writes**
- A DocumentFragment is a lightweight offscreen container. You build nodes inside it, then append it once.
- The browser recalculates layout once at the end. Appending one node at a time recalculates it every single time.
- That repeated recalculation is called reflow. On a list of a thousand rows the difference is obvious.

**Rebuild from data, always**
- The reliable pattern is a render function. It takes an array of items and rebuilds the list from scratch.
- It has no hidden state to fall out of sync, so a test can always trust what it reads.
- Never build an HTML string by pasting untrusted input into it. Use createElement and textContent instead.

**Where you meet this in real work**
- Playwright reads textContent and innerText and compares them. It reads attributes for test ids.
- Asserting that an item disappeared usually means watching for the node to be removed, not for a text change.`,codeExample:`// Plain objects stand in for elements. Same method names, no browser.
function createElement(tag) {
  return {
    tagName: tag.toUpperCase(),
    textContent: "",
    classList: new Set(),
    dataset: {},
    children: [],
    parent: null,
    append(node) { node.parent = this; this.children.push(node); return this; },
    remove() {
      if (!this.parent) return;
      this.parent.children = this.parent.children.filter((c) => c !== this);
      this.parent = null;
    },
  };
}

// Build offscreen, then swap the list in once.
const list = createElement("ul");
list.classList.add("task-list");

function render(items) {
  const fragment = createElement("#fragment"); // a DocumentFragment in the browser
  for (const item of items) {
    const li = createElement("li");
    li.textContent = item.title; // markup stays text, nothing executes
    li.dataset.testid = "task-" + item.id; // maps to data-testid
    if (item.done) li.classList.add("done");
    fragment.append(li);
  }
  list.children = fragment.children;
  list.children.forEach((c) => (c.parent = list));
}

render([{ id: 1, title: "Buy milk", done: false }, { id: 2, title: "Ship <v2>", done: true }]);
console.log("Rendered:", list.children.map((c) => c.textContent + " done=" + c.classList.has("done")).join(" | "));

list.children[0].remove();
console.log("After remove:", list.children.length, "row(s) | first testid:", list.children[0].dataset.testid);`,quiz:[{question:"Which property safely sets plain text on an element?",options:["innerHTML","textContent","value","style"],correctIndex:1,explanation:"textContent treats the string as text (innerHTML risks XSS)."},{question:"How do you add a CSS class to an element?",options:["element.class = 'x'","element.classList.add('x')","element.setClass('x')","class(element, 'x')"],correctIndex:1,explanation:"classList.add manages classes safely."}]},{slug:"events",title:"Events",description:"Listeners, the event object, delegation, and bubbling.",content:`An event is a record that something happened. A click, a key press, a submit, a scroll.

The browser builds the event object and hands it to every listener you registered. Events are how a page reacts. They are also how a test watches a page.

**addEventListener takes three things**
- The first argument is the event name as a string, such as click or submit.
- The second argument is the handler, a function that receives the event object.
- The third argument is an options object. You may pass it or leave it out.
- To remove a listener, call removeEventListener with the same type and the same function reference.
- An anonymous arrow function has no reference to match, so nothing gets removed. Keep the handler in a variable.

**The options object**
- once runs the handler a single time and then removes it. Good for a one-shot submit.
- capture listens during the capture phase, before the event reaches the target.
- passive promises that you will not call preventDefault. The browser can scroll without waiting for you.
- Setting passive on touch and scroll listeners is the standard performance advice.

**Three phases**
- Capture. The event walks down from window to the target.
- Target. The listener on the clicked node runs.
- Bubble. The event walks back up from the target to window.
- stopPropagation halts the rest of the walk.
- stopImmediatePropagation also skips the remaining listeners on the same node.

**target versus currentTarget**
- target is the deepest node the event happened on. Click a label inside a button and target is the label.
- currentTarget is the element whose listener is running right now. In a delegated handler that is the parent.
- Rule: inside a delegated handler use currentTarget for the parent and target for the clicked item.

**Delegation**
- Event delegation puts one listener on a shared parent and lets it handle many children.
- It is like one receptionist at a desk serving every visitor, instead of one receptionist per room.
- It survives new children too. Nodes added later are handled with no new listeners at all.
- Use closest on the target to walk back up to the row or card that owns it.

**preventDefault versus stopPropagation**
- preventDefault cancels the browser's built-in action. Form navigation and link following are the usual two.
- stopPropagation stops other nodes from seeing the event. It does not cancel the default action.
- Use both when you handle a submit yourself and do not want the parent handler to also react.

**Where you meet this in real work**
- Clicking a submit button fires submit on the button and on the form. Handle it once, on the form.
- Clicking a label forwards the click to its input, which is why label tests pass after a single click.
- Keyboard work needs keydown or key. A bare keypress is unreliable and deprecated.
- A custom event lets your own code announce something. Build it with CustomEvent and fire it with dispatchEvent. Tests can listen for it too.
- page.click dispatches a real click through all three phases, so your delegated listener will see it.`,codeExample:`// Tiny event system. Real order: capture, target, bubble.
function el(tag, kids) {
  const n = { tagName: tag, parent: null, children: kids || [], listeners: [] };
  n.children.forEach((c) => (c.parent = n));
  return n;
}
function fire(target, type, detail) {
  // One event object, shared by every listener.
  const e = { type, detail, target, currentTarget: null, stopped: false,
    stopPropagation() { this.stopped = true; }, preventDefault() { this.prevented = true; } };
  const down = [];
  for (let n = target; n; n = n.parent) down.unshift(n); // window down to target
  for (const n of down.concat(down.slice(1).reverse())) { // then target, then back up
    if (e.stopped) break;
    e.currentTarget = n;
    n.listeners.filter((l) => l.type === type).forEach((l) => l.fn(e));
  }
}

// One listener on the parent handles many children: event delegation.
const row = el("tr");
const btn = el("button");
row.children.push(btn); btn.parent = row;
row.listeners.push({ type: "click", fn: (e) =>
  console.log("target", e.target.tagName, "| currentTarget", e.currentTarget.tagName) });
fire(btn, "click");

// A custom event is how your own code announces something.
// In a browser: new CustomEvent("saved", { detail }) then dispatchEvent.
const saved = el("status");
saved.listeners.push({ type: "saved", fn: (e) => console.log("custom event id", e.detail.id) });
fire(saved, "saved", { id: 7 });`,quiz:[{question:"What does e.preventDefault() do?",options:["Stops the script","Cancels the browser's default action","Deletes the element","Stops the event loop"],correctIndex:1,explanation:"preventDefault cancels default behavior like form submission."},{question:"What is event bubbling?",options:["Events firing multiple times","An event traveling from target up to ancestors","Slower events","Events going down the tree only"],correctIndex:1,explanation:"After firing on the target, events bubble up through ancestors."}]},{slug:"forms",title:"Forms",description:"Reading input values, validation, and submit events.",content:`A form is how a page collects input. For an automation tester a form is also the thing you drive most: login, search, checkout. Reading values back out correctly removes most flaky form tests.

**form.elements is the reliable way in**
- form.elements is a live collection of every input, select, textarea and button inside the form.
- Reach a field by its name attribute, because that is the name sent to the server.
- A lookup by class or by position breaks the moment somebody adds a hidden field.
- A field placed outside the form but carrying a matching form attribute still shows up in this collection.

**value versus textContent**
- An input holds no child nodes. The current text lives in its value property.
- Reading textContent on an input gives you the default text in the markup, not what the user typed.
- That mismatch is the most common cause of a test reading an empty string from a field it just filled.
- A textarea is the exception. A textarea keeps its default value as a child text node.

**input versus change**
- input fires on every keystroke. Use it for live counters and instant validation.
- change fires when the value settles, usually on blur. Use it for expensive work.
- Assigning value from script fires neither. Playwright's fill dispatches both for you, which is why you should use fill.

**Checkboxes, radios and selects**
- A checkbox and a radio report their state in checked, a boolean.
- value on a checkbox is the fixed string from the markup, often the literal "on".
- Group radios by their name attribute. Only the selected one is checked.
- A select has a value that must match the option value you want. selectedIndex is the position, and it is -1 when nothing is chosen.
- The options live in select.options, a live collection with a length and numeric indexes.

**Submitting**
- The submit event fires on the form when a submit button is clicked or Enter is pressed.
- Always preventDefault in the handler, or the browser reloads the page and your test loses its state.
- form.reset() puts every field back to the default in the markup and clears checked boxes.

**Constraint validation**
- required, type, min, max, minlength, pattern and step are the rules you put on a field.
- validity.valid is the boolean summary. checkValidity() runs the rules and returns the same answer.
- reportValidity() runs the rules and shows the browser's own error bubbles.
- The novalidate attribute turns the whole check off, so then you read the values yourself.

**FormData, and when to call the API instead**
- new FormData(form) builds a key and value map from every named field, checkboxes, selects and files included.
- It is the closest thing to the request body the browser would really send.
- A form submit might be a page navigation, an XHR or a fetch call. You cannot tell which from the outside.
- In a test, intercept the request or call the API directly. Testing the API checks your logic. Testing the form checks wiring. Usually you want both, in separate tests.`,codeExample:`// No browser here. A form is an object holding fields, keyed by name.
function field(props) {
  return Object.assign({ type: "text", value: "", checked: false }, props);
}

const form = {
  elements: {
    email: field({ type: "email", required: true }),
    password: field({ type: "password", required: true }),
    plan: field({ type: "select", value: "free", options: ["free", "pro"], selectedIndex: 0 }),
    newsletter: field({ type: "checkbox", value: "on" }),
  },
};

// In a real browser: await page.fill("#email", "a@test.com")
form.elements.email.value = "a@test.com";
form.elements.password.value = "short";
form.elements.plan.value = "pro";
form.elements.plan.selectedIndex = 1;
form.elements.newsletter.checked = true;

console.log("email value:", form.elements.email.value);
console.log("checked:", form.elements.newsletter.checked, "| value stays:", form.elements.newsletter.value);

// Constraint validation. The browser runs these rules before it submits.
const RULES = { email: (v) => v.includes("@"), password: (v) => v.length >= 8 };
for (const name of Object.keys(RULES)) {
  const el = form.elements[name];
  console.log(name, "valid:", el.required ? RULES[name](el.value) : true);
}

// FormData gathers every named field, exactly like the browser before sending.
const data = {};
for (const name of Object.keys(form.elements)) {
  const el = form.elements[name];
  data[name] = el.type === "checkbox" ? el.checked : el.value;
}
console.log("FormData:", data);`,quiz:[{question:"Which property holds a checkbox's state?",options:["value","checked","selected","state"],correctIndex:1,explanation:"checked is the boolean state for checkboxes and radios."},{question:"Why use fill() instead of setting .value directly?",options:["It's faster","It fires the proper events automation needs","It's the only way","No reason"],correctIndex:1,explanation:"fill() sets the value and dispatches input/change events."}]},{slug:"window-object",title:"Window Object",description:"Timers, location, history, and sizing the viewport.",content:`window is the browser tab as a JavaScript object. It is also the global object in a browser.

That means any variable you declare without let or const ends up on it. Everything browser specific you read, like the URL or the screen size, hangs off window.

**The global object**
- The global object is the one object every bare name resolves against.
- In a browser that is window. In Node it is globalThis. globalThis is the name that works in both.
- Inside an ES module the top level this is undefined, not the global object.
- Practical consequence: declare variables with let or const. Then nothing leaks onto window by accident.

**Timers**
- setTimeout runs a function once after a delay in milliseconds. It returns a numeric id.
- clearTimeout takes that id and cancels the run. There is no other way to cancel it.
- setInterval runs a function every delay. clearInterval takes its id and stops it.
- Keep the id in a variable. Without it you have a timer running and no handle on it at all.
- A delay is a minimum, not a promise. A busy tab or a throttled tab makes the callback arrive late.

**requestAnimationFrame**
- It asks to run a callback just before the next repaint of the screen.
- Use it for animation and for anything that must match the frame rate, such as dragging.
- The browser calls it about sixty times a second, and it stops while the tab is hidden.

**location is the URL, and history is the back stack**
- location.href is the whole URL. Assigning to it navigates the tab.
- location.pathname is the path. location.search is the query string, leading question mark included.
- location.hash is the fragment after the hash. location.reload() reloads the current page.
- history.length is how many entries the tab has in its back stack. history.back() and history.forward() move through it.
- pushState adds an entry without loading a page. That is how a single page app fakes routes.
- In tests, reading location after an action is how you assert that a navigation happened.

**Reading the browser and the screen**
- navigator.userAgent is a string describing the browser. Tests match on a substring of it.
- screen.width and screen.height are the whole monitor. innerWidth and innerHeight are the viewport only.
- outerWidth includes the browser chrome. innerWidth is what decides your responsive layout.
- scrollY is how far the page is scrolled down. Zero means the top.
- devicePixelRatio is CSS pixels per physical pixel. It matters when you compare screenshots.

**resize and scroll, and window versus document**
- resize fires on every step while a window is being dragged. scroll fires on every scroll step, maybe sixty times a second.
- Throttle or debounce both, or the page spends its time inside your handler.
- document is the page tree. window is the tab. window.document points at that tree.
- localStorage and sessionStorage also hang off window. They have their own topic.

**Where you meet this in real work**
- Setting the viewport size in Playwright changes innerWidth. Reading it back proves a breakpoint fired.
- Asserting on location after a click catches the redirect that a text assertion misses.
- A test that reads history.length after a back navigation confirms the stack really moved.`,codeExample:`// No browser, so window is a plain object with real names.
const win = {
  innerWidth: 1280, innerHeight: 720, scrollY: 0,
  screen: { width: 2560, height: 1440 },
  navigator: { userAgent: "Mozilla/5.0 Chrome/124.0" },
  location: { href: "https://shop.test/checkout?coupon=SAVE10#pay" },
  history: { length: 3, back() { this.length -= 1; return "back"; } },
  listeners: {},
  addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); },
};

// A browser splits location into parts.
const url = new URL(win.location.href);
console.log("host:", url.host, "| path:", url.pathname, "| coupon:", url.searchParams.get("coupon"));
console.log("viewport", win.innerWidth + "x" + win.innerHeight, "| monitor", win.screen.width);
console.log("history", win.history.length, "->", win.history.back(), "->", win.history.length);

// Timers hand back a handle. Keep it to cancel.
let ticks = 0;
const id = setInterval(() => { ticks += 1; }, 50);
clearInterval(id);
console.log("interval cleared, ticks:", ticks, "| handle:", typeof id);

// resize and scroll fire every step, so handlers stay cheap.
let fires = 0;
for (const type of ["resize", "scroll"]) win.addEventListener(type, () => fires++);
for (let step = 0; step < 5; step += 1) {
  win.innerWidth -= 40;
  win.scrollY += 300;
  win.listeners.resize.forEach((fn) => fn());
  win.listeners.scroll.forEach((fn) => fn());
}
console.log("5 steps gave", fires, "calls | width", win.innerWidth, "scrollY", win.scrollY);`,quiz:[{question:"What is the window object in browsers?",options:["The global object holding most browser APIs","A DOM element","A style rule","The printer"],correctIndex:0,explanation:"window is the global object; globals and browser APIs live on it."},{question:"Which window object holds the page URL?",options:["window.history","window.location","window.document","window.navigator"],correctIndex:1,explanation:"location holds href, pathname, search."}]}]},{slug:"modules",title:"Modules & Tooling",icon:"package",description:"Splitting code into files and shipping it to production.",level:"intermediate",lessons:[{slug:"modules",title:"ES Modules",description:"import, export, default, and named exports.",content:`A module is just a JavaScript file that says what it gives away and what it needs. One file per idea: page objects in one file, test data in another, helpers in a third. Nothing else in the project has to know how any of them work.

**Each file is its own island**
- A file loaded with import or export is a module, and every module has its own top-level scope.
- Think of it as a room with a locked door. Only what you export is visible outside.
- Top-level const, let, function and class names are private. Two files can both define login and neither breaks the other.
- Unlike a plain script, a module adds nothing to the global object, so nothing leaks.
- A module runs at most once per page load, however many files import it. The second import hands back the same finished values.

**Named exports and the one default export**
- export const HOST = "https://api.test.com" exports a value. export function login(user) exports a function. Both are named exports.
- export default login exports a single thing as the default. A file may have at most one default.
- import { HOST, login } from "./api.js" takes named exports. The braces say "these exact names".
- import LoginPage from "./pages/login.js" takes the default. No braces, and you pick the local name.
- Use named exports when a file has more than one thing worth sharing. They rename themselves when the original name changes.
- Use a default when there is one obvious thing: one component, one class, one function.
- import * as api from "./api.js" grabs the whole module as an object, so you call api.login().

**Re-exporting and renaming**
- export { login } from "./api.js" passes a name straight through without importing it first. That is a re-export.
- export * from "./api.js" passes through every named export. The default one is left out.
- A barrel file collects re-exports so callers can import from one place. Convenient, but it hides where things really live.
- Aliasing renames on the way in: import { login as signIn } from "./api.js".
- You can rename on the way out too: export { login as signIn } from "./api.js".

**Live bindings, and code that runs once**
- A named export is a live binding. It is a window onto the variable, not a photo of it.
- So if a module does export let count = 0 and later count = 5, any importer reading count after that line sees 5.
- A default export is a snapshot, because it copies the value once at the export.
- Imported names are read-only in the importer. To reset a shared counter, export a reset function instead.
- Import state lives in one place, and every importer shares it.

**Errors, and traps that stay silent**
- Asking for a name a module does not export is a hard error, caught before your code runs. Reading a missing property off an object would just give undefined.
- That strictness is the point. The tool that builds your code checks the shapes for you.
- A circular import, where A imports B and B imports A, gives you undefined instead of an error, because B is still half-built when A reads it.
- Break the cycle by moving the shared piece into a third file that both sides import.
- import must sit at the top level. You cannot hide one inside an if block.

**CommonJS, the older system**
- CommonJS is the older Node system: const api = require("./api") and module.exports = { ... }.
- CommonJS hands back an object you can change at any moment. ES modules publish live bindings a tool can analyse.
- Importing a name CommonJS lacks gives undefined, with no error at all. That is why the two mix badly.
- Node treats .mjs as ES modules and .cjs as CommonJS, so one project can hold both.

**Tree shaking**
- Tree shaking means the build deletes code nobody imported. It is how a bundle loses the 200 KB of a chart library you never used.
- It only works with static ES module imports, because the tool has to know the names before anything runs.
- A dynamic import hides the path, so the tool must keep the whole module. The next lesson covers that.`,codeExample:`// A stand-in for import/export, so you can watch the rules work.
// --- a.js ---   export const HOST = "..."; export let retries = 3;
const a = {
  HOST: "https://api.test.internal",
  retries: 3,
  default: { name: "ApiClient" },
};

// --- b.js ---   import { retries } from "./a.js";
const b = { load: () => "loaded with retries=" + a.retries };

// registry = the cache Node keeps, so each file runs once
const cache = new Map();
let runs = 0;
function load(path) {
  if (!cache.has(path)) {
    runs++;
    cache.set(path, path === "./a.js" ? a : b);
  }
  return cache.get(path);
}

// This is what import { HOST, retries, default as ApiClient } gives you.
const { HOST, retries, default: ApiClient } = load("./a.js");
console.log("named export:", HOST, "retries:", retries);
console.log("default export:", ApiClient.name);
console.log("other file sees:", b.load());

// Live binding: the exporter reassigns, the importer follows.
a.retries = 5;
console.log("after the exporter reassigns:", b.load());
console.log("3 imports later, file ran once:", runs === 1 && load("./a.js") === a);

// A cycle: each file needs the other, so one side sees a half-built object.
const cycle = { api: {}, client: { api: undefined } };
cycle.client.api = cycle.api;
console.log("cycle half-built, so api.name is:", cycle.client.api.name);

// Tree shaking: the build drops exports nobody imported.
console.log("kept HOST, retries, dropped default, brandColor");`,quiz:[{question:"When is a module's code executed?",options:["On demand","Once, when the module is first imported","Never","In strict mode only"],correctIndex:1,explanation:"ES modules are evaluated once on first import, then cached."},{question:"How do you import a default export?",options:["import * as x","import x from './file.js'","import { x }","require(default)"],correctIndex:1,explanation:"Default imports use the bare import name without braces."}]},{slug:"dynamic-imports",title:"Dynamic Imports",description:"Loading code on demand with import().",content:`A static import starts downloading before your first line runs. A dynamic import asks for the code later, when a promise settles. That single difference changes when the network request happens.

**What import() actually does**
- import("./chart.js") is a function call, so it can sit inside an if block, a loop, or a click handler.
- It returns a Promise. You have to await it or attach a .then to it.
- The path can be a variable. import(somePath) is legal. A static import with a built-up string is not.
- The browser only fetches the file when the call runs. That is the whole point.
- After the first load the module is cached by path, so a second call resolves instantly.

**When you want lazy loading**
- The code is heavy and only one screen needs it: a chart library, a PDF viewer, a spreadsheet grid.
- The feature sits behind a flag, so most sessions never touch that code at all.
- The cost only makes sense after someone asks, like fetching a PDF when they click Download.
- You want to pick an implementation at run time, for example a mock adapter during a test run.

**The result is a module object**
- Awaiting the import gives you a namespace object holding every export of that file.
- The default export sits on .default, so you call mod.default.draw(). Named exports are directly on the object.
- That is the same shape import * as ns gives you, so the two styles read the same afterwards.

**Loading it on interaction**
- Put the import in the click handler, await it, then run the code that needs it.
- The first click waits for the download. Show a spinner, or accept the delay if the file is small.
- If the panel is opened often, preload it on hover or on focus so the wait is already over.

**A small loader with a cache**
- The module system already caches by path. Your own cache stops you repeating work that is still in flight.
- Keep a Map of path to promise, return the same promise on the next call, and nothing downloads twice.

**When the load fails**
- A missing file rejects the promise. It does not throw from somewhere inside your handler.
- A try and catch around the await turns that into a normal error you can log or report.
- This is why a dynamic import is the safer choice when a file might be absent.

**Top-level await and preloading**
- await works at the top level of a module. It does not work in a plain script, because nothing is there to wait.
- To preload, fire the import early and keep the promise: const ready = import("./chart.js"). Later, await ready.
- A link tag with rel="modulepreload" tells the browser a file will be needed soon.
- The real payoff is code splitting. A bundler puts each dynamic import into its own chunk file, and that chunk only arrives when the code runs.`,codeExample:`// A stand-in for import("./chart.js"), which returns a Promise.
const files = {
  "./chart.js": { default: "Chart", draw: (n) => "drew " + n + " bars" },
};

// The cache: a path is downloaded once, then reused.
const cache = new Map();
let downloads = 0;

function importModule(path) {
  if (cache.has(path)) return cache.get(path);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      downloads++;
      if (files[path]) resolve(Object.assign({}, files[path]));
      else reject(new Error("404 for " + path));
    }, 10);
  });
  cache.set(path, promise);
  return promise;
}

const USE_CHARTS = false;   // imagine a feature flag

async function main() {
  // Preload: fire it early so the download overlaps with other work.
  const early = importModule("./chart.js");

  if (USE_CHARTS) {
    const mod = await early;                 // await import("./chart.js")
    console.log(mod.default, "|", mod.draw(3)); // module object, .default
  } else {
    console.log("flag off, so it was never awaited");
  }

  try {
    await importModule("./missing.js");
  } catch (err) {
    console.log("caught:", err.message);
  }

  console.log("downloads:", downloads, "(the cache made the second one free)");
}
main();`,quiz:[{question:"What does dynamic import return?",options:["The module value","A Promise resolving to the module namespace","void","A string"],correctIndex:1,explanation:"import() returns a Promise for the module namespace object."},{question:"When is dynamic import useful?",options:["Always","To load heavy code only when needed","To avoid all imports","Only in Node"],correctIndex:1,explanation:"Lazy loading improves startup and enables code splitting."}]},{slug:"package-managers",title:"Package Managers",description:"npm, package.json, semver, scripts, and lockfiles.",content:`A package manager downloads code that other people wrote and keeps track of exactly what you asked for. npm is the one that ships with Node. Yarn and pnpm do the same job with different storage tricks.

**What it actually does**
- It reads package.json, works out the whole tree of packages needed, and downloads them into a folder called node_modules.
- It reads package-lock.json so the second install produces the same tree as the first.
- It reads each dependency's own package.json, so a package gets its own requirements installed for you.

**package.json, field by field**
- name: the package name. It has to be unique if you publish it.
- version: the current version, written in the semantic versioning style.
- type: set to "module" to tell Node that .js files in this project use ES modules.
- main: the entry file that older tools load when someone requires the package.
- exports: the modern replacement for main. It also controls which files outside your package may be imported.
- scripts: named commands you run with npm run.
- dependencies and devDependencies: what the package needs to run, versus what it needs to build and test.
- private: set to true and npm publish refuses to upload the package.

**dependencies versus devDependencies**
- dependencies are installed for the people who install your package, because your running code needs them.
- devDependencies stay on your own machine, because they are tests, linters and build tools.
- npm install -D @playwright/test puts a package in devDependencies. Playwright belongs there.
- A test suite usually has almost nothing in dependencies and a long list in devDependencies.

**Semantic versioning**
- A version is major.minor.patch. 1.4.2 is major 1, minor 4, patch 2.
- A patch fixes a bug. A minor adds something in a backwards-compatible way. A major breaks something for callers.
- ^1.49.0 means any patch or minor inside major 1. So 1.49.7 and 1.55.0 are fine, and 2.0.0 is not.
- ~1.49.0 is stricter. It allows patches only, so 1.49.7 but not 1.50.0.
- 1.49.0 with no symbol means exactly that one version.
- Carets and tildes are ranges. npm resolves them once and then freezes the answer into the lockfile.

**The lockfile and CI**
- package-lock.json lists every package with an exact version and a checksum.
- Commit it. That file is what makes an install reproducible on another machine.
- npm install may update the lockfile when a range allows something newer.
- npm ci installs straight from the lockfile, refuses a lockfile that is out of date, and is the right command in CI.

**Running commands**
- npm run test runs the test script from package.json. npm run on its own lists every script.
- npx playwright test runs a binary out of node_modules without needing a script, and downloads it if it is missing.
- A global install with -g puts a command on your PATH. Your project must not quietly depend on it.

**Publishing**
- npm publish uploads the package to the public registry, unless private is true stops it.
- Use the files field or a .npmignore so you do not ship your tests and screenshots.`,codeExample:`// package.json is just data. Read it and most npm questions answer themselves.
const pkg = {
  name: "shop-tests",
  version: "2.1.0",
  private: true,
  type: "module",
  scripts: {
    test: "playwright test",
    "test:smoke": "playwright test --grep @smoke",
  },
  dependencies: { axios: "^1.7.2" },
  devDependencies: { "@playwright/test": "^1.49.0", typescript: "~5.5.4" },
  peerDependencies: { react: "^18.0.0" },
};

console.log("npm run test:smoke ->", pkg.scripts["test:smoke"]);

// A caret range takes any patch or minor bump inside the major version.
function satisfies(range, version) {
  const [maj, min] = range.replace("^", "").split(".").map(Number);
  const [m, n] = version.split(".").map(Number);
  return m === maj && n >= min;
}
const range = pkg.devDependencies["@playwright/test"];
console.log("1.49.7 inside " + range + ":", satisfies(range, "1.49.7"));
console.log("1.55.0 inside " + range + ":", satisfies(range, "1.55.0"));
console.log("2.0.0  inside " + range + ":", satisfies(range, "2.0.0"));

// dependencies ship to users. devDependencies stay on your machine.
console.log("ships to users:", Object.keys(pkg.dependencies));
console.log("build and test only:", Object.keys(pkg.devDependencies));
console.log("publishable:", !pkg.private);`,quiz:[{question:"What does npm install -D pkg do?",options:["Installs a runtime dependency","Installs a dev dependency","Deletes the package","Runs tests"],correctIndex:1,explanation:"-D adds the package to devDependencies."},{question:"Why commit package-lock.json?",options:["So installs are reproducible","It's required for git","For faster downloads","It hides secrets"],correctIndex:0,explanation:"The lockfile pins exact dependency versions."}]},{slug:"module-bundlers",title:"Module Bundlers",description:"Bundlers, transpilers, and polyfills explained.",content:`A bundler takes many source files and produces fewer files that a browser can load quickly. It reads every import line, works out which file depends on which, then writes the result out.

**What a bundler does**
- It resolves imports to real paths, both ./api.js and a bare package name found in node_modules.
- It follows those imports from your entry file and builds a graph of every file involved.
- It bundles them into a small number of files. Sometimes one, sometimes a chunk per route.
- It tree-shakes. It drops exports nobody imports, because a static import list tells it exactly what is used.
- It minifies. It shortens variable names and removes whitespace and comments.
- It rewrites assets, so importing a PNG or a font hands you a URL.

**Development and production are different builds**
- Development mode favours speed. Files stay readable, rebuilds take milliseconds, and everything is served over HTTP.
- Production mode favours size and delivery speed. It minifies, splits, adds hashed filenames for caching, and drops unused code.
- Same source, two outputs. If a bug only shows in production, look at the minified file and load a source map.

**Three different jobs**
- A bundler assembles files and decides what to leave out.
- A transpiler changes syntax into an older syntax. TypeScript needs one to strip its types, and Babel can lower optional chaining into a long if.
- A polyfill is code you ship to fill in a feature the browser never received. It covers missing engine features, not new syntax.
- These often live in one tool. Knowing which job is which tells you which part to go looking at when it breaks.

**Side effects block tree shaking**
- If a module's top-level code does something, the bundler cannot delete it without changing behaviour.
- Assigning a global, registering a polyfill, or adding a window listener in the module body all count as side effects.
- Keep that code in one file, import it for its effect, and declare the sideEffects field in package.json so the bundler knows.
- A module that only declares things and exports them is safe to shake.

**Source maps and hot module replacement**
- A source map is a file that maps the minified output back to your original file and line. Browsers load it when devtools are open, so stack traces point at real code.
- Hot module replacement swaps one module in the running page without a full reload, keeping your test state and scroll position.
- It only works when that module has no side effects other code depends on.

**Native modules and import maps**
- Modern browsers load ES modules directly over HTTP, so a bundler is no longer strictly required.
- An import map is a block of JSON in the page saying which bare name maps to which URL. It replaced the old need to bundle third-party libraries.
- Many teams still bundle, because bundling gives smaller payloads, older browser support and a build step that fails loudly.`,codeExample:`// A miniature bundler: follow the imports, keep what is used, drop the rest.
const files = {
  "index.js": { imports: ["./chart.js", "./polyfills.js"], uses: ["drawChart"] },
  "./chart.js": { exports: ["drawChart", "toSVG", "brandColor"], sideEffect: false },
  "./polyfills.js": { exports: [], sideEffect: true },
};

// Start at the entry file and walk the graph, like a bundler does.
const seen = new Set();
(function walk(file) {
  if (seen.has(file)) return;
  seen.add(file);
  (files[file].imports || []).forEach(walk);
})("index.js");

// Tree shaking keeps only the exports the entry asks for. Side effects stay whole.
const wanted = files["index.js"].uses;
for (const file of seen) {
  const mod = files[file];
  if (mod.sideEffect) {
    console.log(file + " -> kept whole, its top-level code does something");
  } else {
    const used = (mod.exports || []).filter((n) => wanted.includes(n));
    console.log(file + " -> kept: [" + used.join(", ") + "]");
  }
}

// Minification squeezes. A source map undoes it for the debugger.
const raw = "function drawChart ( bars ) {\\n  return bars.length;\\n}";
const min = raw.replace(/[ \\t\\n]+/g, " ").trim();
console.log("before:", raw.length, "chars | after:", min.length, "chars");
console.log("min:", min);
console.log("map entry:", JSON.stringify({ generated: [1, 12], original: ["chart.js", 1, 9] }));`,quiz:[{question:"What is tree-shaking?",options:["Cutting down unused exports","Planting pixels","Restarting servers","Renaming files"],correctIndex:0,explanation:"Bundlers drop unused exported code to shrink output."},{question:"Which bundler is the modern fast default?",options:["Webpack","Vite","Gulp","Babel"],correctIndex:1,explanation:"Vite is the fast, modern default for new projects."}]},{slug:"ecmascript",title:"ECMAScript Evolution",description:"From ES5 to ES2023 and what each edition added.",content:`ECMAScript is the document that describes the JavaScript language. Engines such as V8, SpiderMonkey and JavaScriptCore are the programs that implement it. TC39 is the committee that writes it. A proposal there moves through a staged process, and what survives becomes the yearly edition.

**ES5, the first big jump**
- Released in 2009. It added strict mode, JSON, and a batch of array methods such as forEach, map and filter.
- Strict mode turns silent mistakes into errors. Code written that way is better code.

**ES2015, the one people mean by ES6**
- let and const, so a variable belongs to the block it sits in
- arrow functions, short functions that do not create their own this
- template literals, backticks with a hole in them for a value
- classes, a cleaner way to write a constructor and its prototype
- destructuring, for pulling a value apart: const { id } = user
- default, rest and spread parameters
- Map and Set, collections keyed by value instead of by string
- Promise, an object standing for a value that arrives later
- modules, the import and export system
- for...of, which loops over any iterable

**The years after that**
- ES2017: async and await, so a Promise chain reads as straight-line code, plus Object.entries and Object.values
- ES2018: spread and rest in object literals, and async iteration with for await
- ES2019: Array.flat and flatMap, Object.fromEntries, and the optional catch binding, which is a catch with no parameter
- ES2020: optional chaining ?. and nullish coalescing ??, plus BigInt for whole numbers too large for Number, and Promise.allSettled
- ES2021: logical assignment such as ||= and ??=, and String.replaceAll
- ES2022: class fields, so count = 0 can sit inside the class body, private #fields, and top-level await in modules
- ES2023: Array.findLast, and toSorted, toReversed and toSpliced, which copy instead of mutating

**Ask what the engine can do, not what it is called**
- Feature detection tries the feature and checks the answer: typeof window?.structuredClone !== "undefined"
- Version sniffing is guesswork. Browsers ship features out of order and backport them, so a version number is not one fixed list.
- If a polyfill fills the gap, detect the polyfilled behaviour rather than the native feature.

**Target what your tests run on**
- The browser list in your CI config is the real target. Nothing outside that list matters for the test run.
- Run the suite against the oldest browser in that list, not against the newest one on your laptop.
- Read the engines field in package.json when a feature behaves oddly in Node. The Node version is your floor.`,codeExample:`// Ask the runtime what it can do. Never guess from a version string.
function supports(label, test) {
  try {
    const ok = test();
    console.log(label.padEnd(26), ok ? "yes" : "no");
  } catch {
    console.log(label.padEnd(26), "no");
  }
}

supports("ES2015 template literal", () => \`n=\${1 + 1}\` === "n=2");
supports("ES2017 Object.entries", () => Object.entries({ a: 1 }).length === 1);
supports("ES2019 Array.flat", () => [[1], [2, [3]]].flat().length === 3);
supports("ES2020 optional chaining", () => ({})?.deep?.nope === undefined);
supports("ES2020 nullish coalescing", () => (0 ?? 1) === 0);
supports("ES2020 BigInt", () => typeof 2n === "bigint");
supports("ES2021 replaceAll", () => "a a b".replaceAll("a", "z") === "z z b");
supports("ES2022 class fields", () => {
  class Page { retries = 3; }
  return new Page().retries === 3;
});
supports("ES2023 findLast", () => [1, 2, 3].findLast((n) => n < 3) === 2);

// Same result, different years of the standard.
const nums = [5, 1, 4];
console.log("\\ntoSorted (ES2023):", nums.toSorted((a, b) => a - b), "original:", nums);
console.log("sort (always existed):", [...nums].sort((a, b) => a - b));

// ES2017 put async and await on top of Promises.
async function total(list) {
  const parts = await Promise.all(list.map(async (n) => n * 2));
  return parts.reduce((a, b) => a + b, 0);
}
total([1, 2, 3]).then((n) => console.log("async/await total:", n));`,quiz:[{question:"Which version was the 'big' ES update?",options:["ES5","ES2015/ES6","ES2020","ES2023"],correctIndex:1,explanation:"ES6/ES2015 added most of modern syntax (arrows, classes, modules)."},{question:"What do non-mutating toSorted() methods avoid?",options:["Returning new arrays","Changing the original array","Slow sorting","Type errors"],correctIndex:1,explanation:"toSorted returns a copy, leaving the original untouched."}]}]},{slug:"scope-hoisting",title:"Scope, Hoisting & this",icon:"layers",description:"The rules that decide what a piece of code can actually see.",level:"advanced",lessons:[{slug:"scope-rules",title:"Scope Rules",description:"Global, function, block, and module scope.",content:`Scope is the rulebook that decides which variables a piece of code can read and which it can change. Nothing about that is checked while your test runs. Every name is matched to a box before your first line executes, using only the place you typed it. That is why the same helper can see a variable in one file and throw "x is not defined" in another.

**The scope chain, drawn as boxes**
- Think of nested boxes. The innermost box can look outward. It can never look into a box that sits inside it.
- A function can use the variables around it. Code outside that function can never reach inside it.
- If a name is not in the current box, JavaScript checks the next box out, and keeps going outward until it runs out.
- Run out of boxes with no match and you get ReferenceError: x is not defined.
- This outward-only search is the scope chain. The word lexical means the chain was fixed by the position in the file, not by who called the function.

**The four boxes you actually meet**
- Global scope: every top-level name in a classic script. Everyone can reach it, so it is easy to leak and easy to collide.
- Function scope: created by every function body and every parameter list. var lives here and nowhere else.
- Block scope: created by any pair of curly braces. let, const and class live here. if, for, while and a plain {} all count.
- Module scope: any file loaded with import or export is its own sealed box. Nothing leaks in or out unless you export it.

**Shadowing, when an inner box reuses the name**
- Shadowing means an inner box declares a name that an outer box already uses.
- The inner name wins inside its own box. The outer one is untouched and still correct outside.
- const timeout = 1000; function wait() { const timeout = 5000; } Inside wait it is 5000, outside it is still 1000.
- Shadowing is a bug factory when you forget which one you are holding. Rename the inner variable when it confuses you.

**Why for (let i) is safe and for (var i) is not**
- let builds a brand new box on every turn of the loop, with its own copy of i inside.
- Three callbacks made on three turns each keep their own i, so they print 0, 1, 2.
- var makes one shared i for the whole function. The callbacks all read the finished value, so they print 3, 3, 3.
- Same loop, same intention, different result. That is what scope does to you.

**Where you meet this in real work**
- A helper quietly rewrites a page-level variable, and you spend an hour wondering why the test is flaky.
- Two spec files both define const page. Nothing breaks, because module scope keeps them in separate boxes.
- Wrapping a temporary variable in an if block with its own braces, so it cannot collide with a same-named variable further down.
- A rule of thumb for everything you write: default to const, use let only when you must reassign, never use var.`,codeExample:`// The scope chain: an inner box can see outward, never inward.
const env = "staging";          // global box

function deploy(target) {      // function box
  const env = "prod";           // shadows the global one
  const url = "https://" + target + ".test.internal";
  function log() {              // nested box
    console.log(env + " -> " + url);
  }
  log();
}
deploy("api");
console.log("outside the function, env is still:", env);

// Blocks are real boxes for let and const. var ignores them.
if (true) {
  let token = "block only";
  var leaky = "function wide";
}
console.log("typeof token:", typeof token);   // undefined
console.log("typeof leaky:", typeof leaky);   // string

// for (let i) gives every callback its own copy of i.
const withLet = [];
for (let i = 0; i < 3; i++) withLet.push(() => i);
console.log("for (let i):", withLet.map((fn) => fn()));

const withVar = [];
for (var j = 0; j < 3; j++) withVar.push(() => j);
console.log("for (var j):", withVar.map((fn) => fn()));`},{slug:"hoisting",title:"Hoisting in Detail",description:"What moves to the top, what does not, and why.",content:`Hoisting is the preparation that happens before your code runs. Before the first statement executes, the browser does a pass over each scope and sets up every declaration it finds there. That pass is called hoisting. Only after it finishes does your code run, top to bottom, as written. This is why a function can be called on line 2 even though it is written on line 20.

**The stage-crew analogy**
- Before the curtain rises, the crew walks the set and tapes a label to the floor for every object that will appear.
- Every label goes down before the show starts, no matter which line of the script first mentions that object.
- Your declarations are the labels. The show itself is your code running in order.
- So a helper can be called at the top of the file even though its body sits at the bottom. Its label is already down.

**What each kind of declaration does in that first pass**
- var: the name is created and set to undefined. That is all. The real value arrives when its own line runs.
- function declarations: the entire function is created and filled in. It is fully usable from the top of its scope. This is the only kind of declaration that is ready to run.
- let and const: the name is created but marked unusable. Reading it early throws ReferenceError instead of returning undefined. That locked gap is the temporal dead zone, covered in the next lesson.
- class declarations: also created early, also unusable until their own line runs.
- Function expressions and arrow functions sit on the right of an equals sign, so there is no name to create. They cannot be called before their line runs.

**Hoisting is not the engine moving your code**
- Nothing is physically relocated. Your helper is not teleported to the top of the file.
- The browser simply knows about it before execution reaches it, the way a phone knows an alarm time long before the alarm sounds.
- Real implementations usually keep your source order in memory and jump around it, rather than copying declarations upward. Same behaviour, different mechanism.
- Because nothing moves, a hoisted function does not see later assignments for free. It sees whatever the variables hold at the moment it is called.

**Hoisting versus the dead zone**
- Hoisting is the preparation step. It runs once per scope, before any line executes.
- The dead zone is the stretch between that preparation and the let line. The name exists, but reading it throws.
- var has no dead zone. It exists from the top and reads as undefined, which is why var bugs stay silent and let bugs fail loudly.
- Function declarations skip both problems, which is why they can be called from anywhere in their scope.

**Where you meet this in real work**
- A spec file calling a helper that is declared further down. It works. Moving the helper above the call changes nothing.
- export default function login() {...} is hoisted, so a nav file can import it and call it from any line.
- let browser = await playwright.launch(); placed above a helper that reads browser. Reorder those two and the helper starts throwing.
- A defensive habit for your test code: write helpers as function declarations, and never rely on hoisting to rescue a mistake.`,codeExample:`// Hoisting: declarations are prepared before any line runs, but not all
// of them are usable. Each try/catch keeps the example running.
console.log("1. var exists but has no value yet:", readEarly());
function readEarly() {
  return typeof earlyVar;          // "undefined", var was created, not assigned
}
var earlyVar = "assigned on a later line";

// A function declaration is complete from the top of the scope.
console.log("2. function declaration:", describe());
function describe() {
  return "ready before I was written";
}

// A function expression has no name to hoist.
try {
  notYet();
} catch (err) {
  console.log("3. function expression:", err.name);
}
const notYet = () => "too late";

// let and const are created but locked until their own line runs.
try {
  console.log(later);              // still in the dead zone
} catch (err) {
  console.log("4. let above its own line:", err.name);
}
const later = "unlocked now";
console.log("5. let below its own line:", later);

// Hoisting does not move values. A function reads them at call time.
const page = { name: "checkout" };
function title() { return page.name; }
console.log("6. resolved at call time:", title());`},{slug:"tdz",title:"Temporal Dead Zone",description:"The gap where let and const exist but cannot be read.",content:`The temporal dead zone, shortened to TDZ, is the gap between two moments: the moment you enter a scope, and the moment your code reaches the line that gives a let or const its value. Inside that gap the name already exists, so nothing calls it undefined, but it is locked, so reading it throws.

**The locked door analogy**
- Every let and const in a scope is a door that has already been painted into the wall.
- The room is ready and the name is on the door. The key is handed over only when your code reaches that line.
- Try the door before the key arrives and you get a ReferenceError, not an empty value.
- The stretch between the room being ready and the key arriving is the dead zone. It closes by itself, the moment that line runs.

**What you actually get**
- Reading a let or const too early throws ReferenceError: Cannot access 'x' before initialization.
- It is never undefined. undefined means the variable exists and holds nothing. The dead zone means you are not allowed to look yet.
- The error fires when you read or write the name, not when the scope is created. Storing the value in a variable you only print later is perfectly fine.
- typeof is the one exception, and it catches people out. typeof on a name that was never declared returns "undefined" without any error, but typeof on a dead-zone name still throws.

**How wide the gap gets**
- It opens when the scope is entered and closes on that single line. Moving the line lower makes the gap wider.
- Every let and const in the same block has its own gap, and each one closes on its own line.
- A whole block can be inside a dead zone. If a block reads one of its own let names while starting up, the block has already thrown.
- A function that runs before the let it needs hits the same door. The dead zone belongs to the scope, not to the order in the caller.

**The other places the same rule shows up**
- class declarations. class Order {} cannot be used above its own line, unlike a function declaration.
- Function parameter defaults. function connect(page = page) throws, because the parameter is already inside its own dead zone while its default runs.
- for (let i = 0; ...) has a fresh dead zone on every turn, so reading i before the first turn fails.
- const locks the name, not the value. const user = {} still allows user.name = "Ana". For a frozen value you need Object.freeze.

**How to stay out of it**
- Declare first, assign second. let total; then total = sum(cart);
- Put every const and let at the top of the function, above the code that reads them.
- Prefer a function declaration for anything that must be callable from anywhere. Function declarations have no dead zone.
- When you read "Cannot access before initialization", look for a use above its declaration in the same scope, or a helper that ran too early.

**Where you meet this in real work**
- A Playwright fixture that creates browser after a helper already tried to read it. Moving the setup one line earlier fixes it.
- Two config modules that import each other. One reads the other while it is still starting up.
- A default parameter that wants to use a module-level variable which has not been assigned yet.`,codeExample:`// The temporal dead zone: the name exists, but it is locked until its own
// line runs. Every ReferenceError is caught so the demo keeps going.
function scopeDemo() {
  try {
    console.log(first);            // locked, so this throws
  } catch (err) {
    console.log("1. reading let too early:", err.name);
  }
  const first = "unlocked";
  console.log("2. reading let after its line:", first);
}
scopeDemo();

// var has no dead zone. It exists from the top and reads as undefined.
function varDemo() {
  console.log("3. var before its line:", typeof early);
  var early = "assigned later";
}
varDemo();

// A bare let has no gap left: its dead zone closes on its own line.
let held;
console.log("4. a bare let is already open:", typeof held);
held = held ?? "set by hand";
console.log("5. read and reassign it:", held);

// typeof cannot peek through the door, but a never-declared name is safe.
console.log("6. typeof a missing name:", typeof neverDeclaredAtAll);
try {
  console.log(typeof locked);
} catch (err) {
  console.log("7. typeof a locked name:", err.name);
}
const locked = "open";

// A class follows the let rule, not the function rule.
try {
  new Order();
} catch (err) {
  console.log("8. class above its own line:", err.name);
}
class Order {
  constructor() { this.state = "paid"; }
}
console.log("9. class below its own line:", new Order().state);`},{slug:"this-binding",title:"How this Gets Its Value",description:"The four binding rules, in priority order.",content:`this is not magic, and it is not the function. this is one value the browser picks while your function runs. Four rules pick it, and they are checked in a fixed order. The first rule that applies wins. Knowing the order is the whole skill.

**The four rules, in priority order**
- The new rule is the strongest. Calling a function with new makes this the brand new object. If the constructor returns an object, that returned object becomes this instead of the fresh one.
- The explicit rule comes next. call, apply and bind set this by hand. call takes arguments one by one, apply takes an array, bind returns a new function with this already locked in.
- The implicit rule is the everyday one. When you write object.method(), this is the object sitting before the dot.
- The default rule is the fallback. No receiver at all means this is undefined in a module or in strict mode, and globalThis in an old sloppy classic script.
- Arrow functions sit outside all four. An arrow has no this of its own, so it copies the this from the code around where it was written. That is called lexical this.

**Why undefined and not the window**
- In an ES module, or any file with "use strict", a function called with no receiver gets this = undefined.
- In a sloppy classic script the same call quietly gets globalThis, which is the window. The same file can therefore behave differently in a script tag and in a module.
- Test files are almost always modules or strict, so the safe assumption on your machine is undefined.
- Passing a method around on its own loses the receiver. const go = page.goto; go(url) has no object before the dot, so this is undefined inside.

**The classic setTimeout trap**
- setTimeout(function () { this.x }, 100) runs the callback later with no receiver, so this is undefined and this.x throws.
- The that workaround copies the value into a variable first, then reads the variable inside the callback.
- The modern fix is an arrow function. It keeps the this of the surrounding scope and needs no extra variable.
- The same bug appears in array callbacks. Passing page.waitForSelector straight into then or map loses the page.

**Reading the order out loud**
- new User() beats call, apply and bind, because new creates its own object.
- obj.method() beats a bare method(), because the dot supplies a receiver.
- Anything with no receiver falls through to the default rule.
- An arrow function is not in the list at all. It has no opinion, it borrows.

**Where you meet this in real work**
- A helper built for an object that receives undefined, because it was handed over as a bare callback.
- An event handler that expects the clicked element and gets undefined instead.
- A class method passed to page.once or to a promise chain, where one bind call fixes it.
- A rule for your own test code: use arrows for callbacks, and reach for call or bind only when you deliberately want a different this.`,codeExample:`"use strict";   // no receiver means undefined

// 1. implicit: this is the object before the dot.
const account = {
  owner: "Ana",
  balance: 10,
  report() { return this.owner + " has " + this.balance; },
};
console.log("1. implicit:", account.report());

// 2. explicit: call one by one, apply an array.
console.log("2. call:", account.report.call({ owner: "Cid", balance: 5 }));
console.log("3. apply:", account.report.apply({ owner: "Bo", balance: 3 }, []));

// 3. bind locks this in, gives a new function.
console.log("4. bind:", account.report.bind({ owner: "Dee", balance: 7 })());

// 4. new wins, and a returned object wins instead.
function Account(owner, balance) {
  Object.assign(this, { owner, balance, report: account.report });
}
console.log("5. new:", new Account("Eve", 3).report());
function Wrapped() { return { owner: "returned" }; }
console.log("6. new returns it:", new Wrapped().owner);

// 5. default: no receiver means undefined.
function loose() { return this; }
console.log("7. default:", loose());

// later() stands in for setTimeout (no receiver).
function later(fn) { return fn(); }
const session = {
  user: "Ana",
  start() {
    const that = this;
    function classic() { return this; }
    return { classic, arrow: () => that.user };
  },
};
const run = session.start();
console.log("8. arrow keeps this:", run.arrow());
console.log("9. handed off, this is:", later(run.classic));
console.log("10. bind fixes it:", later(run.classic.bind(session)).user);`}]},{slug:"error-handling",title:"Error Handling & Debugging",icon:"alert-triangle",description:"Failing loudly, recovering gracefully, and finding the real cause.",level:"advanced",lessons:[{slug:"try-catch",title:"try / catch / finally",description:"Catching errors, re-throwing, and cleanup.",content:`Some lines of code can fail. A file is missing. A value is not what you expected. A helper returns nothing. When that happens, JavaScript throws an error. An error is an object that stops the current code path and carries a message. Think of it like a smoke alarm: it does not fix the toast, but it tells you something is wrong before the kitchen burns. try, catch, and finally are how you decide what happens next.

**What try does**
- try marks the block of lines that might fail.
- It is like putting a mat under a glass you are carrying. If you drop it, the mat catches the pieces.
- If a line inside try throws, the rest of try is skipped. Control jumps straight to catch.
- If nothing throws, catch is skipped and your function carries on.

**Catch is optional**
- You can write try and finally with no catch at all. It reads as: run this, then always clean up.
- If there is no catch, the error keeps travelling up to whoever called your function.
- Catch has a binding, which is just a name for the error object. catch (err) gives you the error inside err.
- Modern JavaScript lets you write catch with no parameter at all. That is handy when you only need to clean up and do not care what went wrong.

**What finally is for**
- finally always runs. After a success, after an error, after a return, after a throw.
- It is the bit that puts the tool back in the box every single time, tired or not.
- The classic pattern is resource cleanup. You opened a file, a database connection, or a browser context. You close it in finally so a failure never leaves it open.
- If try returns a value, that value is what the caller gets, but finally still runs first.
- Careful: if finally itself throws, the new error replaces the old one and the original is lost.

**Only wrap what can fail**
- Put the one risky call inside try, not the whole function.
- Wrapping everything hides which line failed and makes real logic disappear behind an indent.
- Rule of thumb: if every line inside try is guaranteed to work, try is pointless noise.

**Catching, and doing nothing**
- A catch block that swallows the error and returns quietly is worse than not catching at all.
- If you catch, add value: log it, wrap it, retry it, or turn it into a useful return value.
- Silently ignoring is how a broken test run still reports green.
- Re-throwing means catching, then sending the same error on with a bare throw err. No new Error object, so the original stack is kept.
- If you want a better message, throw a new error and set cause. Cause is a field that links your new error to the old one, so the root cause is never lost.
- Returning a fallback is not the same as swallowing. A fallback says this failure is expected, and here is a safe answer. Return an empty list instead of crashing.
- Swallowing says this failure is a bug, and I am hiding it. Use re-throw instead.

**A retry loop**
- Some failures are temporary. A flaky server times out and works a second later.
- Wrap the call in try, wait, and try again. Count your attempts so the loop cannot run forever.
- Only retry the errors worth retrying. Retrying a typo just wastes time.`,codeExample:`// Shows try/catch, cleanup in finally, and a small retry loop.
// Plain Node, no imports, no top-level await.

function flakyCall(attempt) {
  if (attempt < 3) {
    throw new Error('socket hang up on attempt ' + attempt);
  }
  return 'loaded ' + attempt + ' rows';
}

function loadRows(fetchRows) {
  let connection = null;
  try {
    connection = 'db-connection';
    return fetchRows();
  } catch (err) {
    // add context, but keep the original error inside cause
    throw new Error('could not load rows: ' + err.message, { cause: err });
  } finally {
    if (connection) {
      connection = null;
      console.log('cleaned up the connection');
    }
  }
}

function withRetry(fn) {
  let attempt = 0;
  while (attempt < 3) {
    attempt += 1;
    try {
      return fn(attempt);
    } catch (err) {
      console.log('attempt ' + attempt + ' failed:', err.message);
      if (attempt === 3) throw err;
    }
  }
}

// finally runs even though we return from inside try
console.log(loadRows(() => 'ok'));
console.log('---- retry ----');
try {
  console.log(withRetry(flakyCall));
} catch (err) {
  console.log('gave up:', err.message);
}
console.log('---- custom error with cause ----');
try {
  loadRows(() => { throw new TypeError('bad shape'); });
} catch (err) {
  console.log('name:', err.name);
  console.log('cause:', err.cause.name, err.cause.message);
}`},{slug:"error-types",title:"Built-in & Custom Errors",description:"TypeError vs RangeError vs your own Error subclass.",content:`Every error in JavaScript is built from one base class called Error. The other built-in errors are children of it. Think of Error as a blank form, and each child as the same form with a pre-printed label at the top. You read that label with the name property. Knowing which label you got tells you what kind of mistake to look for, so you can fix the cause instead of guessing.

**The base and its children**
- Error is the parent. It is what you get for anything that is not one of the specific cases below.
- TypeError means you used a value of the wrong type. The usual culprit is reading a property of null or undefined, like rows.length when rows is undefined. Also calling something that is not a function.
- RangeError means the number is outside what the thing can hold. new Array(-1) is the classic example, because a length cannot be negative. So is a number too large for a Number.
- ReferenceError means the name does not exist at all. You typed userId but the variable is userID. A typo in a variable name.
- SyntaxError means the code cannot even be parsed. A missing bracket. This one usually stops the whole file, so you rarely catch it at run time.
- EvalError is a rare one about eval and friends. You will almost never meet it. Know it exists and move on.
- URIError means a URL function got a bad string. decodeURIComponent('%') fails because % is not a real escape.

**The three properties that matter**
- name is the label. It is a string like TypeError.
- message is the human sentence. This is what you put in your test report.
- stack is a list of the functions that were running when the error was made, with file and line numbers. It is your map back to the source.
- Read stack top first. The first line is where it broke. The lines under it are the callers.

**Making your own error class**
- You write class MyError extends Error when you want callers to catch your own failures separately from everyone else's.
- A gotcha: the name is not set for you. After class MyError extends Error, new MyError().name still says Error. It is inherited and never overwritten.
- Fix it with a constructor that sets this.name = 'MyError'. It is one line, but forget it and every custom error looks like a plain Error.

**Carrying extra data**
- Because it is a real class, you can add your own fields. A status code, a request id, a list of failed ids.
- That turns the error into a small package of facts, so the catch block does not have to guess.

**Checking with instanceof**
- instanceof asks "is this object built from that class?" It is the normal way to test a custom error.
- It fails across two copies of the same library. If your test code and the code under test each load their own copy, the classes are different objects, so instanceof says false even though both are called MyError.
- A guard function wraps that check. isMyError(err) returns true or false, and callers do not have to remember the instanceof dance.
- When you are unsure, fall back to checking err.name as a string. It survives the two-copies problem.

**Not everything you throw is an Error**
- throw 'something broke' is legal JavaScript and a bad idea. A string has no name, no message, no stack.
- With no stack you lose the file and line, which is the one thing you needed.
- You can also throw objects and numbers, with the same problem. Throw Error objects so your logs stay useful.`,codeExample:`// Shows what each built-in error name means, then a custom error
// class that carries extra data. Plain Node, no imports.

function attempt(label, run) {
  try {
    run();
  } catch (err) {
    console.log(label + ' -> ' + err.name + ' | ' + err.message);
  }
}

// The constructor exists only to set the name.
class AppError extends Error {
  constructor(message, status, requestId) {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.requestId = requestId;
  }
}

const isAppError = (err) => err instanceof AppError;

attempt('null read', () => { const rows = null; rows.length; });
attempt('neg array', () => { new Array(-1); });
attempt('typo name', () => { notDeclaredAnywhere; });
attempt('bad json', () => { JSON.parse('{oops}'); });
attempt('bad url', () => { decodeURIComponent('%'); });

// No constructor, so name still reads "Error".
class LazyError extends Error {}
console.log('lazy name is:', new LazyError('hi').name);

const err = new AppError('user not found', 404, 'req-881');
console.log('extra data: status=' + err.status + ' id=' + err.requestId);
console.log('guard says:', isAppError(err), '| plain:', isAppError(new Error('x')));
console.log('still an Error:', err instanceof Error);
console.log('first stack line:', err.stack.split('\\n')[0].trim());`},{slug:"async-errors",title:"Error Handling in Async Code",description:"Why a missing await swallows your errors.",content:`Async code changes when errors happen. A normal function runs straight down. An async function pauses at each await, hands control back to whoever called it, and resumes later. Think of it like sending a letter: you drop it in the box and carry on with your day. The letter is not here yet, and nothing about it can fail in front of you. Errors follow the same rule. A rejection that happens after a pause is outside the reach of a try block that has already finished.

**The number one async bug**
- This is the one to memorise. You write try, you await the call, and your catch still never fires. Something is wrong.
- The cause is a missing await. Without it you get a promise object back, and you walk straight past it.
- The call is still running. It fails a moment later, on a promise nobody is watching.
- The fix is one word. Add await, or add .catch() on the promise itself. One of the two, never neither.

**Try/catch only sees its own function**
- try/catch catches errors thrown by code running inside that try block, in that same async function.
- It cannot reach into a different function to catch its error. A helper that throws needs its own try/catch, or the caller must await it.
- If you call a helper without await inside a try, the try has already finished by the time the helper fails.

**Promises with nobody listening**
- A rejected promise with no handler is an unhandled rejection.
- In Node the default is to print a warning, and a later Node can be set to exit. In the browser it can be a silent no-op in some tools. Either way your test keeps running and the failure never shows up in the report.
- In Node you can register a listener with process.on('unhandledRejection', handler). That turns the invisible into something you can log and fail on.

**Promise.all and Promise.allSettled**
- Promise.all takes a list of promises and resolves when all of them succeed.
- If one of them rejects, Promise.all rejects immediately and the other errors are lost. You learn about one failure and never hear about the other three.
- Promise.allSettled waits for all of them, succeed or fail, and hands you an array of results.
- Each result is either status fulfilled with a value, or status rejected with a reason. You loop over that and handle each one. This is the one you want in a test runner that must report every failing test.

**Turning a rejection into a value**
- A helper that converts a rejection into a resolved error value is handy when you do not want exceptions.
- It returns a plain object, either ok with the value, or ok false with the error.
- The rule stays the same. You handle failures explicitly instead of hoping nobody notices.

**Two more traps**
- await inside forEach does not wait. forEach is not built for promises, so each iteration starts and moves on. Use a for...of loop, which does wait.
- Inside an async function, return Promise.reject(err) is the same as throw err. Use throw, because it reads like the rest of your error handling and keeps one stack.

**The habit that fixes most of it**
- Every promise needs a home. Either somebody awaits it in a try, or it gets a .catch, or it goes through Promise.allSettled.
- When a promise gets a rejection nobody handles, the error is not gone. It just has no name attached to it.`,codeExample:`// Shows why a missing await hides the error, then the two fixes.
// Plain Node. Wrapped in an async main because top-level
// await is not allowed in this editor.

function makeTask(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error('row lookup timed out'));
      else resolve({ rows: 3 });
    }, 5);
  });
}

async function broken() {
  try {
    makeTask(true); // BUG: no await, so try finishes first
    console.log('broken: try block already ended');
  } catch (err) {
    console.log('broken: this never runs', err.message);
  }
}

async function fixed() {
  try {
    const out = await makeTask(true);
    console.log('fixed: got', out.rows);
  } catch (err) {
    console.log('fixed: caught', err.name, err.message);
  }
}

// Turn a rejection into a plain value instead of an exception.
async function settle(promise) {
  try {
    return { ok: true, value: await promise };
  } catch (err) {
    return { ok: false, value: err.message };
  }
}

async function main() {
  process.on('unhandledRejection', (reason) => {
    console.log('listener caught a stray rejection:', reason.message);
  });

  await broken();
  await fixed();

  // Promise.all loses the other errors. allSettled reports all.
  const all = await Promise.allSettled([
    settle(makeTask(false)),
    settle(makeTask(true)),
  ]);
  for (const r of all) {
    console.log('settled ->', r.status, r.value);
  }
}

main();`},{slug:"debugging",title:"Debugging Techniques",description:"console tools, breakpoints, stack traces, and narrowing bugs.",content:`Debugging means finding the exact line that does not do what you expected. It is a skill, not a personality trait. The main idea is the same as in any search. Do not look at the whole thing at once. Cut the problem in half, then keep cutting until the piece you hold is small enough to read line by line.

**Reading a stack trace**
- A stack trace is the list of functions that were active when the error was thrown.
- Read it from the top frame outward. The top frame is where the error was made. The frames below it are who called it.
- Each frame gives a file and a line number. The file is the script. The line is where the call sits.
- The bottom frames are usually your entry point and the Node internals. Skip those.
- In a test run, the first frame inside your own helper file is the one you care about.

**The console tools worth knowing**
- console.log is the plain one. Use it for values.
- console.table turns an array of objects into a table. Good for a list of test results.
- console.group and console.groupEnd nest related lines so a busy log stays readable.
- console.time and console.timeEnd print how long a block took. This finds the slow step in a slow test.
- console.count logs how many times a line ran. Did this run once or four hundred times is often the whole bug.
- console.trace prints the current call path without throwing anything.
- console.dir prints an object in detail, without trying to expand it into noise.
- console.log shows the value at the moment you call it. The object itself is not frozen. If it changes later, some dev tools can show you the newer value and make you doubt yourself. Log a copy instead, with structuredClone(value) or the spread syntax. The copy is a photograph. The original is a live window.

**Narrowing a bug by bisecting**
- The bug is in the half you have not already proved. So remove half the steps and see if it still happens.
- Comment out the second half of your test. Run it. Still broken, so the bug is in the first half. That one step often saves an hour.
- Keep halving until you are down to two or three lines.

**Breakpoints, and when try/catch is lying to you**
- A breakpoint is a line where your code pauses and you can inspect every variable around it. You click the line number in your editor to set one.
- The debugger statement is one word you drop into your code. It asks for a pause there even if your editor has no button. Remove it before you commit.
- A catch that swallows makes a bug invisible. Your run goes green and you have no clue why.
- If something is mysteriously fine, remove the catch and let it throw. The stack is the fastest way back to the cause.
- Do not wrap a helper in try/catch just to be safe. Let the error travel to the caller and add context there, with a cause, so the message says what you were doing.

**A value that is unexpectedly undefined**
- First inspect it. Print typeof value, then Object.keys(value). A property you think exists may be spelled differently.
- Also print Array.isArray(value). Arrays lie about their type name, so this is worth checking.
- Is the name spelled exactly the same in both places? Check the capitals.
- Is it async? If it is a promise, you need await, and then you have the value, not the promise.
- Is it a copy? A shallow copy drops nested things, and an object you spread has no methods.
- Is it zero, or is it undefined? Both look empty and mean opposite things. 0 is a real value. undefined means nothing was there.
- Is it off by one? Index 0 to length minus 1, and length is already one past the end.

**Make it small first**
- Before you change anything, copy the bug into a tiny script with no test runner and no framework.
- If it still fails there, you can try ten ideas in two seconds. If it does not fail there, the bug depends on the framework, and you now know that too.
- That is the fastest route there is.`,codeExample:`// A small debugging session: read a stack trace, inspect a
// surprising value, and time the slow step. Plain Node.

const results = [
  { name: 'login', ms: 210, ok: true },
  { name: 'checkout', ms: 1840, ok: false },
];

console.table(results);

console.group('slow step');
console.time('checkout');
for (let i = 0; i < 3; i++) {
  console.count('attempt'); // did this loop run once or many?
}
console.timeEnd('checkout');
console.groupEnd();

// Inspect a value before guessing what is wrong with it.
const user = { name: 'Ana', roles: ['admin'] };
console.log('typeof user:', typeof user);
console.log('keys:', Object.keys(user));
console.log('user.nam is undefined:', user.nam);

function readRows(table) {
  if (!table.rows) throw new Error('no rows on ' + table.name);
  return table.rows;
}

try {
  readRows({ name: 'users', rows: null });
} catch (err) {
  // top frames tell you where it broke, then who called it
  for (const frame of err.stack.split('\\n').slice(1, 3)) {
    console.log(frame.trim());
  }
}

// Log a copy so the value you see cannot change later.
const live = { status: 'pending' };
console.log('at print time:', live);
live.status = 'done';
console.log('after the change:', live);
console.log('a copy never changes:', structuredClone({ status: 'pending' }));`}]},{slug:"iterators",title:"Iterators & Generators",icon:"repeat",description:"How for...of actually works, and how to build your own iterables.",level:"advanced",lessons:[{slug:"iterator-protocol",title:"The Iterator Protocol",description:"next(), done, and Symbol.iterator.",content:`An iterator is a way to step through a list of values one at a time. An everyday analogy is a waiter holding a ticket for a stack of orders. The waiter goes to the kitchen and asks for the next order. Each time, the kitchen returns the next item and says whether there is more. The rules that make this work are called the iterator protocol.

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
- Assuming you can restart an iterator by looping again. If the same iterator object is reused, it is already at the end. You must ask the iterable for a new iterator to start fresh.`,codeExample:`// Show iterator protocol: array iterable vs iterator, manual loop, and for...of
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
console.log(forOfResult); // [ 'a', 'b', 'c' ]`},{slug:"generators",title:"Generator Functions",description:"function*, yield, and pausing on demand.",content:`A generator is a special kind of function that can pause and resume. An everyday analogy is a recipe card that has a bookmark. You start cooking. When you reach a yield point, you pause with your bookmark in place. Later, you resume from exactly that spot and all your ingredients are still there. This pause-and-resume behavior is what makes generators powerful.

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
- Passing nothing into next() when you expect the yield result. The first next() call cannot pass a value into the generator body before the first yield; values passed to the first next() are usually ignored.`,codeExample:`// Show generator basics: function*, yield, pausing, for...of
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
console.log(limited); // [ 1, 2, 3 ]`},{slug:"custom-iterables",title:"Custom Iterables",description:"Making your own objects usable with for...of and spread.",content:`A custom iterable is an object you make that works with for...of and spread. An everyday analogy is a keybox at an office. You can hand the keybox to anyone, and the keybox can give them a keychain (an iterator). The keychain is what they use to step through keys. If you follow the iterator protocol, your object becomes compatible with all language features that expect iterables.

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
- Using a string key instead of Symbol.iterator. That will not work with for...of.`,codeExample:`// Build a custom iterable Range and iterate with for...of and spread
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
console.log(obj); // { a: 1, b: 2 }`}]},{slug:"storage-apis",title:"Storage & Browser APIs",icon:"database",description:"Persisting data and talking to the browser outside the page.",level:"advanced",lessons:[{slug:"storage",title:"localStorage & sessionStorage",description:"Key-value persistence, quotas, and JSON.",content:`The browser hands every page two small shelves for saving text. They are called localStorage and sessionStorage. They let a page remember something after a refresh, without asking a server for it. For a tester they matter because a test often needs a login to survive between steps.

**Two shelves, one origin**
- localStorage and sessionStorage are both key-value maps. A key is a name you choose. The value is a short piece of text.
- An origin is the three parts of a web address: scheme, host and port. So http://localhost:3000 is one origin.
- The shelves are per-origin. localhost:3000 cannot see what localhost:3001 saved. That is why logging in on one port never logs you in on the other.
- localStorage survives closing the browser and opening it again. It is like a note taped to the wall.
- sessionStorage is wiped when the tab closes. It is like a note on a sticky pad you throw away at the end of the day.

**Everything is a string**
- Storage holds text only. An object goes in as text and comes back as text.
- So you convert on the way in with JSON.stringify, and on the way out with JSON.parse.
- JSON.stringify turns a value into one text string. JSON.parse turns that string back into a value.
- Skip stringify on the way in and JSON.parse throws on the way out.
- A missing key gives you null, not undefined. So test with === null.

**The small API**
- setItem writes a key. getItem reads a key. removeItem deletes one key. clear() wipes everything for the origin.
- length tells you how many keys exist. key(i) gives the name of the key at position i.
- There is no call that lists the keys. You loop from 0 to length and collect each key(i).

**Limits and traps**
- The quota is roughly 5MB per origin. Go past it and setItem throws a QuotaExceededError.
- Wrap writes in try/catch so a full shelf does not crash your page.
- A stored JSON null comes back as the text "null", and JSON.parse turns it into null. So a key that holds null and a key that is missing look identical if you only test for null.
- Storage is synchronous. Reading a big value blocks the page, like a cashier counting coins at the till.
- Never put a password in localStorage. Any script on the page can read it.

**A safer wrapper**
- getJson reads a key and returns a fallback when the text is missing or broken.
- setJson writes a key and returns true or false, instead of throwing.
- The wrapper is a few lines. Writing it once stops a whole class of bugs.

**Where you meet this in real work**
- A Playwright test reads a token from localStorage, then calls the API directly and skips the UI.
- Cypress clears localStorage between tests so one run does not leak into the next.
- A login test that passes alone and fails in a suite is often a stale sessionStorage entry.`,codeExample:`// A stand-in for localStorage, so this runs in plain Node.
// In a page you use window.localStorage, not this class.
function makeStorage(limit = 40) {
  const map = new Map();
  return {
    get length() { return map.size; },
    getItem: (k) => (map.has(k) ? map.get(k) : null),  // null when missing
    setItem: (k, v) => {
      if (String(v).length > limit) throw new Error('QuotaExceededError');
      map.set(k, String(v));                           // always text
    },
    clear: () => map.clear(),
    key: (i) => [...map.keys()][i] ?? null,
  };
}
const local = makeStorage();   // sessionStorage dies with the tab
function getJson(store, key, fallback = null) {
  const raw = store.getItem(key);
  if (raw === null) return fallback;   // missing, not undefined
  try { return JSON.parse(raw); }
  catch { return fallback; }           // broken text from earlier
}
function setJson(store, key, value) {
  try { store.setItem(key, JSON.stringify(value)); return true; }
  catch (e) { console.log(' refused:', e.message); return false; }
}
setJson(local, 'user', { name: 'Ana', role: 'admin' });
console.log('local  :', getJson(local, 'user'));
console.log('missing:', getJson(local, 'theme', 'light'));
console.log('big ok?:', setJson(local, 'x', 'y'.repeat(50)));
local.setItem('corrupt', '{not json');
console.log('broken :', getJson(local, 'corrupt', 'default'));
for (let i = 0; i < local.length; i++) console.log('key', i, '=', local.key(i));`},{slug:"cookies",title:"Cookies & document APIs",description:"Reading and writing cookies and the document.",content:`A cookie is one small line of text in the form name=value. The browser attaches it to almost every request it sends to that domain. The server can read it while no page script is running. That is the whole point of a cookie, and also its cost.

**document.cookie is one string**
- Reading document.cookie gives you every cookie for the current page joined into one string, like "session=abc; theme=dark".
- You split it yourself to find one value. Split on "; ", then split each piece on its first "=".
- Writing document.cookie = "theme=dark" does not replace everything. It appends one more cookie.
- To change a cookie, write the same name again with a new value.
- A cookie with HttpOnly is missing from that string on purpose.

**Attributes decide the rules**
- expires or max-age sets how long the cookie lives. With neither, it dies when the browser closes.
- max-age counts seconds. expires is a date string. Prefer max-age because it is easier to compute.
- path limits which pages send it. path=/ means every page on the site.
- domain widens it to subdomains. Leave it off to keep the cookie on the host that set it.
- Secure means send it over https only. Without Secure, the cookie also travels in plain http.
- HttpOnly means JavaScript cannot read it. document.cookie will not show it.
- SameSite says when a cookie rides along with a request from another site. The values are Lax, Strict and None.

**SameSite is the CSRF guard**
- CSRF is cross-site request forgery. Another site tricks your logged-in browser into sending a request you never meant to make.
- SameSite=Lax sends the cookie on normal top-level clicks, but not on hidden cross-site form posts. That stops most CSRF.
- SameSite=Strict sends it only from your own site. Safer, but it breaks logins that come back from another site, such as OAuth.
- SameSite=None is the escape hatch for embedded widgets. It requires Secure.

**Deleting, and the cost**
- You cannot delete a cookie with a delete call. You write the same name with an expiry in the past.
- Every cookie for the domain rides along with every request. That is slower, and it says more about the user than you meant.
- Keep cookies small. A few kilobytes is plenty. Do not put a JSON blob in one.

**Cookies or localStorage**
- Cookies are sent to the server automatically and can be HttpOnly. localStorage is never sent, and scripts can always read it.
- A session token for a real login belongs in a cookie that is HttpOnly, Secure and SameSite.
- UI preferences and test scratch data belong in localStorage.

**Where you meet this in real work**
- A Playwright test reads cookies from the browser context, or sets one to skip the login page.
- Cypress clears cookies between tests so a session from test one does not help test two.
- An "unauthorized" bug that only happens on https is often a cookie missing SameSite or Secure.`,codeExample:`// A stand-in for document.cookie. In a page you assign to
// window.document.cookie and the browser keeps the jar, not you.
const jar = { forServer: '', forScript: '' };

function writeCookie(jar, name, value, attrs = {}) {
  let line = name + '=' + encodeURIComponent(value);
  if (attrs.maxAge) line += '; Max-Age=' + attrs.maxAge;
  if (attrs.path) line += '; Path=' + attrs.path;
  if (attrs.secure) line += '; Secure';
  if (attrs.httpOnly) line += '; HttpOnly';
  if (attrs.sameSite) line += '; SameSite=' + attrs.sameSite;
  // HttpOnly means page scripts never see it. The server still reads it.
  const side = attrs.httpOnly ? 'forServer' : 'forScript';
  jar[side] = jar[side] ? jar[side] + '; ' + line : line;   // appends
  return line;
}

function readCookie(text, name) {
  return text.split('; ').reduce((found, pair) => {   // null when not there
    const i = pair.indexOf('=');
    return pair.slice(0, i) === name ? decodeURIComponent(pair.slice(i + 1)) : found;
  }, null);
}

writeCookie(jar, 'theme', 'dark', { path: '/', maxAge: 86400 });
writeCookie(jar, 'csrf', 't-99', { sameSite: 'Lax' });
writeCookie(jar, 'session', 'abc123', { httpOnly: true, secure: true });
console.log('script sees:', jar.forScript);
console.log('theme      =', readCookie(jar.forScript, 'theme'));
console.log('session    =', readCookie(jar.forScript, 'session'), '(hidden)');
console.log('server sees:', jar.forServer);
writeCookie(jar, 'theme', '', { path: '/', maxAge: 0 });   // past expiry deletes
console.log('after delete:', jar.forScript);`},{slug:"timers-intervals",title:"Timers, Intervals & Debounce",description:"setTimeout, setInterval, and waiting without racing.",content:`Timers let JavaScript run something later. They are not a pause. They are how you schedule work once the current code has finished. In tests this is the difference between a stable suite and a flaky one, because a fixed sleep is a race you are choosing to lose sometimes.

**setTimeout schedules one run**
- setTimeout(fn, ms) calls fn once, after roughly ms milliseconds, and returns a number. That number is the timer id.
- The code after the call keeps running right away. Nothing waits.
- A delay of 0 still waits. The timer runs only after the current block of code ends, because a single thread handles both.
- clearTimeout(id) cancels a scheduled run. The id is the only way to cancel it.
- If you need waiting, write the surrounding code around that fact. Do not assume the next line runs after the timer.

**setInterval repeats**
- setInterval(fn, ms) keeps calling fn every ms until you stop it.
- It returns an id too, and you must keep it. Without the id you have no handle to stop it.
- clearInterval(id) stops it. Always call it when the page unloads or the component goes away.
- A leaked interval keeps firing work forever, and the leak is invisible until the tab feels slow.

**Await in a loop is a slow loop**
- Awaiting inside a for loop waits for each step before starting the next. Ten steps of 100ms take a whole second.
- Promise.all starts every step at once and waits for all of them. The same ten steps finish in about 100ms.
- The same rule applies to test setup. Three independent setup calls belong in one Promise.all, not three separate awaits.

**Debounce: wait until the calls stop**
- Debounce runs the function once, only after the calls have stopped for N milliseconds.
- It suits a search box. Typing "cats" fires the handler three times. Debounce sends one request.
- It suits a resize handler, which can fire dozens of times a second while the window moves.
- The implementation is one clearTimeout plus a fresh setTimeout on every call, so only the last timer survives.

**Throttle: at most once per window**
- Throttle runs the function immediately, then ignores further calls for N milliseconds.
- It suits scroll and mousemove, where you want live feedback but not sixty updates a second.
- You can build one from a timestamp: if now minus lastRun is at least N, run the function and remember now.
- Debounce delays the work until things settle. Throttle caps the rate. Use debounce for text, throttle for movement.
- For visual updates, requestAnimationFrame is better than either. It runs once per painted frame, so it cannot draw more than the screen shows.

**Waiting in a test**
- Never sleep a fixed number of milliseconds and hope the page is ready. That is a race.
- Wait for a condition instead: an element visible, a response received, a value written to storage.
- In Playwright that is a locator wait or an expect. In plain JavaScript it is a loop that polls until a check passes or a timeout expires.
- Timeouts belong inside the wait, not in the test body. A fixed sleep in the body hides the real bug.

**Where you meet this in real work**
- A debounced search input means your test waits for the request to land, not for the keystroke.
- A throttled scroll handler means an assertion written right after a wheel event can run too early.
- A test that passes on your laptop and fails on CI is almost always a sleep that was too short.`,codeExample:`// Timers, debounce and throttle, using only timers and Date.
// The same functions run unchanged in Node and in the browser.
function debounce(fn, wait) {
  let id = null;
  return (...args) => {
    clearTimeout(id);                 // cancel the run we queued last time
    id = setTimeout(() => fn(...args), wait);
  };
}
function throttle(fn, wait) {
  let last = 0;
  return (...args) => {
    if (Date.now() - last >= wait) { // at most once per window
      last = Date.now();
      fn(...args);
    }
  };
}

const onceId = setTimeout(() => {}, 1000);   // a number in the browser
console.log('timer gave us an id to cancel:', onceId !== undefined);
clearTimeout(onceId);

let debounceRuns = 0;
const search = debounce((term) => {
  debounceRuns += 1;
  console.log('  debounced search for "' + term + '"');
}, 50);
search('c'); search('ca'); search('cats');   // one search wins, not three

let throttleRuns = 0;
const onScroll = throttle(() => { throttleRuns += 1; }, 60);
for (let i = 0; i < 10; i++) onScroll(i);
console.log('throttle ran', throttleRuns, 'time(s) out of 10 rapid calls');

let ticks = 0;
const ticker = setInterval(() => {
  ticks += 1;
  if (ticks === 3) {
    clearInterval(ticker);            // without this it never stops
    console.log('interval stopped itself at', ticks);
  }
}, 30);

setTimeout(() => console.log('burst settled, debounce runs =', debounceRuns), 150);`}]},{slug:"testing",title:"Testing JavaScript",icon:"flask-conical",description:"How the industry actually proves JavaScript works.",level:"advanced",lessons:[{slug:"unit-testing",title:"Unit Testing with Jest",description:"describe, it, expect, and the arrange-act-assert shape.",content:`A test checks that a piece of code does what you expect. Like weighing a parcel on a calibrated scale, a test gives you a number you can trust, instead of a guess. It does not prove the code is perfect. It proves the behaviour you checked is the behaviour you got.

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
- A good unit test is fast, named clearly, and repeatable. It checks one result and runs the same way twice. Keeping the base of the pyramid strong is what makes the rest of the suite bearable.`,codeExample:`// A test framework, written by hand, so it runs in plain Node.
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
console.log(pass + " passed, " + fail + " failed");`},{slug:"test-doubles",title:"Spies, Mocks & Stubs",description:"Isolating units without faking everything.",content:`A test double is a stand-in for a real dependency. Like a crash test dummy standing in for a person, you swap in something smaller and more controllable so the test cannot be hurt. The goal is to test your unit in isolation and still check real behaviour.

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
- Use the simplest double that works. A stub controls answers, a spy records, a mock enforces calls, a fake stands in for a whole system. Keep the real unit in the middle.`,codeExample:`// Test doubles, hand-rolled so you can see the inside.
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
console.log(pass + " passed, " + fail + " failed");`},{slug:"e2e-testing",title:"End-to-End Testing",description:"Playwright and Cypress patterns for real user journeys.",content:`End-to-end testing means driving the real app the way a user does. Like going to a shop, choosing an item, paying and walking out, the test follows one complete journey from the first click to the result on screen. It covers the links between parts that unit tests never see.

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
- Keep end-to-end tests few, stable and readable. Model them as the user's steps. Wait for real conditions. Give every run its own clean state, and debug with a trace.`,codeExample:`// A login journey modelled in plain JavaScript. No browser needed.
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
console.log(pass + " passed, " + (results.length - pass) + " failed");`},{slug:"test-data-patterns",title:"Test Data Patterns",description:"Fixtures, builders, factories, and seeding.",content:`Test data is what you feed into the thing under test. Like ingredients in a recipe, the right data makes the test obvious and the wrong data hides what it was meant to show. Good test data says only what this particular test cares about.

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
- Write the smallest data that makes the test clear. Inline for a few fields, a builder for defaults, a factory with a counter for uniqueness. Seed a known state, fix the clock, and never share a mutable object.`,codeExample:`// Builders and factories, hand-rolled.
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
console.log(pass + " passed, " + fail + " failed");`}]},{slug:"performance-security",title:"Performance & Security",icon:"shield",description:"Making code fast, and keeping it from being exploited.",level:"advanced",lessons:[{slug:"performance-basics",title:"Performance Basics",description:"Measuring first, then optimising the right thing.",content:`Performance work is not about clever code. It is about finding the one slow spot, fixing it, and proving the number moved. Guessing costs days. Measuring costs a minute.

**Measure first, always**
- Guessing at a bottleneck is like tightening every bolt on a car because one wheel wobbles.
- Timing tells you which line is slow. Reading the code only tells you which line looks slow.
- Decide whether a line needs to change only after you have a number for it.
- Time it again afterwards. Two comparable numbers are the only proof you will have.
- console.time("label") starts a stopwatch. console.timeEnd("label") stops it and prints milliseconds. Both labels must match, or nothing prints.
- Date.now() returns milliseconds, so subtracting two readings gives a duration. process.hrtime.bigint() counts nanoseconds, for fast work.
- Time the whole operation once. Only go inside it if the whole thing is too slow.

**What a slow test suite really costs you**
- A suite that takes 40 minutes instead of 4 gets skipped when a release goes late.
- The point of a suite is fast feedback. A slow suite is telling you about yesterday.
- Most of the cost is waiting, not thinking. Long timeouts and fixed sleeps are the usual suspects.
- Time the whole run the same way, then attack the ten slowest spec files.

**The cheap wins, in the order to try them**
- Do not look the same thing up over and over. Each lookup is work.
- Read array.length once into a const instead of reading the property on every pass.
- Move a function out of the loop. Defining it 10000 times builds 10000 unused functions.
- Do not build a fresh object or array literal inside a hot loop when one reused copy will do.
- Replace list.includes(value) in a loop with a Set and set.has(value). An array search is a walk, a Set lookup is a direct trip.
- Return or break as soon as you have the answer. The rest of the work is waste.
- Do not use JSON.parse(JSON.stringify(x)) as a copy. A spread is cheaper.

**O(n) versus O(n squared)**
- Big O notation describes how work grows as data grows. It is a growth curve, not a stopwatch.
- O(n) means work grows in step with the data. Double the rows, double the work.
- O(n squared) is a loop inside a loop over the same data. Double the rows, quadruple the work.
- The nested loop below compares every row with every target. The Set version touches each row once.
- Two loops over one collection? Ask whether the inner search could be a lookup table.

**Debounce and throttle: this fires too often**
- Debounce waits until the input is quiet for a moment, then runs once. It suits search-as-you-type.
- Throttle runs the work at most once per time window while you keep typing. It suits scroll and resize handlers.
- Both sit on setTimeout or requestAnimationFrame. Debounce resets the timer, throttle checks the clock.
- This is why a test must wait for the page to settle, and why a fixed sleep is a bad substitute.

**Memory leaks in plain words**
- A leak is memory your code still holds but will never use again. Like a drawer nobody empties.
- An event listener you added and never removed keeps its element, and everything it points at, alive.
- A closure that captured a big array keeps that array alive for as long as the closure is reachable.
- A Map or cache you only ever add to grows with no ceiling. Give it a size limit or an expiry time.
- A cached value that never expires also serves stale answers. Cache with a time to live.

**Where you meet this in real work**
- A helper that scans a table for a row it already found twenty lines earlier.
- A Playwright spec that calls waitForTimeout(5000) instead of waiting for a real condition.
- A fixture that adds a listener to page and never removes it between tests.
- Micro-optimising a cold path is wasted work. Nobody notices a report that runs once a night.
- The profiler-first rule: no change lands without a before number and an after number.`,codeExample:`// Timing works in plain Node. console.time / console.timeEnd are the
// built-in stopwatch. In a browser you would also open the Performance panel.
const rows = Array.from({ length: 3000 }, (_, i) => i);
const targets = Array.from({ length: 2000 }, (_, i) => i * 3);

console.time("includes inside a loop, O(n squared)");
const slow = rows.filter((r) => targets.includes(r));
console.timeEnd("includes inside a loop, O(n squared)");

console.time("Set.has instead, O(n)");
const lookup = new Set(targets);
const fast = rows.filter((r) => lookup.has(r));
console.timeEnd("Set.has instead, O(n)");
console.log("same answer?", slow.length === fast.length, fast.length, "matches");

// A hand-rolled stopwatch for when console.time is not available.
function timed(label, fn) {
  const start = Date.now();
  const out = fn();
  console.log(label + ": " + (Date.now() - start) + "ms, " + out + " items");
  return out;
}
timed("JSON round trip as a copy", () => JSON.parse(JSON.stringify(rows)).length);
timed("spread as a copy", () => [...rows].length);

// A cache with no ceiling is a leak. Watch the heap grow.
const before = process.memoryUsage().heapUsed;
const cache = new Map();
for (let i = 0; i < 100000; i++) cache.set("id-" + i, { payload: "x".repeat(200) });
console.log("cache entries:", cache.size, "| MB:", Math.round(before / 1e6), "->", Math.round(process.memoryUsage().heapUsed / 1e6));
cache.clear();
console.log("cleared to", cache.size, "entries; the heap drops when the GC runs");`},{slug:"browser-rendering",title:"The Rendering Pipeline",description:"Layout, paint, reflow, and requestAnimationFrame.",content:`Before a single pixel of a page reaches the screen, the browser puts the page through a fixed sequence of steps. Knowing the order is the whole skill, because your JavaScript can only push the browser back to one of those steps. This lesson is the one you cannot practise without a browser, so the example below fakes a tiny DOM and counts the work instead.

**The pipeline, in order**
- Parse HTML. The browser reads the bytes and turns tags into a tree of objects.
- Build the DOM, the Document Object Model. That tree is the live, changeable version of your HTML.
- Build the CSSOM, the CSS Object Model. The same thing, but for your stylesheets and inline styles.
- Build the render tree. DOM and CSSOM are merged, and elements with display: none are dropped.
- Layout, also called reflow: work out the exact position and size of every box.
- Paint: fill in the pixels, the colours, the text, the shadows.
- Composite: stack the painted layers and hand them to the screen.
- Change something near the top and every step below it runs again. That is the cost you pay for a style change.
- Adding or removing a node dirties the DOM. Reading a size after a write forces layout to happen right now.

**Reflow versus repaint versus composite**
- Reflow means the browser recalculates geometry. Like re-measuring the whole kitchen because you moved one shelf.
- Repaint means it fills in pixels again, because a colour or a shadow changed but the boxes did not.
- Composite means it moves layers that are already painted. It is the cheapest of the three.
- Cost order to remember: geometry beats paint, paint beats moving a ready-made layer.

**The read-write-read-write trap**
- offsetWidth, offsetHeight, clientHeight, scrollTop and getBoundingClientRect are all reads of layout.
- Writing a style and then reading a size makes the browser do the layout it was trying to postpone. That is a forced synchronous reflow.
- Do that inside a loop over 100 rows and you pay for 100 layouts instead of one.
- The fix is to batch. Do all the writes first, then do all the reads.
- requestAnimationFrame gives you the callback that runs just before the next paint. Change what is on screen there, never in a loop that reads.

**Why left and top are slow and transform is fast**
- left and top change geometry, so every frame triggers reflow and repaint.
- transform and opacity only move or fade a layer that is already painted, so they stay on the GPU and skip layout.
- Same animation, very different cost. This is why tutorials tell you to animate transform.

**The DOM is live, and it is big**
- Every style change has to be reasoned about against the whole page, not just the element you touched.
- A documentFragment is a staging area. Build in it, then insert once, so the page is disturbed once.
- Setting innerHTML re-parses a whole HTML string. Every child is thrown away and rebuilt.
- Virtual scrolling exists for the same reason: build only the rows that fit on screen, and recycle the rest.

**The event loop and the frozen page**
- JavaScript runs one long task at a time on the main thread. The browser cannot paint in the middle of your task.
- A loop over 3000 rows that takes 200ms is a page that looks frozen for 200ms, because nothing is being drawn.
- Yield to the event loop between chunks of work and the page keeps painting. Your test then stops timing out for no reason.

**Where you meet this in real work**
- A table that scrolls like treacle, because each row write is followed by a read.
- A spinner that never appears, because one synchronous task outran the first frame.
- A scroll test that needs waitForTimeout because virtual scrolling has not caught up yet.
- None of this is visible in a terminal. Open the browser devtools, record a performance profile, and look.`,codeExample:`// Fake DOM: one node plus counters for the work a real browser would do.
// Real names: offsetWidth, requestAnimationFrame, createDocumentFragment.
const el = (tag) => ({ tag, style: { left: 0, transform: "", opacity: 1 } });
const stats = { reflows: 0, paints: 0 };
const read = (n) => { stats.reflows++; return n.style.left; };   // offsetWidth
const write = (n, p, v) => { n.style[p] = v; stats.paints++; };
const row = el("li");

// Trap: write, read, write, read. Layout is forced again on every pass.
const t0 = Date.now();
for (let i = 0; i < 5000; i++) { write(row, "left", i); read(row); }
console.log("trapped:", stats.reflows, "forced reflows in", Date.now() - t0, "ms");

// Fix: every write first, then one read. That is one layout for the batch.
stats.reflows = 0;
stats.paints = 0;
const t1 = Date.now();
for (let i = 0; i < 5000; i++) write(row, "transform", "translateX(" + i + "px)");
read(row);
console.log("batched:", stats.paints, "paints,", stats.reflows, "reflow,", Date.now() - t1, "ms");

// left and top repaint. transform and opacity only composite a ready layer.
stats.paints = 0;
write(row, "left", 20);                          // geometry, so a repaint
write(row, "transform", "translateX(20px)");      // composite only
write(row, "opacity", 0.5);                      // composite only
console.log("one frame -> paints:", stats.paints, "(the last two did not repaint)");`},{slug:"security",title:"Web Security for Testers",description:"XSS, CSRF, prototype pollution, and safe test code.",content:`Security bugs are not exotic. Almost all of them come from one habit: trusting something you should not have. Your job as a tester is to feed hostile input into a field and check the system stays boring. This lesson is the vocabulary for those tests.

**The trust boundary**
- A trust boundary is the line where data arrives from outside your program.
- Anything from a user, a URL, a query string, a cookie or an API response is untrusted. Everything you wrote yourself is trusted.
- Untrusted does not mean malicious. It means nobody has checked it yet.
- Validate at the boundary, then trust your own validated copy.
- typeof x === "string" checks the shape of the value, not its safety.

**XSS and its three flavours**
- XSS, cross-site scripting, means attacker text gets executed as code by the browser, using the logged-in session.
- Stored XSS: the payload is saved in a database and replayed to every later visitor.
- Reflected XSS: the payload comes back in the response, from a URL parameter or a search box, and fires on one page load.
- DOM-based XSS: no server round trip. The payload sits in the address bar and is read by your own JavaScript.
- Testing all three is mechanical: type a name such as <img src=x onerror=alert(1)> and watch what the page does with it.

**Why innerHTML is the classic hole**
- element.innerHTML = value and document.write(value) both parse the string as HTML. An onerror attribute is code, so the browser runs it.
- element.textContent = value stores value as text. A tag stays a tag on screen and never becomes code. This is the fix.
- If you must render real HTML, sanitise it with a library such as DOMPurify, then insert the cleaned string.
- An escapeHtml helper is the hand-rolled version: replace &, <, >, " and ' with entities. It is fine for plain text only.

**CSRF: the browser sends the cookies by itself**
- CSRF, cross-site request forgery, abuses a cookie the browser attaches without being asked.
- A logged-in tester visits evil.example, which posts a form to your app. Your app sees the cookie and acts, and no password was stolen.
- SameSite=Lax or Strict stops the cookie riding along on a cross-site post. It is the cheapest strong defence.
- Requiring a custom header or a CSRF token defeats it too, because a cross-site form cannot set custom headers.
- Checking Origin or Referer is the fourth belt, not a replacement for the first three.

**Prototype pollution**
- Every object inherits from Object.prototype. Writable, code there runs for objects you never touched.
- A recursive merge that copies untrusted JSON key by key can be handed __proto__ and write straight into that shared object.
- Then isAdmin is true on every object in the process, and your authorisation checks quietly pass.
- The fix is to reject __proto__, constructor and prototype as keys, and to use Object.create(null) or a Map for untrusted dictionaries.

**The rest of the list**
- eval and new Function turn a string into running code. Never call them on anything a user can influence.
- An open redirect takes your URL and sends the user somewhere else. Validate the host against an allowlist.
- Anything shipped to the browser is public. An API key in a bundle is a published key.
- Keep secrets on the server. Send the browser a short lived token at most.

**Test the defences, do not assume them**
- Type a script tag as a name, save it, reload, and assert the text comes back escaped. Look at the DOM, not the pixels.
- Assert that no new script or event handler attribute appeared anywhere on the page.
- Check the response cookie for SameSite, and confirm a cross-origin POST without a token is rejected.
- Send {"__proto__": {"isAdmin": true}} to any endpoint that merges input, then assert ({}).isAdmin is still undefined.
- Log what a page sends. Request headers in devtools catch leaked tokens faster than code review.`,codeExample:`// A user typed this, so it is untrusted. escapeHtml makes it inert.
function escapeHtml(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Fake of element.textContent: stores text, not markup.
const comment = { set textContent(v) { this.innerHTML = escapeHtml(v); } };
const payload = '<img src=x onerror="alert(1)">';
comment.textContent = payload;
console.log("1. escaped:", comment.innerHTML);
console.log("2. no live tag:", !/<img/.test(comment.innerHTML));

// Prototype pollution: a recursive merge that trusts key names.
function merge(target, source, safe) {
  for (const key of Object.keys(source)) {
    if (safe && ["__proto__", "constructor", "prototype"].includes(key)) continue;
    const v = source[key];
    target[key] = v && typeof v === "object" ? merge(target[key] || {}, v, safe) : v;
  }
  return target;
}
const attack = JSON.parse('{"role":"user","__proto__":{"isAdmin":true}}');
merge({}, attack, false);
console.log("3. unsafe merge leaks:", ({}).isAdmin);
delete Object.prototype.isAdmin;
console.log("4. safe merge:", ({}).isAdmin, "| role:", merge({}, attack, true).role);

// CSRF: the browser sends cookies by itself, so check the token.
const allowed = (h) => h.token === "t-99" && h.origin === "https://app.test";
console.log("5. cookie only:", allowed({ cookie: "sid=abc" }));
console.log("6. token+origin:", allowed({ token: "t-99", origin: "https://app.test" }));`}]},{slug:"advanced",title:"Advanced & Interview Prep",icon:"brain",description:"Regex, legacy JS, and the questions that decide your offer.",level:"advanced",lessons:[{slug:"regex-intro",title:"Intro to Regular Expressions",description:"Matching, groups, and the flags you actually need.",content:`A regular expression is a pattern language for finding text. Think of it like a search filter with rules instead of just typing the exact word. For automation testing, it helps you match parts of URLs, extract IDs, or check formats without writing many if checks.

**The three parts you actually use**
- A pattern is the rule you write, like /INV-\\d+/ for finding invoice numbers.
- Flags change how the search runs. g looks for every match. i ignores case. m works line by line.
- Methods run the pattern. test gives you a yes or no. match gives you the text back. replace, exec and split do their own jobs.

**test vs match vs matchAll**
- test is like asking "is this there?" It gives you true or false. Good for a quick check like "does this URL contain login".
- match is like asking "give me what you found". With no g flag it gives an array with the match and any captured groups, or null. With g it gives every match but drops the group details.
- matchAll gives every occurrence and keeps the groups for each one. Think of test as a yes or no, match as grabbing results, matchAll as grabbing all of them with detail.

**Character classes, ranges, and negation**
- A character class [abc] means "any one of these letters". Like picking one key from a small ring of keys.
- Ranges like [a-z] mean "any letter from a to z". [0-9] means any digit. Combine them like [a-zA-Z0-9].
- Negation [^a-z] means "anything except lowercase letters". It flips the rule inside the square brackets.

**Anchors, the multiline flag, and what \\d really means**
- ^ anchors to the start of a string. $ anchors to the end. They are like bookends. Without them a pattern can match in the middle.
- The m flag makes ^ and $ match the start and end of each line instead of the whole string. That matters when you read log output.
- \\d matches a digit. \\w matches a word character. \\s matches whitespace. Their negations are \\D, \\W and \\S.
- A common trap is that \\d is ASCII only. It matches 0-9 and nothing else. For international digits you may need the u flag.

**Quantifiers, greedy, and lazy**
- * means "zero or more". + means "one or more". ? means "zero or one".
- {n,m} means "at least n, at most m". {3} means exactly 3. {3,} means three or more.
- By default a quantifier is greedy. It grabs as much as it can. Put a second ? on it and it becomes lazy, grabbing as little as it still can.
- Concrete example: <.+> is greedy, so it grabs everything between the first < and the last >. <.+?> is lazy, so it grabs one tag at a time.

**Groups, alternation, and backreferences**
- ( ) creates a capturing group. You pull the part out with match[1], match[2], and so on.
- (?: ) is a non-capturing group. It groups for logic but does not save anything. Use it when you do not need to extract.
- | is alternation, which means "or". Wrap it in a group like (cat|dog)+ when you need one or more of either.
- \\1 is a backreference. It means "the same text you just captured". So (\\w+) \\1 matches "hello hello" but not "hello world".
- (?<name>...) is a named group. You read it as match.groups.name instead of counting brackets. Much easier to read in a long pattern.

**Flags and where regex earns its keep**
- g finds every match. i ignores case. m works per line. s lets the dot match a line break too.
- Escape any user input before you build a pattern from it. Someone typing .+ should give you a literal dot, not a wildcard.
- Catastrophic backtracking is the trap to watch. A nested shape like (a+)+ on a string that will never match tries so many combinations that the page hangs. Keep patterns specific and avoid nesting quantifiers.
- Regex is great for IDs, emails, dates and log patterns. It is overkill for a simple startsWith or one split. Use string methods when the rule is simple.`,codeExample:`// test gives true/false
const emailRe = /^[a-z0-9.-]+@[a-z0-9]+\\.[a-z]{2,}$/i;
console.log("Valid email:", emailRe.test("ana@test.com"));
console.log("Rejects no-at:", emailRe.test("anatest.com"));

// match with a capture group
const invoiceRe = /INV-(\\d{5})/;
const text = "Your invoice INV-12345 was paid";
const m = text.match(invoiceRe);
console.log("Captured number:", m ? m[1] : "no match");

// matchAll with global flag keeps groups for every occurrence
const tags = "<div>Hi</div><span>Bye</span>";
const tagRe = /<(\\w+)>(.*?)<\\/\\1>/g;
for (const found of tags.matchAll(tagRe)) {
  console.log("Tag:", found[1], "Text:", found[2]);
}

// replace, split, anchors
const phone = "555-123-4567";
console.log("Masked:", phone.replace(/\\d{3}-\\d{3}-/, "***-***-"));
const csv = "alpha;beta;gamma";
console.log("Split:", csv.split(/;/).join(" | "));
const startsA = /^a/i.test("Apple");
console.log("Starts with A:", startsA);`,quiz:[{question:"What does /^a/ test for?",options:["Any a anywhere","A string starting with a","Exactly one a","Two a's"],correctIndex:1,explanation:"^ anchors the match to the start of the string."},{question:"Which method returns true/false for a match?",options:["exec","test","match","split"],correctIndex:1,explanation:"RegExp.test() returns a boolean."}]},{slug:"legacy-var",title:"Legacy var & Hoisting",description:"Old JavaScript you still meet in old codebases.",content:`Before let and const existed, var was the only way to declare a variable. It shipped in 1995 with the very first version of JavaScript. The web was already full of pages when the rules changed, so var could never be removed. That is why you still meet it in old scripts, old build tools, and interview questions.

**Why var still exists**
- It is baked into every old page and library. Removing it would break millions of sites. It works, so it stays.
- Old frameworks rely on its quirks. Some of them depend on function scope on purpose.
- Your browser still supports it. So you can run it, even if you should not write it.

**Function scope, not block scope**
- Scope is the set of names a piece of code can see. var looks no further than the nearest function, or the top of the script.
- A block is anything between curly braces, like an if or a for loop. var ignores blocks. Think of var as ignoring the walls of a room and only noticing the building.
- So \`if (true) { var x = 1; }\` leaves x visible after the if ends. let in the same place disappears at the closing brace.
- let and const are block-scoped. They are locked inside the braces.

**Hoisting: the name exists before the line**
- Hoisting means JavaScript prepares variable names before it runs any line. It reads the whole function first and notes which names will exist.
- var hoists as undefined. The name is on the shelf but the box is empty. So \`console.log(a); var a = 5;\` prints undefined instead of crashing.
- let and const hoist too, but they land in the temporal dead zone, a short period where the name exists but using it throws a ReferenceError. Using a var is silent. Using a let early is loud.
- Hoisting is like a guest list. Everyone who is coming is on the list before the party starts, but only var hands out an empty placeholder.

**Redeclaration and shared loop variables**
- var lets you declare the same name twice in the same function. The second declaration quietly overwrites the first. let and const throw a SyntaxError instead.
- A loop with var has one single variable for the whole loop. Every callback you create in the loop shares that one box.
- \`for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i)); }\` prints 3, 3, 3. All three callbacks arrive after the loop finished, and by then i is 3.
- With let, each round of the loop gets a fresh copy. The same loop prints 0, 1, 2. One keyword is the whole fix.
- A closure is a function that remembers the variables around it. With var it remembers one shared box. With let it remembers a separate box per round.

**Leaks and safe checks**
- A top-level var in an old non-strict script becomes a property on the global object, so \`var x = 1\` also means \`window.x === 1\`. Two scripts can overwrite each other by accident. let and const do not do this.
- typeof is the one safe way to look at a name that might not exist. \`typeof missing\` gives the string 'undefined' rather than throwing.
- typeof only works for reading. Reading missing.x still throws.

**When you are forced to touch var, and how to migrate**
- An old script you did not write. A global config file that other systems read. A function parameter that a caller passes positionally.
- In all three cases, do not rewrite more than you need. var works. Read it correctly first, change it later.
- The migration rule is simple: change var to let, then change to const if nothing ever reassigns it. Then let the linter find the rest for you. Most editors flag every var on save.

**The rule to remember**
Write let and const in new code. Read var correctly in old code. Use var in new code only when you are matching an existing system that cannot be changed.`,codeExample:`// var ignores blocks; only the nearest function matters
function scopeDemo() {
  if (true) {
    var leaked = "set inside the if";
  }
  console.log("var escaped the block:", leaked);
}
scopeDemo();

// let disappears at the closing brace
function letDemo() {
  if (true) {
    let trapped = "set inside the if";
  }
  try {
    console.log(trapped);
  } catch (err) {
    console.log("let is block-scoped:", err.name);
  }
}
letDemo();

// Hoisting: var arrives as undefined, let is in the dead zone
console.log("hoisted var:", undefinedAtFirst);
var undefinedAtFirst = 10;
try {
  console.log(tdz);
} catch (err) {
  console.log("let before its line throws:", err.name);
}
let tdz = 1;

// One shared loop variable with var, one fresh copy per round with let
const withVar = [];
const withLet = [];
for (var i = 0; i < 3; i++) withVar.push(() => i);
for (let j = 0; j < 3; j++) withLet.push(() => j);
console.log("var loop shares one box:", withVar.map((fn) => fn()));
console.log("let loop gives each its own:", withLet.map((fn) => fn()));

// typeof is safe on a name that does not exist
console.log("typeof a missing name:", typeof somethingNobodyDeclared);`,quiz:[{question:"What scope does var use?",options:["Block","Function","Global only","Module"],correctIndex:1,explanation:"var is function-scoped; only let/const are block-scoped."},{question:"console.log(x); var x = 5; prints?",options:["5","undefined","ReferenceError","null"],correctIndex:1,explanation:"var hoists the declaration (undefined) to the top."}]},{slug:"legacy-topics",title:"Legacy Topics",description:"IIFEs, ==, attachEvent, and other fossils.",content:"Old codebases keep fossils. A fossil is code that still runs but nobody would write it today. You do not need to love these patterns. You need to recognise them fast, so you do not misdiagnose a bug that is really just old style.\n\n**IIFE, the private room that modules replaced**\n- An IIFE is an immediately invoked function expression: `(function () { ... })();`. It is a function that runs the moment it is defined.\n- Before modules, there was no way to hide variables. One file put everything on the global object, and two files with a helper named `get` would fight.\n- The IIFE was the trick. Its variables die when it finishes, like a room with a door that locks.\n- The modern equivalent is just a module file. It is private by default. Use one instead.\n\n**Event handlers: attachEvent and the arguments object**\n- `attachEvent('onclick', fn)` is the pre-2002 way to listen for clicks. addEventListener came later and is the only one you should write.\n- The old one takes `this` as the window inside the handler. It also has no capture or once options. If you see it, that page predates 2002.\n- `arguments` is an array-like object holding every argument a function received, even ones it did not name. Rest parameters (`...rest`) do the same job and are readable. Use the rest version.\n\n**== versus ===, and why loose equality is a trap**\n- `==` is loose equality. It converts types before comparing. `===` is strict equality. It compares type and value with no conversion.\n- `0 == '0'` is true, and `'0' == ''` is also true. Empty string, false, zero, null and undefined all compare loosely equal to each other in pairs.\n- It is not that `==` is always wrong. It is that you have to memorise the conversion table to use it. Nobody does. So use `===` and be done.\n- The one place people still meet `==` is in a comparison to null, where it also catches undefined.\n\n**Banned, broken, or just weird**\n- The `with` statement tried to swap out the object that names resolve against. It made code impossible to reason about. It is a syntax error in strict mode. You will only find it in 2005-era code.\n- `document.all` is the one object in the language that is falsy. It is a deliberate joke kept for the web. Never test for it. Test for undefined instead.\n- `arguments.callee` points at the running function itself. Strict mode bans it because it breaks optimisers. Replace it with a named function.\n- `parseInt('08')` used to read 8 as octal, base 8, so it returned 0. Always pass the radix: `parseInt('08', 10)`.\n- `012` is an octal literal. `09` is a syntax error. Old code used leading zeros for flags. Write 0o12 or plain 12 today.\n\n**Memory and array traps**\n- Reading innerHTML into a variable, changing it, then writing it back drops every listener and every state on the page. This is the classic leak nobody can explain. Fix it by keeping the element and changing a child.\n- `new Array(5)` creates five empty holes. The holes are not even undefined. `Array(5).fill(0)` gives five real zeros. Prefer `[0,0,0,0,0]` or fill.\n- `[10, 9, 1].sort()` sorts as text, so 10 comes before 9. sort() without a comparator sorts by string value. Always pass a comparator.\n- `setTimeout('run()', 100)` takes a string, which the browser compiles as code at run time. It blocks and hides errors. Always pass a function.\n- The comma operator evaluates left then right and throws away the left. In a for loop header it lets you share one variable. Nowhere else is it worth it.\n- `'a,b'.replace('a', 'X')` replaces only the first hit. Use a regex with g for all of them. Use replace with a function when the replacement needs logic.\n\n**Why you read this topic**\nYou read it so you can tell old code from broken code. Half of a bug report is really just \"this page was written in 2004\". Recognising the fossil is often the whole diagnosis. Write the modern version in your own tests, and leave the page alone unless you own it.",codeExample:`// IIFE: a private room that closes when it finishes
(function () {
  const secret = "hidden inside the IIFE";
  console.log("IIFE ran once:", secret.toUpperCase());
})();
console.log("secret outside is gone:", typeof secret === "undefined");

// arguments object vs rest parameters
function oldStyle(name) {
  return Array.from(arguments).length;
}
function newStyle(name, ...rest) {
  return 1 + rest.length;
}
console.log("arguments length:", oldStyle("a", "b", "c"));
console.log("rest length:", newStyle("a", "b", "c"));

// == converts types, === does not
console.log("0 == '0':", 0 == "0", "| 0 === '0':", 0 === "0");
console.log("null == undefined:", null == undefined);

// octal literals and parseInt
console.log("parseInt with radix:", parseInt("08", 10));
console.log("0o12 is:", 0o12, "| 012 was octal in old code");

// new Array(3) gives holes, fill gives values
console.log("holes:", new Array(3), "| filled:", Array(3).fill(0));

// sort with no comparator sorts as text, so 10 beats 9
const nums = [10, 9, 1];
console.log("default sort:", [...nums].sort());
console.log("numeric sort:", [...nums].sort((a, b) => a - b));

// replace: first hit, all hits, or a function
console.log("first only:", "a-b-c".replace("-", "+"));
console.log("all:", "a-b-c".replace(/-/g, "+"));
console.log("with logic:", "abc".replace(/[abc]/g, (ch) => ch.toUpperCase()));

// comma operator runs the left side and keeps the right
let n = (1, 2, 3);
console.log("comma operator value:", n);`,quiz:[{question:"Why were IIFEs used?",options:["To run code on click","To create a private scope before modules","To make code sync","To import modules"],correctIndex:1,explanation:"IIFEs immediately ran and isolated their scope."},{question:"What replaced callback-heavy APIs?",options:["More callbacks","Promises and async/await","setImmediate","Closures"],correctIndex:1,explanation:"Promises and async/await flatten legacy callback flows."}]},{slug:"interview-prep",title:"Interview Questions",description:"The cross-topic questions that come up again and again.",content:`These are the questions that come back in almost every JavaScript interview. There are only about twenty of them. Know the short answer for each, then know one example you could type from memory.

**Asked in almost every interview**
- \`==\` versus \`===\`. Loose equality converts types before comparing. Strict equality compares type and value. Always write \`===\`. Loose equality also pairs 0, '', false, null and undefined off.
- Hoisting versus the temporal dead zone. Both keywords are prepared before any line runs. A var name arrives holding undefined. A let name sits in the dead zone and throws until its own line runs. var fails quietly, let fails loudly.
- Why typeof null is 'object'. The 1995 engine tagged values with a type bit, and null shared that bit with objects. Fixing it would break old pages. Test null with \`=== null\`.
- The four rules for this. A method call gets the object before the dot. A plain call gets undefined in strict mode. A new call gets the new object. An arrow function has no this of its own and inherits the one where it was written.
- map versus filter versus reduce. map changes each item, filter keeps some items, reduce folds the whole list into one value. Reduce is the wrong tool when you only want a new list.
- Shallow versus deep copy. \`{ ...obj }\` copies the top level only, so a change in the copy shows up in the original. \`structuredClone\` gives a real deep copy.

**Closures, objects, and promises**
- Closure versus object. A closure is a function carrying the variables around it, like a backpack. An object is a bag of data you pass around. Use a closure for hidden state, an object when the caller must see it.
- Promise.all versus Promise.allSettled. all rejects the moment one promise fails, so you lose the other results. allSettled waits for everything and reports each outcome.
- A missing await swallows errors. A rejected promise you never await becomes a silent unhandled rejection that try and catch never see. Always await it or return it.
- const does not freeze. const locks the variable, not the contents. A const array can still be pushed to. Use Object.freeze when you need protection.

**Data handling questions**
- Array versus object performance. Reading a key on an object is fast because of a hidden lookup table. Deleting from a Map stays steadier than deleting from a big object. For a plain list of values, use an array.
- for-in versus for-of. for-in walks the keys of an object and includes inherited ones. for-of walks the values of anything iterable. In an array, for-of with an index reads better.
- Spread versus Object.assign. \`{ ...obj, extra: 1 }\` is the modern form and it is also shallow. Object.assign mutates the target you pass it. Spread builds a new object.
- Deep equality of two parsed JSON objects. JSON.parse gives plain objects and arrays, so a recursive compare over own keys works. Check both sides hold the same keys, then recurse.
- The prototype chain. Every object links to another object it inherits from. Walk up with a loop or Object.getPrototypeOf. \`'x' in obj\` finds inherited names, Object.hasOwn its own.

**Language mechanics**
- let versus var in a loop. var shares one variable across every round, so every callback reads the final value. let makes a fresh binding each round. Same code, different numbers.
- Debounce versus throttle. Debounce waits until the input goes quiet. Throttle runs at most once per interval. Debounce suits a search box, throttle suits scroll.
- Event loop ordering. Microtasks such as promise callbacks drain fully before the next macrotask such as a timer. So sync code runs, then every promise, then the timer.

**When you do not know the answer**
Say what you would check and how you would find out. "I am not certain, but I would read the spec and test it in a console." Then actually do it. Interviewers rate honest reasoning above a confident guess, and you leave with a real answer instead of a wrong one.`,codeExample:`// typeof null is a 1995 bug we cannot fix
console.log("typeof null:", typeof null);
console.log("but null === null works:", null === null);

// this binding: method call vs plain call vs arrow
const page = {
  url: "/dashboard",
  getUrl() {
    return this.url;
  },
};
const plain = page.getUrl;
console.log("method call keeps the object:", page.getUrl());
console.log("plain call loses it:", plain());

// map / filter / reduce
const prices = [10, 0, 25, 7];
console.log("map:", prices.map((p) => p * 2));
console.log("filter:", prices.filter((p) => p > 0));
console.log("reduce folds to one value:", prices.reduce((sum, p) => sum + p, 0));

// Shallow copy shares nested objects; deep copy does not
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
shallow.nested.b = 99;
console.log("shallow copy still shares nested:", original.nested.b);
const deep = structuredClone(original);
deep.nested.b = 1;
console.log("deep copy is independent:", original.nested.b);

// const locks the variable, not the contents
const roles = ["admin"];
roles.push("viewer");
console.log("const array grew anyway:", roles);

// for-in walks keys, for-of walks values
for (const key in original) console.log("for-in key:", key);
for (const value of prices) console.log("for-of value:", value);`,quiz:[{question:"What does === require?",options:["Only same value","Same type AND value","Literals only","Numbers only"],correctIndex:1,explanation:"=== is strict equality, checking type and value."},{question:"Why is {...obj} a shallow copy?",options:["It copies only top-level fields","It copies everything deeply","It never works","It copies the reference"],correctIndex:0,explanation:"Spread copies top-level values; nested objects are shared."}]}]}];!function(){let e=new Map(o.map(e=>[e.slug,e])),t=[];for(let o of n){let n=e.get(o.slug);if(!n){t.push(`topic "${o.slug}" is in the curriculum but has no theory file`);continue}let a=n.lessons.map(e=>e.slug),s=o.lessons.map(e=>e.slug);for(let e of s)a.includes(e)||t.push(`${o.slug}/${e}: lesson missing from theory file`);for(let e of a)s.includes(e)||t.push(`${o.slug}/${e}: lesson not in curriculum`)}if(t.length)throw Error(`JavaScript curriculum out of sync:
  - ${t.join("\n  - ")}`)}();let a={"intro/what-is-python":[{question:"Which statement about Python is TRUE?",options:["Python is a compiled language","Python is an interpreted language","Python only runs on Windows","Python was created in 2020"],correctIndex:1,explanation:"Python is an interpreted language - code runs line by line."},{question:"Python is commonly used in which fields?",options:["Only game development","Only operating systems","Data science, web dev, automation, AI","Only mobile apps"],correctIndex:2,explanation:"Python is used in data science, web development, automation, AI/ML, and more."},{question:"Which of these companies uses Python?",options:["Netflix","Instagram","Spotify","All of the above"],correctIndex:3,explanation:"Netflix, Instagram, and Spotify all use Python in their backend systems."}],"intro/getting-started":[{question:"Which command checks the installed Python version?",options:["python --version","python show","version python","python info"],correctIndex:0,explanation:"python --version (or python -V) shows the installed version."},{question:"What is the interactive Python prompt called?",options:["Terminal","REPL","Console","Shell"],correctIndex:1,explanation:"REPL = Read-Eval-Print Loop, the interactive mode."},{question:"Which of these is NOT a way to run Python?",options:["python script.py","Interactive REPL","Online compilers","Double-clicking without Python installed"],correctIndex:3,explanation:"You need Python installed to run .py files (except in online environments)."}],"syntax/basic-syntax":[{question:"What happens if you forget to indent a code block?",options:["The code runs normally","It causes IndentationError","The code crashes silently","Python fixes it automatically"],correctIndex:1,explanation:"Python raises IndentationError when a code block isn't properly indented."},{question:"Are 'MyVar' and 'myvar' the same variable?",options:["Yes","No, Python is case-sensitive","Only in functions","Depends on the OS"],correctIndex:1,explanation:"Python is case-sensitive, so MyVar and myvar are different variables."},{question:"Python statements end with:",options:["Semicolons (;)","Periods (.)","Just a new line","Curly braces { }"],correctIndex:2,explanation:"Python statements end at the newline - no semicolons needed."}],"syntax/variables":[{question:"Which variable name is INVALID in Python?",options:["_temp","var123","my-variable","my_variable"],correctIndex:2,explanation:"Hyphens are not allowed in variable names. Use underscores instead."},{question:"What is the output of: a, b, c = 1, 2, 3; print(b)?",options:["1","2","3","[1, 2, 3]"],correctIndex:1,explanation:"Multiple assignment: a=1, b=2, c=3. So print(b) outputs 2."},{question:"Can you change a variable's type after assignment?",options:["No, types are fixed","Yes, Python is dynamically typed","Only for strings","Only with explicit casting"],correctIndex:1,explanation:"Python is dynamically typed - a variable can change type: x = 5 then x = 'hello'."},{question:"What does: x = 10; x = x + 5; print(x) output?",options:["10","15","x + 5","Error"],correctIndex:1,explanation:"x = 10, then x becomes 10 + 5 = 15."}],"syntax/data-types":[{question:"What is the type of (1, 2, 3)?",options:["list","tuple","set","dict"],correctIndex:1,explanation:"Parentheses () create a tuple, which is immutable."},{question:"Which collection type stores unique items only?",options:["list","tuple","set","dict"],correctIndex:2,explanation:"Sets automatically remove duplicates - each item appears once."},{question:"What does float(3) return?",options:["3","3.0","'3'","Error"],correctIndex:1,explanation:"float(3) converts integer 3 to float 3.0."}],"strings/string-basics":[{question:"Which escape sequence creates a new line?",options:["\\t","\\n","\\r","\\b"],correctIndex:1,explanation:"\\n is the newline escape character."},{question:'What does len("Hello World") return?',options:["10","11","12","5"],correctIndex:1,explanation:'"Hello World" has 11 characters including the space.'},{question:"Which of these creates a multi-line string?",options:["'Hello'",'"Hello"','"""Hello\nWorld"""',"'Hello\\nWorld'"],correctIndex:2,explanation:'Triple quotes """...""" are used for multi-line strings.'}],"strings/string-methods":[{question:"What does 'Hello'.find('l') return?",options:["1","2","3","4"],correctIndex:1,explanation:".find() returns the first index where 'l' appears. 'H'=0, 'e'=1, 'l'=2."},{question:"What does 'Python'.capitalize() return?",options:["python","PYTHON","Python","pYTHON"],correctIndex:2,explanation:".capitalize() makes the first letter uppercase and the rest lowercase."},{question:"What does 'banana'.count('a') return?",options:["2","3","1","0"],correctIndex:1,explanation:"'banana' has three 'a' characters (positions 1, 3, 5)."},{question:"Strings are immutable. What does this mean?",options:["They cannot be created","They can't be changed in place - methods return new strings","They use too much memory","They cannot be printed"],correctIndex:1,explanation:"Immutable means you can't modify an existing string; methods return a new string."}],"strings/string-formatting":[{question:'What does f"{42:04d}" produce?',options:["42","0042","00420","0.42"],correctIndex:1,explanation:":04d pads with zeros to width 4: 0042"},{question:'What does f"{3.14159:.3f}" produce?',options:["3.14","3.141","3.142","3.14159"],correctIndex:2,explanation:".3f rounds to 3 decimal places: 3.142 (rounds up)."},{question:'What does f"{1000000:,}" produce?',options:["1000000","1,000,000","10,00,000","1.0M"],correctIndex:1,explanation:"The comma adds thousands separators: 1,000,000"}],"operators/arithmetic-operators":[{question:"What is the output of: 2 ** 3 ** 2?",options:["64","512","36","32"],correctIndex:1,explanation:"Exponentiation is right-associative: 2 ** (3 ** 2) = 2 ** 9 = 512"},{question:"What is -7 // 2?",options:["-3","-4","-3.5","3"],correctIndex:1,explanation:"Floor division rounds DOWN: -7 // 2 = -4 (not -3.5, not -3)."},{question:"Which operator has highest precedence?",options:["*","**","+","//"],correctIndex:1,explanation:"Exponentation (**) has the highest precedence."},{question:"What is 27 % 5?",options:["5","2","4","1"],correctIndex:1,explanation:"27 = 5*5 + 2, so the remainder is 2."}],"operators/comparison-operators":[{question:"What does 'apple' > 'banana' evaluate to?",options:["True","False","Error","Depends"],correctIndex:1,explanation:"Strings compare lexicographically: 'a' < 'b', so apple < banana → False."},{question:"What does 3 < 5 < 4 evaluate to?",options:["True","False","Error","None"],correctIndex:1,explanation:"Chained: (3 < 5) and (5 < 4) = True and False = False"},{question:"Which operator checks equality?",options:["=","==","===","!="],correctIndex:1,explanation:"== checks equality; = is assignment."}],"operators/logical-operators":[{question:"What is not (True or False)?",options:["True","False","None","Error"],correctIndex:1,explanation:"True or False = True, then not True = False."},{question:"What value does '' or 'Default' evaluate to?",options:["''","'Default'","False","None"],correctIndex:1,explanation:"Empty string is falsy, so 'or' returns 'Default'. This is short-circuit evaluation."},{question:"What is 0 and 'hello'?",options:["0","'hello'","False","None"],correctIndex:0,explanation:"0 is falsy, so 'and' short-circuits and returns 0 without checking the second value."},{question:"In Python, which values are falsy?",options:["0, '', [], None","Only False","0 and '' only","None and False only"],correctIndex:0,explanation:"0, empty strings, empty lists, None, and False are all falsy."}],"control-flow/if-else":[{question:"What is the output of the ternary: x = 7; result = 'even' if x % 2 == 0 else 'odd'?",options:["even","odd","7","Error"],correctIndex:1,explanation:"7 % 2 = 1, so the condition is False and 'odd' is assigned."},{question:"In an if/elif/else, how many blocks can run?",options:["All of them","Only one","At most two","None"],correctIndex:1,explanation:"Only the first matching condition's block runs."},{question:"What happens if no condition is True and there's no else?",options:["Error","Nothing runs","All blocks run","Python auto-adds else"],correctIndex:1,explanation:"Without else, if no condition matches, the program just continues."}],"control-flow/for-loops":[{question:"What does range(0, 10, 3) produce?",options:["0,3,6,9","0,3,6,9,12","3,6,9","0,1,2,...,10"],correctIndex:0,explanation:"Range with step 3: 0, 3, 6, 9 (stops before 10)."},{question:"What is the sum of numbers from 1 to 10?",options:["45","55","60","50"],correctIndex:1,explanation:"1+2+...+10 = 55 (n*(n+1)/2 = 10*11/2)."},{question:"What does for i, item in enumerate(items) provide?",options:["Just items","Just indices","Both index and item","Nothing"],correctIndex:2,explanation:"enumerate() yields (index, item) pairs."}],"control-flow/while-loops":[{question:"What is the most common cause of infinite loops?",options:["Using while True","Forgotten condition update","Short circuits","Too many prints"],correctIndex:1,explanation:"If the loop variable never changes, the condition stays True forever."},{question:"What does break do?",options:["Skips to next iteration","Exits the loop completely","Restarts the loop","Pauses execution"],correctIndex:1,explanation:"break immediately exits the loop."},{question:"Which loop is best when you don't know how many iterations?",options:["for","while","for-else","do-while"],correctIndex:1,explanation:"Use while when the number of iterations depends on a condition."}],"lists/list-basics":[{question:"What is the result of [1, 2, 3] + [4, 5]?",options:["[1, 2, 3, 4, 5]","[1,2,3]","[5,7,8]","Error"],correctIndex:0,explanation:"The + operator concatenates lists."},{question:"What is [1, 2, 3, 4, 5][::2]?",options:["[1, 3, 5]","[2, 4]","[1, 2, 3]","[1,2,3,4,5]"],correctIndex:0,explanation:"::2 means step 2 - take every other element: 1, 3, 5"},{question:"What does my_list = [[] for _ in range(3)] create?",options:["One list of 3 items","3 empty lists","A list with 3 nested empty lists","Error"],correctIndex:2,explanation:"It creates [[], [], []] - a list containing 3 empty lists."},{question:"How do you remove ALL items from a list?",options:["my_list.pop()","my_list.clear()","del my_list[0]","my_list.remove_all()"],correctIndex:1,explanation:".clear() removes all items, leaving an empty list."}],"lists/list-comprehension":[{question:"What does [x for x in range(10) if x % 3 == 0] produce?",options:["[0, 3, 6, 9]","[3, 6, 9]","[0,3,6]","0,1,2,...,10"],correctIndex:0,explanation:"Multiples of 3 in range(10): 0, 3, 6, 9"},{question:"Which is faster: list comprehension or a for loop + append?",options:["For loop is faster","List comprehension is faster","They are exactly the same","Depends on the OS"],correctIndex:1,explanation:"List comprehensions are generally faster than manual for loops."},{question:"What does [n ** 2 for n in [1, 2, 3]] produce?",options:["[1, 4, 9]","[1, 2, 3]","[2, 4, 6]","[1, 4, 9, 16]"],correctIndex:0,explanation:"Each number squared: 1²=1, 2²=4, 3²=9"}],"functions/function-basics":[{question:"What is the output of the following?\ndef f(a, b=2, c=3):\n    return a + b + c\nprint(f(1, c=10))",options:["6","13","11","Error"],correctIndex:1,explanation:"f(1, c=10) → a=1, b=2, c=10 → 1+2+10 = 13"},{question:"What's a docstring?",options:["A comment that starts with #","A string at the top of a function explaining what it does","Documentation automatically generated","A test case"],correctIndex:1,explanation:"A docstring is the first string in a function/class/module, used to document it."},{question:"What does *args do in a function?",options:["Requires arguments","Accepts any number of positional arguments as a tuple","Accepts keyword arguments as a dict","Multiplies arguments"],correctIndex:1,explanation:"*args collects extra positional arguments into a tuple."},{question:"What does **kwargs do?",options:["Accepts any number of keyword arguments as a dict","Requires keyword arguments","Squares keyword args","Same as *args"],correctIndex:0,explanation:"**kwargs collects extra keyword arguments into a dictionary."}],"functions/lambda":[{question:"What does (lambda x: x * 2)(5) return?",options:["5","10","25","Error"],correctIndex:1,explanation:"The lambda doubles its input: 5 * 2 = 10"},{question:"Which is a typical use for lambda?",options:["Large complex functions","Small one-off functions passed to sorted/map/filter","Recursive functions","Class definitions"],correctIndex:1,explanation:"Lambdas shine as short callbacks for sorted(), map(), filter(), etc."},{question:"What is the main limitation of lambda?",options:["Too slow","Only one expression - no statements","Cannot be assigned","No limit"],correctIndex:1,explanation:"Lambdas can only contain a single expression, not statements."}],"dictionaries/dict-basics":[{question:"What happens with d = {'a': 1}; d['b']?",options:["Returns None","Raises KeyError","Returns 0","Creates the key"],correctIndex:1,explanation:"Accessing a missing key raises KeyError. Use .get() to avoid it."},{question:"What does {}.fromkeys(['a','b'], 0) create?",options:["['a','b']","{'a': 0, 'b': 0}","{'a': None, 'b': None}","Error"],correctIndex:1,explanation:"fromkeys creates dict with given keys and a default value."},{question:"What does sorted(d.items()) sort by?",options:["Values","Keys","Length","Nothing - error"],correctIndex:1,explanation:"Sorted by keys by default when sorting items()."},{question:"How do you merge two dictionaries in Python 3.9+?",options:["d1.merge(d2)","d1 | d2","d1 + d2","dict_merge(d1, d2)"],correctIndex:1,explanation:"The | operator merges: d1 | d2. Or use {**d1, **d2}."}],"oop/classes-basics":[{question:"What is an object?",options:["A function","An instance of a class","A variable","A module"],correctIndex:1,explanation:"An object is an instance created from a class blueprint."},{question:"What is the first parameter of instance methods?",options:["cls","self","this","me"],correctIndex:1,explanation:"self refers to the instance itself in instance methods."},{question:"What does __str__ method do?",options:["Creates a string","Defines the string representation used by print() and str()","Converts the object","Deletes the object"],correctIndex:1,explanation:"__str__ defines a readable string representation for print() and str()."},{question:"What is a class attribute?",options:["An attribute per instance","An attribute shared by all instances of a class","A private attribute","A method's variable"],correctIndex:1,explanation:"Class attributes are defined at class level and shared by all instances."}],"oop/inheritance":[{question:"What is the purpose of inheritance?",options:["To delete classes","To reuse and extend code from a parent class","To make code slower","To import modules"],correctIndex:1,explanation:"Inheritance lets a child class reuse and extend parent class code."},{question:"Can a child class override a parent method?",options:["Yes, by redefining it","No, never","Only private ones","With super() only"],correctIndex:0,explanation:"Redefining a method in the child overrides the parent's version."},{question:"What does isinstance(dog, Animal) check?",options:["If dog is exactly Animal","If dog is an instance of Animal or its subclasses","If dog can be converted","If Animal is a class"],correctIndex:1,explanation:"isinstance returns True for the class or any of its subclasses."},{question:"Which allows a class to inherit from multiple classes?",options:["Single inheritance","Multiple inheritance","Method chaining","Composition"],correctIndex:1,explanation:"class Child(Parent1, Parent2) is multiple inheritance."}],"error-handling/try-except":[{question:"What print does this produce?\ntry:\n    print('A')\n    x = 10/0\nexcept:\n    print('B')\nelse:\n    print('C')\nfinally:\n    print('D')",options:["A C D","A B C D","A B D","A B"],correctIndex:2,explanation:"A prints, exception → B prints, else is skipped, finally always runs → D"},{question:"Which exception is raised for a missing dictionary key?",options:["IndexError","KeyError","TypeError","ValueError"],correctIndex:1,explanation:"Accessing a missing dict key with d[key] raises KeyError."},{question:"What is the purpose of raising an exception?",options:["To pause the program forever","To signal an error condition to be handled","To print an error","To delete a variable"],correctIndex:1,explanation:"Raising signals an error that must be handled by an except block."},{question:"What does 'except Exception as e' do?",options:["Catches only specific errors","Catches all exceptions and stores the error object in e","Ignores the error","Logs the error"],correctIndex:1,explanation:"Exception is the base class for most errors; 'as e' captures the error object."}],"file-handling/file-operations":[{question:"What mode should you use to append to a file?",options:['"r"','"w"','"a"','"x"'],correctIndex:2,explanation:'"a" (append) adds content to the end without erasing existing data.'},{question:"What does file.read() return?",options:["A list of lines","The entire file as a string","One line","Bytes"],correctIndex:1,explanation:".read() returns the whole file content as a single string."},{question:"What happens if you open a file with 'w' that doesn't exist?",options:["Error: file not found","The file is created","Nothing happens","Python creates it in another folder"],correctIndex:1,explanation:"Opening with 'w' creates the file if it doesn't exist."},{question:"Which is the safest way to read a file?",options:["open then forget to close it","Using the with statement","Using read() 10 times","Opening in 'w' mode"],correctIndex:1,explanation:"with open(...) ensures the file closes automatically even if errors occur."}],"modules/importing-modules":[{question:"Difference: from math import sqrt vs import math?",options:["They are identical","First allows sqrt() directly; second requires math.sqrt()","First is slower","Second imports everything"],correctIndex:1,explanation:"from-import brings the name into scope; import module requires module.name."},{question:"What does import random do?",options:["Makes the code random","Imports the random module for generating random values","Randomly imports modules","Nothing"],correctIndex:1,explanation:"The random module provides functions like randint(), choice(), etc."},{question:"What is a Python package?",options:["Just one file","A directory of modules with an __init__.py","An executable program","A virtual env"],correctIndex:1,explanation:"A package is a folder of modules (typically with __init__.py)."},{question:"Which module does NOT exist in Python's standard library?",options:["json","csv","requests","statistics"],correctIndex:2,explanation:"requests is a third-party library, not part of the standard library."}]},s={"intro/what-is-javascript":[{question:"In which of these environments does JavaScript run natively without installation?",options:["Every web browser","Only Node.js servers","Only the VS Code editor","Only mobile devices"],correctIndex:0,explanation:"Every modern web browser ships with a JavaScript engine, so JS runs there with no installation."},{question:"What is the official standard that defines how JavaScript behaves?",options:["ECMAScript","HTML5","WebAssembly","JSON"],correctIndex:0,explanation:"JavaScript is standardized as ECMAScript (ES), and modern features come from ES6 (ES2015) and later."}],"intro/why-javascript-for-automation":[{question:"Which of these automation tools is built on top of JavaScript/Node.js?",options:["Playwright","Pytest","JUnit","Robot Framework"],correctIndex:0,explanation:"Playwright, Cypress, and WebDriverIO are the leading JavaScript-based automation frameworks."},{question:"Why does an automation tester benefit from knowing JavaScript even when their tests use a GUI recorder?",options:["To write, debug, and extend test scripts the recorder cannot produce","JavaScript is required to install a browser","Because every CI server only runs JS","To replace the operating system"],correctIndex:0,explanation:"Recorded scripts cannot handle dynamic waits, API logic, or custom assertions, so JS knowledge is essential for maintainable automation."}],"basics/variables":[{question:"Which keyword declares a block-scoped variable that cannot be reassigned?",options:["var","let","const","static"],correctIndex:2,explanation:"const declares a block-scoped variable that cannot be reassigned after its initial assignment."},{question:"What is the main problem with using var instead of let in modern JavaScript?",options:["var is not function-scoped","var is block-scoped instead of hoisted","var is hoisted and ignores block scope, causing bugs","var cannot hold numbers"],correctIndex:2,explanation:"var is hoisted to the function scope, ignores block scope, and allows redeclaration, which leads to subtle bugs."}],"basics/data-types":[{question:"What is the typeof result for null in JavaScript?",options:["'null'","'object'","'undefined'","'boolean'"],correctIndex:1,explanation:"typeof null returns 'object', a long-standing JavaScript quirk inherited from the language's early days."},{question:"Which of these is a primitive data type in JavaScript?",options:["Array","Map","Symbol","Date"],correctIndex:2,explanation:"Symbol is one of the seven primitives (string, number, boolean, null, undefined, bigint, symbol); the others are objects."}],"basics/operators":[{question:"What does the === operator check compared to ==?",options:["Only values","Identity of functions","Both value and type","Only memory references"],correctIndex:2,explanation:"=== (strict equality) compares both value and type, while == performs type coercion before comparing."},{question:"What is the result of 5 + '3' in JavaScript?",options:["8","'53'","2","NaN"],correctIndex:1,explanation:"The + operator concatenates when either operand is a string, so 5 + '3' produces the string '53'."}],"basics/type-conversions":[{question:"What does Boolean('false') evaluate to?",options:["false","true","null","undefined"],correctIndex:1,explanation:"Any non-empty string is truthy, so Boolean('false') is true; only '', 0, NaN, null, undefined, and false coerce to false."},{question:"Which expression converts the string '42' into the number 42?",options:["parseInt('42')","Number('42')","parseFloat('42')","All of these"],correctIndex:3,explanation:"Number(), parseInt(), and parseFloat() all return the number 42 when given the string '42'."}],"control-flow/if-else":[{question:"What happens when new Boolean(false) is used inside an if condition?",options:["if is skipped","An error is thrown","if runs because the Boolean object is truthy","NaN is returned"],correctIndex:2,explanation:"A Boolean object (new Boolean(false)) is a truthy object, so the if branch executes, unlike the primitive false."},{question:"Which statement correctly logs 'big' only when count is greater than 10?",options:["if (count > 10) console.log('big')","if (count => 10) console.log('big')","if count > 10 console.log('big')","if (count >= 10) console.log('big')"],correctIndex:0,explanation:"The correct operator is the strict greater-than (>) and parentheses wrap the condition; => is only used in arrow functions."}],"control-flow/loops-iteration":[{question:"What does for (const i = 0; i < 3; i++) do?",options:["Prints 0, 1, 2","Runs three times","Throws an error because i is const","Loops forever"],correctIndex:2,explanation:"const cannot be reassigned, so i++ throws an error; use let i for counters in a for loop."},{question:"Which loop runs a body at least once regardless of the condition?",options:["for","for...of","do...while","while"],correctIndex:2,explanation:"do...while checks the condition after the body runs, guaranteeing at least one iteration."}],"strings/string-basics":[{question:"What is the length of the string 'hello' as reported by .length?",options:["4","5","6","undefined"],correctIndex:1,explanation:"String length counts UTF-16 code units, and 'hello' has exactly five characters, so .length is 5."},{question:"How can you access the first character of the string 'test'?",options:["'test'[0]","'test'[-1]","'test'.first()","'test'.charCodeAt(0)"],correctIndex:0,explanation:"Strings are indexable with bracket notation, and index 0 is the first character 't'."}],"strings/string-methods":[{question:"What does 'JavaScript'.toUpperCase() return?",options:["javascript","JAVASCRIPT","JavaScript","Js"],correctIndex:1,explanation:"toUpperCase() returns a new string with every character converted to uppercase: 'JAVASCRIPT'."},{question:"Which method finds the index of the first occurrence of 'a' in 'banana'?",options:["lastIndexOf('a')","indexOf('a')","find('a')","searchAll('a')"],correctIndex:1,explanation:"indexOf('a') returns 1, the position of the first 'a' in 'banana'; lastIndexOf returns the last one."}],"strings/template-literals":[{question:"What delimiter wraps a template literal string?",options:["Backticks","Single quotes","Double quotes","Angle brackets"],correctIndex:0,explanation:"A template literal is wrapped in backticks, which enables interpolation and multiline text."},{question:"What is a real benefit of template literals for building test selectors or messages?",options:["You can embed variable values directly instead of concatenating string parts","They make strings immutable forever","They run only on the server","They cannot contain punctuation"],correctIndex:0,explanation:"Template literals let you embed variable values directly inside the string, making composed selectors and messages far more readable than concatenation."}],"functions/function-basics":[{question:"What is returned when a function without a return statement finishes running?",options:["null","0","undefined","false"],correctIndex:2,explanation:"A function that lacks an explicit return implicitly returns undefined."},{question:"What does a function declaration without the function keyword refer to?",options:["A method","A constructor","An arrow function or function expression","A generator"],correctIndex:2,explanation:"Functions created with arrow syntax or assigned to variables are expressions, not declarations."}],"functions/arrow-functions":[{question:"What is a key difference between arrow functions and traditional function expressions?",options:["Arrows keep the surrounding this instead of binding their own","Arrows are always slower","Arrows cannot take parameters","Arrows cannot be stored in variables"],correctIndex:0,explanation:"Arrow functions do not have their own this; they lexically inherit this from the enclosing scope."},{question:"Which arrow function correctly doubles its argument?",options:["x => x * 2","x -> x * 2","fn x { return x * 2 }","double(x) => x * 2"],correctIndex:0,explanation:"The arrow syntax is (param) => expression, so x => x * 2 is valid and returns x * 2 implicitly."}],"functions/lexical-scope-closures":[{question:"What is a closure in JavaScript?",options:["A function that retains access to its outer scope after the outer function returns","A class that cannot be extended","A loop that never ends","A global variable"],correctIndex:0,explanation:"A closure captures variables from the lexical scope where it was defined, even after the outer function has finished."},{question:"Given function outer() { let x = 1; return () => x; }, what does outer()() return?",options:["undefined","1","x","NaN"],correctIndex:1,explanation:"The inner arrow function closes over x and returns its value 1 when called."}],"functions/callbacks":[{question:"What is a callback function?",options:["A function passed as an argument to be called later","A function with no name","A function that returns a promise","A built-in DOM method"],correctIndex:0,explanation:"A callback is a function passed into another function and invoked later, often after async work or per array element."},{question:"Which array method takes a callback that runs for each element and returns a new array?",options:["push","map","join","pop"],correctIndex:1,explanation:"map calls the callback for every element and builds a new array from the returned values, leaving the original unchanged."}],"arrays/array-basics":[{question:"What is the result of [1, 2, 3].length?",options:["2","3","4","undefined"],correctIndex:1,explanation:"The length property reports the number of elements, which is 3 for [1, 2, 3]."},{question:"Which method adds elements to the end of an array AND changes the original array?",options:["concat","push","map","slice"],correctIndex:1,explanation:"push mutates the array in place by appending elements; concat and map return new arrays."}],"arrays/advanced-arrays":[{question:"What does [1, 2, 3, 4].filter(n => n % 2 === 0) return?",options:["[2, 4]","[1, 3]","[1, 2, 3, 4]","[2]"],correctIndex:0,explanation:"filter keeps only elements for which the callback returns true, so the even numbers 2 and 4 remain."},{question:"What is the common array-copy gotcha when copying an array with slice?",options:["It is a shallow copy, so nested objects are still shared","It deletes the original","It ignores indices","It only copies strings"],correctIndex:0,explanation:"slice() (and spread) make shallow copies; nested objects inside are still references to the same objects."}],"arrays/reduce":[{question:"What does [1, 2, 3, 4].reduce((acc, n) => acc + n, 0) return?",options:["10","24","4","0"],correctIndex:0,explanation:"reduce sums each element starting from the initial accumulator 0: 1+2+3+4 = 10."},{question:"What happens if you call reduce() without an initial value on an empty array?",options:["It returns undefined","It returns 0","It returns null","It throws a TypeError"],correctIndex:3,explanation:"With no initial value, reduce uses the first element as the accumulator, which fails on an empty array and throws a TypeError."}],"objects/object-basics":[{question:"How do you access the age property of const person = { age: 30 }?",options:["person.age","person->age","person::age","person.age()"],correctIndex:0,explanation:"Dot notation accesses object properties directly, so person.age returns 30."},{question:"What does Object.keys({ a: 1, b: 2 }) return?",options:["[1, 2]","['a', 'b']","['1', '2']","undefined"],correctIndex:1,explanation:"Object.keys returns an array of the object's own enumerable property names, here ['a', 'b']."}],"objects/destructuring":[{question:"What is the value of name after const { name } = { name: 'Ada', age: 36 }?",options:["'Ada'","36","undefined","'name'"],correctIndex:0,explanation:"Object destructuring pulls the name property out of the object into its own variable, so name is 'Ada'."},{question:"What is the result of const [first, second] = [7, 8, 9]?",options:["first is 7 and second is 8","first is 8 and second is 9","first is 7 and second is 9","An error"],correctIndex:0,explanation:"Array destructuring assigns elements by position, so first is 7 and second is 8; 9 is ignored."}],"objects/optional-chaining-nullish":[{question:"What does user?.profile?.name return if user is null?",options:["null","undefined","TypeError","An empty string"],correctIndex:1,explanation:"Optional chaining short-circuits safely and returns undefined when any link in the chain is null or undefined."},{question:"What does null ?? 'fallback' evaluate to?",options:["null","undefined","'fallback'","false"],correctIndex:2,explanation:"The nullish coalescing operator ?? returns the right side only when the left side is null or undefined, so it yields 'fallback'."}],"objects/map-set":[{question:"How do you add a key-value pair to a Map?",options:["map.add(key, value)","map.set(key, value)","map.push(key, value)","map.insert(key, value)"],correctIndex:1,explanation:"Map uses set(key, value) to store entries; add is used by Set and push by arrays."},{question:"What is unique about a Set compared to an array?",options:["It automatically removes duplicate values","It sorts itself","It can hold only numbers","It cannot store strings"],correctIndex:0,explanation:"A Set enforces uniqueness, so adding an already-present value is a no-op."}],"objects/arrays-of-objects":[{question:"Which expression returns the first user with the role 'admin' from an array of user objects?",options:["users.find(u => u.role === 'admin')","users.filter(u => u.role === 'admin')[undefined]","users.first('admin')","users.search('admin')"],correctIndex:0,explanation:"Array.find() returns the first element for which the callback returns true, stopping early."},{question:"What does users.map(u => u.name) with users = [{ name: 'Ada' }, { name: 'Lin' }] return?",options:["['Ada', 'Lin']","[{ name: 'Ada' }, { name: 'Lin' }]","2","['name', 'name']"],correctIndex:0,explanation:"map extracts the name from each object, building a new array of strings: ['Ada', 'Lin']."}],"async/async-basics":[{question:"What is the return value of an async function that has no explicit return?",options:["undefined","A Promise resolving to undefined","null","An Error object"],correctIndex:1,explanation:"Every async function returns a Promise; with no return, it resolves to undefined."},{question:"Why are async operations important in automation testing?",options:["Browsers and network requests finish at unpredictable times","They make tests run synchronously","They replace assertions","They disable timeouts"],correctIndex:0,explanation:"Page loads, network calls, and UI updates are asynchronous, so testers must await them instead of assuming instant completion."}],"async/promises":[{question:"What states can a Promise be in?",options:["pending, fulfilled, rejected","start, running, done","open, closed, waiting","queued, active, stopped"],correctIndex:0,explanation:"A Promise transitions from pending to either fulfilled (resolved) or rejected, and those are its three states."},{question:"Which method do you use to attach a handler for a rejected promise?",options:[".then() on error",".catch()",".finally()",".resolve()"],correctIndex:1,explanation:"catch() handles rejections; then() handles fulfilled values and finally() runs cleanup regardless of outcome."}],"async/async-await":[{question:"What keyword must prefix an await expression?",options:["Function inside an async function","try","return","yield"],correctIndex:0,explanation:"await can only be used inside a function declared with async (or at the top level of modules)."},{question:"What does an await expression resolve to when the promise rejects?",options:["null","The rejection reason, thrown as an error","undefined","false"],correctIndex:1,explanation:"A rejected promise makes await throw the rejection reason, which you catch with try/catch."}],"async/fetch-apis":[{question:"What does the fetch() function return?",options:["A Promise of a Response","A string of HTML","A parsed JSON object","An XHR object"],correctIndex:0,explanation:"fetch() returns a Promise that resolves to a Response object when the server replies."},{question:"Why do you need res.json() after a fetch call returning JSON?",options:["To parse the response body into a JavaScript object","To change the request method","To add headers","To close the connection"],correctIndex:0,explanation:"res.json() reads the stream and parses the body; fetch does not auto-parse the payload for you."}],"async/event-loop":[{question:"In what order do these log: console.log('a'); setTimeout(() => console.log('b'), 0); console.log('c');?",options:["a, b, c","a, c, b","b, a, c","c, a, b"],correctIndex:1,explanation:"Synchronous code ('a', 'c') runs first; the setTimeout callback is deferred to the task queue, logging 'b' last even with an 0ms delay."},{question:"What does the event loop do, in simple terms?",options:["It handles Async events by scheduling callbacks after the current stack empties","It compiles JS to machine code","It garbage collects every second","It runs only in Node.js, not browsers"],correctIndex:0,explanation:"The event loop moves callbacks from the task queue back onto the call stack once it is empty, enabling non-blocking async code."}],"classes/class-basics":[{question:"Which method on a class runs automatically when a new instance is created?",options:["init()","start()","constructor()","new()"],correctIndex:2,explanation:"The constructor() method initializes each new instance created with the new keyword."},{question:"How do you create a new instance of class User?",options:["User.new()","new User()","User()","create User()"],correctIndex:1,explanation:"The new keyword invokes the class constructor and returns the instance: new User()."}],"classes/class-inheritance":[{question:"Which keyword marks a class as inheriting from another class?",options:["extends","inherits","super","implements"],correctIndex:0,explanation:"The extends keyword establishes inheritance, e.g. class Admin extends User."},{question:"Inside a subclass constructor, what must be called before using this?",options:["this.init()","super()","parent()","super.constructor()"],correctIndex:1,explanation:"super() invokes the parent constructor and must run before any this access in a subclass constructor."}],"classes/prototypal-inheritance":[{question:"How does instanceof verify that a class relationship is real?",options:["It checks the prototype chain rather than the constructor name","It compares string type names","It shallow-compares properties","It runs the parent constructor"],correctIndex:0,explanation:"instanceof walks the prototype chain in order to decide whether an object inherits from the given prototype."},{question:"What is the prototype chain in JavaScript?",options:["Objects inherit properties via a linked chain ending at Object.prototype, ultimately null","A stack of function calls","A queue of events","A list of global variables"],correctIndex:0,explanation:"Every object has an internal prototype link; property lookups walk the chain until found or until reaching null after Object.prototype."}],"classes/json":[{question:"What does JSON.stringify({ a: 1 }) return?",options:["'{a: 1}'","'{\"a\":1}'","{ a: 1 }","A Promise"],correctIndex:1,explanation:"JSON.stringify produces a JSON string with double-quoted keys, so the output is '{\"a\":1}'."},{question:"Why does JSON.stringify({ name: 'Ada', fn: () => {} }) omit the fn property?",options:["Functions are intentionally omitted from JSON output","The string is too long","Arrow functions throw an error","Functions are converted to null"],correctIndex:0,explanation:"JSON has no function type, so JSON.stringify silently drops function-valued properties."}],"dom/dom-basics":[{question:"What does the abbreviation DOM stand for?",options:["Document Object Model","Data Object Module","Document Oriented Media","Dynamic Object Mapping"],correctIndex:0,explanation:"The DOM is the browser's tree-structured model of the document that JavaScript can read and modify."},{question:"Which statement is true about the DOM?",options:["It represents the page as a tree of nodes that JS can traverse and modify","It is a separate binary format","It only lives on the server","It cannot be queried"],correctIndex:0,explanation:"The DOM is an in-memory tree of element and text nodes, updated live by JavaScript."}],"dom/dom-selection":[{question:"Which method returns the FIRST element matching the CSS selector '#login'?",options:["querySelector('#login')","getElementByClass('login')","querySelectorAll('#login')[0]","document.login()"],correctIndex:0,explanation:"querySelector returns the first match for any CSS selector; querySelectorAll returns all matches as a NodeList."},{question:"What does document.querySelectorAll('button') return?",options:["A NodeList of button elements","The first button","An HTML string","undefined"],correctIndex:0,explanation:"querySelectorAll returns a static NodeList containing every element that matches the selector."}],"dom/dom-manipulation":[{question:"Which property changes the visible text content of an element?",options:["element.textContent","element.html","element.inner()","element.write"],correctIndex:0,explanation:"Setting element.textContent replaces the element's rendered text with the new value."},{question:"Which method attaches a new child element to the end of a node?",options:["node.appendChild(child)","node.insertChild(child)","node.pushChild(child)","node.add(child)"],correctIndex:0,explanation:"appendChild appends the child to the end of the node's children list."}],"dom/events":[{question:"Which method registers an event handler for a click?",options:["element.addEventListener('click', handler)","element.onClick = handler","element.click(handler)","element.handle('click', handler)"],correctIndex:0,explanation:"addEventListener('click', handler) registers a handler, and it supports multiple handlers plus removal via removeEventListener."},{question:"What does event.target refer to inside an event handler?",options:["The element that actually triggered the event","The element registered with addEventListener","The parent node","The window object"],correctIndex:0,explanation:"event.target is the element where the event occurred, which may differ from the registered element due to bubbling."}],"dom/forms":[{question:'How do you reliably read the current value of an <input type="text">?',options:["inputEl.value","inputEl.innerHTML","inputEl.text","inputEl.dataset.value"],correctIndex:0,explanation:"the input's current text lives in its value property, which reflects what the user typed."},{question:"Why should you call formElement.preventDefault() in a submit handler?",options:["To stop the page from reloading and losing your handler's state","To reset the form","To make the form validate twice","To close the browser tab"],correctIndex:0,explanation:"preventDefault() cancels the browser's default behavior of reloading the page on form submission."}],"dom/window-object":[{question:"Which global object contains methods like setTimeout, fetch, and alert in a browser?",options:["window","document","navigator","screen"],correctIndex:0,explanation:"window is the global object in browsers; document is the DOM entry point under it."},{question:"What does window.setTimeout(fn, 1000) schedule?",options:["fn to run after roughly 1000 milliseconds","fn to run exactly 1000 times","fn to cancel the event loop","fn to run at once"],correctIndex:0,explanation:"setTimeout queues fn to run after the delay (at least), not exactly; timing depends on the event loop."}],"modules/modules":[{question:"Which keyword exports a single value from a module?",options:["export default","import","module.exports","require"],correctIndex:0,explanation:"export default marks a module's primary value, imported with import x from '...'."},{question:"In an ES module, how do you import the named export add?",options:["import { add } from './math.js'","import add from './math.js'","import * as add from './math.js'","const add = require('./math.js')"],correctIndex:0,explanation:"Named exports are imported with braces: import { add } from ...; default imports omit the braces."}],"modules/dynamic-imports":[{question:"What is the main benefit of import('./module.js') used inside a function?",options:["The module loads only when that code runs, reducing initial bundle size","It runs the module twice","It blocks the event loop","It disables caching"],correctIndex:0,explanation:"Dynamic import returns a Promise and defers loading the module until execution time, enabling code splitting."},{question:"What does the dynamic import expression resolve to?",options:["The module namespace object","The default export directly","A string","A DOM element"],correctIndex:0,explanation:"const mod = await import('./x.js') gives the module namespace; default exports are at mod.default."}],"modules/package-managers":[{question:"Which command installs a package and saves it as a dependency in package.json?",options:["npm install <pkg>","npm unlink <pkg>","npm compile <pkg>","npm host <pkg>"],correctIndex:0,explanation:"npm install <pkg> (or npm i) downloads the package and, in modern npm, records it in dependencies."},{question:"What is the purpose of the package-lock.json file?",options:["It pins exact dependency versions for reproducible installs","It stores test results","It lists every author","It caches browser downloads"],correctIndex:0,explanation:"package-lock.json records the exact resolved versions of every dependency so installs are deterministic."}],"modules/module-bundlers":[{question:"Why do browsers and Node often need a bundler like Vite or Webpack?",options:["Bundlers combine many modules, resolve dependencies, and optimize output for production","Bundlers replace the browser","Bundlers are required to run console.log","Bundlers translate CSS to HTML"],correctIndex:0,explanation:"Bundlers resolve the import graph and emit a small number of optimized files, handling features the runtime lacks."},{question:"What does tree-shaking refer to in a bundler context?",options:["Removing unused exports so the bundle is smaller","Deleting node_modules","Pruning old git branches","Renaming all variables to one letter"],correctIndex:0,explanation:"Tree-shaking statically detects and drops code that is never imported, shrinking the final bundle."}],"modules/ecmascript":[{question:"Which major standard release introduced let, const, arrow functions, and classes?",options:["ES6 (ES2015)","ES3","ES5","ESNext only"],correctIndex:0,explanation:"ES6/ES2015 was the landmark release that added let, const, arrows, classes, promises, and template literals."},{question:"How do you check which ECMAScript features a browser supports?",options:["Feature detection with a tool like caniuse, or runtime checks before using them","Reading the browser version only","Counting installed plugins","By running fetch"],correctIndex:0,explanation:"Dedicated tools and feature detection tell you whether a specific syntax/API is supported before you ship it."}],"advanced/regex-intro":[{question:"What does the regular expression /^\\d{3}$/ match?",options:["Exactly three digits","Any three characters","A word with three letters","Empty strings"],correctIndex:0,explanation:"^ and $ anchor the match, \\d means digit, and {3} requires exactly three, so it matches strings like '123'."},{question:"What does /world/i.test('Hello WORLD') return?",options:["true","false","null","world"],correctIndex:0,explanation:"The i flag makes the match case-insensitive, so 'WORLD' satisfies /world/, and test returns true."}],"advanced/generators":[{question:"Which syntax defines a generator function?",options:["function* gen()","async function gen()","class gen()","const gen = => *"],correctIndex:0,explanation:"The asterisk after function marks a generator: function* gen() returns an iterator that pauses on yield."},{question:"How do you pause a generator and hand back a value?",options:["yield value","return pause","await value","stop value"],correctIndex:0,explanation:"yield suspends execution and returns a value; the next .next() call resumes from the same spot."}],"advanced/legacy-var":[{question:"What is a classic bug caused by var inside a for loop?",options:["The loop variable leaks and shares one final value in closures","var cannot be used in loops","The loop never starts","var resets every iteration"],correctIndex:0,explanation:"var is function-scoped and reused across iterations, so async callbacks in the loop all see the final value; let fixes this."},{question:"Which statement about var hoisting is correct?",options:["var declarations are hoisted to the top of their function scope but initialized to undefined","var is destroyed before the script runs","var cannot be used before declaration","var has block scope"],correctIndex:0,explanation:"var declarations are hoisted and initialized to undefined, whereas let/const are hoisted but stay in the temporal dead zone."}],"advanced/legacy-topics":[{question:"What is the legacy XMLHttpRequest object primarily used for?",options:["Making HTTP requests before fetch became standard","Parsing HTML","Storing cookies","Compiling templates"],correctIndex:0,explanation:"XMLHttpRequest was the older API for AJAX requests; modern code prefers fetch()."},{question:"Why might a legacy test script use callback-style setTimeout chains?",options:["Because callbacks were the only way to sequence async work before promises existed","Because callbacks are faster than await","Because setTimeout is synchronous","Because callbacks are required by the DOM"],correctIndex:0,explanation:"Old test code sequenced waits with nested callbacks; promise chains and async/await are the modern replacements."}],"advanced/interview-prep":[{question:"What is the difference between let and const in one sentence?",options:["let allows reassignment while const does not; both are block-scoped","let is global while const is local","const allows reassignment but let does not","There is no difference"],correctIndex:0,explanation:"Both are block-scoped ES6 declarations; the difference is that const cannot be reassigned after declaration."},{question:"How would you explain the difference between == and === in an interview?",options:["== compares after type coercion; === compares value and type without coercion","=== is slower than == in all browsers","== is the same as equals() in Java","=== only works on objects"],correctIndex:0,explanation:"== coerces operands to a common type first, while === requires the same value and the same type, avoiding loose pitfalls."}]},r=[{title:"Hello World",description:"Write a program that prints 'Hello, World!' to the screen.",topic:"Introduction",level:"Easy",starter:`# Write your code here
print("Hello, World!")`,solution:'print("Hello, World!")'},{title:"Personal Introduction",description:"Create variables for your name, age, and favorite hobby. Print a sentence using f-strings.",topic:"Introduction",level:"Easy",starter:`# Create variables
name = "Your Name"
age = 20
hobby = "coding"

# Print a sentence using f-strings
print(f"...")`,solution:`name = "Your Name"
age = 20
hobby = "coding"
print(f"Hi, I'm {name}. I'm {age} years old and I love {hobby}!")`},{title:"Basic Calculator",description:"Write a program that adds, subtracts, multiplies, and divides two numbers.",topic:"Introduction",level:"Easy",starter:`# Basic calculator
a = 10
b = 4

print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")`,solution:`a = 10
b = 4
print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")`},{title:"Variables & Types",description:"Create variables of each type (int, float, string, bool) and print them with their types.",topic:"Syntax & Variables",level:"Easy",starter:`# Create variables of each type
my_int = 42
my_float = 3.14
my_string = "Hello"
my_bool = True

# Print each with its type
print(f"{my_int} -> {type(my_int)}")
print(f"{my_float} -> {type(my_float)}")
print(f"{my_string} -> {type(my_string)}")
print(f"{my_bool} -> {type(my_bool)}")`,solution:`my_int = 42
my_float = 3.14
my_string = "Hello"
my_bool = True
print(f"{my_int} -> {type(my_int)}")
print(f"{my_float} -> {type(my_float)}")
print(f"{my_string} -> {type(my_string)}")
print(f"{my_bool} -> {type(my_bool)}")`},{title:"Swap Two Variables",description:"Swap the values of two variables without using a third variable (Python trick!).",topic:"Syntax & Variables",level:"Medium",starter:`# Swap the values
a = "Python"
b = "Programming"

print(f"Before: a={a}, b={b}")

# TODO: Swap the values here



print(f"After: a={a}, b={b}")`,solution:`a, b = "Python", "Programming"
print(f"Before: a={a}, b={b}")
a, b = b, a
print(f"After: a={a}, b={b}")`},{title:"Type Conversion Challenge",description:"Convert strings to numbers, calculate, and convert back.",topic:"Syntax & Variables",level:"Medium",starter:`# Convert strings to numbers and calculate
num1 = "25"
num2 = "17.5"

# TODO: Convert and add them
# TODO: Print the result with a precision of 2 decimals

# TODO: Convert result back to string and print its type`,solution:`num1 = "25"
num2 = "17.5"
result = int(num1) + float(num2)
print(f"Sum: {result:.2f}")
result_str = str(result)
print(f"Converted back to string: {result_str} ({type(result_str).__name__})")`},{title:"String Reverser",description:"Reverse a string, count vowels, and check if it's a palindrome.",topic:"Strings",level:"Medium",starter:`def reverse_string(s):
    return s[::-1]

def count_vowels(s):
    return sum(1 for c in s.lower() if c in "aeiou")

def is_palindrome(s):
    clean = s.lower().replace(" ", "")
    return clean == clean[::-1]

# Test
text = "racecar"
print(f"Original: {text}")
print(f"Reversed: {reverse_string(text)}")
print(f"Vowels: {count_vowels(text)}")
print(f"Palindrome: {is_palindrome(text)}")`,solution:`def reverse_string(s): return s[::-1]
def count_vowels(s): return sum(1 for c in s.lower() if c in "aeiou")
def is_palindrome(s):
    clean = s.lower().replace(" ", "")
    return clean == clean[::-1]
text = "racecar"
print(f"Original: {text}")
print(f"Reversed: {reverse_string(text)}")
print(f"Vowels: {count_vowels(text)}")
print(f"Palindrome: {is_palindrome(text)}")`},{title:"String Cleaner",description:"Clean up a messy string: strip extra spaces, fix case, and remove digits.",topic:"Strings",level:"Medium",starter:`# Clean up messy strings
messy = "  Hello123World456  "
print(f"Original: '{messy}'")

# TODO: Remove all digits
# TODO: Strip whitespace
# TODO: Convert to proper case (each word capitalized)
# TODO: Print each cleaned result`,solution:`messy = "  Hello123World456  "
import re
cleaned_digits = re.sub(r'\\d+', '', messy)
cleaned = cleaned_digits.strip().title()
print(f"Cleaned: '{cleaned}'")`},{title:"Vowel Counter",description:"Count vowels, consonants, and spaces in a sentence.",topic:"Strings",level:"Medium",starter:`sentence = "The quick brown fox jumps over the lazy dog"

# TODO: Count vowels (a, e, i, o, u)
# TODO: Count consonants
# TODO: Count spaces
# TODO: Print the counts`,solution:`sentence = "The quick brown fox jumps over the lazy dog"
vowels = sum(1 for c in sentence.lower() if c in "aeiou")
consonants = sum(1 for c in sentence.lower() if c.isalpha() and c not in "aeiou")
spaces = sentence.count(" ")
print(f"Vowels: {vowels}")
print(f"Consonants: {consonants}")
print(f"Spaces: {spaces}")
print(f"Total chars: {len(sentence)}")`},{title:"Time Converter",description:"Convert total seconds into hours, minutes, and seconds.",topic:"Operators",level:"Easy",starter:`total_seconds = 3661

# Calculate hours, minutes, seconds
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60

print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`,solution:`total_seconds = 3661
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`},{title:"FizzBuzz",description:"Print numbers 1-100, but multiples of 3 say 'Fizz', multiples of 5 say 'Buzz', multiples of both say 'FizzBuzz'.",topic:"Operators",level:"Medium",starter:`for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
print()`,solution:`for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
print()`},{title:"Prime Number Checker",description:"Write a function that determines whether a number is prime.",topic:"Operators",level:"Hard",starter:`def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Test
for num in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]:
    print(f"{num} is prime: {is_prime(num)}")`,solution:`def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True
for num in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]:
    print(f"{num} is prime: {is_prime(num)}")`},{title:"Grade Calculator",description:"Convert a numeric score into a letter grade (A-F) with a comment.",topic:"Control Flow",level:"Easy",starter:`score = 85

# TODO: Assign grade based on score
# A: 90+, B: 80+, C: 70+, D: 60+, F: below 60
# Also add a comment for each grade

print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Comment: {comment}")`,solution:`score = 85
if score >= 90:
    grade, comment = "A", "Excellent!"
elif score >= 80:
    grade, comment = "B", "Good job!"
elif score >= 70:
    grade, comment = "C", "Not bad!"
elif score >= 60:
    grade, comment = "D", "Needs work"
else:
    grade, comment = "F", "Keep trying"
print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Comment: {comment}")`},{title:"Number Guessing Game",description:"Implement a number guessing game with feedback.",topic:"Control Flow",level:"Medium",starter:`import random

secret = random.randint(1, 20)
attempts = 0
guess = None

print("Guess the number (1-20)!")

while guess != secret:
    # Simulate user guesses (in a real game use input())
    guesses = [5, 10, 15, 20]
    guess = guesses[attempts] if attempts < len(guesses) else secret
    attempts += 1

    if guess < secret:
        print(f"Guess {attempts}: {guess} - Too low!")
    elif guess > secret:
        print(f"Guess {attempts}: {guess} - Too high!")
    else:
        print(f"Guess {attempts}: {guess} - Correct!")

print(f"Found in {attempts} attempts!")`,solution:`import random
secret = random.randint(1, 20)
attempts = 0
guess = None
print("Guess the number (1-20)!")
while guess != secret:
    guesses = [5, 10, 15, 20]
    guess = guesses[attempts] if attempts < len(guesses) else secret
    attempts += 1
    if guess < secret:
        print(f"Guess {attempts}: {guess} - Too low!")
    elif guess > secret:
        print(f"Guess {attempts}: {guess} - Too high!")
    else:
        print(f"Guess {attempts}: {guess} - Correct!")
print(f"Found in {attempts} attempts!")`},{title:"Multiplication Table",description:"Print a multiplication table using nested loops.",topic:"Control Flow",level:"Easy",starter:`# Multiplication table
size = 12

# TODO: Print a 12x12 multiplication table
# Use nested for loops
# Format numbers so they align nicely`,solution:`size = 12
for i in range(1, size + 1):
    row = [f"{i * j:>4}" for j in range(1, size + 1)]
    print("".join(row))`},{title:"Fibonacci Sequence",description:"Print the first N numbers of the Fibonacci sequence.",topic:"Control Flow",level:"Medium",starter:`# Fibonacci sequence
n = 10

# TODO: Print the first 10 Fibonacci numbers
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
# Each number is the sum of the two previous`,solution:`n = 10
a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
print()`},{title:"Second Largest Number",description:"Find the second largest number in a list without using sort().",topic:"Lists",level:"Medium",starter:`def second_largest(numbers):
    if len(numbers) < 2:
        return None
    first = second = float('-inf')
    for n in numbers:
        if n > first:
            second = first
            first = n
        elif n > second and n != first:
            second = n
    return second if second != float('-inf') else None

# Test
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"List: {nums}")
print(f"Second largest: {second_largest(nums)}")`,solution:`def second_largest(numbers):
    if len(numbers) < 2: return None
    first = second = float('-inf')
    for n in numbers:
        if n > first:
            second = first
            first = n
        elif n > second and n != first:
            second = n
    return second if second != float('-inf') else None
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"List: {nums}")
print(f"Second largest: {second_largest(nums)}")`},{title:"List Sorting & Filtering",description:"Filter, transform, and analyze lists without built-in sort.",topic:"Lists",level:"Medium",starter:`numbers = [45, 12, 78, 34, 67, 90, 23]

# TODO: Even numbers
# TODO: Numbers doubled
# TODO: Average of numbers
# TODO: Sorted in ascending (without .sort)
# TODO: Sorted in descending`,solution:`numbers = [45, 12, 78, 34, 67, 90, 23]
evens = [n for n in numbers if n % 2 == 0]
doubled = [n * 2 for n in numbers]
average = sum(numbers) / len(numbers)
ascending = sorted(numbers)
descending = sorted(numbers, reverse=True)
print(f"Evens: {evens}")
print(f"Doubled: {doubled}")
print(f"Average: {average:.1f}")
print(f"Ascending: {ascending}")
print(f"Descending: {descending}")`},{title:"Matrix Transpose",description:"Transpose a matrix (swap rows and columns).",topic:"Lists",level:"Hard",starter:`matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

# TODO: Transpose the matrix
# Expected result:
# [[1, 4, 7], [2, 5, 8], [3, 6, 9]]`,solution:`matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(f"Original: {matrix}")
print(f"Transposed: {transposed}")`},{title:"Word Frequency Counter",description:"Count word frequencies in a paragraph and find the most common word.",topic:"Dictionaries",level:"Medium",starter:`def word_frequency(text):
    words = text.lower().split()
    freq = {}
    for word in words:
        word = word.strip(".,!?;:")
        freq[word] = freq.get(word, 0) + 1
    return dict(sorted(freq.items(), key=lambda x: x[1], reverse=True))

text = "the quick brown fox jumps over the lazy dog the fox the dog"
freq = word_frequency(text)

print("Word frequencies:")
for word, count in freq.items():
    bar = "#" * count
    print(f"  {word:>10}: {bar} ({count})")
print(f"\\nMost common: {list(freq.keys())[0]}")`,solution:`def word_frequency(text):
    words = text.lower().split()
    freq = {}
    for word in words:
        word = word.strip(".,!?;:")
        freq[word] = freq.get(word, 0) + 1
    return dict(sorted(freq.items(), key=lambda x: x[1], reverse=True))

text = "the quick brown fox jumps over the lazy dog the fox the dog"
freq = word_frequency(text)
print("Word frequencies:")
for word, count in freq.items():
    bar = "#" * count
    print(f"  {word:>10}: {bar} ({count})")
print(f"\\nMost common: {list(freq.keys())[0]}")`},{title:"Phone Book Manager",description:"Build a small phone book using a dictionary with add, lookup, and list functions.",topic:"Dictionaries",level:"Medium",starter:`contacts = {}

# TODO: Implement functions:
# - add_contact(name, phone)
# - get_phone(name)
# - list_contacts()  (sorted by name)
# - delete_contact(name)

# Test
add_contact("Alice", "555-1234")
add_contact("Bob", "555-5678")
add_contact("Charlie", "555-9012")

print(get_phone("Bob"))
list_contacts()
delete_contact("Charlie")
list_contacts()`,solution:`contacts = {}
def add_contact(name, phone): contacts[name] = phone
def get_phone(name): return contacts.get(name, "Not found")
def list_contacts():
    for name in sorted(contacts):
        print(f"  {name}: {contacts[name]}")
def delete_contact(name): contacts.pop(name, None)
add_contact("Alice", "555-1234")
add_contact("Bob", "555-5678")
add_contact("Charlie", "555-9012")
print(get_phone("Bob"))
list_contacts()
delete_contact("Charlie")
list_contacts()`},{title:"Nested Data Explorer",description:"Work with nested dictionaries (student records).",topic:"Dictionaries",level:"Hard",starter:`students = {
    "Alice": {"grades": [85, 90, 92], "major": "CS"},
    "Bob": {"grades": [70, 65, 72], "major": "Math"},
    "Charlie": {"grades": [95, 88, 93], "major": "CS"},
}

# TODO: Calculate each student's average grade
# TODO: Find the student with the highest average
# TODO: List all CS majors
# TODO: Print a report for each student`,solution:`students = {
    "Alice": {"grades": [85, 90, 92], "major": "CS"},
    "Bob": {"grades": [70, 65, 72], "major": "Math"},
    "Charlie": {"grades": [95, 88, 93], "major": "CS"},
}
for name, data in students.items():
    avg = sum(data["grades"]) / len(data["grades"])
    print(f"{name} ({data['major']}): {avg:.1f} average")
best = max(students, key=lambda n: sum(students[n]["grades"]) / len(students[n]["grades"]))
print(f"Best student: {best}")
cs_majors = [n for n, d in students.items() if d["major"] == "CS"]
print(f"CS majors: {cs_majors}")`},{title:"Temperature Converter",description:"Build functions to convert between Celsius and Fahrenheit.",topic:"Functions",level:"Easy",starter:`def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

# Test
temps_c = [0, 20, 37, 100]
for t in temps_c:
    print(f"{t}\xb0C = {celsius_to_fahrenheit(t):.1f}\xb0F")

print()
temps_f = [32, 68, 100, 212]
for t in temps_f:
    print(f"{t}\xb0F = {fahrenheit_to_celsius(t):.1f}\xb0C")`,solution:`def celsius_to_fahrenheit(c): return (c * 9/5) + 32
def fahrenheit_to_celsius(f): return (f - 32) * 5/9
temps_c = [0, 20, 37, 100]
for t in temps_c:
    print(f"{t}\xb0C = {celsius_to_fahrenheit(t):.1f}\xb0F")
print()
temps_f = [32, 68, 100, 212]
for t in temps_f:
    print(f"{t}\xb0F = {fahrenheit_to_celsius(t):.1f}\xb0C")`},{title:"Simple Calculator",description:"Build a calculator function that handles +, -, *, / with error handling.",topic:"Functions",level:"Medium",starter:`def calculator(a, op, b):
    try:
        if op == "+": return a + b
        elif op == "-": return a - b
        elif op == "*": return a * b
        elif op == "/":
            if b == 0:
                return "Error: Division by zero"
            return a / b
        else:
            return f"Error: Unknown operator '{op}'"
    except TypeError:
        return "Error: Invalid input types"

# Test
operations = [(10, "+", 5), (10, "-", 3), (4, "*", 7), (15, "/", 3), (10, "/", 0)]
for a, op, b in operations:
    print(f"  {a} {op} {b} = {calculator(a, op, b)}")`,solution:`def calculator(a, op, b):
    try:
        if op == "+": return a + b
        elif op == "-": return a - b
        elif op == "*": return a * b
        elif op == "/":
            if b == 0: return "Error: Division by zero"
            return a / b
        else: return f"Error: Unknown operator '{op}'"
    except TypeError:
        return "Error: Invalid input types"
operations = [(10, "+", 5), (10, "-", 3), (4, "*", 7), (15, "/", 3), (10, "/", 0)]
for a, op, b in operations:
    print(f"  {a} {op} {b} = {calculator(a, op, b)}")`},{title:"Callback & Higher-Order Functions",description:"Write functions that accept other functions as arguments.",topic:"Functions",level:"Hard",starter:`def apply_twice(func, x):
    return func(func(x))

def multiply:
    pass

# TODO: Define a function double(n) that returns n * 2
# TODO: Define a function square(n) that returns n ** 2
# TODO: Use apply_twice with these functions
# TODO: Print the results`,solution:`def apply_twice(func, x):
    return func(func(x))
def double(n): return n * 2
def square(n): return n ** 2
print(f"double(5) twice: {apply_twice(double, 5)}")
print(f"square(3) twice: {apply_twice(square, 3)}")`},{title:"Bank Account Class",description:"Create a BankAccount class with deposit, withdraw, and statement methods.",topic:"OOP: Classes & Objects",level:"Medium",starter:`class BankAccount:
    bank_name = "PyBank"

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return f"Deposited {amount}"
        return "Invalid amount"

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            return f"Withdrew {amount}"
        return "Insufficient funds!"

    def get_balance(self):
        return f"{self.owner}'s balance: \\\${self.balance}"

# Test
acc = BankAccount("Alice", 1000)
print(acc.get_balance())
print(acc.deposit(500))
print(acc.withdraw(200))
print(acc.get_balance())
print(acc.withdraw(5000))`,solution:`class BankAccount:
    bank_name = "PyBank"
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return f"Deposited {amount}"
        return "Invalid amount"
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            return f"Withdrew {amount}"
        return "Insufficient funds!"
    def get_balance(self):
        return f"{self.owner}'s balance: \\\${self.balance}"
acc = BankAccount("Alice", 1000)
print(acc.get_balance())
print(acc.deposit(500))
print(acc.withdraw(200))
print(acc.get_balance())
print(acc.withdraw(5000))`},{title:"Shape Hierarchy",description:"Create a Shape base class with Circle and Rectangle subclasses.",topic:"OOP: Classes & Objects",level:"Medium",starter:`import math

class Shape:
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
        return math.pi * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height, color="green"):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# Test
shapes = [Circle(5), Rectangle(4, 6), Circle(3, "red")]
for s in shapes:
    print(s.describe())`,solution:`import math
class Shape:
    def __init__(self, color="red"): self.color = color
    def area(self): return 0
    def describe(self): return f"{self.color} {self.__class__.__name__}, area={self.area():.2f}"
class Circle(Shape):
    def __init__(self, radius, color="blue"):
        super().__init__(color); self.radius = radius
    def area(self): return math.pi * self.radius ** 2
class Rectangle(Shape):
    def __init__(self, width, height, color="green"):
        super().__init__(color); self.width = width; self.height = height
    def area(self): return self.width * self.height
shapes = [Circle(5), Rectangle(4, 6), Circle(3, "red")]
for s in shapes:
    print(s.describe())`},{title:"Safe Division Handler",description:"Write a safe division function handling ZeroDivisionError and TypeError.",topic:"Error Handling",level:"Medium",starter:`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"

# Test
tests = [(10, 3), (10, 0), ("10", 3), (10, "3")]
for a, b in tests:
    print(f"  {a} / {b} = {safe_divide(a, b)}")`,solution:`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"
tests = [(10, 3), (10, 0), ("10", 3), (10, "3")]
for a, b in tests:
    print(f"  {a} / {b} = {safe_divide(a, b)}")`},{title:"Custom Exception",description:"Create a custom exception class and raise it for invalid inputs.",topic:"Error Handling",level:"Hard",starter:`class InvalidAgeError(Exception):
    pass

def set_age(age):
    if not isinstance(age, int):
        raise InvalidAgeError("Age must be an integer!")
    if age < 0 or age > 150:
        raise InvalidAgeError("Age must be between 0 and 150!")
    return f"Age set to {age}"

# TODO: Test set_age with valid and invalid values
# Use try/except to catch InvalidAgeError
# Try: 25 (valid), -5 (invalid), 200 (invalid), "abc" (invalid)`,solution:`class InvalidAgeError(Exception): pass
def set_age(age):
    if not isinstance(age, int):
        raise InvalidAgeError("Age must be an integer!")
    if age < 0 or age > 150:
        raise InvalidAgeError("Age must be between 0 and 150!")
    return f"Age set to {age}"
for val in [25, -5, 200, "abc"]:
    try:
        print(set_age(val))
    except InvalidAgeError as e:
        print(f"  Error: {e}")`},{title:"CSV Reader",description:"Read data from a CSV-style string and compute statistics.",topic:"File Handling",level:"Medium",starter:`# Simulate CSV file data
data = """name,score
Alice,85
Bob,92
Charlie,78
Diana,95
Eve,88"""

# TODO: Parse the CSV data
# TODO: Compute average score
# TODO: Find the student with the highest score
# TODO: Print a sorted report`,solution:`data = """name,score
Alice,85
Bob,92
Charlie,78
Diana,95
Eve,88"""
lines = data.strip().split("\\n")
header = lines[0].split(",")
students = [line.split(",") for line in lines[1:]]
scores = [int(s[1]) for s in students]
print(f"Average: {sum(scores) / len(scores):.1f}")
best = max(students, key=lambda s: int(s[1]))
print(f"Highest: {best[0]} ({best[1]})")
report = sorted(students, key=lambda s: s[1], reverse=True)
for name, score in report:
    print(f"  {name}: {score}")`},{title:"Dice Roll Simulator",description:"Simulate dice rolls and visualize the distribution.",topic:"Modules",level:"Medium",starter:`import random
from collections import Counter

# Simulate 1000 dice rolls
rolls = [random.randint(1, 6) for _ in range(1000)]
counts = Counter(rolls)

print("Dice roll distribution (1000 rolls):")
for face in range(1, 7):
    bar = "#" * (counts[face] // 5)
    print(f"  {face}: {bar} ({counts[face]})")`,solution:`import random
from collections import Counter
rolls = [random.randint(1, 6) for _ in range(1000)]
counts = Counter(rolls)
print("Dice roll distribution (1000 rolls):")
for face in range(1, 7):
    bar = "#" * (counts[face] // 5)
    print(f"  {face}: {bar} ({counts[face]})")`},{title:"Password Generator",description:"Generate strong random passwords using the random module.",topic:"Modules",level:"Medium",starter:`import random
import string

def generate_password(length=12):
    # TODO: Use string module for character sets
    # TODO: Include lowercase, uppercase, digits, symbols
    # TODO: Ensure at least one char from each category

    chars = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(chars) for _ in range(length))
    return password

# Generate 5 passwords
for i in range(5):
    print(f"Password {i+1}: {generate_password()}")`,solution:`import random
import string
def generate_password(length=12):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))
for i in range(5):
    print(f"Password {i+1}: {generate_password()}")`}],i=[{title:"Hello from the Console",description:"Print a friendly greeting to the console. Use console.log with single-quoted strings and combine values with the + operator.",topic:"Introduction",level:"Easy",starter:"// TODO: print 'Hello, World!' to the console\n// TODO: print 'I am learning JavaScript'\n// TODO: combine 'Automation ' and 'rocks!' on one line",solution:"console.log('Hello, World!');\nconsole.log('I am learning JavaScript');\nconsole.log('Automation ' + 'rocks!');"},{title:"Arithmetic Basics",description:"Print the results of simple arithmetic: addition, subtraction, multiplication, division, and the remainder.",topic:"Introduction",level:"Easy",starter:"// TODO: print the result of 12 + 9\n// TODO: print the result of 12 - 9\n// TODO: print the result of 12 * 9\n// TODO: print the remainder of 12 divided by 9",solution:"console.log('12 + 9 = ' + (12 + 9));\nconsole.log('12 - 9 = ' + (12 - 9));\nconsole.log('12 * 9 = ' + (12 * 9));\nconsole.log('12 / 9 = ' + (12 / 9));\nconsole.log('12 % 9 = ' + (12 % 9));"},{title:"let vs const",description:"Use let for a value you reassign and const for a value that never changes. Remember: const cannot be reassigned.",topic:"Variables",level:"Easy",starter:"let steps = 0;\n// TODO: reassign steps to 3 and log the new value\nconst site = 'example.org';\n// TODO: log the site name",solution:"let steps = 0;\nsteps = 3;\nconsole.log('Steps taken: ' + steps);\nconst site = 'example.org';\nconsole.log('Site under test: ' + site);\nconsole.log('typeof steps: ' + typeof steps);"},{title:"Type Detective With typeof",description:"Inspect a value's type with typeof and print meaningful labels for numbers, strings, booleans, arrays, and objects.",topic:"Variables",level:"Easy",starter:"const role = 'admin';\n// TODO: log the typeof of role\nconst retries = 3;\n// TODO: log the typeof of retries\nconst isPassed = true;\n// TODO: log the typeof of isPassed\n// TODO: log the typeof of an array [] and an object {}",solution:"const role = 'admin';\nconsole.log('role is a ' + typeof role);\nconst retries = 3;\nconsole.log('retries is a ' + typeof retries);\nconst isPassed = true;\nconsole.log('isPassed is a ' + typeof isPassed);\nconsole.log('array typeof: ' + typeof []);\nconsole.log('object typeof: ' + typeof {});\nconsole.log('null typeof: ' + typeof null);"},{title:"Strict Comparisons",description:"Compare values with === and !== and report whether assertion-style checks pass. Watch the classic pitfall: the string '10' is not the number 10.",topic:"Operators",level:"Easy",starter:"const apiStatus = 200;\nconst uiStatus = 200;\n// TODO: log whether apiStatus strictly equals uiStatus\nconst textCount = '10';\n// TODO: log whether textCount === 10\n// TODO: convert textCount with Number() and compare again",solution:"const apiStatus = 200;\nconst uiStatus = 200;\nconsole.log('Status matches: ' + (apiStatus === uiStatus));\nconst textCount = '10';\nconsole.log('String 10 equals number 10: ' + (textCount === 10));\nconsole.log('Number() conversion matches: ' + (Number(textCount) === 10));\nconsole.log('5 > 3 is ' + (5 > 3));\nconsole.log('10 <= 10 is ' + (10 <= 10));"},{title:"Logical & Ternary",description:"Use &&, ||, and the ternary operator to decide test outcomes and pick fallback values when data is missing.",topic:"Operators",level:"Medium",starter:"const isLoggedIn = true;\nconst isAdmin = false;\n// TODO: log if access is granted (needs both conditions)\n// TODO: pick a fallback display name with ||\n// TODO: log PASS or FAIL for a score with a ternary",solution:"const isLoggedIn = true;\nconst isAdmin = false;\nconsole.log('Admin access granted: ' + (isLoggedIn && isAdmin));\nconst name = '';\nconst displayName = name || 'guest';\nconsole.log('Display name: ' + displayName);\nconst score = 82;\nconst verdict = score >= 70 ? 'PASS' : 'FAIL';\nconsole.log('Test verdict: ' + verdict);\nconsole.log('Customer tier: ' + (score > 90 ? 'VIP' : 'regular'));"},{title:"Grade the Score",description:"Write an if / else if / else chain that maps a score to a grade: 90+ is A, 80+ is B, 70+ is C, 60+ is D, otherwise F.",topic:"Control Flow",level:"Easy",starter:"const score = 85;\nlet grade = '';\n// TODO: use if / else if / else to set the grade\n// TODO: log the final grade",solution:"const score = 85;\nlet grade = '';\nif (score >= 90) {\n  grade = 'A';\n} else if (score >= 80) {\n  grade = 'B';\n} else if (score >= 70) {\n  grade = 'C';\n} else if (score >= 60) {\n  grade = 'D';\n} else {\n  grade = 'F';\n}\nconsole.log('Score: ' + score + ' -> grade: ' + grade);"},{title:"Even Numbers & Nested Loops",description:"Loop from 1 to 10 and log only the even numbers, then use a nested loop to print a small multiplication table.",topic:"Control Flow",level:"Medium",starter:"// TODO: log every even number from 2 to 10\n// TODO: nested loop with i and j from 1 to 3, log i * j",solution:"for (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) {\n    console.log('Even: ' + i);\n  }\n}\nfor (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i + ' x ' + j + ' = ' + (i * j));\n  }\n}"},{title:"Split, Join & Search",description:"Use split and join to convert between strings and arrays, then verify text with includes and startsWith.",topic:"Strings",level:"Easy",starter:"const csv = 'chrome,firefox,safari';\n// TODO: split csv into an array and log it\n// TODO: join the array back with ' | ' and log it\nconst url = 'https://example.com/login';\n// TODO: log if url includes 'login'\n// TODO: log if url starts with 'https://'",solution:"const csv = 'chrome,firefox,safari';\nconst browsers = csv.split(',');\nconsole.log('Browsers: ' + browsers);\nconsole.log('Joined: ' + browsers.join(' | '));\nconst url = 'https://example.com/login';\nconsole.log('Has login: ' + url.includes('login'));\nconsole.log('Secure: ' + url.startsWith('https://'));\nconsole.log('Ends with .com: ' + url.endsWith('.com'));"},{title:"Clean & Pad Text",description:"Trim scraped text, replace values, and pad numbers so your test reports line up nicely.",topic:"Strings",level:"Medium",starter:"const raw = '  Total: 42  ';\n// TODO: trim the whitespace and log the clean text\n// TODO: replace 'Total' with 'Sum' and log it\n// TODO: pad the number 7 with zeros to length 3 and log it",solution:"const raw = '  Total: 42  ';\nconsole.log('Trimmed: ' + raw.trim());\nconsole.log('Swapped: ' + raw.trim().replace('Total', 'Sum'));\nconst id = '7';\nconsole.log('Padded id: ' + id.padStart(3, '0'));\nconst name = 'CoDe';\nconsole.log('Lower: ' + name.toLowerCase());\nconsole.log('Checks: ' + 'banana'.includes('nan'));"},{title:"Arrow vs Declaration",description:"Write the same logic as both a function declaration and an arrow function, then use each one to transform values.",topic:"Functions",level:"Medium",starter:"// TODO: declare function double(n) that returns n * 2\n// TODO: declare arrow const triple = (n) => n * 3\n// TODO: log double(5) and triple(5)",solution:"function double(nValue) {\n  return nValue * 2;\n}\nconst triple = (nValue) => nValue * 3;\nconsole.log('double(5): ' + double(5));\nconsole.log('triple(5): ' + triple(5));\nconst names = ['ana', 'bob'];\nconst shout = names.map((n) => n.toUpperCase());\nconsole.log('Shouted: ' + shout);"},{title:"Defaults & Rest",description:"Give a parameter a default value and collect extra arguments with a rest parameter, then reduce them to a total.",topic:"Functions",level:"Medium",starter:"// TODO: function greet(name = 'friend') returns 'Hello, Name'\n// TODO: function total(...numbers) returns the sum of all numbers\n// TODO: log greet() and total(5, 10, 15)",solution:"function greet(name = 'friend') {\n  return 'Hello, ' + name + '!';\n}\nfunction total(...numbers) {\n  return numbers.reduce((sum, n) => sum + n, 0);\n}\nconsole.log(greet());\nconsole.log(greet('Ana'));\nconsole.log('Total: ' + total(5, 10, 15));\nconsole.log('Total with more: ' + total(1, 2, 3, 4, 5));"},{title:"Map, Filter & Find",description:"Filter active users, map names to uppercase, find the first match, and check membership with some and includes.",topic:"Arrays",level:"Medium",starter:"const users = [\n  { name: 'ana', active: true },\n  { name: 'bob', active: false },\n  { name: 'cin', active: true },\n];\n// TODO: log the names of the active users\n// TODO: log the first active user's name\n// TODO: log whether any user is inactive",solution:"const users = [\n  { name: 'ana', active: true },\n  { name: 'bob', active: false },\n  { name: 'cin', active: true },\n];\nconst activeNames = users.filter((u) => u.active).map((u) => u.name);\nconsole.log('Active users: ' + activeNames);\nconst firstActive = users.find((u) => u.active);\nconsole.log('First active: ' + firstActive.name);\nconsole.log('Any inactive: ' + users.some((u) => !u.active));\nconsole.log('Has ana: ' + users.map((u) => u.name).includes('ana'));"},{title:"Reduce & Sort",description:"Sum a list of prices with reduce, then sort numbers correctly with a comparator instead of the default string sort.",topic:"Arrays",level:"Medium",starter:"const prices = [19.99, 4.5, 12];\n// TODO: reduce prices to a total and log it\nconst nums = [10, 2, 100, 1];\n// TODO: sort nums ascending using a comparator and log it",solution:"const prices = [19.99, 4.5, 12];\nconst total = prices.reduce((sum, price) => sum + price, 0);\nconsole.log('Total: ' + total.toFixed(2));\nconst nums = [10, 2, 100, 1];\nconst sorted = [...nums].sort((a, b) => a - b);\nconsole.log('Sorted: ' + sorted);\nconsole.log('Count: ' + prices.length);"},{title:"Explore Object Keys",description:"Read fields with dot and bracket notation, then list the keys, values, and entries of an object.",topic:"Objects",level:"Medium",starter:"const settings = { theme: 'dark', lang: 'en', retries: 3 };\n// TODO: log the theme with dot notation\n// TODO: log the lang with bracket notation\n// TODO: log Object.keys, Object.values, and Object.entries",solution:"const settings = { theme: 'dark', lang: 'en', retries: 3 };\nconsole.log('Theme: ' + settings.theme);\nconsole.log('Lang: ' + settings['lang']);\nconsole.log('Keys: ' + Object.keys(settings));\nconsole.log('Values: ' + Object.values(settings));\nconsole.log('Entries: ' + Object.entries(settings));\nfor (const [key, value] of Object.entries(settings)) {\n  console.log(key + ' = ' + value);\n}"},{title:"Merge & Optional Chaining",description:"Merge two config objects with the spread operator and read a nested field safely with optional chaining plus a fallback.",topic:"Objects",level:"Medium",starter:"const base = { browser: 'chromium', headless: true };\nconst extra = { timeout: 5000, headless: false };\n// TODO: merge base and extra so extra wins and log it\nconst user = { profile: { name: 'Ana' } };\n// TODO: log user.profile.name with dot notation\n// TODO: log a fallback message when user.account?.email is missing",solution:"const base = { browser: 'chromium', headless: true };\nconst extra = { timeout: 5000, headless: false };\nconst merged = { ...base, ...extra };\nconsole.log('Merged: ' + JSON.stringify(merged));\nconst user = { profile: { name: 'Ana' } };\nconsole.log('Name: ' + user.profile.name);\nconst email = user.account?.email ?? 'no email';\nconsole.log('Email: ' + email);"},{title:"Promise Chain & async/await",description:"Simulate waiting for a page with setTimeout. Chain a Promise with .then, then rewrite the same flow with async/await.",topic:"Async",level:"Medium",starter:"function wait(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n// TODO: chain wait(200).then() to log 'Page loaded.'\n// TODO: async function loadPage() that awaits wait and logs a line\n// TODO: call loadPage()",solution:"function wait(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\nwait(200).then(() => {\n  console.log('Page loaded.');\n});\nasync function loadPage() {\n  await wait(200);\n  console.log('Async page loaded.');\n}\nloadPage();"},{title:"Promise.all Parallel Waits",description:"Run several simulated waits in parallel with Promise.all and print each result combined into a single line of output.",topic:"Async",level:"Hard",starter:"function wait(ms, label) {\n  return new Promise((resolve) => setTimeout(() => resolve(label), ms));\n}\nconst steps = ['open', 'fill', 'submit'];\n// TODO: use Promise.all to await all steps in parallel\n// TODO: log the results joined by ' -> '",solution:"function wait(ms, label) {\n  return new Promise((resolve) => setTimeout(() => resolve(label), ms));\n}\nconst steps = ['open', 'fill', 'submit'];\nPromise.all(steps.map((s) => wait(200, s))).then((results) => {\n  console.log('All done in parallel: ' + results.join(' -> '));\n});"},{title:"Class With Constructor & Getter",description:"Build a User class with a constructor, a getter, and a static method, then instantiate users and describe them.",topic:"Classes",level:"Medium",starter:"// TODO: class User with a constructor(name, role)\n// TODO: getter label that returns 'name (role)'\n// TODO: static createGuest() that returns a User\n// TODO: log an admin label and a guest label",solution:"class User {\n  constructor(name, role) {\n    this.name = name;\n    this.role = role;\n  }\n  get label() {\n    return this.name + ' (' + this.role + ')';\n  }\n  static createGuest() {\n    return new User('guest', 'viewer');\n  }\n}\nconst admin = new User('Ana', 'admin');\nconsole.log('Admin label: ' + admin.label);\nconst guest = User.createGuest();\nconsole.log('Guest label: ' + guest.label);"},{title:"Inheritance With super",description:"Create a BaseTest class and a LoginTest subclass that calls super in its constructor and overrides a run method.",topic:"Classes",level:"Hard",starter:"// TODO: class BaseTest with a constructor(name) and a run() that logs\n// TODO: class LoginTest extends BaseTest and calls super(name)\n// TODO: override run() to log the username as well\n// TODO: create a LoginTest and call run()",solution:"class BaseTest {\n  constructor(name) {\n    this.name = name;\n  }\n  run() {\n    console.log('Starting: ' + this.name);\n  }\n}\nclass LoginTest extends BaseTest {\n  constructor(name, username) {\n    super(name);\n    this.username = username;\n  }\n  run() {\n    super.run();\n    console.log('Logging in as: ' + this.username);\n  }\n}\nconst login = new LoginTest('LoginFlow', 'tester1');\nlogin.run();"},{title:"Simulated Query by Tag",description:"There is no real browser in this sandbox, so query a plain JavaScript array of fake elements. Write helpers that filter by tag name, class, and text.",topic:"DOM",level:"Hard",starter:"const elements = [\n  { tag: 'button', class: 'btn submit', text: 'Submit' },\n  { tag: 'input', class: 'field', text: '' },\n  { tag: 'button', class: 'btn cancel', text: 'Cancel' },\n];\n// TODO: helper byTag(tag) returns matching elements\n// TODO: helper byClass(cls) returns elements whose class includes cls\n// TODO: helper byText(text) returns elements whose text includes text",solution:"const elements = [\n  { tag: 'button', class: 'btn submit', text: 'Submit' },\n  { tag: 'input', class: 'field', text: '' },\n  { tag: 'button', class: 'btn cancel', text: 'Cancel' },\n];\nfunction byTag(tag) {\n  return elements.filter((el) => el.tag === tag);\n}\nfunction byClass(cls) {\n  return elements.filter((el) => el.class.includes(cls));\n}\nfunction byText(text) {\n  return elements.filter((el) => el.text.includes(text));\n}\nconsole.log('Buttons: ' + byTag('button').map((el) => el.text));\nconsole.log('Class btn count: ' + byClass('btn').length);\nconsole.log('Submit button: ' + byText('Submit')[0].tag);"},{title:"Combined Query Simulation",description:"Combine tag, class, and text filters into one query helper and report what the simulated selector returns.",topic:"DOM",level:"Hard",starter:"const nodes = [\n  { tag: 'a', class: 'nav link', text: 'Home' },\n  { tag: 'a', class: 'nav link', text: 'About' },\n  { tag: 'li', class: 'nav item', text: 'Contact' },\n];\n// TODO: helper queryAll(tag, cls) filters by tag and class\n// TODO: helper hasText(node, text) checks text ignoring case\n// TODO: log the texts matched by queryAll('a', 'link')",solution:"const nodes = [\n  { tag: 'a', class: 'nav link', text: 'Home' },\n  { tag: 'a', class: 'nav link', text: 'About' },\n  { tag: 'li', class: 'nav item', text: 'Contact' },\n];\nfunction queryAll(tag, cls) {\n  return nodes.filter((n) => n.tag === tag && n.class.includes(cls));\n}\nfunction hasText(node, text) {\n  return node.text.toLowerCase().includes(text.toLowerCase());\n}\nconsole.log('Nav anchors: ' + queryAll('a', 'link').map((n) => n.text));\nconsole.log('Contains About: ' + queryAll('a', 'link').some((n) => hasText(n, 'about')));"},{title:"Registry Export Pattern",description:"Simulate a module system with a registry object: functions that register names to exports and import them back by name.",topic:"Modules",level:"Hard",starter:"// TODO: create a registry object that holds exports\n// TODO: register(name, value) stores a value in the registry\n// TODO: importName(name) returns the value or a 'missing' message\n// TODO: register a function and a string, then import them",solution:"const registry = {};\nfunction register(name, value) {\n  registry[name] = value;\n}\nfunction importName(name) {\n  return registry[name] ?? 'missing export: ' + name;\n}\nregister('getUrl', () => 'https://example.com');\nregister('env', 'staging');\nconsole.log('env: ' + importName('env'));\nconsole.log('Call: ' + importName('getUrl')());\nconsole.log('Missing: ' + importName('nope'));"},{title:"Import Builders & Re-exports",description:"Simulate default and named imports by building objects with export lists, then merge them into a combined export object.",topic:"Modules",level:"Hard",starter:"// TODO: object namedExports with buildUrl and buildHeader helpers\n// TODO: object defaultExport with a headers() function\n// TODO: merge both into a combined object with spread\n// TODO: log buildUrl, buildHeader, and the merged keys",solution:"const namedExports = {\n  buildUrl: (base, path) => base + '/' + path,\n  buildHeader: (token) => 'Bearer ' + token,\n};\nconst defaultExport = {\n  headers: () => ({ auth: 'token' }),\n};\nconst combined = { ...namedExports, ...defaultExport };\nconsole.log('Url: ' + combined.buildUrl('https://api.test.com', 'users'));\nconsole.log('Header: ' + combined.buildHeader('abc123'));\nconsole.log('Headers: ' + JSON.stringify(combined.headers()));\nconsole.log('Merged keys: ' + Object.keys(combined));"}],l={python:{label:"Python",slug:"python",heroCode:`def learn_python():
    while not done:
        practice()
        quiz()
    if success:
        print("You did it! 🎉")
    return certificate`},javascript:{label:"JavaScript",slug:"javascript",heroCode:`async function learnJS() {
  while (!done) {
    await practice();
    await takeQuiz();
  }
  if (success) {
    console.log("You did it! 🎉");
  }
  return certificate;
}`}};function c(e){return"python"===e?t:o}async function h(t,n,o){return"javascript"!==t?[]:(await e.A(25549)).getPracticeQuestions(`${n}/${o}`)}async function d(t,n,o){return"javascript"!==t?[]:(await e.A(21872)).getCodingQuestions(`${n}/${o}`)}function u(e,t){return c(e).find(e=>e.slug===t)}e.s(["LANGUAGES",0,["python","javascript"],"LANG_META",0,l,"getExtraQuiz",0,function(e){return"python"===e?a:s},"getFirstLessonHref",0,function(e){let t=c(e)[0];return`/${e}/learn/${t?.slug}/${t?.lessons[0]?.slug}`},"getLessonBySlug",0,function(e,t,n){return u(e,t)?.lessons.find(e=>e.slug===n)},"getLessonCoding",0,d,"getLessonPractice",0,h,"getNextLesson",0,function(e,t,n){let o=c(e);for(let e=0;e<o.length;e++){let a=o[e];for(let s=0;s<a.lessons.length;s++)if(a.slug===t&&a.lessons[s].slug===n){if(s+1<a.lessons.length)return{topicSlug:a.slug,lessonSlug:a.lessons[s+1].slug};if(e+1<o.length)return{topicSlug:o[e+1].slug,lessonSlug:o[e+1].lessons[0].slug};return null}}return null},"getPracticeExercises",0,function(e){return"python"===e?r:i},"getQuestionSectionModule",0,function(t){return"python"===t?()=>e.A(4136):()=>e.A(6182)},"getTopicBySlug",0,u,"getTopics",0,c,"getTotalLessons",0,function(e){return c(e).reduce((e,t)=>e+t.lessons.length,0)},"isLanguage",0,function(e){return"python"===e||"javascript"===e}],52947)}]);