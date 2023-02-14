// https://leetcode.com/problems/all-paths-from-source-to-target/
// tags - graph
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const paths = [];
  // Given graph is a DAG i.e. no cycles. Don't have to keep track of seen nodes.
  function dfs(v, path) {
    path.push(v);
    if (v === n - 1) paths.push([...path]);
    for (const vn of graph[v]) {
      dfs(vn, path);
    }
    path.pop();
  }
  dfs(0, []);
  return paths;
};
