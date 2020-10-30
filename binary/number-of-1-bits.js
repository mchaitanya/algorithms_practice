// https://leetcode.com/problems/number-of-1-bits/
// tags - binary
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // do it with bit-wise ops
    // to check if ith bit is 1, n & (1 << i) !== 0
    let count = 0;
    // we are told there'll be at max 32 bits
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            count++;
        }
    }
    return count;
    
//     let temp = n;
//     let count = 0;
//     while (temp > 0) {
//         if (temp % 2 === 1) {
//             count++;
//         }
//         temp = Math.floor(temp/2);
//     }
//     return count;
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
    // return (
    //     n.toString(2) // convert to binary string
    //      .split('') // convert to array of chars
    //      .filter(bit => bit === '1') // keep only ones
    //      .length
    // );
    
    
};