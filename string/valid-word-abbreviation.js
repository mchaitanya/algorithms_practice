// https://leetcode.com/problems/valid-word-abbreviation/
// tags - string
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  function isDigit(char) {
    return /[0-9]/.test(char);
  }

  let j = 0;
  for (let i = 0, num = ""; i < abbr.length; i++) {
    if (isDigit(abbr[i])) {
      num += abbr[i];
      if (num === "0") return false;
      if (i === abbr.length - 1 || !isDigit(abbr[i + 1])) {
        j += Number(num);
        num = "";
      }
    } else {
      if (j >= word.length || word[j] != abbr[i]) return false;
      j++;
    }
  }

  return j === word.length;
};
