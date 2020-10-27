// https://leetcode.com/problems/maximal-rectangle/
// tags - array
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    // 1-D version of the problem
    // array of 1s & 0s - find longest run of 1s - linear scan of array
    if (matrix.length == 0) {
        return 0;
    }
    
    const rcount = matrix.length;
    const ccount = matrix[0].length;
    function _printMatrix(matrix) {
        matrix.map(row => row.join(' ')).forEach(line => console.log(line));
        console.log();
    }
    
    // preprocess the matrix
    const onesToRight = Array(rcount);
    const onesBelow = Array(rcount);
    // initialize the matrices
    for (let i = 0; i < rcount; i++) {
        onesToRight[i] = Array(ccount).fill(0);
        onesBelow[i] = Array(ccount).fill(0);
    }
    
    for (let i = 0; i < rcount; i++) {
        let count = 0;
        for (let j = ccount-1; j >= 0; j--) {
            count = (matrix[i][j] === '1' ? count+1 : 0);
            onesToRight[i][j] = count;
        }
    }
    
    for (let j = 0; j < ccount; j++) {
        let count = 0;
        for (let i = rcount-1; i >= 0; i--) {
            count = (matrix[i][j] === '1' ? count+1 : 0);
            onesBelow[i][j] = count;
        }
    }
    
    // _printMatrix(onesToRight);
    // _printMatrix(onesBelow);
    
    function _getRectangleSize(i,j) {
        let size = onesBelow[i][j];
        let height = onesBelow[i][j];
        for (let dj = 0; dj < onesToRight[i][j]; dj++) {
            if (onesBelow[i][j+dj] < height) {
                height = onesBelow[i][j+dj];
            }
            
            if (height * (dj+1) > size) {
                size = height * (dj+1);
            }
            // console.log(height, size);
        }
        
        return size;
        
    }
    
//     console.log('_getRectangleSize(1,2)');
//     _getRectangleSize(1,2);
//     console.log('_getRectangleSize(0,2)');
//     _getRectangleSize(0,2);
//     console.log('_getRectangleSize(2,0)');
//     _getRectangleSize(2,0);
//     console.log('_getRectangleSize(0,1)');
//     _getRectangleSize(0,1);
//     console.log('_getRectangleSize(1,4)');
//     _getRectangleSize(1,4);
    
    
    // check each cell as the top-left hand corner of a potential rectangle
    let maxRectangleSize = 0;
    for (let i = 0; i < rcount; i++) {
        for (let j = 0; j < ccount; j++) {
            let rectangleSize = _getRectangleSize(i,j);
            if (rectangleSize > maxRectangleSize) {
                maxRectangleSize = rectangleSize;
            }
        }
    }
    
    return maxRectangleSize;
    
};