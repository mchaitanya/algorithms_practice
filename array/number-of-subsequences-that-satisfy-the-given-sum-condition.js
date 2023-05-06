// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
// tags - array, subsequence
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  const MOD = 10 ** 9 + 7;
  // Sort nums & iterate with 2 pointers, one from the start & one from the end.
  nums.sort((n1, n2) => n1 - n2);

  // Precompute powers of 2.
  const power = new Array(nums.length);
  power[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    power[i] = (power[i - 1] * 2) % MOD;
  }

  let result = 0;
  for (let left = 0, right = nums.length - 1; left <= right; ) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else {
      // Count all subsequences that contain nums[left].
      // Every number from index left+1 to right can either be included/excluded.
      result += power[right - left];
      result %= MOD;
      left++;
    }
  }
  return result;
};
