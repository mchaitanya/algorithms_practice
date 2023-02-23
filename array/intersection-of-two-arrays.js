// https://leetcode.com/problems/intersection-of-two-arrays/
// tags - set, array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // Sort both the arrays.
  nums1.sort((n1, n2) => n1 - n2);
  nums2.sort((n1, n2) => n1 - n2);
  const result = [];
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    const num1 = nums1[i],
      num2 = nums2[j];
    if (num1 === num2) result.push(num1);
    if (num1 <= num2) {
      // Advance i in nums1 to the next distinct number.
      while (i + 1 < nums1.length && nums1[i + 1] === nums1[i]) i++;
      i++;
    }
    if (num1 >= num2) {
      // Advance j in nums2 to the next distinct number.
      while (j + 1 < nums2.length && nums2[j + 1] === nums2[j]) j++;
      j++;
    }
  }
  return result;

  // const set = new Set(nums1);
  // const result = [];
  // for (const n of nums2) {
  //     if (set.has(n)) {
  //         result.push(n);
  //         // Remove the number from the set so we don't add it again.
  //         set.delete(n);
  //     }
  // }
  // return result;
};
