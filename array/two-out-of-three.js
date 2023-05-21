// https://leetcode.com/problems/two-out-of-three/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  function intersect(set1, set2, result) {
    for (const num of set1) {
      if (set2.has(num)) result.add(num);
    }
  }

  const result = new Set();
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);
  nums3 = new Set(nums3);

  intersect(nums1, nums2, result);
  intersect(nums1, nums3, result);
  intersect(nums2, nums3, result);

  return Array.from(result);
};
