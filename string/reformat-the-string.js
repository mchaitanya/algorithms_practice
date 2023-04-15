// https://leetcode.com/problems/reformat-the-string/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let chars1 = [];
  let chars2 = [];
  const digitSet = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  for (const char of s) {
    (digitSet.has(char) ? chars1 : chars2).push(char);
  }

  if (Math.abs(chars1.length - chars2.length) >= 2) return "";

  if (chars1.length < chars2.length) {
    [chars1, chars2] = [chars2, chars1];
  }

  let result = "";
  for (let i = 0, j = 0, k = 0; i < chars1.length + chars2.length; i++) {
    result += i % 2 === 0 ? chars1[j++] : chars2[k++];
  }
  return result;
};
