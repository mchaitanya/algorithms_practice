// https://leetcode.com/problems/wildcard-matching/
// tags - dynamic-programming, greedy
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Map();;
    
    // greedy with backtracking
    return (function _isMatch(s, p) {
        // key used to store intermediate results in the memo map
        const key = s + '-' + p;
        
        if (p === '*') {
            return true;
        } else if (s === p) {
            return true;
        } else if (s.length === 0) {
            return p.split('').every(c => c === '*');
        } else if (p.length > 0) {
            // check the memo map
            if (memo.has(key)) {
                return memo.get(key);
            }
            
            // recurse on a new s & p combination - one of them smaller than before
            // case 1 - p[0] is either a char or '?'
            // consume the char from both s & p
            if (p[0] === '?' || s[0] === p[0]) {
                if (_isMatch(s.slice(1), p.slice(1))) {
                    memo.set(key, true);
                    return true;
                }
            }

            // case 2 - p[0] is '*'
            if (p[0] === '*') {
                // case 2a - '*' matches the empty string
                if (_isMatch(s, p.slice(1))) {
                    memo.set(key, true);
                    return true;
                }

                // case 2b - '*' matches one char
                if (_isMatch(s.slice(1), p.slice(1))) {
                    memo.set(key, true);
                    return true;
                }

                // case 2c - '*' matches more than one char
                if (_isMatch(s.slice(1), p)) {
                    memo.set(key, true);
                    return true;
                }
            }

        }

        memo.set(key, false);
        return false;
        
    })(s, p);
    
    
};