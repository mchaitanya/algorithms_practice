// https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  const uf = new UnionFind(n);
  for (const [a, b] of edges) {
    uf.union(a, b);
  }

  // Map each root to the size of the component.
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const root = uf.find(i);
    map.set(root, (map.get(root) || 0) + 1);
  }

  let result = 0;
  for (const size of map.values()) {
    result += size * (n - size);
  }
  return result / 2; // Divide by 2 because we count each pair twice ex: (a, b) & (b, a).
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((v, i) => i);
  }

  find(x) {
    if (x === this.parent[x]) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] = root;
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent[rootY] = rootX;
  }
}
