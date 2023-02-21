// https://leetcode.com/problems/valid-sudoku/
// tags - array
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = 9;
  const rows = new Array(n).fill(0).map(() => new Set());
  const cols = new Array(n).fill(0).map(() => new Set());
  const boxes = new Array(n).fill(0).map(() => new Set());
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const val = board[r][c];
      if (val === ".") continue;
      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (rows[r].has(val) || cols[c].has(val) || boxes[box].has(val)) {
        return false;
      }
      rows[r].add(val);
      cols[c].add(val);
      boxes[box].add(val);
    }
  }
  return true;
};
