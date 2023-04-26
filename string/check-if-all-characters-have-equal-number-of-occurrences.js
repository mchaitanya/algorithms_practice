// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
// tags - string
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = new Map();
  for (const c of s) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  const firstCharCount = map.get(s[0]); // Given s.length >= 1
  for (const count of map.values()) {
    if (count !== firstCharCount) return false;
  }
  return true;
};
