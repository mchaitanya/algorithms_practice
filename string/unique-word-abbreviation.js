// https://leetcode.com/problems/unique-word-abbreviation/
// tags - string
/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
  this.map = new Map();
  for (const word of dictionary) {
    const abbr =
      word.length > 2
        ? word[0] + (word.length - 2) + word[word.length - 1]
        : word;
    if (!this.map.has(abbr)) {
      this.map.set(abbr, word);
    } else if (this.map.get(abbr) !== word) {
      // Store null for abbreviations that aren't unique.
      // It will never match the word passed to isUnique.
      this.map.set(abbr, null);
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
  const abbr =
    word.length > 2
      ? word[0] + (word.length - 2) + word[word.length - 1]
      : word;
  return !this.map.has(abbr) || this.map.get(abbr) === word;
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
