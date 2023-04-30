// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  // Given both m, n >= 1.
  const m = grid.length;
  const n = grid[0].length;

  // Return all the fish we can catch starting from (r, c).
  function dfs(r, c) {
    let fish = grid[r][c];
    grid[r][c] = 0; // Mark the cell as seen.
    for (const [dr, dc] of [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      const rn = r + dr,
        cn = c + dc;
      if (rn >= 0 && rn < m && cn >= 0 && cn < n && grid[rn][cn] > 0) {
        fish += dfs(rn, cn);
      }
    }
    return fish;
  }

  let maxFish = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] > 0) {
        maxFish = Math.max(maxFish, dfs(r, c));
      }
    }
  }
  return maxFish;
};
