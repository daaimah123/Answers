/* Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers. There are no duplicates in the list.

Example 1:							
Input: arr[] =						 
{1, 2, 4, 6, 3, 7, 8}, N = 8			
Output: 5							
Explanation: The missing number between 1 to 8 is 5	

Example 2: 
Input: arr[] = {1, 2, 3, 5}, N = 5
Output: 4
Explanation: The missing number between 1 to 5 is 4

Pseudocode steps: 
- We know that the sum of numbers from 1 to N is N*(N+1)/2.
- We can calculate the sum of the numbers in the input array.
- The difference between the total sum and the sum of the input array will give us the missing number.
- This approach works because there are no duplicates in the list.

*/


function findMissingNumber(arr, N) {
    // Calculate the sum of numbers from 1 to N
    const totalSum = N * (N + 1) / 2;
    
    // Calculate the sum of numbers in the input array
    const arrSum = arr.reduce((sum, num) => sum + num, 0);
    
    // Return the difference between the total sum and the array sum
    return totalSum - arrSum;
  }
  
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8)); // Output: 5
console.log(findMissingNumber([1, 2, 3, 5], 5)); // Output: 4

// avoid division in the totalSum calculation
function findMissingNumber(arr, N) {
    const totalSum = N * (N + 1);
    
    return totalSum / 2 - arr.reduce((sum, num) => sum + num, 0);
  }
  