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
    
    console.log(graph);
    
    const criticalEdges = [];
    let newCriticalEdges = [];
    do {
        newCriticalEdges = [];
        for (let [vertex, connectedVertices] of graph.entries()) {
            if (connectedVertices.length == 1) {
                newCriticalEdges.push([vertex, connectedVertices[0]]);
                graph.delete(vertex);
            }
        }
        
        // fix the connections in the map
        for (let edge of newCriticalEdges) {
            graph.set(edge[1], graph.get(edge[1]).filter(v => v !== edge[0]) )
        }
        
        criticalEdges.push(...newCriticalEdges);
        
    } while (newCriticalEdges.length > 0)
    
    
    return criticalEdges;
    
};