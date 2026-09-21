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
print(f"  Tomorrow: {tomorrow.strftime('%A')}")`,quiz:[{question:"What's the difference between 'import math' and 'from math import sqrt'?",options:["Same thing","First uses m.sqrt(), second uses sqrt()","First is faster","Second imports all"],correctIndex:1,explanation:"'import math' requires math.sqrt(), 'from math import sqrt' allows sqrt() directly."},{question:"Which module handles date and time?",options:["time","datetime","calendar","Both time and datetime"],correctIndex:3,explanation:"Both 'time' and 'datetime' modules handle dates and times, but datetime is more feature-rich."}]}]}],n=[{slug:"intro",title:"JavaScript Introduction",icon:"rocket",description:"What is JavaScript and why automation testers need it.",level:"beginner",lessons:[{slug:"what-is-javascript",title:"What is JavaScript?",description:"Understand what JavaScript is and where it runs.",content:`JavaScript is the programming language of the web. Created in 1995, it now powers interactive websites, web apps, servers (Node.js), mobile apps and automation frameworks.

**Why JavaScript is everywhere**
- Runs natively in every browser - no installation needed
- Works on the server with Node.js
- Powers the biggest automation tools: Playwright, Cypress, WebDriverIO
- Huge ecosystem: millions of packages on npm

**Where JavaScript runs**
- Browser: DOM manipulation, events, fetch, storage
- Node.js: servers, scripts, test runners, CLI tools
- Automation: Playwright, Cypress, Selenium WebDriver, Appium

JavaScript is NOT Java. It is a separate language that only shares a similar name.

**The ECMAScript standard**
JavaScript is standardized as ECMAScript (ES). Modern features come from ES6 (ES2015) and later. Almost every automation test you write uses ES6+ syntax: arrow functions, let/const, promises, async/await.`,codeExample:`// Your first JavaScript program
console.log("Hello, World!");

// JavaScript can do math
console.log(2 + 3);

// JavaScript can work with text
console.log("javascript".toUpperCase());

// Everything runs instantly in your browser
const message = "I can run JS right here!";
console.log(message);`,quiz:[{question:"Which popular automation frameworks use JavaScript?",options:["Playwright and Cypress","Pytest and Selenium","JUnit and PHPUnit","RSpec and Cucumber"],correctIndex:0,explanation:"Playwright, Cypress, and WebDriverIO are all JavaScript-based automation tools."},{question:"JavaScript is standardized under which name?",options:["Java","TypeScript","ECMAScript","JScript"],correctIndex:2,explanation:"JavaScript follows the ECMAScript (ES) standard."}]},{slug:"why-javascript-for-automation",title:"Why JavaScript for Automation Testing",description:"Learn why JS is a top choice for test automation.",content:`Automation testing replaces slow, repetitive manual checks with fast, repeatable scripts. JavaScript is one of the best languages for this job.

**Where JavaScript dominates automation**
- UI testing: Playwright, Cypress, WebDriverIO, Puppeteer
- API testing: Supertest, Playwright request API
- Load testing: k6 (scripted in JS)
- Mobile testing: Appium (JS drivers)
- Unit testing: Jest, Mocha, Vitest

**What you will actually use as an automation engineer**
- Selectors: locating buttons, inputs, and text on a page
- Async logic: waiting for elements with await
- Assertions: checking expected values match actual values
- Test data: building objects, arrays, and JSON payloads
- API calls: sending requests and validating responses

**Key point**
The JavaScript you write in a Playwright test is just JavaScript. Master plain JavaScript - variables, functions, objects, arrays, promises, and async/await - and you can learn any JS test framework quickly.`,codeExample:`// What an automation test "feels like" in plain JS
// 1. Define test data
const user = { name: "admin", password: "secret" };

// 2. A helper that "waits" like automation tools do
function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 3. Simulate a test step
async function testLogin() {
  console.log("Opening login page...");
  await waitFor(200); // pretend to wait for the element
  console.log("Filling username: " + user.name);
  console.log("Clicking Login...");
  console.log("Login test passed!");
}

testLogin();`,quiz:[{question:"Which of these is a JavaScript UI testing framework?",options:["Cypress","Playwright","WebdriverIO","Jest"],correctIndex:1,explanation:"Playwright is a popular JavaScript UI automation framework."},{question:"What concept is used most in JS automation tests?",options:["Threads","async/await","Pointers","Goto statements"],correctIndex:1,explanation:"Automation tests constantly use async/await to wait for pages and elements."}]}]},{slug:"basics",title:"JavaScript Basics",icon:"code",description:"Variables, data types, operators, and conversions.",level:"beginner",lessons:[{slug:"variables",title:"Variables: let & const",description:"Storing data with let, const, and var.",content:`Variables store data so you can use it later. Modern JavaScript uses let for changing values and const for values that should not be reassigned.

**Declaring variables**
let count = 5;       // can be reassigned
const pi = 3.14;     // cannot be reassigned
var old = 10;        // legacy - avoid in new code

**let vs const vs var**
- let: block-scoped, can be updated. Use for values that change
- const: block-scoped, cannot be updated. Use by default
- var: function-scoped, hoisted weirdly. Legacy, avoid

**Naming rules**
- Must start with a letter, underscore, or dollar sign
- Case sensitive: userName and username are different
- Cannot be a reserved word (if, for, class, etc.)
- Convention: camelCase for variables (firstName), SCREAMING_SNAKE for constants

**Block scope**
{ let x = 1; }   // x only exists inside these braces
console.log(x);  // ReferenceError: x is not defined`,codeExample:`// let: value can change
let score = 10;
score = 20;
console.log("Score:", score);

// const: value cannot be reassigned
const appName = "Test Runner";
console.log("App:", appName);
// appName = "Other";  // TypeError if you run this line

// Prefer const whenever the value won't change
const testData = ["login", "signup"];
console.log("Test cases:", testData.length);

// const does NOT freeze objects - you can change properties
const user = { name: "Ana" };
user.name = "Bob";
console.log("User:", user.name);`,quiz:[{question:"Which keyword should you use by default for a value that never changes?",options:["var","let","const","static"],correctIndex:2,explanation:"const is the default choice. Use let only when you need to reassign."},{question:"What happens when you reassign a const variable?",options:["It updates silently","It throws a TypeError","It creates a copy","Nothing"],correctIndex:1,explanation:"Reassigning a const throws a TypeError."}]},{slug:"data-types",title:"Data Types & typeof",description:"The primitive types and how to inspect values.",content:`JavaScript has 8 data types. The 7 primitive types are: string, number, boolean, undefined, null, symbol, and bigint. Objects are the 8th type.

**Primitive types**
- string: text data
- number: 42, 3.14, NaN, Infinity
- boolean: true / false
- undefined: a variable with no value assigned
- null: an intentional "no value"
- symbol: unique identifiers
- bigint: very large integers, written as 10n

**typeof operator**
typeof 42           // "number"
typeof "hi"         // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  (known quirk!)
typeof []           // "object"  (arrays are objects)
typeof function(){} // "function"

**Numbers are tricky**
0.1 + 0.2  // 0.30000000000000004 - floating point
Number.isInteger(42)  // true

**Dynamic typing**
A variable can change type at any time: let x = "hi"; x = 42;  // allowed`,codeExample:`// The primitive types
const name = "Playwright";
const version = 1.43;
const isStable = true;
let notAssigned;
const empty = null;

console.log("name:", name, typeof name);
console.log("version:", version, typeof version);
console.log("isStable:", isStable, typeof isStable);
console.log("notAssigned:", notAssigned, typeof notAssigned);
console.log("empty:", empty, typeof empty); // quirk: object

// Arrays and objects
console.log("[]:", typeof []);
console.log("{}:", typeof {});

// Floating point gotcha
console.log("0.1 + 0.2 =", 0.1 + 0.2);

// Checking integers
console.log("Is 42 an integer?", Number.isInteger(42));`,quiz:[{question:"What is the result of typeof null?",options:['"null"','"undefined"','"object"','"number"'],correctIndex:2,explanation:"A long-standing JavaScript bug: typeof null returns 'object'."},{question:"Which type represents an intentional empty value?",options:["undefined","null","NaN","void"],correctIndex:1,explanation:"null is intentionally 'no value'. undefined means 'not assigned'."}]},{slug:"operators",title:"Operators",description:"Comparison, logical, and arithmetic operators.",content:`Operators combine values into expressions. Test automation is full of comparisons, so these matter a lot.

**Arithmetic**
+ - * / %, plus + for strings (concatenation).
2 + 3 = 5, but "2" + 3 = "23" (string wins).

**Comparison - the critical ones**
== loose equality (coerces types) - avoid
=== strict equality (type AND value) - always use
!= and !== the negations
> < >= <= relational

**Logical**
&& (and), || (or), ! (not)
Short-circuit: false && x returns false without evaluating x.
|| returns the first truthy value.

**Type pitfall**
0, "", null, undefined, NaN, false are falsy; everything else is truthy.
"0" and " " (space) are truthy strings.

**Assignment and increments**
= , +=, -=, ++ , --

**The gotcha that breaks tests**
"10" === 10 is false. Always compare like types. If a test compares a UI string to a number, convert first with Number() or parseInt().

**Automation note**
Assertions are comparisons: expect(actual).toBe(expected) is === under the hood. Keep both sides the same type.`,codeExample:`// Strict vs loose
console.log("'10' == 10 :", "10" == 10);   // true (coerces)
console.log("'10' === 10:", "10" === 10);  // false (types differ)

// Comparison results
console.log("5 > 3:", 5 > 3);
console.log("5 >= 5:", 5 >= 5);
console.log("'a' < 'b':", "a" < "b");

// Logical operators with truthiness
const user = null;
const name = user || "guest";
console.log("Fallback via ||:", name);

const isLoggedIn = true;
const isAdmin = false;
console.log("Can access admin panel:", isLoggedIn && isAdmin);
console.log("Can access somewhere:", isLoggedIn || isAdmin);

// Common automation pattern: convert before compare
const uiPrice = "19.99";       // read from the page (string)
const expected = 19.99;        // from data (number)
console.log("String === number:", uiPrice === expected);
console.log("Parsed compare:   ", parseFloat(uiPrice) === expected);

// Remainder (useful for pagination checks)
console.log("10 % 3 =", 10 % 3);`,quiz:[{question:"Why avoid == (loose equality)?",options:["It's slow","It coerces types, causing surprise matches","It's deprecated","It only works on numbers"],correctIndex:1,explanation:"== converts types first, so '10' == 10 is true. === prevents that."},{question:"Which are falsy values?",options:["0, '', nan, false","0, '', null, undefined, NaN, false","'0', ' ', null","Only false"],correctIndex:1,explanation:"Those six values are falsy; everything else is truthy."}]},{slug:"type-conversions",title:"Type Conversions",description:"Implicit vs explicit conversions between types.",content:`JavaScript converts between types - sometimes automatically (implicit) and sometimes when you ask (explicit). The implicit ones cause most bugs in test scripts.

**Implicit coercion (auto)**
"1" + 2      -> "12"  (plus prefers string concatenation)
"10" - 2     -> 8     (minus forces numbers)
"3" * 2      -> 6
2 < "10"     -> true  (relational converts strings to numbers)
"" == 0      -> true  (another reason to avoid ==)

**Explicit (be safe and do this)**
Number("42")     -> 42
parseInt("42px", 10) -> 42
parseFloat("12.5usd") -> 12.5
String(42)       -> "42"
Boolean("")      -> false

**String comparison note**
"10" < "9" is true when compared as strings (first char '1' vs '9').
Always convert to numbers first when comparing numeric text.

**Truthy conversion**
Boolean conversion in conditions: 0, "", null, undefined, NaN are falsy.

**Parsing gotchas**
Number("12px") -> NaN  (fails!)
parseInt("12px") -> 12 (lenient)
Number(null) -> 0, Number(undefined) -> NaN

**Automation note**
Page text is always strings: '3 items', '$19.99', '42px'. Parse before comparing with expected numbers, or assertions fail mysteriously.`,codeExample:`// Implicit coercion surprises
console.log("'1' + 2  =", "1" + 2);    // "12"
console.log("'10' - 2 =", "10" - 2);   // 8
console.log("'6' * 3  =", "6" * 3);    // 18
console.log("'10' < '9' =", "10" < "9");   // true (string compare!)

// Explicit conversions (prefer these)
const n = Number("42");
console.log("Number('42'):", n, typeof n);

const fromHtml = "price: 12.5 usd";
console.log("parseFloat:", parseFloat(fromHtml));
console.log("parseInt:", parseInt("42px", 10));

// The NaN trap
console.log("Number('12px'):", Number("12px"));
console.log("isNaN check:", isNaN(Number("12px")));

// Convert the UI string before comparing
const cartText = "7 items in cart";
const count = parseInt(cartText, 10);
console.log("Parsed cart count:", count, "| is 7:", count === 7);

// String conversion
console.log("String(42):", String(42));
console.log("String(true):", String(true));

// Boolean conversion
console.log("Boolean(''):", Boolean(""));
console.log("Boolean('x'):", Boolean("x"));`,quiz:[{question:"What is '10' < '9' when both are strings?",options:["false (9 < 10 numerically)","true (character-by-character)","NaN","Error"],correctIndex:1,explanation:"Relational comparison on strings compares character codes: '1' vs '9'."},{question:"How do you safely turn '12.5 USD' into a number?",options:["Number('12.5 USD')","parseFloat('12.5 USD')","'12.5 USD' + 0","Number.parseInt it twice"],correctIndex:1,explanation:"parseFloat tolerates trailing text; Number would give NaN."}]}]},{slug:"control-flow",title:"Control Flow & Loops",icon:"git-branch",description:"Making decisions and repeating code.",level:"beginner",lessons:[{slug:"if-else",title:"Conditional Logic",description:"if, else if, else, switch, and the ternary operator.",content:`Programs make decisions. JavaScript gives you if/else, switch, and the ternary operator.

**if / else if / else**
if (condition) {
  // runs when condition is truthy
} else if (otherCondition) {
  // runs when the first is falsy and this is truthy
} else {
  // runs when all conditions are falsy
}

**Truthy/falsy reminders**
if (username) checks "is username not empty?" because empty string is falsy.
if (count) fails when count is 0 even if 0 is a valid value. Be careful.

**Ternary (shorthand)**
const result = condition ? valueIfTrue : valueIfFalse;

**switch**
switch uses strict equality (===). Remember break or the code falls through.

**Automation note**
Assertions are exactly conditionals: if actual === expected then PASS else FAIL.`,codeExample:`// if / else if / else
const temp = 28;
if (temp < 0) console.log("Freezing");
else if (temp < 15) console.log("Cold");
else if (temp < 25) console.log("Nice");
else if (temp < 35) console.log("Warm");
else console.log("Hot!");

// Ternary
const score = 85;
const passed = score >= 70 ? "PASS" : "FAIL";
console.log("Result:", passed);

// The 0 gotcha
const cartCount = 0;
if (cartCount) console.log("has items");
else console.log("Cart is empty (0 is falsy!)");

// switch
const browser = "chrome";
switch (browser) {
  case "chrome": console.log("Running on Chrome"); break;
  case "firefox": console.log("Running on Firefox"); break;
  default: console.log("Unknown browser");
}

// Assertion-style check used in tests
const expected = 200;
const actual = 200;
console.log("API status check:", actual === expected ? "PASS" : "FAIL");`,quiz:[{question:"What happens if a switch case is missing break?",options:["Compiler error","Code falls through to next case","It stops","It returns undefined"],correctIndex:1,explanation:"Without break, execution falls through to the next case."},{question:'What does (10 > 5) ? "yes" : "no" evaluate to?',options:["yes","no","10 > 5","true"],correctIndex:0,explanation:"The ternary returns 'yes' because 10 > 5 is true."}]},{slug:"loops-iteration",title:"Loops & Iteration",description:"for, while, do-while, for...of, and for...in.",content:`Loops repeat code. Modern JavaScript has several loop forms.

**for - classic counting loop**
for (let i = 0; i < 5; i++) { console.log(i); }

**while - repeats while condition is truthy**
**do...while - runs at least once**

**for...of - iterate values of arrays/strings (preferred)**
for (const fruit of ["apple", "banana"]) { console.log(fruit); }

**for...in - iterate keys of objects (use with care)**

**break and continue**
break exits the loop entirely. continue skips to the next iteration.

**Automation note**
for...of is what you use to loop over test data, locator results, and API responses. Avoid index-based for loops unless you need the index.`,codeExample:`// for loop with index
for (let i = 1; i <= 5; i++) {
  console.log("Step", i);
}

// for...of over an array
const steps = ["login", "navigate", "assert"];
for (const step of steps) {
  console.log("Running:", step);
}

// while loop
let tries = 0;
while (tries < 3) {
  console.log("Attempt", tries + 1);
  tries++;
}

// break and continue
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;   // skip multiples of 3
  if (i > 7) break;            // stop early
  console.log("Number:", i);
}

// Looping over test data
const testData = [
  { user: "admin", pass: true },
  { user: "guest", pass: false },
];
for (const t of testData) {
  console.log(t.user + ": " + (t.pass ? "passes" : "fails"));
}`,quiz:[{question:"Which loop is best for iterating over array values in modern JS?",options:["for (;;)","for...of","while(1)","do...while"],correctIndex:1,explanation:"for...of iterates array/string values directly and is the readable modern choice."},{question:"What does continue do inside a loop?",options:["Exits the loop","Skips to the next iteration","Restarts the loop","Pauses for 1 second"],correctIndex:1,explanation:"continue skips the rest of the current iteration and moves to the next one."}]}]},{slug:"strings",title:"Strings & Template Literals",icon:"type",description:"Working with text data in JavaScript.",level:"beginner",lessons:[{slug:"string-basics",title:"String Basics",description:"Creating strings and basic operations.",content:`Strings hold text. You can write them with single quotes, double quotes, or backticks (template literals).

**Creating strings**
const a = 'single';
const b = "double";
const c = "template with backticks";

**Length and access**
"Hello".length       // 5
"Hello"[0]           // "H"  (strings are indexable)
"Hello".charAt(1)    // "e"

**Concatenation**
"Hello" + " " + "World"   // old way
"Hi " + name              // simpler: template literals

**Escape characters**
Newline, tab, and quotes inside strings use backslash escapes.

**Strings are immutable**
Methods return NEW strings; the original is never changed.

**Automation note**
Every locator, text assertion, and URL in a test is a string. Compare text with === and watch out for extra whitespace and case.`,codeExample:`// Creating strings
const single = "single quotes";
const double = "double quotes";
console.log("Single:", single);
console.log("Double:", double);

// Accessing and length
const fruit = "banana";
console.log("Length:", fruit.length);
console.log("First char:", fruit[0]);
console.log("Last char:", fruit[fruit.length - 1]);

// Escapes
console.log("Line 1\\nLine 2");
console.log("Tab\\there");

// Immutability
const original = "hello";
const shout = original.toUpperCase();
console.log("Original:", original, "| changed:", shout);

// Text comparison (case matters!)
const expected = "Login";
const actual = "login";
console.log("Case-sensitive match:", expected === actual);
console.log("Lowercase match:", expected.toLowerCase() === actual);`,quiz:[{question:'What does "JavaScript".length return?',options:["9","10","11","12"],correctIndex:1,explanation:'"JavaScript" has 10 characters.'},{question:"Are strings mutable in JavaScript?",options:["Yes","No, methods return new strings","Only for emojis","Depends on quotes used"],correctIndex:1,explanation:"Strings are immutable. Methods like toUpperCase() return a new string."}]},{slug:"string-methods",title:"String Methods",description:"The most useful built-in string methods.",content:`JavaScript strings have many built-in methods. These are the ones you will use daily in test automation.

**Searching**
str.includes("sub")   // boolean - contains?
str.startsWith("ab")  // boolean
str.endsWith("z")     // boolean
str.indexOf("sub")    // first index or -1

**Changing**
str.toUpperCase() / str.toLowerCase()
str.trim()            // remove surrounding whitespace
str.slice(start, end) // substring by index
str.replace("old", "new")
str.replaceAll("old", "new")
str.padStart(5, "0")  // "00042"

**Splitting and joining**
str.split(",")        // "a,b,c" -> ["a","b","c"]
arr.join("-")         // ["a","b"] -> "a-b"

**Automation note**
- Always trim() scraped text before comparing - pages have stray whitespace
- Use toLowerCase() for case-insensitive text checks
- includes() is the go-to for "does this text contain X" assertions`,codeExample:`const text = "  Welcome to the site  ";

// Trim whitespace - critical for scraped text
console.log("trimmed:", text.trim());

// Case
console.log("upper:", text.trim().toUpperCase());
console.log("lower:", text.trim().toLowerCase());

// Checks
const url = "https://example.com/login";
console.log("startsWith https:", url.startsWith("https://"));
console.log("includes login:", url.includes("login"));
console.log("endsWith .com:", url.endsWith(".com"));

// Extract the domain
const domain = url.replace("https://", "").split("/")[0];
console.log("domain:", domain);

// Replace
const msg = "Test 1 of 5 passed";
console.log("replace:", msg.replace("1", "one"));

// Pad for aligned reports
console.log("Padded:", "42".padStart(5, "0"));

// Compare text case-insensitively
const expected = "LOGIN";
const actual = "login";
console.log("Case-insensitive match:", expected.toLowerCase() === actual.toLowerCase());`,quiz:[{question:'What does "a,b,c".split(",") return?',options:['"a,b,c"','["a","b","c"]','"[a,b,c]"','"abc"'],correctIndex:1,explanation:"split() turns the string into an array of parts separated by the delimiter."},{question:"Which method checks if a string contains a substring?",options:["find()","includes()","substring()","charAt()"],correctIndex:1,explanation:"includes() returns true/false; indexOf() also works but returns an index or -1."}]},{slug:"template-literals",title:"Template Literals",description:"Interpolation, multi-line strings, and embedded expressions.",content:`Template literals use backtick characters (the key under the tilde) instead of quotes. They are the modern way to build strings.

**Interpolation - embed values directly**
Wrap the string in backtick characters and put any expression inside dollar-sign followed by curly braces:
const name = "Ana";
Old style: "Hello, " + name + "!"
Modern style: the name variable placed inside curly-brace interpolation.

**Any expression inside the braces**
const price = 19.99;
Put price * 2 between the curly braces and the interpolation evaluates it for you.

**Multi-line strings**
Backticks let you write natural multi-line strings without escape codes.

