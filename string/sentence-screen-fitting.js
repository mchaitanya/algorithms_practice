// https://leetcode.com/problems/sentence-screen-fitting/
// tags - string
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function (sentence, rows, cols) {
  const numWords = sentence.length;

  // Try to arrange the words in the rows.
  let count = 0;
  for (let r = 0, word = sentence[0]; r < rows; r++) {
    let numColsLeft = cols;
    while (numColsLeft >= word.length) {
      numColsLeft -= word.length + 1; // Take away 1 for the space.
      count++;
      word = sentence[count % numWords];
    }
  }

  return Math.floor(count / numWords);
};
