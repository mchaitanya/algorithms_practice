// https://leetcode.com/problems/sort-the-matrix-diagonally/
// tags - array
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  // Given both m, n >= 1.
  const m = mat.length;
  const n = mat[0].length;

  // r-c is the same for elements on the diagonal.
  // Collect all the diagonal elements.
  const map = new Map();
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!map.has(r - c)) map.set(r - c, []);
      map.get(r - c).push(mat[r][c]);
    }
  }

  // Sort them.
  for (const arr of map.values()) {
    arr.sort((n1, n2) => n1 - n2);
  }

  // Write them into a new matrix.
  // Because we iterate left-right & top-bottom, we'll extract the sorted elements in the correct order.
  // const result = new Array(m);
  // for (let r = 0; r < m; r++) {
  //     result[r] = new Array(n);
  //     for (let c = 0; c < n; c++) {
  //         result[r][c] = map.get(r-c).shift();
  //     }
  // }
  // return result;
  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      mat[r][c] = map.get(r - c).pop();
    }
  }
  return mat;
};
