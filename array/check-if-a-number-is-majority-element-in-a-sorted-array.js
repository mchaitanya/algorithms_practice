// https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  const threshold = nums.length / 2;
  for (let i = 0, count = 0; i < nums.length && nums[i] <= target; i++) {
    count++;
    if (i === nums.length - 1 || nums[i + 1] !== nums[i]) {
      if (count > threshold && nums[i] === target) return true;
      count = 0;
    }
  }
  return false;
};
