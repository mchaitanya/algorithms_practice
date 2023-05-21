// https://leetcode.com/problems/count-the-number-of-complete-components/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  // Convert edges to an adjacency list.
  const al = new Array(n).fill(0).map(() => []);
  for (const [a, b] of edges) {
    al[a].push(b);
    al[b].push(a);
  }

  function dfs(v, seen) {
    seen.add(v);
    for (const vn of al[v]) {
      if (!seen.has(vn)) dfs(vn, seen);
    }
  }

  let numComplete = 0;
  const seen = new Set();
  for (let i = 0; i < n; i++) {
    if (seen.has(i)) continue;
    // DFS to identify all the nodes in the component.
    const component = new Set();
    dfs(i, component);
    // Check if each node in the component is connected to every other node.
    let isComplete = true;
    for (const v of component) {
      isComplete &&= al[v].length === component.size - 1;
      seen.add(v);
    }
    if (isComplete) numComplete++;
  }
  return numComplete;
};
