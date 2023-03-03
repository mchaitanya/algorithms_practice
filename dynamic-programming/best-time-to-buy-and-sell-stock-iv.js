// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
// tags - dynamic-programming
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  // State:
  // i - The current day
  // txnLeft - #Transactions left
  // holding - 0 if we don't have any stock, 1 if we do
  // Maximize profit.

  const memo = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    memo[i] = new Array(k + 1);
    for (let j = 0; j <= k; j++) {
      memo[i][j] = [null, null]; // 2 elements for holding = 0/1
    }
  }

  function dp(i, txnLeft, holding) {
    // Base cases.
    if (i === prices.length || txnLeft === 0) {
      return 0;
    }

    if (memo[i][txnLeft][holding] != null) return memo[i][txnLeft][holding];

    let max = dp(i + 1, txnLeft, holding); // Do nothing.
    if (holding === 0) {
      // Can buy stock.
      max = Math.max(max, -prices[i] + dp(i + 1, txnLeft, 1));
    } else {
      // Can sell stock.
      max = Math.max(max, prices[i] + dp(i + 1, txnLeft - 1, 0));
    }

    memo[i][txnLeft][holding] = max;
    return max;
  }

  return dp(0, k, 0);
};
