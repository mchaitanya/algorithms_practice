// https://leetcode.com/problems/distinct-numbers-in-each-subarray/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function (nums, k) {
  const n = nums.length;
  const result = new Array(n - k + 1);
  for (let right = 0, map = new Map(); right < n; right++) {
    // Add the number at right.
    const countR = map.get(nums[right]) || 0;
    map.set(nums[right], countR + 1);
    if (right >= k - 1) {
      const left = right - k + 1;
      result[left] = map.size;
      // Remove the number at left.
      const countL = map.get(nums[left]);
      if (countL > 1) {
        map.set(nums[left], countL - 1);
      } else {
        map.delete(nums[left]);
      }
    }
  }
  return result;
};
