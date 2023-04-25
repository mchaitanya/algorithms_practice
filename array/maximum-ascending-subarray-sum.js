// https://leetcode.com/problems/maximum-ascending-subarray-sum/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  // Given nums.length >= 1
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = nums[i] > nums[i - 1] ? currentSum + nums[i] : nums[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
