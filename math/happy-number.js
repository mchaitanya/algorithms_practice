// https://leetcode.com/problems/happy-number/
// tags - math
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    let digitSqSum = 0;
    while (n > 0) {
      const digit = n % 10;
      digitSqSum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = digitSqSum;
  }
  return n === 1;
};
