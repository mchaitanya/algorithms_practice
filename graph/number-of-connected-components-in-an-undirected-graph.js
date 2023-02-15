// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  // Solve with union-find.
  const parent = new Array(n);
  const rank = new Array(n);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    rank[i] = 1;
  }

  function find(x) {
    if (parent[x] === x) return x;
    const root = find(parent[x]);
    parent[x] = root;
    return root;
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return false;
    if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else if (rank[rootY] > rank[rootX]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }
    return true;
  }

  let numComponents = n;
  for (const [x, y] of edges) {
    if (union(x, y)) numComponents--;
  }
  return numComponents;

  // // Solve with DFS.
  // // represent the graph with an adjacency list
  // const al = Array(n).fill(0).map(_ => []);
  // for (let [v1, v2] of edges) {
  //     al[v1].push(v2); // undirected graph
  //     al[v2].push(v1);
  // }
  // // function _getNeighbours(i) {
  // //     return al[i];
  // // }
  // const seen = Array(n).fill(false);
  // function _dfs(v) {
  //     seen[v] = true;
  //     for (const vn of al[v]) {
  //         if (!seen[vn]) {
  //             _dfs(vn);
  //         }
  //     }
  // }
  // let numComponents = 0;
  // for (let v = 0; v < n; v++) {
  //     if (!seen[v]) {
  //         numComponents++;
  //         _dfs(v);
  //     }
  // }
  // return numComponents;
};
