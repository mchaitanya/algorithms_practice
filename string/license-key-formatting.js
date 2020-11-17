// https://leetcode.com/problems/license-key-formatting/
// tags - string
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    // groups of alphanumeric chars separated by dashes
    // each group should have exactly K chars; first group can be shorter but at least one char
    // convert all lowercase chars to uppercase
    
    const clean = S.toUpperCase().split('-').join('');
    // console.log(clean);
    
    let chars = [];
    for (let i = clean.length-1, count = 0; i >= 0; i--) {
        count++;
        chars.push(clean[i])
        if (count === K) {
            count = 0;
            if (i > 0) {
                chars.push('-');
            }
        }
    }
    
    return chars.reverse().join('');
    
};