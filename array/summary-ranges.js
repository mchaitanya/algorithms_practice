// https://leetcode.com/problems/summary-ranges/
// tags - array
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  for (let i = 0, start = 0; i < nums.length; i++) {
    if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
      if (start < i) {
        result.push(`${nums[start]}->${nums[i]}`);
      } else {
        result.push(String(nums[i]));
      }
      start = i + 1;
    }
  }
  return result;
};
