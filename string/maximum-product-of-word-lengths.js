// https://leetcode.com/problems/maximum-product-of-word-lengths/
// tags - string, array
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  // const aToZ = 'abcdefghijklmnopqrstuvwxyz';
  // function haveCommonChars(set1, set2) {
  //     for (const char of aToZ) {
  //         if (set1.has(char) && set2.has(char)) return true;
  //     }
  //     return false;
  // }

  function haveCommonChars(set1, set2) {
    for (const char of set1) {
      if (set2.has(char)) return true;
    }
    return false;
  }

  let max = -Infinity;
  const sets = words.map((w) => new Set(w));
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      if (!haveCommonChars(sets[i], sets[j])) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }
  return max === -Infinity ? 0 : max;
};
