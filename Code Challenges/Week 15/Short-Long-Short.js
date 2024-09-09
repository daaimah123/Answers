/*

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (zero length ). The length of string is not always the same as the number of characters

Example 1			        	Example 2
Input:  ("1", "22")		  Input: ("22", "1")
Output: "1221"		    	Output: "1221"


Pseudocode Steps: 
- We need to determine which string is shorter and which is longer.
- We need to concatenate the shorter string with the longer string twice.
- The shorter string goes on the outside, and the longer string goes on the inside.
- We need to handle the case where both strings are empty.

*/

function combineStrings(a, b) {
    // error checking for non-strings
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new Error('Both arguments must be strings');
      }
    // Determine which string is shorter
    const shorter = a.length <= b.length ? a : b;
    const longer = a.length > b.length ? a : b;
  
    // Combine the strings in the required pattern
    return shorter + longer + shorter;
  }
  

  console.log(combineStrings("1", "22")); // Output: "1221"
  console.log(combineStrings("22", "1")); // Output: "1221"
  console.log(combineStrings("", "")); // Output: ""
  console.log(combineStrings("a", "")); // Output: "aa"
  console.log(combineStrings("", "b")); // Output: "bb"
  