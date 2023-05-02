// https://leetcode.com/problems/groups-of-special-equivalent-strings/
// tags - string
/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
  function createKey(w) {
    const odd = [],
      even = [];
    for (let i = 0; i < w.length; i++) {
      (i % 2 === 0 ? even : odd).push(w[i]);
    }
    return odd.sort().join("") + even.sort().join("");
  }

  const set = new Set();
  for (const w of words) {
    set.add(createKey(w));
  }
  return set.size;
};
