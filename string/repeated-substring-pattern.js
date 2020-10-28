// https://leetcode.com/problems/repeated-substring-pattern/
// tags - string
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // the substring size has to be a factor of s.length
    // first compute factors, then check if a substring of that size can be used to construct s
    if (s.length <= 1) {
        return false;
    }
    
    const factors = [1];
    for (let i = 2; i*i <= s.length; i++) {
        if (s.length % i === 0) {
            factors.push(i, (s.length / i));
        }
    }
    
    function _substringCanBeRepeatedToMakeS(size) {
        for (let i = 0, j = size; j < s.length; i++, j++) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;
    }
    
    for (const f of factors) {
        if (_substringCanBeRepeatedToMakeS(f)) {
            return true;
        }
    }
    
    return false;
    
};