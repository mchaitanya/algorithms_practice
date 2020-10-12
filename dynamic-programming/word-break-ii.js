// https://leetcode.com/problems/word-break-ii/
// tags - dynamic-programming
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    // memoization
    const map = new Map([ ['', ['']] ]);
    
    (function _segment(s) {
        if (map.has(s)) {
            return map.get(s);
        }
        
        for (let word of wordDict) {
            if (s.startsWith(word)) {
                const subSentences = _segment(s.slice(word.length));
                if (subSentences.length > 0) {
                    const sentences
                     = subSentences
                        .map(s => s === '' ? word : word + ' ' + s)
                        .concat(map.get(s) || []);
                    
                    map.set(s, sentences);
                }
            }
        }
        
        if (map.has(s)) {
            return map.get(s);
        } else {
            map.set(s, []);
            return [];
        }
        
    })(s);
    
    return map.get(s);
    
};