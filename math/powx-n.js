// https://leetcode.com/problems/powx-n/
// tags- math
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === 0) {
        return 1;
    }
    
    let result = 1;
    for (let i = 0, end = Math.abs(n); i < end; i++) {
        result *= x;
    }
    
    return n > 0 ? result : (1/result);
    
};