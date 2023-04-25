// https://leetcode.com/problems/number-of-zero-filled-subarrays/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let numSubarrays = 0;
  for (let i = 0, count = 0; i < nums.length; i++) {
    if (nums[i] === 0) count++;
    if (i === nums.length - 1 || nums[i + 1] !== 0) {
      numSubarrays += (count * (count + 1)) / 2; // n + n-1 + ... + 1 = n*(n+1)/2
      count = 0;
    }
  }
  return numSubarrays;
};
