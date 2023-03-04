// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// tags - array, dynamic-programming
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  var maxProfit = function (prices) {
    // Variation of Kadane's algorithm.
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;

    // // State
    // // i - Current day
    // // dp[i] = Max profit from selling on day i
    // const dp = new Array(prices.length).fill(0);
    // let minSoFar = prices[0];
    // for (let i = 1; i < prices.length; i++) {
    //     dp[i] = prices[i] - minSoFar;
    //     minSoFar = Math.min(minSoFar, prices[i]);
    // }

    // let max = 0;
    // for (let i = 0; i < dp.length; i++) {
    //     max = Math.max(max, dp[i]);
    // }
    // return max;
  };
};
