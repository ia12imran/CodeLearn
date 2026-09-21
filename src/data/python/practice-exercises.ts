export interface PracticeExercise {
  title: string;
  description: string;
  topic: string;
  level: "Easy" | "Medium" | "Hard";
  starter: string;
  solution: string;
}

export const practiceExercises: PracticeExercise[] = [
  // ============ INTRODUCTION ============
  {
    title: "Hello World",
    description: "Write a program that prints 'Hello, World!' to the screen.",
    topic: "Introduction",
    level: "Easy",
    starter: `# Write your code here
print("Hello, World!")`,
    solution: `print("Hello, World!")`,
  },
  {
    title: "Personal Introduction",
    description: "Create variables for your name, age, and favorite hobby. Print a sentence using f-strings.",
    topic: "Introduction",
    level: "Easy",
    starter: `# Create variables
name = "Your Name"
age = 20
hobby = "coding"

# Print a sentence using f-strings
print(f"...")`,
    solution: `name = "Your Name"
age = 20
hobby = "coding"
print(f"Hi, I'm {name}. I'm {age} years old and I love {hobby}!")`,
  },
  {
    title: "Basic Calculator",
    description: "Write a program that adds, subtracts, multiplies, and divides two numbers.",
    topic: "Introduction",
    level: "Easy",
    starter: `# Basic calculator
a = 10
b = 4

print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")`,
    solution: `a = 10
b = 4
print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")`,
  },

  // ============ SYNTAX / VARIABLES ============
  {
    title: "Variables & Types",
    description: "Create variables of each type (int, float, string, bool) and print them with their types.",
    topic: "Syntax & Variables",
    level: "Easy",
    starter: `# Create variables of each type
my_int = 42
my_float = 3.14
my_string = "Hello"
my_bool = True

# Print each with its type
print(f"{my_int} -> {type(my_int)}")
print(f"{my_float} -> {type(my_float)}")
print(f"{my_string} -> {type(my_string)}")
print(f"{my_bool} -> {type(my_bool)}")`,
    solution: `my_int = 42
my_float = 3.14
my_string = "Hello"
my_bool = True
print(f"{my_int} -> {type(my_int)}")
print(f"{my_float} -> {type(my_float)}")
print(f"{my_string} -> {type(my_string)}")
print(f"{my_bool} -> {type(my_bool)}")`,
  },
  {
    title: "Swap Two Variables",
    description: "Swap the values of two variables without using a third variable (Python trick!).",
    topic: "Syntax & Variables",
    level: "Medium",
    starter: `# Swap the values
a = "Python"
b = "Programming"

print(f"Before: a={a}, b={b}")

# TODO: Swap the values here



print(f"After: a={a}, b={b}")`,
    solution: `a, b = "Python", "Programming"
print(f"Before: a={a}, b={b}")
a, b = b, a
print(f"After: a={a}, b={b}")`,
  },
  {
    title: "Type Conversion Challenge",
    description: "Convert strings to numbers, calculate, and convert back.",
    topic: "Syntax & Variables",
    level: "Medium",
    starter: `# Convert strings to numbers and calculate
num1 = "25"
num2 = "17.5"

# TODO: Convert and add them
# TODO: Print the result with a precision of 2 decimals

# TODO: Convert result back to string and print its type`,
    solution: `num1 = "25"
num2 = "17.5"
result = int(num1) + float(num2)
print(f"Sum: {result:.2f}")
result_str = str(result)
print(f"Converted back to string: {result_str} ({type(result_str).__name__})")`,
  },

  // ============ STRINGS ============
  {
    title: "String Reverser",
    description: "Reverse a string, count vowels, and check if it's a palindrome.",
    topic: "Strings",
    level: "Medium",
    starter: `def reverse_string(s):
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
print(f"Palindrome: {is_palindrome(text)}")`,
    solution: `def reverse_string(s): return s[::-1]
def count_vowels(s): return sum(1 for c in s.lower() if c in "aeiou")
def is_palindrome(s):
    clean = s.lower().replace(" ", "")
    return clean == clean[::-1]
text = "racecar"
print(f"Original: {text}")
print(f"Reversed: {reverse_string(text)}")
print(f"Vowels: {count_vowels(text)}")
print(f"Palindrome: {is_palindrome(text)}")`,
  },
  {
    title: "String Cleaner",
    description: "Clean up a messy string: strip extra spaces, fix case, and remove digits.",
    topic: "Strings",
    level: "Medium",
    starter: `# Clean up messy strings
messy = "  Hello123World456  "
print(f"Original: '{messy}'")

# TODO: Remove all digits
# TODO: Strip whitespace
# TODO: Convert to proper case (each word capitalized)
# TODO: Print each cleaned result`,
    solution: `messy = "  Hello123World456  "
import re
cleaned_digits = re.sub(r'\\d+', '', messy)
cleaned = cleaned_digits.strip().title()
print(f"Cleaned: '{cleaned}'")`,
  },
  {
    title: "Vowel Counter",
    description: "Count vowels, consonants, and spaces in a sentence.",
    topic: "Strings",
    level: "Medium",
    starter: `sentence = "The quick brown fox jumps over the lazy dog"

# TODO: Count vowels (a, e, i, o, u)
# TODO: Count consonants
# TODO: Count spaces
# TODO: Print the counts`,
    solution: `sentence = "The quick brown fox jumps over the lazy dog"
vowels = sum(1 for c in sentence.lower() if c in "aeiou")
consonants = sum(1 for c in sentence.lower() if c.isalpha() and c not in "aeiou")
spaces = sentence.count(" ")
print(f"Vowels: {vowels}")
print(f"Consonants: {consonants}")
print(f"Spaces: {spaces}")
print(f"Total chars: {len(sentence)}")`,
  },

  // ============ OPERATORS ============
  {
    title: "Time Converter",
    description: "Convert total seconds into hours, minutes, and seconds.",
    topic: "Operators",
    level: "Easy",
    starter: `total_seconds = 3661

# Calculate hours, minutes, seconds
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60

print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`,
    solution: `total_seconds = 3661
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`,
  },
  {
    title: "FizzBuzz",
    description: "Print numbers 1-100, but multiples of 3 say 'Fizz', multiples of 5 say 'Buzz', multiples of both say 'FizzBuzz'.",
    topic: "Operators",
    level: "Medium",
    starter: `for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
print()`,
    solution: `for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
print()`,
  },
  {
    title: "Prime Number Checker",
    description: "Write a function that determines whether a number is prime.",
    topic: "Operators",
    level: "Hard",
    starter: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Test
for num in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]:
    print(f"{num} is prime: {is_prime(num)}")`,
    solution: `def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True
for num in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]:
    print(f"{num} is prime: {is_prime(num)}")`,
  },

  // ============ CONTROL FLOW ============
  {
    title: "Grade Calculator",
    description: "Convert a numeric score into a letter grade (A-F) with a comment.",
    topic: "Control Flow",
    level: "Easy",
    starter: `score = 85

