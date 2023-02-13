// https://leetcode.com/problems/graph-valid-tree/
// tags - graph, tree
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  // // tree = connected, acyclic graph
  // // APPROACH 1
  // // run bfs from one node on graph - should reach all nodes & not encounter cycles

  // // APPROACH 2
  // // there must be exactly n-1 edges if the graph's a tree
  // // from here on we just have to check connectivity
  // if (edges.length !== n-1) {
  //     return false;
  // }

  // // turn edge list into an adjacency list
  // const al = Array(n).fill(0).map(_ => []);
  // for (let [v1, v2] of edges) {
  //     al[v1].push(v2);
  //     al[v2].push(v1);
  // }

  // const seen = Array(n).fill(false);
  // // const parent = Array(n).fill(undefined);

  // // start bfs from node 0
  // seen[0] = true;
  // const queue = [0];
  // while (queue.length > 0) {
  //     const v = queue.shift();
  //     for (let vn of al[v]) {
  //         // if (seen[vn] && vn !== parent[v]) {
  //         //     // detected a cycle; can't be a valid tree
  //         //     return false;
  //         // }

  //         if (!seen[vn]) {
  //             seen[vn] = true;
  //             // parent[vn] = v;
  //             queue.push(vn);
  //         }

  //     }
  // }

  // // valid tree if we were able to reach all nodes
  // return seen.indexOf(false) === -1;

  // APPROACH 3 - UNION FIND
  // A graph is a tree if it is connected & has n-1 edges.
  if (edges.length !== n - 1) return false;

  // Now check if the graph is connected i.e. it must contain only 1 component.
  // Apply union-find with path compression.
  const parent = new Array(n).fill(0).map((val, i) => i);

  function find(x) {
    if (x === parent[x]) return x;
    const root = find(parent[x]);
    parent[x] = root;
    return root;
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) parent[rootY] = rootX;
    return rootX !== rootY;
  }

  let numComponents = n;
  for (const [x, y] of edges) {
    if (union(x, y)) numComponents--;
  }
  return numComponents === 1;
};
