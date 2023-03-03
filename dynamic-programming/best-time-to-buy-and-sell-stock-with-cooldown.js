// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// tags - dynamic-programming
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // State:
  // i - The current day
  // holding - 0 if we don't have any stock, 1 if we do
  const memo = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    memo[i] = [null, null]; // 2 elements for holding = 0/1
  }

  function dp(i, holding) {
    // Base cases.
    if (i >= prices.length) return 0;
    if (memo[i][holding] != null) return memo[i][holding];

    let max = dp(i + 1, holding); // Do nothing.
    if (holding === 0) {
      // Can buy stock.
      max = Math.max(max, -prices[i] + dp(i + 1, 1));
    } else {
      // Can sell stock.
      max = Math.max(max, +prices[i] + dp(i + 2, 0)); // i+2 to skip the cooldown day
    }

    memo[i][holding] = max;
    return max;
  }

  return dp(0, 0);
};
