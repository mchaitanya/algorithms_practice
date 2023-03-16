// https://leetcode.com/problems/degree-of-an-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // Map each number to its count, leftmost & rightmost index.
  let maxCount = 0;
  const cmap = new Map();
  const lmap = new Map();
  const rmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = cmap.get(num) || 0;
    cmap.set(num, count + 1);
    if (count + 1 > maxCount) {
      maxCount = count + 1;
    }

    rmap.set(num, i);
    if (!lmap.has(num)) {
      lmap.set(num, i);
    }
  }

  let minSpan = Infinity;
  for (const [num, count] of cmap.entries()) {
    if (count === maxCount) {
      const span = rmap.get(num) - lmap.get(num) + 1;
      if (span < minSpan) {
        minSpan = span;
      }
    }
  }
  return minSpan;
};
