// https://leetcode.com/problems/valid-palindrome-iii/
// tags - dynamic-programming, string
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function (s, k) {
  // const memo = new Array(s.length);
  // for (let left = 0; left < s.length; left++) {
  //     memo[left] = new Array(s.length);
  //     for (let right = 0; right < s.length; right++) {
  //         memo[left][right] = new Array(k+1).fill(null);
  //     }
  // }
  const memo = new Map();

  // State
  // - left - The index from the left we're currently at
  // - right - The index from the right
  // - deletes - Number of deletes that can still be performed
  function dp(left, right, deletes) {
    if (left >= right) return true;
    const key = left + "|" + right + "|" + deletes;
    if (memo.has(key)) return memo.get(key);

    let result;
    if (s[left] === s[right]) {
      result = dp(left + 1, right - 1, deletes);
    } else if (deletes > 0) {
      result =
        dp(left + 1, right, deletes - 1) || dp(left, right - 1, deletes - 1);
    } else {
      result = false;
    }

    memo.set(key, result);
    return result;
  }

  return dp(0, s.length - 1, k);
};
