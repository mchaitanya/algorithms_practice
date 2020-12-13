// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// tags - string, recursion
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    
    const map = new Map([
        ['2', ['a', 'b', 'c']], 
        ['3', ['d', 'e', 'f']], 
        ['4', ['g', 'h', 'i']], 
        ['5', ['j', 'k', 'l']], 
        ['6', ['m', 'n', 'o']], 
        ['7', ['p', 'q', 'r', 's']], 
        ['8', ['t', 'u', 'v']], 
        ['9', ['w', 'x', 'y', 'z']]
    ]);
    
    function _generateCombinations(start=0) {
        if (start === digits.length-1) {
            return map.get(digits[start]);
        }
        
        let result = [];
        for (let sub of _generateCombinations(start+1)) {
            for (let char of map.get(digits[start])) {
                result.push(char + sub);
            }
        }
        return result;
    }

    return _generateCombinations();
    
};
