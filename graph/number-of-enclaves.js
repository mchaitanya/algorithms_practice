// https://leetcode.com/problems/number-of-enclaves/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  // Given both m & n >= 1.
  const m = grid.length;
  const n = grid[0].length;
  const LAND = 1,
    SEA = 0;

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
  for (let i = 0; i < m; i++) {
    seen[i] = new Array(n).fill(false);
  }

  // Return number of land cells that can be reached from (r, c);
  // function dfs(r, c) {
  //     let count = 1;
  //     seen[r][c] = true;
  //     for (const [rn, cn] of getNeighbours(r, c)) {
  //         if (!seen[rn][cn] && grid[rn][cn] === LAND) {
  //             count += dfs(rn, cn);
  //         }
  //     }
  //     return count;
  // }

  function bfs(r, c) {
    let count = 0;
    const queue = [[r, c]];
    seen[r][c] = true;
    while (queue.length > 0) {
      count++;
      const [rl, cl] = queue.shift();
      for (const [rn, cn] of getNeighbours(rl, cl)) {
        if (!seen[rn][cn] && grid[rn][cn] === LAND) {
          seen[rn][cn] = true;
          queue.push([rn, cn]);
        }
      }
    }
    return count;
  }

  let numTotal = 0;
  let numReachEdge = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === SEA) continue;
      numTotal++;
      // DFS/BFS from each land cell on the boundary.
      if (r === 0 || r === m - 1 || c === 0 || c === n - 1) {
        if (!seen[r][c]) {
          numReachEdge += bfs(r, c);
        }
      }
    }
  }
  return numTotal - numReachEdge;
};
