// https://leetcode.com/problems/transpose-matrix/
// tags - array
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const rcount = A.length;
    const ccount = A[0].length;
    
    const transposed = Array(ccount);
    for (let c = 0; c < ccount; c++) {
        transposed[c] = Array(rcount).fill(0);
    }
    
    // go row-by-row in A & fill out transposed col-by-col
    for (let r = 0; r < rcount; r++) {
        for (let c = 0; c < ccount; c++) {
            transposed[c][r] = A[r][c];
        }
    }
    
    return transposed;
};