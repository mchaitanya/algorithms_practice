// https://leetcode.com/problems/fruit-into-baskets/
// tags - array
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  // Must pick exactly one fruit from every tree => We're looking for a subarray of fruits
  // 2 baskets each holding only 1 type of fruit => Subarray can contain only 2 distinct types.
  // Problem => Return longest subarray of fruits containing 2 distinct elements.
  // Sliding window - Window contains <= 2 distinct elements
  let maxFruits = 0;
  for (
    let map = new Map(), left = 0, right = 0;
    right < fruits.length;
    right++
  ) {
    // Add fruits[end] into basket
    const rcount = map.get(fruits[right]) || 0;
    map.set(fruits[right], rcount + 1);
    while (left <= right && map.size > 2) {
      const lcount = map.get(fruits[left]);
      if (lcount > 1) {
        map.set(fruits[left], lcount - 1);
      } else {
        map.delete(fruits[left]);
      }
      left++;
    }
    maxFruits = Math.max(maxFruits, right - left + 1);
  }
  return maxFruits;
};
