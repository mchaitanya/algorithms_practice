// https://leetcode.com/problems/path-with-minimum-effort/
// tags - graph
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  // Given both m, n >= 1.
  const m = heights.length;
  const n = heights[0].length;

  // LC approach 3 - Union-find
  if (m === 1 && n === 1) return 0; // There's only one element in the matrix.
  // Construct the edge list.
  const edges = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const index = r * n + c;
      for (const [dr, dc] of [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ]) {
        const rn = r + dr,
          cn = c + dc;
        if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
          const indexn = rn * n + cn;
          const weight = Math.abs(heights[rn][cn] - heights[r][c]);
          edges.push([index, indexn, weight]);
        }
      }
    }
  }
  // Sort the edges in increasing order by weight.
  edges.sort((e1, e2) => e1[2] - e2[2]);
  // Apply union-find to connect the nodes.
  const uf = new UnionFind(m * n);
  for (const [s, d, w] of edges) {
    if (uf.union(s, d) && uf.find(0) === uf.find(m * n - 1)) {
      return w;
    }
  }
  // Shouldn't reach here.

  // // LC approach 1 - Backtracking - Results in TLE
  // const chosen = new Array(m);
  // for (let r = 0; r < m; r++) {
  //     chosen[r] = new Array(n).fill(false);
  // }
  // let minEffort = Infinity;
  // function choose(r, c, effort) {
  //     if (effort > minEffort) return;
  //     if (r === m-1 && c === n-1) {
  //         minEffort = Math.min(minEffort, effort);
  //         return;
  //     }
  //     chosen[r][c] = true;
  //     for (const [dr, dc] of [[-1,0], [0,1], [1,0], [0,-1]]) {
  //         const rn = r+dr, cn = c+dc;
  //         if (rn >= 0 && rn < m && cn >= 0 && cn < n && !chosen[rn][cn]) {
  //             const diff = Math.abs(heights[rn][cn] - heights[r][c]);
  //             choose(rn, cn, Math.max(effort, diff));
  //         }
  //     }
  //     chosen[r][c] = false;
  // }
  // choose(0, 0, 0);
  // return minEffort;

  // // My solution - Apply the DP idea behind Bellman-Ford. The optimization should work too.
  // const efforts = new Array(m);
  // for (let r = 0; r < m; r++) {
  //     efforts[r] = new Array(n).fill(Infinity);
  // }
  // efforts[0][0] = 0;
  // let updated = true;
  // while (updated) {
  //     updated = false;
  //     for (let r = 0; r < m; r++) {
  //         for (let c = 0; c < n; c++) {
  //             for (const [dr, dc] of [[-1,0], [0,1], [1,0], [0,-1]]) {
  //                 const rn = r+dr, cn = c+dc;
  //                 if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
  //                     const diff = Math.abs(heights[rn][cn] - heights[r][c]);
  //                     const effortFromNb = Math.max(efforts[rn][cn], diff);
  //                     if (effortFromNb < efforts[r][c]) {
  //                         efforts[r][c] = effortFromNb;
  //                         updated = true;
  //                     }
  //                 }
  //             }
  //         }
  //     }
  // }
  // return efforts[m-1][n-1];
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
