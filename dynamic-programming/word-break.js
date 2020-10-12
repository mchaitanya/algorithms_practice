// https://leetcode.com/problems/word-break/
// tags - dynamic-programming, recursion
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const charsS = new Set(s);
    const charsWordDict = new Set();
    for (let word of wordDict) {
        for (let letter of word) {
            charsWordDict.add(letter);
        }
    }
    
    // check if there are any chars in s that don't even occur in wordDict
    for (let char of charsS) {
        if (!charsWordDict.has(char)) {
            return false;
        }
    }
    
    // check recursively
    return (function _isSegmentable(s) {
        if (s === '') {
            return true;
        }

        for (let word of wordDict) {
            // if one of the words matches the start of s & the remainder can be segmented
            if (s.startsWith(word) && _isSegmentable(s.slice(word.length))) {
                return true;
            }
        }

        return false;
    })(s);
    
};