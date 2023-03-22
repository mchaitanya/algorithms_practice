// https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/
// tags - array
/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  // Scan the matrix along the rows, columns, diagonals & anti-diagonals.

  function maxConsecutiveOnes(arr) {
    let max = 0;
    for (let i = 0, count = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        count++;
        if (i === arr.length - 1 || arr[i + 1] === 0) {
          max = Math.max(max, count);
          count = 0;
        }
      }
    }
    return max;
  }

  let maxLen = 0;

  // Rows.
  for (let r = 0; r < m; r++) {
    maxLen = Math.max(maxLen, maxConsecutiveOnes(mat[r]));
  }

  // Columns.
  for (let c = 0; c < n; c++) {
    const column = new Array(m);
    for (let r = 0; r < m; r++) {
      column[r] = mat[r][c];
    }
    maxLen = Math.max(maxLen, maxConsecutiveOnes(column));
  }

  // Diagonals & anti-diagonals.
  const map1 = new Map(),
    map2 = new Map();
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const key1 = r + c,
        key2 = r - c;
      if (!map1.has(key1)) map1.set(key1, []);
      map1.get(key1).push(mat[r][c]);
      if (!map2.has(key2)) map2.set(key2, []);
      map2.get(key2).push(mat[r][c]);
    }
  }

  for (const vals of map1.values()) {
    maxLen = Math.max(maxLen, maxConsecutiveOnes(vals));
  }

  for (const vals of map2.values()) {
    maxLen = Math.max(maxLen, maxConsecutiveOnes(vals));
  }

  return maxLen;
};
