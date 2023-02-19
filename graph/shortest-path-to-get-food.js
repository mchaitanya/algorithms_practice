// https://leetcode.com/problems/shortest-path-to-get-food/
// tags - graph
/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
  // Given both m & n >= 1.
  const m = grid.length;
  const n = grid[0].length;
  const LOCATION = "*",
    FOOD = "#",
    FREE = "O",
    OBSTACLE = "X",
    SEEN = -1;

  // function getNeighbours(r, c) {
  //     return [[-1,0], [0,1], [1,0], [0,-1]]
  //         .map(([dr,dc]) => [r+dr, c+dc])
  //         .filter(([rn,cn]) => rn >= 0 && rn < m && cn >= 0 && cn < n);
  // }

  // Start BFS from your location.
  let level = [];
  search: for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === LOCATION) {
        level.push([r, c]);
        grid[r][c] = SEEN;
        break search;
      }
    }
  }

  let distance = 0;
  while (level.length > 0) {
    distance++;
    const nextLevel = [];
    for (const [r, c] of level) {
      for (const [dr, dc] of [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ]) {
        const rn = r + dr,
          cn = c + dc;
        if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
          if (grid[rn][cn] === FOOD) return distance;
          if (grid[rn][cn] === FREE) {
            grid[rn][cn] = SEEN;
            nextLevel.push([rn, cn]);
          }
        }
      }
      // for (const [rn, cn] of getNeighbours(r, c)) {
      //     if (grid[rn][cn] === FOOD) return distance;
      //     if (grid[rn][cn] === FREE) {
      //         grid[rn][cn] = SEEN;
      //         nextLevel.push([rn, cn]);
      //     }
      // }
    }
    level = nextLevel;
  }
  return -1;
};
