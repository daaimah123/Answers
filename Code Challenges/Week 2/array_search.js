/*

You are given an array of integers arr and a target element target. Your task is to implement a function findLastIndex(arr, target) that returns the last index at which the target element appears in the array. If the target element is not present in the array, the function should return -1.

Input:
arr (1 <= arr.length <= 100): An array of integers.
target (Integer): The target element to search for in the array.

Output:
Return the last index of the target element in the array.
If the target element is not found, return -1.

Examples:
console.log(findLastIndex([1, 2, 3, 4, 5, 2], 2));  // Output: 5
console.log(findLastIndex([10, 20, 30, 40, 50], 25));  // Output: -1
console.log(findLastIndex([5, 10, 15, 20, 10, 25], 10));  // Output: 4
console.log(findLastIndex([1, 2, 3, 4, 5], 6));  // Output: -1

*/

const array = [4,  5,  6,  7,  0,  1,  2,  3,  4,  5,  6,  7,  8];
const target =  4;

function findLastIndex(arr, target) {
  const lastIndex = arr.findLastIndex((element) => element === target);
  return lastIndex !== -1 ? lastIndex : -1;
}

console.log(findLastIndex(array, target)); // 9

/* 

Explanation:

Inside the function, findLastIndex is called on the array with a callback function that checks if an element equals the target.

If an element satisfying the condition is found, findLastIndex returns the last index of that element. Otherwise, it returns -1.

The ternary operator is used to return -1 if the lastIndex is -1, which means the target was not found in the array

*/