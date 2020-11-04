// https://leetcode.com/problems/fibonacci-number/
// tags - array
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 0) {
        return 0;
    } else if (N === 1) {
        return 1;
    }
    
    const fib = Array(N+1);
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= N; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    return fib[N];
    
};