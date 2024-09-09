/*
Create a function that returns an array of strings sorted by length in ascending order. Strings should have unique lengths (don't worry about comparing two strings with identical length).
Return an empty array if the input array is empty. 

sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
sortByLength([]) ➞ []


Pseudocode Steps: 
- We need to sort the array based on the length of each string.
- We should use the built-in sort() method of arrays in JavaScript.
- We need to provide a custom comparison function for the sort() method.
- The comparison function should return a value that determines the order of the strings.
*/

function sortByLength(strings) {
    // Handle empty array
    if (strings.length === 0) return [];
  
    // Sort the array based on string length
    return strings.sort((a, b) => a.length - b.length);
  }

  console.log(sortByLength(["a", "ccc", "dddd", "bb"])); // Output: ["a", "bb", "ccc", "dddd"]
  console.log(sortByLength(["apple", "pie", "shortcake"])); // Output: ["pie", "apple", "shortcake"]
  console.log(sortByLength(["may", "april", "september", "august"])); // Output: ["may", "april", "august", "september"]
  console.log(sortByLength([])); // Output: []
  