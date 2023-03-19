// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// tags - string
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  function canDivide(t, s) {
    // t must be a prefix of s.
    if (s.length % t.length !== 0 || !s.startsWith(t)) return false;
    for (let i = 0, j = t.length; j < s.length; i++, j++) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  }

  function getCommonFactors(x, y) {
    const common = [];
    for (let i = 1; i * i <= x; i++) {
      if (x % i === 0) {
        if (y % i === 0) common.push(i);
        if (y % (x / i) === 0) common.push(x / i);
      }
    }
    return common;
  }

  let gcd = "";
  const factors = getCommonFactors(str1.length, str2.length);
  for (const f of factors) {
    const t = str1.slice(0, f);
    if (canDivide(t, str1) && canDivide(t, str2) && t.length > gcd.length) {
      gcd = t;
    }
  }
  return gcd;
};
