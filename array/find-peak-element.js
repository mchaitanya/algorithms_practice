// https://leetcode.com/problems/find-peak-element/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // linear scan - O(n)
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 && nums[i] > nums[i+1]) {
            return i;
        } else if (i === nums.length-1 && nums[i] > nums[i-1]) {
            return i
        } else if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
            return i;
        }
    }
    
    return 0; // no peak found - say all elements are equal
        
    // // divide and conquer - O(logn)?
    // // start inclusive, not end
    // function _findPeak(start, end) {
    //     console.log(start, end);
    //     if (end - start <= 1) { // we're looking at a one-element subarray
    //         return -1;
    //     }
        
    //     // check the boundaries
    //     if (start === 0 && start+1 < end && nums[start] > nums[start+1]) {
    //         return start;
    //     } else if (end === nums.length && end-2 >= start && nums[end-1] > nums[end-2]) {
    //         return end-1;
    //     }
        
    //     const mid = Math.floor((start+end)/2);
    //     if (mid-1 >= start && mid+1 < nums.length && nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
    //         return mid;
    //     } else if (mid > start) {
    //         let leftPeak = _findPeak(start, mid);
    //         if (leftPeak !== -1) {
    //             return leftPeak;
    //         } 
    //     } else if (mid+1 < end) {
    //         let rightPeak = _findPeak(mid+1, end);
    //         if (rightPeak !== -1) {
    //             return rightPeak;
    //         }
    //     }
        
    //     return -1;
        
    // }
    
    // let peak = _findPeak(0, nums.length);
    // return peak == -1 ? 0 : peak;
    
};