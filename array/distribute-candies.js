// https://leetcode.com/problems/distribute-candies/
// tags - array
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    // count the number of candy types
    const distinctCandies = new Set(candies);
    // console.log(candies);
    // console.log(distinctCandies);
    
    return Math.min(candies.length/2, distinctCandies.size);
};