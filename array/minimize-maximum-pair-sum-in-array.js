// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  // Sort the numbers.
  nums.sort((n1, n2) => n1 - n2);

  // Pair the max with the min, the second max with the second min & so on.
  let max = 0; // Given nums[i] >= 1.
  for (let left = 0, right = nums.length - 1; left < right; left++, right--) {
    max = Math.max(max, nums[left] + nums[right]);
  }
  return max;
};
