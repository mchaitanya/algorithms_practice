// https://leetcode.com/problems/adding-spaces-to-a-string/
// tags - string
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  const segments = [];
  let startIndex = 0;
  for (const endIndex of spaces) {
    segments.push(s.slice(startIndex, endIndex));
    startIndex = endIndex;
  }
  segments.push(s.slice(startIndex));
  return segments.join(" ");
};
