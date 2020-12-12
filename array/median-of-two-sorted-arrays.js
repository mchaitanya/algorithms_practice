// https://leetcode.com/problems/median-of-two-sorted-arrays/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // merge the arrays - O(m+n)
    const merged = Array(nums1.length + nums2.length);
    for (i = 0, j = 0, k = 0; i < nums1.length || j < nums2.length; k++) {
        if (i === nums1.length || (j < nums2.length && nums2[j] <= nums1[i])) {
            merged[k] = nums2[j];
            j++;
        } else if (j === nums2.length || (i < nums1.length && nums1[i] <= nums2[j])) {
            merged[k] = nums1[i];
            i++;
        }
    }
    
    // then calculate the median - O(1)
    let len = merged.length;
    if (len % 2 === 1) {
        return merged[(len-1)/2];
    } else {
        return (merged[len/2] + merged[len/2 - 1]) / 2;
    }
    
};