// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/
// tags - string
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  const CODE_A = "a".charCodeAt(0);
  const counts = new Array(words.length);
  for (let i = 0; i < words.length; i++) {
    counts[i] = new Array(26).fill(0);
    for (const c of words[i]) {
      counts[i][c.charCodeAt(0) - CODE_A]++;
    }
  }

  function areAnagrams(i, j) {
    for (let k = 0; k < 26; k++) {
      if (counts[i][k] !== counts[j][k]) return false;
    }
    return true;
  }

  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (i === 0 || !areAnagrams(i, i - 1)) {
      result.push(words[i]);
    }
  }
  return result;
};
