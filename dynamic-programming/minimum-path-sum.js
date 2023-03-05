// https://leetcode.com/problems/minimum-path-sum/
// tags - dynamic-programming
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // Given both m, n >= 1.
  const m = grid.length;
  const n = grid[0].length;

  const dp = new Array(m);
  for (let r = 0; r < m; r++) {
    dp[r] = new Array(n).fill(0);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      dp[r][c] = grid[r][c];
      if (r > 0 || c > 0) {
        let minSumNb = Infinity;
        // Can move into this cell from the top.
        if (r > 0 && dp[r - 1][c] < minSumNb) {
          minSumNb = dp[r - 1][c];
        }
        // Can move into this cell from the left.
        if (c > 0 && dp[r][c - 1] < minSumNb) {
          minSumNb = dp[r][c - 1];
        }
        dp[r][c] += minSumNb;
      }
    }
  }

  return dp[m - 1][n - 1];
};
