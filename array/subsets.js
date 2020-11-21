// https://leetcode.com/problems/subsets/
// tags - array, bitmask
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // if there are n numbers, there can be 2**n subsets
    // for each number, decide whether to keep it or not
    const numSubsets = 2**(nums.length);
    const result = Array(numSubsets);
    for (let i = 0; i < numSubsets; i++) {
        let bitmask = i.toString(2).padStart(nums.length, '0'); 
        result[i] = nums.filter((_, i) => bitmask[i] === '1');
    }
    return result;
};