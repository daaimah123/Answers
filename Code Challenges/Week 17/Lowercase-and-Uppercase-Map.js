/*

Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively. All of the letters in the input list will always be lowercase.

Examples
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }


Pseudocode Steps: 
- We need to take an array of lowercase letters as input.
- We should create an object where each key-value pair consists of a lowercase letter and its uppercase equivalent.
- We need to handle all lowercase letters from 'a' to 'z'.
- We should ignore any characters that are not lowercase letters.

*/

function mapping(arr) {
    // Initialize an empty object to store the mappings
    const result = {};
  
    // Iterate through each character in the input array
    arr.forEach(char => {
      // Check if the character is a lowercase letter
      if (char.toLowerCase() === char && char.toUpperCase() !== char) {
        // Add the lowercase letter as the key and its uppercase version as the value
        result[char] = char.toUpperCase();
      }
    });
  
    // Return the resulting object
    return result;
  }

  console.log(mapping(["p", "s"])); // Output: { p: "P", s: "S" }
  console.log(mapping(["a", "b", "c"])); // Output: { a: "A", b: "B", c: "C" }
  console.log(mapping(["a", "v", "y", "z"])); // Output: { a: "A", v: "V", y: "Y", z: "Z" }
  
  
  // handle uppercase letters
  function mapping(arr) {
    const result = {};
    arr.forEach(char => {
      if (char.toLowerCase() === char) {
        result[char] = char.toUpperCase();
      } else if (char.toUpperCase() === char) {
        result[char.toLowerCase()] = char;
      }
    });
    return result;
  }
  