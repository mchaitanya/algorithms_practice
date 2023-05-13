// https://leetcode.com/problems/count-ways-to-build-good-strings/
// tags - dynamic-programming
/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const MOD = 10 ** 9 + 7;
  const memo = new Array(high).fill(null);
  // How many ways can we add zero & one to get limit?
  function countWays(limit) {
    if (limit === 0) return 1;
    if (memo[limit] != null) return memo[limit];
    let result = 0;
    if (limit >= zero) result = (result + countWays(limit - zero)) % MOD;
    if (limit >= one) result = (result + countWays(limit - one)) % MOD;
    memo[limit] = result;
    return result;
  }

  let count = 0;
  for (let limit = low; limit <= high; limit++) {
    count = (count + countWays(limit)) % MOD;
  }
  return count;

  // const memo = new Map();
  // // How many ways can we add zero & one to get a number <= limit?
  // function countWays(limit) {
  //     if (!memo.has(limit)) {
  //         let result = 0;
  //         if (zero <= limit) {
  //             result += 1 + countWays(limit - zero);
  //         }
  //         if (one <= limit) {
  //             result += 1 + countWays(limit - one);
  //         }
  //         memo.set(limit, result % MOD);
  //     }
  //     return memo.get(limit);
  // }
  // let result = countWays(high) - countWays(low-1);
  // return result < 0 ? result + MOD : result;

  // const memo = new Map();
  // // How many ways can we add zero & one to get a number between low & high?
  // function countWays(low, high) {
  //     const key = `${low}|${high}`;
  //     if (!memo.has(key)) {
  //         let result = 0;
  //         if (low > zero) {
  //             result += countWays(low-zero, high-zero);
  //         } else if (zero <= high) {
  //             result += 1 + countWays(0, high-zero);
  //         }
  //         if (low > one) {
  //             result += countWays(low-one, high-one);
  //         } else if (one <= high) {
  //             result += 1 + countWays(0, high-one);
  //         }
  //         memo.set(key, result % MOD);
  //     }
  //     return memo.get(key);
  // }
  // return countWays(low, high);
};
