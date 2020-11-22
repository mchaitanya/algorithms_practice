// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// tags - array
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const rcount = grid.length;
    const ccount = grid[0].length;
    
    let count = 0;
    // naive O(n^2) - doesn't take advantage of the matrix's structure
    // for (let r = 0; r < rcount; r++) {
    //     for (let c = 0; c < ccount; c++) {
    //         if (grid[r][c] < 0) {
    //             count++;
    //         }
    //     }
    // }
    
    let clim = ccount;
    for (let r = 0; r < rcount; r++) {
        for (let c = 0; c < clim; c++) {
            if (grid[r][c] < 0) {
                count += ((clim - c) * (rcount - r));
                clim = c;
            }
        }
    }
    
    return count;
    
};