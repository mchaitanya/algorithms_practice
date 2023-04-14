// https://leetcode.com/problems/buildings-with-an-ocean-view/
// tags - array
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  // Scan the buildings from the right.
  let maxSoFar = 0; // heights[i] >= 1
  const result = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    // If building i is taller than the tallest seen so far, it can see the ocean.
    if (heights[i] > maxSoFar) {
      maxSoFar = heights[i];
      result.push(i);
    }
  }
  return result.reverse();
};
