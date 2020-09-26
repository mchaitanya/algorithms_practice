// https://leetcode.com/problems/valid-anagram/
// tags - string, hash-table
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    // store character counts from s in a map
    for (const c of s) {
        const count = map.get(c) || 0;
        map.set(c, count+1);
    }
    
    // decrement counts & delete characters from t
    for (const c of t) {        
        count = map.get(c);
        if (count == undefined) {
            return false;
        } else if (count === 1) {
            map.delete(c);
        } else {
            map.set(c, count - 1);
        }
        
    }
    
    // check if map is empty
    return map.size === 0;
    
};