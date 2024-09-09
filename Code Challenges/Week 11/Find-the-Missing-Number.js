/*

Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number. The array of numbers will be unsorted (not in order). Only one number will be missing.

Examples
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

Pseudocode steps: 
- We know that the sum of numbers from 1 to 10 is 55 (using the formula n*(n+1)/2).
- We can calculate the sum of the numbers in the input array.
- The difference between the total sum (55) and the sum of the input array will give us the missing number.
- We don't need to sort the array since we're using sums.

*/

function missingNum(arr) {
    // Calculate the sum of numbers from 1 to 10
    const totalSum = 55;
    
    // Calculate the sum of numbers in the input array
    const arrSum = arr.reduce((sum, num) => sum + num, 0);
    
    // Return the difference between the total sum and the array sum
    return totalSum - arrSum;
  }
  

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // Output: 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // Output: 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // Output: 7
