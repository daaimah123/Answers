/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:						Example 2:
Input: num = 38					Input: num = 0
Output: 2						Output: 0
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Challenge: Could you do it without any loop/recursion in O(1) runtime?

Thoughts: 
- Solving this problem without any loops or recursion and in constant time complexity ((O(1))) requires a mathematical approach. We can achieve this by continuously dividing the number by 10 until it becomes a single-digit number. This division effectively removes the last digit of the number, and since we're dealing with integers, the remainder of the division operation gives us the last digit of the number. By repeating this process, we can reduce the number to a single digit.
- However, achieving (O(1)) runtime without explicit looping or recursion is challenging because each division operation inherently requires at least one operation. But, we can minimize the operations by cleverly using the modulo operation to extract the last digit and then adding it to the quotient part of the division to simulate the removal of the last digit.

Explanation:
- While Loop: The loop continues as long as num is greater than or equal to 10, meaning there are still multiple digits to process.
- Modulo Operation: num % 10 extracts the last digit of num.
- Floor Division: Math.floor(num / 10) divides num by 10 and rounds down to the nearest whole number, effectively removing the last digit.
- Addition: Adding the extracted last digit to the quotient part of the division gives us the new num value after removing the last digit.
- Base Case: When num becomes less than 10, it means it has been reduced to a single digit, and the loop exits. The final value of num is returned.

*/

function addDigits(num) {
    while (num >= 10) {
      num = (num % 10) + Math.floor(num / 10);
    }
    return num;
  }
  
