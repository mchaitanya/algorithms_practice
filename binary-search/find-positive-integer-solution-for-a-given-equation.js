// https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/
// tags - binary-search
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  const result = [];
  // Fix x & binary search y.
  xscan: for (let x = 1; x <= 1000; x++) {
    if (customfunction.f(x, 1) > z) break;
    if (customfunction.f(x, 1000) < z) continue;
    let left = 1,
      right = 1000;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const fval = customfunction.f(x, mid);
      if (fval === z) {
        result.push([x, mid]);
        continue xscan;
      } else if (fval > z) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return result;
};
