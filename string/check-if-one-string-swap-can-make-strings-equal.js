// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
// tags - string
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  // See: https://leetcode.com/problems/buddy-strings/
  let diff1, diff2;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    if (diff1 == null) {
      diff1 = i;
    } else if (diff2 == null) {
      diff2 = i;
    } else {
      // s1 & s2 differ in more than 2 positions.
      return false;
    }
  }

  // 3 cases - 0/1/2 differences
  if (diff1 != null && diff2 != null) {
    return s1[diff1] === s2[diff2] && s1[diff2] === s2[diff1];
  } else {
    return diff1 == diff2; // Both are null i.e. s1 and s2 are the same.
  }
};
