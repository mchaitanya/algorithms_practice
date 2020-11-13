// https://leetcode.com/problems/roman-to-integer/
// tags - string
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    // process the roman numeral from the left
    for (let i = 0; i < s.length; i++) {
        let factor = 1;
        switch (s[i]) {
            case 'V':
                num += 5; break;
            case 'L': 
                num += 50; break;
            case 'D':
                num += 500; break;
            case 'M': 
                num += 1000; break;
            case 'I':
                if (i+1 < s.length && (s[i+1] === 'V' || s[i+1] === 'X')) {
                    factor = (s[i+1] === 'V' ? 4 : 9);
                    i++; // consume the next char too
                }
                num += (1 * factor);
                break;
            case 'X':
                if (i+1 < s.length && (s[i+1] === 'L' || s[i+1] === 'C')) {
                    factor = (s[i+1] === 'L' ? 4 : 9);
                    i++;
                }
                num += (10 * factor);
                break;
            case 'C':
                if (i+1 < s.length && (s[i+1] === 'D' || s[i+1] === 'M')) {
                    factor = (s[i+1] === 'D' ? 4 : 9);
                    i++;
                }
                num += (100 * factor);
                break;
        }
    }
    
    return num;
    
};