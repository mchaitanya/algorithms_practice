// https://leetcode.com/problems/combination-sum/
// tags - dynamic-programming
function combinationSum(candidates: number[], target: number): number[][] {
    // solve recursively with memoization
    const memo: Map<number, number[][]> = new Map();
    
    (function _findCombinations(num: number): number[][] {
        if (memo.has(num)) {
            return <number[][]> memo.get(num);
        }
        
        let combinations = [];
        for (let candidate of candidates) {
            if (candidate === num) {
                combinations.push([candidate]);
            } else if (num > candidate) {
                for (let sub of _findCombinations(num - candidate)) {
                    if (sub.length > 0) {
                        combinations.push([candidate, ...sub]);
                    }
                }
            }
        }
        
        // weed out the duplicates
        const uniqueCombinations: number[][] = [];
        const normalized: Set<string> = new Set();
        for (let combination of combinations) {
            let key = combination.sort().join('-');
            if (!normalized.has(key)) {
                normalized.add(key);
                uniqueCombinations.push(combination);
            }
        }
        
        memo.set(num, uniqueCombinations);
        return uniqueCombinations;
        
    })(target);
    
    return <number[][]> memo.get(target);
    
};