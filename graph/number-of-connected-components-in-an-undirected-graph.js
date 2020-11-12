// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // represent the graph with an adjacency list
    const al = Array(n).fill(0).map(_ => []);
    for (let [v1, v2] of edges) {
        al[v1].push(v2); // undirected graph
        al[v2].push(v1);
    }
    
    // function _getNeighbours(i) {
    //     return al[i];
    // }
    
    const seen = Array(n).fill(false);
    function _dfs(v) {
        seen[v] = true;
        for (const vn of al[v]) {
            if (!seen[vn]) {
                _dfs(vn);
            }
        }
    }
    
    let numComponents = 0;
    for (let v = 0; v < n; v++) {
        if (!seen[v]) {
            numComponents++;
            _dfs(v);
        }
    }
    return numComponents;
    
};