import { QuizQuestion } from "../types";

// Additional quiz questions for each lesson
// Format: topicSlug/lessonSlug -> extra questions
export const extraQuiz: Record<string, QuizQuestion[]> = {
  // ============ INTRO ============
  "intro/what-is-python": [
    {
      question: "Which statement about Python is TRUE?",
      options: [
        "Python is a compiled language",
        "Python is an interpreted language",
        "Python only runs on Windows",
        "Python was created in 2020",
      ],
      correctIndex: 1,
      explanation: "Python is an interpreted language - code runs line by line.",
    },
    {
      question: "Python is commonly used in which fields?",
      options: [
        "Only game development",
        "Only operating systems",
        "Data science, web dev, automation, AI",
        "Only mobile apps",
      ],
      correctIndex: 2,
      explanation: "Python is used in data science, web development, automation, AI/ML, and more.",
    },
    {
      question: "Which of these companies uses Python?",
      options: ["Netflix", "Instagram", "Spotify", "All of the above"],
      correctIndex: 3,
      explanation: "Netflix, Instagram, and Spotify all use Python in their backend systems.",
    },
  ],
  "intro/getting-started": [
    {
      question: "Which command checks the installed Python version?",
      options: ["python --version", "python show", "version python", "python info"],
      correctIndex: 0,
      explanation: "python --version (or python -V) shows the installed version.",
    },
    {
      question: "What is the interactive Python prompt called?",
      options: ["Terminal", "REPL", "Console", "Shell"],
      correctIndex: 1,
      explanation: "REPL = Read-Eval-Print Loop, the interactive mode.",
    },
    {
      question: "Which of these is NOT a way to run Python?",
      options: [
        "python script.py",
        "Interactive REPL",
        "Online compilers",
        "Double-clicking without Python installed",
      ],
      correctIndex: 3,
      explanation: "You need Python installed to run .py files (except in online environments).",
    },
  ],
  // ============ SYNTAX ============
  "syntax/basic-syntax": [
    {
      question: "What happens if you forget to indent a code block?",
      options: ["The code runs normally", "It causes IndentationError", "The code crashes silently", "Python fixes it automatically"],
      correctIndex: 1,
      explanation: "Python raises IndentationError when a code block isn't properly indented.",
    },
    {
      question: "Are 'MyVar' and 'myvar' the same variable?",
      options: ["Yes", "No, Python is case-sensitive", "Only in functions", "Depends on the OS"],
      correctIndex: 1,
      explanation: "Python is case-sensitive, so MyVar and myvar are different variables.",
    },
    {
      question: "Python statements end with:",
      options: ["Semicolons (;)", "Periods (.)", "Just a new line", "Curly braces { }"],
      correctIndex: 2,
      explanation: "Python statements end at the newline - no semicolons needed.",
    },
  ],
  "syntax/variables": [
    {
      question: "Which variable name is INVALID in Python?",
      options: ["_temp", "var123", "my-variable", "my_variable"],
      correctIndex: 2,
      explanation: "Hyphens are not allowed in variable names. Use underscores instead.",
    },
    {
      question: "What is the output of: a, b, c = 1, 2, 3; print(b)?",
      options: ["1", "2", "3", "[1, 2, 3]"],
      correctIndex: 1,
      explanation: "Multiple assignment: a=1, b=2, c=3. So print(b) outputs 2.",
    },
    {
      question: "Can you change a variable's type after assignment?",
      options: ["No, types are fixed", "Yes, Python is dynamically typed", "Only for strings", "Only with explicit casting"],
      correctIndex: 1,
      explanation: "Python is dynamically typed - a variable can change type: x = 5 then x = 'hello'.",
    },
    {
      question: "What does: x = 10; x = x + 5; print(x) output?",
      options: ["10", "15", "x + 5", "Error"],
      correctIndex: 1,
      explanation: "x = 10, then x becomes 10 + 5 = 15.",
    },
  ],
  "syntax/data-types": [
    {
      question: "What is the type of (1, 2, 3)?",
      options: ["list", "tuple", "set", "dict"],
      correctIndex: 1,
      explanation: "Parentheses () create a tuple, which is immutable.",
    },
    {
      question: "Which collection type stores unique items only?",
      options: ["list", "tuple", "set", "dict"],
      correctIndex: 2,
      explanation: "Sets automatically remove duplicates - each item appears once.",
    },
    {
      question: "What does float(3) return?",
      options: ["3", "3.0", "'3'", "Error"],
      correctIndex: 1,
      explanation: "float(3) converts integer 3 to float 3.0.",
    },
  ],
  // ============ STRINGS ============
  "strings/string-basics": [
    {
      question: "Which escape sequence creates a new line?",
      options: ["\\t", "\\n", "\\r", "\\b"],
      correctIndex: 1,
      explanation: "\\n is the newline escape character.",
    },
    {
      question: "What does len(\"Hello World\") return?",
      options: ["10", "11", "12", "5"],
      correctIndex: 1,
      explanation: '"Hello World" has 11 characters including the space.',
    },
    {
      question: "Which of these creates a multi-line string?",
      options: ['\'Hello\'', '\"Hello\"', '\"\"\"Hello\nWorld\"\"\"', "'Hello\\nWorld'"],
      correctIndex: 2,
      explanation: "Triple quotes \"\"\"...\"\"\" are used for multi-line strings.",
    },
  ],
  "strings/string-methods": [
    {
      question: "What does 'Hello'.find('l') return?",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      explanation: ".find() returns the first index where 'l' appears. 'H'=0, 'e'=1, 'l'=2.",
    },
    {
      question: "What does 'Python'.capitalize() return?",
      options: ["python", "PYTHON", "Python", "pYTHON"],
      correctIndex: 2,
      explanation: ".capitalize() makes the first letter uppercase and the rest lowercase.",
    },
    {
      question: "What does 'banana'.count('a') return?",
      options: ["2", "3", "1", "0"],
      correctIndex: 1,
      explanation: "'banana' has three 'a' characters (positions 1, 3, 5).",
    },
    {
      question: "Strings are immutable. What does this mean?",
      options: [
        "They cannot be created",
        "They can't be changed in place - methods return new strings",
        "They use too much memory",
        "They cannot be printed",
      ],
      correctIndex: 1,
      explanation: "Immutable means you can't modify an existing string; methods return a new string.",
    },
  ],
  "strings/string-formatting": [
    {
      question: "What does f\"{42:04d}\" produce?",
      options: ["42", "0042", "00420", "0.42"],
      correctIndex: 1,
      explanation: ":04d pads with zeros to width 4: 0042",
    },
    {
      question: 'What does f"{3.14159:.3f}" produce?',
      options: ["3.14", "3.141", "3.142", "3.14159"],
      correctIndex: 2,
      explanation: ".3f rounds to 3 decimal places: 3.142 (rounds up).",
    },
    {
      question: 'What does f"{1000000:,}" produce?',
      options: ["1000000", "1,000,000", "10,00,000", "1.0M"],
      correctIndex: 1,
      explanation: "The comma adds thousands separators: 1,000,000",
    },
  ],
  // ============ OPERATORS ============
  "operators/arithmetic-operators": [
    {
      question: "What is the output of: 2 ** 3 ** 2?",
      options: ["64", "512", "36", "32"],
      correctIndex: 1,
      explanation: "Exponentiation is right-associative: 2 ** (3 ** 2) = 2 ** 9 = 512",
    },
    {
      question: "What is -7 // 2?",
      options: ["-3", "-4", "-3.5", "3"],
      correctIndex: 1,
      explanation: "Floor division rounds DOWN: -7 // 2 = -4 (not -3.5, not -3).",
    },
    {
      question: "Which operator has highest precedence?",
      options: ["*", "**", "+", "//"],
      correctIndex: 1,
      explanation: "Exponentation (**) has the highest precedence.",
    },
    {
      question: "What is 27 % 5?",
      options: ["5", "2", "4", "1"],
      correctIndex: 1,
      explanation: "27 = 5*5 + 2, so the remainder is 2.",
    },
  ],
  "operators/comparison-operators": [
    {
      question: "What does 'apple' > 'banana' evaluate to?",
      options: ["True", "False", "Error", "Depends"],
      correctIndex: 1,
      explanation: "Strings compare lexicographically: 'a' < 'b', so apple < banana → False.",
    },
    {
      question: "What does 3 < 5 < 4 evaluate to?",
      options: ["True", "False", "Error", "None"],
      correctIndex: 1,
      explanation: "Chained: (3 < 5) and (5 < 4) = True and False = False",
    },
    {
      question: "Which operator checks equality?",
      options: ["=", "==", "===", "!="],
      correctIndex: 1,
      explanation: "== checks equality; = is assignment.",
    },
  ],
  "operators/logical-operators": [
    {
      question: "What is not (True or False)?",
      options: ["True", "False", "None", "Error"],
      correctIndex: 1,
      explanation: "True or False = True, then not True = False.",
    },
    {
      question: "What value does '' or 'Default' evaluate to?",
      options: ["''", "'Default'", "False", "None"],
      correctIndex: 1,
      explanation: "Empty string is falsy, so 'or' returns 'Default'. This is short-circuit evaluation.",
    },
    {
      question: "What is 0 and 'hello'?",
      options: ["0", "'hello'", "False", "None"],
      correctIndex: 0,
      explanation: "0 is falsy, so 'and' short-circuits and returns 0 without checking the second value.",
    },
    {
      question: "In Python, which values are falsy?",
      options: ["0, '', [], None", "Only False", "0 and '' only", "None and False only"],
      correctIndex: 0,
      explanation: "0, empty strings, empty lists, None, and False are all falsy.",
    },
  ],
  // ============ CONTROL FLOW ============
  "control-flow/if-else": [
    {
      question: "What is the output of the ternary: x = 7; result = 'even' if x % 2 == 0 else 'odd'?",
      options: ["even", "odd", "7", "Error"],
      correctIndex: 1,
      explanation: "7 % 2 = 1, so the condition is False and 'odd' is assigned.",
    },
    {
      question: "In an if/elif/else, how many blocks can run?",
      options: ["All of them", "Only one", "At most two", "None"],
      correctIndex: 1,
      explanation: "Only the first matching condition's block runs.",
    },
    {
      question: "What happens if no condition is True and there's no else?",
      options: ["Error", "Nothing runs", "All blocks run", "Python auto-adds else"],
      correctIndex: 1,
      explanation: "Without else, if no condition matches, the program just continues.",
    },
  ],
  "control-flow/for-loops": [
    {
      question: "What does range(0, 10, 3) produce?",
      options: ["0,3,6,9", "0,3,6,9,12", "3,6,9", "0,1,2,...,10"],
      correctIndex: 0,
      explanation: "Range with step 3: 0, 3, 6, 9 (stops before 10).",
    },
    {
      question: "What is the sum of numbers from 1 to 10?",
      options: ["45", "55", "60", "50"],
      correctIndex: 1,
      explanation: "1+2+...+10 = 55 (n*(n+1)/2 = 10*11/2).",
    },
    {
      question: "What does for i, item in enumerate(items) provide?",
      options: ["Just items", "Just indices", "Both index and item", "Nothing"],
      correctIndex: 2,
      explanation: "enumerate() yields (index, item) pairs.",
    },
  ],
  "control-flow/while-loops": [
    {
      question: "What is the most common cause of infinite loops?",
      options: ["Using while True", "Forgotten condition update", "Short circuits", "Too many prints"],
      correctIndex: 1,
      explanation: "If the loop variable never changes, the condition stays True forever.",
    },
    {
      question: "What does break do?",
      options: ["Skips to next iteration", "Exits the loop completely", "Restarts the loop", "Pauses execution"],
      correctIndex: 1,
      explanation: "break immediately exits the loop.",
    },
    {
      question: "Which loop is best when you don't know how many iterations?",
      options: ["for", "while", "for-else", "do-while"],
      correctIndex: 1,
      explanation: "Use while when the number of iterations depends on a condition.",
    },
  ],
  // ============ LISTS ============
  "lists/list-basics": [
    {
      question: "What is the result of [1, 2, 3] + [4, 5]?",
      options: ["[1, 2, 3, 4, 5]", "[1,2,3]", "[5,7,8]", "Error"],
      correctIndex: 0,
      explanation: "The + operator concatenates lists.",
    },
    {
      question: "What is [1, 2, 3, 4, 5][::2]?",
      options: ["[1, 3, 5]", "[2, 4]", "[1, 2, 3]", "[1,2,3,4,5]"],
      correctIndex: 0,
      explanation: "::2 means step 2 - take every other element: 1, 3, 5",
    },
    {
      question: "What does my_list = [[] for _ in range(3)] create?",
      options: ["One list of 3 items", "3 empty lists", "A list with 3 nested empty lists", "Error"],
      correctIndex: 2,
      explanation: "It creates [[], [], []] - a list containing 3 empty lists.",
    },
    {
      question: "How do you remove ALL items from a list?",
      options: ["my_list.pop()", "my_list.clear()", "del my_list[0]", "my_list.remove_all()"],
      correctIndex: 1,
      explanation: ".clear() removes all items, leaving an empty list.",
    },
  ],
  "lists/list-comprehension": [
    {
      question: "What does [x for x in range(10) if x % 3 == 0] produce?",
      options: ["[0, 3, 6, 9]", "[3, 6, 9]", "[0,3,6]", "0,1,2,...,10"],
      correctIndex: 0,
      explanation: "Multiples of 3 in range(10): 0, 3, 6, 9",
    },
    {
      question: "Which is faster: list comprehension or a for loop + append?",
      options: [
        "For loop is faster",
        "List comprehension is faster",
        "They are exactly the same",
        "Depends on the OS",
      ],
      correctIndex: 1,
      explanation: "List comprehensions are generally faster than manual for loops.",
    },
    {
      question: "What does [n ** 2 for n in [1, 2, 3]] produce?",
      options: ["[1, 4, 9]", "[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9, 16]"],
      correctIndex: 0,
      explanation: "Each number squared: 1²=1, 2²=4, 3²=9",
    },
  ],
  // ============ FUNCTIONS ============
  "functions/function-basics": [
    {
      question: "What is the output of the following?\ndef f(a, b=2, c=3):\n    return a + b + c\nprint(f(1, c=10))",
      options: ["6", "13", "11", "Error"],
      correctIndex: 1,
      explanation: "f(1, c=10) → a=1, b=2, c=10 → 1+2+10 = 13",
    },
    {
      question: "What's a docstring?",
      options: [
        "A comment that starts with #",
        "A string at the top of a function explaining what it does",
        "Documentation automatically generated",
        "A test case",
      ],
      correctIndex: 1,
      explanation: "A docstring is the first string in a function/class/module, used to document it.",
    },
    {
      question: "What does *args do in a function?",
      options: [
        "Requires arguments",
        "Accepts any number of positional arguments as a tuple",
        "Accepts keyword arguments as a dict",
        "Multiplies arguments",
      ],
      correctIndex: 1,
      explanation: "*args collects extra positional arguments into a tuple.",
    },
    {
      question: "What does **kwargs do?",
      options: [
        "Accepts any number of keyword arguments as a dict",
        "Requires keyword arguments",
        "Squares keyword args",
        "Same as *args",
      ],
      correctIndex: 0,
      explanation: "**kwargs collects extra keyword arguments into a dictionary.",
    },
  ],
  "functions/lambda": [
    {
      question: "What does (lambda x: x * 2)(5) return?",
      options: ["5", "10", "25", "Error"],
      correctIndex: 1,
      explanation: "The lambda doubles its input: 5 * 2 = 10",
    },
    {
      question: "Which is a typical use for lambda?",
      options: [
        "Large complex functions",
        "Small one-off functions passed to sorted/map/filter",
        "Recursive functions",
        "Class definitions",
      ],
      correctIndex: 1,
      explanation: "Lambdas shine as short callbacks for sorted(), map(), filter(), etc.",
    },
    {
      question: "What is the main limitation of lambda?",
      options: [
        "Too slow",
        "Only one expression - no statements",
        "Cannot be assigned",
        "No limit",
      ],
      correctIndex: 1,
      explanation: "Lambdas can only contain a single expression, not statements.",
    },
  ],
  // ============ DICTIONARIES ============
  "dictionaries/dict-basics": [
    {
      question: "What happens with d = {'a': 1}; d['b']?",
      options: ["Returns None", "Raises KeyError", "Returns 0", "Creates the key"],
      correctIndex: 1,
      explanation: "Accessing a missing key raises KeyError. Use .get() to avoid it.",
    },
    {
      question: "What does {}.fromkeys(['a','b'], 0) create?",
      options: ["['a','b']", "{'a': 0, 'b': 0}", "{'a': None, 'b': None}", "Error"],
      correctIndex: 1,
      explanation: "fromkeys creates dict with given keys and a default value.",
    },
    {
      question: "What does sorted(d.items()) sort by?",
      options: ["Values", "Keys", "Length", "Nothing - error"],
      correctIndex: 1,
      explanation: "Sorted by keys by default when sorting items().",
    },
    {
      question: "How do you merge two dictionaries in Python 3.9+?",
      options: ["d1.merge(d2)", "d1 | d2", "d1 + d2", "dict_merge(d1, d2)"],
      correctIndex: 1,
      explanation: "The | operator merges: d1 | d2. Or use {**d1, **d2}.",
    },
  ],
  // ============ OOP ============
  "oop/classes-basics": [
    {
      question: "What is an object?",
      options: [
        "A function",
        "An instance of a class",
        "A variable",
        "A module",
      ],
      correctIndex: 1,
      explanation: "An object is an instance created from a class blueprint.",
    },
    {
      question: "What is the first parameter of instance methods?",
      options: ["cls", "self", "this", "me"],
      correctIndex: 1,
      explanation: "self refers to the instance itself in instance methods.",
    },
    {
      question: "What does __str__ method do?",
      options: [
        "Creates a string",
        "Defines the string representation used by print() and str()",
        "Converts the object",
        "Deletes the object",
      ],
      correctIndex: 1,
      explanation: "__str__ defines a readable string representation for print() and str().",
    },
    {
      question: "What is a class attribute?",
      options: [
        "An attribute per instance",
        "An attribute shared by all instances of a class",
        "A private attribute",
        "A method's variable",
      ],
      correctIndex: 1,
      explanation: "Class attributes are defined at class level and shared by all instances.",
    },
  ],
  "oop/inheritance": [
    {
      question: "What is the purpose of inheritance?",
      options: [
        "To delete classes",
        "To reuse and extend code from a parent class",
        "To make code slower",
        "To import modules",
      ],
      correctIndex: 1,
      explanation: "Inheritance lets a child class reuse and extend parent class code.",
    },
    {
      question: "Can a child class override a parent method?",
      options: ["Yes, by redefining it", "No, never", "Only private ones", "With super() only"],
      correctIndex: 0,
      explanation: "Redefining a method in the child overrides the parent's version.",
    },
    {
      question: "What does isinstance(dog, Animal) check?",
      options: [
        "If dog is exactly Animal",
        "If dog is an instance of Animal or its subclasses",
        "If dog can be converted",
        "If Animal is a class",
      ],
      correctIndex: 1,
      explanation: "isinstance returns True for the class or any of its subclasses.",
    },
    {
      question: "Which allows a class to inherit from multiple classes?",
      options: ["Single inheritance", "Multiple inheritance", "Method chaining", "Composition"],
      correctIndex: 1,
      explanation: "class Child(Parent1, Parent2) is multiple inheritance.",
    },
  ],
  // ============ ERROR HANDLING ============
  "error-handling/try-except": [
    {
      question: "What print does this produce?\ntry:\n    print('A')\n    x = 10/0\nexcept:\n    print('B')\nelse:\n    print('C')\nfinally:\n    print('D')",
      options: ["A C D", "A B C D", "A B D", "A B"],
      correctIndex: 2,
      explanation: "A prints, exception → B prints, else is skipped, finally always runs → D",
    },
    {
      question: "Which exception is raised for a missing dictionary key?",
      options: ["IndexError", "KeyError", "TypeError", "ValueError"],
      correctIndex: 1,
      explanation: "Accessing a missing dict key with d[key] raises KeyError.",
    },
    {
      question: "What is the purpose of raising an exception?",
      options: [
        "To pause the program forever",
        "To signal an error condition to be handled",
        "To print an error",
        "To delete a variable",
      ],
      correctIndex: 1,
      explanation: "Raising signals an error that must be handled by an except block.",
    },
    {
      question: "What does 'except Exception as e' do?",
      options: [
        "Catches only specific errors",
        "Catches all exceptions and stores the error object in e",
        "Ignores the error",
        "Logs the error",
      ],
      correctIndex: 1,
      explanation: "Exception is the base class for most errors; 'as e' captures the error object.",
    },
  ],
  // ============ FILE HANDLING ============
  "file-handling/file-operations": [
    {
      question: "What mode should you use to append to a file?",
      options: ['"r"', '"w"', '"a"', '"x"'],
      correctIndex: 2,
      explanation: '"a" (append) adds content to the end without erasing existing data.',
    },
    {
      question: "What does file.read() return?",
      options: ["A list of lines", "The entire file as a string", "One line", "Bytes"],
      correctIndex: 1,
      explanation: ".read() returns the whole file content as a single string.",
    },
    {
      question: "What happens if you open a file with 'w' that doesn't exist?",
      options: [
        "Error: file not found",
        "The file is created",
        "Nothing happens",
        "Python creates it in another folder",
      ],
      correctIndex: 1,
      explanation: "Opening with 'w' creates the file if it doesn't exist.",
    },
    {
      question: "Which is the safest way to read a file?",
      options: [
        "open then forget to close it",
        "Using the with statement",
        "Using read() 10 times",
        "Opening in 'w' mode",
      ],
      correctIndex: 1,
      explanation: "with open(...) ensures the file closes automatically even if errors occur.",
    },
  ],
  // ============ MODULES ============
  "modules/importing-modules": [
    {
      question: "Difference: from math import sqrt vs import math?",
      options: [
        "They are identical",
        "First allows sqrt() directly; second requires math.sqrt()",
        "First is slower",
        "Second imports everything",
      ],
      correctIndex: 1,
      explanation: "from-import brings the name into scope; import module requires module.name.",
    },
    {
      question: "What does import random do?",
      options: [
        "Makes the code random",
        "Imports the random module for generating random values",
        "Randomly imports modules",
        "Nothing",
      ],
      correctIndex: 1,
      explanation: "The random module provides functions like randint(), choice(), etc.",
    },
    {
      question: "What is a Python package?",
      options: [
        "Just one file",
        "A directory of modules with an __init__.py",
        "An executable program",
        "A virtual env",
      ],
      correctIndex: 1,
      explanation: "A package is a folder of modules (typically with __init__.py).",
    },
    {
      question: "Which module does NOT exist in Python's standard library?",
      options: ["json", "csv", "requests", "statistics"],
      correctIndex: 2,
      explanation: "requests is a third-party library, not part of the standard library.",
    },
  ],
};