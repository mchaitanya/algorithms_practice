// https://leetcode.com/problems/redundant-connection/
// tags - graph
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  // Try to connect the vertices choosing edges one-by-one from the left.
  // There must be only 1 cycle since only 1 extra edge was added to the tree.
  const n = edges.length; // Tree contains n-1 edges + 1 extra edge
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

  // Return the first edge that produces a cycle.
  for (const edge of edges) {
    if (!union(edge[0], edge[1])) {
      return edge;
    }
  }
  // Shouldn't reach here.

  // // convert to adjacency list
  // // there'll be as many vertices as there are edges because this graph used to be a tree
  // // vertices are numbered 1 ... N
  // const N = edges.length;
  // const al = Array(N+1).fill(0).map(_ => []);
  // for (let [u, v] of edges) {
  //     al[u].push(v); // undirected graph
  //     al[v].push(u);
  // }

  // function _doesCycleExistWithoutEdge(edge) {
  //     const visited = Array(N+1).fill(false);
  //     const prev = Array(N+1).fill(undefined);

  //     function _dfs(vs) {
  //         visited[vs] = true;
  //         for (let vn of al[vs]) {
  //             // can't use given edge
  //             if (vs === edge[0] && vn === edge[1] || vs === edge[1] && vn === edge[0]) continue;
  //             // cycle detected
  //             if (visited[vn] && prev[vs] !== vn) return true;

  //             if (!visited[vn]) {
  //                 visited[vn] = true;
  //                 prev[vn] = vs;
  //                 if (_dfs(vn)) {
  //                     return true;
  //                 }
  //             }
  //         }
  //         return false;
  //     }

  //     for (let i = 1; i <= N; i++) {
  //         if (!visited[i]) {
  //             if (_dfs(i)) {
  //                 return true;
  //             }
  //         }
  //     }
  //     return false;
  // }

  // // exclude an edge on each pass - see if graph becomes cycle-free
  // for (let i = N-1; i >= 0; i--) {
  //     if (!_doesCycleExistWithoutEdge(edges[i])) {
  //         return edges[i];
  //     }
  // }

  //     // run bfs, maintain visited & prev arrays
  //     const visited = Array(N+1).fill(false);
  //     const prev = Array(N+1).fill(undefined);

  //     function _getCycleEdgeSet(start, end) {
  //         // follow prev pointers back from start till you reach end
  //         let pre = end;
  //         let cur = start;
  //         const set = new Set();
  //         while (cur !== end) {
  //             let edge = (pre < cur ? pre + '-' + cur : cur + '-' + pre);
  //             set.add(edge);
  //             pre = cur;
  //             cur = prev[cur];
  //         }
  //         return set;
  //     }

  //     // bfs
  //     const queue = [1];
  //     visited[1] = true;
  //     while (queue.length > 0) {
  //         console.log(queue);
  //         let v = queue.shift();
  //         console.log('v: ' + v);
  //         for (let vn of al[v]) {
  //             console.log('neighbour: ' + vn);
  //             if (vn !== prev[v] && visited[vn]) {
  //                 // cycle detected
  //                 const set = _getCycleEdgeSet(v, vn);
  //                 console.log(set);
  //                 // note: multiple answers? return the one that occurs last in `edges` array
  //                 for (let i = edges.length-1; i >= 0; i--) {
  //                     if (set.has(edges[i][0] + '-' + edges[i][1])) {
  //                         return edges[i];
  //                     }
  //                 }
  //             }

  //             if (!visited[vn]) {
  //                 visited[vn] = true;
  //                 prev[vn] = v;
  //                 queue.push(vn);
  //             }
  //         }
  //     }

  //     return [];
};
