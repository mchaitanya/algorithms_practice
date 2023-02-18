// https://leetcode.com/problems/accounts-merge/
// tags - graph
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  // Apply union-find to merge the accounts.
  const uf = new UnionFind(accounts.length);
  // For each email, store the first account we see it in.
  const map1 = new Map();
  for (let i = 0; i < accounts.length; i++) {
    // Skip the name.
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];
      if (!map1.has(email)) {
        map1.set(email, i);
      } else {
        uf.union(i, map1.get(email));
      }
    }
  }

  // For each root, store the emails linked to it.
  const map2 = new Map();
  const sortedEmails = Array.from(map1.keys()).sort();
  for (const email of sortedEmails) {
    const root = uf.find(map1.get(email));
    if (!map2.has(root)) {
      const name = accounts[root][0];
      map2.set(root, [name]);
    }
    map2.get(root).push(email);
  }
  return Array.from(map2.values());
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
  }

  find(x) {
    if (x === this.parent[x]) return x;
    return (this.parent[x] = this.find(this.parent[x]));
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent[rootY] = rootX;
  }
}
