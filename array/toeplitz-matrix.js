// https://leetcode.com/problems/toeplitz-matrix/
// tags - array
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  // Given - m,n >= 1
  const m = matrix.length,
    n = matrix[0].length;
  // Across the first row
  for (let i = 0; i < n; i++) {
    for (let r = 1, c = i + 1; r < m && c < n; r++, c++) {
      if (matrix[r][c] !== matrix[0][i]) return false;
    }
  }

  // Down the first column
  for (let i = 1; i < m; i++) {
    for (let c = 1, r = i + 1; r < m && c < n; c++, r++) {
      if (matrix[r][c] !== matrix[i][0]) return false;
    }
  }

  return true;
};
