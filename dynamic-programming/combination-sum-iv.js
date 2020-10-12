// https://leetcode.com/problems/combination-sum-iv/
// tags - dynamic-programming, recursion
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const memo = {};
    // count recursively
    (function _countCombinations(target) {
        if (memo[target] !== undefined) {
            return memo[target];
        }
        
        let count = 0;
        for (let num of nums) {
            let subcount = 0;
            if (target === num) {
                subcount = 1;
            } else if (target > num) {
                subcount = _countCombinations(target - num);
            }
            count += subcount;
        }
        
        memo[target] = count;
        return count;
    })(target);
    
    return memo[target];
    
};