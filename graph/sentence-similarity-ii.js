// https://leetcode.com/problems/sentence-similarity-ii/
// tags - graph
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;

  // Map each word in the given pairs to an index.
  let index = 0;
  const map = new Map();
  for (const [w1, w2] of similarPairs) {
    if (!map.has(w1)) map.set(w1, index++);
    if (!map.has(w2)) map.set(w2, index++);
  }

  // Find connected components with union-find.
  const uf = new UnionFind(index);
  for (const [w1, w2] of similarPairs) {
    uf.union(map.get(w1), map.get(w2));
  }

  for (let i = 0; i < sentence1.length; i++) {
    const w1 = sentence1[i],
      w2 = sentence2[i];
    if (map.has(w1) && map.has(w2)) {
      if (uf.find(map.get(w1)) !== uf.find(map.get(w2))) return false;
    } else if (w1 !== w2) {
      return false;
    }
  }
  return true;
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
