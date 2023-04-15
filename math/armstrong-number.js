// https://leetcode.com/problems/armstrong-number/
// tags - math
/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function (n) {
  const digits = [];
  let x = n;
  while (x > 0) {
    digits.push(x % 10);
    x = Math.floor(x / 10);
  }

  let result = 0;
  for (const digit of digits) {
    result += digit ** digits.length;
  }
  return result === n;
};
