// https://leetcode.com/problems/paint-house/
// tags - dynamic-programming
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const numHouses = costs.length;
  const NUM_COLORS = 3;
  // State
  // i - Current house
  // prevColor - Colour we painted the previous house
  const memo = new Array(numHouses);
  for (let i = 0; i < numHouses; i++) {
    memo[i] = new Array(NUM_COLORS).fill(null);
  }

  function dp(i, prevColor) {
    if (i === numHouses) return 0;
    if (prevColor >= 0 && memo[i][prevColor] != null) return memo[i][prevColor];

    let min = Infinity;
    for (let c = 0; c < NUM_COLORS; c++) {
      if (c !== prevColor) {
        min = Math.min(min, costs[i][c] + dp(i + 1, c));
      }
    }

    if (prevColor >= 0) memo[i][prevColor] = min;
    return min;
  }

  // -1 because there's no previous colour.
  return dp(0, -1);
};
