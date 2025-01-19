/*

You are given a string inputStr containing lowercase letters and a target substring targetStr. Your task is to implement a function findTargetIndex(inputStr, targetStr) that returns the starting index of the first occurrence of targetStr in inputStr. If targetStr is not found in inputStr, the function should return -1.

Input:
inputStr (1 <= inputStr.length <= 1000): A string containing only lowercase letters.
targetStr (1 <= targetStr.length <= 100): A substring to search for in inputStr.

Output:
Return the starting index of the first occurrence of targetStr in inputStr.
If targetStr is not found in inputStr, return -1.


Examples:
console.log(findTargetIndex("hello world", "lo"));  // Output: 3
console.log(findTargetIndex("programming", "abc"));  // Output: -1
console.log(findTargetIndex("javascript", "script"));  // Output: 4
console.log(findTargetIndex("challenge", "len"));  // Output: -1

*/

function findTargetIndex(inputStr, targetStr) {
    const targetIndex = inputStr.indexOf(targetStr);
    return targetIndex !== -1 ? targetIndex : -1;
  }
  
  /*
  Explanation:
  
  Inside the function, we call indexOf on inputStr with targetStr as the argument.
  - The indexOf method returns the index of the first occurrence of the specified substring within the calling string.
  - If the substring is not found, indexOf returns -1 135.
  
  We assign the result of indexOf to the variable targetIndex.
  
  Using a ternary operator, we check if targetIndex is not equal to -1.
  - If it's not, we return targetIndex because that means targetStr was found in inputStr.
  - If targetIndex is -1, we return -1 to indicate that targetStr was not found in inputStr.
  
  */