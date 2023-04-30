// https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
  // Solve with union-find.
  const ufa = new UnionFind(n);
  const ufb = new UnionFind(n);

  let numEdgesReq = 0;
  let numComponentsA = n;
  let numComponentsB = n;

  // First try the edges both can traverse.
  for (const [type, u, v] of edges) {
    if (type === 3 && ufa.union(u, v)) {
      ufb.union(u, v);
      numEdgesReq++;
      numComponentsA--;
      numComponentsB--;
      if (numComponentsA === 1) {
        // numComponentsB will also be 1.
        return edges.length - numEdgesReq;
      }
    }
  }

  // Try the edges that Alice can traverse.
  for (const [type, u, v] of edges) {
    if (type === 1 && ufa.union(u, v)) {
      numEdgesReq++;
      numComponentsA--;
      if (numComponentsA === 1) break;
    }
  }

  if (numComponentsA > 1) return -1;

  // Try the edges that Bob can traverse.
  for (const [type, u, v] of edges) {
    if (type === 2 && ufb.union(u, v)) {
      numEdgesReq++;
      numComponentsB--;
      if (numComponentsB === 1) {
        return edges.length - numEdgesReq;
      }
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
