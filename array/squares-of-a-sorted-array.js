// https://leetcode.com/problems/squares-of-a-sorted-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  nums = nums.map((n) => Math.abs(n));
  const squared = new Array(nums.length);
  for (let i = 0, j = nums.length - 1, k = nums.length - 1; k >= 0; k--) {
    if (nums[i] > nums[j]) {
      squared[k] = nums[i] * nums[i];
      i++;
    } else {
      squared[k] = nums[j] * nums[j];
      j--;
    }
  }
  return squared;

  // const result = nums.map(n => n*n);
  // result.sort((n1, n2) => n1-n2);
  // return result;
};
