// https://leetcode.com/problems/valid-perfect-square
// tags - math
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1,
    right = num;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const squared = mid * mid;
    if (squared === num) {
      return true;
    } else if (squared > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
