/*

Create a function that takes a number as an argument and returns a string formatted to separate thousands. You can expect a valid number for all test cases.

Examples
formatNum(1000) ➞ "1,000"
formatNum(100000) ➞ "100,000"
formatNum(20) ➞ "20"

Pseudocode Steps: 
- We need to create a function that takes a number as input.
- The function should return a string with commas separating thousands.
- We can use JavaScript's built-in formatting methods to achieve this.
- The toLocaleString() method can be used to format numbers with thousand separators.

*/

function formatNum(num) {
    return num.toLocaleString('en-US');
  }

  console.log(formatNum(1000));   // Output: "1,000"
  console.log(formatNum(100000)); // Output: "100,000"
  console.log(formatNum(20));     // Output: "20"
  