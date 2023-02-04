// https://leetcode.com/problems/3sum/
// tags - array, two-pointer
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const triplets = [];
  // LC Approach 1 - Sort, then use 2 pointers.
  nums.sort((n1, n2) => n1 - n2);
  function twoSum(num, left, right) {
    while (left < right) {
      const sum = num + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        // Increment left & decrement right at the same time for the next pair.
        triplets.push([num, nums[left++], nums[right--]]);
        // Skip to the next num not equal to nums[left].
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    // Call twoSum on the first occurrence of a number.
    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSum(nums[i], i + 1, nums.length - 1);
    }
  }
  return triplets;
};
