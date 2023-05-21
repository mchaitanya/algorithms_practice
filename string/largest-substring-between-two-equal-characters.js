// https://leetcode.com/problems/largest-substring-between-two-equal-characters/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let max = -1;
  const map = new Map(); // Store the first index where each char occurs.
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      max = Math.max(max, i - map.get(s[i]) - 1);
    } else {
      map.set(s[i], i);
    }
  }
  return max;
};
