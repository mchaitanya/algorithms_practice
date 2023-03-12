// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
// tags - dynamic-programming
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  // Given both m, n >= 1.
  const m = matrix.length;
  const n = matrix[0].length;

  const memo = new Array(m);
  for (let r = 0; r < m; r++) {
    memo[r] = new Array(n).fill(null);
  }

  // Apply dynamic programming.
  // Length of longest path from (r,c) = 1 + longest path from one of its neighbours.
  function dp(r, c) {
    if (memo[r][c] == null) {
      let maxFromNeighbour = 0;
      for (const [dr, dc] of [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ]) {
        const rn = r + dr,
          cn = c + dc;
        if (
          rn >= 0 &&
          rn < m &&
          cn >= 0 &&
          cn < n &&
          matrix[rn][cn] > matrix[r][c]
        ) {
          maxFromNeighbour = Math.max(maxFromNeighbour, dp(rn, cn));
        }
      }
      memo[r][c] = maxFromNeighbour + 1; // + 1 for itself.
    }
    return memo[r][c];
  }

  let maxLen = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      maxLen = Math.max(maxLen, dp(r, c));
    }
  }
  return maxLen;
};
