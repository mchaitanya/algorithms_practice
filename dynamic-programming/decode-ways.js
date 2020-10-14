// https://leetcode.com/problems/decode-ways/
// tags - dynamic-programming
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const _encodings = new Set();
    for (let i = 1; i <= 26; i++) {
        _encodings.add(String(i));
    }
    
    const memo = new Map();
    (function _countDecodings(s) {
        if (memo.has(s)) {
            return memo.get(s);
        }
        
        // note s is guaranteed to never be empty in the problem input
        // we make sure s is never empty as the recursion proceeds
        let count = 0;
        if (s.length >= 1 && _encodings.has(s[0])) {
            count += (s.length === 1 ? 1 : _countDecodings(s.slice(1)));
        } 
        
        if (s.length >= 2 && _encodings.has(s[0] + s[1])) {
            count += (s.length === 2 ? 1 : _countDecodings(s.slice(2)));
        }
        
        memo.set(s, count);
        return count;
        
    })(s);
    
    return memo.get(s);
    
};