# As a beginner Python learner, your task is to create a Python script that demonstrates several key foundational concepts. Follow these steps:

# Create a Python script that incorporates the following elements:
    # a. Variables and Data Types
        # Declare variables of different data types (int, float, string, boolean)
        # Demonstrate type conversion between numeric types
   
    # b. Control Flow Statements
        # Use if-else statements to control program flow
        # Implement nested if-else conditions
  
    # c. Loops
        # Use a for loop to iterate over a sequence (e.g., a list of numbers)
        # Use a while loop to repeatedly execute a block of code until a condition is met
 
   # d. Functions
        # Define and call a simple function
        # Pass arguments to the function
    
    # e. Lists and Tuples
        # Create and manipulate lists and tuples
        # Perform common operations like indexing, slicing, and concatenation
   
    # f. Strings
        # Manipulate strings using various methods (e.g., upper(), lower(), strip())
        # Format strings using f-strings or the .format() method
        # Include comments throughout your code to explain each concept as you implement it.
        # Use meaningful variable names that describe their purpose.
        # Organize your code into logical sections using blank lines for readability.
        # Include error handling for potential exceptions (e.g., using try-except blocks).

    # Here's a basic structure to get you started:

            # Variable declarations and data types
            # integer_var = 42
            # float_var = 3.14
            # string_var = "Hello, World!"
            # boolean_var = True

            # Type conversion
            # converted_int = int(float_var)

            # Control flow
            # if boolean_var:
            #     print("Boolean is True")
            # else:
            #     print("Boolean is False")

            # Nested conditions
            # if integer_var > 10:
            #     print("Integer is greater than 10")
            #     if integer_var > 50:
            #         print("Integer is also greater than 50")
            #     else:
            #         print("Integer is between 11 and 50")

            # Loops
            # for i in range(5):
            #     print(f"Iteration {i}")

            # While loop
            # number = 0
            # while number < 5:
            #     print(number)
            #     number += 1

            # Function definition and call
            # def greet(name):
            #     return f"Hello, {name}!"

            # result = greet("Alice")
            # print(result)

            # Lists and tuples
            # my_list = [1, 2, 3, 4, 5]
            # my_tuple = (6, 7, 8, 9, 10)

            # String manipulation
            # original_string = "   Hello, World!   "
            # cleaned_string = original_string.strip().upper()
            # formatted_string = f"My favorite string is '{cleaned_string}'."

            # print(formatted_string)





# USING ABSTRACT BASE CASES

# Abstract Base Classes in Python are important for:

# Defining interfaces
# Enforcing contracts on subclasses
# Providing a way to customize behavior of isinstance() and issubclass()

# Example usage:

    # from abc import ABC, abstractmethod

    # class Animal(ABC):
    #     @abstractmethod
    #     def make_sound(self):
    #         pass

    # class Dog(Animal):
    #     def make_sound(self):
    #         return "Woof!"

    # # Usage
    # dog = Dog()
    # print(dog.make_sound())  # Output: Woof!

# Comparison to JavaScript: JavaScript doesn't have built-in support for abstract classes, but you can achieve similar functionality using interfaces or abstract functions:

    # abstract class Animal {
    #   abstract makeSound();
    # }

    # class Dog extends Animal {
    #   makeSound() { return "Woof!" }
    # }

from abc import ABC, abstractmethod

class DataObject(ABC):
    @abstractmethod
    def get_value(self):
        pass

    @abstractmethod
    def set_value(self, value):
        pass

class Integer(DataObject):
    def __init__(self, value=0):
        self._value = value

    def get_value(self):
        return self._value

    def set_value(self, value):
        self._value = value

class Float(DataObject):
    def __init__(self, value=0.0):
        self._value = value

    def get_value(self):
        return self._value

    def set_value(self, value):
        self._value = value

class String(DataObject):
    def __init__(self, value=""):
        self._value = value

    def get_value(self):
        return self._value

    def set_value(self, value):
        self._value = value

# Create instances of each data type
integer_var = Integer(42)
float_var = Float(3.14)
string_var = String("Hello, World!")

# Demonstrate type conversion
converted_int = int(float_var.get_value())

# Control flow using methods
if integer_var.get_value() > 10:
    print("Integer is greater than 10")
else:
    print("Integer is less than or equal to 10")

# Loops using class methods
for i in range(5):
    print(f"Iteration {i}")

# While loop using class methods
number = Integer(0)
while number.get_value() < 5:
    print(number.get_value())
    number.set_value(number.get_value() + 1)

# Function definition using class methods
def greet(self, name):
    return f"Hello, {name}!"

# Create instances of classes with methods
integer_methods = Integer()
float_methods = Float()
string_methods = String()

result = string_methods.greet("Alice")
print(result)

