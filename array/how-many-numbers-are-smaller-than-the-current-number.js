// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const MAX_NUM = 100;
  const count = new Array(MAX_NUM + 1).fill(0);
  for (let n of nums) {
    count[n]++;
  }

  // After this loop, count[i] = how many numbers <= i
  for (let i = 1; i <= MAX_NUM; i++) {
    count[i] += count[i - 1];
  }

  const result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i] > 0 ? count[nums[i] - 1] : 0;
  }
  return result;
};
