// https://leetcode.com/problems/unique-morse-code-words/
// tags - string
const MORSE = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

const CODEA = "a".charCodeAt(0);

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  function transform(word) {
    // return Array.from(word).map((c, i) => MORSE[word.charCodeAt(i) - CODEA]).join('');
    let result = "";
    for (let i = 0; i < word.length; i++) {
      result += MORSE[word.charCodeAt(i) - CODEA];
    }
    return result;
  }

  const set = new Set();
  for (const word of words) {
    set.add(transform(word));
  }
  return set.size;
};
