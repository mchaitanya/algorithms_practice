// https://leetcode.com/problems/minimum-window-substring/
// tags - string
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // naive O(n^3) - check all substrings
    function _getCharCounts(str, start, end) {
        const map = new Map();
        for (let i = start; i <= end; i++) {
            let count = map.get(str[i]) || 0;
            map.set(str[i], count+1);
        }
        return map;
    }
    
    const charCountsT = _getCharCounts(t, 0, t.length-1);
    function _containsCharsInT(start, end) {
        const charCounts = _getCharCounts(s, start, end);
        for (let [char, count] of charCountsT.entries()) {
            if (!charCounts.has(char) || count > charCounts.get(char)) {
                return false;
            }
        }
        return true;
    }
    
    let substring = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (_containsCharsInT(i, j)) { // i & j inclusive
                if (substring === '' || j-i+1 < substring.length) {
                    substring = s.slice(i, j+1);
                }
            }
        }
    }
    return substring;
    
};