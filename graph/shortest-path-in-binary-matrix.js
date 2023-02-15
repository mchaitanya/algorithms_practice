// https://leetcode.com/problems/shortest-path-in-binary-matrix/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length; // Given n >= 1.
  if (grid[0][0] === 1) return -1;

  function getNeighbours(r, c) {
    // Cells are 8-directionally connected.
    return [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]
      .map(([dr, dc]) => [r + dr, c + dc])
      .filter(([rn, cn]) => rn >= 0 && rn < n && cn >= 0 && cn < n);
  }

  // const seen = new Set();
  // function isSeen(r, c) {
  //     return seen.has(r*n + c);
  // }
  // function markSeen(r, c) {
  //     seen.add(r*n + c);
  // }
  // const seen = new Array(n);
  // for (let i = 0; i < n; i++) {
  //     seen[i] = new Array(n).fill(false);
  // }

  // Since we need to find the shortest path, we'll BFS the grid from (0,0).
  let pathLen = 1;
  let level = [[0, 0]];
  // markSeen(0, 0);
  // seen[0][0] = true;
  grid[0][0] = -1; // Set value to -1 to indicate seen.
  while (level.length > 0) {
    const nextLevel = [];
    for (const [r, c] of level) {
      if (r === n - 1 && c === n - 1) return pathLen;
      for (const [rn, cn] of getNeighbours(r, c)) {
        // if (grid[rn][cn] === 0 && !isSeen(rn, cn)) {
        //     markSeen(rn, cn);
        //     nextLevel.push([rn, cn]);
        // }
        // if (grid[rn][cn] === 0 && !seen[rn][cn]) {
        //     seen[rn][cn] = true;
        //     nextLevel.push([rn, cn]);
        // }
        if (grid[rn][cn] === 0) {
          grid[rn][cn] = -1;
          nextLevel.push([rn, cn]);
        }
      }
    }
    level = nextLevel;
    pathLen++;
  }
  return -1;
};
