// https://leetcode.com/problems/paint-house-ii/
// tags - dynamic-programming
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function (costs) {
  const numHouses = costs.length; // Given >= 1
  const numColors = costs[0].length; // Given >= 2; With one colour the task'd be impossible unless there was only one house.

  const memo = new Array(numHouses);
  for (let h = 0; h < numHouses; h++) {
    memo[h] = new Array(numColors).fill(null);
  }

  // State
  // h - Current house
  // prevColor - Colour we painted the previous house
  // Return the min cost starting from house h, given the previous house's colour.
  function dp(h, prevColor) {
    if (h === numHouses) return 0; // Finished painting all the houses.
    if (prevColor >= 0 && memo[h][prevColor] != null) return memo[h][prevColor];

    let min = Infinity;
    for (let c = 0; c < numColors; c++) {
      if (c !== prevColor) {
        min = Math.min(min, costs[h][c] + dp(h + 1, c));
      }
    }

    if (prevColor >= 0) memo[h][prevColor] = min;
    return min;
  }

  return dp(0, -1);
};
