// https://leetcode.com/problems/sort-colors/
// tags - array
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let numZeros = 0, numOnes = 0;
    for (let n of nums) {
        if (n === 0) {
            numZeros++;
        } else if (n === 1) {
            numOnes++;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i < numZeros) {
            nums[i] = 0;
        } else if (i < numZeros + numOnes) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
    
};