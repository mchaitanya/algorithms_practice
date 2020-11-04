// https://leetcode.com/problems/palindrome-number/
// tags - number, string
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //     const str = String(x);
    //     for (let i = 0, j = str.length-1; i < j; i++, j--) {
    //         if (str[i] !== str[j]) {
    //             return false;
    //         }
    //     }
        
    //     return true;
        
        // without converting to a string - extract all the digits into an array
        if (x < 0) {
            return false;
        }
        
        const digits = [];
        let temp = x;
        while (x > 0) {
            digits.push(x%10); // will be in reversed order - doesn't matter
            x = Math.floor(x/10);
        }
        
        for (let i = 0, j = digits.length-1; i < j; i++, j--) {
            if (digits[i] !== digits[j]) {
                return false;
            }
        }
        
        return true;
        
    };