// https://leetcode.com/problems/word-pattern/
// tags - string
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (words.length !== pattern.length) {
        return false;
    }
    
    const map = new Map(); // store mapping from pattern char to word
    const seen = new Set();
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const char = pattern[i];
        if (map.has(char)) {
            if (map.get(char) !== word) {
                return false;
            }
        } else {
            if (seen.has(word)) {
                return false;
            }
            seen.add(word);
            map.set(char, word);
        }
        
    }
    
    return true;
    
};