// https://leetcode.com/problems/interleaving-string/
// tags - dynamic-programming
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s3.length !== s1.length + s2.length) return false;

  const memo = new Array(s1.length + 1);
  for (let i1 = 0; i1 <= s1.length; i1++) {
    memo[i1] = new Array(s2.length + 1);
    for (let i2 = 0; i2 <= s2.length; i2++) {
      memo[i1][i2] = [null, null];
    }
  }

  // State
  // - i1 - Index into s1
  // - i2 - Index into s2
  // - next - 0 if we should consume s1 next, 1 for s2.
  // Return true if we can construct s3.
  function dp(i1, i2, next) {
    if (i1 === s1.length && i2 === s2.length) {
      return true;
    } else if (i1 === s1.length && next === 0) {
      return false;
    } else if (i2 === s2.length && next === 1) {
      return false;
    }

    if (memo[i1][i2][next] !== null) return memo[i1][i2][next];

    const [s, index] = next === 0 ? [s1, i1] : [s2, i2];
    for (let i = index, j = i1 + i2; i < s.length && j < s3.length; i++, j++) {
      if (s[i] !== s3[j]) break;
      if (
        (next === 0 && dp(i + 1, i2, 1)) ||
        (next === 1 && dp(i1, i + 1, 0))
      ) {
        memo[i1][i2][next] = true;
        return true;
      }
    }

    memo[i1][i2][next] = false;
    return false;
  }

  return dp(0, 0, 0) || dp(0, 0, 1);
};
