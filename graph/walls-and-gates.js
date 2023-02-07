// https://leetcode.com/problems/walls-and-gates/
// tags - graph
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  // Given - Both m & n >= 1.
  const m = rooms.length;
  const n = rooms[0].length;
  const WALL = -1,
    GATE = 0,
    INF = 2147483647;

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

  // Start BFS from all the gates at the same time.
  let level = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (rooms[r][c] === GATE) level.push([r, c]);
    }
  }

  let depth = 0;
  while (level.length > 0) {
    depth++;
    const nextLevel = [];
    for (const [r, c] of level) {
      for (const [rn, cn] of getNeighbours(r, c)) {
        if (rooms[rn][cn] < INF) continue;
        rooms[rn][cn] = depth;
        nextLevel.push([rn, cn]);
      }
    }
    level = nextLevel;
  }
};
