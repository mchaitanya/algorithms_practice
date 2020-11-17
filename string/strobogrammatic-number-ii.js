// https://leetcode.com/problems/strobogrammatic-number-ii/
// tags - string, number
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    const map = new Map([
        ['0', '0'], 
        ['1', '1'], 
        ['6', '9'], 
        ['8', '8'], 
        ['9', '6']
    ]);
    
//     const size1 = ['0', '1', '8'];
//     if (n === 1) {
//         return size1;
//     }
    
//     function _isStrobogrammatic(str) {
//         for (let i = 0, j = str.length-1; i <= j; i++, j--) {
//             if (i === j && !size1.includes(str[i])) {
//                 return false;
//             } else if (str[j] !== map.get(str[i])) {
//                 return false;
//             }
//         }
//         return true;
//     }
    
//     const result = [];
//     const low = 10**(n-1), high = 10**n - 1;
//     for (let i = low; i <= high; i++) {
//         let str = String(i);
//         if (_isStrobogrammatic(str)) {
//             result.push(str);
//         }
//     }
//     return result;
    
    
    // don't iterate through all n-digit numbers & check if they are strobogrammatic
    // directly generate the numbers - do it recursively
    function _generateNumbers(len) {
        // make sure len can't be negative
        if (len <= 0) {
            return [''];
        } else if (len === 1) {
            return ['0', '1', '8'];
        }
        
        const sub = _generateNumbers(len-2);
        const numbers = [];
        for (let [s, e] of map.entries()) {
            for (let smaller of sub) {
                numbers.push(s + smaller + e);
            }
        }
        return numbers;
        
    }
    
    const numbers = _generateNumbers(n);
    return numbers.filter(n => !n.startsWith('0') || n.length === 1);
    
};