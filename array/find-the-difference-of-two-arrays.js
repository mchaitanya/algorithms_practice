// https://leetcode.com/problems/find-the-difference-of-two-arrays/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);
  const result1 = [];
  for (const num of nums1) {
    if (!nums2.has(num)) result1.push(num);
  }

  const result2 = [];
  for (const num of nums2) {
    if (!nums1.has(num)) result2.push(num);
  }
  return [result1, result2];
};
