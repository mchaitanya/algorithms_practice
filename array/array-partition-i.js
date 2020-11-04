// https://leetcode.com/problems/array-partition-i/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // sort the array
    nums.sort((n1, n2) => n1-n2);
    // sum the nums at odd indices
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    
    return sum;
    
};