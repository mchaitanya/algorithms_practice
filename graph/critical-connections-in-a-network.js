// https://leetcode.com/problems/critical-connections-in-a-network/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    // first create the server graph
    // map from each vertex to array of vertices it is connected to
    const graph = new Map();
    // initialize the map
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    // process the edges
    for (let connection of connections) {
        graph.get(connection[0]).push(connection[1]);
        graph.get(connection[1]).push(connection[0]);
    }
    // console.log(graph);
    
    // checks if there's a path from v1 to v2 
    // that doesn't go through the vertices in seen
    function _doesAlternateConnectionExist(v1, v2) {
        // BFS from v1 out - iterative implementation
        const seen = new Set([v2]);
        let verticesCheck = [v1];
        while (verticesCheck.length > 0) {
            let nextVerticesCheck = [];
            for (let v of verticesCheck) {
                for (let n of graph.get(v)) {
                    if (v !== v1 && n === v2) {
                        return true;
                    } else if (!seen.has(n)) {
                        nextVerticesCheck.push(n);
                        seen.add(n);
                    }
                }
            }
            
            verticesCheck = nextVerticesCheck;
        }
        
        return false;
        
    }
    
    const critical = [];
    for (let conn of connections) {
        // if there's no alternate path between these vertices, then the edge is critical
        if (!_doesAlternateConnectionExist(conn[0], conn[1])) {
            critical.push(conn);
        }
    }
    
    return critical;
    
};