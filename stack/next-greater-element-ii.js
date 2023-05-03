// https://leetcode.com/problems/next-greater-element-ii/
// tags - stack
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // Find the maximum & start from the next index.
  // maxIdx will be the last index we process.
  let maxIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIdx]) maxIdx = i;
  }

  const stack = [];
  const result = new Array(nums.length).fill(-1);
  let idx = (maxIdx + 1) % nums.length;
  let count = nums.length;
  while (count > 0) {
    while (stack.length > 0) {
      const topIdx = stack[stack.length - 1];
      if (nums[topIdx] >= nums[idx]) break;
      result[topIdx] = nums[idx];
      stack.pop();
    }
    stack.push(idx);
    idx = (idx + 1) % nums.length;
    count--;
  }
  return result;
};
