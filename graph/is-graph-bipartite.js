// https://leetcode.com/problems/is-graph-bipartite/
// tags - graph
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    // graph already represented with an adjacency list
    // try to colour the nodes starting at 0
    // if 2 adjacent nodes are assigned the same colour that means the graph isn't bipartite
    
    const COLOR1 = 1, COLOR2 = 2;
    const colors = Array(graph.length).fill(null);
    
    // bfs
    // function _canColorComponent(vs) {
    //     let currentLevel = [vs];
    //     let currentColor = COLOR1;
    //     while (currentLevel.length > 0) {
    //         const nextLevel = [];
    //         for (let v of currentLevel) {
    //             colors[v] = currentColor;
    //             for (let vn of graph[v]) {
    //                 if (colors[vn] === currentColor) {
    //                     return false;
    //                 } else if (colors[vn] == null) {
    //                     // not been seen before
    //                     nextLevel.push(vn);
    //                 }
    //             }
    //         }
    //         currentColor = (currentColor === COLOR1 ? COLOR2 : COLOR1);
    //         currentLevel = nextLevel;
    //     }
    //     return true;
    // }
    
    // dfs
    function _canColorComponent(vs, currentColor=COLOR1) {
        colors[vs] = currentColor;
        let isPossible = true; //
        const nextColor = (currentColor === COLOR1 ? COLOR2 : COLOR1);
        for (let vn of graph[vs]) {
            if (!isPossible) break;
            if (colors[vn] === currentColor) {
                isPossible = false;
            } else if (colors[vn] == null) {
                isPossible = _canColorComponent(vn, nextColor);
            }
        }
        return isPossible;
    }
    
    // try each component - parts of the graph may be disconnected
    for (let i = 0; i < graph.length; i++) {
        if (colors[i] == null && !_canColorComponent(i)) {
            return false;
        }
    }
    return true;
    
};