/*

Write a function that will check if two given characters are the same case. If either of the characters is not a letter, return -1. If both characters are the same case, return 1. If both characters are letters, but not the same case, return 0.

Examples
'a' and 'g' returns 1		    'A' and 'C' returns 1		    'b' and 'G' returns 0
'B' and 'g' returns 0	    	'0' and '?' returns -1

Pseudocode Steps: 
- We need to check if both characters are letters.
- If either character is not a letter, we should return -1.
- If both characters are letters, we need to compare their cases.
- We should return 1 if the cases are the same, 0 if they're different, and 1 if they're both uppercase or both lowercase.

*/

function checkCase(char1, char2) {
    // Check if both characters are letters
    if (!char1.match(/[a-z]/i) || !char2.match(/[a-z]/i)) {
      return -1;
    }
  
    // Convert both characters to lowercase
    const lowerChar1 = char1.toLowerCase();
    const lowerChar2 = char2.toLowerCase();
  
    // Compare the lowercase versions
    if (lowerChar1 === lowerChar2) {
      return 1;
    } else {
      return 0;
    }
  }
  
  console.log(checkCase('a', 'g')); // Output: 1
  console.log(checkCase('B', 'g')); // Output: 0
  console.log(checkCase('A', 'C')); // Output: 1
  console.log(checkCase('b', 'G')); // Output: 0
  console.log(checkCase('0', '?')); // Output: -1
  