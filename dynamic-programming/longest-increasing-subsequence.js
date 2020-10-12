// https://leetcode.com/problems/longest-increasing-subsequence/
// tags - dynamic-programming
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    // state_i = length of LIS ending on nums_i
    // when we encounter nums_i+1, iterate backwards over state_0 ... state_i  
    const state = Array(nums.length);
    state[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        stateCandidates = [1]; // the number itself
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                stateCandidates.push(state[j] + 1);
            }
        }
        
        state[i] = Math.max(...stateCandidates);
        
    }
    
    return Math.max(...state);
    
};