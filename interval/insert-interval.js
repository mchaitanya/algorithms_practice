// https://leetcode.com/problems/insert-interval/
// tags - array, interval
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    //     function _areOverlapping(a, b) {
    //         return (b[0] <= a[1] && b[1] >= a[0]);
    //     }
        
    //     function _collapse(a, b) {
    //         return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
    //     }
        
        // // if we can insert the newInterval in the right place, then we can just merge the intervals 
        // const result = [];
        // // 
        // return result;
        
        if (intervals.length === 0) {
            return [newInterval];
        }
        
        const furthest = Math.max(intervals[intervals.length-1][1], newInterval[1]);
        const times = Array(furthest + 1).fill(null);
        for (let i = 0; i < intervals.length; i++) {
            let [start, end] = intervals[i];
            for (let j = start; j <= end; j++) {
                times[j] = i;
            }
        }
        // console.table(times);
        
        const [newStart, newEnd] = newInterval;
        // start
        for (let j = newStart-1; j >= 0 && times[j] != null && times[j] === times[newStart]; j--) {
            times[j] = intervals.length;
        }
        // end
        for (let j = newEnd+1; j < times.length && times[j] != null && times[j] === times[newEnd]; j++) {
            times[j] = intervals.length;
        }
        // middle
        for (let j = newStart; j <= newEnd; j++) {
            times[j] = intervals.length;
        }
        
        const result = [];
        for (let i = 0, start = null; i < times.length; i++) {
            if (start == null && times[i] != null) {
                start = i;
            }
            
            if (start != null && (i === times.length-1 || times[i] !== times[i+1])) {
                result.push([start, i]);
                start = null;
            }
        }
        return result;
        
    };
    