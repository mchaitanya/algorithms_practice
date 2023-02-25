// https://leetcode.com/problems/count-sub-islands/
// tags - graph
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  // Given both m, n >= 1
  const m = grid1.length;
  const n = grid1[0].length;
  const LAND = 1,
    WATER = 0,
    SEEN = 2;

  // function getNeighbours(r, c) {
  //     return [[-1,0], [0,1], [1,0], [0,-1]]
  //         .map(([dr, dc]) => [r+dr, c+dc])
  //         .filter(([rn, cn]) => rn >= 0 && rn < m && cn >= 0 && cn < n);
  // }

  // Start BFS from [r,c] & return true if the island is a sub-island.
  function checkSubIsland(r, c) {
    let isSubIsland = true;
    const queue = [[r, c]];
    grid2[r][c] = SEEN;
    while (queue.length > 0) {
      const [rl, cl] = queue.shift();
      if (grid1[rl][cl] === WATER) isSubIsland = false;
      for (const [dr, dc] of [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ]) {
        const rn = rl + dr,
          cn = cl + dc;
        if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
          if (grid2[rn][cn] === LAND) {
            grid2[rn][cn] = SEEN;
            queue.push([rn, cn]);
          }
        }
      }
      // for (const [rn,cn] of getNeighbours(rl, cl)) {
      //     if (grid2[rn][cn] === LAND) {
      //         queue.push([rn, cn]);
      //     }
      // }
    }
    return isSubIsland;
  }

  let numSubIslands = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid2[r][c] === LAND && checkSubIsland(r, c)) {
        numSubIslands++;
      }
    }
  }
  return numSubIslands;
};
