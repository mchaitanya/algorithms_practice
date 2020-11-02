// https://leetcode.com/problems/count-and-say/
// tags - string
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // build up the sequence iteratively
    // val at index n only depends on the val at n-1
    if (n == 1) {
        return '1';
    }
    
    function _convert(str) {
        let result = '';
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            count++;
            if (i === str.length-1 || str[i+1] !== str[i]) {
                result += (count + str[i])
                count = 0;
            }
        }
        return result;
    }
    
    let str = '1';
    for (let i = 2; i <= n; i++) {
        str = _convert(str);
    }
    
    return str;
    
};