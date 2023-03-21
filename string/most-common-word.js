// https://leetcode.com/problems/most-common-word/
// tags - string
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // Clean paragraph - Lowercase & remove punctuation.
  paragraph = paragraph.toLowerCase().replaceAll(/[!\?',;\.]/g, " ");
  banned = new Set(banned);

  let maxCount = 0;
  let mostFreqWord = "";
  // Map each word to its count.
  const map = new Map();
  const words = paragraph.split(/\s+/);
  for (const w of words) {
    if (banned.has(w)) continue; // Ignore banned words.
    const count = (map.get(w) || 0) + 1;
    map.set(w, count);
    if (count > maxCount) {
      maxCount = count;
      mostFreqWord = w;
    }
  }
  return mostFreqWord;
};
