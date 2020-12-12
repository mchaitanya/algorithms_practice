// https://leetcode.com/problems/merge-intervals/
// tags - array, interval
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort the intervals first
    intervals.sort((in1, in2) => {
        if (in1[0] === in2[0]) {
            return in1[1] - in2[1];
        } else {
            return in1[0] - in2[0];
        }
    });
    // console.log(intervals);
    
    function _areOverlapping(in1, in2) {
        return (in2[0] <= in1[1] && in2[1] >= in1[0]);
    }
    
    function _collapse(in1, in2) {
        return [Math.min(in1[0], in2[0]), Math.max(in1[1], in2[1])];
    }
    
    // iterate through the sorted intervals, merging adjacent intervals if they overlap
    const merged = [];
    for (let i = 0, curr = intervals[0]; i < intervals.length; i++) {
        if (i === intervals.length-1) {
            merged.push(curr);
        } else if (_areOverlapping(curr, intervals[i+1])) {
            curr = _collapse(curr, intervals[i+1]);
        } else {
            merged.push(curr);
            curr = intervals[i+1];
        }
        
    }
    return merged;
    
};