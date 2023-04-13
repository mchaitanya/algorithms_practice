// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
// tags - string
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = -Infinity;
  for (const sentence of sentences) {
    let spaces = 0;
    for (let char of sentence) {
      if (char === " ") spaces++;
    }
    // #words = #spaces + 1
    max = Math.max(max, spaces + 1);
  }
  return max;
};
