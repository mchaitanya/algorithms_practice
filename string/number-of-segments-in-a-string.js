// https://leetcode.com/problems/number-of-segments-in-a-string/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let numSegments = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
      numSegments++;
    }
  }
  return numSegments;
};
