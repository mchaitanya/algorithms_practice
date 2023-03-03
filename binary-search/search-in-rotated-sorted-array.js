// https://leetcode.com/problems/search-in-rotated-sorted-array/
// tags - array, binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // // guaranteed to be rotated around a pivot
    // // idea: if we find the pivot - we can binary search the 2 parts separately  
    // function _findPivot() {
    //     let low = 0, high = nums.length-1;
    //     while (low <= high) {
    //         const mid = Math.floor((low+high)/2);
    //         if (mid === 0 || nums[mid] < nums[mid-1]) {
    //             return mid;
    //         } else if (nums[0] < nums[mid]) {
    //             low = mid + 1;
    //         } else {
    //             high = mid - 1;
    //         }
    //     }
    // }
    
    // function _binarySearch(low, high) {
    //     while (low <= high) {
    //         const mid = Math.floor((low+high)/2);
    //         if (nums[mid] === target) {
    //             return mid;
    //         } else if (nums[mid] > target) {
    //             high = mid - 1;
    //         } else {
    //             low = mid + 1;
    //         }
    //     }
    //     return -1;
    // }
    
    // // first find the pivot
    // const pivot = _findPivot();
    // console.log(pivot);
    // // search left part first
    // const maybeIdx = _binarySearch(0, pivot-1);
    // if (maybeIdx !== -1) {
    //     return maybeIdx;
    // } else {
    //     return _binarySearch(pivot, nums.length-1);
    // }

    // from the solution on LeetCode - one-pass binary search
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        // console.log(low, high);
        const mid = Math.floor((low+high)/2);
        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[mid] >= nums[0]) { // 0...mid is in sorted order
            if (nums[0] <= target && target < nums[mid]) {
                high = mid-1;
            } else {
                low = mid+1;
            }
        } else { // mid ... nums.length-1 is in sorted order
            if (nums[mid] < target && target <= nums[nums.length-1]) {
                low = mid+1;
            } else {
                high = mid-1;
            }
        }
    }
    
};