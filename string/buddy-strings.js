// https://leetcode.com/problems/buddy-strings
// tags - string
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;

  let diff1, diff2;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (diff1 == null) {
        diff1 = i;
      } else if (diff2 == null) {
        diff2 = i;
      } else {
        // The strings differ at 3 indexes. Impossible to fix by swapping 2.
        return false;
      }
    }
  }

  // 3 cases
  // - 0 diffs
  // - 1 diff
  // - 2 diffs
  if (diff1 == null) {
    const set = new Set(s);
    return set.size < s.length; // There are repeated characters we can swap producing no effect.
  } else if (diff2 == null) {
    return false;
  } else {
    return s[diff1] === goal[diff2] && s[diff2] === goal[diff1];
  }
};
