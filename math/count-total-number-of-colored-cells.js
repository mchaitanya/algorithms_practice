// https://leetcode.com/problems/count-total-number-of-colored-cells/
// tags - math
/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  // Each time we add 4 * #cells on the boundary - 4 corners that get double-counted
  // n = 1, 1
  // n = 2, 1 + 4*2-4
  // n = 3, 1 + 4*2-4 + 4*3-4
  // Formula = 1 + 4*(1 + 2 + ... +  n-1) = 1 + 2*n*(n-1)
  return 1 + 2 * n * (n - 1);
};
