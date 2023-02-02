// https://leetcode.com/problems/decode-the-message/
// tags - string
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const mapping = new Map();
  for (let i = 0, j = 0; i < key.length && j < 26; i++) {
    if (key[i] !== " " && !mapping.has(key[i])) {
      mapping.set(key[i], letters[j++]);
    }
  }

  let decoded = "";
  for (const char of message) {
    decoded += char === " " ? " " : mapping.get(char);
  }
  return decoded;
};
