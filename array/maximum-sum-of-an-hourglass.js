// https://leetcode.com/problems/maximum-sum-of-an-hourglass/
// tags - array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const offsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 0],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // Brute force - O(mn)
  let max = 0;
  for (let r = 1; r < m - 1; r++) {
    for (let c = 1; c < n - 1; c++) {
      let sum = 0;
      for (const [dr, dc] of offsets) {
        sum += grid[r + dr][c + dc];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
};
