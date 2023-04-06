// https://leetcode.com/problems/sum-of-square-numbers/
// tags - math, binary-search
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0,
    right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    const squareSum = left * left + right * right;
    if (squareSum === c) {
      return true;
    } else if (squareSum > c) {
      right--;
    } else {
      left++;
    }
  }
  return false;

  // function isSquare(n) {
  //     let left = 0, right = n;
  //     while (left <= right) {
  //         const mid = left + Math.floor((right-left)/2);
  //         const squared = mid*mid;
  //         if (squared === n) {
  //             return true;
  //         } else if (squared > n) {
  //             right = mid-1;
  //         } else {
  //             left = mid+1;
  //         }
  //     }
  //     return false;
  // }

  // for (let x = 0; x <= Math.sqrt(c); x++) {
  //     if (isSquare(c - x*x)) return true;
  // }
  // return false;
};
