// https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/
// tags - greedy
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  banned = new Set(banned);
  let count = 0;
  for (let i = 1, sum = 0; i <= n; i++) {
    if (banned.has(i)) continue;
    sum += i;
    if (sum > maxSum) break;
    count++;
  }
  return count;
};