**Dynamic values**
Test frameworks build strings like selectors, URLs, and test names this way.

**Automation note**
- Build locators dynamically
- Create API payloads and URLs
- Write readable test messages`,codeExample:`// Basic interpolation
const browser = "Chromium";
const version = 121;
console.log("Running " + browser + " v" + version);

// Expressions inside
const base = 100;
console.log("base + 50 = " + (base + 50));

// Multi-line strings
const report = "TEST RESULTS\\n------------\\nLogin: PASS\\nLogout: PASS";
console.log(report);

// Dynamic locator/selector building (like automation tools)
function locator(id) {
  return '[data-testid="' + id + '"]';
}
console.log("Selector:", locator("submit-btn"));

// Building readable test messages
const status = "failure";
const reason = "timeout";
console.log("Login test: " + status + " (reason: " + reason + ")");

// Mapping into strings
const steps = ["open", "fill", "submit"];
console.log("Flow:", steps.map(s => s.toUpperCase()).join(" -> "));`,quiz:[{question:"Which character encloses a template literal?",options:["Double quotes","Backticks","Single quotes","Angle brackets"],correctIndex:1,explanation:"Template literals use backticks and interpolate with ${expression}."},{question:"What is template literal interpolation used for?",options:["Only comments","Embedding expressions in strings","Deleting variables","Incrementing numbers"],correctIndex:1,explanation:"Interpolation embeds variables and expressions directly inside a string."}]}]},{slug:"functions",title:"JavaScript Functions",icon:"function-square",description:"Declarations, arrows, callbacks, scope, and closures.",level:"intermediate",lessons:[{slug:"function-basics",title:"Function Basics",description:"Declaring, parameters, returns, and default values.",content:`Functions are reusable blocks of code. In JavaScript, functions are VALUES - you can store, pass, and return them.

**Function declaration**
function add(a, b) {
  return a + b;
}
add(2, 3);  // 5

**Function expression**
const add = function (a, b) { return a + b; };

**Parameters and defaults**
function greet(name = "friend") {
  return "Hello, " + name + "!";
}

**Rest parameters**
function total(...nums) { /* nums is an array */ }

**Hoisting**
Function declarations are hoisted - callable before they appear. Function expressions are not.

**Missing arguments**
Calling oneArg() with no argument makes the parameter undefined.

**return**
A function without a return statement returns undefined.

**Automation note**
Page objects in Playwright are usually classes; helpers are plain functions. Keep functions small and single-purpose.`,codeExample:`// Declaration (hoisted - callable before definition)
console.log(multiply(6, 7));
function multiply(a, b) {
  return a * b;
}

// Expression with default params
const buildUrl = (base, query) =>
  query ? base + "?" + query : base;
console.log(buildUrl("https://api.test.com", "page=2&size=10"));

// Rest parameters
function total(...prices) {
  return prices.reduce((sum, p) => sum + p, 0);
}
console.log("Total:", total(10, 20, 5));

// Missing and extra args
function oneArg(a) { return a; }
console.log("Missing:", oneArg());
console.log("Extra ignored:", oneArg(1, 2, 3));

// No return -> undefined
function sayHi() { console.log("Hi!"); }
console.log("sayHi() returned:", sayHi());

// Reusable automation helper
function assertStatus(status, expected) {
  return status === expected;
}
console.log("Status check:", assertStatus(200, 200));`,quiz:[{question:"What does a function return if it has no return statement?",options:["null","0","undefined","the last expression"],correctIndex:2,explanation:"Functions without a return statement return undefined."},{question:"What does hoisting do for function declarations?",options:["Deletes them","Lets you call them before definition","Makes them private","Slows them down"],correctIndex:1,explanation:"Function declarations are hoisted to the top of their scope."}]},{slug:"arrow-functions",title:"Arrow Functions",description:"The concise modern function syntax.",content:`Arrow functions are a shorter way to write functions. Introduced in ES6, they are now standard everywhere including test frameworks.

**Basic syntax**
const add = (a, b) => a + b;
- One parameter: parentheses optional, x => x * 2
- Zero parameters: need empty parentheses, () => 5
- Multi-statement bodies need curly braces and explicit return

**The short callback**
array.map(function(item) { return item * 2; });
array.map(item => item * 2);

**Key difference: this**
Arrow functions do NOT have their own this. They inherit this from the surrounding scope. This is why they are preferred for callbacks and event handlers.

**No arguments object**
Arrows do not have the arguments object. Use rest parameters instead.

**No hoisting**
Arrow functions are expressions and are not hoisted, so define them before use.

**Use in automation**
- map/filter/find callbacks over test data
- Hooks in test frameworks: beforeEach(() => {...})
- Promise chains: .then(res => res.json())
- Assertions: expect(value).toBe(expected)`,codeExample:`// Various arrow forms
const square = x => x * x;
const add = (a, b) => a + b;
const greet = () => "Hello!";
console.log(square(9), add(2, 5), greet());

// Block body with explicit return
const isAdult = (age) => {
  if (age >= 18) return "adult";
  return "minor";
};
console.log(isAdult(21));

// Used with array methods
const scores = [45, 80, 90, 60];
const passing = scores.filter(score => score >= 70);
const doubled = scores.map(score => score * 2);
console.log("Passing:", passing);
console.log("Doubled:", doubled);

// this behavior: arrows inherit this
const counter = {
  count: 0,
  next() {
    setTimeout(() => {
      this.count++;      // this = counter (lexical)
      console.log("Count:", this.count);
    }, 50);
  },
};
counter.next();`,quiz:[{question:"Do arrow functions have their own this?",options:["Yes, always","No, they inherit this from scope","Only in strict mode","Only when bound"],correctIndex:1,explanation:"Arrow functions have no own this; they use the lexical this from surrounding scope."},{question:"Can arrow functions be hoisted like declarations?",options:["Yes","No, they are expressions","Only if named","Only in modules"],correctIndex:1,explanation:"Arrow functions are expressions and are not hoisted."}]},{slug:"lexical-scope-closures",title:"Scope & Closures",description:"Lexical scope, closures, and variable visibility.",content:`Scope defines where variables are visible. Closures let inner functions remember variables from the scope where they were created - even after that outer function has finished.

**Types of scope**
- Global scope: visible everywhere
- Function scope: visible inside the function (var)
- Block scope: visible inside the braces (let, const)

**Lexical (static) scope**
Visibility is decided by where code is WRITTEN, not where it runs. A nested function can read variables of its outer functions.

**What is a closure?**
A closure is a function that captures the variables of its outer scope at creation time:
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2  (count survives after makeCounter returned)

**Why closures matter for automation**
- "Remembering" state between test steps
- Factory functions that build configs
- Private variables that hide implementation details
- Event handlers and setTimeout callbacks use closures

**Common interview trap**
console.log inside a setTimeout in a loop with var prints the final value. Use let or wrap with a closure.`,codeExample:`// Closure: counter keeps state
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log("Counter:", counter(), counter(), counter());

// Closure in a factory
function createGreeter(prefix) {
  return function (name) {
    return prefix + " " + name;
  };
}
const sayHi = createGreeter("Hello");
const sayBye = createGreeter("Goodbye");
console.log(sayHi("Ana"));
console.log(sayBye("Bob"));

// Private state
function createBankAccount() {
  let balance = 0;
  return {
    deposit(m) { balance += m; return balance; },
    getBalance() { return balance; },
  };
}
const acct = createBankAccount();
acct.deposit(100);
acct.deposit(50);
console.log("Balance:", acct.getBalance());

// Classic loop + var trap
for (var i = 0; i < 3; i++) {
  setTimeout(function () { console.log("var i:", i); }, 0);
}
// Fix with let
for (let j = 0; j < 3; j++) {
  setTimeout(function () { console.log("let j:", j); }, 0);
}`,quiz:[{question:"What is a closure?",options:["A function that closes the browser","A function that remembers its outer scope variables","A private class field","A type of loop"],correctIndex:1,explanation:"A closure captures and remembers the variables of the scope where it was created."},{question:"Which keyword creates block-scoped variables?",options:["var","let and const","function","this"],correctIndex:1,explanation:"let and const are block-scoped. var is function-scoped."}]},{slug:"callbacks",title:"Callbacks",description:"Passing functions to functions for async and reuse.",content:`A callback is a function passed as an argument to another function, to be called later. Callbacks power events, timers, and all asynchronous code.

**Sync callback (built-in methods)**
["a", "b"].forEach(item => console.log(item));
const evens = [1,2,3,4].filter(n => n % 2 === 0);

**Async callback (runs later)**
setTimeout(() => console.log("later"), 1000);

**Why callbacks matter for automation**
- Test frameworks: beforeEach(() => ...), afterEach(() => ...)
- Playwright: page.on("requestfailed", callback)
- Event listeners and hooks are all callbacks
- Node.js: fs.readFile(path, (err, data) => ...)

**Callback hell**
Nested callbacks become unreadable:
apiCall(data, result => {
  apiCall2(result, result2 => {
    apiCall3(result2, result3 => { ... });
  });
});
Modern code replaces deep nesting with Promises and async/await (next topics).

**Higher-order functions**
A function that takes or returns another function is a higher-order function. map, filter, forEach are higher-order.`,codeExample:`// Sync callback examples
const scores = [85, 40, 92, 60];
const above = scores.filter(s => s > 70);
console.log("Above 70:", above);

scores.forEach((s, index) => {
  console.log("Score " + (index + 1) + ":", s);
});

// Async callback - runs after the current code
setTimeout(() => {
  console.log("This runs last (after 300ms)");
}, 300);
console.log("This runs first");

// Higher-order function using a callback
function processData(items, transform) {
  return items.map(transform);
}
const doubled = processData([1, 2, 3], n => n * 2);
console.log("Processed:", doubled);

// Write your own callback
function loginTest(username, onSuccess, onFail) {
  const valid = username === "admin";
  if (valid) onSuccess();
  else onFail();
}
loginTest(
  "admin",
  () => console.log("Login PASSED"),
  () => console.log("Login FAILED")
);`,quiz:[{question:"What is a callback?",options:["A function passed to another function to run later","A built-in method","A type of variable","A DOM element"],correctIndex:0,explanation:"A callback is a function passed as an argument and invoked by the receiving function."},{question:"What is the main downside of heavily nested callbacks?",options:["Slow execution","Callback hell - unreadable code","Memory leaks always","No error handling"],correctIndex:1,explanation:"Deeply nested callbacks create 'callback hell'. Promises and async/await solve this."}]}]},{slug:"arrays",title:"JavaScript Arrays",icon:"list",description:"Ordered collections and the powerful array methods.",level:"beginner",lessons:[{slug:"array-basics",title:"Array Basics",description:"Creating arrays, accessing and modifying elements.",content:`Arrays store ordered collections of values. They can mix any types.

**Creating arrays**
const nums = [1, 2, 3];
const mixed = [1, "two", true, null];
const empty = [];
const fromString = "abc".split("");

**Accessing**
arr[0]            // first element
arr[arr.length-1] // last element
arr.at(-1)        // modern: last element

**Adding / removing**
arr.push(x)       // add to end (returns new length)
arr.pop()         // remove from end
arr.unshift(x)    // add to start
arr.shift()       // remove from start
arr.splice(1, 1)  // remove 1 element at index 1

**Finding the length**
arr.length

**Copying**
const copy = [...arr];   // spread - a real copy
const copy2 = arr.slice();

**Mutating vs returning new**
push/pop/splice MUTATE the original. slice/spread do NOT.
Slice/extract: arr.slice(start, end) returns a NEW array.

**Automation note**
Test data (carts, tables, configs) lives in arrays. Master push/pop and the copy behavior to avoid nasty bugs.`,codeExample:`// Creating and accessing
const colors = ["red", "green", "blue"];
console.log("First:", colors[0]);
console.log("Last:", colors[colors.length - 1]);
console.log("Length:", colors.length);

// Adding / removing
colors.push("yellow");
console.log("After push:", colors);
colors.pop();
console.log("After pop:", colors);
colors.unshift("purple");
console.log("After unshift:", colors);
colors.shift();
console.log("After shift:", colors);

// splice: remove 1 element at index 1
colors.splice(1, 1);
console.log("After splice:", colors);

// Copy with spread - mutating the copy leaves original alone
const original = [1, 2, 3];
const copy = [...original];
copy.push(99);
console.log("Original:", original);
console.log("Copy:", copy);

// slice is non-mutating
const nums = [10, 20, 30, 40];
console.log("Slice 1-3:", nums.slice(1, 3));
console.log("Original safe:", nums);`,quiz:[{question:"Which method adds an element to the END of an array?",options:["push()","shift()","unshift()","splice()"],correctIndex:0,explanation:"push() adds to the end. unshift() adds to the start."},{question:"How do you make a real copy of an array?",options:["const copy = original","const copy = [...original]","const copy = original.push()","There is no way"],correctIndex:1,explanation:"The spread operator [...] creates a new independent array."}]},{slug:"advanced-arrays",title:"Advanced Array Methods",description:"map, filter, find, some, every, sort, and more.",content:`These methods replace manual for loops and are the bread and butter of modern JavaScript. They are non-mutating (they return new arrays or values).

**map - transform every element**
const doubled = [1,2,3].map(n => n * 2);   // [2,4,6]

**filter - keep matching elements**
const evens = [1,2,3,4].filter(n => n % 2 === 0);  // [2,4]

**find - first matching element (or undefined)**
const user = users.find(u => u.id === 3);

**some - is there at least one match? (boolean)**
**every - do all elements match? (boolean)**
**includes - does the array contain a value? (boolean)**

**sort - sorts IN PLACE, beware strings**
[10, 2, 1].sort((a,b) => a - b)  // [1,2,10]

**Cheat with huge test data**
Extracting, filtering, and transforming API responses is exactly this.

**forEach vs map**
forEach runs code for each item (returns nothing). map builds a new array. Use map when you need the result.`,codeExample:`const users = [
  { name: "Ana", age: 30, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Cid", age: 25, active: true },
];

// map - extract names
console.log("Names:", users.map(u => u.name));

// filter - active users
console.log("Active:", users.filter(u => u.active).map(u => u.name));

// find - first match
console.log("Found:", users.find(u => u.age === 17));

// some / every
console.log("Anyone under 18?", users.some(u => u.age < 18));
console.log("All over 16?", users.every(u => u.age > 16));

// includes
console.log("Has Ana?", ["Ana", "Bob"].includes("Ana"));

// sort numbers properly (with comparator)
const nums = [10, 2, 1, 100];
console.log("Sorted:", [...nums].sort((a, b) => a - b));

// sort strings by name
console.log("By name:", [...users].sort((a, b) => a.name.localeCompare(b.name)).map(u => u.name));

// forEach - no result, just side effects
users.forEach(u => console.log("Processing", u.name));`,quiz:[{question:"What does arr.map(fn) return?",options:["The original array","A new transformed array","A boolean","undefined"],correctIndex:1,explanation:"map() returns a new array with each element transformed by the callback."},{question:"Which method returns the FIRST element matching a condition?",options:["filter","find","some","map"],correctIndex:1,explanation:"find() returns the first match (or undefined). filter() returns all matches as an array."}]},{slug:"reduce",title:"Reduce",description:"Fold an array down to a single value.",content:`reduce is the most powerful (and most intimidating) array method. It folds an array down into a single value - a number, object, string, or even another array.

**Signature**
array.reduce(callback, initialValue);
callback(accumulator, currentItem, index, array)

**The accumulator**
The accumulator carries the running result between steps. The initialValue starts it; the callback's return becomes the next accumulator.

**Examples**
Sum: [1,2,3].reduce((total, n) => total + n, 0)   // 6
Max: [1,2,9].reduce((m, n) => Math.max(m, n))     // 9

**Counting or grouping into an object**
tests.reduce((count, t) => { count[t.status]++;  ... })

**Flattening arrays**
[[1,2],[3,4]].reduce((flat, row) => flat.concat(row), [])  // [1,2,3,4]

**reduce vs the alternatives**
For totals, reduce is the classic tool. Sometimes map+filter is clearer; use reduce when you need to build ONE result value (like a counter or grouped object).

**Automation note**
- Counting passed/failed/skipped tests
- Grouping test results by suite
- Computing averages/report summaries`,codeExample:`// Sum with reduce
const scores = [85, 90, 72, 95];
const total = scores.reduce((sum, s) => sum + s, 0);
console.log("Total:", total, "Average:", total / scores.length);

// Max value
const nums = [3, 11, 7, 9];
console.log("Max:", nums.reduce((m, n) => (n > m ? n : m)));

// Group array into an object - count by status
const results = ["pass", "fail", "pass", "skip", "pass"];
const counts = results.reduce((acc, r) => {
  acc[r] = (acc[r] || 0) + 1;
  return acc;
}, {});
console.log("Status counts:", counts);

// Flatten nested arrays
const rows = [[1, 2], [3, 4], [5]];
console.log("Flattened:", rows.reduce((flat, row) => flat.concat(row), []));

// Build a lookup map: id -> user
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Bob" },
];
const byId = users.reduce((map, u) => {
  map[u.id] = u.name;
  return map;
}, {});
console.log("Lookup:", byId);`,quiz:[{question:"What does the accumulator do in reduce()?",options:["Starts the loop","Carries the running result between steps","Counts iterations","Nothing"],correctIndex:1,explanation:"The accumulator carries the result and the callback's return value becomes the next accumulator."},{question:"[1,2,3].reduce((t, n) => t + n, 0) gives?",options:["6","0","[1,2,3]","3"],correctIndex:0,explanation:"reduce sums the array: 0+1+2+3 = 6."}]}]},{slug:"objects",title:"Objects & ES6 Features",icon:"box",description:"Objects, destructuring, optional chaining, Map/Set.",level:"intermediate",lessons:[{slug:"object-basics",title:"Object Basics",description:"Creating, reading, updating, and iterating objects.",content:`Objects store key-value pairs. This is the most common data structure in JavaScript: JSON responses, configs, test data - all objects.

**Creating objects**
const user = { name: "Ana", age: 30, active: true };

**Reading values**
user.name          // dot notation
user["age"]        // bracket notation (for dynamic keys)

**Writing values**
user.age = 31;
user["role"] = "tester";   // add new key

**Deleting**
delete user.active;

**Checking keys**
"name" in user        // true
Object.keys(user)     // ["name","age",...]
Object.values(user)
Object.entries(user)  // [[key,value], ...]

**Iteration**
for (const key in user) { ... }      // keys
Object.entries(user).forEach(([k,v]) => ...)

**Shorthand and computed keys**
const a = 1; { a } === { a: 1 }
const key = "dynamic"; { [key]: 5 }

**Automation note**
API payloads and responses are objects. Read values, copy with spread, and spread-merge configs.`,codeExample:`// Create + read + write
const user = { name: "Ana", age: 30 };
user.age = 31;
user.role = "tester";
console.log(user);

// Bracket notation for dynamic keys
const field = "age";
console.log(user[field]);

// Keys / values / entries
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// Iterate entries
for (const [key, value] of Object.entries(user)) {
  console.log(key + ": " + value);
}

// Spread to copy / merge
const base = { browser: "chromium", headless: true };
const extra = { timeout: 5000 };
const config = { ...base, ...extra, headless: false };
console.log("Merged config:", config);

// Delete
delete config.timeout;
console.log("After delete:", config);`,quiz:[{question:'user["age"] is which way of accessing a value?',options:["Dot notation","Bracket notation","Index notation","Chaining"],correctIndex:1,explanation:"Bracket notation (user['age']) works with strings and dynamic keys."},{question:"How do you make a copy of an object with one field changed?",options:["Mutate the original","Object.delete(user, field)","Spread: { ...user, age: 31 }","JSON.copy(user)"],correctIndex:2,explanation:"Spread creates a copy; override a field after the spread."}]},{slug:"destructuring",title:"Destructuring",description:"Pulling values out of objects and arrays neatly.",content:`Destructuring unpacks values from objects and arrays into variables with clean syntax.

**Object destructuring**
const user = { name: "Ana", age: 30 };
const { name, age } = user;

**Rename keys**
const { name: userName } = user;

**Defaults**
const { missing = "fallback" } = user;

**Rest**
const { age, ...rest } = user;  // rest = { name }

**Array destructuring**
const [first, second] = [1, 2];
Swap: [a, b] = [b, a];
Ignore items: const [, second] = list;

**Function parameters**
function logUser({ name, age }) { ... }  // pass the object

**return multiple values**
function stats(arr) { return [min, max]; }
const [min, max] = stats(nums);

**Automation note**
Extract what you need from API responses: const { id, token } = await login();`,codeExample:`// Object destructuring
const user = { name: "Ana", age: 30, email: "a@test.com" };
const { name, age } = user;
console.log("Name:", name, "Age:", age);

// Rename + default
const { name: userName, address = "unknown" } = user;
console.log(userName, "|", address);

// Rest pattern
const { age: _, ...rest } = user;
console.log("Rest (no age):", rest);

// Array destructuring
const coords = [10, 20];
const [x, y] = coords;
console.log("x:", x, "y:", y);

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log("Swapped:", a, b);

// Destructure in function params
function describe({ name, age }) {
  return name + " is " + age;
}
console.log(describe(user));

// Return and destructure multiple values
function minMax(nums) {
  return [Math.min(...nums), Math.max(...nums)];
}
const [min, max] = minMax([3, 8, 1, 9]);
console.log("min/max:", min, max);`,quiz:[{question:"What does { a, b } = obj unpack?",options:["a and b as variables from obj's properties","A new object","An array","Nothing - invalid syntax"],correctIndex:0,explanation:"Object destructuring creates variables named after the object's keys."},{question:"How do you swap two variables destructively?",options:["[a, b] = [b, a]","swap(a, b)","a = b; b = a","You cannot"],correctIndex:0,explanation:"Array destructuring assigns [b, a] back into a and b simultaneously."}]},{slug:"optional-chaining-nullish",title:"Optional Chaining & Nullish Coalescing",description:"Safe deep access and fallback values (ES2020).",content:`Two modern safety features that prevent painful 'cannot read property of undefined' errors.

**Optional chaining**
Instead of:
if (user && user.profile && user.profile.avatar) { ... }

Write:
user?.profile?.avatar

- ?. stops and returns undefined if anything before it is null/undefined
- Works with calls too: obj.method?.()
- Works with indexes: arr?.[0]

