// https://leetcode.com/problems/subarray-product-less-than-k/
// tags - array, sliding-window
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let numSubarrays = 0;
  // From LC Explore > Crash Course > Arrays & Strings > Sliding Window
  // Maintain window product < k.
  for (
    let windowProduct = 1, left = 0, right = 0;
    right < nums.length;
    right++
  ) {
    windowProduct *= nums[right];
    while (left <= right && windowProduct >= k) {
      windowProduct /= nums[left];
      left++;
    }
    // right-left+1 is the size of the window when we reach the end index 'right'
    // Each of the indices in the window can be the start index of a subarray that satisfies the condition.
    numSubarrays += right - left + 1;
  }
  return numSubarrays;
};
