// https://leetcode.com/problems/number-of-closed-islands/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  // Given both m,n >= 1.
  const m = grid.length;
  const n = grid[0].length;
  const LAND = 0,
    WATER = 1,
    SEEN = -1;

  // function getNeighbours(r, c) {
  //     return [[-1,0], [0,1], [1,0], [0,-1]]
  //         .map(([dr, dc]) => [r+dr, c+dc])
  //         .filter(([rn, cn]) => rn >= 0 && rn < m && cn >= 0 && cn < n);
  // }

  // const seen = new Array(m);
  // for (let r = 0; r < m; r++) {
  //     seen[r] = new Array(n).fill(false);
  // }

  function bfs(r, c) {
    const queue = [[r, c]];
    // seen[r][c] = true;
    grid[r][c] = SEEN;
    while (queue.length > 0) {
      const [rl, cl] = queue.shift();
      for (const [dr, dc] of [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ]) {
        const rn = rl + dr,
          cn = cl + dc;
        if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
          if (grid[rn][cn] === LAND) {
            grid[rn][cn] = SEEN;
            queue.push([rn, cn]);
          }
          // if (grid[rn][cn] === LAND && !seen[rn][cn]) {
          //     seen[rn][cn] = true;
          //     queue.push([rn, cn]);
          // }
        }
      }
      // for (const [rn, cn] of getNeighbours(rl, cl)) {
      //     if (grid[rn][cn] === LAND && !seen[rn][cn]) {
      //         seen[rn][cn] = true;
      //         queue.push([rn, cn]);
      //     }
      // }
    }
  }

  // First BFS from the edges. All land cells connected to the edges will be marked seen.
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === WATER) continue;
      if (r === 0 || r === m - 1 || c === 0 || c === n - 1) {
        if (grid[r][c] === LAND) bfs(r, c);
        // if (!seen[r][c]) bfs(r, c);
      }
    }
  }

  // Count the remaining connected components.
  let numClosed = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === LAND) {
        bfs(r, c);
        numClosed++;
      }
      // if (grid[r][c] === LAND && !seen[r][c]) {
      //     bfs(r, c);
      //     numClosed++;
      // }
    }
  }
  return numClosed;
};
