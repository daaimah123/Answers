/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Example 1:				       Example 2:					Example 3:
Input: nums = [2,2,1]		Input: nums = [4,1,2,1,2]		Input: nums = [1]
Output: 1				        Output: 4					          Output: 1

Notes: Each element in the array appears twice except for one element which appears only once.

Challenge: Can you optimize your implementation to be linear runtime complexity?.

Summary of Solution: 
Solve using a hash map (or an object in JavaScript) to count the occurrences of each number. Iterate through the array, incrementing counts for each number seen. Iterate through the hash map to find the number that occurs only once.

Explanation:
- Count Map Initialization: We start by creating an empty object countMap to serve as our hash map. This object will store each number in the array as a key and its frequency as the value.
- Count Occurrences: We iterate through the nums array. For each number, we check if it already exists in countMap. If it does, we increment its count. If it doesn't, we add it to countMap with a count of 1.
- Find Single Number: After counting the occurrences of all numbers, we iterate through countMap to find the number(s) that appear only once. Since each number in the array appears exactly twice except for one, we look for entries in countMap where the count is 1. We return the first such number we find.
- Return Type: The function returns the single number as a number type. Since JavaScript object keys are always strings, we use parseInt to convert the string key back to a number before returning it.


*/

function findSingle(nums) {
    const countMap = {};
  
    // Count occurrences of each number
    for (let num of nums) {
      if (countMap[num]) {
        countMap[num]++;
      } else {
        countMap[num] = 1;
      }
    }
  
    // Find the number that appears only once
    for (let num in countMap) {
      if (countMap[num] === 1) {
        return parseInt(num); // Convert string keys back to numbers
      }
    }
  
    return null; // Should never reach here if the input is valid
  }
  