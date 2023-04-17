// https://leetcode.com/problems/make-the-string-great/
// tags - string, stack
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];
  for (const char of s) {
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      const uppercased = top.toUpperCase();
      const lowercased = top.toLowerCase();
      if (
        (top === lowercased && char === uppercased) ||
        (top === uppercased && char === lowercased)
      ) {
        stack.pop();
        continue;
      }
    }
    stack.push(char);
  }
  return stack.join("");
};
