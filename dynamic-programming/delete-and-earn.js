// https://leetcode.com/problems/delete-and-earn/
// tags - dynamic-programming
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  // Preprocess nums - Map each num to points it can contribute i.e. sum of all the times it occurs.
  const points = new Map();
  for (const n of nums) {
    points.set(n, (points.get(n) || 0) + n);
  }

  // Examine all the distinct numbers in sorted order.
  const sorted = Array.from(points.keys()).sort((n1, n2) => n1 - n2);

  // Given nums.length >= 1. Therefore sorted.length >= 1
  // dp(i) = Max points we can earn up to & including index i-1
  const dp = new Array(sorted.length + 1);
  dp[0] = 0;
  dp[1] = points.get(sorted[0]);
  for (let i = 1, j = 2; i < sorted.length; i++, j++) {
    // For each number, its points are included/excluded in the max.
    if (sorted[i] === sorted[i - 1] + 1) {
      dp[j] = Math.max(dp[j - 2] + points.get(sorted[i]), dp[j - 1]);
    } else {
      dp[j] = dp[j - 1] + points.get(sorted[i]);
    }
  }
  return dp[sorted.length];
};
