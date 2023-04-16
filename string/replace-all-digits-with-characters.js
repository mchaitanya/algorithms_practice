// https://leetcode.com/problems/replace-all-digits-with-characters/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  const chars = Array.from(s);
  for (let i = 0; i + 1 < s.length; i += 2) {
    chars[i + 1] = String.fromCharCode(s.charCodeAt(i) + Number(chars[i + 1]));
  }
  return chars.join("");
};
