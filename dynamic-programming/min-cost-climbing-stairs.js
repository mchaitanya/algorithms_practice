// https://leetcode.com/problems/min-cost-climbing-stairs/
// tags - dynamic-programming
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // State = i, the step index
  // dp(i) = min cost to start from step i;
  // dp(i) = Min(dp(i-1), dp(i-2)) + cost[i]
  const n = cost.length; // Given n >= 2.
  const dp = new Array(n);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }
  return Math.min(dp[n - 1], dp[n - 2]);

  // // DP problem
  // // state[i] = min cost to reach step i
  // // = min(state[i-1] + cost(i-1), state[i-2] + cost(i-2));
  // const state = Array(cost.length + 1).fill(0);
  // state[0] = 0; // can start at step 1 free of cost
  // state[1] = 0; // can start at step 2 ""
  // for (let i = 2; i < state.length; i++) {
  //     state[i] = Math.min(state[i-1] + cost[i-1], state[i-2] + cost[i-2]);
  // }
  // return state[state.length-1];
};
