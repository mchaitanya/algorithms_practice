// https://leetcode.com/problems/shortest-bridge/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  // Given n >= 2.
  const n = grid.length;
  const LAND = 1,
    WATER = 0,
    SEEN = -1;

  function getNeighbours(r, c) {
    return [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]
      .map(([dr, dc]) => [r + dr, c + dc])
      .filter(([rn, cn]) => rn >= 0 && rn < n && cn >= 0 && cn < n);
  }

  let queue = [];
  // Run DFS to find the first island & store its cells in queue.
  function dfs(r, c) {
    queue.push([r, c]);
    grid[r][c] = SEEN;
    for (const [rn, cn] of getNeighbours(r, c)) {
      if (grid[rn][cn] === LAND) {
        dfs(rn, cn);
      }
    }
  }

  scan: for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === LAND) {
        dfs(r, c);
        break scan;
      }
    }
  }

  // BFS from the first island to find the shortest distance to the second one.
  let numFlip = 0;
  while (queue.length > 0) {
    const next = [];
    for (const [r, c] of queue) {
      for (const [rn, cn] of getNeighbours(r, c)) {
        if (grid[rn][cn] === LAND) {
          return numFlip;
        } else if (grid[rn][cn] === WATER) {
          grid[rn][cn] = SEEN;
          next.push([rn, cn]);
        }
      }
    }
    queue = next;
    if (next.length > 0) numFlip++;
  }
  // Shouldn't reach here. We're guaranteed to hit another island.
};
