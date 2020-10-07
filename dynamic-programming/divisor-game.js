// https://leetcode.com/problems/divisor-game/
// tags - dynamic-programming
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    // memoize intermediate results
    // 1 <= N <= 1000
    const memo = Array(1001).fill(undefined);
    memo[0] = false;
    memo[1] = false;
    
    // check recursively
    (function _canWin(num) {
        if (memo[num] !== undefined) {
            return memo[num];
        }
        
        const moves = [1];
        for (let i = 2; i*i < num; i++) {
            if (num % i === 0) {
                moves.push(i, num/i);
            }
        }

        // if there's any move that makes player 2 lose, player 1 can take it and win
        for (let move of moves) {
            if (!_canWin(num - move)) {
                memo[num] = true;
                return true;
            }
        }
        
        memo[num] = false;
        return false;
        
    })(N);
    
    return memo[N];
    
};