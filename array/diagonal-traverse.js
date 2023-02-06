// https://leetcode.com/problems/diagonal-traverse/
// tags - array
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  // Both m & n are at least 1.
  const m = mat.length;
  const n = mat[0].length;

  const diagonals = [];
  // The sum of row & column indices will be the same on each diagonal.
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // Because we iterate L-R, T-B, we'll encounter the sum of the indices in increasing order.
      if (r + c >= diagonals.length) diagonals.push([]);
      diagonals[r + c].push(mat[r][c]);
    }
  }

  const result = [];
  // All the diagonals will be T-B. Reverse the even-numbered diagonals.
  for (let i = 0; i < diagonals.length; i++) {
    result.push(...(i % 2 === 0 ? diagonals[i].reverse() : diagonals[i]));
  }
  return result;

  // const result = [];
  // let reversed = false;
  // // Down the first column.
  // for (let d = 0; d < m; d++, reversed = !reversed) {
  //     const diagonal = [];
  //     for (let r = d, c = 0; r >= 0 && c < n; r--, c++) {
  //         diagonal.push(mat[r][c]);
  //     }
  //     result.push(...(reversed ? diagonal.reverse() : diagonal));
  // }

  // // Across the last row.
  // for (let d = 1; d < n; d++, reversed = !reversed) {
  //     const diagonal = [];
  //     for (let r = m-1, c = d; r >= 0 && c < n; r--, c++) {
  //         diagonal.push(mat[r][c]);
  //     }
  //     result.push(...(reversed ? diagonal.reverse() : diagonal));
  // }

  // return result;
};
