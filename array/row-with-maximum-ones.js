// https://leetcode.com/problems/row-with-maximum-ones/
// tags - array
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  let maxIndex = 0,
    maxCount = 0;
  for (let r = 0; r < m; r++) {
    let count = 0;
    for (let c = 0; c < n; c++) {
      count += mat[r][c];
    }
    if (count > maxCount) {
      maxIndex = r;
      maxCount = count;
    }
  }
  return [maxIndex, maxCount];
};
