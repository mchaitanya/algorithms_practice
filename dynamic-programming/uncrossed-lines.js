// https://leetcode.com/problems/uncrossed-lines/
// tags - dynamic-programming
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  // Same as the longest common subsequence problem.
  const memo = new Array(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    memo[i] = new Array(nums2.length).fill(null);
  }

  function lcs(i, j) {
    if (i === nums1.length || j === nums2.length) return 0;
    if (memo[i][j] == null) {
      memo[i][j] =
        nums1[i] === nums2[j]
          ? 1 + lcs(i + 1, j + 1)
          : Math.max(lcs(i + 1, j), lcs(i, j + 1));
    }
    return memo[i][j];
  }

  return lcs(0, 0);
};
