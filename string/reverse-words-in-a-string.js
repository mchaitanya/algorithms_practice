// https://leetcode.com/problems/reverse-words-in-a-string/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // const words = s.trim().split(/[\s]+/);
  // return words.reverse().join(' ');

  let result = "";
  for (let i = s.length - 1, word = []; i >= 0; i--) {
    if (s[i] === " ") {
      if (i > 0 && s[i - 1] !== " " && result.length > 0) {
        result += " ";
      }
    } else {
      word.push(s[i]);
      if (i === 0 || s[i - 1] === " ") {
        result += word.reverse().join("");
        word = [];
      }
    }
  }
  return result;
};
