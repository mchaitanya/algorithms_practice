// https://leetcode.com/problems/decoded-string-at-index/
// tags - string
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
    function _isDigit(char) {
        return /[2-9]/.test(char);
    }
    
    let decoded = '';
    for (let c of S) {
        if (!_isDigit(c)) {
            decoded += c;
        } else {
            for (let i = 1, temp = decoded; decoded.length < K && i < Number(c); i++) {
                decoded += temp;
            }
        }
        
        if (decoded.length >= K) {
            return decoded[K-1];
        }
    }
    
    // guaranteed K <= length of decoded; we should never reach here
    
};