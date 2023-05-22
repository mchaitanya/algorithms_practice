// https://leetcode.com/problems/print-words-vertically/
// tags - string
/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  let numStrings = 0;
  const words = s.split(" ");
  for (const word of words) {
    numStrings = Math.max(numStrings, word.length);
  }

  const result = new Array(numStrings).fill("");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      // Place the jth character in the ith column.
      result[j] += word[j].padStart(i + 1 - result[j].length, " ");
    }
  }
  return result;
};
