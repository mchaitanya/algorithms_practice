// https://leetcode.com/problems/sqrtx/
// tags - math, binary-search
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // Binary search the space 0 ... x
  let left = 0,
    right = x;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;
    if (square === x) {
      return mid;
    } else if (square > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;

  // // binary search the range 1 to x
  // let low = 1;
  // let high = x;
  // while (low <= high) {
  //     let middle = Math.floor((low + high)/2);
  //     let middleSquared = middle * middle;
  //     if (middleSquared <= x && ((middle+1)*(middle+1) > x)) {
  //         return middle;
  //     } else if (middleSquared < x) {
  //         low = middle + 1;
  //     } else {
  //         high = middle - 1;
  //     }
  // }

  // return 0;
};
