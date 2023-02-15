// https://leetcode.com/problems/min-cost-to-connect-all-points/
// tags - graph
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  if (n == 1) return 0;

  // Construct the minimum spanning tree connecting the points.
  // Test if adding an edge creates a cycle with union find.
  // i.e. are both vertices of the edge already connected.
  const parent = new Array(n);
  const rank = new Array(n);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    rank[i] = 1;
  }

  function find(x) {
    if (x === parent[x]) return x;
    return (parent[x] = find(parent[x])); // Path compression.
  }

  // Return false if x & y were already connected. True if they weren't.
  function union(x, y) {
    const rx = find(x);
    const ry = find(y);
    if (rx === ry) return false;
    if (rank[rx] > rank[ry]) {
      parent[ry] = rx;
    } else if (rank[ry] > rank[rx]) {
      parent[rx] = ry;
    } else {
      parent[ry] = rx;
      rank[rx]++;
    }
    return true;
  }

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

  // Pick n-1 edges.
  let totalCost = 0;
  let numReq = n - 1;
  for (let [i, j, cost] of edges) {
    if (union(i, j)) {
      numReq--;
      totalCost += cost;
      if (numReq === 0) break;
    }
  }
  return totalCost;
};
