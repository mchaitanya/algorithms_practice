// https://leetcode.com/problems/flipping-an-image/
// tags - array
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // do it in place
    for (let row of A) {
        for (let i = 0, j = row.length - 1; i <= j; i++, j--) {
            [row[i], row[j]] = [1-row[j], 1-row[i]]; // flip & invert
        }
    }
    
    return A;
    
};