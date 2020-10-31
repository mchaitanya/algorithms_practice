// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// tags - array, binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //     const result = [-1, -1];
    //     // scan left to right for starting position
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] === target && (i === 0 || nums[i-1] !== target)) {
    //             result[0] = i;
    //         }
    //     }
        
    //     // scan right to left for ending position
    //     for (let i = nums.length - 1; i >= 0; i--) {
    //         if (nums[i] === target && (i === nums.length - 1 || nums[i+1] !== target)) {
    //             result[1] = i;
    //         }
    //     }
        
    //     return result;
        
        // O(logn) - recursive binary search
        const result = [-1, -1];
        function _search(low, high) {
            if (low > high) {
                return;
            }
            
            // console.log(low, high);
            const mid = Math.floor((low + high)/2);
            if (nums[mid] < target) {
                _search(mid+1, high);
            } else if (nums[mid] > target) {
                _search(low, mid-1);
            } else {
                if (mid === 0 || nums[mid-1] !== target) {
                    result[0] = mid;
                    result[1] = (result[1] === -1 ? mid : result[1]);
                    _search(mid+1, high);
                    
                } else if (mid === nums.length - 1 || nums[mid+1] !== target) {
                    result[1] = mid;
                    result[0] = (result[0] === -1 ? mid : result[0]);
                    _search(low, mid-1);
                    
                } else {
                    _search(mid+1, high);
                    _search(low, mid-1);
                    
                }
            }
        }
        
        _search(0, nums.length - 1);
        
        return result;
        
        
    };