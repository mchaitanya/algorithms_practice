// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
// tags - string
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const map = new Map();
  for (const digit of num) {
    map.set(digit, (map.get(digit) || 0) + 1);
  }

  for (let i = 0; i < num.length; i++) {
    const count = map.get(String(i)) || 0;
    if (count !== Number(num[i])) return false;
  }
  return true;
};
