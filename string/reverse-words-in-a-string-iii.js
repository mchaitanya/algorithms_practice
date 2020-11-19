// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // return (
    //     s.split(' ') // break into words
    //      .map(w => w.split('').reverse().join('')) // reverse each word
    //      .join(' ') // join them back
    // );

    let result = '';
    for (let i = 0, word = []; i < s.length; i++) {
        if (s[i] === ' ') {
            result += ' ';
            continue;
        }
        
        word.push(s[i]);
        if (i === s.length-1 || s[i+1] === ' ') {
            result += word.reverse().join('');
            word = [];
        }
    }
    return result;
    
};