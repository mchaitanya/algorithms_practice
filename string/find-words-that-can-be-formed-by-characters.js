// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// tags - string
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const CODE_A = "a".charCodeAt(0);

  function getCharFreq(w) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < w.length; i++) {
      counts[w.charCodeAt(i) - CODE_A]++;
    }
    return counts;
  }

  const counts = getCharFreq(chars);
  function isGood(str) {
    const countsS = getCharFreq(str);
    for (let i = 0; i < 26; i++) {
      if (countsS[i] > counts[i]) {
        return false;
      }
    }
    return true;
  }

  let result = 0;
  for (const w of words) {
    if (isGood(w)) {
      result += w.length;
    }
  }
  return result;
};
