// https://leetcode.com/problems/find-anagram-mappings/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function (nums1, nums2) {
  // Map each number in nums2 to an array of indexes.
  const map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    if (!map.has(nums2[i])) map.set(nums2[i], []);
    map.get(nums2[i]).push(i);
  }

  const result = new Array(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    result[i] = map.get(nums1[i]).pop();
  }
  return result;
};
