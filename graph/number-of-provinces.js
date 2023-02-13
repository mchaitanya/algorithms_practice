// https://leetcode.com/problems/number-of-provinces/
// tags - graph
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // Solve with union-find - Quick-union with path compression.
  const n = isConnected.length; // Given n >= 1.
  const parent = new Array(n).fill(0).map((val, i) => i);

  function find(x) {
    if (x === parent[x]) return x;
    const root = find(parent[x]);
    parent[x] == root;
    return root;
  }

  // Returns true if x & y start in different sets.
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) parent[rootY] = rootX;
    return rootX !== rootY;
  }

  // Call union for all connected cities.
  let numProvinces = n;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] && union(i, j)) numProvinces--;
    }
  }
  return numProvinces;
};
