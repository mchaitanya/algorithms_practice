// https://leetcode.com/problems/minimum-time-visiting-all-points/
// tags - array, geometry
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    // // solve how to go from one point to the next - this can be recursive
    // function _calculateSteps(start, end) {
    //     const [x1, y1] = start;
    //     const [x2, y2] = end;
    //     // base case
    //     if (x2 === x1 && y2 === y1) {
    //         return 0;
    //     }
        
    //     const next = [0, 0];
    //     if (x2 === x1) { //  they're on the same vertical line
    //         next[0] = x1;
    //         next[1] = (y2 > y1 ? y1+1 : y1-1);
    //     } else if (y2 === y1) { // same horizontal line
    //         next[1] = y1;
    //         next[0] = (x2 > x1 ? x1+1 : x1-1);
    //     } else {
    //         next[0] = (x2 > x1 ? x1+1 : x1-1);
    //         next[1] = (y2 > y1 ? y1+1 : y1-1);
    //     }
        
    //     return 1 + _calculateSteps(next, end);
        
    // }
    
    // let steps = 0;
    // for (let i = 0; i < points.length-1; i++) {
    //     steps += _calculateSteps(points[i], points[i+1]);
    // }
    // return steps;


    // far more efficient solution that doesn't simulate the problem
    // https://leetcode.com/problems/minimum-time-visiting-all-points/discuss/436300/Short-Simple-Javascript(100_space-100_speed)
    
    let steps = 0;
    for (let i = 0; i < points.length-1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i+1];
        steps += Math.max(Math.abs(x2-x1), Math.abs(y2-y1));
    }
    return steps;
    
};