// https://leetcode.com/problems/maximum-product-of-three-numbers/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const len = nums.length; // at least 3
    // sort the numbers
    nums.sort((n1, n2) => n1 - n2);
    
    let max = nums[len-1] * nums[len-2] * nums[len-3];
    // the first 2 numbers might b2 negative and very large in magnitude
    if (nums[0] < 0 && nums[1] < 0) {
        if (nums[0] * nums[1] * nums[len-1] > max) {
            max = nums[0] * nums[1] * nums[len-1];
        }
    }
    
    return max;
    
};