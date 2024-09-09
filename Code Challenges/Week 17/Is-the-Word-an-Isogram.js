/*

An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram". Ignore letter case (should not be case sensitive). All test cases contain valid one word strings.

Examples
isIsogram("Algorism") ➞ true
isIsogram("PasSword") ➞ false // Not case sensitive.
isIsogram("Consecutive") ➞ false


Pseudocode Steps: 
- We need to convert the input string to lowercase to ignore case sensitivity.
- We should remove any whitespace characters from the string.
- We need to create a set of unique letters from the string.
- We should check if the length of this set is equal to the length of the original string (without spaces).
- If they're equal, the string is an isogram; otherwise, it's not.

*/

function isIsogram(str) {
    // Convert to lowercase and remove whitespace
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');
  
    // Create a set of unique letters
    const letterSet = new Set(cleanedStr);
  
    // Check if the length of the set equals the length of the cleaned string
    return letterSet.size === cleanedStr.length;
  }

  console.log(isIsogram("Algorism")); // true
  console.log(isIsogram("PasSword")); // false
  console.log(isIsogram("Consecutive")); // false
  
  
// handle multi-word strings or phrases
function isIsogram(str) {
    return str.toLowerCase().split(/\s+/).every(word => new Set(word.replace(/\W/g, '')).size === word.length);
  }

// optimize further for very large strings with hash table
function isIsogram(str) {
    const charMap = {};
    for (let char of str.toLowerCase()) {
      if (char !== ' ') {
        charMap[char] = (charMap[char] || 0) + 1;
      }
    }
    return Object.keys(charMap).length === str.length;
  }
  