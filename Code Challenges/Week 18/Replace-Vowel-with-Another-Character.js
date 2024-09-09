/*

Create a function that takes a string and replaces the vowels with another character. The input will always be in lowercase.

a = 1	e = 2	i = 3	o = 4	u = 5

Examples
replaceVowel("karachi") ➞ "k1r1ch3"
replaceVowel("chembur") ➞ "ch2mb5r"
replaceVowel("khandbari") ➞ "kh1ndb1r3"


Pseudocode Steps: 
- The input string is guaranteed to be lowercase.
- We need to handle all five English vowels (a, e, i, o, u).
- Non-vowel characters should remain unchanged.
- We need to define a mapping of vowels to replacement characters.
- We'll iterate through each character in the input string.
- For each vowel, we'll replace it with its corresponding numeric character.
- We need to handle non-vowels (consonants) as-is.
- The function should work for any lowercase string.

*/

function replaceVowel(str) {
    // Define the mapping of vowels to replacement characters
    const vowelMap = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5'
    };
  
    // Use reduce to build the result string
    return str.split('').reduce((result, char) => {
      // Check if the character is a vowel
      if (vowelMap[char]) {
        // Replace the vowel with its corresponding numeric character
        result += vowelMap[char];
      } else {
        // Keep non-vowel characters as they are
        result += char;
      }
      return result;
    }, '');
  }
  
console.log(replaceVowel("karachi")); // Output: "k1r1ch3"
console.log(replaceVowel("chembur")); // Output: "ch2mb5r"
console.log(replaceVowel("khandbari")); // Output: "kh1ndb1r3"


// If you needed to handle uppercase vowels as well, you could modify the function to handle both lowercase and uppercase vowels
function replaceVowel(str) {
    const vowelMap = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
      A: '1',
      E: '2',
      I: '3',
      O: '4',
      U: '5'
    };
    return str.split('').reduce((result, char) => {
      if (vowelMap[char]) {
        result += vowelMap[char];
      } else {
        result += char;
      }
      return result;
    }, '');
  }
  