// https://leetcode.com/problems/power-of-two/
// tags - number, binary
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    
    // do it with bit-wise ops
    return (n & (n-1)) === 0;
};