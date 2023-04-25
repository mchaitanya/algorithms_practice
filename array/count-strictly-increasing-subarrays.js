// https://leetcode.com/problems/count-strictly-increasing-subarrays/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let numSubarrays = 0;
  for (let left = 0, right = 0; right < nums.length; right++) {
    // Each pass through the loop, we add the subarrays ending on right that are strictly increasing.
    if (right === 0 || nums[right - 1] >= nums[right]) {
      left = right;
    }
    numSubarrays += right - left + 1;
  }
  return numSubarrays;
};
