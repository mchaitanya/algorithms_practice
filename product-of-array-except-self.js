// https://leetcode.com/problems/product-of-array-except-self/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const productsFromLeft = Array(nums.length);
    for (let i = 0, temp = 1; i < nums.length; i++) {
        temp = temp * nums[i];
        productsFromLeft[i] = temp;
    }
    
    const productsFromRight = Array(nums.length);
    for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
        temp = temp * nums[i];
        productsFromRight[i] = temp;
    }
    
    const output = Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        let left = i-1 >= 0 ? productsFromLeft[i-1] : 1;
        let right = i+1 < nums.length ? productsFromRight[i+1] : 1;
        output[i] = left * right;
    }
    return output;
    
};