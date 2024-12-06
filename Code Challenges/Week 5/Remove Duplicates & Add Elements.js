/*

Write a function that takes an array of strings and a string item as input. The function should remove the first occurrence of item from the array and then add it to the end of the array. You must use both shift and push methods to achieve this.

*/

function removeAndAdd(arr, item) {
    const index = arr.indexOf(item);
  
    if (index !== -1) {
      // Move elements until the target item is at the beginning
      while (index > 0) {
        arr.push(arr.shift()); // Shifts the first element to the end
        index--; // Decrement index since the array has been rotated
      }
  
      // Now the target item is at the beginning, so we can safely shift it off
      arr.shift(); // Remove the target item
  
      // Push the target item to the end of the array
      arr.push(item);
    }
  
    return arr;
  }
  
  // Example usage
  console.log(removeAndAdd(["apple", "banana", "orange", "apple"], "apple")); // ["orange", "apple", "banana", "apple"]
  
  
  /*
  
  Write a function that takes an array of numbers as input and returns a new array with all duplicate numbers removed. You must use reduce and push methods to achieve this.
  
  */
  
  function removeDuplicates(arr) {
   return arr.reduce((acc, current) => {
      if (!acc.includes(current)) {
        acc.push(current);
      }
      return acc;
   }, []);
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
  