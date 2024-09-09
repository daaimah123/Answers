/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example 1:					
Input: nums = [0,1,0,3,12]		
Output: [1,3,12,0,0]			

Example 2:
Input: nums = [0]
Output: [0]

Challenge: Can you write your answer without making a copy of the array. Could you minimize the total number of operations done?

Summary of Solution: 
To solve this problem without making a copy of the array and minimizing the total number of operations, we can use the two-pointer technique. This approach involves iterating through the array with two pointers: one pointing to the next non-zero element and the other moving towards the end of the array. We swap elements between these two pointers until they meet, effectively moving all zeros to the end of the array while preserving the relative order of non-zero elements.

Explanation:
- Initialization: We initialize a pointer nonZeroIndex to 0. This pointer keeps track of the position where the next non-zero element should be placed.
- Iteration: We iterate through the array with a loop. For each element, we check if it is non-zero.
- Swapping Logic: If the current element is non-zero, we swap it with the element at the nonZeroIndex position. This effectively moves the non-zero element to its correct position in the array, while keeping the zeros in place temporarily.
- Increment Non-Zero Index: After swapping, we increment nonZeroIndex. This prepares us for placing the next non-zero element in the correct position.
- Loop Continuation: The loop continues until we've checked every element in the array. At the end of the loop, all non-zero elements are in their correct positions, and all zeros are grouped together at the end of the array.
- Return Array: Finally, we return the modified array.

*/

function moveZeros(nums) {
    let nonZeroIndex = 0; // Pointer for non-zero elements
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      // If the current element is non-zero, swap it with the nonZeroIndex position
      if (nums[i]!== 0) {
        [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
        nonZeroIndex++;
      }
    }
  
    return nums;
  }
  