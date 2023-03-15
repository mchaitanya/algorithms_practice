// https://leetcode.com/problems/third-maximum-number/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max = -Infinity,
    second = -Infinity,
    third = -Infinity;
  for (const n of nums) {
    if (n > max) {
      third = second;
      second = max;
      max = n;
    } else if (n !== max && n > second) {
      third = second;
      second = n;
    } else if (n !== max && n !== second && n > third) {
      third = n;
    }
  }
  return third === -Infinity ? max : third;
};
