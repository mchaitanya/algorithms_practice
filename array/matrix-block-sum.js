// https://leetcode.com/problems/matrix-block-sum/
// tags - array
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  for (let r = 0; r < m; r++) {
    for (let c = 1; c < n; c++) {
      mat[r][c] += mat[r][c - 1];
    }
  }

  for (let c = 0; c < n; c++) {
    for (let r = 1; r < m; r++) {
      mat[r][c] += mat[r - 1][c];
    }
  }

  const result = new Array(m);
  for (let r = 0; r < m; r++) {
    result[r] = new Array(n);
    for (let c = 0; c < n; c++) {
      const rstart = Math.max(0, r - k),
        rend = Math.min(m - 1, r + k);
      const cstart = Math.max(0, c - k),
        cend = Math.min(n - 1, c + k);
      result[r][c] = mat[rend][cend];
      if (rstart > 0) result[r][c] -= mat[rstart - 1][cend];
      if (cstart > 0) result[r][c] -= mat[rend][cstart - 1];
      if (rstart > 0 && cstart > 0) result[r][c] += mat[rstart - 1][cstart - 1];
    }
  }
  return result;
};
