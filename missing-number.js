// https://leetcode.com/problems/missing-number/
// tags - number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // sum of all numbers from 0 ... n = n(n+1)/2
    const n = nums.length;
    const totalSum = (n*(n+1))/2;
    const numsSum = nums.reduce((sum, num) => sum + num, 0);
    
    return totalSum - numsSum;
    
};