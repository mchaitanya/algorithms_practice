// https://leetcode.com/problems/as-far-from-land-as-possible/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  // Given n >= 1.
  const n = grid.length;
  const WATER = 0,
    LAND = 1,
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

  // Start BFS from all the land cells.
  let level = [];
  let numWater = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === LAND) {
        level.push([r, c]);
      } else {
        numWater++;
      }
    }
  }

  // Return early if no water/land exists in the grid.
  if (numWater === 0 || level.length === 0) return -1;

  let distance = 0;
  while (level.length > 0) {
    const nextLevel = [];
    for (const [r, c] of level) {
      for (const [rn, cn] of getNeighbours(r, c)) {
        if (grid[rn][cn] === WATER) {
          grid[rn][cn] = SEEN;
          nextLevel.push([rn, cn]);
        }
      }
    }
    level = nextLevel;
    if (nextLevel.length > 0) distance++;
  }
  return distance;
};
