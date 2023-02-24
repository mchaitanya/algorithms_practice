// https://leetcode.com/problems/count-servers-that-communicate/
// tags - array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  // Given both m, n >= 1.
  const m = grid.length;
  const n = grid[0].length;
  const SERVER = 1;

  const rowServerCount = new Array(m).fill(0);
  const columnServerCount = new Array(n).fill(0);
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === SERVER) {
        rowServerCount[r]++;
        columnServerCount[c]++;
      }
    }
  }

  let numTotal = 0;
  let numNoNeighbours = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === SERVER) {
        numTotal++;
        if (rowServerCount[r] === 1 && columnServerCount[c] === 1)
          numNoNeighbours++;
      }
    }
  }
  return numTotal - numNoNeighbours;
};
