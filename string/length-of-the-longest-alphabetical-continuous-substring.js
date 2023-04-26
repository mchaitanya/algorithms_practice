// https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let maxLen = 0;
  for (let i = 0, len = 0; i < s.length; i++) {
    len++;
    if (
      i === s.length - 1 ||
      s[i + 1] !== String.fromCharCode(s.charCodeAt(i) + 1)
    ) {
      maxLen = Math.max(maxLen, len);
      len = 0;
    }
  }
  return maxLen;
};
