// https://leetcode.com/problems/trapping-rain-water
// tags - array
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // divide and conquer - split the array around the highest point
    function _getWater(left, heights, right) {
        if (heights.length === 0) {
            return 0;
        } else {
            // find the max height
            let split = 0;
            for (let i = 1; i < heights.length; i++) {
                if (heights[i] > heights[split]) {
                    split = i;
                }
            }
            
            let low = Math.min(left, right);
            if (heights[split] < low) {
                return heights.reduce((water, h) => water+low-h, 0);
            } else {
                return _getWater(left, heights.slice(0,split), heights[split])
                    + _getWater(heights[split], heights.slice(split+1), right);
            }
            
        }
        
    }
    
    return _getWater(0, height, 0);
};