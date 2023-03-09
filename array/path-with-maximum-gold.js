// https://leetcode.com/problems/path-with-maximum-gold/
// tags - array, backtracking
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  // Given both m, n >= 1
  const m = grid.length;
  const n = grid[0].length;

  // function getNeighbours(r, c) {
  //     return [[-1,0], [0,1], [1,0], [0,-1]]
  //         .map(([dr, dc]) => [r+dr, c+dc])
  //         .filter(([rn, cn]) => rn >= 0 && rn < m && cn >= 0 && cn < n);
  // }

  function dp(r, c, seen) {
    seen.add(r * n + c);
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
        grid[rn][cn] > 0 &&
        !seen.has(rn * n + cn)
      ) {
        maxFromNeighbour = Math.max(maxFromNeighbour, dp(rn, cn, seen));
      }
    }
    // for (const [rn, cn] of getNeighbours(r, c)) {
    //     if (grid[rn][cn] > 0 && !seen.has(rn*n + cn)) {
    //         maxFromNeighbour = Math.max(maxFromNeighbour, dp(rn, cn, seen));
    //     }
    // }
    // Backtrack.
    seen.delete(r * n + c);
    return grid[r][c] + maxFromNeighbour;
  }

  let maxGold = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] > 0) {
        maxGold = Math.max(maxGold, dp(r, c, new Set()));
      }
    }
  }
  return maxGold;
};
