// https://leetcode.com/problems/divisor-game/
// tags - dynamic-programming
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  // Solve with DP.
  const dp = new Array(n + 1); // dp[i] = true if Alice wins if she starts with i.
  dp[1] = false; // Ignore dp[0].
  scan: for (let i = 2; i <= n; i++) {
    for (let f = 1; f < i; f++) {
      if (i % f === 0 && !dp[i - f]) {
        // If a player starting with i-f loses, then Alice will pick f to make Bob lose.
        dp[i] = true;
        continue scan;
      }
    }
    dp[i] = false;
  }
  return dp[n];

  // // memoize intermediate results
  // // 1 <= N <= 1000
  // const memo = Array(1001).fill(undefined);
  // memo[0] = false;
  // memo[1] = false;

  // // check recursively
  // (function _canWin(num) {
  //     if (memo[num] !== undefined) {
  //         return memo[num];
  //     }

  //     const moves = [1];
  //     for (let i = 2; i*i < num; i++) {
  //         if (num % i === 0) {
  //             moves.push(i, num/i);
  //         }
  //     }

  //     // if there's any move that makes player 2 lose, player 1 can take it and win
  //     for (let move of moves) {
  //         if (!_canWin(num - move)) {
  //             memo[num] = true;
  //             return true;
  //         }
  //     }

  //     memo[num] = false;
  //     return false;

  // })(N);

  // return memo[N];
};
