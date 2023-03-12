// https://leetcode.com/problems/find-in-mountain-array/
// tags - binary-search
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  // Apply binary search.
  // First find the peak. Then search the left slope & then the right slope.
  function searchPeak(left, right) {
    while (left <= right) {
      const index = left + Math.floor((right - left) / 2);
      const mid = mountainArr.get(index);
      const prev = mountainArr.get(index - 1);
      const next = mountainArr.get(index + 1);
      if (prev < mid && mid > next) {
        return index;
      } else if (mid < next) {
        left = index + 1; // The peak is to the right of mid.
      } else {
        right = index - 1; // The peak is to the left of mid.
      }
    }
  }

  function searchTarget(left, right, isAscending) {
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const val = mountainArr.get(mid);
      if (val === target) {
        return mid;
      } else if (val > target) {
        if (isAscending) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (isAscending) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }

  const len = mountainArr.length();
  const peak = searchPeak(1, len - 2);
  const maybeIndex = searchTarget(0, peak, true);
  if (maybeIndex === -1) {
    return searchTarget(peak + 1, len - 1, false);
  } else {
    return maybeIndex;
  }
};
