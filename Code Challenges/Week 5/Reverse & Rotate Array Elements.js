/*

Write a function that takes an array as input and returns a new array with the elements in reverse order. You must use both push and pop methods to achieve this.

*/

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
       reversed.push(arr[i]);
    }
    return reversed;
   }
   
   console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
   
   
   
   
   /*
   
   Write a function that takes an array of numbers and a number n as input. The function should return a new array where the first n elements are moved to the end of the array. You must use both shift and push methods to achieve this.
   
   */
   
   function reverseArray(arr){
     // new array to hold things
     let reversed = [];
     // iterate backwards
     while(arr.length){
       // pop items
       let element = arr.pop();
       // push items into new array
       reversed.push(element);
     }
     // return the new array of reversed items
     return reversed;
   }
   
   
   /*
   
   function rotateArray (arr, n) {
     // copy arr values into new array 
     let newArray = [...arr];
     // iterate while n greater than 0
     while (n > 0){
       // decrement n
       n--;
       // push and shift (one-line) to the newArray
       newArray.push(newArray.shift());
     }
     // return newArray
     return newArray;
   }
   
   */
   
   console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
   