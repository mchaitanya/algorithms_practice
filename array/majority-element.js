// https://leetcode.com/problems/majority-element/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Boyer-Moore from LC
  let candidate;
  for (let i = 0, count = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;

  // const threshold = Math.floor(nums.length/2);
  // const map = new Map();
  // for (const n of nums) {
  //     const count = (map.get(n) || 0) + 1;
  //     if (count > threshold) return n;
  //     map.set(n, count);
  // }
  // // Shouldn't reach here. Guaranteed that a majority element exists.
};
