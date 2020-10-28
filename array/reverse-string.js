// https://leetcode.com/problems/reverse-string/
// tags - array
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // swap chars from start and end
    for (let i = 0, j = s.length-1; i < j; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]]; // destructuring
    }
    
    return s;
    
};