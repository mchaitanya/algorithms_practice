// https://leetcode.com/problems/lexicographically-smallest-equivalent-string/
// tags - graph
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  // Solve with union-find.
  const uf = new UnionFind(26);
  const CODE_A = "a".charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    uf.union(s1.charCodeAt(i) - CODE_A, s2.charCodeAt(i) - CODE_A);
  }

  // Map each component's root to the smallest letter in it.
  const map = new Map();
  for (let i = 0; i < 26; i++) {
    const root = uf.find(i);
    if (!map.has(root)) map.set(root, i);
  }

  let result = "";
  for (let i = 0; i < baseStr.length; i++) {
    const root = uf.find(baseStr.charCodeAt(i) - CODE_A);
    result += String.fromCharCode(CODE_A + map.get(root));
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
