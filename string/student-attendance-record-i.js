// https://leetcode.com/problems/student-attendance-record-i/
// tags - string
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  for (let i = 0, numAbsent = 0, numLateInRow = 0; i < s.length; i++) {
    if (s[i] === "L") {
      numLateInRow++;
    } else {
      numLateInRow = 0;
      if (s[i] === "A") numAbsent++;
    }
    if (numAbsent >= 2 || numLateInRow >= 3) {
      return false;
    }
  }
  return true;
};
