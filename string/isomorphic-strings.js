// https://leetcode.com/problems/isomorphic-strings/
// tags - string, hashmap
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map();
    const used = new Set();
    // can assume both s and t have the same length
    for (let i = 0; i < s.length; i++) {
        let mappedChar = map.get(s[i]);
        if (mappedChar == undefined) {
            if (used.has(t[i])) {
                return false;
            } else {
                map.set(s[i], t[i]);
                used.add(t[i]);
            }
        } else if (mappedChar !== t[i]) {
            return false;
        }
    }
    
    return true;
    
};