/*
Implement a function which will convert the given boolean value into its string representation.

Example:				Example:
Input: boolean false	Input: boolean true
Output: "false"			Output: “true”


Pseudocode Steps: 
- Create a function named boolToString that takes a boolean parameter.
- Inside the function, we need to check if the boolean is true or false.
- Based on the boolean value, return either "true" or "false".
- Consider using a ternary operator for a concise implementation.

*/

function boolToString(b) {
    // Use a ternary operator to concisely return the string representation
    return b ? "true" : "false";
  }
  
// or use built-in method
function boolToString(b) {
    return b.toString();
  }
  

console.log(boolToString(false)); // Output: "false"
console.log(boolToString(true));  // Output: "true"
console.log(boolToString(0 < 1));  // Output: "true"
console.log(boolToString(1 > 2));  // Output: "false"
