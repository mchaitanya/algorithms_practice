// https://leetcode.com/problems/flower-planting-with-no-adjacent/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
    // graph colouring problem
    // garden = vertex, path = edge, colour = flower
    
    // choose flowers greedily - guaranteed that an answer exists
    // represent the graph with an adjacency list
    const al = Array(n).fill(0).map(_ => []);
    for (const [i, j] of paths) {
        al[i-1].push(j-1); // bidirectional path
        al[j-1].push(i-1);
    }
    
    let assignments = Array(n).fill(undefined);
    let available = Array(4);
    for (let i = 0; i < n; i++) {
        // assign a flower to each garden
        available.fill(true);
        for (let n of al[i]) {
            if (assignments[n] !== undefined) {
                available[assignments[n] - 1] = false;
            }
        }
        
        assignments[i] = available.indexOf(true) + 1;
        
    }
    
    return assignments;
    
};