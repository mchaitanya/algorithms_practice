// https://leetcode.com/problems/number-of-substrings-with-only-1s/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  let numSubstrings = 0;
  for (let i = 0, count = 0; i < s.length; i++) {
    if (s[i] === "1") {
      count++;
      if (i === s.length - 1 || s[i + 1] === "0") {
        numSubstrings += (count * (count + 1)) / 2;
        numSubstrings %= 10 ** 9 + 7;
        count = 0;
      }
    }
  }
  return numSubstrings;
};
