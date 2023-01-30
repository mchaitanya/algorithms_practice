// https://leetcode.com/problems/max-consecutive-ones-iii/
// tags - array, sliding-window
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // Can be restated as: Find the longest subarray containing <= k zeros.
  let maxLen = 0;
  let start = 0,
    end = 0;
  // Invariant - Window contains <= k zeros.
  let numZeros = 0;
  while (start < nums.length && end < nums.length) {
    if (nums[end] === 1 || numZeros < k) {
      if (nums[end] === 0) numZeros++;
      maxLen = Math.max(maxLen, end - start + 1);
      end++;
    } else {
      if (nums[start] === 0) numZeros--;
      start++;
    }
  }
  return maxLen;
};
