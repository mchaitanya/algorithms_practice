// https://leetcode.com/problems/n-queens-ii/
// tags - backtracking
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  // Track if a queen has already been placed in a column/diagonal.
  const columnsTaken = new Set();
  const diagsUpTaken = new Set(); // Each element on the  'up' diagonal has the same (row + col).
  const diagsDownTaken = new Set(); // // Each element on the  'down' diagonal has the same (row - col).

  let numSolutions = 0;
  function place(row) {
    if (row === n) {
      numSolutions++;
      return;
    }
    // Attempt to pick a column for the queen in this row.
    for (let col = 0; col < n; col++) {
      const diagUp = row + col;
      const diagDown = row - col;
      if (
        columnsTaken.has(col) ||
        diagsUpTaken.has(diagUp) ||
        diagsDownTaken.has(diagDown)
      )
        continue;

      // Mark the column & diagonals as containing a queen.
      columnsTaken.add(col);
      diagsUpTaken.add(diagUp);
      diagsDownTaken.add(diagDown);

      // Move onto the next row.
      place(row + 1);

      // Backtrack.
      columnsTaken.delete(col);
      diagsUpTaken.delete(diagUp);
      diagsDownTaken.delete(diagDown);
    }
  }
  place(0);
  return numSolutions;
};
