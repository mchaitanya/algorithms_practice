// https://leetcode.com/problems/guess-number-higher-or-lower-ii/
// tags - dynamic-programming
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  const memo = new Array(n + 1);
  for (let left = 1; left <= n; left++) {
    memo[left] = new Array(n + 1).fill(null);
  }

  function getMoney(left, right) {
    if (left >= right) return 0;
    if (memo[left][right] != null) return memo[left][right];

    let result = Infinity;
    for (let pick = left; pick <= right; pick++) {
      result = Math.min(
        result,
        pick + Math.max(getMoney(left, pick - 1), getMoney(pick + 1, right))
      );
    }

    memo[left][right] = result;
    return result;
  }

  return getMoney(1, n);
};
