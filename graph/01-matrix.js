// https://leetcode.com/problems/01-matrix/
// tags - graph, bfs
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const rcount = matrix.length;
    const ccount = matrix[0].length;
    const offsets = [[-1,0], [0,1], [1,0], [0,-1]];
    
    const result = Array(rcount);
    for (let i = 0; i < rcount; i++) {
        result[i] = Array(ccount).fill(0);
    }
    
    function _getDistanceToNearestZero(r, c) {
        let distance = 0;
        let foundZero = false;
        
        let level = [[r,c]];
        const seen = new Set(); // each cell can be assigned a number (r*rcount + c)
        
        while (!foundZero && level.length > 0) {
            distance++;
            // console.log(distance);
            // console.log(level);
            let nextLevel = [];
            for (let [row, col] of level) {
                for (let [dr, dc] of offsets) {
                    const rnew = row+dr, cnew = col+dc, id = rnew*rcount + cnew;
                    if (rnew >= 0 && rnew < rcount && cnew >= 0 && cnew < ccount) {
                        if (!seen.has(id)) {
                            nextLevel.push([rnew, cnew]);
                            if (matrix[rnew][cnew] === 0) {
                                foundZero = true;
                            }
                        }
                    }
                }
            }
            
            level = nextLevel;
        }
        
        return distance;
    }
    
    // _getDistanceToNearestZero(2,1);
    
    // do bfs from every 1 till you hit a 0
    for (let i = 0; i < rcount; i++) {
        for (let j = 0; j < ccount; j++) {
            if (matrix[i][j] === 1) {
                result[i][j] = _getDistanceToNearestZero(i,j);
            }
        }
    }
    
    return result;
    
};