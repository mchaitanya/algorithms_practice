// https://leetcode.com/problems/regions-cut-by-slashes/
// tags - graph
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  // From LC - Divide each square into 4 triangles - each representing a node in the graph.
  // T=0, R=1, B=2, L=3
  const neighbours = [
    [-1, 0, 2, 0], // The top triangle connects to the bottom triangle of the top neighbour.
    [0, 1, 3, 1],
    [1, 0, 0, 2],
    [0, -1, 1, 3],
  ];

  // Apply union-find to count the connected components.
  const n = grid.length; // Given n >= 1
  const uf = new UnionFind(4 * n * n);
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const offset = 4 * (r * n + c);
      // Connect the nodes to the nodes in the surrounding squares.
      for (const [dr, dc, idn, id] of neighbours) {
        const rn = r + dr,
          cn = c + dc;
        const offsetn = 4 * (rn * n + cn);
        if (rn >= 0 && rn < n && cn >= 0 && cn < n) {
          uf.union(offsetn + idn, offset + id);
        }
      }

      // Connect the nodes inside the square.
      if (grid[r][c] === " ") {
        uf.union(offset + 0, offset + 1);
        uf.union(offset + 1, offset + 2);
        uf.union(offset + 2, offset + 3);
      } else if (grid[r][c] === "/") {
        uf.union(offset + 3, offset + 0);
        uf.union(offset + 2, offset + 1);
      } else {
        // Must be '\'
        uf.union(offset + 0, offset + 1);
        uf.union(offset + 2, offset + 3);
      }
    }
  }

  let numRegions = 0;
  for (let i = 0; i < 4 * n * n; i++) {
    if (uf.find(i) === i) numRegions++;
  }
  return numRegions;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] = root; // Path compression.
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent[rootY] = rootX;
  }
}
