// https://leetcode.com/problems/left-and-right-sum-differences/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  // Calculate prefix sums. nums[i] = sum of all numbers upto & including i.
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  const result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    const leftSum = i > 0 ? nums[i - 1] : 0;
    const rightSum = nums[nums.length - 1] - nums[i];
    result[i] = Math.abs(leftSum - rightSum);
  }
  return result;
};
