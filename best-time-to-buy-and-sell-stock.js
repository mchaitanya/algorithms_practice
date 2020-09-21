// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// tags - array, dynamic-programming?
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
    
    // let max = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i+1; j < prices.length; j++) {
    //         if (prices[j] - prices[i] > max) {
    //             max = prices[j] - prices[i];
    //         }
    //     }
    // }
    // return max;
};