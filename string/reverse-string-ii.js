// https://leetcode.com/problems/reverse-string-ii/
// tags - string
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = '';
    let str = s;
    while (str.length > 0) {
        let chunk = str.slice(0,2*k);
        result += (_reverse(chunk.slice(0,k)) + chunk.slice(k));
        
        str = str.slice(2*k);
    }
    
    return result;
    
};

function _reverse(str) {
    return str.split('').reverse().join('');
}
