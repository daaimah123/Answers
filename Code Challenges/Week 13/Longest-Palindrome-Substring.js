/*
Given a string s, return the longest palindromic substring in s. A substring is a contiguous non-empty sequence of characters within a string.

Example 1:						
Input: s = "babad"		
Output: "bab"					
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"


Pseudocode Steps: 
- Consider expanding around the center of potential palindromes.We need to handle odd-length and even-length palindromes.
- Start from each character in the string as a potential center.
- Expand outward, checking for palindromes of increasing lengths.
- Keep track of the longest palindrome found.

*/

function longestPalindrome(s) {
    if (!s || s.length < 1) return "";
  
    let start = end = 0;
  
    for (let i = 0; i < s.length; i++) {
      // Odd length palindrome
      let len1 = expandAroundCenter(s, i, i);
      // Even length palindrome
      let len2 = expandAroundCenter(s, i, i + 1);
      
      let len = Math.max(len1, len2);
      if (len > (end - start)) {
        start = i - Math.floor((len - 1) / 2);
        end = i + Math.floor(len / 2);
      }
    }
  
    return s.substring(start, end + 1);
  }
  
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  
  console.log(longestPalindrome("babad")); // Output: "bab"
  console.log(longestPalindrome("cbbd")); // Output: "bb"
  

  // modify it to stop expanding when we reach the middle of the palindrome, reducing the number of comparisons
  function longestPalindrome(s) {
    let start = end = 0;
  
    for (let i = 0; i < s.length; i++) {
      let len1 = expandAroundCenter(s, i, i);
      let len2 = expandAroundCenter(s, i, i + 1);
      
      let len = Math.max(len1, len2);
      if (len > (end - start)) {
        start = i - Math.floor((len - 1) / 2);
        end = i + Math.floor(len / 2);
      }
    }
  
    return s.substring(start, end + 1);
  }
  