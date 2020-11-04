// https://leetcode.com/problems/search-insert-position/
// tags - array, binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // nums - sorted, distinct - binary search it
    if (target < nums[0]) {
        return 0;
    } else if (target > nums[nums.length-1]) {
        return nums.length;
    }
    
    let low = 0;
    let high = nums.length - 1;
    let insert = 0;
    while (low <= high) {
        const mid = Math.floor((low+high)/2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid-1;
            insert = mid;
        } else {
            low = mid+1;
        }
    }
    
    return insert;
    
};