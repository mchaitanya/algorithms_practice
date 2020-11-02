// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // sort nums, then run a pointer from each end
    const copy = [ ...nums ];
    copy.sort((n1, n2) => n1 - n2);
    
    let start = undefined;
    for (let i = 0; i < nums.length; i++) {
        if (copy[i] !== nums[i]) {
            start = i;
            break;
        }
    }
    
    // nums has the same order as copy
    if (start === undefined) {
        return 0;
    }
    
    let end = nums.length - 1;
    for (let i = nums.length-1; i >= 0; i--) {
        if (copy[i] !== nums[i]) {
            end = i;
            break;
        }
    }
    
    return end - start + 1;
    
};