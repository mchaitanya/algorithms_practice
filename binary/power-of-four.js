// https://leetcode.com/problems/power-of-four/
// tags - binary
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;

  // if (n <= 0) return false;
  // // Apply bit-wise operations.
  // let count = 0;
  // // If n is a power of 4, it must be represented as 100... in binary.
  // // The number of zeros following the one give us the power of 2.
  // while (n > 1) {
  //     // If the right-most bit is non-zero, then n is not a power of 2.
  //     if (n & 1 !== 0) return false;
  //     count++;
  //     n = n >>> 1; // Zero-fill right shift
  // }
  // // If n is an even power of 2, it will be a power of 4.
  // return count % 2 === 0;

  // while (n > 0) {
  //     if (n % 4 !== 0) break;
  //     n /= 4;
  // }
  // return n === 1;
};
