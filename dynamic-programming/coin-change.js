// https://leetcode.com/problems/coin-change/
// tags - dynamic-programming
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // BOTTOM-UP
  const coinsReq = new Array(amount + 1).fill(0);
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (const c of coins) {
      if (i - c >= 0 && coinsReq[i - c] > -1) {
        min = Math.min(min, coinsReq[i - c] + 1);
      }
    }
    coinsReq[i] = min === Infinity ? -1 : min;
  }
  return coinsReq[amount];

  // TOP-DOWN
  // const memo = new Map();
  // function coinsReq(amount) {
  //     if (amount === 0) return 0;
  //     if (memo.has(amount)) return memo.get(amount);

  //     let result = -1;
  //     for (const c of coins) {
  //         if (amount < c) continue;
  //         const sub = coinsReq(amount-c);
  //         if (sub > -1) {
  //             result = result === -1 ? sub+1 : Math.min(result, sub+1);
  //         }
  //     }
  //     memo.set(amount, result);
  //     return result;
  // }
  // return coinsReq(amount);
};
