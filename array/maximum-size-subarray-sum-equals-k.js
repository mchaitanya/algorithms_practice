// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/
// tags - array, prefix-sum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let maxLen = 0;
  // Store the first index at which each prefix sum occurs.
  const map = new Map();
  let prefixSum = 0;
  for (let j = 0; j < nums.length; j++) {
    prefixSum += nums[j];
    if (prefixSum === k) {
      // Subarray is the entire array seen up to this point.
      maxLen = j + 1;
    } else if (map.has(prefixSum - k)) {
      // Subarray starts somewhere after index 0.
      maxLen = Math.max(maxLen, j - map.get(prefixSum - k));
    }
    if (!map.has(prefixSum)) {
      map.set(prefixSum, j);
    }
  }
  return maxLen;
};
