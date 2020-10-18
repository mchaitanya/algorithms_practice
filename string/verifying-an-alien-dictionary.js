// https://leetcode.com/problems/verifying-an-alien-dictionary/
// string
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for (let i = 1; i < words.length; i++) {
        if (_shouldComeBefore(words[i], words[i-1])) {
            return false;
        }
    }
    
    function _shouldComeBefore(word1, word2) {
        for (let i = 0; i < word1.length && i < word2.length; i++) {
            if (word1[i] === word2[i]) {
                continue;
            } 
            
            if (order.indexOf(word1[i]) < order.indexOf(word2[i])) {
                return true;
            } else {
                return false;
            }
            
        }
        
        // all the characters must have matched so far
        return word1.length < word2.length;
    }
    
    return true;
    
};