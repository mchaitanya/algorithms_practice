// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
// tags - dynamic-programming, recursion
/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (d, f, target) {
  const MOD = 10 ** 9 + 7;

  const memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(target + 1).fill(null);
  }

  // n dice, each has k faces - 1, 2, ... k
  // State
  // i - Current die
  // sum - Sum the dice from i onwards must add up to
  // Return number of ways.
  function dp(i, sum) {
    if (sum < 0) return 0;
    if (i === n) return sum === 0 ? 1 : 0;
    if (memo[i][sum] != null) return memo[i][sum];

    let numWays = 0;
    for (let val = 1; val <= k; val++) {
      numWays += dp(i + 1, sum - val);
      numWays %= MOD;
    }

    memo[i][sum] = numWays;
    return numWays;
  }

  return dp(0, target);

  // // solve recursively with memoization
  // // 2-d memo array
  // const memo = Array(d+1);
  // for (let dice = 0; dice < memo.length; dice++) {
  //     if (dice === 0) {
  //         // base case 1 - there aren't any dice
  //         memo[dice] = Array(target+1).fill(0);
  //     } else if (dice === 1) {
  //         // base case 2
  //         memo[dice] = Array(target+1).fill(0).map((_, t) => t >= 1 && t <= f ? 1: 0);
  //     } else {
  //         memo[dice] = Array(target+1).fill(undefined);
  //         memo[dice][0] = 0; // result is 0 if target is 0
  //     }
  // }

  // const base = 10**9 + 7;
  // // console.log(base);
  // // (a + b + c) % n = ((a%n) + (b%n) + (c%n)) % n

  // (function _countRolls(d, target) {
  //     // check the memo array
  //     if (memo[d][target] !== undefined) {
  //         return memo[d][target];
  //     }

  //     let numRolls = 0;
  //     // we can roll any number with this die
  //     for (let roll = 1; roll <= f; roll++) {
  //         if (target > roll) {
  //             numRolls += (_countRolls(d-1, target - roll) % base);
  //         }
  //     }

  //     memo[d][target] = (numRolls % base);
  //     return (numRolls % base);

  // })(d, target);

  // return memo[d][target];
};
