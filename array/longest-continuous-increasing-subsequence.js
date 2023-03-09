// https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let maxLen = 0;
  for (let i = 0, len = 0; i < nums.length; i++) {
    len++;
    if (i === nums.length - 1 || nums[i] >= nums[i + 1]) {
      maxLen = Math.max(maxLen, len);
      len = 0;
    }
  }
  return maxLen;
};
