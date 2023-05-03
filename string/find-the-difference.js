// https://leetcode.com/problems/find-the-difference/
// tags - string
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!map.has(char)) return char;
    const count = map.get(char);
    if (count > 1) {
      map.set(char, count - 1);
    } else {
      map.delete(char);
    }
  }
  // Shouldn't reach here.
};
