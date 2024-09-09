/*
Create a function that takes two numbers as arguments and returns their sum.

Examples: 	
addition(3, 2) ➞ 5		addition(-3, -6) ➞ -9	addition(7, 3) ➞ 10

Notes: Don't forget to return the result and check for edge cases! 


Explanation:

Parameter Validation: Before performing the addition, we validate that both inputs are indeed numbers. This is important because attempting arithmetic operations on non-numbers would lead to unexpected results or errors. If either input is not a number, we throw an error indicating that both inputs must be numbers.

Performing Addition: Once we've confirmed that both inputs are numbers, we simply add them together using the + operator and return the result.

Edge Cases: The function implicitly handles several edge cases:
Negative Numbers: Since JavaScript supports signed integers, the function correctly handles negative numbers.

Zero: Adding zero to any number yields the original number, so the function correctly handles cases where one or both of the inputs are zero.

*/

function addition(a, b) {
    // Check if both inputs are numbers
    if (typeof a!== 'number' || typeof b!== 'number') {
      throw new Error('Both inputs must be numbers');
    }
  
    // Perform the addition and return the result
    return a + b;
  }
  