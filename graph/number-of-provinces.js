// https://leetcode.com/problems/number-of-provinces/
// tags - graph
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // Solve with union-find.
  const n = isConnected.length; // Given n >= 1.
  let numProvinces = n;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] && uf.union(i, j)) numProvinces--;
    }
  }
  return numProvinces;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((val, i) => i);
  }

  find(x) {
    if (x === this.parent[x]) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] == root;
    return root;
  }

  // Returns true if x & y start in different sets.
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent[rootY] = rootX;
    return rootX !== rootY;
  }
}
