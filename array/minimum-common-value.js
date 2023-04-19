// https://leetcode.com/problems/minimum-common-value/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return -1;
};
