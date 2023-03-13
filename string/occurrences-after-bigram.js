// https://leetcode.com/problems/occurrences-after-bigram/
// tags - string
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const result = [];
  const words = text.split(" ");
  for (let i = 0; i < words.length - 2; i++) {
    if (words[i] === first && words[i + 1] === second) {
      result.push(words[i + 2]);
    }
  }
  return result;
};
