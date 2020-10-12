// https://leetcode.com/problems/split-a-string-in-balanced-strings/
// tags - string, greedy
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let strCount = 0;
    let rcount = 0, lcount = 0;
    for (let char of s) {
        if (char === 'R') {
            rcount++;
        } else {
            lcount++;
        }
        
        if (rcount === lcount) {
            strCount++;
            rcount = 0;
            lcount = 0;
        }
        
    }
    
    return strCount;
    
};