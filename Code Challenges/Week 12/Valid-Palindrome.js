/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Pseudocode steps: 
- Convert the entire string to lowercase to ignore case sensitivity.
- Remove all non-alphanumeric characters.
- Compare the resulting string with its reverse.
- Return true if they are equal, false otherwise.

*/

function isValidPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    /*

    -OR-
    const cleanedString = s.toLowerCase().replace(/\s/g, '');
    -OR-
    const cleanedString = s.normalize('NFD').toLowerCase().replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]|[\d]/g, '');
    */
    
    // Compare with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
  }

  console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // Output: true
  console.log(isValidPalindrome("race a car")); // Output: false
  console.log(isValidPalindrome(" ")); // Output: true
  

 const cleanedString = s.toLowerCase().replace(/\s/g, '');

  