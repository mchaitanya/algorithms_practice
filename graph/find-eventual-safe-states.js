// https://leetcode.com/problems/find-eventual-safe-states/
// tags - graph
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length; // n >= 1.
  const WHITE = 0,
    GRAY = 1,
    BLACK = 2;
  const status = new Array(n).fill(WHITE);

  // DFS the graph from each node. All paths starting from that node must end in a terminal node.
  const memo = new Array(n).fill(null);
  function isSafe(u) {
    if (memo[u] != null) return memo[u];
    status[u] = GRAY;
    // Recursively DFS the neighbours.
    // If there aren't any neighbours, this node is terminal & also safe.
    for (const v of graph[u]) {
      // Encountering a GRAY node indicates a back edge & therefore a cycle.
      // If the node is part of a cycle, it cannot be safe.
      if (status[v] === GRAY || !isSafe(v)) {
        return (memo[u] = false);
      }
    }
    status[u] = BLACK;
    return (memo[u] = true);
  }

  const safe = [];
  for (let i = 0; i < n; i++) {
    if (isSafe(i)) safe.push(i);
  }
  return safe;
};