**Nullish coalescing**
const value = maybeNull ?? "fallback";
- ?? returns the right side ONLY when left is null OR undefined
- Unlike || which also catches 0, "" and false

**Use them together**
const name = user?.profile?.name ?? "Anonymous";

**Warning**
?? cannot mix with || or && without parentheses.

**Automation note**
Deeply nested API responses are full of optional fields. These operators make extraction safe and tidy.`,codeExample:`// Nested object that may lack fields
const user = {
  name: "Ana",
  profile: { avatar: "a.png" },
  // no 'settings' key
};

// Old verbose style
if (user && user.settings && user.settings.theme) {
  console.log("Theme:", user.settings.theme);
} else {
  console.log("No theme (old style)");
}

// Optional chaining
console.log("Avatar:", user?.profile?.avatar);
console.log("Theme:", user?.settings?.theme ?? "default");

// ?? vs || difference
const zero = 0;
console.log("|| gives:", zero || "fallback");   // fallback (0 is falsy)
console.log("?? gives:", zero ?? "fallback");   // 0 (only null/undefined)

const empty = "";
console.log("|| gives:", empty || "fallback");
console.log("?? gives:", empty ?? "fallback");

// Deep API response access
const response = {
  data: { orders: [{ total: 42.5 }] },
};
const firstTotal = response?.data?.orders?.[0]?.total ?? 0;
console.log("First order total:", firstTotal);`,quiz:[{question:"What does ?. do when the chain hits a null value?",options:["Throws an error","Returns undefined and stops","Returns null","Retries"],correctIndex:1,explanation:"Optional chaining short-circuits to undefined instead of throwing."},{question:"What does ?? fallback to when the left side is 0?",options:["fallback","0","true","undefined"],correctIndex:1,explanation:"?? only triggers on null/undefined, so 0 is kept."}]},{slug:"map-set",title:"Map & Set",description:"Keyed collections with any value types.",content:`Map and Set are modern collections that improve on objects and arrays.

**Map - key-value with any key types**
Map keys can be objects or any type (object keys are strings). Order is preserved.

Creating:     const m = new Map();
Setting:      m.set("a", 1);
Getting:      m.get("a");
Checking:     m.has("a")
Deleting:     m.delete("a")
Size:         m.size
Iterating:    for (const [k, v] of m) { ... }
Create from pairs: new Map([["a",1],["b",2]])

**Map vs object**
- Keys: any type vs string-only
- Order: guaranteed vs mostly
- Performance: better for frequent add/delete
- JSON: objects serialize; Maps do not (convert manually)

**Set - unique values only**
Adding dupes is a no-op.
new Set([1,2,2,3])  ->  {1,2,3}
size, has, delete, add, clear.

**Automation note**
- Sets: dedupe a list of IDs or link texts
- Maps: cache lookup tables keyed by real objects`,codeExample:`// Map basics
const prices = new Map([
  ["apple", 1.2],
  ["banana", 0.8],
]);
prices.set("orange", 1.5);
prices.has("apple");
prices.delete("banana");
console.log("Size:", prices.size, "| apple:", prices.get("apple"));

// Iterate entries
for (const [key, value] of prices) {
  console.log("Item:", key, "->", value);
}

// Map with object keys
const clickCounts = new Map();
const btnA = { id: "a" };
const btnB = { id: "b" };
clickCounts.set(btnA, 3);
clickCounts.set(btnB, 1);
console.log("btnA clicks:", clickCounts.get(btnA));

// Set basics - deduplication
const withDuplicates = [1, 2, 2, 3, 3, 3];
const unique = new Set(withDuplicates);
console.log("Unique values:", [...unique]);

// Real-world: dedupe collected link texts
const links = ["Home", "Home", "About", "Contact", "Home"];
const seen = new Set();
for (const text of links) {
  if (!seen.has(text)) {
    seen.add(text);
    console.log("New link found:", text);
  }
}`,quiz:[{question:"What is unique about Map keys?",options:["They must be strings","They can be any type, including objects","They must be numbers","They are auto-sorted"],correctIndex:1,explanation:"Maps accept any value type as a key."},{question:"What does new Set([1,1,2,2,3]) contain?",options:["[1,1,2,2,3]","[1,2,3]","{1,2,2,3}","It errors"],correctIndex:1,explanation:"Sets only store unique values, duplicates are dropped."}]},{slug:"arrays-of-objects",title:"Arrays of Objects",description:"Table-like data: filter, sort, map real records.",content:`Most automation data looks like an array of objects - API results, table rows, config lists. This lesson combines everything you have learned.

**Shape**
const users = [
  { id: 1, name: "Ana", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
];

**Common operations**
- Get all names: users.map(u => u.name)
- Filter: users.filter(u => u.role === "admin")
- Find by id: users.find(u => u.id === 2)
- Sort: [...users].sort((a,b) => a.name.localeCompare(b.name))
- Total of a field: users.reduce((t,u) => t + u.age, 0)
- Grouping: reduce into a map/object by key

**Chaining**
data
  .filter(user => user.active)
  .map(user => user.email)
  .sort();

**Immutable updates**
const updated = users.map(u => u.id === 1 ? { ...u, role: "editor" } : u);

**Automation note**
Assert against this data: expect(sortedNames).toEqual(expectedNames). Build tests that consume JSON-like rows.`,codeExample:`const users = [
  { id: 1, name: "Ana", role: "admin", age: 30 },
  { id: 2, name: "Bob", role: "user", age: 17 },
  { id: 3, name: "Cid", role: "admin", age: 25 },
];

// Extract a column
console.log("Names:", users.map(u => u.name));

// Filter by role
const admins = users.filter(u => u.role === "admin");
console.log("Admins:", admins.map(u => u.name));

// Find single record
console.log("User 2:", users.find(u => u.id === 2).name);

// Sort by name
const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted names:", sorted.map(u => u.name));

// Total age with reduce
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log("Total age:", totalAge);

// Chained pipeline
const adultEmails = users
  .filter(u => u.age >= 18)
  .map(u => u.name.toLowerCase() + "@test.com")
  .sort();
console.log("Adult emails:", adultEmails);

// Immutable update of one record
const updated = users.map(u => (u.id === 2 ? { ...u, age: 18 } : u));
console.log("Bob's new age:", updated.find(u => u.id === 2).age);`,quiz:[{question:"Which pipeline gets ALL admins' emails?",options:["users.filter(u => u.role === 'admin').map(u => u.email)","users.map(u => u.email).filter(u => u.role)","users.find(u => u.role)","users.reduce(u => u.email)"],correctIndex:0,explanation:"Filter by role first, then map to the email column."},{question:"How do you update ONE record immutably in an array?",options:["arr[0].role = 'x'","arr.map(u => u.id === 1 ? { ...u, role: 'x' } : u)","arr = other","update(arr, 1)"],correctIndex:1,explanation:"map returns a new array; spread keeps other fields; conditional picks the target."}]}]},{slug:"async",title:"Async JavaScript",icon:"alert-triangle",description:"Promises, async/await, fetch, and the event loop.",level:"advanced",lessons:[{slug:"async-basics",title:"Asynchronous Basics",description:"Sync vs async, timers, and why async matters.",content:`JavaScript runs on a single thread. Asynchronous code lets it wait for slow operations (network, timers, file I/O) without blocking everything else.

**Synchronous**
const a = doThing();       // waits until doThing finishes
console.log(a);

**Asynchronous**
setTimeout(() => console.log("later"), 1000);  // doesn't block
console.log("now");

**Examples of async operations**
- Network requests (fetch, API calls)
- Timers (setTimeout, setInterval)
- Reading files
- Waiting for page elements in Playwright
- Database queries

**How the engine does it**
The call stack runs sync code. Async callbacks go to a task queue. The event loop keeps pushing callbacks back onto the stack when it is free. So 'later' always runs after 'now'.

**Result**
- Code never blocks the UI/browser
- Order is NOT guaranteed without coordination
- Coordination is done with callbacks, then Promises, then async/await

**Automation note**
Playwright locators are async: await page.locator().click(). Errors in async code need await or the failure looks confusing.`,codeExample:`// Sync order
console.log("1. sync start");

// Async - runs later
setTimeout(() => {
  console.log("3. timer finished (async)");
}, 0);
setTimeout(() => {
  console.log("4. another timer (1s)");
}, 1000);

// Immediate microtask (Promises) - runs BEFORE timers
Promise.resolve().then(() => {
  console.log("2. microtask (Promise)");
});

console.log("1b. sync end — after this the event loop starts");
// Expected order: sync start, sync end, microtask, timers`,quiz:[{question:"Why does JavaScript need async code?",options:["To run on multiple threads","To wait for slow operations without blocking","To make code shorter","It does not need it"],correctIndex:1,explanation:"Async lets single-threaded JS wait on I/O/network without freezing."},{question:"Which runs first: a Promise microtask or a setTimeout callback?",options:["Promise microtask","setTimeout callback","They run together","Random order"],correctIndex:0,explanation:"Microtasks (Promises) are processed before the next macrotask (timer)."}]},{slug:"promises",title:"Promises",description:"then, catch, finally, and promise chaining.",content:`A Promise represents a value that may be available now, later, or never. It lets you write async flows without nested callbacks.

**States**
- pending: work in progress
- fulfilled: value ready (onFulfilled handlers)
- rejected: error occurred (onRejected handlers)

**Creating**
const p = new Promise((resolve, reject) => {
  // do work
  if (ok) resolve(value);
  else reject(new Error("fail"));
});

**Consuming**
p
  .then(value => ...)
  .catch(err => ...)
  .finally(() => ...);   // clean-up, always runs

**Chaining**
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => render(posts))
  .catch(err => showError(err));

**Combinators**
Promise.all([a, b])       // wait for ALL, fail fast on rejection
Promise.allSettled([a, b])// wait for ALL, report each result
Promise.race([a, b])      // first to settle

**Promise.all in automation**
Run several API assertions in parallel, or wait for multiple elements.

**then value vs callback hell**
Promises flatten nesting: one level instead of pyramids.`,codeExample:`// Create a promise
function wait(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

wait(100, "ready")
  .then((msg) => {
    console.log("First:", msg);
    return wait(100, "second step");
  })
  .then((msg) => console.log("Then:", msg))
  .catch((err) => console.log("Error:", err))
  .finally(() => console.log("Cleanup ran"));

// Rejection handling
function mayFail(flag) {
  return new Promise((resolve, reject) => {
    if (flag) resolve("success");
    else reject(new Error("boom"));
  });
}
mayFail(false)
  .then(console.log)
  .catch((err) => console.log("Caught:", err.message));

// Promise.all - parallel, one result array
Promise.all([
  wait(50, { id: 1, name: "Ana" }),
  wait(80, { id: 2, name: "Bob" }),
]).then(([first, second]) => {
  console.log("All resolved:", first.name, second.name);
});

// Promise.allSettled - reports failures too
Promise.allSettled([mayFail(true), mayFail(false)]).then((results) =>
  results.forEach((r) => console.log("Settled:", r.status))
);`,quiz:[{question:"What are the three states of a Promise?",options:["pending, fulfilled, rejected","start, middle, end","open, closed, error","wait, done, done"],correctIndex:0,explanation:"A promise starts pending and settles to fulfilled or rejected."},{question:"What does Promise.all do?",options:["Waits for all promises, failing fast on rejection","Runs them one at a time","Returns only the first result","Cancels all promises"],correctIndex:0,explanation:"Promise.all resolves when every promise resolves; it rejects as soon as one rejects."}]},{slug:"async-await",title:"async / await",description:"Promise syntax sugar that reads like sync code.",content:`async/await is modern JavaScript's way to consume promises without .then chains. It reads top-to-bottom like regular code while staying non-blocking.

**Syntax**
async function loadUser() {
  const user = await fetchUser();
  console.log(user);
}

- async before a function makes it ALWAYS return a Promise
- await pauses the function until the promise settles (does NOT block the thread)
- await only works INSIDE async functions (or top-level in modules)

**Error handling with try/catch**
async function safe() {
  try {
    const user = await fetchUser();
  } catch (err) {
    console.error("failed:", err);
  }
}

**Parallel execution**
const [a, b] = await Promise.all([fetchA(), fetchB()]);

**Not needed to await every time**
const p = fetchA();          // starts now
const q = fetchB();          // runs concurrently
const a = await p; const b = await q;

**Sequential vs parallel**
await a(); await b();       // ~sum of times
Promise.all                    // ~max of times

**Automation note**
Playwright's whole API is async: await page.goto(...), await expect(...).toBeVisible(). Structure test steps as async functions.`,codeExample:`// Simulated async helpers
const wait = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

// async function returns a Promise
async function getUser() {
  await wait(50, null);
  return { id: 1, name: "Ana" };
}

getUser().then((u) => console.log("user:", u.name));

// async/await style + try/catch
async function runTest() {
  try {
    console.log("Test: navigating...");
    const page = await wait(100, { title: "Login" });
    const input = await wait(50, "admin");
    console.log("Title:", page.title, "| Input:", input);
    return "PASSED";
  } catch (err) {
    console.log("FAILED:", err.message);
    return "FAILED";
  }
}

// Run it and use the returned promise value
runTest().then((result) => console.log("Result:", result));

// Sequential vs parallel
async function timing() {
  const t0 = Date.now();
  // parallel: both start together
  const [a, b] = await Promise.all([wait(100, "A"), wait(100, "B")]);
  console.log("Parallel took ~" + (Date.now() - t0) + "ms:", a, b);
}
timing();`,quiz:[{question:"What does the await keyword do?",options:["Blocks the entire program","Pauses the async function until the promise settles","Creates a new thread","Converts sync to async"],correctIndex:1,explanation:"await suspends the async function only, not the whole thread."},{question:"Where can await be used?",options:["Anywhere","Only inside async functions (or modules)","Only in callbacks","Only in arrow functions"],correctIndex:1,explanation:"await is only valid inside async functions or top-level module code."}]},{slug:"fetch-apis",title:"fetch & Working with Real APIs",description:"HTTP requests, JSON handling, and error checks.",content:`fetch is the built-in function for making HTTP requests in the browser and modern Node.

**Basic GET that returns JSON**
const response = await fetch(url);
const data = await response.json();

**Important checks**
- fetch only rejects on NETWORK errors, NOT on HTTP errors (404, 500)
- Always check response.ok first:
  if (!response.ok) throw new Error("HTTP " + response.status);

**Other methods**
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ana" }),
});

**Common verbs for API testing**
GET - read
POST - create
PUT/PATCH - update
DELETE - remove

**JSON conversion**
JSON.stringify(obj)  -> string
JSON.parse(str)      -> object

**Automation note**
This is the heart of API testing. Flow:
1. Build request
2. Assert response.status
3. Parse JSON body
4. Assert fields in the body
5. Verify side effects

**Query params**
fetch(url + "?" + new URLSearchParams({ q: "x" }))`,codeExample:`// NOTE: this runs in the CodeEditor sandbox. A real URL may be blocked
// by CORS, so we simulate a fetch against a local function instead.

function fakeApi(url, options) {
  return new Promise((resolve) => {
    const ok = url.includes("users");
    setTimeout(() => {
      resolve({
        ok,
        status: ok ? 200 : 404,
        async json() {
          return ok ? { users: ["Ana", "Bob"] } : { error: "not found" };
        },
      });
    }, 100);
  });
}

async function apiTest() {
  const url = "https://api.test.com/users?id=1";
  const response = await fakeApi(url);

  // Real code does: if (!response.ok) throw ...
  if (!response.ok) {
    console.log("HTTP error:", response.status);
    return;
  }
  const data = await response.json();
  console.log("Status:", response.status);
  console.log("Total users:", data.users.length);

  // Assert the payload
  const expected = 2;
  console.log("Count matches:", data.users.length === expected);
  console.log("Has 'Ana':", data.users.includes("Ana"));
}

apiTest();

// JSON conversions - transform objects to strings and back
const payload = { name: "Ana", role: "admin" };
const asString = JSON.stringify(payload);
console.log("Stringified:", asString);
console.log("Parsed back:", JSON.parse(asString));`,quiz:[{question:"When does fetch reject its promise?",options:["On HTTP 404","On network-level failures only","On HTTP 500","When JSON is missing"],correctIndex:1,explanation:"fetch only rejects on network errors. HTTP statuses must be checked via response.ok."},{question:"What does JSON.stringify do?",options:["Parses text into objects","Turns an object into a JSON string","Validates an API","Formats code"],correctIndex:1,explanation:"stringify serializes to a string; parse is the reverse."}]},{slug:"event-loop",title:"The Event Loop",description:"How single-threaded JS stays responsive.",content:`The event loop is the runtime engine that lets single-threaded JavaScript handle many async operations. Interviewers love this topic.

**The pieces**
1. Call stack - runs functions one at a time (LIFO)
2. Web APIs / Node APIs - timers, fetch, DOM events live here
3. Task queue (macrotasks) - setTimeout, setInterval, I/O callbacks
4. Microtask queue - Promise handlers (.then, await continuation), queueMicrotask

**The loop in action**
while (stack !== empty || queues !== empty) {
  1. Run the call stack clean
  2. Run ALL microtasks (Promise callbacks update state, then DOM rerenders)
  3. Run ONE macrotask (next timer callback)
  4. Repeat
}

**Key ordering rule**
Microtasks drain BEFORE the next macrotask. So:
console.log(1);
Promise.resolve().then(() => console.log(2));
setTimeout(() => console.log(3), 0);
// prints 1, 2, 3

**Why it matters**
- Ordering of test logs and awaits
- Understanding why small delays sometimes fix flaky tests
- Explaining blocking vs non-blocking

**Blocking the loop**
A long synchronous for loop in call stack blocks everything - that is what 'blocking' means. Async only helps when you don't block the stack.`,codeExample:`console.log("1 - sync");

setTimeout(() => console.log("5 - macrotask timer"), 0);

Promise.resolve("2 - microtask").then((msg) => console.log(msg));

queueMicrotask(() => console.log("3 - another microtask"));

setTimeout(() => console.log("6 - second macrotask"), 0);

console.log("4 - sync end");
// Expected output order:
// 1, 4, 2, 3, 5, 6
// Why: all sync first, then all microtasks, then macrotasks one at a time.

// Practical: heavy sync work blocks timers
function blockForClick() {
  const start = Date.now();
  while (Date.now() - start < 200) {
    // busy loop - blocks the event loop for 200ms
  }
  console.log("Blocking task finished");
}

setTimeout(() => console.log("timer ran at ~200ms"), 50);
console.log("Blocking started...");
blockForClick();
console.log("Sync continues after block; timer queued and runs next");`,quiz:[{question:"Which runs before the other: microtasks or macrotasks?",options:["Macrotasks always","Microtasks drain before the next macrotask","They alternate equally","Randomized"],correctIndex:1,explanation:"The event loop drains the whole microtask queue before each macrotask."},{question:"What lives on the call stack?",options:["Timers","Functions currently executing","Promise callbacks waiting","HTTP responses"],correctIndex:1,explanation:"The call stack holds only what is currently executing."}]}]},{slug:"classes",title:"Classes & Prototypes",icon:"book-open",description:"Classes, inheritance, prototypes, and JSON.",level:"advanced",lessons:[{slug:"class-basics",title:"Class Basics",description:"Class syntax, constructors, methods, and static.",content:`Classes are a modern way to write constructor-style objects. Underneath they still use prototypes, but the syntax is cleaner.

**Declaring a class**
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi " + this.name;
  }
}

- constructor runs once when you do new User("Ana")
- this refers to the future instance
- Methods are shared, not copied per instance

**Using it**
const user = new User("Ana");
user.name;        // "Ana"
user.greet();     // "Hi Ana"

**Fields (public class fields)**
class User {
  role = "user";          // set on every instance
  constructor(name) { this.name = name; }
}

**Getters and setters**
get fullName() { return this.first + " " + this.last; }

**Static members**
Static belongs to the class, not the instance:
User.compare(a, b) -> User.compare is called, not user.compare.

**Automation note**
Page Object Model: class LoginPage { constructor(page){...} async login(user){...} } - each page is a class, each action a method.`,codeExample:`class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.role = "user";
  }
  get fullName() {
    return this.first + " " + this.last;
  }
  greet() {
    return "Hello, " + this.fullName;
  }
  static compare(a, b) {
    return a.first.localeCompare(b.first);
  }
}

// Instance usage
const ana = new User("Ana", "Ionescu");
console.log(ana.greet());
console.log("Role:", ana.role);

// Getter acts like a property
console.log("Full name:", ana.fullName);

// Static: called on the class
const bob = new User("Bob", "Popa");
const sorted = [ana, bob].sort(User.compare);
console.log("Sorted:", sorted.map((u) => u.first).join(", "));

// instanceof check
console.log("Is instance:", ana instanceof User);

// Page-object-style class sketch (automation analogy)
class LoginPage {
  constructor() {
    this.logins = 0;
  }
  async fillCredentials(user, pass) {
    this.logins++;
    return "filled " + user;
  }
  async submit() {
    return this.logins > 0 ? "submitted" : "nothing to submit";
  }
}
const page = new LoginPage();
page.fillCredentials("admin", "secret").then((r) => console.log("step:", r));
page.submit().then((r) => console.log("next:", r));`,quiz:[{question:"What runs when you create new User('Ana')?",options:["A static method","The constructor","A getter","Nothing"],correctIndex:1,explanation:"new invokes the constructor to set up the instance."},{question:"When should you use a static method?",options:["When it needs instance data","When it relates to the class, not instances","For every method","Never"],correctIndex:1,explanation:"Static methods live on the class itself and don't receive this."}]},{slug:"class-inheritance",title:"Class Inheritance",description:"extends, super, and method overriding.",content:`Inheritance lets a class reuse and extend another class. This maps perfectly to automation: a base Test class with setup, specialized page classes extending a common base.

**extends**
class Animal {
  constructor(name) { this.name = name; }
  speak() { return "..." }
}
class Dog extends Animal {
  speak() { return "Woof"; }
}

**super**
- super(...args) in the constructor: call the parent constructor
- super.method() in a method: call the parent version

**Example hierarchy**
class BasePage {
  constructor(url) { this.url = url; }
  open() { return "opening " + this.url; }
}
class LoginPage extends BasePage {
  constructor() { super("/login"); }
  submit() { return "Logging in"; }
}

**Why overwrite?**
Override to change behavior, then optionally call super to keep parent behavior.

**Check instanceof**
loginPage instanceof BasePage  // true (inheritance chain)

