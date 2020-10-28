// https://leetcode.com/problems/count-submatrices-with-all-ones/
// tags - array
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    const rcount = mat.length;
    const ccount = mat[0].length;
    
    function _print(mat) {
        mat.map(row => row.join(' ')).forEach(line => console.log(line));
        console.log();
    }
    
    function _countMatrices(rstart, cstart) {
        // console.log('Checking - ' + rstart + ', ' + cstart);
        // consider the submatrix whose top-left corner is (i,j)
        // iterate row by row - check if current cell can be the bottom-right corner of an all 1s matrix
        const _canBeBottomRightCorner = Array(rcount - rstart);
        for (let i = 0; i < rcount-rstart; i++) {
            _canBeBottomRightCorner[i] = Array(ccount - cstart).fill(false);
        }
        
        let count = 0;
        for (let row = rstart, i = 0; row < rcount; row++, i++) {
            for (let col = cstart, j = 0; col < ccount; col++, j++) {
                if (mat[row][col] === 0) {
                    break;
                }
                
                if (row === rstart && col === cstart) {
                    _canBeBottomRightCorner[i][j] = true;
                    count++;
                    continue;
                }
                
                // (i, j-1), (i-1, j) & (i-1, j-1) can be bottom corners, then so can (i,j)
                let west = j-1 >= 0 ? _canBeBottomRightCorner[i][j-1] : true;
                if (row === rstart && west) {
                    _canBeBottomRightCorner[i][j] = true;
                    count++;
                    continue;
                }
                
                let north = i-1 >= 0 ? _canBeBottomRightCorner[i-1][j] : true;
                if (col === cstart && north) {
                    _canBeBottomRightCorner[i][j] = true;
                    count++;
                    continue;
                }
                
                let northwest = (i-1 >= 0 && j-1 >= 0) ? _canBeBottomRightCorner[i-1][j-1] : true;
                if (row > rstart && col > cstart && north && west && northwest) {
                    _canBeBottomRightCorner[i][j] = true;
                    count++;
                    continue;
                }
                
                break;
                
                // _print(_canBeBottomRightCorner);
            }
        }
        
        return count;
    }
    
    // for every 1 in the matrix
    // count submatrices of 1s where that cell is in the top-left corner
    let count = 0;
    for (let i = 0; i < rcount; i++) {
        for (let j = 0; j < ccount; j++) {
            if (mat[i][j] === 1) {
                count += _countMatrices(i,j);
                
            }
        }
    }
    
    return count;
    
};