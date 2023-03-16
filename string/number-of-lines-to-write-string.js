// https://leetcode.com/problems/number-of-lines-to-write-string/
// tags - string
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  const MAX_WIDTH = 100;
  const CODE_A = "a".charCodeAt(0);

  let width = 0;
  let numLines = 1; // s.length >= 1
  for (let i = 0; i < s.length; i++) {
    const charWidth = widths[s.charCodeAt(i) - CODE_A];
    if (width + charWidth <= MAX_WIDTH) {
      width += charWidth;
    } else {
      width = charWidth;
      numLines++;
    }
  }
  return [numLines, width];
};
