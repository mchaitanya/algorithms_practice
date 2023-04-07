// https://leetcode.com/problems/assign-cookies/
// tags - greedy
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // Sort the greed & size arrays.
  g.sort((g1, g2) => g1 - g2);
  s.sort((s1, s2) => s1 - s2);

  let i = 0;
  for (let j = 0; i < g.length && j < s.length; j++) {
    if (g[i] <= s[j]) {
      i++;
    }
  }
  return i;
};
