// https://leetcode.com/problems/find-the-array-concatenation-value/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let result = 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    result += Number(String(nums[left]) + String(nums[right]));
    left++;
    right--;
  }
  if (left === right) result += nums[left];
  return result;
};
