// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
// tags - array, subsequence
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  // Map each num to its index & sort in descending order.
  nums = nums.map((num, i) => [num, i]).sort((e1, e2) => e2[0] - e1[0]);
  // Extract the first k numbers & sort them back by their index.
  return nums
    .slice(0, k)
    .sort((e1, e2) => e1[1] - e2[1])
    .map((e) => e[0]);
};
