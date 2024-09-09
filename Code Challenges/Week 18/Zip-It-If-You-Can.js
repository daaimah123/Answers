/*

You are given an array of women and an array of men. Return "sizes don't match" if the two arrays have different sizes. If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

Examples
zipIt(["Elise", "Mary"], ["John", "Rick"])
 ➞ [["Elise", "John"], ["Mary", "Rick"]]

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
 ➞ "sizes don't match"

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
 ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]


Pseudocode Steps: 
- First, we need to check if the sizes of the two arrays match.
- If they don't match, we should return "sizes don't match".
- If they do match, we need to create pairs from corresponding elements in both arrays.
- We should return an array of these pairs.

*/

function zipIt(women, men) {
    // input arrays might be nested arrays or contain non-string elements
    if (!Array.isArray(women) || !Array.isArray(men)) {
        throw new Error('Both arguments must be arrays');
      }
      
      if (women.some(item => !Array.isArray(item))) {
        throw new Error('Women array contains non-array elements');
      }
      
      if (men.some(item => !Array.isArray(item))) {
        throw new Error('Men array contains non-array elements');
      }    

    // Check if the sizes match
    if (women.length !== men.length) {
      return "sizes don't match";
    }
  
    // Create pairs of corresponding elements
    return women.map((woman, index) => [woman, men[index]]);
  }

  console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
  // Output: [["Elise", "John"], ["Mary", "Rick"]]
  
  console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
  // Output: "sizes don't match"
  
  console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
  // Output: [["Ana", "Bob"], ["Amy", "Josh"], ["Lisa", "Tim"]]
  

  //  contain objects instead of strings
  function zipIt(women, men) {
    if (women.length !== men.length) {
      return "sizes don't match";
    }
    
    return women.map((woman, index) => [woman, men[index]]);
  }
  