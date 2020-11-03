// https://leetcode.com/problems/1-bit-and-2-bit-characters/
// tags - array
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    // whenever we see a 1, we have to consume the next char too
    for (let i = 0; i < bits.length; ) {
        // we're on the last char - it must be a 0
        if (i === bits.length - 1) {
            return true;
        }
        
        if (bits[i] === 1) {
            i += 2;
        } else {
            i++;
        }
        
    }
    
    return false;
    
};