// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
// tags - array, sliding-window
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // Sliding window - max - min <= limit
  let maxLen = 0;
  for (
    let max = -Infinity, min = Infinity, left = 0, right = 0;
    right < nums.length;
    right++
  ) {
    // Add nums[right] into the window.
    if (nums[right] > max) max = nums[right];
    if (nums[right] < min) min = nums[right];

    while (left <= right && max - min > limit) {
      if (nums[left] === max || nums[left] === min) {
        // Recompute the max & min.
        (max = -Infinity), (min = Infinity);
        for (let i = left + 1; i <= right; i++) {
          if (nums[i] > max) max = nums[i];
          if (nums[i] < min) min = nums[i];
        }
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
