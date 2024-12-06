/*

Write a function that takes an array of strings as input and returns a new array where the first element is moved to the end of the array. You must use both shift and push methods to achieve this.

*/

function shiftFirstToEnd(arr) {
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
   }
   
   console.log(shiftFirstToEnd(["apple", "banana", "orange"])); // ["banana", "orange", "apple"]
   
   
   /*
   
   Write a function that takes an array of numbers as input and returns a new array where the last element is moved to the beginning of the array. You must use both pop and unshift methods to achieve this.
   
   */
   
   function popLastToStart(arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
   }
   
   console.log(popLastToStart([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]