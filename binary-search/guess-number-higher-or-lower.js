// https://leetcode.com/problems/guess-number-higher-or-lower/
// tags - binary-search
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const result = guess(mid);
    if (result === 0) {
      return mid;
    } else if (result === 1) {
      // Guess is lower than pick.
      left = mid + 1;
    } else {
      // Guess is higher than pick.
      right = mid - 1;
    }
  }
  // Shouldn't reach here. 1 <= pick <= n.
  return -1;
};
