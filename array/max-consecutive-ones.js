// https://leetcode.com/problems/max-consecutive-ones/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  for (let i = 0, count = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (i === nums.length - 1 || nums[i + 1] === 0) {
        maxCount = Math.max(maxCount, count);
        count = 0;
      }
    }
  }
  return maxCount;
};
