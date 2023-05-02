// https://leetcode.com/problems/reshape-the-matrix/
// tags - array
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (r * c !== m * n) return mat;

  const reshaped = new Array(r);
  for (let i = 0; i < r; i++) {
    reshaped[i] = new Array(c);
  }

  for (let i = 0; i < m * n; i++) {
    const ro = Math.floor(i / n),
      co = i % n;
    const rn = Math.floor(i / c),
      cn = i % c;
    reshaped[rn][cn] = mat[ro][co];
  }
  return reshaped;
};
