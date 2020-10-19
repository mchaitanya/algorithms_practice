// https://leetcode.com/problems/k-closest-points-to-origin/
// tags - array
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const sorted = points.sort((p1, p2) => {
        const d1 = p1[0]*p1[0] + p1[1]*p1[1];
        const d2 = p2[0]*p2[0] + p2[1]*p2[1];
        return d1 - d2;
    });
    
    return sorted.slice(0, K);
    
};