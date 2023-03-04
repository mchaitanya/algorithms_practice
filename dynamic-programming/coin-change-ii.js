// https://leetcode.com/problems/coin-change-ii/
// tags - dynamic-programming
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // // State
  // // i - Up to how many denominations used. Ex: i = 3 => used coins 1, 2 & 3
  // // j - Amount to make up with the coins
  // const numCoins = coins.length;
  // const dp = new Array(numCoins + 1);
  // for (let i = 0; i <= numCoins; i++) {
  //     dp[i] = new Array(amount + 1).fill(0);
  //     dp[i][0] = 1;
  // }

  // for (let i = 1; i <= numCoins; i++) {
  //     const coin = coins[i-1];
  //     for (let j = 1; j <= amount; j++) {
  //         dp[i][j] = dp[i-1][j]; // Ways to make j using denominations 1...i-1
  //         if (j >= coin) {
  //             dp[i][j] += dp[i][j - coin]; // Add ways to make j using denomination i as well.
  //         }
  //     }
  // }

  // return dp[numCoins][amount];

  // Solve with backtracking.
  const memo = new Array(coins.length);
  for (let i = 0; i < coins.length; i++) {
    memo[i] = new Array(amount + 1).fill(null);
  }

  // index = index from which to pick the next coin
  function choose(index, remainder) {
    if (remainder === 0) return 1;
    if (memo[index][remainder] != null) return memo[index][remainder];

    // Choose the next coin from the same index or later.
    // This allows us to repeat the same coin but ignore the previous coins.
    let total = 0;
    for (let i = index; i < coins.length; i++) {
      if (remainder >= coins[i]) {
        total += choose(i, remainder - coins[i]);
      }
    }
    memo[index][remainder] = total;
    return total;
  }

  return choose(0, amount);
};
