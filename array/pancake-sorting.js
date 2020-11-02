// https://leetcode.com/problems/pancake-sorting/
// tags - array
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    if (arr.length === 0) {
        return [];
    }
    
    // strategy - recursive
    // get the largest number at the end
    // then pancakeSort the rest
    let maxIdx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i;
        }
    }
    
    _flip(arr, 0, maxIdx); // brings max to the front
    _flip(arr, 0, arr.length - 1);  // puts max at the end
    
    return [maxIdx+1, arr.length, ...pancakeSort(arr.slice(0, arr.length - 1))];
    
};

// start & end both inclusive
function _flip(arr, start, end) {
    for (let i = start, j = end; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}