// https://leetcode.com/problems/kth-missing-positive-number/
// tags - array
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // maintain 2 pointers
    let i = 0; // index into array
    let num = 1; // integer to check when you enter the loop
    let count = 0; // count of integers missing so far
    while (count < k) {
        if (i < arr.length && num === arr[i]) {
            i++;
        } else {
            count++;
        }
        num++;
    }
    return num-1;
    
};