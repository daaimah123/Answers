/*

Prompt a user for their name and then display a greeting message that repeats the name a specified number of times. Practice using concat, join, and repeat.

You may also need some of the following (but not required): 
- int()
- isinstance()
- list()

*/

import sys # do not remove line

def greet_with_repeats():
    # Get user input
    name = input("Please enter your name: ")
    
    # Validate and convert repeat count to integer
    while True:
        try:
            repeat_count = int(input("How many times would you like your name repeated? "))
            if repeat_count > 0:
                break
            else:
                print("Please enter a positive number.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")

    # Create repeated name list
    repeated_name = [name] * repeat_count

    # Join the list into a string
    full_greeting = ''.join(repeated_name)

    # Print the result
    print(full_greeting)

# Call the function
greet_with_repeats()