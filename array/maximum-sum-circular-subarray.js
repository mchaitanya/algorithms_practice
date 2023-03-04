// https://leetcode.com/problems/maximum-sum-circular-subarray/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let maxSum = -Infinity;
  for (let i = 0, currentSum = 0, count = 0; i < 2 * nums.length - 1; i++) {
    const index = i % nums.length;
    if (count === nums.length) {
      i -= nums.length - 1;
      currentSum = 0;
      count = 0;
      continue;
    } else if (currentSum < 0) {
      currentSum = nums[index];
      count = 1;
    } else {
      currentSum += nums[index];
      count++;
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
