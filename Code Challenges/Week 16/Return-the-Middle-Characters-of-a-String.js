/*

Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters. All test cases contain a single word (as a string).

Examples
getMiddle("test") ➞ "es"
getMiddle("testing") ➞ "t"
getMiddle("middle") ➞ "dd"
getMiddle("A") ➞ "A"


Pseudocode Steps: 
- We need to calculate the length of the input string.
- We should determine if the length is odd or even.
- For odd-length strings, we need to find the middle character.
- For even-length strings, we need to find the two middle characters.
- We should handle single-character strings specially.

*/

function getMiddle(str) {
    // Calculate the length of the string
    const len = str.length;
  
    // Handle single-character strings
    if (len === 1) {
      return str;
    }
  
    // Find the middle index(es)
    let mid = Math.floor(len / 2);
  
    // If the length is odd, return the middle character
    if (len % 2 !== 0) {
      return str[mid];
    }
  
    // If the length is even, return the two middle characters
    return str.slice(mid - 1, mid + 1);
  }
  
  console.log(getMiddle("test")); // Output: "es"
  console.log(getMiddle("testing")); // Output: "t"
  console.log(getMiddle("middle")); // Output: "dd"
  console.log(getMiddle("A")); // Output: "A"
  

  // handle multi-word strings or phrases

  function getMiddle(str) {
    const words = str.split(' ');
    const len = words.length;
    const mid = Math.floor(len / 2);
    return len % 2 === 0 ? `${words[mid - 1]}${words[mid]}` : words[mid];
  }
  