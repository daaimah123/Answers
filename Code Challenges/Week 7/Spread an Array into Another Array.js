/*
Write a JavaScript function that takes two arrays as input and returns a new array that contains all elements from both input arrays. Use the spread operator (...) to achieve this.


======== Solution ========
Step 1: Use the Spread Operator: To combine the elements of two arrays into a single array, use the spread operator (...). Place the spread operator between the two arrays inside the square brackets of a new array literal.

Step 2: Return the Combined Array: The resulting array contains all elements from both input arrays.

*/

function combineArrays(arr1, arr2) {
    return [...arr1,...arr2];
  }
  
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  console.log(combineArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]
  