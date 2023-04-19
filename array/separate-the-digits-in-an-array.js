// https://leetcode.com/problems/separate-the-digits-in-an-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const digits = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let x = nums[i];
    while (x > 0) {
      digits.push(x % 10);
      x = Math.floor(x / 10);
    }
  }
  return digits.reverse();
};
