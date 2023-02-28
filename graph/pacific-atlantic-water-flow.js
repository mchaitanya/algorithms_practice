// https://leetcode.com/problems/pacific-atlantic-water-flow/
// tags - graph
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // Given both m, n >= 1.
  const m = heights.length;
  const n = heights[0].length;

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

  // Implementation from LC after mine threw an error.
  const pacificQueue = [];
  const atlanticQueue = [];
  for (let r = 0; r < m; r++) {
    pacificQueue.push([r, 0]);
    atlanticQueue.push([r, n - 1]);
  }
  for (let c = 0; c < n; c++) {
    pacificQueue.push([0, c]);
    atlanticQueue.push([m - 1, c]);
  }

  const pacificReachable = new Array(m);
  const atlanticReachable = new Array(m);
  for (let r = 0; r < m; r++) {
    pacificReachable[r] = new Array(n).fill(false);
    atlanticReachable[r] = new Array(n).fill(false);
  }

  function bfs(queue, reachable) {
    while (queue.length > 0) {
      const [r, c] = queue.shift();
      reachable[r][c] = true;
      for (const [rn, cn] of getNeighbours(r, c)) {
        if (!reachable[rn][cn] && heights[rn][cn] >= heights[r][c]) {
          queue.push([rn, cn]);
        }
      }
    }
  }

  bfs(pacificQueue, pacificReachable);
  bfs(atlanticQueue, atlanticReachable);

  const result = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (pacificReachable[r][c] && atlanticReachable[r][c]) {
        result.push([r, c]);
      }
    }
  }
  return result;
};
