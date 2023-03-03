// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// tags - binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  // Apply binary search to find the boundary between the 2 sorted sequences.
  function searchBoundary(low, high) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return mid;
    } else {
      const left = searchBoundary(low, mid - 1);
      return left === -1 ? searchBoundary(mid + 1, high) : left;
    }
  }

  // Apply binary search to see if the sequence contains target.
  function searchTarget(low, high) {
    if (low > high) return false;
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] > target) {
      return searchTarget(low, mid - 1);
    } else {
      return searchTarget(mid + 1, high);
    }
  }

  const i = searchBoundary(0, nums.length - 1);
  return searchTarget(0, i) || searchTarget(i + 1, nums.length - 1);
};
