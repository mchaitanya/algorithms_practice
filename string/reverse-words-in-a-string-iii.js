// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return (
        s.split(' ') // break into words
         .map(w => w.split('').reverse().join('')) // reverse each word
         .join(' ') // join them back
    );
};