**Automation note**
- BasePage defines common steps (navigation, wait)
- Page classes extend it and add page-specific actions
- A base Playwright test class can hold hooks and logging`,codeExample:`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}

class Dog extends Animal {
  speak() {
    return this.name + " barks";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.lives = 9;
  }
  speak() {
    return super.speak() + " - meow";
  }
}

const dog = new Dog("Rex");
const cat = new Cat("Mimi");
console.log(dog.speak());
console.log(cat.speak());

// Inheritance chain + instanceof
console.log("dog is Animal:", dog instanceof Animal);
console.log("cat is Animal:", cat instanceof Animal);

// Automation-flavored: base page + specialized page
class BasePage {
  constructor(url) {
    this.url = url;
  }
  open() {
    return "Navigating to " + this.url;
  }
}
class LoginPage extends BasePage {
  constructor() {
    super("https://app.test/login");
  }
  open() {
    return super.open() + " (with auth cookie)";
  }
}
const login = new LoginPage();
console.log(login.open());`,quiz:[{question:"What does super() do in a subclass constructor?",options:["Deletes the parent","Calls the parent constructor","Creates a new class","Nothing"],correctIndex:1,explanation:"super(...) invokes the parent class constructor for proper initialization."},{question:"loginPage instanceof BasePage is true when?",options:["Always","When LoginPage extends BasePage","Never","Only in strict mode"],correctIndex:1,explanation:"instanceof follows the prototype chain, so subclasses match their base."}]},{slug:"prototypal-inheritance",title:"Prototypal Inheritance",description:"The prototype chain that powers everything.",content:`Classes are syntax sugar. Underneath, JavaScript uses prototypes: objects inherit from other objects through a chain.

**Every object has a prototype**
Roughly: {}.__proto__ -> Object.prototype
In modern code, use Object.getPrototypeOf(obj) instead of __proto__.

**The chain**
const user = { name: "Ana" };
user.toString();   // found on Object.prototype via the chain

- user -> User.prototype -> Object.prototype -> null
- Property lookup walks the chain until found or object is null.

**Object.create(proto)**
const base = { greet() { return "hi"; } };
const child = Object.create(base);
child.greet();   // inherits from base

**Adding methods (legacy pattern)**
function User(name) { this.name = name; }
User.prototype.sayHi = function () { return "Hi " + this.name; };

**constructor proper**
User.prototype.constructor === User;  // set a new prototype's constructor back

**Modern take**
You rarely write prototypes by hand. But knowing the chain explains how arrays get .map, how classes inherit, and how 'this' behaves - and it is a classic interview topic.`,codeExample:`// Prototype chain demonstration
const user = { name: "Ana" };
console.log("has toString via chain:", typeof user.toString === "function");
console.log("proto is Object.prototype:", Object.getPrototypeOf(user) === Object.prototype);

// Object.create - inherit from a plain object
const base = {
  greet() {
    return "Hi, " + this.name;
  },
};
const member = Object.create(base);
member.name = "Bob";
console.log(member.greet()); // method found on the prototype

// Legacy constructor + prototype method
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function () {
  return "Hello " + this.name;
};
const a = new User("Ana");
console.log(a.sayHi());
console.log("method lives on User.prototype:", a.sayHi.name === "sayHi");

// The full chain from an array
const nums = [1, 2, 3];
console.log("arrays get map via chain:",
  Array.prototype.map === nums.map === null ||
  Object.getPrototypeOf(nums) === Array.prototype);

// Own properties vs inherited
const ownUser = { name: "Ana" };
console.log("own property:", Object.hasOwn(ownUser, "name"));      // true
console.log("inherited:", Object.hasOwn(ownUser, "toString"));     // false`,quiz:[{question:"When you access an object property, JS checks:",options:["Only the object itself","The object, then up the prototype chain","Only the prototype","The global object"],correctIndex:1,explanation:"Lookup goes up the prototype chain until found or reaching null."},{question:"Where do array methods like map come from?",options:["Each array copies them","Array.prototype via the chain","The global scope","The array literal"],correctIndex:1,explanation:"Arrays inherit their methods from Array.prototype."}]},{slug:"json",title:"Working with JSON",description:"Serialization, parsing, and JSON in automation.",content:`JSON is the language of web APIs and config files. Almost every automation task involves parsing or producing JSON.

**Shape reminder**
{ "name": "Ana", "age": 30, "tags": ["a", "b"] }
Keys must be double-quoted. No comments, no trailing commas, no undefined/functions.

**The built-ins**
JSON.stringify(value)  -> JSON string
JSON.parse(text)       -> value
JSON.stringify(value, null, 2)  -> pretty-printed (indent 2)

**gotchas of stringify**
- undefined and functions are dropped inside objects
- Dates become strings
- NaN and Infinity become null

**Comparing two JSON payloads**
JSON.stringify(a) === JSON.stringify(b)  // ORDER matters - brittle. Prefer deep-equality tools like expect(a).toEqual(b) in Playwright.

**JSON in automation**
- API request bodies: JSON.stringify(payload)
- Response bodies: res.json()
- Config files: import/parse userData.json
- Snapshots / fixtures

**safe parse**
try { JSON.parse(text) } catch (err) { ... } - malformed JSON throws.`,codeExample:`const user = {
  name: "Ana",
  age: 30,
  tags: ["admin", "automation"],
  active: true,
};

// Stringify variants
console.log("Compact:", JSON.stringify(user));
console.log("Pretty:");
console.log(JSON.stringify(user, null, 2));

// Parse back
const text = '{"name":"Bob","age":25}';
const parsed = JSON.parse(text);
console.log("Parsed name:", parsed.name);

// Drops undefined / functions
const tricky = { a: 1, fn() {}, b: undefined };
console.log("Clean JSON:", JSON.stringify(tricky)); // only "a"

// Deep compare two payloads
const first = { id: 1, name: "Ana" };
const second = JSON.parse(JSON.stringify(first));
console.log("Deep equal via stringify:", JSON.stringify(first) === JSON.stringify(second));

// Safe parse
function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    return { error: "invalid json" };
  }
}
console.log("Bad JSON handled:", safeParse("{oops").error);

// Config-style usage
const apiPayload = JSON.stringify({ user: "admin", remember: true });
console.log("Request body:", apiPayload);`,quiz:[{question:"How do you pretty-print JSON?",options:["JSON.stringify(value, null, 2)","JSON.pretty(value)","JSON.stringify()","console.json(value)"],correctIndex:0,explanation:"The third argument of stringify sets the indentation."},{question:"What happens to JSON.parse on malformed input?",options:["Returns null","Throws an error (wrap in try/catch)","Returns the text","Ignores the problem"],correctIndex:1,explanation:"Invalid JSON throws a SyntaxError, so guard it."}]}]},{slug:"dom",title:"DOM & Browser APIs",icon:"layout-grid",description:"Selecting, building, and testing page elements.",level:"intermediate",lessons:[{slug:"dom-basics",title:"DOM Basics",description:"window, document, and the DOM tree.",content:`The DOM (Document Object Model) is a tree representation of the HTML page. JavaScript manipulates this tree to make pages dynamic.

**The entry points**
- window: the browser window (global object in browsers)
- document: the whole page - the tree root
- document.title, document.URL, document.querySelector(...)

**Nodes and elements**
The tree is made of nodes. Elements (tags) are the nodes you care about most: div, button, input, form...

**Parent and children**
div has parentElement, children, childNodes, firstElementChild, lastElementChild.

**Traversal example**
document.body.children  // direct child elements
tag.parentElement       // one level up

**Key difference vs other languages**
You don't 'return' the DOM; browsers give you live references. If the page changes, the old reference may become stale.

**Automation note**
Playwright queries the DOM behind the scenes. Knowing the DOM helps you write better selectors and understand why locators behave oddly. The tools used here (querySelector) mirror what CSS selectors do.`,codeExample:`// NOTE: In the CodeEditor sandbox there is NO real browser DOM.
// We simulate a tiny DOM-ish structure to practice the ideas.
const doc = {
  title: "Example Page",
  body: {
    tagName: "BODY",
    children: [
      { tagName: "HEADER", id: "top", textContent: "Site header" },
      { tagName: "MAIN", id: "content", children: [
        { tagName: "BUTTON", id: "submit-btn", textContent: "Submit" },
        { tagName: "INPUT", id: "email", value: "a@test.com" },
      ]},
    ],
  },
};

console.log("Title:", doc.title);

// Walk the "tree"
const body = doc.body;
for (const child of body.children) {
  console.log("Top-level tag:", child.tagName + " (id=" + child.id + ")");
}

// Nested access: find then descend
const main = body.children.find((c) => c.tagName === "MAIN");
const button = main.children.find((c) => c.tagName === "BUTTON");
console.log("Button text:", button.textContent, "| id:", button.id);

// Reading a form value (like reading a field in a test)
const input = main.children.find((c) => c.tagName === "INPUT");
console.log("Email field holds:", input.value);`,quiz:[{question:"What does the DOM represent?",options:["A database","The HTML page as a tree of nodes","The server","A network protocol"],correctIndex:1,explanation:"The DOM models the page as an object tree you can manipulate."},{question:"What is the root of the page tree?",options:["window","document","body","html"],correctIndex:1,explanation:"document is the entry point; html is a node inside it."}]},{slug:"dom-selection",title:"Selecting Elements",description:"querySelector, getElementById, and going further.",content:`Selection is how you grab elements to act on them. The tools you use here are the CSS selector engine that automation frameworks also use.

**The main APIs**
document.getElementById("x")
document.querySelector(".class")     // first match
document.querySelectorAll("li.task") // all matches -> NodeList
document.querySelector(".list li")   // nested descendant selector

**Selectors in detail**
- #id
- .class
- tag
- [attribute="value"]
- :checked, :disabled, :nth-child(2)
- .parent > .child (direct),  .parent .child (descendant)

**From an element**
const box = document.querySelector(".box");
box.querySelector("span")   // search WITHIN box

**querySelectorAll result**
A NodeList - use for...of or Array.from() to get real array methods (map/filter).

**Automation note**
Playwright uses the same CSS selectors. Data-testid attributes like desktop testing gold standard: [data-testid="submit"] is robust against UI changes.`,codeExample:`// Simulated DOM matching for practice (real code uses querySelector)
function findMany(nodes, test) {
  return nodes.flatMap((n) => findManyRec(n, test));
}
function findManyRec(node, test) {
  const hits = (node.children || []).filter(test);
  return hits.concat((node.children || []).flatMap((c) => findManyRec(c, test)));
}

const doc = {
  children: [
    { tagName: "DIV", id: "header", className: "page-head", children: [
      { tagName: "BUTTON", className: "btn", textContent: "Menu" },
    ]},
    { tagName: "UL", className: "task-list", children: [
      { tagName: "LI", className: "task", textContent: "Task 1" },
      { tagName: "LI", className: "task done", textContent: "Task 2" },
    ]},
  ],
};

// Like querySelectorAll("li.task")
const tasks = findMany(doc.children, (n) => n.tagName === "LI" && n.className.includes("task"));
console.log("LI tasks:", tasks.map((t) => t.textContent));

// Like querySelector(".task.done")
const done = tasks.find((t) => t.className.includes("done"));
console.log("Done task:", done.textContent);

// In a real browser you would write:
// const list = document.querySelectorAll("li.task");
// const doneAlt = document.querySelector(".task.done");
console.log("Selector loaded: li.task found " + tasks.length + " item(s)");
console.log("Selector loaded: .task.done found " + (done ? 1 : 0) + " item(s)");`,quiz:[{question:"Which selector matches elements with id='submit'?",options:[".submit","#submit","submit","id=submit"],correctIndex:1,explanation:"# tells querySelector to match an ID."},{question:"What does querySelectorAll return?",options:["A single element","A NodeList of matches","An array always","An HTML string"],correctIndex:1,explanation:"querySelectorAll returns a NodeList (array-like)."}]},{slug:"dom-manipulation",title:"Changing the DOM",description:"Creating, editing, and removing elements.",content:`Once you have an element, you can read and change it. These APIs let you build dynamic UIs - and also let automation read page state.

**Reading and setting text**
element.textContent        // set or get plain text
element.innerHTML          // set or get HTML (avoid for user input - XSS risk)
element.value              // form field value

**CSS classes and styles**
element.classList.add("active")
element.classList.remove("active")
element.classList.toggle("active")
element.classList.contains("hidden")
element.style.display = "none"
element.getAttribute("href") / element.setAttribute(...)

**Structure**
element.append(newChild)   // add at end
element.prepend(newChild)  // add at start
child.remove()             // delete the node

**Creating elements**
const el = document.createElement("li");
el.textContent = "new item";
list.append(el);

**Data-* attributes**
element.dataset.testid = "submit-btn";   // mixes well with automation

**Automation note**
Frameworks like Playwright essentially perform these reads: textContent, value, class attributes, dataset.testid. Assert against these:
expect(await element.textContent()).toBe("Submit");`,codeExample:`// Simulating the DOM mutation APIs for practice
function makeEl(tag, text) {
  return { tagName: tag, textContent: text || "", classList: new Set(), children: [] };
}

const list = makeEl("UL", "");
list.children.push(makeEl("LI", "one"));
list.children.push(makeEl("LI", "two"));

// Read text of first item
console.log("First item:", list.children[0].textContent);

// Add a child (like append)
list.children.push(makeEl("LI", "three"));
console.log("Items now:", list.children.map((c) => c.textContent).join(", "));

// Edit in place (setAttribute-style)
list.children[1].textContent = "two-updated";
console.log("After edit:", list.children.map((c) => c.textContent).join(", "));

// Class toggling (like classList)
list.classList.add("task-list", "visible");
list.classList.delete("visible");
console.log("Class list:", [...list.classList].join(" "));

// Remove an element (like remove())
list.children.splice(0, 1);
console.log("After remove:", list.children.map((c) => c.textContent).join(", "));

// In a real browser you write:
// document.querySelector("li").textContent = "changed";
// document.querySelector("li").classList.add("active");
// document.createElement("li"); list.append(li);
console.log("Browser flow: createElement -> append -> textContent");`,quiz:[{question:"Which property safely sets plain text on an element?",options:["innerHTML","textContent","value","style"],correctIndex:1,explanation:"textContent treats the string as text (innerHTML risks XSS)."},{question:"How do you add a CSS class to an element?",options:["element.class = 'x'","element.classList.add('x')","element.setClass('x')","class(element, 'x')"],correctIndex:1,explanation:"classList.add manages classes safely."}]},{slug:"events",title:"Events",description:"click, submit, listeners, bubbling, delegates.",content:`Events fire when users interact with the page. Understanding them helps you test interactions reliably.

**Common events**
mouse: click, dblclick, mouseover, mousedown, mouseup
keyboard: keydown, keyup, keypress
form: submit, change, input, focus, blur
page: DOMContentLoaded, load, scroll, resize

**Adding listeners**
element.addEventListener("click", handler);
element.addEventListener("click", handler, { once: true });
Inline: onclick=... (avoid mixing with automation)

**Removing**
element.removeEventListener("click", handler);

**The event object**
args.handler receives the event (e):
- e.target - element clicked
- e.type - "click"
- e.preventDefault() - stop default action (form submit)
- e.stopPropagation() - stop bubbling

**Two event helpers (legacy but still seen)**
onclick="fn()"  and  element.onclick = fn  - replace on with 'on' + type.

**Bubbling**
An event fires on its target, then bubbles UP through parents. Useful for delegated handling.

**Automation note**
Automation triggers real events: page.click('button') dispatches a click the browser can observe. Add event listeners to spy during tests, or to prove a callback fires: set a flag when clicked.`,codeExample:`// Simulating the event-object pattern for practice
class FakeEventTarget {
  constructor() {
    this.handlers = {};
  }
  addEventListener(type, fn) {
    (this.handlers[type] = this.handlers[type] || []).push(fn);
  }
  dispatch(type) {
    (this.handlers[type] || []).forEach((fn) =>
      fn({ type, target: this, preventDefault() {}, stopPropagation() {} })
    );
  }
}

const button = new FakeEventTarget();
let clickedCount = 0;
let lastTarget = null;

button.addEventListener("click", (e) => {
  clickedCount++;
  lastTarget = e.type;
});

button.dispatch("click");
button.dispatch("click");
console.log("Clicks heard:", clickedCount, "| last event type:", lastTarget);

// preventDefault stops form submission
const form = new FakeEventTarget();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submit intercepted (default prevented)");
});
form.dispatch("submit");

// Real browser equivalent:
// document.querySelector("#btn").addEventListener("click", handler);
// form.addEventListener("submit", (e) => e.preventDefault());
// In a test: page.click("button#submit") fires the same "click" event.`,quiz:[{question:"What does e.preventDefault() do?",options:["Stops the script","Cancels the browser's default action","Deletes the element","Stops the event loop"],correctIndex:1,explanation:"preventDefault cancels default behavior like form submission."},{question:"What is event bubbling?",options:["Events firing multiple times","An event traveling from target up to ancestors","Slower events","Events going down the tree only"],correctIndex:1,explanation:"After firing on the target, events bubble up through ancestors."}]},{slug:"forms",title:"Forms",description:"Filling, reading, and validating form data.",content:`Forms are everywhere in automation: login, checkout, search. You need to fill them and read their values.

**Getting a field**
const email = document.querySelector("#email");
email.value = "a@test.com";         // set
const val = email.value;            // read

**input types you will automate**
- text / email / password: value property
- checkbox / radio: field.checked
- select (dropdown):
  const sel = document.querySelector("select");
  sel.value = "opt2";               // set by value
  const chosen = sel.value;
- textarea: .value like inputs
- number / range: .value as string - convert with parseInt

**Events when filling**
Setting .value programmatically does NOT fire input events.
In automation frameworks like Playwright, fill() sets value AND fires the right events - which is why you should use the tool, not raw JS.

**Read the form state**
const disabled = btn.disabled;   // boolean
const required = input.required;
const formValid = form.checkValidity();

**Automation note**
The classic login flow test:
1. fill username + password
2. click submit
3. assert success message
4. read any persisted value`,codeExample:`// Simulated form values for practice
const form = {
  email: { value: "", checked: false },
  password: { value: "" },
  newsletter: { checked: false },
  plan: { value: "free" },
  submitDisabled: true,
};

// Fill fields (like fill("#email", "a@test.com"))
form.email.value = "a@test.com";
form.password.value = "secret123";
form.newsletter.checked = true;
form.plan.value = "pro";
form.submitDisabled = false;

console.log("Email:", form.email.value);
console.log("Newsletter checked:", form.newsletter.checked);
console.log("Plan selected:", form.plan.value);
console.log("Submit enabled:", !form.submitDisabled);

// Assert style - a test assertion
const expectedEmail = "a@test.com";
console.log("Email matches:", form.email.value === expectedEmail);

// Convert number-ish values
const quantity = "3";
console.log("Quantity + 1 =", parseInt(quantity, 10) + 1);

// Real browser flow:
// await page.locator("#email").fill("a@test.com");
// await page.locator("#plan").selectOption("pro");
// await page.locator("button[type=submit]").click();`,quiz:[{question:"Which property holds a checkbox's state?",options:["value","checked","selected","state"],correctIndex:1,explanation:"checked is the boolean state for checkboxes and radios."},{question:"Why use fill() instead of setting .value directly?",options:["It's faster","It fires the proper events automation needs","It's the only way","No reason"],correctIndex:1,explanation:"fill() sets the value and dispatches input/change events."}]},{slug:"window-object",title:"Window Object",description:"The global object, navigation, and browser APIs.",content:`window is the browser's global object. Every global variable and function becomes a property of window. It holds the location, history, and many browser APIs.

**Globals live on window**
window.alert, window.console, window.setTimeout, window.fetch
globalThis === window  (the universal name in Node too)

**Location** (page URL tools)
window.location.href        // full URL
window.location.pathname    // "/login"
window.location.search      // "?id=5"
window.location.reload()    // reload
window.location.href = url  // navigate

**History**
window.history.back(), history.forward(), pushState for SPA routes

**Useful browser APIs**
window.localStorage / sessionStorage
storage.setItem(key, value); storage.getItem(key); storage.removeItem(key)

**Timers**
setTimeout(fn, ms) / clearTimeout(id)
setInterval(fn, ms) / clearInterval(id)

**Window-sizing**
window.innerWidth, window.innerHeight, window.matchMedia() for responsive tests

**Automation note**
- Check URL after navigation: expect(page).toHaveURL(/login/)
- Test responsive layouts via viewport width
- Seed/clear localStorage between tests`,codeExample:`// Simulated window-ish object to demonstrate concepts
const windowLike = {
  innerWidth: 1280,
  location: { href: "https://app.test/login?id=1", pathname: "/login", search: "?id=1" },
  localStorage: new Map(),
};

console.log("Size:", windowLike.innerWidth + "px wide");
console.log("Path:", windowLike.location.pathname);
console.log("Query:", windowLike.location.search);
console.log("Full URL:", windowLike.location.href);

// localStorage-like usage
windowLike.localStorage.set("token", "abc123");
console.log("Stored token:", windowLike.localStorage.get("token"));
windowLike.localStorage.delete("token");
console.log("After clear:", windowLike.localStorage.get("token") || "none");

// URL building with query params (typical automation task)
function buildUrl(base, params) {
  const qs = Object.entries(params)
    .map(([k, v]) => k + "=" + v)
    .join("&");
  return qs ? base + "?" + qs : base;
}
console.log("Built:", buildUrl("https://api.test.com/users", { page: 2, size: 25 }));

// Timers
let count = 0;
const timer = setInterval(() => {
  count++;
  console.log("Interval tick", count);
  if (count === 2) clearInterval(timer);
}, 50);`,quiz:[{question:"What is the window object in browsers?",options:["The global object holding most browser APIs","A DOM element","A style rule","The printer"],correctIndex:0,explanation:"window is the global object; globals and browser APIs live on it."},{question:"Which window object holds the page URL?",options:["window.history","window.location","window.document","window.navigator"],correctIndex:1,explanation:"location holds href, pathname, search."}]}]},{slug:"modules",title:"Modules & Tooling",icon:"file-text",description:"ES modules, bundlers, and package managers.",level:"intermediate",lessons:[{slug:"modules",title:"ES Modules",description:"import/export and why modules exist.",content:`Modules split code into files. Each file can export values and import others. This is how serious projects and test suites are organized.

