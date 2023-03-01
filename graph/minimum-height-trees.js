// https://leetcode.com/problems/minimum-height-trees/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  // Construct the adjacency list & record each node's degree.
  const al = new Array(n).fill(0).map(() => []);
  const degree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    al[u].push(v);
    al[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  // The queue contains the leafs i.e. nodes with degree 1.
  let queue = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) queue.push(i);
  }

  // Each iteration, we chop off the leaves and put any nodes that become leaves as a result into the queue.
  while (queue.length > 0) {
    const next = [];
    for (const v of queue) {
      degree[v]--;
      for (const vn of al[v]) {
        if (degree[vn] > 0) {
          degree[vn]--;
          if (degree[vn] === 1) next.push(vn);
        }
      }
    }
    if (next.length === 0) return queue;
    queue = next;
  }
  //
};
