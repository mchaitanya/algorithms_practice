// https://leetcode.com/problems/friend-circles/
// tags - graph, bfs
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    // model friendships as a graph - find number of connected components
    // we can bfs the graph
    
    const numStudents = M.length;
    const seen = Array(numStudents).fill(false);
    
    function _bfs(i) {
        console.log(i);
        let level = [i];
        while (level.length > 0) {
            const nextLevel = [];
            for (let s of level) {
                seen[s] = true;
                for (let j = 0; j < numStudents; j++) {
                    if (!seen[j] && M[s][j] === 1) {
                        nextLevel.push(j);
                    }
                }
            }
            console.log(seen);
            level = nextLevel;
        }
    }
    
    let numCircles = 0;
    for (let i = 0; i < numStudents; i++) {
        if (seen[i]) {
            continue;
        }
        
        numCircles++;
        _bfs(i);
        
    }
    return numCircles;
    
};