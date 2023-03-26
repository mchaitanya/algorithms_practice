// https://leetcode.com/problems/height-checker/
// tags - array
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const copy = [...heights];
  copy.sort((h1, h2) => h1 - h2);

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (copy[i] !== heights[i]) count++;
  }
  return count;
};
