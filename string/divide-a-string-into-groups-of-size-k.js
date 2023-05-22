// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
// tags - string
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const result = [];
  for (let i = 0, chunk = ""; i < s.length; i++) {
    chunk += s[i];
    if (chunk.length === k) {
      result.push(chunk);
      chunk = "";
    } else if (i === s.length - 1) {
      result.push(chunk.padEnd(k, fill));
    }
  }
  return result;
};
