// https://leetcode.com/problems/minimum-size-subarray-sum/
// tags - array, sliding-window
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // Maintain window sum < target
  let minLen = Infinity;
  for (let windowSum = 0, left = 0, right = 0; right < nums.length; right++) {
    windowSum += nums[right];
    while (left <= right && windowSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
    // Invariant will be fixed here
  }
  return minLen === Infinity ? 0 : minLen;
};
