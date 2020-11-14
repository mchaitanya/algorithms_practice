// https://leetcode.com/problems/island-perimeter/
// tags - graph, array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rcount = grid.length;
    const ccount = grid[0].length;
    const LAND = 1, WATER = 0;
    
//     function _getNeighbours(r,c) {
//         return [[-1,0], [0,1], [1,0], [0,-1]]
//                 .map(([dr, dc]) => [r+dr, c+dc])
//                 .filter(([r, c]) => r >= 0 && r < rcount && c >= 0 && c < ccount);
//     }
    
//     let perimeter = 0;
//     for (let r = 0; r < rcount; r++) {
//         for (let c = 0; c < ccount; c++) {
//             if (grid[r][c] === LAND) {
//                 let sides = 4;
//                 for (let [rn,cn] of _getNeighbours(r,c)) {
//                     if (grid[rn][cn] === LAND) {
//                         sides--;
//                     }
//                 }
//                 perimeter += sides;
//             }
//         }
//     }
//     return perimeter;
    
    // scan the grid L-R, R-L, T-B, B-T
    let perimeter = 0;
    
    for (let r = 0; r < rcount; r++) {
        // L-R
        for (let c = 0; c < ccount; c++) {
            if (grid[r][c] === LAND && (c == 0 || grid[r][c-1] === WATER)) {
                perimeter++;
            }
        }
        
        // R-L
        for (let c = ccount-1; c >= 0; c--) {
            if (grid[r][c] === LAND && (c == ccount-1 || grid[r][c+1] === WATER)) {
                perimeter++;
            }
        }
    }
    
    for (let c = 0; c < ccount; c++) {
        // T-B
        for (let r = 0; r < rcount; r++) {
            if (grid[r][c] === LAND && (r == 0 || grid[r-1][c] === WATER)) {
                perimeter++;
            }
        }
        
        // B-T
        for (let r = rcount-1; r >= 0; r--) {
            if (grid[r][c] === LAND && (r == rcount-1 || grid[r+1][c] === WATER)) {
                perimeter++;
            }
        }
    }
    
    return perimeter;
    
};