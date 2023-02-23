// https://leetcode.com/problems/contains-duplicate-ii/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // Map each number to the most recent index we saw it at.
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }
    // Update the index in case we see the number again in the array.
    map.set(num, i);
  }
  return false;
};
