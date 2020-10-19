// https://leetcode.com/problems/rotting-oranges/
// tags - graph, bfs
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rcount = grid.length;
    const ccount = grid[0].length;
    const EMPTY = 0, FRESH = 1, ROTTEN = 2;
    
    function _getPositions(GRID_TYPE) {
        let positions = [];
        for (let i = 0; i < rcount; i++) {
            for (let j = 0; j < ccount; j++) {
                if (grid[i][j] === GRID_TYPE) {
                    positions.push([i, j]);
                }
            }
        }
        return positions;
    }
    
    // BFS the grid
    // have to check only 4-directional neighbours
    const offsets = [[-1,0], [0,1], [1,0], [0,-1]];
    
    let minutes = 0;
    let freshPositions = _getPositions(FRESH);
    if (freshPositions.length === 0) {
        return minutes;
    }
    
    let rottenPositions = _getPositions(ROTTEN); 
    while (rottenPositions.length > 0) {
        let newRottenPositions = [];
        for (const [i, j] of rottenPositions) {
            for (const [di, dj] of offsets) {
                const newi = i+di, newj = j+dj;
                // check boundaries
                if (newi >= 0 && newi < rcount && newj >= 0 && newj < ccount) {
                    if (grid[newi][newj] === FRESH) {
                        grid[newi][newj] = ROTTEN;
                        newRottenPositions.push([newi, newj]);
                    }
                }
            }
        }
        
        rottenPositions = newRottenPositions;
        minutes++;
    }
    
    // we exit the loop at minute i, i.e. there aren't any more rotten oranges at this point
    // this means at minute i-1, we processed all the rotten oranges
    
    freshPositions = _getPositions(FRESH);
    if (freshPositions.length > 0) {
        return -1;
    } else {
        return minutes-1;
    }
    
};