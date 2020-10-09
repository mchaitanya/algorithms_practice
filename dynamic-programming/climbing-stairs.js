// https://leetcode.com/problems/climbing-stairs/
// tags - dynamic programming
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const count = Array(n+1);
    count[0] = 1;
    count[1] = 1;
    for (let i = 2; i <= n; i++) {
        // you can get to step i in 2 ways - turns out the recursion is the same as fibonacci
        // - get to step i-1, then climb one step up
        // - get to step i-2, then climb two steps up
        count[i] = count[i-1] + count[i-2];
    }
    return count[n];
};