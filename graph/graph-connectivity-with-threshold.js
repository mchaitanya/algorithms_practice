// https://leetcode.com/problems/graph-connectivity-with-threshold/
// tags - graph
/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function (n, threshold, queries) {
  const uf = new UnionFind(n + 1); // n+1 because the cities are 1-indexed.
  const seen = new Set();
  for (let f = threshold + 1; f < n; f++) {
    if (seen.has(f)) continue;
    for (let num = f; num <= n; num += f) {
      uf.union(f, num);
      seen.add(num);
    }
  }
  return queries.map(([x, y]) => uf.areConnected(x, y));
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

  areConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}
