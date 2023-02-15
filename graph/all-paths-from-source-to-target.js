// https://leetcode.com/problems/all-paths-from-source-to-target/
// tags - graph
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const paths = [];

  // Solve with BFS.
  const queue = [[0]]; // Store the paths in the queue.
  while (queue.length > 0) {
    const path = queue.shift();
    const v = path[path.length - 1];
    if (v === n - 1) {
      paths.push(path);
      continue;
    }
    for (const vn of graph[v]) {
      queue.push([...path, vn]);
    }
  }

  //   // Given graph is a DAG i.e. no cycles. Don't have to keep track of seen nodes.
  //   function dfs(v, path) {
  //     path.push(v);
  //     if (v === n - 1) paths.push([...path]);
  //     for (const vn of graph[v]) {
  //       dfs(vn, path);
  //     }
  //     path.pop();
  //   }
  //   dfs(0, []);

  return paths;
};
