// https://leetcode.com/problems/minimum-moves-to-convert-string/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let numMoves = 0;
  let i = 0;
  while (i < s.length) {
    while (i < s.length && s[i] === "O") i++;
    if (i < s.length) numMoves++;
    i += 3;
  }
  return numMoves;
};
