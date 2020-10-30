// https://leetcode.com/problems/counting-bits/
// tags - binary
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    //     function _countBitsSet(num) {
    //         return num.toString(2).split('').filter(b => b === '1').length;
    //     }
        
    //     const result = [];
    //     for (let i = 0; i <= num; i++) {
    //         result.push(_countBitsSet(i));
    //     }
    //     return result;
        
        // bitsSet(n)
        // if odd = 1 + bitsSet((n-1)/2)
        // if even = bitsSet(n/2)
        let result = Array(num+1).fill(0);
        for (let i = 1; i <= num; i++) {
            if (i % 2 == 1) {
                result[i] = result[(i-1)/2] + 1;
            } else {
                result[i] = result[i/2];
            }
        }
        return result;
        
        
    };