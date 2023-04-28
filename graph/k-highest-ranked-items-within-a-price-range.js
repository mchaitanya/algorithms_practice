// https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/
// tags - graph
/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function (grid, pricing, start, k) {
  const m = grid.length;
  const n = grid[0].length;
  const WALL = 0,
    EMPTY = 1;

  const items = [];
  const [ro, co] = start;
  if (grid[ro][co] >= pricing[0] && grid[ro][co] <= pricing[1]) {
    if (k === 1) return [start];
    items.push([0, grid[ro][co], ro, co]);
  }

  // BFS from the starting location.
  let distance = 0;
  let queue = [[ro, co]];
  grid[ro][co] = WALL;
  while (queue.length > 0) {
    const next = [];
    for (const [r, c] of queue) {
      for (const [dr, dc] of [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ]) {
        const rn = r + dr,
          cn = c + dc;
        if (rn >= 0 && rn < m && cn >= 0 && cn < n && grid[rn][cn] !== WALL) {
          if (grid[rn][cn] >= pricing[0] && grid[rn][cn] <= pricing[1]) {
            items.push([distance + 1, grid[rn][cn], rn, cn]);
          }
          grid[rn][cn] = WALL; // Set the cell to WALL to mark it as seen.
          next.push([rn, cn]);
        }
      }
    }
    if (items.length >= k) break;
    queue = next;
    distance++;
  }

  return items
    .sort((item1, item2) => {
      for (let i = 0; i < 4; i++) {
        if (item1[i] !== item2[i]) return item1[i] - item2[i];
      }
    })
    .map((item) => [item[2], item[3]]) // Map to [row, col]
    .slice(0, k);
};
