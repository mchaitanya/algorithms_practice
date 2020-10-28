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
    // maps each char to its index from 0 to 25;
    const map = new Map();
    for (let i = 0, code = 'a'.charCodeAt(0); i < 26; i++, code++) {
        map.set(String.fromCharCode(code), i);
    }
    
    const lastOccurences = Array(26).fill(undefined);
    for (let i = 0; i < S.length; i++) {
        lastOccurences[ map.get(S[i]) ] = i;
    }
    
    // start is inclusive
    function _getSegmentSizes(start) {
        if (start >= S.length) {
            return [];
        }
        
        let end = lastOccurences[ map.get(S[start]) ]
        let i = start+1;
        while (i < end) {
            end = Math.max(end, lastOccurences[ map.get(S[i]) ]);
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