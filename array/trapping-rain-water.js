// https://leetcode.com/problems/trapping-rain-water
// tags - array
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // // divide and conquer - split the array around the highest point
    // function _getWater(left, heights, right) {
    //     if (heights.length === 0) {
    //         return 0;
    //     }

    //     // find the max height
    //     let split = 0;
    //     for (let i = 1; i < heights.length; i++) {
    //         if (heights[i] > heights[split]) {
    //             split = i;
    //         }
    //     }
        
    //     let low = Math.min(left, right);
    //     if (heights[split] < low) {
    //         return heights.reduce((water, h) => water+low-h, 0);
    //     } else {
    //         return _getWater(left, heights.slice(0,split), heights[split])
    //             + _getWater(heights[split], heights.slice(split+1), right);
    //     }
        
    // }
    
    // return _getWater(0, height, 0);

    // O(n) 2 pass solution
    if (height.length === 0) {
        return 0;
    }
    
    const leftMaxSoFar = Array(height.length).fill(height[0]);
    for (let i = 1; i < height.length; i++) {
        leftMaxSoFar[i] = Math.max(height[i], leftMaxSoFar[i-1]);
    }
    // console.log(leftMaxSoFar);
    
    const rightMaxSoFar = Array(height.length).fill(height[height.length-1]);
    for (let i = height.length-2; i >= 0; i--) {
        rightMaxSoFar[i] = Math.max(height[i], rightMaxSoFar[i+1]);
    }
    // console.log(rightMaxSoFar);
    
    let water = 0;
    for (let i = 0; i < height.length; i++) {
        water += (Math.min(leftMaxSoFar[i], rightMaxSoFar[i]) - height[i]);
    }
    
    return water;
};