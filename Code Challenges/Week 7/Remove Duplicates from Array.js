/*
Write a JavaScript function that takes an array of numbers as input and returns a new array with all duplicates removed. Use the Set object to achieve this.

========= Solution =========
Step 1: Initialize a Set: Create a new Set object. A Set is a collection of unique values, so adding elements to it will automatically remove duplicates.

Step 2: Iterate Over the Array: Loop through each element in the input array.

Step 3: Add Elements to the Set: For each element, add it to the Set. Since Set only stores unique values, any duplicate elements will be ignored.

Step 4: Convert the Set Back to an Array: After all elements have been added to the Set, convert it back to an array. This is the final result, with duplicates removed.

*/

function removeDuplicates(arr) {
    const set = new Set();
    arr.forEach(element => set.add(element));
    return Array.from(set);
    // OR
    // return [...new Set(arr)];
  }
  
  // Example usage:
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
  console.log(removeDuplicates(arrayWithDuplicates)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  