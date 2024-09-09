/*
The time has a format: hours:minutes. Both given hours and minutes will always have two digits, like 09:00.

Make a regex to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regex should not match 123:456. Take your time with this problem. You will be learning how to use a new syntax: regular expression.

Example 1							            
Input: I will have lunch at 12:00pm today at 925 Restaurant.		
Output: 12:00	

Example 2
Input: Their daughter was born at 03:00am at 55 Melbourne Dr
Output: 03:00

Regex pattern breakdown: 
\b Word boundary (ensures we're matching whole words)
(\d{2}:\d{2}) Capturing group for our time pattern
  - \d Matches any digit
  - {2} Specifies exactly two occurrences
  - : Matches the literal colon character
\b Another word boundary


Pseudocode steps: 
- We need to match exactly two digits for hours and minutes.
- These should be separated by a colon (:).
- We want to exclude numbers that might appear elsewhere in the string.
- We'll use capturing groups to extract the matched time.
*/

function findTime(str) {
    // Regular expression pattern
    const regex = /\b(\d{2}:\d{2})\b/g;
    
    // Find all matches
    const matches = str.match(regex);
    
    return matches ? matches[0] : null; // Return the first match or null if not found
  }

console.log(findTime("I will have lunch at 12:00pm today at 925 Restaurant.")); 
// Output: "12:00"

console.log(findTime("Their daughter was born at 03:00am at 55 Melbourne Dr"));
// Output: "03:00"

  