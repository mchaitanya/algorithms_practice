// https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/
// tags - tree
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  // Convert the edge list into an adjacency list.
  const al = new Array(n).fill(0).map(() => []);
  for (const [u, v] of edges) {
    al[u].push(v);
    al[v].push(u);
  }

  const CODE_A = "a".charCodeAt(0);
  const result = new Array(n).fill(0);

  // Traverse the tree post-order.
  function dfs(v, parent) {
    const counts = new Array(26).fill(0);
    counts[labels.charCodeAt(v) - CODE_A]++;
    for (const vn of al[v]) {
      if (vn === parent) continue;
      const childCounts = dfs(vn, v);
      for (let i = 0; i < 26; i++) {
        counts[i] += childCounts[i];
      }
    }
    result[v] = counts[labels.charCodeAt(v) - CODE_A];
    return counts;
  }

  dfs(0, null);

  return result;
};
