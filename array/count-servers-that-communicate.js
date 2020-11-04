// https://leetcode.com/problems/count-servers-that-communicate/
// tags - array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    
    const rowCounts = Array(numRows).fill(0);
    for (let i = 0; i < numRows; i++) {
        rowCounts[i] = grid[i].reduce((count, cell) => cell === 1 ? count+1 : count, 0);
    }
    
    const colCounts = Array(numCols).fill(0);
    for (let j = 0; j < numCols; j++) {
        for (let i = 0; i < numRows; i++) {
            if (grid[i][j] === 1) {
                colCounts[j]++;
            }
        }
    }
    
    function _isConnected(i, j) {
        return rowCounts[i] > 1 || colCounts[j] > 1;
    }
    
    let numConnected = 0;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === 1 && _isConnected(i,j)) {
                numConnected++;
            }
        }
    }
    
    return numConnected;
    
};