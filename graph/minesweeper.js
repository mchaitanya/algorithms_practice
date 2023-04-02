// https://leetcode.com/problems/minesweeper/
// tags - graph
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  // Given both m, n >= 1
  const m = board.length;
  const n = board[0].length;

  // Unrevealed
  // M => Mine
  // E => Empty

  // Revealed
  // B => Revealed blank - no adjacent mines
  // 1 to 8 => Number of adjacent mines
  // X => Revealed mine

  // DFS from the clicked square till no more squares can be revealed.
  function dfs([r, c]) {
    if (board[r][c] === "M") {
      board[r][c] = "X";
      return;
    }

    let numMines = 0;
    const unrevealedEmpty = [];
    for (const [dr, dc] of [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]) {
      const rn = r + dr,
        cn = c + dc;
      if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
        if (board[rn][cn] === "M") {
          numMines++;
        } else if (board[rn][cn] === "E") {
          unrevealedEmpty.push([rn, cn]);
        }
      }
    }

    if (numMines > 0) {
      board[r][c] = String(numMines);
      return;
    }

    board[r][c] = "B";
    for (const square of unrevealedEmpty) {
      dfs(square);
    }
  }

  dfs(click);

  return board;
};
