// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
// tags - array
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;
  const nums = new Array(n).fill(0).map((val, i) => i + 1);

  // Check all the rows.
  for (let r = 0; r < n; r++) {
    const set = new Set(nums);
    for (let c = 0; c < n; c++) {
      set.delete(matrix[r][c]);
    }
    if (set.size > 0) return false;
  }

  // Check all the columns.
  for (let c = 0; c < n; c++) {
    const set = new Set(nums);
    for (let r = 0; r < n; r++) {
      set.delete(matrix[r][c]);
    }
    if (set.size > 0) return false;
  }

  return true;
};
