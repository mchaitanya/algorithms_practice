// https://leetcode.com/problems/unique-paths-ii/
// tags - dynamic-programming
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // Given both m, n >= 1.
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1) return 0;

  const dp = new Array(m);
  for (let r = 0; r < m; r++) {
    dp[r] = new Array(n).fill(0);
  }

  dp[0][0] = 1;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (obstacleGrid[r][c] === 1) continue;
      if (r > 0 && obstacleGrid[r - 1][c] === 0) {
        dp[r][c] += dp[r - 1][c];
      }
      if (c > 0 && obstacleGrid[r][c - 1] === 0) {
        dp[r][c] += dp[r][c - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
