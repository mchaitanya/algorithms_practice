// https://leetcode.com/problems/ransom-note/
// tags - string
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Store the count of each letter in magazine.
  const map = new Map();
  for (const c of magazine) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  for (const c of ransomNote) {
    if (!map.has(c)) return false;
    const count = map.get(c);
    if (count > 1) {
      map.set(c, count - 1);
    } else {
      map.delete(c);
    }
  }
  return true;
};
