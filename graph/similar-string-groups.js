// https://leetcode.com/problems/similar-string-groups/
// tags - graph
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  function areSimilar(s1, s2) {
    // Given strings have the same length & are anagrams of each other.
    let numDiff = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        numDiff++;
        if (numDiff > 2) return false;
      }
    }
    return true;
  }

  // Solve with union-find.
  let numGroups = strs.length;
  const uf = new UnionFind(strs.length);
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (areSimilar(strs[i], strs[j]) && uf.union(i, j)) {
        numGroups--;
      }
    }
  }
  return numGroups;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((v, i) => i);
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
