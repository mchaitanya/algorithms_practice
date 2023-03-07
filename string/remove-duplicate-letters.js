// https://leetcode.com/problems/remove-duplicate-letters/
// tags - string, greedy
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // Greedy strategy - Pick the smallest letter which has all the other chars coming after it.

  // Store how many distinct chars appear to the right of s[i] excluding itself.
  const distinctAfter = new Array(s.length);
  // Store the leftmost index of each char.
  const map = new Map();
  for (let i = s.length - 1; i >= 0; i--) {
    distinctAfter[i] = map.size - (map.has(s[i]) ? 1 : 0);
    map.set(s[i], i);
  }

  const sorted = Array.from(map.keys()).sort();
  for (const char of sorted) {
    const index = map.get(char);
    if (distinctAfter[index] === map.size - 1) {
      return (
        char + removeDuplicateLetters(s.slice(index + 1).replaceAll(char, ""))
      );
    }
  }
  return "";
};
