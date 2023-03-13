// https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/
// tags - binary
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
  while (n > 0) {
    const binary = n.toString(2);
    if (!s.includes(binary)) return false;
    n--;
  }
  return true;
};
