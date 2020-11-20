// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
// tags - string, binary-search
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    // // binary search the space 1 to s.length
    // // can check if a length t is valid by scanning s in O(n) with a window of size t
    // if (s === '' || k === 0) {
    //     return 0;
    // }
    
    // function _doesSubstringExist(len) {
    //     // must contain at most K distinct characters
    //     // maintain a map of char counts - can check map size for number of distinct chars
    //     const map = new Map();
    //     for (let i = 0; i < len; i++) {
    //         let count = map.get(s[i]) || 0;
    //         map.set(s[i], count+1);
    //     }
        
    //     if (map.size <= k) {
    //         return true;
    //     }
        
    //     for (let i = len, j = 0; i < s.length; i++, j++) {
    //         // adjust the map - we add char at i and drop the one at j
    //         let charAddCount = map.get(s[i]) || 0;
    //         map.set(s[i], charAddCount + 1);
            
    //         let charDropCount = map.get(s[j]);
    //         if (charDropCount === 1) {
    //             map.delete(s[j]);
    //         } else {
    //             map.set(s[j], charDropCount - 1);
    //         }
            
    //         if (map.size <= k) {
    //             return true;
    //         }
    //     }
        
    //     return false;
    // }
    
    // let low = 1, high = s.length, result = 1;
    // while (low <= high) {
    //     const mid = Math.floor((low + high)/2);
    //     if (_doesSubstringExist(mid)) {
    //         result = mid;
    //         low = mid + 1;
    //     } else {
    //         high = mid - 1;
    //     }
    // }
    
    // return result;
    
    // sliding window approach
    let maxLen = 0;
    let start = 0, end = 0;
    const distinct = new Map();
    // the map tracks all the distinct chars in the window
    // window must contain at most K distinct chars - map size <= K
    
    while (start < s.length && end < s.length) {
        // invariant - set size <= K
        if (distinct.size < k || distinct.has(s[end])) {
            let count = distinct.get(s[end]) || 0;
            distinct.set(s[end], count+1);
            end++;
            maxLen = Math.max(maxLen, end-start);
        } else {
            // because of the invariant, here distinct size === K and s[end] isn't in it
            // advance start till set size drops < K
            let count = distinct.get(s[start]);
            if (count > 1) {
                distinct.set(s[start], count-1);
            } else {
                distinct.delete(s[start]);
            }
            start++;
        }
    }
    
    return maxLen;

};