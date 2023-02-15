// https://leetcode.com/problems/all-paths-from-source-lead-to-destination/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
  // Convert edges into an adjacency list.
  const al = new Array(n).fill(0).map(() => []);
  for (const [u, v] of edges) {
    al[u].push(v);
  }

  const WHITE = 0,
    GRAY = 1,
    BLACK = 2;
  const status = new Array(n).fill(WHITE);

  const memo = new Array(n).fill(null);
  // Return true if all paths from v end in destination.
  function dfs(v) {
    if (memo[v] != null) return memo[v];
    if (al[v].length === 0) {
      return (memo[v] = v === destination);
    }
    status[v] = GRAY;
    for (const vn of al[v]) {
      // This is a back edge. Therefore, it creates a cycle.
      if (status[vn] === GRAY) return (memo[v] = false);
      // If an edge going out from v does not end in destination, return false.
      if (!dfs(vn)) return (memo[v] = false);
    }
    status[v] = BLACK;
    return (memo[v] = true);
  }
  return dfs(source);

  //   // Store outgoing edges for each node in the map.
  //   const map = new Map();
  //   for (let i = 0; i < edges.length; i++) {
  //     const v = edges[i][0];
  //     if (!map.has(v)) map.set(v, []);
  //     map.get(v).push(i);
  //   }

  //   // Keep track of edges we've seen.
  //   const seen = new Array(edges.length).fill(false);

  //   // Memoize results to avoid repetitive work.
  //   const memo = new Array(n).fill(null);
  //   // Return true if all paths from v end in the destination.
  //   function dfs(v) {
  //     if (memo[v] != null) return memo[v];
  //     // If there aren't any outgoing edges from this node, it should be the destination.
  //     if (!map.has(v)) {
  //       memo[v] = v === destination;
  //       return v === destination;
  //     }
  //     // Try each edge and backtrack.
  //     for (const i of map.get(v)) {
  //       // If the edge has been seen, that means the graph contains a cycle.
  //       if (seen[i]) {
  //         memo[v] = false;
  //         return false;
  //       }

  //       const vn = edges[i][1];
  //       seen[i] = true;
  //       if (!dfs(vn)) {
  //         memo[v] = false;
  //         return false;
  //       }
  //       seen[i] = false;
  //     }

  //     memo[v] = true;
  //     return true;
  //   }
  //   return dfs(source);
};
