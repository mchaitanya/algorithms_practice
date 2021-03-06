// https://leetcode.com/problems/reverse-bits/
// tags - binary
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // function _printBinary(n) {
    //     console.log(n.toString(2));
    // }
    
    // we are given there'll be 32 bits
    let arr = Array(32).fill('0');
    // _printBinary(reversed);
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            // if the ith bit is 1, then set the jth bit to 1 in the result
            // reversed |= (1 << j);
            arr[i] = '1';
        }
        // _printBinary(reversed);
    }
    return parseInt(arr.join(''), 2);
    
//     let str = n.toString(2).padStart(32, '0');
//     let reversed = str.split('').reverse().join('');
    
//     return parseInt(reversed, 2);
    
};