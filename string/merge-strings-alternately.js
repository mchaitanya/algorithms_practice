// https://leetcode.com/problems/merge-strings-alternately/
// tags - string
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    result += word1[i] + word2[i];
  }
  result +=
    word1.length > word2.length
      ? word1.slice(word2.length)
      : word2.slice(word1.length);
  return result;

  // let result = '';
  // // Given word1.length & word2.length >= 1
  // let j = 0, k = 0;
  // for (let i = 0; j < word1.length && k < word2.length; i++) {
  //     result += i % 2 === 0 ? word1[j++] : word2[k++];
  // }
  // result += j === word1.length ? word2.slice(k) : word1.slice(j);
  // return result;
};
