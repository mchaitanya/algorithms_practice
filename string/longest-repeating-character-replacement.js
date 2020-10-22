// https://leetcode.com/problems/longest-repeating-character-replacement/
// tags - string
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    function _printMap(map) {
        const temp = Array.from(map.entries())
            .filter(e => e[1] !== 0)
            .map(e => e[0] + ': ' + e[1])
            .join(', ');
        console.log('{ ' + temp + ' }');
    }
    
    // scan s with a moving window of size len
    // check if all chars in this substring can be flipped to the same char in k moves
    function _canBuildSubstring(len) {
        // console.log('Checking ' + len);
        const map = new Map();
        for (let i = 0, code = 'A'.charCodeAt(0); i < 26; i++, code++) {
            map.set(String.fromCharCode(code), 0);
        }
        // _printMap(map);
        
        // count the chars in the first window
        // for subsequent windows, we'll just update the counts
        for (let i = 0; i < len; i++) {
            let count = map.get(s[i]) + 1;
            // console.log(s[i] + ': ' + count);
            if (count + k >= len) {
                return true;
            }
            map.set(s[i], count);
        }
        
        // slide the window one char to the right with every pass
        for (let start = 1, end = start + len; end <= s.length ; start++, end++) {
            // _printMap(map);
            const charDropped = s[start - 1], newCharDroppedCount = map.get(charDropped) - 1;
            map.set(charDropped, newCharDroppedCount);
            const charAdded = s[end - 1], newCharAddedCount = map.get(charAdded) + 1;
            map.set(charAdded, newCharAddedCount);
            
            if (newCharAddedCount + k >= len) {
                return true;
            }
            
        }
        
        return false;
    }
    
    // binary search space from k to N
    let low = k, high = s.length;
    // here we're guaranteed that the search will yield an answer
    // okay to initialize to a non-empty value
    let result = Math.min(low, high); 
    while (low <= high) {
        const mid = Math.floor((low + high)/2);
        if (_canBuildSubstring(mid)) {
            // console.log(mid + ' true');
            result = mid;
            low = mid + 1; // search right half
        } else {
            // console.log(mid + ' false');
            high = mid - 1; // search left half
        }
        
    }
    
    return result;
    
};