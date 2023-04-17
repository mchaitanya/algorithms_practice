// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
// tags - string
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  for (let i = 0, seenB = false; i < s.length; i++) {
    if (s[i] === "b") {
      seenB = true;
    } else if (seenB) {
      return false;
    }
  }
  return true;

  // let seenB = false;
  // for (const char of s) {
  //     if (char === 'b') {
  //         seenB = true;
  //     } else if (seenB) {
  //         return false;
  //     }
  // }
  // return true;
};
