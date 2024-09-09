/* Given a string, count the total number of vowels (a, e, i, o, u) in it.

Example 1: 					Example 2:
Input: ”abc de”			Input: ”geeksforgeeks portal”	
Output: 2					  Output: 7

Challenge: Think about how you can you solve this recursively after solving the problem.


Pseudocode steps: 
- Create a function that takes a string as input.
- Define a set of vowels we need to count.
- Iterate through each character in the string.
- Check if each character is a vowel.
- Increment a counter for each vowel found.
- Return the total count at the end.
*/

function countVowels(str) {
    // Check if input is a string
    if (typeof str !== 'string') {
      throw new Error("Input must be a string");
    }
  
    // Define vowels (both lowercase and uppercase)
    const vowels = 'aeiouAEIOU';
  
    // Initialize counter
    let count = 0;
  
    // Iterate through each character in the string
    for (let char of str) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
console.log(countVowels("abc de")); // Output: 2
console.log(countVowels("geeksforgeeks portal")); // Output: 7


// Challenge: 
function countVowelsRecursive(str) {
    // Base case: empty string
    if (str.length === 0) return 0;
  
    // Check if the first character is a vowel
    const vowels = 'aeiouAEIOU';
    const isVowel = vowels.includes(str[0]);
  
    // Recursive call for the rest of the string
    return (isVowel ? 1 : 0) + countVowelsRecursive(str.slice(1));
  }
  

  // Optimize for larger strings
  function countVowelsRegex(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
  }
  