// let
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps




var climbStairs = function(n) {
    // Initialize dp array
 const dp = new Array(n + 1);
 dp[0] = 1;
 dp[1] = 1;

 // Fill dp array using recurrence relation
 for (let i = 2; i <= n; i++) {
   dp[i] = dp[i - 1] + dp[i - 2];
 }

 // Return number of ways to climb n steps
 return dp[n];
};