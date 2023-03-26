// https://leetcode.com/problems/guess-the-word/
// tags - string
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (words, master) {
  const isPossible = new Array(words.length).fill(true);

  function countMatches(w1, w2) {
    let matches = 0;
    for (let i = 0; i < 6; i++) {
      if (w1[i] === w2[i]) matches++;
    }
    return matches;
  }

  while (true) {
    const index = isPossible.indexOf(true);
    if (index === -1) break; // We've tried all the words.

    const matchesSecret = master.guess(words[index]);
    if (matchesSecret === 6) return;

    isPossible[index] = false;
    for (let i = 0; i < words.length; i++) {
      if (isPossible[i]) {
        const matches = countMatches(words[i], words[index]);
        if (matches !== matchesSecret) {
          isPossible[i] = false;
        }
      }
    }
  }
};
