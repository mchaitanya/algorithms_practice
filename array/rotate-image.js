// https://leetcode.com/problems/rotate-image/
// tags - array
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    function _print(matrix) {
        matrix.map(row => row.join(' ')).forEach(line => console.log(line));
        console.log();
    }
    
//     _print(matrix);
//     const n = matrix.length;
//     // solve recursively - can rotate the inner square matrix of size n-2
//     function _rotate(start) {
//         const end = n - start; // exclusive
//         if (start >= end) {
//             return;
//         }
        
//         // console.log(start);
//         // adjust the numbers along the outside edges
//         for (let c = start; c < end-1; c++) {
//             let tp = [start, c];
//             // for (start, c) - find the corresponding numbers on the right, bottom & left edges
//             // top => right
//             let rt = [c, end-1];
//             // right => bottom
//             let bm = [end-1, end-c-1];
//             // bottom => left
//             let lt = [end-c-1, start];
            
//             // swap with destructuring
//             [matrix[rt[0]][rt[1]], matrix[bm[0]][bm[1]], matrix[lt[0]][lt[1]], matrix[tp[0]][tp[1]]]
//              = [matrix[tp[0]][tp[1]], matrix[rt[0]][rt[1]], matrix[bm[0]][bm[1]], matrix[lt[0]][lt[1]]];
            
//             // console.log(start, c);
//             // _print(matrix);
            
//         }
        
//         // rotate the inner square matrix
//         _print(matrix);
//         _rotate(start+1);
        
//     }
    
//     _rotate(0);
//     // _print(matrix);
    
    // from the solution on LeetCode - easy to implement
    // rotate = transpose + reverse
    const n = matrix.length;
    
    // transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
        }
    }
    // _print(matrix);
    
    // reverse the matrix left to right
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    // _print(matrix);
    
};
