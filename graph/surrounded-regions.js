// https://leetcode.com/problems/surrounded-regions/
// tags - graph
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // Given both m, n >= 0.
  const m = board.length;
  const n = board[0].length;

  function getNeighbours(r, c) {
    return [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]
      .map(([dr, dc]) => [r + dr, c + dc])
      .filter(([rn, cn]) => rn >= 0 && rn < m && cn >= 0 && cn < n);
  }

  const seen = new Array(m);
  for (let r = 0; r < m; r++) {
    seen[r] = new Array(n).fill(false);
  }

  function bfs(r, c) {
    const queue = [[r, c]];
    seen[r][c] = true;
    while (queue.length > 0) {
      const [rl, cl] = queue.shift();
      for (const [rn, cn] of getNeighbours(rl, cl)) {
        if (!seen[rn][cn] && board[rn][cn] === "O") {
          seen[rn][cn] = true;
          queue.push([rn, cn]);
        }
      }
    }
  }

  // Start BFS/DFS from the 'O' cells on the edges.
  // Any seen 'O' cell after that cannot be captured.
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === "X") continue;
      if (r === 0 || r === m - 1 || c === 0 || c === n - 1) {
        if (!seen[r][c]) bfs(r, c);
      }
    }
  }

  // Flip all cells that weren't seen to 'X'.
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!seen[r][c]) board[r][c] = "X";
    }
  }
};
