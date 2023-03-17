// https://leetcode.com/problems/fair-candy-swap/
// tags - array
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceTotal = aliceSizes.reduce((sum, size) => sum + size);
  const bobTotal = bobSizes.reduce((sum, size) => sum + size);
  const finalAmount = (aliceTotal + bobTotal) / 2;

  const bobSet = new Set(bobSizes);
  for (let give of aliceSizes) {
    const get = finalAmount - (aliceTotal - give);
    if (bobSet.has(get)) {
      return [give, get];
    }
  }
  // Shouldn't reach here. Guaranteed that a solution exists.
};
