// https://leetcode.com/problems/bomb-enemy/
// tags - array
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    const rcount = grid.length;
    if (rcount === 0) { // empty grid
        return 0;
    }
    
    const ccount = grid[0].length;
    const WALL = 'W', ENEMY = 'E', EMPTY = '0';
    
    function _createGrid(numRows, numCols) {
        const grid = Array(numRows);
        for (let r = 0; r < numRows; r++) {
            grid[r] = Array(numCols).fill(0);
        }
        return grid;
    }
    
    // count number of enemies that can be seen from any empty grid
    const enemiesVisible = _createGrid(rcount, ccount);
    for (let r = 0; r < rcount; r++) {
        let eleft = 0, eright = 0;
        for (let cleft = 0, cright = ccount-1; cleft < ccount; cleft++, cright--) {
            if (grid[r][cleft] === ENEMY) {
                eleft++;
            } else if (grid[r][cleft] === WALL) {
                eleft = 0;
            }
            enemiesVisible[r][cleft] += eleft;
            
            if (grid[r][cright] === ENEMY) {
                eright++;
            } else if (grid[r][cright] === WALL) {
                eright = 0;
            }
            enemiesVisible[r][cright] += eright;
            
        }
    }
    
    for (let c = 0; c < ccount; c++) {
        let etop = 0, ebottom = 0;
        for (let rtop = 0, rbottom = rcount-1; rtop < rcount; rtop++, rbottom--) {
            if (grid[rtop][c] === ENEMY) {
                etop++;
            } else if (grid[rtop][c] === WALL) {
                etop = 0;
            }
            enemiesVisible[rtop][c] += etop;
            
            if (grid[rbottom][c] === ENEMY) {
                ebottom++;
            } else if (grid[rbottom][c] === WALL) {
                ebottom = 0;
            }
            enemiesVisible[rbottom][c] += ebottom;
        }
    }
    
    let maxEnemiesVisible = 0;
    for (let r = 0; r < rcount; r++) {
        for (let c = 0; c < ccount; c++) {
            if (grid[r][c] === EMPTY && enemiesVisible[r][c] > maxEnemiesVisible) {
                maxEnemiesVisible = enemiesVisible[r][c];
            }
        }
    }
    
    return maxEnemiesVisible;
    
};