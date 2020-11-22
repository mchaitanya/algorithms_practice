// https://leetcode.com/problems/combination-sum/
// tags - dynamic-programming
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // // solve recursively
    // if (target === 0) {
    //     return [[]];
    // }
    
    // const ways = [];
    // for (let c of candidates) {
    //     const leftover = target - c;
    //     if (leftover < 0) {
    //         continue;
    //     }
        
    //     for (let way of combinationSum(candidates, leftover)) {
    //         ways.push([c, ...way]);
    //     }
    // }
    
    // // eliminate duplicates here
    // const uniqueWays = [];
    // const seen = new Set();
    // for (let way of ways) {
    //     let id = way.sort().join('-');
    //     if (!seen.has(id)) {
    //         uniqueWays.push(way);
    //         seen.add(id);
    //     }
    // }
    
    // return uniqueWays;

    /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // solve with backtracking
    // at any instant, we can only be at one of the nodes
    // when we backtrack, we are moving from a node to its parent node
    
    const combinations = [];
    // we select the candidates in order, this ensures uniqueness
    // candidates at/after start can be picked to grow the combination
    function _backtrack(leftover, combination, start) {
        if (leftover < 0) {
            return; // don't explore further
        } else if (leftover === 0) {
            combinations.push([...combination]); // we've found a valid combination
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            // try candidate[i]
            combination.push(candidates[i]);
            // `start` for recursive call set to `i` - give current number another chance
            _backtrack(leftover - candidates[i], combination, i);
            // backtrack here
            combination.pop(candidates[i]);
        }
    }
    
    _backtrack(target, [], 0);
    return combinations;
    
};
    
};