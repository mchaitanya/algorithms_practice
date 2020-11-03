// https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/
// tags - array, math
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    // identity - (a+b)%k = (a%k + b%k)%k
    // given array length is even
    // preprocess the array to make all numbers non-negative
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] += (k * -Math.floor(arr[i]/k));
        }
    }
    
    // console.log(arr);
    
    const mods = Array(k).fill(0);
    for (let num of arr) {
        mods[num % k]++;
    }
    
    // console.log(mods);
    if (mods[0] % 2 !== 0) {
        return false;
    }
    
    for (let i = 1, j = mods.length-1; i <= j; i++, j--) {
        if (i === j && (mods[i] % 2 !== 0)) {
            return false;
        } else if (i !== j && (mods[i] !== mods[j])) {
            return false;
        }
    }
    
    return true;
    
};