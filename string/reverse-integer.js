// https://leetcode.com/problems/reverse-integer/
// tags - string, math
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = String(Math.abs(x));
    const reversed = str.split('').reverse().join('');
    
    let limit = 2**31;
    const result = Math.sign(x) * Number(reversed);
    if (result >= -limit && result < limit) {
        return result;
    } else {
        return 0;
    }
};