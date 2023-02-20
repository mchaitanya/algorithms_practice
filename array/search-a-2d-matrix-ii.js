// https://leetcode.com/problems/search-a-2d-matrix-ii/
// tags - array
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Given both m, n >= 1.
  const m = matrix.length;
  const n = matrix[0].length;

  // function binarySearch(c, rlo, rhi) {
  //     if (rlo > rhi) return rlo;
  //     const r = Math.floor((rlo + rhi) / 2);
  //     if (matrix[r][c] === target) {
  //         return r;
  //     } else if (matrix[r][c] > target) {
  //         return binarySearch(c, rlo, rhi-1);
  //     } else {
  //         return binarySearch(c, rlo+1, rhi);
  //     }
  // }

  // Pass in the top-left & bottom-right row & column indices.
  function search(tlr, tlc, brr, brc) {
    if (tlr > brr || tlc > brc) return false;
    if (target < matrix[tlr][tlc] || target > matrix[brr][brc]) return false;
    // if (tlr === brr && tlc === brc) {
    //     return matrix[tlr][tlc] === target;
    // }
    // // Here tlr < brr && tlc < blc.

    // Choose the middle column as the pivot.
    const mc = Math.floor((tlc + brc) / 2);
    // // Apply binary search along this column for the first row whose element > target.
    // const r = binarySearch(mc, tlr, brr);
    // if (r > brr) {
    //     // Target > all elements. Search the right sub-matrix.
    //     return search(tlr, mc+1, brr, brc);
    // } else if (matrix[r][mc] === target) {
    //     // Target found. Return true.
    //     return true;
    // } else if (r === tlr) {
    //     // Target < all elements. Search the left sub-matrix.
    //     return search(tlr, tlc, brr, mc-1);
    // } else {
    //     // There exists a row whose element > target.
    //     // Search top-right & bottom-left matrices.
    //     return search(tlr, mc+1, r-1, brc) || search(r, tlc, brr, mc-1);
    // }

    // If the target is smaller than all elements in the pivot column, search the left sub-matrix.
    if (target < matrix[tlr][mc]) {
      return search(tlr, tlc, brr, mc - 1);
    }
    for (let r = tlr; r <= brr; r++) {
      if (matrix[r][mc] === target) return true;
      if (matrix[r][mc] > target) {
        // Search the top-right & bottom-left sub-matrices.
        return search(tlr, mc + 1, r - 1, brc) || search(r, tlc, brr, mc - 1);
      }
    }
    // If we reach here, the target must be greater than all elements in the pivot column.
    // Search the right sub-matrix.
    return search(tlr, mc + 1, brr, brc);
  }

  return search(0, 0, m - 1, n - 1);
};
