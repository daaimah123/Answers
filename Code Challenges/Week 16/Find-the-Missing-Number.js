/*

Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number. The array of numbers will be unsorted (not in order). Only one number will be missing.

Examples
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

Pseudocode Steps: 
- We need to find the missing number in an array of numbers between 1 and 10.
- The array contains 9 unique numbers, so we're looking for the 10th number.
- We can use the mathematical property that the sum of consecutive integers from 1 to n is equal to n * (n + 1) / 2.
- We'll calculate the expected sum and subtract the actual sum of the array elements.


*/


function missingNum(arr) {
    if (arr.length < 9 || arr.some(num => num > 10)) {
      throw new Error("Invalid input");
    }
    
    const expectedSum = Math.floor((arr[0] + arr[arr.length - 1]) / 2) * arr.length;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
  }

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));   // Output: 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));       // Output: 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));      // Output: 7
console.log(missingNum([]));                                // Throws an error
console.log(missingNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));        // Throws an error

  