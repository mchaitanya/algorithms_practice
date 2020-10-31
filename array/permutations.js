// https://leetcode.com/problems/permutations/
// tags - array, recursion
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) {
        return [[]];
    } else if (nums.length === 1) {
        return [nums];
    } else if (nums.length === 2) {
        return [nums, [nums[1], nums[0]]];
    }
    
    // length at least 3
    let permutations = [];
    for (let num of nums) {
        const rest = nums.filter(n => n !== num);
        for (let sub of permute(rest)) {
            permutations.push([num, ...sub]);
        }
    }
    
    return permutations;
    
};