// https://leetcode.com/problems/goat-latin/
// tags - string
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = new Set("aeiouAEIOU");
  const words = sentence.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!vowels.has(word[0])) {
      word = word.slice(1) + word[0];
    }
    result.push(word + "ma" + "a".repeat(i + 1));
  }
  return result.join(" ");
};
