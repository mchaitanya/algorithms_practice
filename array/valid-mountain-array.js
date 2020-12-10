// https://leetcode.com/problems/valid-mountain-array/
// tags - array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3 || arr[1] <= arr[0]) {
        return false;
    }
    
    // `isIncreasing` can start off true because of the 2nd check above
    let isIncreasing = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            isIncreasing = false;
            continue;
        }
        
        if (arr[i] === arr[i-1] || (!isIncreasing && arr[i] > arr[i-1])) {
            return false;
        }
        
    }
    
    // at some point, we should have switched to a decreasing sequence
    return !isIncreasing;
};