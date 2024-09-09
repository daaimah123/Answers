/*

Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation. Do not solve this problem with RegEx.

The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
If the string passes the above tests, it's considered a valid email address.

Examples
validateEmail("@gmail.com") ➞ false
validateEmail("hello.gmail@com") ➞ false
validateEmail("gmail") ➞ false
validateEmail("hello@gmail") ➞ false
validateEmail("hello@edabit.com") ➞ true

Considerations: 
- The string must contain exactly one "@" symbol.
- The "@" symbol must appear between two alphanumeric characters.
- There must be at least one dot after the "@" symbol.
- The entire string must be between alphanumeric characters.

Pseudocode Steps: 
- We need to check if the string contains an "@" symbol.
- We need to verify that the "@" symbol has at least one character before it.
- We need to ensure that the "." appears after the "@" symbol.
- We should check that the "@" symbol is not at the beginning or end of the string.
- We need to validate that the part after the "@" symbol contains at least one dot.


*/


function validateEmail(email) {
    // Check if the string contains an "@" symbol
    if (!email.includes('@')) {
      return false;
    }
  
    // Split the string into two parts: before and after the "@"
    const [beforeAt, afterAt] = email.split('@');
  
    // Check if the "@" symbol has at least one character before it
    if (beforeAt.length === 0) {
      return false;
    }
  
    // Check if the "@" symbol is not at the beginning or end of the string
    if (beforeAt[0].charCodeAt(0) < 48 || beforeAt[beforeAt.length - 1].charCodeAt(0) < 48) {
      return false;
    }
  
    // Split the part after the "@" symbol
    const domainParts = afterAt.split('.');
  
    // Check if there's at least one dot after the "@"
    if (domainParts.length < 2) {
      return false;
    }
  
    // Check if the domain parts are valid (not empty)
    if (domainParts.every(part => part.length > 0 && part.length < 64)) {
      return true;
    }
  
    return false;
  }

console.log(validateEmail("@gmail.com")); // false
console.log(validateEmail("hello.gmail@com")); // false
console.log(validateEmail("gmail")); // false
console.log(validateEmail("hello@gmail")); // false
console.log(validateEmail("hello@edabit.com")); // true

  