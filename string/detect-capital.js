// https://leetcode.com/problems/detect-capital/
// tags - string
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length <= 1) return true;

  function isUpper(s) {
    return s.toUpperCase() === s;
  }

  function isLower(s) {
    return s.toLowerCase() === s;
  }

  return (
    isUpper(word) ||
    isLower(word) ||
    (isUpper(word[0]) && isLower(word.slice(1)))
  );

  // const codeA = 'A'.charCodeAt(0), codeZ = 'Z'.charCodeAt(0);
  // function checkCapital(code) {
  //     return codeA <= code && code <= codeZ;
  // }

  // const isFirstCapital = checkCapital(word.charCodeAt(0));
  // const isSecondCapital = checkCapital(word.charCodeAt(1));
  // if (!isFirstCapital && isSecondCapital) return false;

  // for (let i = 2; i < word.length; i++) {
  //     const isCapital = checkCapital(word.charCodeAt(i));
  //     if (isFirstCapital && isSecondCapital !== isCapital) {
  //         return false;
  //     } else if (!isFirstCapital && isCapital) {
  //         return false;
  //     }
  // }
  // return true;
};
