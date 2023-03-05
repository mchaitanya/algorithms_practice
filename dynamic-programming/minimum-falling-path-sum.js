// https://leetcode.com/problems/minimum-falling-path-sum/
// tags - dynamic-programming
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  // Given n >= 1
  const n = matrix.length;
  // dp[r][c] = Minimum falling path sum ending on (r, c)
  const dp = new Array(n);
  for (let r = 0; r < n; r++) {
    dp[r] = new Array(n).fill(0);
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      dp[r][c] = matrix[r][c];
      // We can reach a cell from the top, top-left & top-right.
      if (r > 0) {
        let minSumNb = dp[r - 1][c];
        if (c > 0) minSumNb = Math.min(minSumNb, dp[r - 1][c - 1]);
        if (c < n - 1) minSumNb = Math.min(minSumNb, dp[r - 1][c + 1]);
        dp[r][c] += minSumNb;
      }
    }
  }

  let minSum = Infinity;
  // Iterate over the bottom row for the min falling path sum.
  for (let c = 0; c < n; c++) {
    minSum = Math.min(minSum, dp[n - 1][c]);
  }
  return minSum;
};
