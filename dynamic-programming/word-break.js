// https://leetcode.com/problems/word-break/
// tags - dynamic-programming, recursion
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s === '') {
        return true;
    }
    
    for (let word of wordDict) {
        // if one of the words matches the start of s & the remainder can be segmented
        if (s.startsWith(word) && wordBreak(s.slice(word.length), wordDict)) {
            return true;
        }
    }
    
    return false;
    
};