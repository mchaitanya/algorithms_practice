// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/
// tags - array
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const onesRow = new Array(m).fill(0);
  const onesCol = new Array(n).fill(0);
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        onesRow[r]++;
        onesCol[c]++;
      }
    }
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      grid[r][c] = 2 * onesRow[r] + 2 * onesCol[c] - m - n;
    }
  }
  return grid;
};
