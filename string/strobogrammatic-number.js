// https://leetcode.com/problems/strobogrammatic-number/
// tags - string, number
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const map = new Map([
        ['0', '0'],
        ['1', '1'], 
        ['6', '9'], 
        ['8', '8'], 
        ['9', '6']
    ]);
    
    for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
        if (!map.has(num[i]) || map.get(num[i]) !== num[j]) {
            return false;
        }
    }
    
    return true;
    
};