**Why modules**
- Reuse code across files
- Isolate scope (no global pollution)
- Clear dependencies
- Enforce boundaries between test helpers, pages, and data

**Exporting**
export const HOST = "https://api.test.com";
export function login(user) { ... }
export default class LoginPage { ... }      // one default per file
Export list: export { HOST, login, LoginPage };

**Importing**
import { HOST, login } from "./api.js";
import LoginPage from "./pages/login.js";   // default import
import * as api from "./api.js";            // namespace: api.HOST

**Aliases**
import { login as signIn } from "./api.js";

**Rules**
- Top-level only (imports can't sit inside if blocks)
- Static: the browser/linker sees imports before running
- Modern ESM in the browser and Playwright projects
- .js/.mjs/.ts extensions; package.json type: module

**CommonJS (legacy but everywhere)**
const api = require("./api");
module.exports = { ... };

**Automation note**
Auto flow: helpers in one file, pages in another, tests import both. Clean imports make big suites maintainable.`,codeExample:`// Simulating module exports/imports with a tiny module registry
// (Real projects use import/export at the file level.)

const registry = {};

function define(name, exports) {
  registry[name] = exports;
}

function use(name) {
  return registry[name];
}

// Simulated file: api.js
define("api", {
  HOST: "https://api.test.com",
  login: (user) => "Logging in as " + user,
});

// Simulated file: login-page.js
define("LoginPage", {
  default: { submit: () => "submitted" },
});

// Consumer (simulates the import statements)
const { HOST, login } = use("api");
const LoginPage = use("LoginPage").default;

console.log("Host:", HOST);
console.log(login("admin"));

async function runTest() {
  console.log(await LoginPage.submit());
}
runTest();

// In a real project:
// import { HOST, login } from "./api.js";
// import LoginPage from "./pages/login.js";`,quiz:[{question:"When is a module's code executed?",options:["On demand","Once, when the module is first imported","Never","In strict mode only"],correctIndex:1,explanation:"ES modules are evaluated once on first import, then cached."},{question:"How do you import a default export?",options:["import * as x","import x from './file.js'","import { x }","require(default)"],correctIndex:1,explanation:"Default imports use the bare import name without braces."}]},{slug:"dynamic-imports",title:"Dynamic Imports",description:"Loading modules on demand at runtime.",content:`Dynamic imports load code when you need it, not at startup. This improves startup time and enables lazy loading.

**Syntax**
const mod = await import("./api.js");
mod.login("admin");

- returns a Promise that resolves to the module namespace
- can use variables in the path (not possible with static import)
- works in browsers and Node
- imported modules are cached after first load

**Why dynamic**
- Only load heavy code (PDF libs, charts) when the feature opens
- Code-splitting: bundlers split into chunks loaded on demand
- Loading test helpers optionally in automation
- Selecting between implementations (mock vs real service) at runtime

**In automation**
- Choose adapter: const api = condition ? await import("./mock.js") : await import("./real.js");
- Reduce test boot time for huge helper libraries

**Compare**
Static: import { helper } from "./h.js";  - always loaded, fastest to use
Dynamic: await import("./h.js")           - loaded on demand, async

**Errors**
A failed dynamic import rejects the promise - wrap in try/catch if the module may be missing.`,codeExample:`// Simulating a lazy-loadable helper module
const moduleStore = {
  "./format.js": {
    formatPrice: (n) => "$" + n.toFixed(2),
    currency: "USD",
  },
};

// Dynamic import equivalent (returns a Promise)
function dynamicImport(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (moduleStore[path]) resolve(moduleStore[path]);
      else reject(new Error("module not found: " + path));
    }, 30);
  });
}

function needsFormatting() {
  return true; // imagine this depends on a flag
}

async function main() {
  if (needsFormatting()) {
    // Lazy: only load the formatter if we actually need it
    const fmt = await dynamicImport("./format.js");
    console.log("Loaded on demand:", fmt.formatPrice(9.9));
    console.log("Currency:", fmt.currency);
  } else {
    console.log("Module never loaded - faster startup");
  }

  // Handling a missing module
  try {
    await dynamicImport("./missing.js");
  } catch (err) {
    console.log("Caught:", err.message);
  }
}
main();

// Real browser/Node equivalent:
// const fmt = await import("./format.js");
// fmt.formatPrice(9.9);`,quiz:[{question:"What does dynamic import return?",options:["The module value","A Promise resolving to the module namespace","void","A string"],correctIndex:1,explanation:"import() returns a Promise for the module namespace object."},{question:"When is dynamic import useful?",options:["Always","To load heavy code only when needed","To avoid all imports","Only in Node"],correctIndex:1,explanation:"Lazy loading improves startup and enables code splitting."}]},{slug:"package-managers",title:"Package Managers",description:"npm, yarn, pnpm and the node_modules ecosystem.",content:`Package managers install and manage third-party libraries. Nearly every automation project uses npm (often wrapped by the tool itself).

**npm basics**
- npm init    create a project (makes package.json)
- npm install pkg
- npm install -D pkg   dev dependency (Playwright installs like this)
- npm install         install everything from package-lock.json
- npm run scriptName  run a script from package.json 'scripts'
- npm uninstall pkg

**package.json key parts**
- dependencies: runtime deps
- devDependencies: build/test/tooling deps (-D)
- scripts: named commands
  "scripts": { "test:all": "npx playwright test" }
- engines / type / version fields

**Lockfile**
package-lock.json pins exact versions for reproducible installs. Always commit it.

**Semantic versioning**
^1.2.3  -> compatible with 1.x
~1.2.3  -> patch-level only
1.2.3   -> exact
"latest" - avoid in CI

**node_modules**
Where packages land - never commit it. Regenerate with npm ci in CI.

**Other managers**
yarn: yarn add / yarn
pnpm: fast, disk-efficient, symlinked store

**Automation note**
Playwright: npm init playwright@latest creates test config, tests folder, and package.json scripts for you.`,codeExample:`// What a package.json looks like (parsed here for practice)
const packageJson = {
  name: "my-test-suite",
  version: "1.0.0",
  type: "module",
  scripts: {
    test: "playwright test",
    "test:smoke": "playwright test --grep @smoke",
    "test:headed": "playwright test --headed",
  },
  dependencies: {},
  devDependencies: {
    "@playwright/test": "^1.49.0",
    typescript: "^5.5.0",
  },
};

console.log("Test command:", packageJson.scripts.test);
console.log("Smoke command:", packageJson.scripts["test:smoke"]);
console.log("Playwright version pin:", packageJson.devDependencies["@playwright/test"]);

// Pinning rules (semver)
const range = "^1.49.0";
console.log("Range type:", range.startsWith("^") ? "compatible with 1.x" : "exact");

// Lockfile protects against surprises
console.log("package-lock.json committed? Always yes in real repos.");

// In a terminal you'd run:
// npm install -D @playwright/test
// npx playwright test --grep @smoke`,quiz:[{question:"What does npm install -D pkg do?",options:["Installs a runtime dependency","Installs a dev dependency","Deletes the package","Runs tests"],correctIndex:1,explanation:"-D adds the package to devDependencies."},{question:"Why commit package-lock.json?",options:["So installs are reproducible","It's required for git","For faster downloads","It hides secrets"],correctIndex:0,explanation:"The lockfile pins exact dependency versions."}]},{slug:"module-bundlers",title:"Module Bundlers",description:"What bundlers do: Vite, Webpack, Rollup, esbuild.",content:`Bundlers take many source files and turn them into optimized files the browser can load quickly. Modern front-end builds use them for every project.

**The problem they solve**
Browsers historically loaded many JS files with slow requests. Bundlers combine and minify them into few files (or many small chunks).

**What a bundler does**
- Resolves imports between files
- Tree-shakes: drops unused exports (only matters for static imports)
- Minifies: shortens names, strips whitespace/comments
- Code-splits: splits dynamic imports into async chunks
- Transpiles: converts TypeScript and new syntax to compatible output
- Manages assets: CSS, images, fonts

**Popular bundlers**
- Vite: fast dev server, modern default (built on Rollup) - beginner friendly
- Webpack: the classic, most config-heavy, many legacy projects
- Rollup: small libs focused, ES module friendly
- esbuild: extremely fast, used inside Vite and others

**Automation connection**
- Playwright tests use your app's built output
- Testing Storybook or Vite dev servers: Vite serves the bundle
- Some frameworks build test bundles with the same tooling

**Dev vs build**
Dev: fast, unminified, hot reload (Vite dev server)
Build: processed, minified, split, ready for deployment`,codeExample:`// Simulate tree-shaking + bundling on a record of modules
const modules = {
  "./utils.js": { exports: ["formatPrice", "deprecatedFn"], used: ["formatPrice"] },
  "./api.js": { exports: ["login", "getUsers"], used: ["login"] },
};

for (const [file, mod] of Object.entries(modules)) {
  const treeShaken = mod.exports.filter((name) => mod.used.includes(name));
  console.log(
    file,
    "-> keeps",
    treeShaken.join(", "),
    "| drops",
    mod.exports.filter((name) => !mod.used.includes(name)).join(", ")
  );
}

// Simulate minification: shrink a function
function minify(source) {
  return source.replace(/s+/g, " ").trim().slice(0, 60);
}
const rawSource = "function formatPrice(price) { return price.toFixed(2); }";
console.log("Minified-ish:", minify(rawSource) + "...");

// Real-life commands (context only, not run here):
// npx vite build        (bundles + minifies your app)
// npx playwright test   (tests the served app)`,quiz:[{question:"What is tree-shaking?",options:["Cutting down unused exports","Planting pixels","Restarting servers","Renaming files"],correctIndex:0,explanation:"Bundlers drop unused exported code to shrink output."},{question:"Which bundler is the modern fast default?",options:["Webpack","Vite","Gulp","Babel"],correctIndex:1,explanation:"Vite is the fast, modern default for new projects."}]},{slug:"ecmascript",title:"ECMAScript Evolution",description:"The standard and the features you should know.",content:`ECMAScript (ES) is the language standard JavaScript implements. The yearly releases add features you'll meet in repos and interviews.

**ES2015 (ES6) - the big one**
let/const, arrow functions, template literals, classes, destructuring, default/rest/spread, Modules, Map/Set, Promises (ES6 later), for...of

**ES2016-ES2017**
Array.prototype.includes (2016)
async/await, Object.values/entries (2017)

**ES2018**
rest/spread for objects, Promise.finally

**ES2019**
Array.prototype.flat, flatMap, Object.fromEntries, optional catch binding

**ES2020**
Optional chaining (?.), nullish coalescing (??), BigInt, Promise.allSettled, dynamic import, globalThis

**ES2021**
String.replaceAll, numeric separators (1_000), Promise.any

**ES2022**
Class fields (private #), static blocks, top-level await in modules

**ES2023**
Array.findLast, toSorted/toReversed/toSpliced (non-mutating)

**How they arrive**
Modern browsers implement quickly; Node versions gate what test frameworks can use. TypeScript often widens availability by transpiling.

**Automation note**
Playwright's Node version determines the JS you can write in configs and helpers. Check engines.node versions when features look unsupported.`,codeExample:`// Spot-it: which ES year added these?
const features = [
  ["arrow functions", "ES6 / ES2015"],
  ["async/await", "ES2017"],
  ["? and ??", "ES2020"],
  ["replaceAll", "ES2021"],
  ["private # fields", "ES2022"],
  ["toSorted (non-mutating)", "ES2023"],
];
for (const [feature, year] of features) {
  console.log(feature, "->", year);
}

// Modern-feature quick demo
const nums = [3, 1, 2];
console.log("toSorted (safe):", nums.toSorted((a, b) => a - b));
console.log("original unchanged:", nums);

const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log("fromEntries round-trip:", Object.fromEntries(entries));

const price = 1_000_000;
console.log("Numeric separators:", price);

let text = "foo foo bar";
console.log("replaceAll:", text.replaceAll("foo", "baz"));`,quiz:[{question:"Which version was the 'big' ES update?",options:["ES5","ES2015/ES6","ES2020","ES2023"],correctIndex:1,explanation:"ES6/ES2015 added most of modern syntax (arrows, classes, modules)."},{question:"What do non-mutating toSorted() methods avoid?",options:["Returning new arrays","Changing the original array","Slow sorting","Type errors"],correctIndex:1,explanation:"toSorted returns a copy, leaving the original untouched."}]}]},{slug:"advanced",title:"Advanced & Interview Prep",icon:"sparkles",description:"Regex, generators, legacy code, and hot questions.",level:"advanced",lessons:[{slug:"regex-intro",title:"Intro to Regular Expressions",description:"Test().test, exec, and pattern building.",content:`Regular expressions match patterns in text. For automation they are used to validate formats, extract values, and write match assertions (like toMatch in Playwright).

**Create a regex**
const re = /ab+c/;        // literal
const re2 = new RegExp("ab+c");

**Core building blocks**
Sequence:    abc matches "abc"
Character classes: [a-z], [0-9], [a-zA-Z], [aeiou]
Ranges and negated: [^0-9] = any non-digit
Shorthand:   \\d  digit,  \\w  word char,  \\s  whitespace,  .  any char
Quantifiers: *  (0+),  +  (1+),  ?  (0 or 1),  {2,4}  (between 2 and 4)
Anchors:     ^ start,  $ end
Groups:      (abc)  captures,  (?:abc)  non-capturing,  (a|b)  alternation
Escapes:     \\\\.  matches a literal dot

**Methods on the regex**
re.test(str)     // boolean - does it match somewhere?
re.exec(str)     // array of match + groups, or null

**Methods on the string**
str.match(re)    // first match info (or all with /g)
str.replace(re, repl)
str.split(re)

**Common flags**
g global, i ignore case, m multiline, u unicode

**Automation note**
- expect(page).toHaveURL(/.login/)  - regex in Playwright assertions
- Extract an invoice code: /INV-(\\\\d{5})/
- Format checks for emails, phones, dates, and IDs

**Watch out**
Write regex for the general pattern, not brittle page-specific text. Keep them short and readable - long regexes are maintenance traps.`,codeExample:`// test: does the string match somewhere?
const emailRe = /^[a-z0-9.-]+@[a-z0-9]+\\.[a-z]{2,}$/i;
console.log("Valid email:", emailRe.test("ana@test.com"));
console.log("Rejects no-at:", emailRe.test("anatest.com"));

// Date pattern
const dateRe = /^\\d{4}-\\d{2}-\\d{2}$/;
console.log("Date ok:", dateRe.test("2026-09-21"));
console.log("Date no:", dateRe.test("21-09-2026"));

// Extract text with a capture group
const invoiceRe = /INV-(\\d{5})/;
const code = "Your invoice INV-12345 was paid";
const match = code.match(invoiceRe);
console.log("Captured number:", match ? match[1] : "no match");

// replace
const phones = "555-123-4567";
console.log("Masked:", phones.replace(/\\d{3}-\\d{3}-/, "***-***-"));

// split
const csv = "alpha;beta;gamma";
console.log("Split:", csv.split(/;/).join(" | "));

// Playwright-style: toHaveURL with a regex
const currentUrl = "https://app.test/login?tab=credentials";
console.log("URL path matches:", /.login/.test(currentUrl));`,quiz:[{question:"What does /^a/ test for?",options:["Any a anywhere","A string starting with a","Exactly one a","Two a's"],correctIndex:1,explanation:"^ anchors the match to the start of the string."},{question:"Which method returns true/false for a match?",options:["exec","test","match","split"],correctIndex:1,explanation:"RegExp.test() returns a boolean."}]},{slug:"generators",title:"Generator Functions",description:"function* and the yield protocol.",content:`Generators are functions you can pause and resume. They are advanced but show up in interview questions and power tools like async iterators and state machines.

**Syntax**
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
const it = counter();
it.next();  // { value: 1, done: false }
it.next();  // { value: 2, done: false }
...

**How yield works**
- calling a generator returns an iterator; the body does NOT run yet
- each next() runs until the next yield, returns its value
- when the body finishes, next() returns { value: undefined, done: true }

**Passing values back in**
you can send a value into next(sentValue) - it becomes the result of the paused yield.

**Delegation**
yield* anotherGenerator() yields values from another generator/iterable.

**Use cases**
- Infinite or large sequences (calculate on demand - memory friendly)
- Lazy data pipelines
- Advanced: async generators iterate paginated APIs one page at a time

**Never (rarely) needed in everyday automation**
But knowing them shows depth; the spread operator and for...of work with iterables, and arrays/strings/sets are iterable too.`,codeExample:`// Basic generator
function* counter() {
  yield "one";
  yield "two";
  yield "three";
}
const it = counter();
console.log(it.next().value);
console.log(it.next().value);

// Iterate with for...of (generators are iterable)
function* letters() {
  yield "a";
  yield "b";
  yield "c";
}
for (const l of letters()) {
  console.log("letter:", l);
}

// Lazy sequence - computes on demand (no big array needed)
function* range(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
let sum = 0;
for (const n of range(1, 5)) sum += n;
console.log("Sum 1..5:", sum);

// Delegation with yield*
function* combined() {
  yield* range(1, 2);
  yield* ["x", "y"];
}
console.log("Delegated:", [...combined()]);

// Spreading a generator (careful: it runs once)
console.log("Spreaded letters:", [...letters()].join("-"));`,quiz:[{question:"When does a generator's body start running?",options:["At definition","On the first .next() call","After two yields","Immediately"],correctIndex:1,explanation:"The body runs lazily, starting at the first next()."},{question:"What does yield do?",options:["Returns a Promise","Pauses and emits a value","Deletes a value","Ends the function"],correctIndex:1,explanation:"yield pauses the generator and outputs a value."}]},{slug:"legacy-var",title:"Legacy var & Hoisting",description:"The old way and its surprising behaviors.",content:`Before let/const, var was the only way to declare a variable. You'll meet it in legacy code and interview questions even though modern code avoids it.

**Behavior differences**
- var is function-scoped, not block-scoped
  if (true) { var x = 1; }  ->  x is visible OUTSIDE the if
- let/const are block-scoped
- var hoists: declared (as undefined) to the top of its function

**Hoisting examples**
console.log(a);   // undefined, NOT an error
var a = 5;

vs
console.log(b);   // ReferenceError (temporal dead zone)
let b = 5;

**var + closures loop bug**
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));   // 3 3 3  (shared i)
}
with let -> 0 1 2 (each iteration its own binding)

**Global gotcha**
var at top level adds a property to the global object (window). let/const do not.

**Redecaration**
var allows redeclaring the same name; let/const throw.

**Rule**
Write new code with let/const only. Use var-awareness when reading old scripts, jQuery-era code, and legacy bundlers.`,codeExample:`// var is function-scoped, not block-scoped
function demo() {
  if (true) {
    var inside = "visible here";
  }
  console.log("var leaks out of block:", inside);
}
demo();

// let is block-scoped (error if accessed outside)
function demo2() {
  if (true) {
    let block = "hidden";
  }
  try {
    console.log(block);
  } catch (err) {
    console.log("let is block-scoped:", err.message.includes("not defined"));
  }
}
demo2();

// Hoisting: var is hoisted as undefined
console.log("hoisted var:", hoistedVar);   // undefined
var hoistedVar = 10;

// let in the temporal dead zone
try {
  console.log(tdz);
} catch (err) {
  console.log("let before declaration throws:", err.name);
}
let tdz = 1;

// The classic loop bug fixed by let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let captured:", i), 0);
}`,quiz:[{question:"What scope does var use?",options:["Block","Function","Global only","Module"],correctIndex:1,explanation:"var is function-scoped; only let/const are block-scoped."},{question:"console.log(x); var x = 5; prints?",options:["5","undefined","ReferenceError","null"],correctIndex:1,explanation:"var hoists the declaration (undefined) to the top."}]},{slug:"legacy-topics",title:"Legacy Topics",description:"Callbacks, IIFEs, jQuery, and old-style code.",content:`You'll inherit legacy test suites and frameworks. Recognizing old patterns prevents misdiagnosis when modern and legacy code clash.

**IIFE - immediately invoked function expression**
(function () { ... })();
Purpose: create a private scope before modules existed.
Modern equivalent: a module file.

**Classic 'submitting a form' callback world**
Old sites: inline onclick handlers, document.write, heavy global scope.

**Callback-based APIs (pre-Promise)**
fs.readFile(path, function (err, data) { ... });   // Node legacy
New: async/await.

**jQuery-era DOM**
$(document).ready(function () { ... });
$("#btn").on("click", fn)
Still present in older apps being automated.

**The global namespace problem**
Old scripts polluted window.x; modern modules keep names local.

**CommonJS exports**
const x = require("./x");  module.exports = x;
Still used in Node config files even today.

**Prototype-based inheritance**
function Car(color) { this.color = color; }
Car.prototype.go = function () { ... }   // pre-class pattern

**Rule of thumb**
Understand them enough to read, but write modern code. When automating legacy apps, prefer the framework's modern API over tricks that match the old page's era.`,codeExample:`// IIFE example (module before modules)
(function () {
  const secret = "module-scoped";
  console.log("IIFE runs, secret stays private:", secret.length + " chars");
})();
// secret is NOT accessible here (try to read it -> error)

// Prototype-based "class"
function Car(color) {
  this.color = color;
}
Car.prototype.go = function () {
  return "Driving a " + this.color + " car";
};
const myCar = new Car("red");
console.log(myCar.go());

// Callback-based node style (recreated for practice)
function readFileAsync(path, callback) {
  setTimeout(() => callback(null, "file contents of " + path), 30);
}
readFileAsync("config.json", (err, data) => {
  if (err) console.log("Error:", err);
  else console.log("Callback got:", data);
});

// jQuery-era expression (conceptual)
function onDocReady(fn) {
  if (document && document.readyState === "loading") {
    setTimeout(() => fn(), 10);
  } else {
    fn();
  }
}
onDocReady(() => console.log("ready handler simulated"));`,quiz:[{question:"Why were IIFEs used?",options:["To run code on click","To create a private scope before modules","To make code sync","To import modules"],correctIndex:1,explanation:"IIFEs immediately ran and isolated their scope."},{question:"What replaced callback-heavy APIs?",options:["More callbacks","Promises and async/await","setImmediate","Closures"],correctIndex:1,explanation:"Promises and async/await flatten legacy callback flows."}]},{slug:"interview-prep",title:"Interview Questions",description:"The questions testers actually get asked.",content:`A quick-fire review of the classic questions on JavaScript-for-automation interviews. Know the one-line answer and one example for each.

