// https://leetcode.com/problems/min-cost-to-connect-all-points/
// tags - graph
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  if (n == 1) return 0;

  const edges = []; // Represent each edge with a tuple - [p1, p2, weight]
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist =
        Math.abs(points[j][0] - points[i][0]) +
        Math.abs(points[j][1] - points[i][1]);
      edges.push([i, j, dist]);
    }
  }

  // Sort the edges by distance.
  edges.sort((e1, e2) => e1[2] - e2[2]);

  // Kruskal's algorithm:
  // Construct the minimum spanning tree connecting the points. Pick n-1 edges.
  // Test if adding an edge creates a cycle with union find. i.e. are both vertices of the edge already connected.
  let totalCost = 0;
  let numReq = n - 1;
  const uf = new UnionFind(n);
  for (let [i, j, cost] of edges) {
    if (uf.union(i, j)) {
      numReq--;
      totalCost += cost;
      if (numReq === 0) break;
    }
  }
  return totalCost;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (x === this.parent[x]) return x;
    return (this.parent[x] = this.find(this.parent[x])); // Path compression.
  }

  // Return false if x & y were already connected. True if they weren't.
  union(x, y) {
    const rx = this.find(x);
    const ry = this.find(y);
    if (rx !== ry) this.parent[ry] = rx;
    return rx !== ry;
  }
}
