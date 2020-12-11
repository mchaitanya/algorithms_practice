// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // maintain 2 pointers
    // we start from the second number; that's why `i`, j` and `count` start at 1
    let i = 1; // next index to insert at
    for (let j = 1, count = 1; j < nums.length; j++) {
        count = (nums[j] === nums[j-1] ? count+1 : 1);
        if (count <= 2) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
    
};
