// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
// tags - math
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  let result = 0;
  const CODE_A = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    result += sumDigits(s.charCodeAt(i) - CODE_A + 1);
  }

  while (k > 1) {
    result = sumDigits(result);
    k--;
  }

  return result;
};
