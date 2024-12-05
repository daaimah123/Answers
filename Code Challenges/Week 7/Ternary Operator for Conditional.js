/*
Write a JavaScript function that takes two numbers as input and returns the larger number. Use the ternary operator (condition? valueIfTrue : valueIfFalse) for this task.



====== SOLUTION ======
Step 1: Compare the Numbers: Use the ternary operator to compare the two input numbers. The condition checks if the first number is greater than the second number.
Step 2: Return the Larger Number: If the condition is true (the first number is greater), return the first number; otherwise, return the second number.
*/

function findLargerNumber(num1, num2) {
    return num1 > num2? num1 : num2;
  }
  
  // Example usage:
  console.log(findLargerNumber(5, 10)); // Output: 10
  console.log(findLargerNumber(20, 15)); // Output: 20
  