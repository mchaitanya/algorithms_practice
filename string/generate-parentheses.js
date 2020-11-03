// https://leetcode.com/problems/generate-parentheses/
// tags - string
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // how do you check if a set of parentheses are valid
    // strategy 1 - generate all strings, then check each to see if it's valid
    // won't work if n = 8, 2^16 - exponential
    
    // something like bfs?
    let strs = ['('];
    for (let i = 1; i < 2*n; i++) {
        // each pass through the loop, we grow the size of each string by 1
        let newStrs = [];
        for (let str of strs) {
            const numLeft = str.split('').filter(c => c === '(').length;
            const numRight = str.length - numLeft;
            // we can add either a '(' or a ')'
            if (n > numLeft) {
                newStrs.push(str + '(');
            }
            
            if (numLeft > numRight) {
                newStrs.push(str + ')');
            }
        }
        strs = newStrs;
    }
    
    return strs;
};