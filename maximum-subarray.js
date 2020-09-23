// https://leetcode.com/problems/maximum-subarray
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const sumsFromLeft = Array(nums.length + 1);
    sumsFromLeft[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        sumsFromLeft[i+1] = sumsFromLeft[i] + nums[i];
    }
    
    let maxSum = nums[0];
    for (let i = 0; i < sumsFromLeft.length; i++) {
        for (let j = i+1; j < sumsFromLeft.length; j++) {
            if (sumsFromLeft[j] - sumsFromLeft[i] > maxSum) {
                maxSum = sumsFromLeft[j] - sumsFromLeft[i];
            }
        }
    }
    return maxSum;
    
};