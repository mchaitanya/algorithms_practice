// https://leetcode.com/problems/special-positions-in-a-binary-matrix/
// tags - array
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  let rowsAtleast2 = 0,
    colsAtleast2 = 0;
  const onesRow = new Array(m).fill(0);
  const onesCol = new Array(n).fill(0);
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 1) {
        onesRow[r]++;
        onesCol[c]++;
        if (onesRow[r] === 2) rowsAtleast2++;
        if (onesCol[c] === 2) colsAtleast2++;
        if (rowsAtleast2 === m && colsAtleast2 === n) return 0;
      }
    }
  }

  let numSpecial = 0;
  for (let r = 0; r < m; r++) {
    if (onesRow[r] > 1) continue;
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 1 && onesCol[c] === 1) numSpecial++;
    }
  }
  return numSpecial;
};
