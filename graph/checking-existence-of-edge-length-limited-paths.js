// https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function (n, edgeList, queries) {
  // Sort the queries by limit.
  queries = queries.map((q, i) => [i, ...q]).sort((q1, q2) => q1[3] - q2[3]);
  // Sort the edges by distance.
  edgeList.sort((e1, e2) => e1[2] - e2[2]);

  const uf = new UnionFind(n);
  const result = new Array(queries.length);
  // i is the index into queries; j the index into edgeList.
  for (let i = 0, j = 0; i < queries.length; i++) {
    const [index, p, q, limit] = queries[i];
    while (j < edgeList.length) {
      const [u, v, distance] = edgeList[j];
      if (distance >= limit) break;
      uf.union(u, v);
      j++;
    }
    result[index] = uf.find(p) === uf.find(q);
  }
  return result;
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
