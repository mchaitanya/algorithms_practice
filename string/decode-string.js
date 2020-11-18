// https://leetcode.com/problems/decode-string/
// tags - string, recursion
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    function _isDigit(char) {
        return /[0-9]/.test(char);
    }
    
    // split into chunks - decode each, assemble the result
    let result = '';
    for (let i = 0, chunk = '', numLeft = 0, numRight = 0; i < s.length; i++) {
        chunk += s[i];
        if (_isDigit(s[i])) {
            continue;
        }
        
        if (s[i] === '[') {
            numLeft++;
        } else if (s[i] === ']') {
            numRight++;
        }
        
        // chunk ends when numLeft same as numRight
        if (numLeft === numRight) {
            if (chunk.length === 1) {
                result += chunk;
            } else {
                // split the chunk into the number and the encoded string
                const leftIx = chunk.indexOf('[');
                const times = Number(chunk.slice(0, leftIx));
                const encoded = chunk.slice(leftIx+1, chunk.length-1); // skip last ]
                result += decodeString(encoded).repeat(times);
            }
            
            numLeft = numRight = 0;
            chunk = '';
        }
        
    }
    
    return result;
    
};