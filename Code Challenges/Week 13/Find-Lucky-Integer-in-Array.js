/*
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value. Return the largest lucky integer in the array. If there is no lucky integer return -1.

Example 1:			              			        
Input: arr = [2,2,3,4]
Output: 2   		      	       
Explanation: The only lucky
number in the array is 2 because frequency[2] == 2.	       

Example 2:
Input: arr = [1,2,2,3,3,3]
Output: 3	
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:
Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.


Pseudocode steps: 
- Create a frequency map of the array elements.
- Iterate through the frequency map in descending order of values.
- For each element, check if its frequency equals its value.
- Return the first lucky number found, or -1 if none exist.
*/

function largestLuckyNumber(arr) {
    // Create a frequency map
    const frequencyMap = {};
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Sort keys of the frequency map in descending order
    const sortedKeys = Object.keys(frequencyMap).sort((a, b) => b - a);
  
    // Find the largest lucky number
    for (const key of sortedKeys) {
      if (+key === frequencyMap[key]) {
        return +key;
      }
    }
  
    // No lucky number found
    return -1;
  }

  console.log(largestLuckyNumber([2,2,3,4])); // Output: 2
  console.log(largestLuckyNumber([1,2,2,3,3,3])); // Output: 3
  console.log(largestLuckyNumber([2,2,2,3,3])); // Output: -1
  

  // Containing only positive numbers; 
  function largestLuckyNumber(arr) {
    const maxNum = Math.max(...arr);
    const frequencyMap = {};
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    for (let i = maxNum; i > 0; i--) {
      if (frequencyMap[i] === i) {
        return i;
      }
    }
    return -1;
  }
  
  