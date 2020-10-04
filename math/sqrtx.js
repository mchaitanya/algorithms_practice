// https://leetcode.com/problems/sqrtx/
// tags - math, binary-search
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // binary search the range 1 to x
    let low = 1;
    let high = x;
    while (low <= high) {
        let middle = Math.floor((low + high)/2);
        let middleSquared = middle * middle;
        if (middleSquared <= x && ((middle+1)*(middle+1) > x)) {
            return middle;
        } else if (middleSquared < x) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    
    return 0;
    
};