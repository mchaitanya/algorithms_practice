// https://leetcode.com/problems/maximal-square/
// tags - dynamic-programming
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // Given both m, n >= 1
  const m = matrix.length;
  const n = matrix[0].length;

  const memo = new Array(m);
  for (let r = 0; r < m; r++) {
    memo[r] = new Array(n).fill(null);
  }

  // Idea from LC
  // Return the side length of the maximal square whose top-left corner is at (r,c).
  function maxSide(r, c) {
    if (matrix[r][c] === "0") {
      return 0;
    } else if (r === m - 1 || c === n - 1) {
      return 1;
    }

    if (memo[r][c] != null) return memo[r][c];

    let minSideNb = Infinity;
    for (const [dr, dc] of [
      [0, 1],
      [1, 1],
      [1, 0],
    ]) {
      const rn = r + dr,
        cn = c + dc;
      if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
        const sideNb = maxSide(rn, cn);
        if (sideNb < minSideNb) minSideNb = sideNb;
      }
    }
    memo[r][c] = 1 + minSideNb;
    return memo[r][c];
  }

  let max = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const side = maxSide(r, c);
      if (side > max) max = side;
    }
  }
  return max * max;
};
