// https://leetcode.com/problems/number-of-islands/
// tags - graph, bfs
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // count number of connected components in a graph
    const rcount = grid.length;
    const ccount = grid[0].length;
    const offsets = [[-1,0], [0,1], [1,0], [0,-1]];
    
    function _getNextUnseenLandCell(rstart, cstart) {
        for (let col = cstart; col < ccount; col++) {
            if (grid[rstart][col] === '1') {
                return [rstart, col];
            }
        }
        
        for (let row = rstart+1; row < rcount; row++) {
            for (let col = 0; col < ccount; col++) {
                if (grid[row][col] === '1') {
                    return [row, col];
                }
            }
        }
        
        return [-1, -1];
    }
    
    let count = 0;
    let [row, col] = _getNextUnseenLandCell(0, 0);
    while (row !== -1) {
        count++;
        // do BFS from this cell, labeling each cell reachable with count+1;
        let cells = [[row, col]];
        while (cells.length > 0) {
            let nextCells = [];
            for (let [r, c] of cells) {
                grid[r][c] = String(count + 1);
                for (let [dr, dc] of offsets) {
                    const rnew = r + dr, cnew = c + dc;
                    if (rnew >= 0 && rnew < rcount && cnew >= 0 && cnew < ccount) {
                        if (grid[rnew][cnew] === '1') {
                            nextCells.push([rnew, cnew]);
                        }
                    }
                }
            }
            
            cells = nextCells;
            
        }
        
        [row, col] = _getNextUnseenLandCell(row, col);
        
    }
    
    return count;
    
};