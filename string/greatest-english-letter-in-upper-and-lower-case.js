// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const set = new Set(s);
  const ATOZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 25; i >= 0; i--) {
    const char = ATOZ[i];
    if (set.has(char) && set.has(char.toLowerCase())) return char;
  }
  return "";
};
