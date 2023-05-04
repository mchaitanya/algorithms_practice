// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  const CODE_A = "a".charCodeAt(0);
  for (let i = 0; i < s.length; ) {
    let chunk = s[i++];
    if (i + 1 < s.length && s[i + 1] === "#") {
      chunk += s[i];
      i += 2;
    }
    result += String.fromCharCode(CODE_A + Number(chunk) - 1);
  }
  return result;
};
