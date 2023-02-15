// https://leetcode.com/problems/rotting-oranges/
// tags - graph, bfs
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // Given both m & n >= 1.
  const m = grid.length;
  const n = grid[0].length;
  const EMPTY = 0,
    FRESH = 1,
    ROTTEN = 2;

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

  // Start BFS from all the rotten oranges.
  let numFresh = 0;
  let level = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === FRESH) {
        numFresh++;
      } else if (grid[r][c] === ROTTEN) {
        level.push([r, c]);
      }
    }
  }

  // Return early if the grid doesn't contain any fresh oranges.
  if (numFresh === 0) return 0;

  let minutes = 0;
  while (level.length > 0) {
    minutes++;
    const nextLevel = [];
    for (const [r, c] of level) {
      for (const [rn, cn] of getNeighbours(r, c)) {
        if (grid[rn][cn] === FRESH) {
          grid[rn][cn] = ROTTEN;
          numFresh--;
          if (numFresh === 0) return minutes;
          nextLevel.push([rn, cn]);
        }
      }
    }
    level = nextLevel;
  }
  return -1;
};
