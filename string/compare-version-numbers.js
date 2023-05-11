// https://leetcode.com/problems/compare-version-numbers/
// tags - string
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const revs1 = version1.split(".").map(Number);
  const revs2 = version2.split(".").map(Number);
  const len = Math.max(revs1.length, revs2.length);
  for (let i = 0; i < len; i++) {
    const rev1 = i < revs1.length ? revs1[i] : 0;
    const rev2 = i < revs2.length ? revs2[i] : 0;
    if (rev1 !== rev2) return rev1 > rev2 ? 1 : -1;
  }
  return 0;
};
