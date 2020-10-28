// https://leetcode.com/problems/partition-labels/
// tags - string, recursion
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    if (S.length == 0) {
        return [];
    }
    
    // process S first - S contains only lowercase chars
    // keep track of first occurence and last occurence of each char
    const firstOccurenceMap = new Map();
    for (let i = 0; i < S.length; i++) {
        if (!firstOccurenceMap.has(S[i])) {
            firstOccurenceMap.set(S[i], i);
        }
    }
    
    const lastOccurenceMap = new Map();
    for (let i = S.length-1; i >= 0; i--) {
        if (!lastOccurenceMap.has(S[i])) {
            lastOccurenceMap.set(S[i], i);
        }
    }
    
    // start is inclusive
    function _getSegmentSizes(start) {
        if (start >= S.length) {
            return [];
        }
        
        let end = lastOccurenceMap.get(S[start]);
        let i = start+1;
        while (i < end) {
            end = Math.max(end, lastOccurenceMap.get(S[i]));
            i++;
        }
        
        const sizes = [end - start + 1];
        for (let size of _getSegmentSizes(end+1)) {
            sizes.push(size);
        }
        
        return sizes;
        
    }
    
    return _getSegmentSizes(0);
    
};