# TODO: Assign grade based on score
# A: 90+, B: 80+, C: 70+, D: 60+, F: below 60
# Also add a comment for each grade

print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Comment: {comment}")`,
    solution: `score = 85
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
print(f"Comment: {comment}")`,
  },
  {
    title: "Number Guessing Game",
    description: "Implement a number guessing game with feedback.",
    topic: "Control Flow",
    level: "Medium",
    starter: `import random

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

print(f"Found in {attempts} attempts!")`,
    solution: `import random
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
print(f"Found in {attempts} attempts!")`,
  },
  {
    title: "Multiplication Table",
    description: "Print a multiplication table using nested loops.",
    topic: "Control Flow",
    level: "Easy",
    starter: `# Multiplication table
size = 12

# TODO: Print a 12x12 multiplication table
# Use nested for loops
# Format numbers so they align nicely`,
    solution: `size = 12
for i in range(1, size + 1):
    row = [f"{i * j:>4}" for j in range(1, size + 1)]
    print("".join(row))`,
  },
  {
    title: "Fibonacci Sequence",
    description: "Print the first N numbers of the Fibonacci sequence.",
    topic: "Control Flow",
    level: "Medium",
    starter: `# Fibonacci sequence
n = 10

# TODO: Print the first 10 Fibonacci numbers
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
# Each number is the sum of the two previous`,
    solution: `n = 10
a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
print()`,
  },

  // ============ LISTS ============
  {
    title: "Second Largest Number",
    description: "Find the second largest number in a list without using sort().",
    topic: "Lists",
    level: "Medium",
    starter: `def second_largest(numbers):
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
print(f"Second largest: {second_largest(nums)}")`,
    solution: `def second_largest(numbers):
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
print(f"Second largest: {second_largest(nums)}")`,
  },
  {
    title: "List Sorting & Filtering",
    description: "Filter, transform, and analyze lists without built-in sort.",
    topic: "Lists",
    level: "Medium",
    starter: `numbers = [45, 12, 78, 34, 67, 90, 23]

# TODO: Even numbers
# TODO: Numbers doubled
# TODO: Average of numbers
# TODO: Sorted in ascending (without .sort)
# TODO: Sorted in descending`,
    solution: `numbers = [45, 12, 78, 34, 67, 90, 23]
evens = [n for n in numbers if n % 2 == 0]
doubled = [n * 2 for n in numbers]
average = sum(numbers) / len(numbers)
ascending = sorted(numbers)
descending = sorted(numbers, reverse=True)
print(f"Evens: {evens}")
print(f"Doubled: {doubled}")
print(f"Average: {average:.1f}")
print(f"Ascending: {ascending}")
print(f"Descending: {descending}")`,
  },
  {
    title: "Matrix Transpose",
    description: "Transpose a matrix (swap rows and columns).",
    topic: "Lists",
    level: "Hard",
    starter: `matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

# TODO: Transpose the matrix
# Expected result:
# [[1, 4, 7], [2, 5, 8], [3, 6, 9]]`,
    solution: `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(f"Original: {matrix}")
print(f"Transposed: {transposed}")`,
  },

  // ============ DICTIONARIES ============
  {
    title: "Word Frequency Counter",
    description: "Count word frequencies in a paragraph and find the most common word.",
    topic: "Dictionaries",
    level: "Medium",
    starter: `def word_frequency(text):
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
print(f"\\nMost common: {list(freq.keys())[0]}")`,
    solution: `def word_frequency(text):
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
print(f"\\nMost common: {list(freq.keys())[0]}")`,
  },
  {
    title: "Phone Book Manager",
    description: "Build a small phone book using a dictionary with add, lookup, and list functions.",
    topic: "Dictionaries",
    level: "Medium",
    starter: `contacts = {}

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
list_contacts()`,
    solution: `contacts = {}
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
list_contacts()`,
  },
  {
    title: "Nested Data Explorer",
    description: "Work with nested dictionaries (student records).",
    topic: "Dictionaries",
    level: "Hard",
    starter: `students = {
    "Alice": {"grades": [85, 90, 92], "major": "CS"},
    "Bob": {"grades": [70, 65, 72], "major": "Math"},
    "Charlie": {"grades": [95, 88, 93], "major": "CS"},
}

# TODO: Calculate each student's average grade
# TODO: Find the student with the highest average
# TODO: List all CS majors
# TODO: Print a report for each student`,
    solution: `students = {
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
print(f"CS majors: {cs_majors}")`,
  },

  // ============ FUNCTIONS ============
  {
    title: "Temperature Converter",
    description: "Build functions to convert between Celsius and Fahrenheit.",
    topic: "Functions",
    level: "Easy",
    starter: `def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

# Test
temps_c = [0, 20, 37, 100]
for t in temps_c:
    print(f"{t}°C = {celsius_to_fahrenheit(t):.1f}°F")

print()
temps_f = [32, 68, 100, 212]
for t in temps_f:
    print(f"{t}°F = {fahrenheit_to_celsius(t):.1f}°C")`,
    solution: `def celsius_to_fahrenheit(c): return (c * 9/5) + 32
def fahrenheit_to_celsius(f): return (f - 32) * 5/9
temps_c = [0, 20, 37, 100]
for t in temps_c:
    print(f"{t}°C = {celsius_to_fahrenheit(t):.1f}°F")
print()
temps_f = [32, 68, 100, 212]
for t in temps_f:
    print(f"{t}°F = {fahrenheit_to_celsius(t):.1f}°C")`,
  },
  {
    title: "Simple Calculator",
    description: "Build a calculator function that handles +, -, *, / with error handling.",
    topic: "Functions",
    level: "Medium",
    starter: `def calculator(a, op, b):
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
    print(f"  {a} {op} {b} = {calculator(a, op, b)}")`,
    solution: `def calculator(a, op, b):
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
    print(f"  {a} {op} {b} = {calculator(a, op, b)}")`,
  },
  {
    title: "Callback & Higher-Order Functions",
    description: "Write functions that accept other functions as arguments.",
    topic: "Functions",
    level: "Hard",
    starter: `def apply_twice(func, x):
    return func(func(x))

def multiply:
    pass

# TODO: Define a function double(n) that returns n * 2
# TODO: Define a function square(n) that returns n ** 2
# TODO: Use apply_twice with these functions
# TODO: Print the results`,
    solution: `def apply_twice(func, x):
    return func(func(x))
def double(n): return n * 2
def square(n): return n ** 2
print(f"double(5) twice: {apply_twice(double, 5)}")
print(f"square(3) twice: {apply_twice(square, 3)}")`,
  },

  // ============ OOP: Classes & Objects ============
  {
    title: "Bank Account Class",
    description: "Create a BankAccount class with deposit, withdraw, and statement methods.",
    topic: "OOP: Classes & Objects",
    level: "Medium",
    starter: `class BankAccount:
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
print(acc.withdraw(5000))`,
    solution: `class BankAccount:
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
print(acc.withdraw(5000))`,
  },
  {
    title: "Shape Hierarchy",
    description: "Create a Shape base class with Circle and Rectangle subclasses.",
    topic: "OOP: Classes & Objects",
    level: "Medium",
    starter: `import math

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
    print(s.describe())`,
    solution: `import math
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
    print(s.describe())`,
  },


  // ============ ERROR HANDLING ============
  {
    title: "Safe Division Handler",
    description: "Write a safe division function handling ZeroDivisionError and TypeError.",
    topic: "Error Handling",
    level: "Medium",
    starter: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"

# Test
tests = [(10, 3), (10, 0), ("10", 3), (10, "3")]
for a, b in tests:
    print(f"  {a} / {b} = {safe_divide(a, b)}")`,
    solution: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"
tests = [(10, 3), (10, 0), ("10", 3), (10, "3")]
for a, b in tests:
    print(f"  {a} / {b} = {safe_divide(a, b)}")`,
  },
  {
    title: "Custom Exception",
    description: "Create a custom exception class and raise it for invalid inputs.",
    topic: "Error Handling",
    level: "Hard",
    starter: `class InvalidAgeError(Exception):
    pass

def set_age(age):
    if not isinstance(age, int):
        raise InvalidAgeError("Age must be an integer!")
    if age < 0 or age > 150:
        raise InvalidAgeError("Age must be between 0 and 150!")
    return f"Age set to {age}"

# TODO: Test set_age with valid and invalid values
# Use try/except to catch InvalidAgeError
# Try: 25 (valid), -5 (invalid), 200 (invalid), "abc" (invalid)`,
    solution: `class InvalidAgeError(Exception): pass
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
        print(f"  Error: {e}")`,
  },

  // ============ FILE HANDLING ============
  {
    title: "CSV Reader",
    description: "Read data from a CSV-style string and compute statistics.",
    topic: "File Handling",
    level: "Medium",
    starter: `# Simulate CSV file data
data = """name,score
Alice,85
Bob,92
Charlie,78
Diana,95
Eve,88"""

# TODO: Parse the CSV data
# TODO: Compute average score
# TODO: Find the student with the highest score
# TODO: Print a sorted report`,
    solution: `data = """name,score
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
    print(f"  {name}: {score}")`,
  },

  // ============ MODULES ============
  {
    title: "Dice Roll Simulator",
    description: "Simulate dice rolls and visualize the distribution.",
    topic: "Modules",
    level: "Medium",
    starter: `import random
from collections import Counter

# Simulate 1000 dice rolls
rolls = [random.randint(1, 6) for _ in range(1000)]
counts = Counter(rolls)

print("Dice roll distribution (1000 rolls):")
for face in range(1, 7):
    bar = "#" * (counts[face] // 5)
    print(f"  {face}: {bar} ({counts[face]})")`,
    solution: `import random
from collections import Counter
rolls = [random.randint(1, 6) for _ in range(1000)]
counts = Counter(rolls)
print("Dice roll distribution (1000 rolls):")
for face in range(1, 7):
    bar = "#" * (counts[face] // 5)
    print(f"  {face}: {bar} ({counts[face]})")`,
  },
  {
    title: "Password Generator",
    description: "Generate strong random passwords using the random module.",
    topic: "Modules",
    level: "Medium",
    starter: `import random
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
    print(f"Password {i+1}: {generate_password()}")`,
    solution: `import random
import string
def generate_password(length=12):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))
for i in range(5):
    print(f"Password {i+1}: {generate_password()}")`,
  },
];