// https://leetcode.com/problems/unique-paths/
// tags - dynamic-programming
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // solve iteratively with DP
    // paths[i][j] = number of unique ways to reach (i+1,j+1) from (1,1)
    const paths = Array(m);
    // in the first row, the value will be 1 - always stepping to the right
    paths[0] = Array(n).fill(1) 
    for (let i = 1; i < m; i++) {
        paths[i] = Array(n).fill(0);
        // in the first column, value will be 1 - always stepping down
        paths[i][0] = 1;
    }
    
    // printMatrix(paths);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // you can get to (i,j) either 
            // from (i-1, j) with one step down or 
            // from (i, j-1) with one step to the right
            paths[i][j] = paths[i-1][j] + paths[i][j-1];
        }
    }
    
    // printMatrix(paths);
    
    return paths[m-1][n-1];
    
};

var printMatrix = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[0].length; j++) {
            row += (matrix[i][j] + ' ');
        }
        console.log(row);
    }
}