// https://leetcode.com/problems/sliding-window-maximum/
// tags - array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const windowMaxs = Array(nums.length - k + 1);
    let lastMaxIdx = -1;
    for (let i = 0, j = k; j <= nums.length; i++, j++) {
        // if the last maximum found is still part of the window after the shift
        // we can just compare it with the new number added into the window
        if (i <= lastMaxIdx) {
            if (nums[j-1] < nums[lastMaxIdx]) {
                windowMaxs[i] = nums[lastMaxIdx];
            } else {
                windowMaxs[i] = nums[j-1];
                lastMaxIdx = j-1;
            }
        } else {
            lastMaxIdx = i;
            windowMaxs[i] = nums[i];
            for (let k = i+1; k < j; k++){
                if (nums[k] > windowMaxs[i]) {
                    windowMaxs[i] = nums[k];
                    lastMaxIdx = k;
                }
            }
        }
    }
    
    return windowMaxs;

    // // brute force - time limit exceeded
    // const maxs = Array(nums.length - k + 1);
    // for (let i = 0, j = k; j <= nums.length; i++, j++) {
    //     maxs[i] = Math.max(...nums.slice(i,j));
    // }
    // return maxs;
};