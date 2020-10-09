// https://leetcode.com/problems/house-robber/
// tags - dynamic-programming
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    const state = Array(nums.length + 2);
    state[0] = 0;
    state[1] = 0;
    for (let i = 0, j = 2; i < nums.length; i++, j++) {
        // decide whether to rob house i or not
        // if you rob house i - then your loot will be the sum of value in house i + loot upto house i-2
        // if you don't rob house i - then your loot will be loot upto house i-1
        state[j] = Math.max(state[j-1], state[j-2] + nums[i]);
    }
    
    return state[state.length - 1];
    
};