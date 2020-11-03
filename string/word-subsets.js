// https://leetcode.com/problems/word-subsets/
// tags - string
/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    // map each char to its index
    const map = new Map();
    for (let i = 0, code = 'a'.charCodeAt(0); i < 26; i++, code++) {
        map.set(String.fromCharCode(code), i);
    }
    
    function _getCounts(w) {
        const counts = Array(26).fill(0);
        for (let c of w) {
            counts[map.get(c)]++;
        }
        return counts;
    }
    
    const maxCounts = Array(26).fill(0);
    for (let i = 0; i < B.length; i++) {
        const counts = _getCounts(B[i]);
        for (let i = 0; i < 26; i++) {
            maxCounts[i] = Math.max(maxCounts[i], counts[i]);
        }
    }
    
    function _isUniversal(w) {
        const counts = _getCounts(w);
        for (let i = 0; i < 26; i++) {
            if (counts[i] < maxCounts[i]) {
                return false;
            }
        }
        return true;
    }
    
    return A.filter(w => _isUniversal(w));
};