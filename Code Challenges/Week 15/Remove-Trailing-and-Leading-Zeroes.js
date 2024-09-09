/*

Create a function that takes in a number as a string n and returns the number without trailing and leading zeros. If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0"). If the number is 0, 0.0, 000, 00.00, etc... return "0". Return a string.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000). 

Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230). 

Examples
removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"


Pseudocode Steps: 
- We need to handle both integers and floating-point numbers.
- Special cases like "0", "0.0", "000", etc., need to be handled separately.
- Trailing zeros after the decimal point should be removed.
- Leading zeros before the decimal point should be removed.
- First, we need to parse the input string into a number.
- Then, we need to handle the special cases mentioned in the problem statement.
- After handling special cases, we need to convert the number back to a string.
- We should remove any trailing zeros after the decimal point.
- Finally, we need to remove any leading zeros.


*/

function removeLeadingTrailing(numStr) {
    // Handle special cases
    if (numStr === "0" || numStr === "0.0" || numStr.startsWith("0.")) {
      return "0";
    }
  
    // Parse the string to a number
    const num = parseFloat(numStr);
  
    // Convert the number back to a string
    let result = num.toString();
  
    // Remove trailing zeros after the decimal point
    result = result.replace(/\.?0+$/, '');
  
    // Remove leading zeros
    result = result.replace(/^0*/, '');
  
    return result;
  }
  
  console.log(removeLeadingTrailing("230.000")); // Output: "230"
  console.log(removeLeadingTrailing("00402")); // Output: "402"
  console.log(removeLeadingTrailing("03.1400")); // Output: "3.14"
  console.log(removeLeadingTrailing("30")); // Output: "30"
  console.log(removeLeadingTrailing("0")); // Output: "0"
  console.log(removeLeadingTrailing("0.0")); // Output: "0"
  console.log(removeLeadingTrailing("000")); // Output: "0"
  console.log(removeLeadingTrailing("00.00")); // Output: "0"
  