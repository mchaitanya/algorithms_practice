// https://leetcode.com/problems/max-consecutive-ones-iii/
// tags - array, sliding-window
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // Find the longest subarray with at most k 0s.
  // Maintain window zero count <= k.
  let maxLen = 0;
  for (let numZeros = 0, left = 0, right = 0; right < nums.length; right++) {
    if (nums[right] === 0) numZeros++;
    while (left <= right && numZeros > k) {
      if (nums[left] === 0) numZeros--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
