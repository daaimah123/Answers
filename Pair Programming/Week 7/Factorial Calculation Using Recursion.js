/*
Write a JavaScript function to calculate the factorial of a given number using recursion. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. It is denoted by n!.

======= Solution =======
STEP 1: dentify the Base Case: The base case for the factorial function is when the input number is 0 or 1. In these cases, the factorial is 1 because the product of no numbers or one number is 1.

STEP 2: Identify the Recursive Case: For numbers greater than 1, the factorial is the product of the number itself and the factorial of the number minus one. This is the recursive step where the function calls itself with a smaller input.

STEP 3: Implement the Function: Write the function in JavaScript, incorporating both the base case and the recursive case.

*/

function factorial(number) {
    // Base case: if the number is 0 or 1, return 1
    if (number === 0 || number === 1) {
        return 1;
    }
    // Recursive case: multiply the number by the factorial of the number minus one
    return number * factorial(number - 1);
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  
  /*
  ======= Explanation =======
  This function starts by checking if the input number is 0 or 1. If it is, the function returns 1, as the factorial of 0 and 1 is 1. Otherwise, it calculates the factorial by multiplying the number by the factorial of the number minus one, effectively breaking down the problem into smaller sub-problems until it reaches the base case.
  */