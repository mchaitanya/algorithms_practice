// https://leetcode.com/problems/remove-element/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0; // index for scanning
    let j = 0; // index for inserting
    for (; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    return j;
    
};