// https://leetcode.com/problems/check-if-matrix-is-x-matrix/
// tags - array
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (c === r || c === n - r - 1) {
        if (grid[r][c] === 0) return false;
      } else if (grid[r][c] !== 0) {
        return false;
      }
    }
  }
  return true;
};
