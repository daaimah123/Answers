/*
A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing. Return true if the given string is a palindrome. Otherwise, return false. You should be able to pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others such as when the pattern includes special characters. Recall your new syntax: regular expression.

Example 1: 					
Input:	“1 eye for of 1 eye.” 	
Output: False				


Example 2: 
Input: “0_0 (: /-\ :) 0–0”
Output: true

Pseudocode Steps: 
- We need to clean the input string to remove non-alphanumeric characters and convert it to lowercase.
- We need to handle special characters, punctuation, and whitespace.
- After cleaning, we should compare the cleaned string with its reverse.
- We should use regular expressions to handle different formats efficiently.


*/

function isPalindrome(s) {
    // Clean the string: remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    /*
    -OR-
    const cleaned = s.toLowerCase().replace(/\s/g, '');
    -OR-
    const cleaned = s.normalize('NFD').toLowerCase().replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]|[\d]/g, '');
    */
    
    // Compare the cleaned string with its reverse
    return cleaned === cleaned.split('').reverse().join('');
  }

  console.log(isPalindrome("1 eye for of 1 eye.")); // Output: false
  console.log(isPalindrome("0_0 (: /-\ :) 0–0")); // Output: true
  

// return the actual palindrome substring instead of just a boolean

function getPalindrome(s) {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
      if (cleaned[left] !== cleaned[right]) break;
      left++;
      right--;
    }
    return cleaned.substring(left, right + 1);
  }
  