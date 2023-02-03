// https://leetcode.com/problems/two-sum-less-than-k/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  if (nums.length < 2) return -1;
  // Sort the numbers.
  nums.sort((n1, n2) => n1 - n2);

  let maxSum;
  for (let i = 0, j = nums.length - 1; i < j; ) {
    const sum = nums[i] + nums[j];
    if (sum < k) {
      maxSum = Math.max(maxSum || -Infinity, sum);
      i++;
    } else {
      j--;
    }
  }
  return maxSum || -1;
};
