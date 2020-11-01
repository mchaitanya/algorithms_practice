// https://leetcode.com/problems/longest-palindrome/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let len = 0;
    const map = new Map(); // map chars to their counts
    for (let char of s) {
        let oldCount = map.get(char) || 0;
        if (oldCount === 0) {
            map.set(char, 1);
        } else if (oldCount === 1) {
            map.set(char, 0); // consume both occurences of the char for palindrome
            len += 2;
        }
    }
    
    // map can only contains counts of 0 or 1
    for (let count of map.values()) {
        if (count === 1) {
            len++;
            break;
        }
    }
    
    return len;
    
};