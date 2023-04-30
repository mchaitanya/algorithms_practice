// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let max = 0; // Given nums[i] >= 1.
  for (const num of nums) {
    if (num > max) max = num;
  }
  return k * max + (k * (k - 1)) / 2;
};
