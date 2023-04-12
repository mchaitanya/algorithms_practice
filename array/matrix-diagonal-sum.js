// https://leetcode.com/problems/matrix-diagonal-sum/
// tags - array
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length;
  let sum = 0;
  for (let r = 0, c = n - 1; r < n; r++, c--) {
    sum += mat[r][r] + mat[r][c];
  }

  if (n % 2 === 1) {
    const mid = Math.floor(n / 2);
    sum -= mat[mid][mid];
  }

  return sum;
};
