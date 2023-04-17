// https://leetcode.com/problems/count-asterisks/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0;
  for (let i = 0, numPipes = 0; i < s.length; i++) {
    if (s[i] === "|") {
      numPipes++;
    } else if (s[i] === "*" && numPipes % 2 === 0) {
      count++;
    }
  }
  return count;
};
