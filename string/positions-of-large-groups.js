// https://leetcode.com/problems/positions-of-large-groups/
// tags - string
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  for (let i = 0, count = 0; i < s.length; i++) {
    count++;
    if (i === s.length - 1 || s[i] !== s[i + 1]) {
      if (count >= 3) {
        result.push([i - count + 1, i]);
      }
      count = 0;
    }
  }
  return result;
};
