// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const uf = new UnionFind(n + 1);
  for (const [a, b] of roads) {
    uf.union(a, b);
  }

  let minDist = Infinity;
  for (const [a, b, dist] of roads) {
    if (uf.connected(1, a) && uf.connected(1, b) && dist < minDist) {
      minDist = dist;
    }
  }
  return minDist;

  // // Build the adjacency list.
  // const al = new Array(n+1).fill(0).map(() => []);
  // for (const [a, b] of roads) {
  //     al[a].push(b);
  //     al[b].push(a);
  // }

  // function dfs(v, seen) {
  //     seen.add(v);
  //     for (const vn of al[v]) {
  //         if (!seen.has(vn)) dfs(vn, seen);
  //     }
  // }

  // // Given that there is at least one path between 1 & n i.e. they are in the same component.
  // // We have to find the shortest road connecting any 2 nodes in this component.
  // const component = new Set();
  // dfs(1, component);

  // let minDist = Infinity;
  // for (const [a, b, dist] of roads) {
  //     if (component.has(a) && component.has(b) && dist < minDist) {
  //         minDist = dist;
  //     }
  // }
  // return minDist;
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

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
