// https://leetcode.com/problems/reverse-vowels-of-a-string/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set("aeiouAEIOU");
  const chars = Array.from(s);
  const vchars = chars.filter((c) => vowels.has(c));
  for (let i = 0, j = vchars.length - 1; i < chars.length; i++) {
    if (vowels.has(chars[i])) {
      chars[i] = vchars[j];
      j--;
    }
  }
  return chars.join("");
};
