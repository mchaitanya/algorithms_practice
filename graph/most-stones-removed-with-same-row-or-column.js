// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
// tags - graph
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  // Any connected group of stones can be reduced to 1.
  // Find the number of connected groups with union-find.
  const numStones = stones.length;
  let numGroups = numStones;
  const uf = new UnionFind(numStones);
  for (let i = 0; i < numStones; i++) {
    const [ri, ci] = stones[i];
    for (let j = i + 1; j < numStones; j++) {
      const [rj, cj] = stones[j];
      if ((ri === rj || ci === cj) && uf.union(i, j)) {
        numGroups--;
      }
    }
  }
  // In the end, numGroups will remain. Therefore we can remove (numStones - numGroups).
  return numStones - numGroups;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((val, i) => i);
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
    if (rootX !== rootY) this.parent[rootY] = rootX;
    return rootX !== rootY;
  }
}
