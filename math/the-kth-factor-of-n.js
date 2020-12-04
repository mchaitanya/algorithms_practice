// https://leetcode.com/problems/the-kth-factor-of-n/
// tags - math
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const fromStart = [];
    const fromEnd = [];
    for (let i = 1; i*i <= n; i++) {
        if (n % i === 0) {
            fromStart.push(i);
            if (i*i !== n) {
                fromEnd.push(n / i);
            }
        }
    }
    
    const factors = [...fromStart, ...(fromEnd.reverse())];
    if (factors.length >= k) {
        return factors[k-1];
    } else {
        return -1;
    }
    
};