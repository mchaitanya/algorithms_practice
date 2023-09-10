// https://leetcode.com/problems/sudoku-solver/
// tags - backtracking
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const n = 9;
  const empty = [];
  // Store the state of each row, column & 3x3 sub-box.
  const rows = new Array(n).fill(0).map(() => new Set());
  const cols = new Array(n).fill(0).map(() => new Set());
  const boxes = new Array(n).fill(0).map(() => new Set());
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === ".") {
        empty.push([r, c]);
        continue;
      }
      const num = Number(board[r][c]);
      // Calculate the box index.
      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      rows[r].add(num);
      cols[c].add(num);
      boxes[box].add(num);
    }
  }

  // Return true if we reach a solution.
  function solve(i) {
    if (i === empty.length) return true;
    const [r, c] = empty[i];
    const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
    // Try all numbers from 1 to 9.
    for (let num = 1; num <= 9; num++) {
      if (rows[r].has(num) || cols[c].has(num) || boxes[box].has(num)) {
        continue;
      }
      // Try the number.
      board[r][c] = String(num);
      rows[r].add(num);
      cols[c].add(num);
      boxes[box].add(num);
      // Move onto the next cell.
      if (solve(i + 1)) return true;
      // Backtrack.
      boxes[box].delete(num);
      cols[c].delete(num);
      rows[r].delete(num);
      board[r][c] = ".";
    }
    // Shouldn't reach here. Every input is guaranteed a solution.
    return false;
  }
  solve(0);
};
