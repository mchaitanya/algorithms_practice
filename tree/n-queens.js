// https://leetcode.com/problems/n-queens/
// tags - backtracking
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // For each column, store the row in which it was used.
  const columns = new Array(n).fill(null);
  // Track if a queen has already been placed in a diagonal.
  // Each element on the  'up' diagonal has the same (row + col).
  const diagsUpTaken = new Array(2 * n - 1).fill(false);
  // Each element on the  'down' diagonal has the same (row - col).
  const diagsDownTaken = new Array(2 * n - 1).fill(false);

  const rowConfig = new Array(n).fill(".");
  const boardConfigs = [];
  function place(row) {
    if (row === n) {
      // Store the config.
      const boardConfig = new Array(n);
      for (let col = 0; col < n; col++) {
        rowConfig[col] = "Q";
        boardConfig[columns[col]] = rowConfig.join("");
        rowConfig[col] = ".";
      }
      boardConfigs.push(boardConfig);
      return;
    }
    // Attempt to pick a column for the queen in this row.
    for (let col = 0; col < n; col++) {
      const diagUp = row + col;
      const diagDown = row - col + n;
      if (
        columns[col] != null ||
        diagsUpTaken[diagUp] ||
        diagsDownTaken[diagDown]
      )
        continue;

      // Mark the column & diagonals as containing a queen.
      columns[col] = row;
      diagsUpTaken[diagUp] = true;
      diagsDownTaken[diagDown] = true;

      // Move onto the next row.
      place(row + 1);

      // Backtrack.
      columns[col] = null;
      diagsUpTaken[diagUp] = false;
      diagsDownTaken[diagDown] = false;
    }
  }
  place(0);
  return boardConfigs;
};
