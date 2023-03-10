// https://leetcode.com/problems/critical-connections-in-a-network/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  // From LC
  // Convert the edge list into adjacency list for DFS.
  const al = new Array(n).fill(0).map(() => []);
  for (const [u, v] of connections) {
    al[u].push(v);
    al[v].push(u);
  }

  // If the edge is part of a cycle, remove it from the set.
  const set = new Set(connections.map(([u, v]) => u + "-" + v));
  // As we DFS the graph, we'll assign a rank to each node in the order they're visited.
  const rank = new Array(n).fill(null);
  function dfs(v, currRank) {
    // If we've already assigned a rank, we must have visited this node before.
    if (rank[v] != null) {
      return rank[v];
    } else {
      rank[v] = currRank;
    }

    let minRankSeen = currRank + 1;
    for (const vn of al[v]) {
      // Skip the parent.
      if (rank[vn] != null && rank[vn] === currRank - 1) continue;

      let minRankSeenNeighbour = dfs(vn, currRank + 1);
      if (minRankSeenNeighbour <= currRank) {
        // The edge to the neighbour is part of a cycle.
        set.delete(v + "-" + vn);
        set.delete(vn + "-" + v);
      }
      minRankSeen = Math.min(minRankSeen, minRankSeenNeighbour);
    }
    return minRankSeen;
  }

  dfs(0, 0);

  const result = [];
  for (const edge of set) {
    const [u, v] = edge.split("-").map(Number);
    result.push([u, v]);
  }
  return result;

  // ATTEMPT 2
  // // First find a spanning tree of the graph. Any critical edge must be part of the tree.
  // const tree = [];
  // const uf1 = new UnionFind(n);
  // for (const conn of connections) {
  //     if (uf1.union(conn[0], conn[1])) {
  //         tree.push(conn);
  //     }
  // }
  // // Now test each edge in the tree. See if excluding it disconnects the graph.
  // const critical = [];
  // for (const conn1 of tree) {
  //     const uf = new UnionFind(n);
  //     for (const conn2 of connections) {
  //         if (conn2 === conn1) continue;
  //         uf.union(conn2[0], conn2[1]);
  //     }
  //     if (uf.count() > 1) critical.push(conn1);
  // }
  // return critical;
  // // ATTEMPT 1
  // // first create the server graph
  // // map from each vertex to array of vertices it is connected to
  // const graph = new Map();
  // // initialize the map
  // for (let i = 0; i < n; i++) {
  //     graph.set(i, []);
  // }
  // // process the edges
  // for (let connection of connections) {
  //     graph.get(connection[0]).push(connection[1]);
  //     graph.get(connection[1]).push(connection[0]);
  // }
  // // console.log(graph);
  // // checks if there's a path from v1 to v2
  // // that doesn't go through the vertices in seen
  // function _doesAlternateConnectionExist(v1, v2) {
  //     // BFS from v1 out - iterative implementation
  //     const seen = new Set([v2]);
  //     let verticesCheck = [v1];
  //     while (verticesCheck.length > 0) {
  //         let nextVerticesCheck = [];
  //         for (let v of verticesCheck) {
  //             for (let n of graph.get(v)) {
  //                 if (v !== v1 && n === v2) {
  //                     return true;
  //                 } else if (!seen.has(n)) {
  //                     nextVerticesCheck.push(n);
  //                     seen.add(n);
  //                 }
  //             }
  //         }
  //         verticesCheck = nextVerticesCheck;
  //     }
  //     return false;
  // }
  // const critical = [];
  // for (let conn of connections) {
  //     // if there's no alternate path between these vertices, then the edge is critical
  //     if (!_doesAlternateConnectionExist(conn[0], conn[1])) {
  //         critical.push(conn);
  //     }
  // }
  // return critical;
};

// class UnionFind {
//     constructor(n) {
//         this.parent = new Array(n);
//         for (let i = 0; i < n; i++) {
//             this.parent[i] = i;
//         }
//     }

//     count() {
//         let numRoots = 0;
//         for (let i = 0; i < this.parent.length; i++) {
//             if (this.parent[i] === i) numRoots++;
//         }
//         return numRoots;
//     }

//     find(x) {
//         if (x === this.parent[x]) return x;
//         return (this.parent[x] = this.find(this.parent[x]));
//     }

//     union(x, y) {
//         const rootX = this.find(x);
//         const rootY = this.find(y);
//         if (rootX !== rootY) this.parent[rootY] = rootX;
//         return rootX !== rootY;
//     }
// }
