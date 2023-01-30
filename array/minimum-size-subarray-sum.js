// https://leetcode.com/problems/minimum-size-subarray-sum/
// tags - array, sliding-window
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLen;
  let start = 0,
    end = 0;
  // Invariant - Sum of numbers in the window < target i.e. runningSum < target
  let runningSum = 0;
  while (start < nums.length && end < nums.length) {
    // Attempt to add nums[end] into the window.
    const windowAddSize = end - start + 1;
    if (runningSum + nums[end] < target) {
      runningSum += nums[end];
      end++;
    } else {
      minLen = Math.min(minLen || Infinity, windowAddSize);
      runningSum -= nums[start];
      start++;
    }
  }
  return minLen || 0;
};
