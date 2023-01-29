// https://leetcode.com/problems/valid-word-square/
// tags - string
/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
  for (let r = 0; r < words.length; r++) {
    for (let c = 0; c < words[r].length; c++) {
      if (
        c >= words.length ||
        r >= words[c].length ||
        words[r][c] !== words[c][r]
      ) {
        return false;
      }
    }
  }
  return true;
};
