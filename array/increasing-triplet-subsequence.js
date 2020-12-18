// https://leetcode.com/problems/increasing-triplet-subsequence/
// tags - array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) {
        return false;
    }
    
    // brute force - O(n^3)
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i+1; j < nums.length-1; j++) {
            if (nums[i] >= nums[j]) continue;
            for (let k = j+1; k < nums.length; k++) {
                if (nums[j] < nums[k]) {
                    return true;
                }
            }
        }
    }
    return false;
    
    // O(n) solution?
    
};