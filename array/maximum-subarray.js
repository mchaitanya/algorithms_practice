// https://leetcode.com/problems/maximum-subarray
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]; // nums.length >= 1
    // Kadane's algorithm
    // we can modify the array itself to keep track of the current local maximum
    for (let i = 1; i < nums.length; i++) {
        // once you write it like this you see it reduces to nums[i-1] > 0
        if (nums[i-1] + nums[i] > nums[i]) {
            nums[i] += nums[i-1];
        }
        maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;

    // // check all subarrays
    // const sumsFromLeft = Array(nums.length + 1);
    // sumsFromLeft[0] = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sumsFromLeft[i+1] = sumsFromLeft[i] + nums[i];
    // }
    
    // let maxSum = nums[0];
    // for (let i = 0; i < sumsFromLeft.length; i++) {
    //     for (let j = i+1; j < sumsFromLeft.length; j++) {
    //         if (sumsFromLeft[j] - sumsFromLeft[i] > maxSum) {
    //             maxSum = sumsFromLeft[j] - sumsFromLeft[i];
    //         }
    //     }
    // }
    // return maxSum;
    
};