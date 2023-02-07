// https://leetcode.com/problems/rotate-array/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // LC approach 4 - Using reverse
  function reverse(arr, start, end) {
    // Both start & end are inclusive.
    for (; start < end; start++, end--) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }

  k %= nums.length;
  // Reverse the array.
  reverse(nums, 0, nums.length - 1);
  // Reverse the first k elements.
  reverse(nums, 0, k - 1);
  // Reverse the last n-k elements.
  reverse(nums, k, nums.length - 1);

  // const numSteps = k % nums.length;
  // const temp = nums.slice(0, numSteps);
  // for (let i = numSteps; i < nums.length; i++) {
  //     temp.push(nums[i]);
  //     nums[i] = temp.shift();
  // }
  // for (let i = 0; i < temp.length; i++) {
  //     nums[i] = temp[i];
  // }

  // // Simulate the steps.
  // const numSteps = k % nums.length;
  // for (let step = 1; step <= numSteps; step++) {
  //     let prev = nums[0];
  //     for (let i = 1; i < nums.length; i++) {
  //         const curr = nums[i];
  //         nums[i] = prev;
  //         prev = curr;
  //     }
  //     nums[0] = prev;
  // }

  // const rotated = new Array(nums.length);
  // // Calculate where each num will end up.
  // for (let i = 0; i < nums.length; i++) {
  //     rotated[(i + k) % nums.length] = nums[i];
  // }
  // for (let i = 0; i < nums.length; i++) {
  //     nums[i] = rotated[i];
  // }
};
