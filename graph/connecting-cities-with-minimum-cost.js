// https://leetcode.com/problems/connecting-cities-with-minimum-cost/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
  // Apply Kruskal's algorithm for finding the MST.
  // Sort the connections by cost.
  connections.sort((c1, c2) => c1[2] - c2[2]);

  let minCost = 0;
  let numEdgesReq = n - 1;
  const uf = new UnionFind(n);
  for (const [x, y, cost] of connections) {
    if (uf.union(x, y)) {
      minCost += cost;
      numEdgesReq--;
      if (numEdgesReq === 0) return minCost;
    }
  }
  return -1;
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
