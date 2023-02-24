// https://leetcode.com/problems/smallest-string-with-swaps/
// tags - graph
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  // Apply union-find to find connected components of indices that can be swapped.
  const uf = new UnionFind(s.length);
  for (const [x, y] of pairs) {
    uf.union(x, y);
  }

  // Map each root to the indices belonging to the component.
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const root = uf.find(i);
    if (!map.has(root)) map.set(root, []);
    map.get(root).push(i);
  }

  const chars = Array.from(s);
  for (const indices of map.values()) {
    if (indices.length == 1) continue;
    // For each component, sort the chars at the corresponding indices.
    const setChars = indices.map((index) => chars[index]).sort();
    for (let i = 0; i < indices.length; i++) {
      chars[indices[i]] = setChars[i];
    }
  }
  return chars.join("");

  // // Brute force - BFS the graph to reach all the strings that can be generated.
  // function getNextStrs(str) {
  //     const nextStrs = [];
  //     const chars = Array.from(str);
  //     for (const [i, j] of pairs) {
  //         // Swap the chars.
  //         [chars[i], chars[j]] = [chars[j], chars[i]];
  //         nextStrs.push(chars.join(''));
  //         // Swap them back.
  //         [chars[i], chars[j]] = [chars[j], chars[i]];
  //     }
  //     return nextStrs;
  // }

  // let curr = [s];
  // const seen = new Set(curr);
  // let smallestStr = null;
  // while (curr.length > 0) {
  //     const next = [];
  //     for (const str of curr) {
  //         if (smallestStr == null || str.localeCompare(smallestStr) < 0) {
  //             smallestStr = str;
  //         }
  //         for (const nextStr of getNextStrs(str)) {
  //             if (!seen.has(nextStr)) {
  //                 seen.add(nextStr);
  //                 next.push(nextStr);
  //             }
  //         }
  //     }
  //     curr = next;
  // }
  // return smallestStr;
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
    this.parent[x] = root;
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootY] > this.rank[rootX]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}
