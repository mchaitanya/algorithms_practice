// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// tags - string
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowels = 0;
  for (let right = 0, numVowels = 0; right < s.length; right++) {
    if (vowels.has(s[right])) numVowels++;
    if (right >= k - 1) {
      maxVowels = Math.max(maxVowels, numVowels);
      if (vowels.has(s[right - k + 1])) numVowels--;
    }
  }
  return maxVowels;
};
