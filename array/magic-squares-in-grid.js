// https://leetcode.com/problems/magic-squares-in-grid/
// tags - array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  if (m < 3 || n < 3) return 0;

  // (cr, cc) is the centre of the grid.
  function isMagic(cr, cc) {
    let sum;
    const set = new Set();
    // Check the rows.
    for (let r = cr - 1; r <= cr + 1; r++) {
      let rsum = 0;
      for (let c = cc - 1; c <= cc + 1; c++) {
        if (grid[r][c] < 1 || grid[r][c] > 9 || set.has(grid[r][c]))
          return false;
        set.add(grid[r][c]);
        rsum += grid[r][c];
      }

      if (sum == null) {
        sum = rsum;
      } else if (rsum !== sum) {
        return false;
      }
    }

    // Check the columns.
    for (let c = cc - 1; c <= cc + 1; c++) {
      let csum = 0;
      for (let r = cr - 1; r <= cr + 1; r++) {
        csum += grid[r][c];
      }
      if (csum !== sum) return false;
    }

    // Check the diagonals.
    if (grid[cr - 1][cc - 1] + grid[cr][cc] + grid[cr + 1][cc + 1] !== sum)
      return false;
    if (grid[cr - 1][cc + 1] + grid[cr][cc] + grid[cr + 1][cc - 1] !== sum)
      return false;

    return true;
  }

  let numMagic = 0;
  for (let r = 1; r < m - 1; r++) {
    for (let c = 1; c < n - 1; c++) {
      if (isMagic(r, c)) numMagic++;
    }
  }
  return numMagic;
};
