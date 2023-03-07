// https://leetcode.com/problems/string-without-aaa-or-bbb/
// tags - string, greedy
/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  // Given - It's possible to construct the string.
  let string = "";
  while (a > 0 || b > 0) {
    if (a === 0) {
      string += "b".repeat(b);
      b = 0;
    } else if (b === 0) {
      string += "a".repeat(a);
      a = 0;
    } else if (a === b) {
      // Both a, b non-zero from this point on
      string += "ab";
      a -= 1;
      b -= 1;
    } else if (a > b) {
      string += "aab";
      a -= 2;
      b -= 1;
    } else {
      string += "bba";
      b -= 2;
      a -= 1;
    }
  }
  return string;
};
