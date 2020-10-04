// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0; // next index to check
    let j = 0; // next index to insert at
    while (i < nums.length) {
        // advance to the index where the next value is different
        while (i+1 < nums.length && nums[i+1] === nums[i]) {
            i++;
        }
        
        nums[j] = nums[i];
        j++;
        i++;
    }
    
    return j;
    
};