// https://leetcode.com/problems/unique-number-of-occurrences/
// tags - array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // Count occurrences of each number.
  const map = new Map();
  for (const n of arr) {
    const count = map.get(n) || 0;
    map.set(n, count + 1);
  }

  // Check if there are any duplicate counts.
  const set = new Set(map.values());
  return set.size === map.size;
};
