// https://leetcode.com/problems/first-bad-version/
// tags - binary-search
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // Apply binary search.
    let left = 1,
      right = n;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid - 1; // Search the left half.
      } else {
        left = mid + 1; // Search the right half.
      }
    }
    return right + 1; // right = mid-1 from the last time we detected mid to be bad.
  };
};
