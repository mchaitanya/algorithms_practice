// https://leetcode.com/problems/coin-change/
// tags - dynamic-programming
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = Array(10000).fill(undefined);
    memo[0] = 0;
    
    (function _computeMinCoinCount(amount) {
        if (amount < 0) {
            return -1;
        }
        
        // check the memo array
        if (memo[amount] !== undefined) {
            return memo[amount];
        }

        let result = Number.MAX_VALUE;
        for (let coin of coins) {
            let subResult = _computeMinCoinCount(amount - coin);
            if (subResult > -1 && (subResult + 1 < result)) {
                result = subResult + 1;
            }
        }
        
        // store the result in the memo array
        memo[amount] = (result < Number.MAX_VALUE ? result : -1);
        return memo[amount];
        
    })(amount);
    
    return memo[amount];
    
};