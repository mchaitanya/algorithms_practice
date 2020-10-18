// https://leetcode.com/problems/find-the-town-judge/
// tags - graph
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    // represent the trust graph with an adjacency matrix
    // if graph[i][j] is true, then i trusts j
    const graph = Array(N);
    for (i = 0; i < N; i++) {
        graph[i] = Array(N).fill(false);
    }
    
    for (const [i, j] of trust) {
        graph[i-1][j-1] = true;
    }
    
    for (let i = 0; i < N; i++) {
        const rvals = graph[i];
        // the judge trusts nobody - there's a row i that contains only `false` values
        if (rvals.every(t => t === false)) {
            // gather all values in column i
            const cvals = graph.reduce((vals, row) => vals.concat(row[i]), []);
            // everybody else trusts the judge - column i should contain all `true`s except for (i,i)
            if (cvals.every((t, rdx) => rdx === i || t === true)) {
                return i+1;
            }
        }
    }
    
    return -1;
    
};