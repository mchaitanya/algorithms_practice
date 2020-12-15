// https://leetcode.com/problems/squares-of-a-sorted-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = nums.map(n => n*n);
    result.sort((n1, n2) => n1-n2);
    return result;
};
