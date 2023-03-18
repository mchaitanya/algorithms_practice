// https://leetcode.com/problems/custom-sort-string/
// tags - string
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  // Map each char in s to its count.
  const map = new Map();
  for (const c of s) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  let result = "";
  for (const c of order) {
    if (map.has(c)) {
      result += c.repeat(map.get(c));
      map.delete(c);
    }
  }
  // Add any chars not in order to the result.
  for (const [c, count] of map.entries()) {
    result += c.repeat(count);
  }

  return result;
};
