// https://leetcode.com/problems/shortest-completing-word/
// tags - string
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  function countChars(word) {
    const map = new Map();
    for (const char of word) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
  }

  licensePlate = licensePlate.toLowerCase().replaceAll(/[^a-z]/g, "");
  const mapL = countChars(licensePlate);
  function isCompleting(word) {
    const mapW = countChars(word);
    for (const char of mapL.keys()) {
      if (!mapW.has(char) || mapW.get(char) < mapL.get(char)) return false;
    }
    return true;
  }

  let result;
  for (const word of words) {
    if ((result == null || word.length < result.length) && isCompleting(word)) {
      result = word;
    }
  }
  return result;
};
