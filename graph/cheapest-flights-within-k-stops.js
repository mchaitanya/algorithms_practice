// https://leetcode.com/problems/cheapest-flights-within-k-stops/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // Solve with Bellman-Ford.
  // At most k stops means there can be at most k+1 flights/edges.
  // At the nth iteration of Bellman-Ford, we find shortest distances using at most n edges.
  let numIterations = k + 1;
  const prev = new Array(n).fill(Infinity);
  const curr = new Array(n).fill(Infinity);
  prev[src] = 0;
  while (numIterations > 0) {
    curr[src] = 0;
    // Iterate over all the edges & update the current shortest distances.
    for (const [s, d, p] of flights) {
      if (prev[s] + p < curr[d]) {
        curr[d] = prev[s] + p;
      }
    }
    // Copy curr into prev.
    for (let i = 0; i < n; i++) {
      prev[i] = curr[i];
    }
    numIterations--;
  }
  return curr[dst] === Infinity ? -1 : curr[dst];
};
