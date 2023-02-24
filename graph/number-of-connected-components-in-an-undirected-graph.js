// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  // Solve with union-find.
  let numComponents = n;
  const uf = new UnionFind(n);
  for (const [x, y] of edges) {
    if (uf.union(x, y)) numComponents--;
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

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] = root;
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;
    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootY] > this.rank[rootX]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }
}