**1. var vs let vs const**
var: function-scoped, hoisted, redeclarable, legacy.
let: block-scoped, mutable.
const: block-scoped, cannot be reassigned (objects still mutable).

**2. What is the event loop?**
Single-threaded runtime cycling the call stack, microtask queue, and macrotask queue. Microtasks (Promises) drain before macrotasks (timers).

**3. async/await vs Promise.then**
await reads like sync code and removes nesting; it's syntax sugar over promises. Both are promises underneath.

**4. What is this?**
The context a function runs in: the object it's called on, the global, or lexical scope for arrows (arrows have no own this).

**5. Closures**
Functions remember outer-scope variables after the outer function exits - used for state, factories, and private data.

**6. == vs ===**
== coerces types; === requires same type AND value. Always use ===.

**7. Deep vs shallow copy**
Spread {...} is shallow (nested objects shared). JSON round-trip or structuredClone give deep copies.

**8. Map vs Object**
Map: any keys, insertion order, better for heavy add/delete. Object: string/symbol keys, serializes to JSON.

**9. Promise.all vs allSettled**
all rejects fast on first rejection; allSettled waits for all and reports each result.

**10. Playwright vs Selenium (if asked)**
Playwright: auto-waiting, modern, fast, web-first assertions, scripting language support.

**Pattern for answers**
1. Define it in one line. 2. Give the automation relevance. 3. Small example.
Concise and correct beats long and rambling.`,codeExample:`// == vs ===
console.log("5 == '5' :", 5 == "5");    // true (coerced)
console.log("5 === '5':", 5 === "5");   // false (types differ)

// Default parameters + arrow (common whiteboard basics)
const greet = (name = "world") => "hello " + name;
console.log(greet());
console.log(greet("ana"));

// Shallow vs deep copy
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
shallow.nested.b = 99;            // shared with original!
console.log("shallow shares nested:", original.nested.b);

const deep = JSON.parse(JSON.stringify(original)); // deep copy
deep.nested.b = 1;
console.log("deep copy protects original:", original.nested.b);

