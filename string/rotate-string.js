// https://leetcode.com/problems/rotate-string/
// tags - string
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A.length !== B.length) {
        return false;
    } else if (A === B) {
        return true;
    }
    
    for (let i = 0; i < A.length; i++) {
        // split A at index i
        let left = A.slice(i);
        let right = A.slice(0,i);
        if (B.startsWith(left) && B.endsWith(right)) {
            return true;
        }
    }
    return false;
    
};