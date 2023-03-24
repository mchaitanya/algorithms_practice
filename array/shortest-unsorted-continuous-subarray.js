// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left = nums.length;
  const stack1 = []; // Numbers in the stack should be increasing from L-R.
  for (let i = 0; i < nums.length; i++) {
    while (stack1.length > 0 && nums[i] < nums[stack1[stack1.length - 1]]) {
      left = Math.min(left, stack1.pop());
    }
    stack1.push(i);
  }

  let right = 0;
  const stack2 = []; // Numbers in the stack should be decreasing from L-R.
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack2.length > 0 && nums[i] > nums[stack2[stack2.length - 1]]) {
      right = Math.max(right, stack2.pop());
    }
    stack2.push(i);
  }

  return left < right ? right - left + 1 : 0;

  // // sort nums, then run a pointer from each end
  // const copy = [ ...nums ];
  // copy.sort((n1, n2) => n1 - n2);

  // let start = undefined;
  // for (let i = 0; i < nums.length; i++) {
  //     if (copy[i] !== nums[i]) {
  //         start = i;
  //         break;
  //     }
  // }

  // // nums has the same order as copy
  // if (start === undefined) {
  //     return 0;
  // }

  // let end = nums.length - 1;
  // for (let i = nums.length-1; i >= 0; i--) {
  //     if (copy[i] !== nums[i]) {
  //         end = i;
  //         break;
  //     }
  // }

  // return end - start + 1;
};
