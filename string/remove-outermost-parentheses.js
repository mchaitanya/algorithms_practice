// https://leetcode.com/problems/remove-outermost-parentheses/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  for (let i = 0, numLeft = 0, numRight = 0; i < s.length; i++) {
    if (s[i] === "(") {
      numLeft++;
    } else {
      numRight++;
    }

    if (numLeft === numRight) {
      // i-numLeft-numRight+1 is the index of the first '('.
      result += s.slice(i - numLeft - numRight + 2, i);
      numLeft = 0;
      numRight = 0;
    }
  }
  return result;
};
