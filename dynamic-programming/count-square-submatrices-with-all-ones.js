// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// tags - dynamic-programming
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  // Given both m, n >= 1.
  const m = matrix.length;
  const n = matrix[0].length;

  // Apply DP to find the maximal square whose top-left corner is (r, c).
  let numSquareSubmatrices = 0;
  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      if (r <= m - 2 && c <= n - 2 && matrix[r][c] === 1) {
        matrix[r][c] += Math.min(
          matrix[r + 1][c],
          matrix[r + 1][c + 1],
          matrix[r][c + 1]
        );
      }
      // The largest square whose top-left corner is (r, c) has a side length of matrix[r][c].
      // Therefore there are matrix[r][c] squares that can have (r, c) as their top-left corner.
      numSquareSubmatrices += matrix[r][c];
    }
  }
  return numSquareSubmatrices;
};
