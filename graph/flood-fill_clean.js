/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const rcount = image.length;
    const ccount = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor === newColor) {
        return image;
    }
    
    function _getNeighbours(r, c) {
        // of the same color
        return [[-1,0], [0,1], [1,0], [0,-1]]
                .map(([dr, dc]) => [r+dr, c+dc])
                .filter(([r, c]) => r >= 0 && r < rcount && c >= 0 && c < ccount)
                // .filter(([r, c]) => image[r][c] === oldColor);
    }
    
    function _markAsSeen(r, c) {
        image[r][c] = newColor;
    }
    
    function _hasBeenSeen(r, c) {
        return image[r][c] !== oldColor;
    }
    
    function _dfs(r, c) {
        // image[r][c] = newColor; // marks it as seen
        _markAsSeen(r,c);
        for (let [rn, cn] of _getNeighbours(r, c)) {
            // we only get neighbours that have the old color i.e. are unseen
            // _dfs(rn, cn);
            if (!_hasBeenSeen(rn,cn)) {
                _dfs(rn,cn);
            }
        }
    }
    
    _dfs(sr, sc);
    return image;
    
};