// https://leetcode.com/problems/pascals-triangle/
// tags - array
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal = Array(numRows);
    for (let i = 0; i < numRows; i++) {
        pascal[i] = Array(i+1).fill(1);
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
    }
    
    return pascal;
    
};