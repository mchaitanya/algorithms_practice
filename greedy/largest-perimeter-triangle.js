// https://leetcode.com/problems/largest-perimeter-triangle/
// tags - greedy
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  // Sort the numbers.
  nums.sort((n1, n2) => n1 - n2);

  for (let i = nums.length - 1; i >= 2; i--) {
    // If nums[i-1] + nums[i-2] <= nums[i], no other pair can sum to a value larger than nums[i].
    // nums[i] cannot be the side of any valid triangle.
    if (nums[i - 1] + nums[i - 2] > nums[i]) {
      return nums[i] + nums[i - 1] + nums[i - 2];
    }
  }
  return 0;

  // // Return the index of the largest number smaller than val.
  // function binarySearch(left, val) {
  //     let right = nums.length-1;
  //     while (left <= right) {
  //         const mid = left + Math.floor((right-left)/2);
  //         if (nums[mid] >= val) {
  //             right = mid-1;
  //         } else {
  //             left = mid+1;
  //         }
  //     }
  //     return left-1;
  // }

  // let max = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i+1; j < nums.length; j++) {
  //         const sum = nums[i] + nums[j];
  //         if (j+1 < nums.length && nums[j+1] < sum) {
  //             const k = binarySearch(j+1, sum);
  //             max = Math.max(max, sum + nums[k]);
  //         }
  //     }
  // }
  // return max;
};
