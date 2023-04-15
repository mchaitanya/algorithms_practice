// https://leetcode.com/problems/car-pooling/
// tags - array
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    // interval - see if they overlap ?
    
    // start & end are in the range [0 ... 1000]
    // at every point along the way - check how many passengers there will be
    const counts = Array(1001).fill(0);
    for (let [count, start, end] of trips) {
        // at the end mark - you drop off the passengers, so it's exclusive
        for (let i = start; i < end; i++) {
            counts[i] += count;
            if (counts[i] > capacity) {
                return false;
            }
        }
    }
    
    return true;
    
};