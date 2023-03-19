// https://leetcode.com/problems/equal-row-and-column-pairs/
// tags - array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;

  // Convert each row into a string & store how many times each representation occurs.
  const map = new Map();
  for (let r = 0; r < n; r++) {
    const str = grid[r].join("|");
    map.set(str, (map.get(str) || 0) + 1);
  }

  let numEqualPairs = 0;
  for (let c = 0; c < n; c++) {
    let str = "";
    for (let r = 0; r < n - 1; r++) {
      str += grid[r][c] + "|";
    }
    str += grid[n - 1][c];
    numEqualPairs += map.get(str) || 0;
  }
  return numEqualPairs;
};
