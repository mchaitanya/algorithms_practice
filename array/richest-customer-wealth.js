// https://leetcode.com/problems/richest-customer-wealth/
// tags - array
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (const balances of accounts) {
    const sum = balances.reduce((sum, balance) => sum + balance);
    if (sum > max) max = sum;
  }
  return max;
};
