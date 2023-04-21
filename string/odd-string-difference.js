// https://leetcode.com/problems/odd-string-difference/
// tags - string
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const n = words[0].length;
  const diff = new Array(n - 1);
  for (let i = 1; i < n; i++) {
    diff[i - 1] = words[0].charCodeAt(i) - words[0].charCodeAt(i - 1);
  }

  function hasDiff(word, diff) {
    for (let i = 1; i < word.length; i++) {
      if (word[i] !== String.fromCharCode(word.charCodeAt(i - 1) + diff[i - 1]))
        return false;
    }
    return true;
  }

  // Given words.length >= 3.
  const word1HasDiff = hasDiff(words[1], diff);
  const word2HasDiff = hasDiff(words[2], diff);
  if (word1HasDiff !== word2HasDiff) {
    return word1HasDiff ? words[2] : words[1];
  } else if (!word1HasDiff) {
    // Both are false.
    return words[0];
  }

  for (let i = 3; i < words.length; i++) {
    if (!hasDiff(words[i], diff)) return words[i];
  }
  // Shouldn't reach here. Guaranteed that there's a word whose difference array is different.
};
