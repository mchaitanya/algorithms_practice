// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
// tags - string
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  // Given n >= 1.
  return n % 2 === 1 ? "a".repeat(n) : "a".repeat(n - 1) + "b";
};
