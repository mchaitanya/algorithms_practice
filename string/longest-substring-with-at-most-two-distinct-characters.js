// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    // another application of two pointers
    let maxLen = 0;
    let start = 0, end = 0;
    const chars = new Map();
    while (start < s.length && end < s.length) {
        // invariant - ensure window contains at most 2 distinct chars (<= 2)
        if (chars.size < 2 || chars.has(s[end])) {
            let count = chars.get(s[end]) || 0;
            chars.set(s[end], count+1)
            end++;
            maxLen = Math.max(maxLen, end-start);
        } else {
            let count = chars.get(s[start]);
            if (count > 1) {
                chars.set(s[start], count-1);
            } else {
                chars.delete(s[start]);
            }
            start++;
        }
    }
    
    return maxLen;
    
};