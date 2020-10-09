// https://leetcode.com/problems/is-subsequence/
// tags - string
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === '') {
        return true;
    }
    
    // i iterates over s
    // j iterates over t
    for (let i = 0, j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++; // there's a match, move i forward
            if (i === s.length) {
                return true;
            }
        }
        
    }
    return false;
    
};