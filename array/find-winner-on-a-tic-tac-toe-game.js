// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
// tags - array
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const grid = new Array(3);
  for (let r = 0; r < 3; r++) {
    grid[r] = new Array(3).fill(" ");
  }

  // Populate the grid.
  for (let i = 0, token = "X"; i < moves.length; i++) {
    grid[moves[i][0]][moves[i][1]] = token;
    token = token === "X" ? "O" : "X";
  }

  // Check the rows for a winner.
  for (let r = 0; r < 3; r++) {
    if (
      grid[r][0] !== " " &&
      grid[r][1] === grid[r][0] &&
      grid[r][2] === grid[r][0]
    ) {
      return grid[r][0] === "X" ? "A" : "B";
    }
  }

  // Check the columns.
  for (let c = 0; c < 3; c++) {
    if (
      grid[0][c] !== " " &&
      grid[1][c] === grid[0][c] &&
      grid[2][c] === grid[0][c]
    ) {
      return grid[0][c] === "X" ? "A" : "B";
    }
  }

  // Check the diagonals.
  if (
    grid[0][0] !== " " &&
    grid[1][1] === grid[0][0] &&
    grid[2][2] === grid[0][0]
  ) {
    return grid[0][0] === "X" ? "A" : "B";
  }

  if (
    grid[0][2] !== " " &&
    grid[1][1] === grid[0][2] &&
    grid[2][0] === grid[0][2]
  ) {
    return grid[0][2] === "X" ? "A" : "B";
  }

  return moves.length === 9 ? "Draw" : "Pending";
};
