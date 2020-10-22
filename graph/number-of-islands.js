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
    const LAND = '1', WATER = '0';
    
    function _printGrid() {
        grid.map(row => row.join(' ')).forEach(line => console.log(line));
    }
    
    function _getNextUnseenLandCell(rstart, cstart) {
        for (let col = cstart; col < ccount; col++) {
            if (grid[rstart][col] === LAND) {
                return [rstart, col];
            }
        }
        
        for (let row = rstart+1; row < rcount; row++) {
            for (let col = 0; col < ccount; col++) {
                if (grid[row][col] === LAND) {
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
        let label = String(count + 1);
        grid[row][col] = label;
        // do BFS from this cell, labeling each cell reachable with count+1;
        let cells = [[row, col]];
        while (cells.length > 0) {
            let nextCells = [];
            for (let [r, c] of cells) {
                // grid[r][c] = String(count + 1);
                for (let [dr, dc] of offsets) {
                    const rnew = r + dr, cnew = c + dc;
                    if (rnew >= 0 && rnew < rcount && cnew >= 0 && cnew < ccount) {
                        if (grid[rnew][cnew] === LAND) {
                            grid[rnew][cnew] = label;
                            nextCells.push([rnew, cnew]);
                        }
                    }
                }
            }
            
            cells = nextCells;
        }
    
        // _printGrid(); console.log();
        [row, col] = _getNextUnseenLandCell(row, col);
    }
    
    return count;
    
};