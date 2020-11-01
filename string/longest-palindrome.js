// https://leetcode.com/problems/longest-palindrome/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map(); // map chars to their counts
    for (let char of s) {
        const count = map.get(char) || 0;
        map.set(char, count+1);
    }
    
    let len = 0;
    let anyOdd = false;
    for (let count of map.values()) {
        if (count % 2 === 0) {
            len += count;
        } else {
            len += (count-1);
            anyOdd = true;
        }
    }
    
    return (anyOdd ? len+1 : len);
    
};