// https://leetcode.com/problems/maximum-average-subarray-i/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSum = -Infinity;
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, runningSum);
      runningSum -= nums[i - k + 1];
    }
  }
  return maxSum / k;

  // let maxSum = 0;
  // // Given k <= nums.length
  // for (let i = 0; i < k; i++) {
  //     maxSum += nums[i];
  // }

  // let runningSum = maxSum;
  // for (let i = 1, j = k; j < nums.length; i++, j++) {
  //     runningSum += (nums[j] - nums[i-1]);
  //     if (runningSum > maxSum) {
  //         maxSum = runningSum;
  //     }
  // }

  // return maxSum / k;
};
