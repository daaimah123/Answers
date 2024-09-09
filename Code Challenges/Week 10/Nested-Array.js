/*
Create a function that returns true if the first array can be nested inside the second and false otherwise.
arr1 can be nested inside arr2 if:
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.

Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([3, 1], [4, 0]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false
canNest([1, 2, 3, 4], [2, 3]) ➞ false

Pseudocode Steps:
- We need to find the minimum and maximum values of both arrays.
- Compare the minimum values: arr1's min should be greater than arr2's min.
- Compare the maximum values: arr1's max should be less than arr2's max.
- Return true if both conditions are met, otherwise return false.

*/

function canNest(arr1, arr2) {
    // Find minimum and maximum values of both arrays
    const min1 = Math.min(...arr1);
    const max1 = Math.max(...arr1);
    const min2 = Math.min(...arr2);
    const max2 = Math.max(...arr2);
  
    // Compare minimum and maximum values
    return min1 > min2 && max1 < max2;
  }

console.log(canNest([1, 2, 3, 4], [0, 6])); // ➞ true
console.log(canNest([3, 1], [4, 0])); // ➞ true
console.log(canNest([9, 9, 8], [8, 9])); // ➞ false
console.log(canNest([1, 2, 3, 4], [2, 3])); // ➞ false
