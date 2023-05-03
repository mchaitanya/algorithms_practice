// https://leetcode.com/problems/convert-1d-array-into-2d-array/
// tags - array
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];

  const result = new Array(m);
  for (let r = 0; r < m; r++) {
    result[r] = new Array(n);
    for (let c = 0; c < n; c++) {
      result[r][c] = original[r * n + c];
    }
  }
  return result;
};
