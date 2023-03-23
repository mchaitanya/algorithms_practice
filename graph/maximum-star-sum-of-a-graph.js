// https://leetcode.com/problems/maximum-star-sum-of-a-graph/
// tags - graph, greedy
/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
  // For each node, store the positive neighbouring values.
  const neighbourVals = new Array(vals.length).fill(0).map(() => []);
  for (const [u, v] of edges) {
    if (vals[v] > 0) neighbourVals[u].push(vals[v]);
    if (vals[u] > 0) neighbourVals[v].push(vals[u]);
  }

  let max = -Infinity;
  for (let i = 0; i < vals.length; i++) {
    let sum = vals[i];
    // Sort the values of all the neighbours in decreasing order.
    const sorted = neighbourVals[i].sort((val1, val2) => val2 - val1);
    for (let count = 0; count < k && count < sorted.length; count++) {
      sum += sorted[count];
    }
    max = Math.max(max, sum);
  }
  return max;
};
