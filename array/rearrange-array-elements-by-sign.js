// https://leetcode.com/problems/rearrange-array-elements-by-sign/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const result = new Array(nums.length);
  for (let i = 0, j = 0, k = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[j] = nums[i];
      j += 2;
    } else {
      result[k] = nums[i];
      k += 2;
    }
  }
  return result;
};
