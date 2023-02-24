// https://leetcode.com/problems/group-shifted-strings/
// tags - string
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  // The key's first char is 'a' & all the subsequent chars are shifted by the same amount.
  const codeA = "a".charCodeAt(0);
  function createKey(str) {
    // Given each str's length >= 1.
    const shift = str.charCodeAt(0) - codeA;
    const key = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (code - shift >= codeA) {
        key[i] = String.fromCharCode(code - shift);
      } else {
        key[i] = String.fromCharCode(code - shift + 26);
      }
    }
    return key.join("");
  }

  const map = new Map();
  for (const str of strings) {
    const key = createKey(str);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
};
