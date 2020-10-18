// https://leetcode.com/problems/powx-n/
// tags- math, recursion, dynamic-programming
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // calculate recursively with memoization
    const memo = new Map();
    memo.set(0, 1);
    
    const abs = Math.abs(n);
    (function _calculatePower(n) {
        if (memo.has(n)) {
            return memo.get(n);
        }
        
        let result = 1;
        if (n % 2 === 0) {
            result = _calculatePower(n/2) * _calculatePower(n/2);
        } else {
            result = x * _calculatePower(n-1);
        }
        
        memo.set(n, result);
        return result;
        
    })(abs);
    
    return n > 0 ? memo.get(abs) : (1/memo.get(abs));
    
//     if (x === 0) {
//         return 1;
//     }
    
//     let result = 1;
//     for (let i = 0, end = Math.abs(n); i < end; i++) {
//         result *= x;
//     }
    
//     return n > 0 ? result : (1/result);
    
};