// https://leetcode.com/problems/arithmetic-slices/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;

  const diffs = new Array(nums.length - 1);
  for (let i = 0; i < diffs.length; i++) {
    diffs[i] = nums[i + 1] - nums[i];
  }

  let numSubarrays = 0;
  for (let i = 0, count = 0; i < diffs.length; i++) {
    count++;
    if (i === diffs.length - 1 || diffs[i + 1] !== diffs[i]) {
      numSubarrays += (count * (count - 1)) / 2; // nC2 = n!/2!(n-2!) = n(n-1)/2
      count = 0;
    }
  }
  return numSubarrays;
};
