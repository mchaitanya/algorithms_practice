// https://leetcode.com/problems/rearrange-characters-to-make-target-string/
// tags - string
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  function countChars(s) {
    const map = new Map();
    for (const c of s) {
      map.set(c, (map.get(c) || 0) + 1);
    }
    return map;
  }

  const countS = countChars(s);
  const countT = countChars(target);
  let result = Infinity;
  for (const c of countT.keys()) {
    if (!countS.has(c)) return 0;
    result = Math.min(result, Math.floor(countS.get(c) / countT.get(c)));
  }
  return result;
};
