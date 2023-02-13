// https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/
// tags - graph
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  // Solve with union-find.
  const parent = new Array(n);
  const rank = new Array(n);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    rank[i] = i;
  }

  function find(x) {
    if (x === parent[x]) return x;
    const root = find(parent[x]);
    parent[x] = root; // Path compression.
    return root;
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return false;
    if (rank[rootX] > rank[rootY]) {
      // Union by rank.
      parent[rootY] = rootX;
    } else if (rank[rootY] > rank[rootX]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }
    return true;
  }

  let numGroups = n;
  // Sort the logs in ascending order by timestamp.
  logs.sort((log1, log2) => log1[0] - log2[0]);
  for (const [ts, x, y] of logs) {
    if (union(x, y)) {
      numGroups--;
      if (numGroups === 1) return ts;
    }
  }
  return -1;
};
