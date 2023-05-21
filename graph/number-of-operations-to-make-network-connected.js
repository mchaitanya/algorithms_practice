// https://leetcode.com/problems/number-of-operations-to-make-network-connected/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1; // There aren't enough cables.

  // Solve with union-find.
  let numComponents = n;
  const uf = new UnionFind(n);
  for (const [a, b] of connections) {
    if (uf.union(a, b)) numComponents--;
  }
  return numComponents - 1;
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
    return rootX !== rootY;
  }
}
