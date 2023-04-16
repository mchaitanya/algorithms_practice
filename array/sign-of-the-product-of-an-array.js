// https://leetcode.com/problems/sign-of-the-product-of-an-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let numNegative = 0;
  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) numNegative++;
  }
  return numNegative % 2 === 0 ? 1 : -1;
};
