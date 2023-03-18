// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
// tags - binary-search
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  const [m, n] = binaryMatrix.dimensions();

  function binarySearch(r, right) {
    let left = 0;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const val = binaryMatrix.get(r, mid);
      if (val === 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right + 1;
  }

  // Binary search each row.
  let leftmost = n;
  for (let r = 0; r < m; r++) {
    // Look up the value at leftmost-1. No point searching if it's 0.
    const last = binaryMatrix.get(r, leftmost - 1);
    if (last === 1) {
      leftmost = Math.min(leftmost, binarySearch(r, leftmost - 1));
      if (leftmost === 0) return 0;
    }
  }
  return leftmost === n ? -1 : leftmost;
};
