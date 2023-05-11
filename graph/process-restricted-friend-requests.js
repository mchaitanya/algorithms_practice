// https://leetcode.com/problems/process-restricted-friend-requests/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function (n, restrictions, requests) {
  const uf = new UnionFind(n);
  const result = new Array(requests.length);
  requestScan: for (let i = 0; i < requests.length; i++) {
    const [u, v] = requests[i];
    const rootU = uf.find(u),
      rootV = uf.find(v);
    if (rootU === rootV) {
      result[i] = true;
      continue;
    }
    for (const [x, y] of restrictions) {
      const rootX = uf.find(x),
        rootY = uf.find(y);
      if (
        (rootX === rootU && rootY === rootV) ||
        (rootX === rootV && rootY === rootU)
      ) {
        result[i] = false;
        continue requestScan;
      }
    }
    uf.union(u, v);
    result[i] = true;
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
