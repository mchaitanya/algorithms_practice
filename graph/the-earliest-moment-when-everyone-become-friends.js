// https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/
// tags - graph
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  // Solve with union-find.
  let numGroups = n;
  const uf = new UnionFind(n);
  // Sort the logs in ascending order by timestamp.
  logs.sort((log1, log2) => log1[0] - log2[0]);
  for (const [ts, x, y] of logs) {
    if (uf.union(x, y)) {
      numGroups--;
      if (numGroups === 1) return ts;
    }
  }
  return -1;
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
    if (x === this.parent[x]) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] = root; // Path compression.
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;
    if (this.rank[rootX] > this.rank[rootY]) {
      // Union by rank.
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
