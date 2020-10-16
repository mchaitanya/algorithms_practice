// https://leetcode.com/problems/running-sum-of-1d-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // const sumsFromLeft = Array(nums.length);
    // for (let i = 0; i < nums.length; i++) {
    //     sumsFromLeft[i] = (i-1 >= 0 ? sumsFromLeft[i-1] : 0) + nums[i];
    // }
    // return sumsFromLeft;
    
    // modify the input array
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums;
    
};