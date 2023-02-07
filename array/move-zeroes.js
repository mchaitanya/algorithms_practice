// https://leetcode.com/problems/move-zeroes
// tags - array
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = 0; // Next index to insert into
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }
  // Fill the end of the array with zeros.
  for (let i = k; i < nums.length; i++) {
    nums[i] = 0;
  }
};
