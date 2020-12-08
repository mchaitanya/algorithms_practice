// https://leetcode.com/problems/graph-valid-tree/
// tags - graph, tree
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    // tree = connected, acyclic graph
    // APPROACH 1
    // run bfs from one node on graph - should reach all nodes & not encounter cycles
    
    // APPROACH 2
    // there must be exactly n-1 edges if the graph's a tree
    // from here on we just have to check connectivity
    if (edges.length !== n-1) {
        return false;
    }
    
    // turn edge list into an adjacency list
    const al = Array(n).fill(0).map(_ => []);
    for (let [v1, v2] of edges) {
        al[v1].push(v2);
        al[v2].push(v1);
    }
    
    const seen = Array(n).fill(false);
    // const parent = Array(n).fill(undefined);
    
    // start bfs from node 0
    seen[0] = true;
    const queue = [0];
    while (queue.length > 0) {
        const v = queue.shift();
        for (let vn of al[v]) {
            // if (seen[vn] && vn !== parent[v]) {
            //     // detected a cycle; can't be a valid tree
            //     return false;
            // }
            
            if (!seen[vn]) {
                seen[vn] = true;
                // parent[vn] = v;
                queue.push(vn);
            }
            
        }
    }
    
    // valid tree if we were able to reach all nodes
    return seen.indexOf(false) === -1;
    
    
    // APPROACH 3 - UNION FIND - implement later
    // union-find is a data structure with 3 methods
    // - makeset(A)
    // - find(A)
    // - union(A, B)
    
    // conceptually, each represents each set as a directed tree
    // practically, maintain an array of parent pointers
    
};