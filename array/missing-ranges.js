// https://leetcode.com/problems/missing-ranges/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  const result = [];
  for (let i = 0, prev = lower - 1, curr; i <= nums.length; i++, prev = curr) {
    curr = i < nums.length ? nums[i] : upper + 1;
    if (curr > prev + 2) {
      result.push(`${prev + 1}->${curr - 1}`);
    } else if (curr > prev + 1) {
      result.push(String(prev + 1));
    }
    // Otherwise the numbers are consecutive.
  }

  // // Preprocess the array.
  // nums.unshift(lower-1);
  // nums.push(upper+1);
  // for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] > nums[i-1] + 2) {
  //         result.push(`${nums[i-1]+1}->${nums[i]-1}`);
  //     } else if (nums[i] > nums[i-1] + 1) {
  //         result.push(String(nums[i-1]+1));
  //     }
  //     // Otherwise the numbers are consecutive.
  // }

  return result;
};
