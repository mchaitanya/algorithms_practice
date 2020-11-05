// https://leetcode.com/problems/lucky-numbers-in-a-matrix/
// tags - array
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    // matrix contains distinct numbers
    const rcount = matrix.length;
    const ccount = matrix[0].length;
    
    const rowMins = Array(rcount).fill(Number.MAX_VALUE);
    for (let i = 0; i < rcount; i++) {
        for (let j = 0; j < ccount; j++) {
            rowMins[i] = Math.min(rowMins[i], matrix[i][j]);
        }
    }
    
    const colMaxes = Array(ccount).fill(0);
    for (let j = 0; j < ccount; j++) {
        for (let i = 0; i < rcount; i++) {
            colMaxes[j] = Math.max(colMaxes[j], matrix[i][j]);
        }
    }
    
    function _isLucky(i,j) {
        return (matrix[i][j] === rowMins[i]) && (matrix[i][j] === colMaxes[j]);
    }
    
    const luckyNumbers = [];
    for (let i = 0; i < rcount; i++) {
        for (let j = 0; j < ccount; j++) {
            if (_isLucky(i,j)) {
                luckyNumbers.push(matrix[i][j]);
            }
        }
    }
    return luckyNumbers;
    
};