// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  // Given s is a VPS.
  let max = 0;
  for (let i = 0, count = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      max = Math.max(max, count);
    } else if (s[i] === ")") {
      count--;
    }
  }
  return max;
};
