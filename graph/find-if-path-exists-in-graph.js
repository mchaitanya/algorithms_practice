// https://leetcode.com/problems/find-if-path-exists-in-graph/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // DFS starting from source & see if we can reach destination.
  // Convert the edges into an adjacency list.
  const al = new Array(n).fill(0).map(() => []);
  for (const [u, v] of edges) {
    // Edges are bidrectional.
    al[u].push(v);
    al[v].push(u);
  }

  // Iterative DFS.
  const stack = [source];
  const seen = new Set();
  while (stack.length > 0) {
    const v = stack.pop();
    if (v === destination) return true;
    seen.add(v);
    for (const vn of al[v]) {
      if (!seen.has(vn)) stack.push(vn);
    }
  }
  return false;

  // const seen = new Set();
  // function search(v) {
  //     if (v === destination) return true;
  //     seen.add(v);
  //     for (const vn of al[v]) {
  //         if (!seen.has(vn) && search(vn)) return true;
  //     }
  //     return false;
  // }
  // return search(source);
};
