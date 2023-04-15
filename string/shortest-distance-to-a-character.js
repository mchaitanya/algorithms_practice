// https://leetcode.com/problems/shortest-distance-to-a-character/
// tags - string
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const result = new Array(s.length).fill(Infinity);
  // Scan from the left.
  for (let i = 0, count = Infinity; i < s.length; i++) {
    count = s[i] === c ? 0 : count + 1;
    result[i] = Math.min(result[i], count);
  }

  // Scan from the right.
  for (let i = s.length - 1, count = Infinity; i >= 0; i--) {
    count = s[i] === c ? 0 : count + 1;
    result[i] = Math.min(result[i], count);
  }
  return result;
};
