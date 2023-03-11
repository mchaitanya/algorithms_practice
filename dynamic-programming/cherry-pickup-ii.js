// https://leetcode.com/problems/cherry-pickup-ii/
// tags - dynamic-programming
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  // Given both m, n >= 2
  const m = grid.length;
  const n = grid[0].length;

  function getNextColumns(c) {
    const next = [];
    for (const dc of [-1, 0, 1]) {
      const cn = c + dc;
      if (cn >= 0 && cn < n) {
        next.push(cn);
      }
    }
    return next;
  }

  const memo = new Array(m);
  for (let r = 0; r < m; r++) {
    memo[r] = new Array(n);
    for (let c = 0; c < n; c++) {
      memo[r][c] = new Array(n).fill(null);
    }
  }

  // Apply dynamic programming.
  // Assumption - Both robots take a step forward each time. Therefore they are both on the same row at all times.
  // r - Current row the robots are on
  // c1 - Current column robot1 is in
  // c2 - Current column robot2 is in
  // Return the max cherries the robots can collect.
  function dp(r, c1, c2) {
    if (r === m) return 0; // Both robots have reached the bottom.
    if (memo[r][c1][c2] != null) return memo[r][c1][c2];

    let maxCherries = 0;
    for (const cn1 of getNextColumns(c1)) {
      for (const cn2 of getNextColumns(c2)) {
        maxCherries = Math.max(maxCherries, dp(r + 1, cn1, cn2));
      }
    }

    memo[r][c1][c2] = maxCherries + grid[r][c1] + (c2 !== c1 ? grid[r][c2] : 0);
    return memo[r][c1][c2];
  }

  return dp(0, 0, n - 1);
};