// Classic async ordering (event loop) quiz
console.log("start");
setTimeout(() => console.log("timer"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output: start, end, promise, timer`,quiz:[{question:"What does === require?",options:["Only same value","Same type AND value","Literals only","Numbers only"],correctIndex:1,explanation:"=== is strict equality, checking type and value."},{question:"Why is {...obj} a shallow copy?",options:["It copies only top-level fields","It copies everything deeply","It never works","It copies the reference"],correctIndex:0,explanation:"Spread copies top-level values; nested objects are shared."}]}]}],o={"intro/what-is-python":[{question:"Which statement about Python is TRUE?",options:["Python is a compiled language","Python is an interpreted language","Python only runs on Windows","Python was created in 2020"],correctIndex:1,explanation:"Python is an interpreted language - code runs line by line."},{question:"Python is commonly used in which fields?",options:["Only game development","Only operating systems","Data science, web dev, automation, AI","Only mobile apps"],correctIndex:2,explanation:"Python is used in data science, web development, automation, AI/ML, and more."},{question:"Which of these companies uses Python?",options:["Netflix","Instagram","Spotify","All of the above"],correctIndex:3,explanation:"Netflix, Instagram, and Spotify all use Python in their backend systems."}],"intro/getting-started":[{question:"Which command checks the installed Python version?",options:["python --version","python show","version python","python info"],correctIndex:0,explanation:"python --version (or python -V) shows the installed version."},{question:"What is the interactive Python prompt called?",options:["Terminal","REPL","Console","Shell"],correctIndex:1,explanation:"REPL = Read-Eval-Print Loop, the interactive mode."},{question:"Which of these is NOT a way to run Python?",options:["python script.py","Interactive REPL","Online compilers","Double-clicking without Python installed"],correctIndex:3,explanation:"You need Python installed to run .py files (except in online environments)."}],"syntax/basic-syntax":[{question:"What happens if you forget to indent a code block?",options:["The code runs normally","It causes IndentationError","The code crashes silently","Python fixes it automatically"],correctIndex:1,explanation:"Python raises IndentationError when a code block isn't properly indented."},{question:"Are 'MyVar' and 'myvar' the same variable?",options:["Yes","No, Python is case-sensitive","Only in functions","Depends on the OS"],correctIndex:1,explanation:"Python is case-sensitive, so MyVar and myvar are different variables."},{question:"Python statements end with:",options:["Semicolons (;)","Periods (.)","Just a new line","Curly braces { }"],correctIndex:2,explanation:"Python statements end at the newline - no semicolons needed."}],"syntax/variables":[{question:"Which variable name is INVALID in Python?",options:["_temp","var123","my-variable","my_variable"],correctIndex:2,explanation:"Hyphens are not allowed in variable names. Use underscores instead."},{question:"What is the output of: a, b, c = 1, 2, 3; print(b)?",options:["1","2","3","[1, 2, 3]"],correctIndex:1,explanation:"Multiple assignment: a=1, b=2, c=3. So print(b) outputs 2."},{question:"Can you change a variable's type after assignment?",options:["No, types are fixed","Yes, Python is dynamically typed","Only for strings","Only with explicit casting"],correctIndex:1,explanation:"Python is dynamically typed - a variable can change type: x = 5 then x = 'hello'."},{question:"What does: x = 10; x = x + 5; print(x) output?",options:["10","15","x + 5","Error"],correctIndex:1,explanation:"x = 10, then x becomes 10 + 5 = 15."}],"syntax/data-types":[{question:"What is the type of (1, 2, 3)?",options:["list","tuple","set","dict"],correctIndex:1,explanation:"Parentheses () create a tuple, which is immutable."},{question:"Which collection type stores unique items only?",options:["list","tuple","set","dict"],correctIndex:2,explanation:"Sets automatically remove duplicates - each item appears once."},{question:"What does float(3) return?",options:["3","3.0","'3'","Error"],correctIndex:1,explanation:"float(3) converts integer 3 to float 3.0."}],"strings/string-basics":[{question:"Which escape sequence creates a new line?",options:["\\t","\\n","\\r","\\b"],correctIndex:1,explanation:"\\n is the newline escape character."},{question:'What does len("Hello World") return?',options:["10","11","12","5"],correctIndex:1,explanation:'"Hello World" has 11 characters including the space.'},{question:"Which of these creates a multi-line string?",options:["'Hello'",'"Hello"','"""Hello\nWorld"""',"'Hello\\nWorld'"],correctIndex:2,explanation:'Triple quotes """...""" are used for multi-line strings.'}],"strings/string-methods":[{question:"What does 'Hello'.find('l') return?",options:["1","2","3","4"],correctIndex:1,explanation:".find() returns the first index where 'l' appears. 'H'=0, 'e'=1, 'l'=2."},{question:"What does 'Python'.capitalize() return?",options:["python","PYTHON","Python","pYTHON"],correctIndex:2,explanation:".capitalize() makes the first letter uppercase and the rest lowercase."},{question:"What does 'banana'.count('a') return?",options:["2","3","1","0"],correctIndex:1,explanation:"'banana' has three 'a' characters (positions 1, 3, 5)."},{question:"Strings are immutable. What does this mean?",options:["They cannot be created","They can't be changed in place - methods return new strings","They use too much memory","They cannot be printed"],correctIndex:1,explanation:"Immutable means you can't modify an existing string; methods return a new string."}],"strings/string-formatting":[{question:'What does f"{42:04d}" produce?',options:["42","0042","00420","0.42"],correctIndex:1,explanation:":04d pads with zeros to width 4: 0042"},{question:'What does f"{3.14159:.3f}" produce?',options:["3.14","3.141","3.142","3.14159"],correctIndex:2,explanation:".3f rounds to 3 decimal places: 3.142 (rounds up)."},{question:'What does f"{1000000:,}" produce?',options:["1000000","1,000,000","10,00,000","1.0M"],correctIndex:1,explanation:"The comma adds thousands separators: 1,000,000"}],"operators/arithmetic-operators":[{question:"What is the output of: 2 ** 3 ** 2?",options:["64","512","36","32"],correctIndex:1,explanation:"Exponentiation is right-associative: 2 ** (3 ** 2) = 2 ** 9 = 512"},{question:"What is -7 // 2?",options:["-3","-4","-3.5","3"],correctIndex:1,explanation:"Floor division rounds DOWN: -7 // 2 = -4 (not -3.5, not -3)."},{question:"Which operator has highest precedence?",options:["*","**","+","//"],correctIndex:1,explanation:"Exponentation (**) has the highest precedence."},{question:"What is 27 % 5?",options:["5","2","4","1"],correctIndex:1,explanation:"27 = 5*5 + 2, so the remainder is 2."}],"operators/comparison-operators":[{question:"What does 'apple' > 'banana' evaluate to?",options:["True","False","Error","Depends"],correctIndex:1,explanation:"Strings compare lexicographically: 'a' < 'b', so apple < banana → False."},{question:"What does 3 < 5 < 4 evaluate to?",options:["True","False","Error","None"],correctIndex:1,explanation:"Chained: (3 < 5) and (5 < 4) = True and False = False"},{question:"Which operator checks equality?",options:["=","==","===","!="],correctIndex:1,explanation:"== checks equality; = is assignment."}],"operators/logical-operators":[{question:"What is not (True or False)?",options:["True","False","None","Error"],correctIndex:1,explanation:"True or False = True, then not True = False."},{question:"What value does '' or 'Default' evaluate to?",options:["''","'Default'","False","None"],correctIndex:1,explanation:"Empty string is falsy, so 'or' returns 'Default'. This is short-circuit evaluation."},{question:"What is 0 and 'hello'?",options:["0","'hello'","False","None"],correctIndex:0,explanation:"0 is falsy, so 'and' short-circuits and returns 0 without checking the second value."},{question:"In Python, which values are falsy?",options:["0, '', [], None","Only False","0 and '' only","None and False only"],correctIndex:0,explanation:"0, empty strings, empty lists, None, and False are all falsy."}],"control-flow/if-else":[{question:"What is the output of the ternary: x = 7; result = 'even' if x % 2 == 0 else 'odd'?",options:["even","odd","7","Error"],correctIndex:1,explanation:"7 % 2 = 1, so the condition is False and 'odd' is assigned."},{question:"In an if/elif/else, how many blocks can run?",options:["All of them","Only one","At most two","None"],correctIndex:1,explanation:"Only the first matching condition's block runs."},{question:"What happens if no condition is True and there's no else?",options:["Error","Nothing runs","All blocks run","Python auto-adds else"],correctIndex:1,explanation:"Without else, if no condition matches, the program just continues."}],"control-flow/for-loops":[{question:"What does range(0, 10, 3) produce?",options:["0,3,6,9","0,3,6,9,12","3,6,9","0,1,2,...,10"],correctIndex:0,explanation:"Range with step 3: 0, 3, 6, 9 (stops before 10)."},{question:"What is the sum of numbers from 1 to 10?",options:["45","55","60","50"],correctIndex:1,explanation:"1+2+...+10 = 55 (n*(n+1)/2 = 10*11/2)."},{question:"What does for i, item in enumerate(items) provide?",options:["Just items","Just indices","Both index and item","Nothing"],correctIndex:2,explanation:"enumerate() yields (index, item) pairs."}],"control-flow/while-loops":[{question:"What is the most common cause of infinite loops?",options:["Using while True","Forgotten condition update","Short circuits","Too many prints"],correctIndex:1,explanation:"If the loop variable never changes, the condition stays True forever."},{question:"What does break do?",options:["Skips to next iteration","Exits the loop completely","Restarts the loop","Pauses execution"],correctIndex:1,explanation:"break immediately exits the loop."},{question:"Which loop is best when you don't know how many iterations?",options:["for","while","for-else","do-while"],correctIndex:1,explanation:"Use while when the number of iterations depends on a condition."}],"lists/list-basics":[{question:"What is the result of [1, 2, 3] + [4, 5]?",options:["[1, 2, 3, 4, 5]","[1,2,3]","[5,7,8]","Error"],correctIndex:0,explanation:"The + operator concatenates lists."},{question:"What is [1, 2, 3, 4, 5][::2]?",options:["[1, 3, 5]","[2, 4]","[1, 2, 3]","[1,2,3,4,5]"],correctIndex:0,explanation:"::2 means step 2 - take every other element: 1, 3, 5"},{question:"What does my_list = [[] for _ in range(3)] create?",options:["One list of 3 items","3 empty lists","A list with 3 nested empty lists","Error"],correctIndex:2,explanation:"It creates [[], [], []] - a list containing 3 empty lists."},{question:"How do you remove ALL items from a list?",options:["my_list.pop()","my_list.clear()","del my_list[0]","my_list.remove_all()"],correctIndex:1,explanation:".clear() removes all items, leaving an empty list."}],"lists/list-comprehension":[{question:"What does [x for x in range(10) if x % 3 == 0] produce?",options:["[0, 3, 6, 9]","[3, 6, 9]","[0,3,6]","0,1,2,...,10"],correctIndex:0,explanation:"Multiples of 3 in range(10): 0, 3, 6, 9"},{question:"Which is faster: list comprehension or a for loop + append?",options:["For loop is faster","List comprehension is faster","They are exactly the same","Depends on the OS"],correctIndex:1,explanation:"List comprehensions are generally faster than manual for loops."},{question:"What does [n ** 2 for n in [1, 2, 3]] produce?",options:["[1, 4, 9]","[1, 2, 3]","[2, 4, 6]","[1, 4, 9, 16]"],correctIndex:0,explanation:"Each number squared: 1²=1, 2²=4, 3²=9"}],"functions/function-basics":[{question:"What is the output of the following?\ndef f(a, b=2, c=3):\n    return a + b + c\nprint(f(1, c=10))",options:["6","13","11","Error"],correctIndex:1,explanation:"f(1, c=10) → a=1, b=2, c=10 → 1+2+10 = 13"},{question:"What's a docstring?",options:["A comment that starts with #","A string at the top of a function explaining what it does","Documentation automatically generated","A test case"],correctIndex:1,explanation:"A docstring is the first string in a function/class/module, used to document it."},{question:"What does *args do in a function?",options:["Requires arguments","Accepts any number of positional arguments as a tuple","Accepts keyword arguments as a dict","Multiplies arguments"],correctIndex:1,explanation:"*args collects extra positional arguments into a tuple."},{question:"What does **kwargs do?",options:["Accepts any number of keyword arguments as a dict","Requires keyword arguments","Squares keyword args","Same as *args"],correctIndex:0,explanation:"**kwargs collects extra keyword arguments into a dictionary."}],"functions/lambda":[{question:"What does (lambda x: x * 2)(5) return?",options:["5","10","25","Error"],correctIndex:1,explanation:"The lambda doubles its input: 5 * 2 = 10"},{question:"Which is a typical use for lambda?",options:["Large complex functions","Small one-off functions passed to sorted/map/filter","Recursive functions","Class definitions"],correctIndex:1,explanation:"Lambdas shine as short callbacks for sorted(), map(), filter(), etc."},{question:"What is the main limitation of lambda?",options:["Too slow","Only one expression - no statements","Cannot be assigned","No limit"],correctIndex:1,explanation:"Lambdas can only contain a single expression, not statements."}],"dictionaries/dict-basics":[{question:"What happens with d = {'a': 1}; d['b']?",options:["Returns None","Raises KeyError","Returns 0","Creates the key"],correctIndex:1,explanation:"Accessing a missing key raises KeyError. Use .get() to avoid it."},{question:"What does {}.fromkeys(['a','b'], 0) create?",options:["['a','b']","{'a': 0, 'b': 0}","{'a': None, 'b': None}","Error"],correctIndex:1,explanation:"fromkeys creates dict with given keys and a default value."},{question:"What does sorted(d.items()) sort by?",options:["Values","Keys","Length","Nothing - error"],correctIndex:1,explanation:"Sorted by keys by default when sorting items()."},{question:"How do you merge two dictionaries in Python 3.9+?",options:["d1.merge(d2)","d1 | d2","d1 + d2","dict_merge(d1, d2)"],correctIndex:1,explanation:"The | operator merges: d1 | d2. Or use {**d1, **d2}."}],"oop/classes-basics":[{question:"What is an object?",options:["A function","An instance of a class","A variable","A module"],correctIndex:1,explanation:"An object is an instance created from a class blueprint."},{question:"What is the first parameter of instance methods?",options:["cls","self","this","me"],correctIndex:1,explanation:"self refers to the instance itself in instance methods."},{question:"What does __str__ method do?",options:["Creates a string","Defines the string representation used by print() and str()","Converts the object","Deletes the object"],correctIndex:1,explanation:"__str__ defines a readable string representation for print() and str()."},{question:"What is a class attribute?",options:["An attribute per instance","An attribute shared by all instances of a class","A private attribute","A method's variable"],correctIndex:1,explanation:"Class attributes are defined at class level and shared by all instances."}],"oop/inheritance":[{question:"What is the purpose of inheritance?",options:["To delete classes","To reuse and extend code from a parent class","To make code slower","To import modules"],correctIndex:1,explanation:"Inheritance lets a child class reuse and extend parent class code."},{question:"Can a child class override a parent method?",options:["Yes, by redefining it","No, never","Only private ones","With super() only"],correctIndex:0,explanation:"Redefining a method in the child overrides the parent's version."},{question:"What does isinstance(dog, Animal) check?",options:["If dog is exactly Animal","If dog is an instance of Animal or its subclasses","If dog can be converted","If Animal is a class"],correctIndex:1,explanation:"isinstance returns True for the class or any of its subclasses."},{question:"Which allows a class to inherit from multiple classes?",options:["Single inheritance","Multiple inheritance","Method chaining","Composition"],correctIndex:1,explanation:"class Child(Parent1, Parent2) is multiple inheritance."}],"error-handling/try-except":[{question:"What print does this produce?\ntry:\n    print('A')\n    x = 10/0\nexcept:\n    print('B')\nelse:\n    print('C')\nfinally:\n    print('D')",options:["A C D","A B C D","A B D","A B"],correctIndex:2,explanation:"A prints, exception → B prints, else is skipped, finally always runs → D"},{question:"Which exception is raised for a missing dictionary key?",options:["IndexError","KeyError","TypeError","ValueError"],correctIndex:1,explanation:"Accessing a missing dict key with d[key] raises KeyError."},{question:"What is the purpose of raising an exception?",options:["To pause the program forever","To signal an error condition to be handled","To print an error","To delete a variable"],correctIndex:1,explanation:"Raising signals an error that must be handled by an except block."},{question:"What does 'except Exception as e' do?",options:["Catches only specific errors","Catches all exceptions and stores the error object in e","Ignores the error","Logs the error"],correctIndex:1,explanation:"Exception is the base class for most errors; 'as e' captures the error object."}],"file-handling/file-operations":[{question:"What mode should you use to append to a file?",options:['"r"','"w"','"a"','"x"'],correctIndex:2,explanation:'"a" (append) adds content to the end without erasing existing data.'},{question:"What does file.read() return?",options:["A list of lines","The entire file as a string","One line","Bytes"],correctIndex:1,explanation:".read() returns the whole file content as a single string."},{question:"What happens if you open a file with 'w' that doesn't exist?",options:["Error: file not found","The file is created","Nothing happens","Python creates it in another folder"],correctIndex:1,explanation:"Opening with 'w' creates the file if it doesn't exist."},{question:"Which is the safest way to read a file?",options:["open then forget to close it","Using the with statement","Using read() 10 times","Opening in 'w' mode"],correctIndex:1,explanation:"with open(...) ensures the file closes automatically even if errors occur."}],"modules/importing-modules":[{question:"Difference: from math import sqrt vs import math?",options:["They are identical","First allows sqrt() directly; second requires math.sqrt()","First is slower","Second imports everything"],correctIndex:1,explanation:"from-import brings the name into scope; import module requires module.name."},{question:"What does import random do?",options:["Makes the code random","Imports the random module for generating random values","Randomly imports modules","Nothing"],correctIndex:1,explanation:"The random module provides functions like randint(), choice(), etc."},{question:"What is a Python package?",options:["Just one file","A directory of modules with an __init__.py","An executable program","A virtual env"],correctIndex:1,explanation:"A package is a folder of modules (typically with __init__.py)."},{question:"Which module does NOT exist in Python's standard library?",options:["json","csv","requests","statistics"],correctIndex:2,explanation:"requests is a third-party library, not part of the standard library."}]},s={"intro/what-is-javascript":[{question:"In which of these environments does JavaScript run natively without installation?",options:["Every web browser","Only Node.js servers","Only the VS Code editor","Only mobile devices"],correctIndex:0,explanation:"Every modern web browser ships with a JavaScript engine, so JS runs there with no installation."},{question:"What is the official standard that defines how JavaScript behaves?",options:["ECMAScript","HTML5","WebAssembly","JSON"],correctIndex:0,explanation:"JavaScript is standardized as ECMAScript (ES), and modern features come from ES6 (ES2015) and later."}],"intro/why-javascript-for-automation":[{question:"Which of these automation tools is built on top of JavaScript/Node.js?",options:["Playwright","Pytest","JUnit","Robot Framework"],correctIndex:0,explanation:"Playwright, Cypress, and WebDriverIO are the leading JavaScript-based automation frameworks."},{question:"Why does an automation tester benefit from knowing JavaScript even when their tests use a GUI recorder?",options:["To write, debug, and extend test scripts the recorder cannot produce","JavaScript is required to install a browser","Because every CI server only runs JS","To replace the operating system"],correctIndex:0,explanation:"Recorded scripts cannot handle dynamic waits, API logic, or custom assertions, so JS knowledge is essential for maintainable automation."}],"basics/variables":[{question:"Which keyword declares a block-scoped variable that cannot be reassigned?",options:["var","let","const","static"],correctIndex:2,explanation:"const declares a block-scoped variable that cannot be reassigned after its initial assignment."},{question:"What is the main problem with using var instead of let in modern JavaScript?",options:["var is not function-scoped","var is block-scoped instead of hoisted","var is hoisted and ignores block scope, causing bugs","var cannot hold numbers"],correctIndex:2,explanation:"var is hoisted to the function scope, ignores block scope, and allows redeclaration, which leads to subtle bugs."}],"basics/data-types":[{question:"What is the typeof result for null in JavaScript?",options:["'null'","'object'","'undefined'","'boolean'"],correctIndex:1,explanation:"typeof null returns 'object', a long-standing JavaScript quirk inherited from the language's early days."},{question:"Which of these is a primitive data type in JavaScript?",options:["Array","Map","Symbol","Date"],correctIndex:2,explanation:"Symbol is one of the seven primitives (string, number, boolean, null, undefined, bigint, symbol); the others are objects."}],"basics/operators":[{question:"What does the === operator check compared to ==?",options:["Only values","Identity of functions","Both value and type","Only memory references"],correctIndex:2,explanation:"=== (strict equality) compares both value and type, while == performs type coercion before comparing."},{question:"What is the result of 5 + '3' in JavaScript?",options:["8","'53'","2","NaN"],correctIndex:1,explanation:"The + operator concatenates when either operand is a string, so 5 + '3' produces the string '53'."}],"basics/type-conversions":[{question:"What does Boolean('false') evaluate to?",options:["false","true","null","undefined"],correctIndex:1,explanation:"Any non-empty string is truthy, so Boolean('false') is true; only '', 0, NaN, null, undefined, and false coerce to false."},{question:"Which expression converts the string '42' into the number 42?",options:["parseInt('42')","Number('42')","parseFloat('42')","All of these"],correctIndex:3,explanation:"Number(), parseInt(), and parseFloat() all return the number 42 when given the string '42'."}],"control-flow/if-else":[{question:"What happens when new Boolean(false) is used inside an if condition?",options:["if is skipped","An error is thrown","if runs because the Boolean object is truthy","NaN is returned"],correctIndex:2,explanation:"A Boolean object (new Boolean(false)) is a truthy object, so the if branch executes, unlike the primitive false."},{question:"Which statement correctly logs 'big' only when count is greater than 10?",options:["if (count > 10) console.log('big')","if (count => 10) console.log('big')","if count > 10 console.log('big')","if (count >= 10) console.log('big')"],correctIndex:0,explanation:"The correct operator is the strict greater-than (>) and parentheses wrap the condition; => is only used in arrow functions."}],"control-flow/loops-iteration":[{question:"What does for (const i = 0; i < 3; i++) do?",options:["Prints 0, 1, 2","Runs three times","Throws an error because i is const","Loops forever"],correctIndex:2,explanation:"const cannot be reassigned, so i++ throws an error; use let i for counters in a for loop."},{question:"Which loop runs a body at least once regardless of the condition?",options:["for","for...of","do...while","while"],correctIndex:2,explanation:"do...while checks the condition after the body runs, guaranteeing at least one iteration."}],"strings/string-basics":[{question:"What is the length of the string 'hello' as reported by .length?",options:["4","5","6","undefined"],correctIndex:1,explanation:"String length counts UTF-16 code units, and 'hello' has exactly five characters, so .length is 5."},{question:"How can you access the first character of the string 'test'?",options:["'test'[0]","'test'[-1]","'test'.first()","'test'.charCodeAt(0)"],correctIndex:0,explanation:"Strings are indexable with bracket notation, and index 0 is the first character 't'."}],"strings/string-methods":[{question:"What does 'JavaScript'.toUpperCase() return?",options:["javascript","JAVASCRIPT","JavaScript","Js"],correctIndex:1,explanation:"toUpperCase() returns a new string with every character converted to uppercase: 'JAVASCRIPT'."},{question:"Which method finds the index of the first occurrence of 'a' in 'banana'?",options:["lastIndexOf('a')","indexOf('a')","find('a')","searchAll('a')"],correctIndex:1,explanation:"indexOf('a') returns 1, the position of the first 'a' in 'banana'; lastIndexOf returns the last one."}],"strings/template-literals":[{question:"What delimiter wraps a template literal string?",options:["Backticks","Single quotes","Double quotes","Angle brackets"],correctIndex:0,explanation:"A template literal is wrapped in backticks, which enables interpolation and multiline text."},{question:"What is a real benefit of template literals for building test selectors or messages?",options:["You can embed variable values directly instead of concatenating string parts","They make strings immutable forever","They run only on the server","They cannot contain punctuation"],correctIndex:0,explanation:"Template literals let you embed variable values directly inside the string, making composed selectors and messages far more readable than concatenation."}],"functions/function-basics":[{question:"What is returned when a function without a return statement finishes running?",options:["null","0","undefined","false"],correctIndex:2,explanation:"A function that lacks an explicit return implicitly returns undefined."},{question:"What does a function declaration without the function keyword refer to?",options:["A method","A constructor","An arrow function or function expression","A generator"],correctIndex:2,explanation:"Functions created with arrow syntax or assigned to variables are expressions, not declarations."}],"functions/arrow-functions":[{question:"What is a key difference between arrow functions and traditional function expressions?",options:["Arrows keep the surrounding this instead of binding their own","Arrows are always slower","Arrows cannot take parameters","Arrows cannot be stored in variables"],correctIndex:0,explanation:"Arrow functions do not have their own this; they lexically inherit this from the enclosing scope."},{question:"Which arrow function correctly doubles its argument?",options:["x => x * 2","x -> x * 2","fn x { return x * 2 }","double(x) => x * 2"],correctIndex:0,explanation:"The arrow syntax is (param) => expression, so x => x * 2 is valid and returns x * 2 implicitly."}],"functions/lexical-scope-closures":[{question:"What is a closure in JavaScript?",options:["A function that retains access to its outer scope after the outer function returns","A class that cannot be extended","A loop that never ends","A global variable"],correctIndex:0,explanation:"A closure captures variables from the lexical scope where it was defined, even after the outer function has finished."},{question:"Given function outer() { let x = 1; return () => x; }, what does outer()() return?",options:["undefined","1","x","NaN"],correctIndex:1,explanation:"The inner arrow function closes over x and returns its value 1 when called."}],"functions/callbacks":[{question:"What is a callback function?",options:["A function passed as an argument to be called later","A function with no name","A function that returns a promise","A built-in DOM method"],correctIndex:0,explanation:"A callback is a function passed into another function and invoked later, often after async work or per array element."},{question:"Which array method takes a callback that runs for each element and returns a new array?",options:["push","map","join","pop"],correctIndex:1,explanation:"map calls the callback for every element and builds a new array from the returned values, leaving the original unchanged."}],"arrays/array-basics":[{question:"What is the result of [1, 2, 3].length?",options:["2","3","4","undefined"],correctIndex:1,explanation:"The length property reports the number of elements, which is 3 for [1, 2, 3]."},{question:"Which method adds elements to the end of an array AND changes the original array?",options:["concat","push","map","slice"],correctIndex:1,explanation:"push mutates the array in place by appending elements; concat and map return new arrays."}],"arrays/advanced-arrays":[{question:"What does [1, 2, 3, 4].filter(n => n % 2 === 0) return?",options:["[2, 4]","[1, 3]","[1, 2, 3, 4]","[2]"],correctIndex:0,explanation:"filter keeps only elements for which the callback returns true, so the even numbers 2 and 4 remain."},{question:"What is the common array-copy gotcha when copying an array with slice?",options:["It is a shallow copy, so nested objects are still shared","It deletes the original","It ignores indices","It only copies strings"],correctIndex:0,explanation:"slice() (and spread) make shallow copies; nested objects inside are still references to the same objects."}],"arrays/reduce":[{question:"What does [1, 2, 3, 4].reduce((acc, n) => acc + n, 0) return?",options:["10","24","4","0"],correctIndex:0,explanation:"reduce sums each element starting from the initial accumulator 0: 1+2+3+4 = 10."},{question:"What happens if you call reduce() without an initial value on an empty array?",options:["It returns undefined","It returns 0","It returns null","It throws a TypeError"],correctIndex:3,explanation:"With no initial value, reduce uses the first element as the accumulator, which fails on an empty array and throws a TypeError."}],"objects/object-basics":[{question:"How do you access the age property of const person = { age: 30 }?",options:["person.age","person->age","person::age","person.age()"],correctIndex:0,explanation:"Dot notation accesses object properties directly, so person.age returns 30."},{question:"What does Object.keys({ a: 1, b: 2 }) return?",options:["[1, 2]","['a', 'b']","['1', '2']","undefined"],correctIndex:1,explanation:"Object.keys returns an array of the object's own enumerable property names, here ['a', 'b']."}],"objects/destructuring":[{question:"What is the value of name after const { name } = { name: 'Ada', age: 36 }?",options:["'Ada'","36","undefined","'name'"],correctIndex:0,explanation:"Object destructuring pulls the name property out of the object into its own variable, so name is 'Ada'."},{question:"What is the result of const [first, second] = [7, 8, 9]?",options:["first is 7 and second is 8","first is 8 and second is 9","first is 7 and second is 9","An error"],correctIndex:0,explanation:"Array destructuring assigns elements by position, so first is 7 and second is 8; 9 is ignored."}],"objects/optional-chaining-nullish":[{question:"What does user?.profile?.name return if user is null?",options:["null","undefined","TypeError","An empty string"],correctIndex:1,explanation:"Optional chaining short-circuits safely and returns undefined when any link in the chain is null or undefined."},{question:"What does null ?? 'fallback' evaluate to?",options:["null","undefined","'fallback'","false"],correctIndex:2,explanation:"The nullish coalescing operator ?? returns the right side only when the left side is null or undefined, so it yields 'fallback'."}],"objects/map-set":[{question:"How do you add a key-value pair to a Map?",options:["map.add(key, value)","map.set(key, value)","map.push(key, value)","map.insert(key, value)"],correctIndex:1,explanation:"Map uses set(key, value) to store entries; add is used by Set and push by arrays."},{question:"What is unique about a Set compared to an array?",options:["It automatically removes duplicate values","It sorts itself","It can hold only numbers","It cannot store strings"],correctIndex:0,explanation:"A Set enforces uniqueness, so adding an already-present value is a no-op."}],"objects/arrays-of-objects":[{question:"Which expression returns the first user with the role 'admin' from an array of user objects?",options:["users.find(u => u.role === 'admin')","users.filter(u => u.role === 'admin')[undefined]","users.first('admin')","users.search('admin')"],correctIndex:0,explanation:"Array.find() returns the first element for which the callback returns true, stopping early."},{question:"What does users.map(u => u.name) with users = [{ name: 'Ada' }, { name: 'Lin' }] return?",options:["['Ada', 'Lin']","[{ name: 'Ada' }, { name: 'Lin' }]","2","['name', 'name']"],correctIndex:0,explanation:"map extracts the name from each object, building a new array of strings: ['Ada', 'Lin']."}],"async/async-basics":[{question:"What is the return value of an async function that has no explicit return?",options:["undefined","A Promise resolving to undefined","null","An Error object"],correctIndex:1,explanation:"Every async function returns a Promise; with no return, it resolves to undefined."},{question:"Why are async operations important in automation testing?",options:["Browsers and network requests finish at unpredictable times","They make tests run synchronously","They replace assertions","They disable timeouts"],correctIndex:0,explanation:"Page loads, network calls, and UI updates are asynchronous, so testers must await them instead of assuming instant completion."}],"async/promises":[{question:"What states can a Promise be in?",options:["pending, fulfilled, rejected","start, running, done","open, closed, waiting","queued, active, stopped"],correctIndex:0,explanation:"A Promise transitions from pending to either fulfilled (resolved) or rejected, and those are its three states."},{question:"Which method do you use to attach a handler for a rejected promise?",options:[".then() on error",".catch()",".finally()",".resolve()"],correctIndex:1,explanation:"catch() handles rejections; then() handles fulfilled values and finally() runs cleanup regardless of outcome."}],"async/async-await":[{question:"What keyword must prefix an await expression?",options:["Function inside an async function","try","return","yield"],correctIndex:0,explanation:"await can only be used inside a function declared with async (or at the top level of modules)."},{question:"What does an await expression resolve to when the promise rejects?",options:["null","The rejection reason, thrown as an error","undefined","false"],correctIndex:1,explanation:"A rejected promise makes await throw the rejection reason, which you catch with try/catch."}],"async/fetch-apis":[{question:"What does the fetch() function return?",options:["A Promise of a Response","A string of HTML","A parsed JSON object","An XHR object"],correctIndex:0,explanation:"fetch() returns a Promise that resolves to a Response object when the server replies."},{question:"Why do you need res.json() after a fetch call returning JSON?",options:["To parse the response body into a JavaScript object","To change the request method","To add headers","To close the connection"],correctIndex:0,explanation:"res.json() reads the stream and parses the body; fetch does not auto-parse the payload for you."}],"async/event-loop":[{question:"In what order do these log: console.log('a'); setTimeout(() => console.log('b'), 0); console.log('c');?",options:["a, b, c","a, c, b","b, a, c","c, a, b"],correctIndex:1,explanation:"Synchronous code ('a', 'c') runs first; the setTimeout callback is deferred to the task queue, logging 'b' last even with an 0ms delay."},{question:"What does the event loop do, in simple terms?",options:["It handles Async events by scheduling callbacks after the current stack empties","It compiles JS to machine code","It garbage collects every second","It runs only in Node.js, not browsers"],correctIndex:0,explanation:"The event loop moves callbacks from the task queue back onto the call stack once it is empty, enabling non-blocking async code."}],"classes/class-basics":[{question:"Which method on a class runs automatically when a new instance is created?",options:["init()","start()","constructor()","new()"],correctIndex:2,explanation:"The constructor() method initializes each new instance created with the new keyword."},{question:"How do you create a new instance of class User?",options:["User.new()","new User()","User()","create User()"],correctIndex:1,explanation:"The new keyword invokes the class constructor and returns the instance: new User()."}],"classes/class-inheritance":[{question:"Which keyword marks a class as inheriting from another class?",options:["extends","inherits","super","implements"],correctIndex:0,explanation:"The extends keyword establishes inheritance, e.g. class Admin extends User."},{question:"Inside a subclass constructor, what must be called before using this?",options:["this.init()","super()","parent()","super.constructor()"],correctIndex:1,explanation:"super() invokes the parent constructor and must run before any this access in a subclass constructor."}],"classes/prototypal-inheritance":[{question:"How does instanceof verify that a class relationship is real?",options:["It checks the prototype chain rather than the constructor name","It compares string type names","It shallow-compares properties","It runs the parent constructor"],correctIndex:0,explanation:"instanceof walks the prototype chain in order to decide whether an object inherits from the given prototype."},{question:"What is the prototype chain in JavaScript?",options:["Objects inherit properties via a linked chain ending at Object.prototype, ultimately null","A stack of function calls","A queue of events","A list of global variables"],correctIndex:0,explanation:"Every object has an internal prototype link; property lookups walk the chain until found or until reaching null after Object.prototype."}],"classes/json":[{question:"What does JSON.stringify({ a: 1 }) return?",options:["'{a: 1}'","'{\"a\":1}'","{ a: 1 }","A Promise"],correctIndex:1,explanation:"JSON.stringify produces a JSON string with double-quoted keys, so the output is '{\"a\":1}'."},{question:"Why does JSON.stringify({ name: 'Ada', fn: () => {} }) omit the fn property?",options:["Functions are intentionally omitted from JSON output","The string is too long","Arrow functions throw an error","Functions are converted to null"],correctIndex:0,explanation:"JSON has no function type, so JSON.stringify silently drops function-valued properties."}],"dom/dom-basics":[{question:"What does the abbreviation DOM stand for?",options:["Document Object Model","Data Object Module","Document Oriented Media","Dynamic Object Mapping"],correctIndex:0,explanation:"The DOM is the browser's tree-structured model of the document that JavaScript can read and modify."},{question:"Which statement is true about the DOM?",options:["It represents the page as a tree of nodes that JS can traverse and modify","It is a separate binary format","It only lives on the server","It cannot be queried"],correctIndex:0,explanation:"The DOM is an in-memory tree of element and text nodes, updated live by JavaScript."}],"dom/dom-selection":[{question:"Which method returns the FIRST element matching the CSS selector '#login'?",options:["querySelector('#login')","getElementByClass('login')","querySelectorAll('#login')[0]","document.login()"],correctIndex:0,explanation:"querySelector returns the first match for any CSS selector; querySelectorAll returns all matches as a NodeList."},{question:"What does document.querySelectorAll('button') return?",options:["A NodeList of button elements","The first button","An HTML string","undefined"],correctIndex:0,explanation:"querySelectorAll returns a static NodeList containing every element that matches the selector."}],"dom/dom-manipulation":[{question:"Which property changes the visible text content of an element?",options:["element.textContent","element.html","element.inner()","element.write"],correctIndex:0,explanation:"Setting element.textContent replaces the element's rendered text with the new value."},{question:"Which method attaches a new child element to the end of a node?",options:["node.appendChild(child)","node.insertChild(child)","node.pushChild(child)","node.add(child)"],correctIndex:0,explanation:"appendChild appends the child to the end of the node's children list."}],"dom/events":[{question:"Which method registers an event handler for a click?",options:["element.addEventListener('click', handler)","element.onClick = handler","element.click(handler)","element.handle('click', handler)"],correctIndex:0,explanation:"addEventListener('click', handler) registers a handler, and it supports multiple handlers plus removal via removeEventListener."},{question:"What does event.target refer to inside an event handler?",options:["The element that actually triggered the event","The element registered with addEventListener","The parent node","The window object"],correctIndex:0,explanation:"event.target is the element where the event occurred, which may differ from the registered element due to bubbling."}],"dom/forms":[{question:'How do you reliably read the current value of an <input type="text">?',options:["inputEl.value","inputEl.innerHTML","inputEl.text","inputEl.dataset.value"],correctIndex:0,explanation:"the input's current text lives in its value property, which reflects what the user typed."},{question:"Why should you call formElement.preventDefault() in a submit handler?",options:["To stop the page from reloading and losing your handler's state","To reset the form","To make the form validate twice","To close the browser tab"],correctIndex:0,explanation:"preventDefault() cancels the browser's default behavior of reloading the page on form submission."}],"dom/window-object":[{question:"Which global object contains methods like setTimeout, fetch, and alert in a browser?",options:["window","document","navigator","screen"],correctIndex:0,explanation:"window is the global object in browsers; document is the DOM entry point under it."},{question:"What does window.setTimeout(fn, 1000) schedule?",options:["fn to run after roughly 1000 milliseconds","fn to run exactly 1000 times","fn to cancel the event loop","fn to run at once"],correctIndex:0,explanation:"setTimeout queues fn to run after the delay (at least), not exactly; timing depends on the event loop."}],"modules/modules":[{question:"Which keyword exports a single value from a module?",options:["export default","import","module.exports","require"],correctIndex:0,explanation:"export default marks a module's primary value, imported with import x from '...'."},{question:"In an ES module, how do you import the named export add?",options:["import { add } from './math.js'","import add from './math.js'","import * as add from './math.js'","const add = require('./math.js')"],correctIndex:0,explanation:"Named exports are imported with braces: import { add } from ...; default imports omit the braces."}],"modules/dynamic-imports":[{question:"What is the main benefit of import('./module.js') used inside a function?",options:["The module loads only when that code runs, reducing initial bundle size","It runs the module twice","It blocks the event loop","It disables caching"],correctIndex:0,explanation:"Dynamic import returns a Promise and defers loading the module until execution time, enabling code splitting."},{question:"What does the dynamic import expression resolve to?",options:["The module namespace object","The default export directly","A string","A DOM element"],correctIndex:0,explanation:"const mod = await import('./x.js') gives the module namespace; default exports are at mod.default."}],"modules/package-managers":[{question:"Which command installs a package and saves it as a dependency in package.json?",options:["npm install <pkg>","npm unlink <pkg>","npm compile <pkg>","npm host <pkg>"],correctIndex:0,explanation:"npm install <pkg> (or npm i) downloads the package and, in modern npm, records it in dependencies."},{question:"What is the purpose of the package-lock.json file?",options:["It pins exact dependency versions for reproducible installs","It stores test results","It lists every author","It caches browser downloads"],correctIndex:0,explanation:"package-lock.json records the exact resolved versions of every dependency so installs are deterministic."}],"modules/module-bundlers":[{question:"Why do browsers and Node often need a bundler like Vite or Webpack?",options:["Bundlers combine many modules, resolve dependencies, and optimize output for production","Bundlers replace the browser","Bundlers are required to run console.log","Bundlers translate CSS to HTML"],correctIndex:0,explanation:"Bundlers resolve the import graph and emit a small number of optimized files, handling features the runtime lacks."},{question:"What does tree-shaking refer to in a bundler context?",options:["Removing unused exports so the bundle is smaller","Deleting node_modules","Pruning old git branches","Renaming all variables to one letter"],correctIndex:0,explanation:"Tree-shaking statically detects and drops code that is never imported, shrinking the final bundle."}],"modules/ecmascript":[{question:"Which major standard release introduced let, const, arrow functions, and classes?",options:["ES6 (ES2015)","ES3","ES5","ESNext only"],correctIndex:0,explanation:"ES6/ES2015 was the landmark release that added let, const, arrows, classes, promises, and template literals."},{question:"How do you check which ECMAScript features a browser supports?",options:["Feature detection with a tool like caniuse, or runtime checks before using them","Reading the browser version only","Counting installed plugins","By running fetch"],correctIndex:0,explanation:"Dedicated tools and feature detection tell you whether a specific syntax/API is supported before you ship it."}],"advanced/regex-intro":[{question:"What does the regular expression /^\\d{3}$/ match?",options:["Exactly three digits","Any three characters","A word with three letters","Empty strings"],correctIndex:0,explanation:"^ and $ anchor the match, \\d means digit, and {3} requires exactly three, so it matches strings like '123'."},{question:"What does /world/i.test('Hello WORLD') return?",options:["true","false","null","world"],correctIndex:0,explanation:"The i flag makes the match case-insensitive, so 'WORLD' satisfies /world/, and test returns true."}],"advanced/generators":[{question:"Which syntax defines a generator function?",options:["function* gen()","async function gen()","class gen()","const gen = => *"],correctIndex:0,explanation:"The asterisk after function marks a generator: function* gen() returns an iterator that pauses on yield."},{question:"How do you pause a generator and hand back a value?",options:["yield value","return pause","await value","stop value"],correctIndex:0,explanation:"yield suspends execution and returns a value; the next .next() call resumes from the same spot."}],"advanced/legacy-var":[{question:"What is a classic bug caused by var inside a for loop?",options:["The loop variable leaks and shares one final value in closures","var cannot be used in loops","The loop never starts","var resets every iteration"],correctIndex:0,explanation:"var is function-scoped and reused across iterations, so async callbacks in the loop all see the final value; let fixes this."},{question:"Which statement about var hoisting is correct?",options:["var declarations are hoisted to the top of their function scope but initialized to undefined","var is destroyed before the script runs","var cannot be used before declaration","var has block scope"],correctIndex:0,explanation:"var declarations are hoisted and initialized to undefined, whereas let/const are hoisted but stay in the temporal dead zone."}],"advanced/legacy-topics":[{question:"What is the legacy XMLHttpRequest object primarily used for?",options:["Making HTTP requests before fetch became standard","Parsing HTML","Storing cookies","Compiling templates"],correctIndex:0,explanation:"XMLHttpRequest was the older API for AJAX requests; modern code prefers fetch()."},{question:"Why might a legacy test script use callback-style setTimeout chains?",options:["Because callbacks were the only way to sequence async work before promises existed","Because callbacks are faster than await","Because setTimeout is synchronous","Because callbacks are required by the DOM"],correctIndex:0,explanation:"Old test code sequenced waits with nested callbacks; promise chains and async/await are the modern replacements."}],"advanced/interview-prep":[{question:"What is the difference between let and const in one sentence?",options:["let allows reassignment while const does not; both are block-scoped","let is global while const is local","const allows reassignment but let does not","There is no difference"],correctIndex:0,explanation:"Both are block-scoped ES6 declarations; the difference is that const cannot be reassigned after declaration."},{question:"How would you explain the difference between == and === in an interview?",options:["== compares after type coercion; === compares value and type without coercion","=== is slower than == in all browsers","== is the same as equals() in Java","=== only works on objects"],correctIndex:0,explanation:"== coerces operands to a common type first, while === requires the same value and the same type, avoiding loose pitfalls."}]},a=[{title:"Hello World",description:"Write a program that prints 'Hello, World!' to the screen.",topic:"Introduction",level:"Easy",starter:`# Write your code here
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
    print(f"Password {i+1}: {generate_password()}")`}],r=[{title:"Hello from the Console",description:"Print a friendly greeting to the console. Use console.log with single-quoted strings and combine values with the + operator.",topic:"Introduction",level:"Easy",starter:"// TODO: print 'Hello, World!' to the console\n// TODO: print 'I am learning JavaScript'\n// TODO: combine 'Automation ' and 'rocks!' on one line",solution:"console.log('Hello, World!');\nconsole.log('I am learning JavaScript');\nconsole.log('Automation ' + 'rocks!');"},{title:"Arithmetic Basics",description:"Print the results of simple arithmetic: addition, subtraction, multiplication, division, and the remainder.",topic:"Introduction",level:"Easy",starter:"// TODO: print the result of 12 + 9\n// TODO: print the result of 12 - 9\n// TODO: print the result of 12 * 9\n// TODO: print the remainder of 12 divided by 9",solution:"console.log('12 + 9 = ' + (12 + 9));\nconsole.log('12 - 9 = ' + (12 - 9));\nconsole.log('12 * 9 = ' + (12 * 9));\nconsole.log('12 / 9 = ' + (12 / 9));\nconsole.log('12 % 9 = ' + (12 % 9));"},{title:"let vs const",description:"Use let for a value you reassign and const for a value that never changes. Remember: const cannot be reassigned.",topic:"Variables",level:"Easy",starter:"let steps = 0;\n// TODO: reassign steps to 3 and log the new value\nconst site = 'example.org';\n// TODO: log the site name",solution:"let steps = 0;\nsteps = 3;\nconsole.log('Steps taken: ' + steps);\nconst site = 'example.org';\nconsole.log('Site under test: ' + site);\nconsole.log('typeof steps: ' + typeof steps);"},{title:"Type Detective With typeof",description:"Inspect a value's type with typeof and print meaningful labels for numbers, strings, booleans, arrays, and objects.",topic:"Variables",level:"Easy",starter:"const role = 'admin';\n// TODO: log the typeof of role\nconst retries = 3;\n// TODO: log the typeof of retries\nconst isPassed = true;\n// TODO: log the typeof of isPassed\n// TODO: log the typeof of an array [] and an object {}",solution:"const role = 'admin';\nconsole.log('role is a ' + typeof role);\nconst retries = 3;\nconsole.log('retries is a ' + typeof retries);\nconst isPassed = true;\nconsole.log('isPassed is a ' + typeof isPassed);\nconsole.log('array typeof: ' + typeof []);\nconsole.log('object typeof: ' + typeof {});\nconsole.log('null typeof: ' + typeof null);"},{title:"Strict Comparisons",description:"Compare values with === and !== and report whether assertion-style checks pass. Watch the classic pitfall: the string '10' is not the number 10.",topic:"Operators",level:"Easy",starter:"const apiStatus = 200;\nconst uiStatus = 200;\n// TODO: log whether apiStatus strictly equals uiStatus\nconst textCount = '10';\n// TODO: log whether textCount === 10\n// TODO: convert textCount with Number() and compare again",solution:"const apiStatus = 200;\nconst uiStatus = 200;\nconsole.log('Status matches: ' + (apiStatus === uiStatus));\nconst textCount = '10';\nconsole.log('String 10 equals number 10: ' + (textCount === 10));\nconsole.log('Number() conversion matches: ' + (Number(textCount) === 10));\nconsole.log('5 > 3 is ' + (5 > 3));\nconsole.log('10 <= 10 is ' + (10 <= 10));"},{title:"Logical & Ternary",description:"Use &&, ||, and the ternary operator to decide test outcomes and pick fallback values when data is missing.",topic:"Operators",level:"Medium",starter:"const isLoggedIn = true;\nconst isAdmin = false;\n// TODO: log if access is granted (needs both conditions)\n// TODO: pick a fallback display name with ||\n// TODO: log PASS or FAIL for a score with a ternary",solution:"const isLoggedIn = true;\nconst isAdmin = false;\nconsole.log('Admin access granted: ' + (isLoggedIn && isAdmin));\nconst name = '';\nconst displayName = name || 'guest';\nconsole.log('Display name: ' + displayName);\nconst score = 82;\nconst verdict = score >= 70 ? 'PASS' : 'FAIL';\nconsole.log('Test verdict: ' + verdict);\nconsole.log('Customer tier: ' + (score > 90 ? 'VIP' : 'regular'));"},{title:"Grade the Score",description:"Write an if / else if / else chain that maps a score to a grade: 90+ is A, 80+ is B, 70+ is C, 60+ is D, otherwise F.",topic:"Control Flow",level:"Easy",starter:"const score = 85;\nlet grade = '';\n// TODO: use if / else if / else to set the grade\n// TODO: log the final grade",solution:"const score = 85;\nlet grade = '';\nif (score >= 90) {\n  grade = 'A';\n} else if (score >= 80) {\n  grade = 'B';\n} else if (score >= 70) {\n  grade = 'C';\n} else if (score >= 60) {\n  grade = 'D';\n} else {\n  grade = 'F';\n}\nconsole.log('Score: ' + score + ' -> grade: ' + grade);"},{title:"Even Numbers & Nested Loops",description:"Loop from 1 to 10 and log only the even numbers, then use a nested loop to print a small multiplication table.",topic:"Control Flow",level:"Medium",starter:"// TODO: log every even number from 2 to 10\n// TODO: nested loop with i and j from 1 to 3, log i * j",solution:"for (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) {\n    console.log('Even: ' + i);\n  }\n}\nfor (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i + ' x ' + j + ' = ' + (i * j));\n  }\n}"},{title:"Split, Join & Search",description:"Use split and join to convert between strings and arrays, then verify text with includes and startsWith.",topic:"Strings",level:"Easy",starter:"const csv = 'chrome,firefox,safari';\n// TODO: split csv into an array and log it\n// TODO: join the array back with ' | ' and log it\nconst url = 'https://example.com/login';\n// TODO: log if url includes 'login'\n// TODO: log if url starts with 'https://'",solution:"const csv = 'chrome,firefox,safari';\nconst browsers = csv.split(',');\nconsole.log('Browsers: ' + browsers);\nconsole.log('Joined: ' + browsers.join(' | '));\nconst url = 'https://example.com/login';\nconsole.log('Has login: ' + url.includes('login'));\nconsole.log('Secure: ' + url.startsWith('https://'));\nconsole.log('Ends with .com: ' + url.endsWith('.com'));"},{title:"Clean & Pad Text",description:"Trim scraped text, replace values, and pad numbers so your test reports line up nicely.",topic:"Strings",level:"Medium",starter:"const raw = '  Total: 42  ';\n// TODO: trim the whitespace and log the clean text\n// TODO: replace 'Total' with 'Sum' and log it\n// TODO: pad the number 7 with zeros to length 3 and log it",solution:"const raw = '  Total: 42  ';\nconsole.log('Trimmed: ' + raw.trim());\nconsole.log('Swapped: ' + raw.trim().replace('Total', 'Sum'));\nconst id = '7';\nconsole.log('Padded id: ' + id.padStart(3, '0'));\nconst name = 'CoDe';\nconsole.log('Lower: ' + name.toLowerCase());\nconsole.log('Checks: ' + 'banana'.includes('nan'));"},{title:"Arrow vs Declaration",description:"Write the same logic as both a function declaration and an arrow function, then use each one to transform values.",topic:"Functions",level:"Medium",starter:"// TODO: declare function double(n) that returns n * 2\n// TODO: declare arrow const triple = (n) => n * 3\n// TODO: log double(5) and triple(5)",solution:"function double(nValue) {\n  return nValue * 2;\n}\nconst triple = (nValue) => nValue * 3;\nconsole.log('double(5): ' + double(5));\nconsole.log('triple(5): ' + triple(5));\nconst names = ['ana', 'bob'];\nconst shout = names.map((n) => n.toUpperCase());\nconsole.log('Shouted: ' + shout);"},{title:"Defaults & Rest",description:"Give a parameter a default value and collect extra arguments with a rest parameter, then reduce them to a total.",topic:"Functions",level:"Medium",starter:"// TODO: function greet(name = 'friend') returns 'Hello, Name'\n// TODO: function total(...numbers) returns the sum of all numbers\n// TODO: log greet() and total(5, 10, 15)",solution:"function greet(name = 'friend') {\n  return 'Hello, ' + name + '!';\n}\nfunction total(...numbers) {\n  return numbers.reduce((sum, n) => sum + n, 0);\n}\nconsole.log(greet());\nconsole.log(greet('Ana'));\nconsole.log('Total: ' + total(5, 10, 15));\nconsole.log('Total with more: ' + total(1, 2, 3, 4, 5));"},{title:"Map, Filter & Find",description:"Filter active users, map names to uppercase, find the first match, and check membership with some and includes.",topic:"Arrays",level:"Medium",starter:"const users = [\n  { name: 'ana', active: true },\n  { name: 'bob', active: false },\n  { name: 'cin', active: true },\n];\n// TODO: log the names of the active users\n// TODO: log the first active user's name\n// TODO: log whether any user is inactive",solution:"const users = [\n  { name: 'ana', active: true },\n  { name: 'bob', active: false },\n  { name: 'cin', active: true },\n];\nconst activeNames = users.filter((u) => u.active).map((u) => u.name);\nconsole.log('Active users: ' + activeNames);\nconst firstActive = users.find((u) => u.active);\nconsole.log('First active: ' + firstActive.name);\nconsole.log('Any inactive: ' + users.some((u) => !u.active));\nconsole.log('Has ana: ' + users.map((u) => u.name).includes('ana'));"},{title:"Reduce & Sort",description:"Sum a list of prices with reduce, then sort numbers correctly with a comparator instead of the default string sort.",topic:"Arrays",level:"Medium",starter:"const prices = [19.99, 4.5, 12];\n// TODO: reduce prices to a total and log it\nconst nums = [10, 2, 100, 1];\n// TODO: sort nums ascending using a comparator and log it",solution:"const prices = [19.99, 4.5, 12];\nconst total = prices.reduce((sum, price) => sum + price, 0);\nconsole.log('Total: ' + total.toFixed(2));\nconst nums = [10, 2, 100, 1];\nconst sorted = [...nums].sort((a, b) => a - b);\nconsole.log('Sorted: ' + sorted);\nconsole.log('Count: ' + prices.length);"},{title:"Explore Object Keys",description:"Read fields with dot and bracket notation, then list the keys, values, and entries of an object.",topic:"Objects",level:"Medium",starter:"const settings = { theme: 'dark', lang: 'en', retries: 3 };\n// TODO: log the theme with dot notation\n// TODO: log the lang with bracket notation\n// TODO: log Object.keys, Object.values, and Object.entries",solution:"const settings = { theme: 'dark', lang: 'en', retries: 3 };\nconsole.log('Theme: ' + settings.theme);\nconsole.log('Lang: ' + settings['lang']);\nconsole.log('Keys: ' + Object.keys(settings));\nconsole.log('Values: ' + Object.values(settings));\nconsole.log('Entries: ' + Object.entries(settings));\nfor (const [key, value] of Object.entries(settings)) {\n  console.log(key + ' = ' + value);\n}"},{title:"Merge & Optional Chaining",description:"Merge two config objects with the spread operator and read a nested field safely with optional chaining plus a fallback.",topic:"Objects",level:"Medium",starter:"const base = { browser: 'chromium', headless: true };\nconst extra = { timeout: 5000, headless: false };\n// TODO: merge base and extra so extra wins and log it\nconst user = { profile: { name: 'Ana' } };\n// TODO: log user.profile.name with dot notation\n// TODO: log a fallback message when user.account?.email is missing",solution:"const base = { browser: 'chromium', headless: true };\nconst extra = { timeout: 5000, headless: false };\nconst merged = { ...base, ...extra };\nconsole.log('Merged: ' + JSON.stringify(merged));\nconst user = { profile: { name: 'Ana' } };\nconsole.log('Name: ' + user.profile.name);\nconst email = user.account?.email ?? 'no email';\nconsole.log('Email: ' + email);"},{title:"Promise Chain & async/await",description:"Simulate waiting for a page with setTimeout. Chain a Promise with .then, then rewrite the same flow with async/await.",topic:"Async",level:"Medium",starter:"function wait(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n// TODO: chain wait(200).then() to log 'Page loaded.'\n// TODO: async function loadPage() that awaits wait and logs a line\n// TODO: call loadPage()",solution:"function wait(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\nwait(200).then(() => {\n  console.log('Page loaded.');\n});\nasync function loadPage() {\n  await wait(200);\n  console.log('Async page loaded.');\n}\nloadPage();"},{title:"Promise.all Parallel Waits",description:"Run several simulated waits in parallel with Promise.all and print each result combined into a single line of output.",topic:"Async",level:"Hard",starter:"function wait(ms, label) {\n  return new Promise((resolve) => setTimeout(() => resolve(label), ms));\n}\nconst steps = ['open', 'fill', 'submit'];\n// TODO: use Promise.all to await all steps in parallel\n// TODO: log the results joined by ' -> '",solution:"function wait(ms, label) {\n  return new Promise((resolve) => setTimeout(() => resolve(label), ms));\n}\nconst steps = ['open', 'fill', 'submit'];\nPromise.all(steps.map((s) => wait(200, s))).then((results) => {\n  console.log('All done in parallel: ' + results.join(' -> '));\n});"},{title:"Class With Constructor & Getter",description:"Build a User class with a constructor, a getter, and a static method, then instantiate users and describe them.",topic:"Classes",level:"Medium",starter:"// TODO: class User with a constructor(name, role)\n// TODO: getter label that returns 'name (role)'\n// TODO: static createGuest() that returns a User\n// TODO: log an admin label and a guest label",solution:"class User {\n  constructor(name, role) {\n    this.name = name;\n    this.role = role;\n  }\n  get label() {\n    return this.name + ' (' + this.role + ')';\n  }\n  static createGuest() {\n    return new User('guest', 'viewer');\n  }\n}\nconst admin = new User('Ana', 'admin');\nconsole.log('Admin label: ' + admin.label);\nconst guest = User.createGuest();\nconsole.log('Guest label: ' + guest.label);"},{title:"Inheritance With super",description:"Create a BaseTest class and a LoginTest subclass that calls super in its constructor and overrides a run method.",topic:"Classes",level:"Hard",starter:"// TODO: class BaseTest with a constructor(name) and a run() that logs\n// TODO: class LoginTest extends BaseTest and calls super(name)\n// TODO: override run() to log the username as well\n// TODO: create a LoginTest and call run()",solution:"class BaseTest {\n  constructor(name) {\n    this.name = name;\n  }\n  run() {\n    console.log('Starting: ' + this.name);\n  }\n}\nclass LoginTest extends BaseTest {\n  constructor(name, username) {\n    super(name);\n    this.username = username;\n  }\n  run() {\n    super.run();\n    console.log('Logging in as: ' + this.username);\n  }\n}\nconst login = new LoginTest('LoginFlow', 'tester1');\nlogin.run();"},{title:"Simulated Query by Tag",description:"There is no real browser in this sandbox, so query a plain JavaScript array of fake elements. Write helpers that filter by tag name, class, and text.",topic:"DOM",level:"Hard",starter:"const elements = [\n  { tag: 'button', class: 'btn submit', text: 'Submit' },\n  { tag: 'input', class: 'field', text: '' },\n  { tag: 'button', class: 'btn cancel', text: 'Cancel' },\n];\n// TODO: helper byTag(tag) returns matching elements\n// TODO: helper byClass(cls) returns elements whose class includes cls\n// TODO: helper byText(text) returns elements whose text includes text",solution:"const elements = [\n  { tag: 'button', class: 'btn submit', text: 'Submit' },\n  { tag: 'input', class: 'field', text: '' },\n  { tag: 'button', class: 'btn cancel', text: 'Cancel' },\n];\nfunction byTag(tag) {\n  return elements.filter((el) => el.tag === tag);\n}\nfunction byClass(cls) {\n  return elements.filter((el) => el.class.includes(cls));\n}\nfunction byText(text) {\n  return elements.filter((el) => el.text.includes(text));\n}\nconsole.log('Buttons: ' + byTag('button').map((el) => el.text));\nconsole.log('Class btn count: ' + byClass('btn').length);\nconsole.log('Submit button: ' + byText('Submit')[0].tag);"},{title:"Combined Query Simulation",description:"Combine tag, class, and text filters into one query helper and report what the simulated selector returns.",topic:"DOM",level:"Hard",starter:"const nodes = [\n  { tag: 'a', class: 'nav link', text: 'Home' },\n  { tag: 'a', class: 'nav link', text: 'About' },\n  { tag: 'li', class: 'nav item', text: 'Contact' },\n];\n// TODO: helper queryAll(tag, cls) filters by tag and class\n// TODO: helper hasText(node, text) checks text ignoring case\n// TODO: log the texts matched by queryAll('a', 'link')",solution:"const nodes = [\n  { tag: 'a', class: 'nav link', text: 'Home' },\n  { tag: 'a', class: 'nav link', text: 'About' },\n  { tag: 'li', class: 'nav item', text: 'Contact' },\n];\nfunction queryAll(tag, cls) {\n  return nodes.filter((n) => n.tag === tag && n.class.includes(cls));\n}\nfunction hasText(node, text) {\n  return node.text.toLowerCase().includes(text.toLowerCase());\n}\nconsole.log('Nav anchors: ' + queryAll('a', 'link').map((n) => n.text));\nconsole.log('Contains About: ' + queryAll('a', 'link').some((n) => hasText(n, 'about')));"},{title:"Registry Export Pattern",description:"Simulate a module system with a registry object: functions that register names to exports and import them back by name.",topic:"Modules",level:"Hard",starter:"// TODO: create a registry object that holds exports\n// TODO: register(name, value) stores a value in the registry\n// TODO: importName(name) returns the value or a 'missing' message\n// TODO: register a function and a string, then import them",solution:"const registry = {};\nfunction register(name, value) {\n  registry[name] = value;\n}\nfunction importName(name) {\n  return registry[name] ?? 'missing export: ' + name;\n}\nregister('getUrl', () => 'https://example.com');\nregister('env', 'staging');\nconsole.log('env: ' + importName('env'));\nconsole.log('Call: ' + importName('getUrl')());\nconsole.log('Missing: ' + importName('nope'));"},{title:"Import Builders & Re-exports",description:"Simulate default and named imports by building objects with export lists, then merge them into a combined export object.",topic:"Modules",level:"Hard",starter:"// TODO: object namedExports with buildUrl and buildHeader helpers\n// TODO: object defaultExport with a headers() function\n// TODO: merge both into a combined object with spread\n// TODO: log buildUrl, buildHeader, and the merged keys",solution:"const namedExports = {\n  buildUrl: (base, path) => base + '/' + path,\n  buildHeader: (token) => 'Bearer ' + token,\n};\nconst defaultExport = {\n  headers: () => ({ auth: 'token' }),\n};\nconst combined = { ...namedExports, ...defaultExport };\nconsole.log('Url: ' + combined.buildUrl('https://api.test.com', 'users'));\nconsole.log('Header: ' + combined.buildHeader('abc123'));\nconsole.log('Headers: ' + JSON.stringify(combined.headers()));\nconsole.log('Merged keys: ' + Object.keys(combined));"}],i={python:{label:"Python",slug:"python",heroCode:`def learn_python():
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
}`}};function l(e){return"python"===e?t:n}function c(e,t){return l(e).find(e=>e.slug===t)}e.s(["LANGUAGES",0,["python","javascript"],"LANG_META",0,i,"getExtraQuiz",0,function(e){return"python"===e?o:s},"getFirstLessonHref",0,function(e){let t=l(e)[0];return`/${e}/learn/${t?.slug}/${t?.lessons[0]?.slug}`},"getLessonBySlug",0,function(e,t,n){return c(e,t)?.lessons.find(e=>e.slug===n)},"getNextLesson",0,function(e,t,n){let o=l(e);for(let e=0;e<o.length;e++){let s=o[e];for(let a=0;a<s.lessons.length;a++)if(s.slug===t&&s.lessons[a].slug===n){if(a+1<s.lessons.length)return{topicSlug:s.slug,lessonSlug:s.lessons[a+1].slug};if(e+1<o.length)return{topicSlug:o[e+1].slug,lessonSlug:o[e+1].lessons[0].slug};return null}}return null},"getPracticeExercises",0,function(e){return"python"===e?a:r},"getQuestionSectionModule",0,function(t){return"python"===t?()=>e.A(4136):()=>e.A(6182)},"getTopicBySlug",0,c,"getTopics",0,l,"getTotalLessons",0,function(e){return l(e).reduce((e,t)=>e+t.lessons.length,0)},"isLanguage",0,function(e){return"python"===e||"javascript"===e}],52947)}]);