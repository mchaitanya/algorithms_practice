// https://leetcode.com/problems/decode-the-message/
// tags - string
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const mapping = new Map([[" ", " "]]);
  for (let i = 0, j = 0; i < key.length && j < 26; i++) {
    if (!mapping.has(key[i])) {
      mapping.set(key[i], letters[j++]);
    }
  }
  return message
    .split("")
    .map((char) => mapping.get(char))
    .join("");
};
