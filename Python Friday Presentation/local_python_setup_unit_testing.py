# As a beginner Python learner, your task is to demonstrate that you can set up Python locally and create simple unit tests. Follow these steps:

    # Install Python on your local machine if you haven't already. Make sure you have version 3.x installed.
    # Open a text editor or IDE (like PyCharm, VSCode, or Sublime Text) and create a new Python file.
    # Write a simple Python script with at least two functions that perform different operations. For example:
    
        # def add_numbers(a, b):
        #     return a + b

        # def multiply_numbers(a, b):
        #     return a * b

# Create a separate file for your unit tests (e.g., test_calculations.py). In this file, import the functions you defined and write unit tests for each function. Here's an example structure:
      
        # import unittest
        # from your_script_name import add_numbers, multiply_numbers

        # class TestCalculations(unittest.TestCase):
        #     def test_add_numbers(self):
        #         self.assertEqual(add_numbers(5, 3), 8)
        #         self.assertEqual(add_numbers(-1, 1), 0)

        #     def test_multiply_numbers(self):
        #         self.assertEqual(multiply_numbers(4, 5), 20)
        #         self.assertEqual(multiply_numbers(-2, 3), -6)

        # if __name__ == '__main__':
        #     unittest.main()

# Run the test file using Python from the command line. The exact command may vary depending on your operating system:
    # On Windows: python test_calculations.py
    # On macOS/Linux: python3 test_calculations.py
# Observe the output of the tests. They should pass if your functions work correctly.
# Modify one of your functions slightly (e.g., change add_numbers to always return 10) and run the tests again. You should see one test fail.
# Finally, fix the function that caused the test failure and run the tests once more to ensure all pass.

# Key Points to Consider:
    # Ensure your Python installation is correct and accessible from the command line.
    # Use proper indentation in your code.
    # Understand the structure of unit tests, including assertions and test cases.
    # Learn how to run Python scripts from the command line.



# =====================
# EVALUATION CRITERIA
# =====================

# I. Setting Up Python Locally
    # Correct version installed (3.x)
        # Check if Python version 3.x is installed correctly
        # Verify installation using python --version command
    # IDE/Text Editor Setup
        # Ensure a suitable IDE or text editor is installed (e.g., PyCharm, VSCode, Sublime Text)
        # Verify proper configuration for Python development
    # Command Line Access
        # Confirm Python can be run from command line
        # Check if python command works correctly
    # File Creation
        # Verify ability to create new Python files
        # Ensure proper file extension (.py)

# II. Creating Simple Functions
    # Function Definition
        # Create at least two functions as specified
        # Ensure correct syntax and indentation
    # Function Purpose
        # Demonstrate different operations in each function
        # Show understanding of basic programming concepts
    # Function Implementation
        # Implement functions correctly
        # Ensure functions perform expected operations

# III. Creating Unit Tests
    # Test File Creation
        # Create a separate test file (e.g., test_calculations.py)
        # Verify proper naming convention
    # Import Statements
        # Correctly import functions from main script
        # Ensure proper syntax for imports
    # Test Class Structure
        # Create a test class inheriting from unittest.TestCase
        # Demonstrate understanding of unittest module
    # Test Methods
        # Write at least two test methods as specified
        # Ensure correct use of assertion methods

# IV. Running Tests and Observing Results
    # Test Execution
        # Demonstrate ability to run tests from command line
        # Show understanding of different operating systems' commands
    # Test Output Interpretation
        # Correctly interpret test results
        # Understand passing/failing tests
    # Modifying Function and Re-running Tests
        # Modify one function slightly
        # Run tests again and identify failing test
        # Fix the function and run tests to pass
    # Command Line Usage
        # Demonstrate correct command line usage for running Python scripts

# V. Additional Considerations
    # Error Handling
        # Show awareness of error handling concepts
        # Demonstrate ability to handle potential errors
    # Code Organization
        # Display good code organization practices
        # Show understanding of separating logic and testing
    # Documentation Comments
        # Include appropriate comments in code
        # Demonstrate understanding of documentation importance

# =====================



# SOLUTION 1: Using assert statements
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

# Test cases
assert add(1, 2) == 3, "Addition test failed"
assert subtract(5, 3) == 2, "Subtraction test failed"

print("All tests passed!")
# This solution uses Python's built-in assert statement to check if the function outputs match the expected results. It provides a simple way to write tests without importing any external libraries.




# SOLUTION 2: Using a custom test function
def check_equal(actual, expected):
    if actual != expected:
        print(f"Test failed: {actual} != {expected}")
    else:
        print("Test passed")

def add(x, y):
    return x + y

check_equal(add(1, 2), 3)
check_equal(add(5, 3), 8)

def multiply(x, y):
    return x * y

check_equal(multiply(2, 3), 6)
check_equal(multiply(-1, 4), -4)

# This solution defines a custom check_equal function that prints whether the test passed or failed. It provides more flexibility than assert statements but still remains lightweight.



# SOLUTION 3: Using a simple test runner class
# This solution creates a simple TestRunner class that manages test cases and reports results. It provides a bit more structure than the previous alternatives while remaining relatively lightweight.
class TestRunner:
    def __init__(self):
        self.passed_tests = []
        self.failed_tests = []

    def run_test(self, name, func, expected):
        result = func()
        if result == expected:
            self.passed_tests.append(name)
        else:
            self.failed_tests.append((name, result, expected))

    def report_results(self):
        print("Test Results:")
        print(f"Passed: {len(self.passed_tests)}")
        print(f"Failed: {len(self.failed_tests)}")

def add(x, y):
    return x + y

runner = TestRunner()

runner.run_test("add_1_to_2", lambda: add(1, 2), 3)
runner.run_test("add_5_to_3", lambda: add(5, 3), 8)
runner.run_test("subtract_10_from_20", lambda: subtract(20, 10), 10)

runner.report_results()