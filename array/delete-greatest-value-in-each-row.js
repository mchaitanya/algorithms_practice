// https://leetcode.com/problems/delete-greatest-value-in-each-row//
// tags - array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let r = 0; r < m; r++) {
    grid[r].sort((num1, num2) => num2 - num1);
  }

  let result = 0;
  for (let c = 0; c < n; c++) {
    let max = 0; // Given grid contains only positive integers.
    for (let r = 0; r < m; r++) {
      max = Math.max(max, grid[r][c]);
    }
    result += max;
  }
  return result;
};
