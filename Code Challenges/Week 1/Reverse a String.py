# Reverse the provided string and return the reversed string. For example, "hello" should become "olleh".

# Examples
    # reverseString("hello") should return a string.
    # reverseString("hello") should return the string olleh.
    # reverseString("Howdy") should return the string ydwoH.
    # reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

# Method 1: Use slice notation
# 1. Analyze the requirements:
    # Create a function that takes a string as input
    # Reverse the input string
    # Return the reversed string
# 2. Identify Python equivalents:
    # String input -> input()
    # String reversal -> Slicing with step -1
    # Function definition -> def
# 3. Plan the structure:
    # Define a function named reverse_string
    # Take one parameter (the input string)
    # Use slicing with step -1 to reverse the string
    # Return the reversed string
# Key points to consider:
    # Python strings are immutable, so we need to create a new string
    # The slicing syntax for reversing a string is [::-1]

# Explanation of [::-1]
    # [::-1] is a slice notation that tells Python to create a new string by stepping backwards through the original string.
# The syntax is: [start:end:step]
    # start: Optional, specifies the starting index (default is 0)
    # end: Optional, specifies the ending index (default is the length of the string)
    # step: Specifies the step size between elements
# In [::-1]:
    # start is omitted, so it starts from the beginning of the string
    # end is omitted, so it goes to the end of the string
    # step is set to -1, meaning we move backwards one character at a time
# This effectively creates a new string with all characters in reverse order.

def reverse_string(input_string):
    return input_string[::-1]

# Test the function with examples
print(reverse_string("hello"))  # Should print: olleh
print(reverse_string("Howdy"))  # Should print: ydwoh
print(reverse_string("Greetings from Earth"))  # Should print: htrae mrof sgniteerG

# Method 2: Using the built-in reversed() function with join()
# def reverse_string(input_string):
#     return ''.join(reversed(input_string))

# Method 3: Using a loop
# def reverse_string(input_string):
    # reversed = ""
    # for char in input_string:
    #     reversed = char + reversed
    # return reversed

# Method 4: Using list comprehension 
# def reverse_string(input_string):
#     return ''.join([input_string[i] for i in range(len(input_string)-1, -1, -1)])

# Method 5: Using the reverse() method
# def reverse_string(input_string):
#     return input_string.reverse()


# run python3 Reverse\ a\ String.py 