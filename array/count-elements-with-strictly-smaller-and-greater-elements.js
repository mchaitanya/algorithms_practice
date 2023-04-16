// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  let min = Infinity,
    max = -Infinity;
  for (const num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  let count = 0;
  for (const num of nums) {
    if (num !== min && num !== max) count++;
  }
  return count;
};
