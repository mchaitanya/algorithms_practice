// https://leetcode.com/problems/number-of-equivalent-domino-pairs/
// tags - array
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // Count the number of dominoes there are for each top-bottom pair
  const map = new Map();
  for (const [top, bottom] of dominoes) {
    const key = Math.min(top, bottom) + "-" + Math.max(top, bottom);
    const count = map.get(key) || 0;
    map.set(key, count + 1);
  }

  let numPairs = 0;
  // If there are 'n' equivalent dominoes, #pairs = n choose 2.
  for (const count of map.values()) {
    numPairs += (count * (count - 1)) / 2;
  }
  return numPairs;
};
