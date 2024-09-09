/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

Example 1			  Example 2			    Example 3
Input: '! !'          Input:'123456789'	    Input: 'This looks5 grea8t!'
Output: '! !'		  Output: ''			Output: 'This looks great!'	

Pseudocode Steps: 
- We need to create a function that takes a string as input.
- We should use a regular expression to match and remove all numeric characters.
- We need to preserve the original formatting, including spacing and special characters.
- The function should return the cleaned string.


*/

function removeNumbers(inputString) {
    // Remove all numeric characters
    return inputString.replace(/[0-9]/g, '');

    /*
    // remove decimals
    return inputString.replace(/[0-9.]/g, '');
    // numbers at beginning of word
    return inputString.replace(/^\d+/g, '');
    // numbers at end of word
    return inputString.replace(/(\d+)$/, '');
    // non-breaking spaces
    return inputString.replace(/[0-9]|&#160;/g, '');
     */
    
  }
  
  console.log(removeNumbers("! !")); // Output: "! !"
  console.log(removeNumbers("123456789")); // Output: ""
  console.log(removeNumbers("This looks5 grea8t!")); // Output: "This looks great!"
  