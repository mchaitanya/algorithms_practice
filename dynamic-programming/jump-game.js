// https://leetcode.com/problems/jump-game/
// tags - dynamic-programming
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // solve recursively with memoization
    const memo = Array(nums.length).fill(undefined);
    memo[nums.length - 1] = true; // in this case you're on the last index
    
    (function _canReachEnd(idx) {
        // base case
        if (idx >= nums.length) { // there's a chance you overshoot
            return false;
        }
        
        // check the memo
        if (memo[idx] !== undefined) {
            return memo[idx];
        }
        
        // try every jump length from this point
        for (let jump = 1; jump <= nums[idx]; jump++) {
            if (_canReachEnd(idx + jump)) {
                memo[idx] = true;
                return true;
            }
        }
        
        memo[idx] = false;
        return false;
        
    })(0)
    
    return memo[0];
    
};