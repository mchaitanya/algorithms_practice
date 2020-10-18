// https://leetcode.com/problems/flood-fill/
// tags - graph, dfs
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // DFS from the starting pixel - changing oldColor to newColor
    // if a pixel has been set to newColor - that means it has been visited
    const rcount = image.length; // guaranteed to be at least 1
    const ccount = image[0].length; // guaranteed to be at least 1
    
    const oldColor = image[sr][sc];
    // we only have to check the neighbors, connected 4-directionally
    const offsets = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    (function _floodFill(sr, sc) {
        // change the color at the current pixel
        image[sr][sc] = newColor;
        
        // then check its neighbours
        for (let [dr, dc] of offsets) {
            let rdx = sr+dr, cdx = sc+dc;
            // check boundary conditions
            if (rdx >= 0 && rdx < rcount && cdx >= 0 && cdx < ccount) {
                // check the color at this pixel
                if (image[rdx][cdx] === oldColor && image[rdx][cdx] !== newColor) {
                    _floodFill(rdx, cdx);
                }
            }
        }
        
        
    })(sr, sc);
    
    return image;
    
};