// https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/
// tags - dynamic-programming
/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  // From LC Explore
  const n = nums.length;
  const m = multipliers.length; // Given m >= 1
  // State variables:
  // i = #operations we're performed so far
  // left = #numbers from the left we've used so far
  const memo = new Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = new Array(m).fill(null);
  }

  // dp = Max score at state (i, left)
  function dp(i, left) {
    // Base case
    if (i === m) return 0; // Already performed m operations
    if (memo[i][left] != null) return memo[i][left];

    const multiplier = multipliers[i];
    const right = n - 1 - (i - left);
    // Recurrence relation
    memo[i][left] = Math.max(
      multiplier * nums[left] + dp(i + 1, left + 1),
      multiplier * nums[right] + dp(i + 1, left)
    );
    return memo[i][left];
  }

  return dp(0, 0);
};
