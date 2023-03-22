// https://leetcode.com/problems/knight-probability-in-chessboard/
// tags - dynamic-programming
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  const memo = new Array(n);
  for (let r = 0; r < n; r++) {
    memo[r] = new Array(n);
    for (let c = 0; c < n; c++) {
      memo[r][c] = new Array(k + 1).fill(null);
    }
  }

  // State
  //  r - Current row
  //  c - Current column
  //  moves - Number of moves knight must make
  // Return number of sequences where knight remains on the board.
  const offsets = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  function dp(r, c, moves) {
    if (r < 0 || r >= n || c < 0 || c >= n) return 0;
    if (moves === 0) return 1;
    if (memo[r][c][moves] != null) return memo[r][c][moves];

    let total = 0;
    for (const [dr, dc] of offsets) {
      const rn = r + dr,
        cn = c + dc;
      total += dp(rn, cn, moves - 1);
    }
    memo[r][c][moves] = total;
    return total;
  }

  // const movesRemainBoard = dp(row, column, k);
  // const movesTotal = 8 ** k;
  // return movesRemainBoard / movesTotal;
  let result = dp(row, column, k);
  for (let i = 0; i < k; i++) {
    result /= 8;
  }
  return result;
};
