// https://leetcode.com/problems/combination-sum/
// tags - dynamic-programming
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // solve recursively
    if (target === 0) {
        return [[]];
    }
    
    const ways = [];
    for (let c of candidates) {
        const leftover = target - c;
        if (leftover < 0) {
            continue;
        }
        
        for (let way of combinationSum(candidates, leftover)) {
            ways.push([c, ...way]);
        }
    }
    
    // eliminate duplicates here
    const uniqueWays = [];
    const seen = new Set();
    for (let way of ways) {
        let id = way.sort().join('-');
        if (!seen.has(id)) {
            uniqueWays.push(way);
            seen.add(id);
        }
    }
    
    return uniqueWays;
    
};