// https://leetcode.com/problems/merge-sorted-array/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // start filling in from the end
    let i = m-1, j = n-1, k = m+n-1;
    while (i >= 0 || j >= 0) {
        if (j < 0) {
            nums1[k] = nums1[i];
            i--;
        } else if (i < 0) {
            nums1[k] = nums2[j];
            j--
        } else if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        
        k--;
    }
};