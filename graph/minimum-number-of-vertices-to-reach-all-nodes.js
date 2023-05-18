// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const indegree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    indegree[v]++;
  }
  return indegree.map((v, i) => i).filter((i) => indegree[i] === 0);

  // const al = new Array(n).fill(0).map(() => []);
  // for (const [u, v] of edges) {
  //     al[u].push(v);
  // }

  // const result = new Set();
  // const seen = new Array(n).fill(false);
  // function dfs(v) {
  //     seen[v] = true;
  //     for (const vn of al[v]) {
  //         result.delete(vn);
  //         if (!seen[vn]) dfs(vn);
  //     }
  // }

  // for (let i = 0; i < n; i++) {
  //     if (!seen[i]) {
  //         result.add(i);
  //         dfs(i);
  //     }
  // }
  // return Array.from(result);
};
