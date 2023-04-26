// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
// tags - string
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  // Can be restated as: Find the minimum number of 'W's in a substring of size k.
  let minW = k;
  for (let i = 0, numW = 0; i < blocks.length; i++) {
    if (blocks[i] === "W") numW++;
    if (i >= k - 1) {
      minW = Math.min(minW, numW);
      if (blocks[i - k + 1] === "W") numW--;
    }
  }
  return minW;
};