# Lists and tuples using class attributes
class ListClass(DataObject):
    def __init__(self):
        self.my_list = [int(value) for value in DataType]

list_instance = ListClass()

# String manipulation using class methods
original_string = string_var.get_value().strip().upper()
formatted_string = f"My favorite string is '{original_string}'."

print(formatted_string)







# USING ENUMS

# Enums in Python allow you to define a set of named constants. They're useful for representing a fixed set of constants.

# Example:

    # from enum import Enum

    # class Color(Enum):
    #     RED = 1
    #     GREEN = 2
    #     BLUE = 3

    # print(Color.RED)  # Color.red
    # print(Color.RED.value)  # 1

# Importance:
    # Type safety for fixed sets of constants
    # Improved code readability
    # Avoiding magic numbers

# Comparison to JavaScript: JavaScript has enums through TypeScript, but native JavaScript doesn't have built-in support:

    # enum Color {
    #   Red = 1,
    #   Green = 2,
    #   Blue = 3
    # }

    # console.log(Color.Red); // 1

# Native JavaScript equivalent:

    # const Color = Object.freeze({
    #   RED: 1,
    #   GREEN: 2,
    #   BLUE: 3
    # });

    # console.log(Color.RED); // 1

from enum import Enum

class DataType(Enum):
    INTEGER = 1
    FLOAT = 2
    STRING = 3

# Create instances of each data type
integer_var = DataType.INTEGER
float_var = DataType.FLOAT
string_var = DataType.STRING

# Demonstrate type conversion
converted_int = int(float_var.value)

# Control flow using enum methods
if integer_var == DataType.INTEGER:
    print("Integer is selected")
else:
    print("Other data types are selected")

# Loops using enum values
for i in range(5):
    print(f"Iteration {i}")

# While loop using enum values
number = 0
while number < 5:
    print(number)
    number += 1

# Function definition using enum methods
def greet(self, name):
    return f"Hello, {name}!"

# Create instances of enums with methods
integer_methods = DataType.INTEGER
float_methods = DataType.FLOAT
string_methods = DataType.STRING

result = string_methods.greet("Alice")
print(result)

# Lists and tuples using enum attributes
class ListClass:
    def __init__(self):
        self.my_list = [int(value) for value in DataType]

list_instance = ListClass()

# String manipulation using enum methods
original_string = "   Hello, World!   "
cleaned_string = original_string.strip().upper()
formatted_string = f"My favorite string is '{cleaned_string}'."

print(formatted_string)







# USING CLASSES AND OBJECTS

# Classes and objects are fundamental concepts in Python for creating custom types and encapsulating data and behavior.

# Example:

    # class Person:
    #     def __init__(self, name, age):
    #         self.name = name
    #         self.age = age
        
    #     def greet(self):
    #         print(f"Hello, I'm {self.name}, I am {self.age} years old.")

    # person = Person("Alice", 30)
    # person.greet()  # Output: Hello, I'm Alice, I am 30 years old.

# Importance:
    # Encapsulation
    # Code reuse
    # Organizing related data and methods

# Comparison to JavaScript: JavaScript uses prototypes instead of classes:

    # function Person(name, age) {
    #   this.name = name;
    #   this.age = age;
    # }

    # Person.prototype.greet = function() {
    #   console.log(`Hello, I'm ${this.name}, I am ${this.age} years old.`);
    # };

    # const person = new Person("Alice", 30);
    # person.greet(); // Output: Hello, I'm Alice, I am 30 years old.

# Define classes for different data types
class Integer:
    def __init__(self, value):
        self.value = value

class Float:
    def __init__(self, value):
        self.value = value

class String:
    def __init__(self, value):
        self.value = value

# Create instances of each class
integer_var = Integer(42)
float_var = Float(3.14)
string_var = String("Hello, World!")

# Demonstrate type conversion
converted_int = int(float_var.value)

# Control flow using methods
if integer_var.value > 10:
    print("Integer is greater than 10")
else:
    print("Integer is less than or equal to 10")

# Loops using class methods
for i in range(5):
    print(f"Iteration {i}")

# While loop using class methods
number = Integer(0)
while number.value < 5:
    print(number.value)
    number.value += 1

# Function definition using class methods
def greet(self, name):
    return f"Hello, {name}!"

# Create instances of classes with methods
integer_methods = Integer()
float_methods = Float()
string_methods = String()

result = string_methods.greet("Alice")
print(result)

# Lists and tuples using class attributes
class ListClass:
    def __init__(self):
        self.my_list = [1, 2, 3, 4, 5]

class TupleClass:
    def __init__(self):
        self.my_tuple = (6, 7, 8, 9, 10)

list_instance = ListClass()
tuple_instance = TupleClass()

# String manipulation using class methods
original_string = string_var.value.strip().upper()
formatted_string = f"My favorite string is '{original_string}'."

print(formatted_string)
