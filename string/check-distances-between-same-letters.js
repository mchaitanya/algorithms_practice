// https://leetcode.com/problems/check-distances-between-same-letters/
// tags - string
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const CODE_A = "a".charCodeAt(0);
  // Store the index where the letter first occurs.
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
    } else if (distance[s.charCodeAt(i) - CODE_A] !== i - map.get(s[i]) - 1) {
      return false;
    }
  }
  return true;
};
