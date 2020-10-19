// https://leetcode.com/problems/spiral-matrix-ii/
// tags - array
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = Array(n).fill(0);
    }
    
    function _printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let row = '';
            for (let j = 0; j < matrix[0].length; j++) {
                row += (matrix[i][j] + ' ');
            }
            console.log(row);
        }
        console.log('');
    }
    
    let i = 1;
    let rowStart = 0, colStart = 0, rowEnd = n, colEnd = n; // the end values are exclusive
    // _printMatrix(result);
    while (i <= n*n) {
        // top edge
        for (let j = colStart; i <= n*n && j < colEnd; j++) {
            result[rowStart][j] = i;
            i++;
        }
        // _printMatrix(result);
        rowStart++;
        
        // right edge
        for (let j = rowStart; i <= n*n && j < rowEnd; j++) {
            result[j][colEnd-1] = i;
            i++;
        }
        // _printMatrix(result);
        colEnd--;
        
        // bottom edge
        for (let j = colEnd-1; i <= n*n && j >= colStart; j--) {
            result[rowEnd-1][j] = i;
            i++;
        }
        // _printMatrix(result);
        rowEnd--;
        
        // left edge
        for (let j = rowEnd-1; i <= n*n && j >= rowStart; j--) {
            result[j][colStart] = i;
            i++;
        }
        // _printMatrix(result);
        colStart++;
        
    }
    
    return result;
    
};