// https://leetcode.com/problems/wiggle-sort/
// tags - array
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((n1, n2) => n1 - n2);
  // Swap pairs starting from index 1.
  for (let i = 1; i < nums.length - 1; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }

  // const copy = [...nums];
  // copy.sort((n1, n2) => n1-n2);
  // for (let i = 0, left = 0, right = nums.length-1; i < nums.length; i++) {
  //     if (i % 2 === 0) {
  //         nums[i] = copy[left];
  //         left++;
  //     } else {
  //         nums[i] = copy[right];
  //         right--;
  //     }
  // }
};
