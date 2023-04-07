// https://leetcode.com/problems/number-of-distinct-islands/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  // Given both m, n >= 1.
  const m = grid.length;
  const n = grid[0].length;
  const LAND = 1,
    WATER = 0;

  function dfs(r, c, label, boundingBox) {
    grid[r][c] = label;
    boundingBox[0] = Math.min(r, boundingBox[0]);
    boundingBox[1] = Math.min(c, boundingBox[1]);
    boundingBox[2] = Math.max(r, boundingBox[2]);
    boundingBox[3] = Math.max(c, boundingBox[3]);
    for (const [dr, dc] of [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      const rn = r + dr,
        cn = c + dc;
      if (rn >= 0 && rn < m && cn >= 0 && cn < n && grid[rn][cn] === LAND) {
        dfs(rn, cn, label, boundingBox);
      }
    }
  }

  let label = 2;
  const map = new Map(); // Map each label to its bounding box (rmin, cmin, rmax, cmax);
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === LAND) {
        const boundingBox = [Infinity, Infinity, -Infinity, -Infinity];
        dfs(r, c, label, boundingBox);
        map.set(label, boundingBox);
        label++;
      }
    }
  }

  const set = new Set();
  for (const [label, boundingBox] of map.entries()) {
    const key = [];
    const [rmin, cmin, rmax, cmax] = boundingBox;
    for (let r = rmin; r <= rmax; r++) {
      for (let c = cmin; c <= cmax; c++) {
        if (grid[r][c] === label) {
          key.push(r - rmin, c - cmin);
        }
      }
    }
    set.add(key.join("|"));
  }
  return set.size;
};
