// https://leetcode.com/problems/minimum-size-subarray-sum/
// tags - array, sliding-window
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLen = 0;
  let subArraySum = 0; // Invariant: subArraySum < target
  let start = 0,
    end = 0;
  while (start < nums.length && end < nums.length) {
    if (subArraySum + nums[end] < target) {
      subArraySum += nums[end];
      end++;
    } else {
      const len = end - start + 1;
      if (minLen === 0) {
        minLen = len;
      } else if (len < minLen) {
        minLen = len;
      }
      subArraySum -= nums[start];
      start++;
    }
  }
  return minLen;
};
