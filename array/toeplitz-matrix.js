// https://leetcode.com/problems/toeplitz-matrix/
// tags - array
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // For every cell, check if the bottom right neighbour has the same value.
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r + 1 < m && c + 1 < n && matrix[r][c] !== matrix[r + 1][c + 1]) {
        return false;
      }
    }
  }
  return true;

  // // Given - m,n >= 1
  // const m = matrix.length,
  //   n = matrix[0].length;
  // // Across the first row
  // for (let i = 0; i < n; i++) {
  //   for (let r = 1, c = i + 1; r < m && c < n; r++, c++) {
  //     if (matrix[r][c] !== matrix[0][i]) return false;
  //   }
  // }

  // // Down the first column
  // for (let i = 1; i < m; i++) {
  //   for (let c = 1, r = i + 1; r < m && c < n; c++, r++) {
  //     if (matrix[r][c] !== matrix[i][0]) return false;
  //   }
  // }

  // return true;
};
