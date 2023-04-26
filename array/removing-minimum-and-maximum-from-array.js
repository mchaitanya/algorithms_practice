// https://leetcode.com/problems/removing-minimum-and-maximum-from-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  const n = nums.length;
  if (n === 1) return 1;

  let minIdx, maxIdx;
  let min = Infinity,
    max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIdx = i;
    }
    if (nums[i] > max) {
      max = nums[i];
      maxIdx = i;
    }
  }

  const low = Math.min(minIdx, maxIdx);
  const high = Math.max(minIdx, maxIdx);
  return Math.min(
    high + 1, // Delete numbers from the front
    n - low, // Delete numbers from the back
    low + 1 + n - high // Delete upto low from the front & upto high from the back
  );
};
