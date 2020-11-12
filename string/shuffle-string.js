// https://leetcode.com/problems/shuffle-string/
// tags - string
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const chars = Array(s.length);
    for (let i = 0; i < s.length; i++) {
        chars[indices[i]] = s[i];
    }
    
    return chars.join('');
    
};