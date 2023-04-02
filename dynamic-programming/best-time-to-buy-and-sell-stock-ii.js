// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// tags - dynamic-programming
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;

  const memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = [null, null]; // 2 entries for holding = 0/1
  }

  // State
  // i - Current day
  // holding - 0 if we don't have any stock, 1 if we do. We can have at most 1 unit.
  // Return max profit we can make.
  function dp(i, holding) {
    if (i === n) return 0;
    if (memo[i][holding] != null) return memo[i][holding];

    // Buying & selling on the same day amounts to doing nothing.
    let max = dp(i + 1, holding);
    if (holding === 0) {
      max = Math.max(max, -prices[i] + dp(i + 1, 1)); // Buy stock.
    } else {
      max = Math.max(max, +prices[i] + dp(i + 1, 0)); // Sell stock.
    }

    memo[i][holding] = max;
    return max;
  }

  return dp(0, 0);
};
