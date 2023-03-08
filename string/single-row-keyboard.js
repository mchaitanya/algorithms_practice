// https://leetcode.com/problems/single-row-keyboard/
// tags - string
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  // Map each letter to its index.
  // const mapping = new Map();
  // for (let i = 0; i < keyboard.length; i++) {
  //     mapping.set(keyboard[i], i);
  // }

  const codeA = "a".charCodeAt(0);
  const indexes = new Array(26);
  for (let i = 0; i < 26; i++) {
    indexes[keyboard.charCodeAt(i) - codeA] = i;
  }

  let time = 0;
  let currIndex = 0;
  for (let i = 0; i < word.length; i++) {
    const charIndex = indexes[word.charCodeAt(i) - codeA];
    time += Math.abs(charIndex - currIndex);
    currIndex = charIndex;
  }
  return time;
};
