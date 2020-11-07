// https://leetcode.com/problems/spiral-matrix/
// tags - array
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    if (m === 0) {
        return [];
    } 
    
    const n = matrix[0].length;
    let rstart = 0, rend = m;
    let cstart = 0, cend = n;
    
    const elems = [];
    while (rstart < rend && cstart < cend) {
        // console.log(rstart, rend, cstart, cend);
        
        // top edge
        for (let c = cstart; rstart < rend && c < cend; c++) {
            elems.push(matrix[rstart][c]);
        }
        rstart++;
        
        // right edge
        for (let r = rstart; cstart < cend && r < rend; r++) {
            elems.push(matrix[r][cend-1]);
        }
        cend--;
        
        // bottom edge
        for (let c = cend-1; rstart < rend && c >= cstart; c--) {
            elems.push(matrix[rend-1][c]);
        }
        rend--;
        
        // left edge
        for (let r = rend-1; cstart < cend && r >= rstart; r--) {
            elems.push(matrix[r][cstart]);
        }
        cstart++;
    }
    
    return elems;
};