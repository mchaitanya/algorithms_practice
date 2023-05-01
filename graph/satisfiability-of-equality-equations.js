// https://leetcode.com/problems/satisfiability-of-equality-equations/
// tags - graph
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  // Solve with union-find.
  const uf = new UnionFind(equations);
  for (const eq of equations) {
    if (eq[1] === "=") uf.union(eq[0], eq[3]);
  }

  for (const eq of equations) {
    if (eq[1] === "!" && uf.connected(eq[0], eq[3])) return false;
  }
  return true;
};

class UnionFind {
  constructor(equations) {
    this.parent = new Map();
    for (const eq of equations) {
      this.parent.set(eq[0], eq[0]);
      this.parent.set(eq[3], eq[3]);
    }
  }

  find(x) {
    if (x === this.parent.get(x)) return x;
    const root = this.find(this.parent.get(x));
    this.parent.set(x, root);
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent.set(rootY, rootX);
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
