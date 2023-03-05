// https://leetcode.com/problems/paint-house-iii/
// tags - dynamic-programming
/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
  // State
  // i - Current house
  // prevColor - Colour of the previous house
  // We can update & backtrack the value in the houses array. But then since it won't be an argument to the function, we won't be able to memoize it.
  // numNeighborhoods - #Neighborhoods created up to house i
  // If we paint the current house the same as the previous, numNeighborhoods stays the same; otherwise incremented by one.

  const memo = new Array(m);
  for (let h = 0; h < m; h++) {
    memo[h] = new Array(n + 1); // Colours are 1-indexed
    for (let c = 0; c <= n; c++) {
      memo[h][c] = new Array(m + 1).fill(null); // There can be upto m neighbourhoods if each consists of a single house.
    }
  }

  function dp(i, prevColor, numNeighborhoods) {
    if (numNeighborhoods > target) return -1;
    if (i === m) {
      // Painted all the houses.
      return numNeighborhoods === target ? 0 : -1;
    }
    if (memo[i][prevColor][numNeighborhoods] != null)
      return memo[i][prevColor][numNeighborhoods];

    let result;
    if (houses[i] > 0) {
      // Already painted. Move to the next house.
      result = dp(
        i + 1,
        houses[i],
        numNeighborhoods + (houses[i] === prevColor ? 0 : 1)
      );
    } else {
      // Paint the current house.
      let min = Infinity;
      for (let c = 1; c <= n; c++) {
        const costRemaining = dp(
          i + 1,
          c,
          numNeighborhoods + (c === prevColor ? 0 : 1)
        );
        if (costRemaining > -1) {
          min = Math.min(min, cost[i][c - 1] + costRemaining);
        }
      }
      result = min === Infinity ? -1 : min;
    }

    memo[i][prevColor][numNeighborhoods] = result;
    return result;
  }

  // prevColor = 0 because this is the first house.
  return dp(0, 0, 0);
};
