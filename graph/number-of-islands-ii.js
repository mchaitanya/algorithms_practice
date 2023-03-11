// https://leetcode.com/problems/number-of-islands-ii/
// tags - graph
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function (m, n, positions) {
  // Each we add a land, it can connect upto 4 existing islands.
  const numPositions = positions.length;
  const grid = new Array(m);
  for (let r = 0; r < m; r++) {
    grid[r] = new Array(n).fill(-1);
  }

  const result = new Array(numPositions);
  const uf = new UnionFind(numPositions);
  for (let i = 0, numIslands = 0; i < numPositions; i++) {
    const [r, c] = positions[i];
    if (grid[r][c] >= 0) {
      result[i] = numIslands;
      continue;
    }

    numIslands++;
    grid[r][c] = i;
    for (const [dr, dc] of [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      const rn = r + dr,
        cn = c + dc;
      if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
        if (grid[rn][cn] >= 0 && uf.union(i, grid[rn][cn])) {
          numIslands--;
        }
      }
    }
    result[i] = numIslands;
  }
  return result;

  // Results in TLE
  // // create the grid - initially filled with water
  // const WATER = 0;
  // const grid = Array(m);
  // for (let r = 0; r < m; r++) {
  //     grid[r] = Array(n).fill(WATER);
  // }
  // function _print(grid) {
  //     grid.map(row => row.join(' ')).forEach(line => console.log(line));
  //     console.log();
  // }
  // function _getNeighbours(r, c) {
  //     return [[-1,0], [0,1], [1,0], [0,-1]]
  //             .map(([dr, dc]) => [r+dr, c+dc])
  //             .filter(([r, c]) => r >= 0 && r < m && c >= 0 && c < n);
  // }
  // let id = 0;
  // const islands = new Set();
  // function _dfs(r, c) {
  //     grid[r][c] = id;
  //     for (const [rn, cn] of _getNeighbours(r, c)) {
  //         if (grid[rn][cn] !== WATER && grid[rn][cn] !== id) {
  //             islands.delete(grid[rn][cn]);
  //             grid[rn][cn] = id;
  //             _dfs(rn, cn);
  //         }
  //     }
  // }
  // function _addLand(r, c) {
  //     if (grid[r][c] !== WATER) {
  //         return;
  //     }
  //     // we're sure we're on a WATER cell
  //     id++; // relabel all the connected cells with this id
  //     islands.add(id);
  //     _dfs(r, c);
  // }
  // const counts = [];
  // for (let [r, c] of positions) {
  //     _addLand(r,c);
  //     counts.push(islands.size);
  //     // _print(grid);
  // }
  // return counts;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
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
