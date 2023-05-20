// https://leetcode.com/problems/maximum-number-of-words-you-can-type/
// tags - string
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  brokenLetters = new Set(brokenLetters);
  let numTypable = 0;
  wordScan: for (const w of text.split(" ")) {
    for (const c of w) {
      if (brokenLetters.has(c)) continue wordScan;
    }
    numTypable++;
  }
  return numTypable;
};
