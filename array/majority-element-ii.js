// https://leetcode.com/problems/majority-element-ii/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  // Boyer-Moore from LC
  let candidate1, candidate2;
  for (let i = 0, count1 = 0, count2 = 0; i < nums.length; i++) {
    if (nums[i] !== candidate1 && nums[i] !== candidate2) {
      if (count1 === 0) {
        candidate1 = nums[i];
        count1 = 1;
      } else if (count2 === 0) {
        candidate2 = nums[i];
        count2 = 1;
      } else {
        count1--;
        count2--;
      }
    } else {
      if (nums[i] === candidate1) count1++;
      if (nums[i] === candidate2) count2++;
    }
  }

  const result = [];
  const threshold = Math.floor(nums.length / 3) + 1;
  for (let i = 0, count1 = 0, count2 = 0; i < nums.length; i++) {
    // Check candidate1.
    if (nums[i] === candidate1) {
      count1++;
      if (count1 === threshold) result.push(candidate1);
    }
    // Check candidate2.
    if (nums[i] === candidate2) {
      count2++;
      if (count2 === threshold) result.push(candidate2);
    }
  }
  return result;

  // const threshold = Math.floor(nums.length/3);
  // const map = new Map();
  // const result = [];
  // for (const num of nums) {
  //     const count = map.get(num) || 0;
  //     map.set(num, count+1);
  //     if (count === threshold) {
  //         result.push(num);
  //     }
  // }
  // return result;
};
