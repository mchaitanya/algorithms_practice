// https://leetcode.com/problems/find-all-groups-of-farmland/
// tags - array, graph
/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const m = land.length;
  const n = land[0].length;
  const FOREST = 0,
    FARM = 1;

  const groups = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (land[r][c] === FOREST) continue;
      if (
        (r > 0 && land[r - 1][c] === FARM) ||
        (c > 0 && land[r][c - 1] === FARM)
      )
        continue;
      // (r, c) represents the top-left corner of a farmland group.
      // Scan the rows below.
      let rend = r;
      while (rend + 1 < m && land[rend + 1][c] === FARM) rend++;
      // Scan the columns to the right.
      let cend = c;
      while (cend + 1 < n && land[r][cend + 1] === FARM) cend++;
      groups.push([r, c, rend, cend]);
    }
  }

  return groups;
};
