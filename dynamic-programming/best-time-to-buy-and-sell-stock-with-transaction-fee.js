// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
// tags - dynamic-programming
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // State
  // i - Current day
  // holding - 0 if we don't have any stock & 1 otherwise
  // Return the max profit starting on day i not/holding a unit of stock.
  const memo = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    memo[i] = [null, null]; // 2 elements for holding = 0/1
  }

  function dp(i, holding) {
    if (i === prices.length) return 0;
    if (memo[i][holding] != null) return memo[i][holding];

    let max = dp(i + 1, holding); // Can always choose to do nothing.
    if (holding === 0) {
      // Can buy stock.
      max = Math.max(max, -prices[i] + dp(i + 1, 1));
    } else {
      // Can sell stock. We pay the transaction fee when we sell.
      max = Math.max(max, +prices[i] - fee + dp(i + 1, 0));
    }

    memo[i][holding] = max;
    return max;
  }

  return dp(0, 0);
};
