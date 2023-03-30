// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
// tags - array
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  // Count the number of cards for each number.
  const map = new Map();
  for (let n of deck) {
    const count = map.get(n) || 0;
    map.set(n, count + 1);
  }

  // Check if all the counts have a common factor > 1.
  search: for (let factor = 2; ; factor++) {
    for (const count of map.values()) {
      if (count < factor) return false;
      if (count % factor !== 0) continue search;
    }
    return true;
  }
  // Shouldn't reach here.
};
