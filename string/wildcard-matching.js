// https://leetcode.com/problems/wildcard-matching/
// tags - dynamic-programming, greedy
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // greedy with backtracking
    if (p === '*') {
        return true;
    } else if (s === p) {
        return true;
    } else if (s.length === 0) {
        return p.split('').every(c => c === '*');
    } else if (s.length === 1) {
        // by this point we've checked the case where p may be a char or '*'
        return p === '?';
    } else if (p.length > 0) {
        // recurse on a smaller s
        // case 1 - p[0] is either a char or '?'
        // consume the char from both s & p
        if (p[0] === '?' || s[0] === p[0]) {
            if (isMatch(s.slice(1), p.slice(1))) {
                return true;
            }
        }
        
        // case 2 - p[0] is '*'
        if (p[0] === '*') {
            // case 2a - '*' matches the empty string
            if (isMatch(s, p.slice(1))) {
                return true;
            }
            
            // case 2b - '*' matches one char
            if (isMatch(s.slice(1), p.slice(1))) {
                return true;
            }
            
            // case 2c - '*' matches more than one char
            if (isMatch(s.slice(1), p)) {
                return true;
            }
        }
        
    }
    
    return false;
    
};