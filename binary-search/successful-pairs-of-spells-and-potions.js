// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
// tags - binary-search
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const m = potions.length;
  // Sort the potions.
  potions.sort((p1, p2) => p1 - p2);

  function binarySearch(spell) {
    let left = 0,
      right = m - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (spell * potions[mid] < success) {
        left = mid + 1; // Search the right half.
      } else {
        right = mid - 1; // Search the left half.
      }
    }
    // All potions at index <= right can't be paired with spell for success amount of strength.
    return m - right - 1;
  }

  const pairs = new Array(spells.length);
  for (let i = 0; i < spells.length; i++) {
    if (spells[i] * potions[0] >= success) {
      pairs[i] = potions.length;
    } else if (spells[i] * potions[m - 1] < success) {
      pairs[i] = 0;
    } else {
      pairs[i] = binarySearch(spells[i]);
    }
  }
  return pairs;
};
