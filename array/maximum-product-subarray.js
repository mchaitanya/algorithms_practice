// https://leetcode.com/problems/maximum-product-subarray/
// tags - array, dynamic-programming
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let currentMax = nums[0],
    currentMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let previousMax = currentMax,
      previousMin = currentMin;
    currentMax = Math.max(
      nums[i],
      nums[i] * previousMax,
      nums[i] * previousMin
    );
    currentMin = Math.min(
      nums[i],
      nums[i] * previousMax,
      nums[i] * previousMin
    );
    max = Math.max(max, currentMax);
  }
  return max;

  // let max = -Infinity;
  // for (let i = 0; i < nums.length; i++) {
  //     let current = 1;
  //     for (let j = i; j < nums.length; j++) {
  //         current *= nums[j];
  //         max = Math.max(current, max);
  //     }
  // }
  // return max;
};
