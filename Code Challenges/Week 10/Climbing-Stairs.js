/*
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:							
Input: n = 2							
Output: 2							
Explanation: There are 2 ways to the top.			 
1. 1 step + 1 step					
2. 2 steps							


Example 2:
Input: n = 3
Output: 3
Explanation: There are 3 ways to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Pseudocode steps: 
- Recognize that this is a classic dynamic programming problem.
- Understand that the number of ways to reach step n depends on the number of ways to reach steps n-1 and n-2.
- Create a recursive relationship: ways(n) = ways(n-1) + ways(n-2).
- Implement memoization to optimize performance by storing intermediate results.
- Handle base cases for n = 1 and n = 2.

*/

function climbStairs(n) {
    // Create a memoization array initialized with -1
    const memo = new Array(n + 1).fill(-1);
    
    // Base case: There's only 1 way to reach the first step
    memo[1] = 1;
    
    // Base case: There are 2 ways to reach the second step
    memo[2] = 2;
    
    // Function to calculate the number of ways recursively with memoization
    function ways(i) {
      if (i <= 2) return i; // Base cases
      
      if (memo[i] === -1) { // If not calculated yet
        memo[i] = ways(i - 1) + ways(i - 2); // Calculate and store
      }
      
      return memo[i];
    }
    
    // Call the recursive function with n
    return ways(n);
  }

console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
