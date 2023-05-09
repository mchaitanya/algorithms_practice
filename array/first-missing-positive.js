// https://leetcode.com/problems/first-missing-positive/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let count = 0;
  for (const num of nums) {
    if (num > 0) count++;
  }
  if (count === 0) return 1;

  // Move all non-positives to the back.
  for (let left = 0, right = nums.length - 1; left < right; left++) {
    if (nums[left] > 0) continue;
    while (left < right && nums[right] <= 0) right--;
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  // The subarray nums.slice(0, count) contains all the positives.

  for (let i = 0; i < count; i++) {
    const num = Math.abs(nums[i]);
    if (num - 1 < count && nums[num - 1] > 0) nums[num - 1] *= -1;
  }

  for (let i = 0; i < count; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return count + 1;
};
